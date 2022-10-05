# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

import logging
import json
from enum import Enum
from time import sleep
from typing import Any, Dict, Optional, Tuple, TYPE_CHECKING

from flask import current_app
from selenium.common.exceptions import (
    StaleElementReferenceException,
    TimeoutException,
    WebDriverException,
)
from selenium.webdriver import chrome, firefox, FirefoxProfile
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from superset.extensions import machine_auth_provider_factory
from superset.utils.retries import retry_call

WindowSize = Tuple[int, int]
logger = logging.getLogger(__name__)


if TYPE_CHECKING:
    from flask_appbuilder.security.sqla.models import User


class DashboardStandaloneMode(Enum):
    HIDE_NAV = 1
    HIDE_NAV_AND_TITLE = 2
    REPORT = 3


class WebDriverProxy:
    def __init__(self, driver_type: str, window: Optional[WindowSize] = None):
        self._driver_type = driver_type
        self._window: WindowSize = window or (800, 600)
        self._screenshot_locate_wait = current_app.config["SCREENSHOT_LOCATE_WAIT"]
        self._screenshot_load_wait = current_app.config["SCREENSHOT_LOAD_WAIT"]
        self._screenshot_retries = 3

    def create(self) -> WebDriver:
        pixel_density = current_app.config["WEBDRIVER_WINDOW"].get("pixel_density", 1)
        if self._driver_type == "firefox":
            driver_class = firefox.webdriver.WebDriver
            options = firefox.options.Options()
            profile = FirefoxProfile()
            profile.set_preference("layout.css.devPixelsPerPx", str(pixel_density))
            kwargs: Dict[Any, Any] = dict(options=options, firefox_profile=profile)
        elif self._driver_type == "chrome":
            driver_class = chrome.webdriver.WebDriver
            options = chrome.options.Options()
            options.add_argument(f"--force-device-scale-factor={pixel_density}")
            options.add_argument(f"--window-size={self._window[0]},{self._window[1]}")
            kwargs = dict(options=options)
        else:
            raise Exception(f"Webdriver name ({self._driver_type}) not supported")
        # Prepare args for the webdriver init

        # Add additional configured options
        for arg in current_app.config["WEBDRIVER_OPTION_ARGS"]:
            options.add_argument(arg)

        kwargs.update(current_app.config["WEBDRIVER_CONFIGURATION"])
        logger.info("Init selenium driver")

        return driver_class(**kwargs)

    def auth(self, user: "User") -> WebDriver:
        driver = self.create()
        return machine_auth_provider_factory.instance.authenticate_webdriver(
            driver, user
        )

    @staticmethod
    def destroy(driver: WebDriver, tries: int = 2) -> None:
        """Destroy a driver"""
        # This is some very flaky code in selenium. Hence the retries
        # and catch-all exceptions
        try:
            retry_call(driver.close, max_tries=tries)
        except Exception:  # pylint: disable=broad-except
            pass
        try:
            driver.quit()
        except Exception:  # pylint: disable=broad-except
            pass

    def get_screenshot(
        self, url: str, element_name: str, user: "User"
    ) -> Optional[bytes]:
        driver = self.auth(user)
        driver.set_window_size(*self._window)
        driver.get(url)
        img: Optional[bytes] = None
        selenium_headstart = current_app.config["SCREENSHOT_SELENIUM_HEADSTART"]
        logger.debug("Sleeping for %i seconds", selenium_headstart)
        sleep(selenium_headstart)

        try:
            logger.info("Wait for the presence of %s", element_name)
            element = WebDriverWait(driver, self._screenshot_locate_wait).until(
                EC.presence_of_element_located((By.CLASS_NAME, element_name))
            )
            logger.info("Wait for .loading to be done")
            WebDriverWait(driver, self._screenshot_load_wait).until_not(
                EC.presence_of_all_elements_located((By.CLASS_NAME, "loading"))
            )
            logger.info("Wait for chart to have content")
            WebDriverWait(driver, self._screenshot_locate_wait).until(
                EC.visibility_of_all_elements_located(
                    (By.CLASS_NAME, "slice_container")
                )
            )
            selenium_animation_wait = current_app.config[
                "SCREENSHOT_SELENIUM_ANIMATION_WAIT"
            ]
            logger.info("Wait %i seconds for chart animation", selenium_animation_wait)
            sleep(selenium_animation_wait)
            logger.info("Taking a PNG screenshot of url %s", url)

            self.capture_unexpected_errors(driver)

            img = element.screenshot_as_png
        except TimeoutException:
            logger.warning("Selenium timed out requesting url %s", url, exc_info=True)
        except StaleElementReferenceException:
            logger.error(
                "Selenium got a stale element while requesting url %s",
                url,
                exc_info=True,
            )
        except WebDriverException as ex:
            logger.error(ex, exc_info=True)
        finally:
            self.destroy(driver, current_app.config["SCREENSHOT_SELENIUM_RETRIES"])
        return img

    def capture_unexpected_errors(self, driver: WebDriver):
        logger.info("==========zhaorui test=================")
        logger.info("locating unexpected errors")
        error_messages = []

        try:
            alert_divs = driver.find_elements(By.XPATH, "//div[@role = 'alert']")
            #logger.info(f"alert_divs: {alert_divs}")
            logger.info(
                f"{len(alert_divs)} alert elements have been found in the screenshot")

            for alert_div in alert_divs:

                # data_test_chart_id = ""
                # data_test_chart_id_div = alert_div
                #
                # while data_test_chart_id_div and not id:
                #     data_test_chart_id_div = data_test_chart_id_div.parent
                #     data_test_chart_id = \
                #         data_test_chart_id_div.get_attribute("data-test-chart-id")

                # See More button
                alert_div.find_element(By.XPATH, ".//*[@role = 'button']").click()

                # wait for modal to show up
                modal = WebDriverWait(driver, 10).until(
                    EC.visibility_of_any_elements_located(
                        (By.CLASS_NAME, "ant-modal-content")
                    )
                )[0]

                err_msg_div = modal.find_element(By.CLASS_NAME, "ant-modal-body")
                error_messages.append(err_msg_div.text)

                logger.info(
                    f"{alert_div.get_attribute('data-test-chart-name')} :"
                    f" {err_msg_div.text}")

                # close modal after collecting error messages
                modal.find_element(By.CLASS_NAME, "ant-modal-close").click()

                # wait until the modal becomes invisible
                WebDriverWait(driver, 10).until(
                    # EC.invisibility_of_element_located(
                    #     (By.CLASS_NAME, "ant-modal-content")
                    # )
                    EC.invisibility_of_element(modal)
                )

                err_msg = err_msg_div.text
                error_as_html = err_msg_div.get_attribute("innerHTML")
                try:
                    driver.execute_script(
                        f"arguments[0].innerHTML = '{err_msg_div.text}'",
                        alert_div
                    )

                    logger.info(f"updating {alert_div} to {err_msg}")
                    logger.info(
                        f'alert_div: \n{alert_div.get_attribute("innerHTML")}\n')
                except:
                    logger.error("Failed to update error messages using alert_div",
                                 exc_info=True)

                # try:
                #     driver.execute_script(
                #         f"arguments[0].innerText = '{err_msg_div.text}'",
                #         driver.find_element(
                #             By.XPATH,
                #             f"//*[@data-test-chart-id] = '{data_test_chart_id}'"
                #         ).find_element(".//div[@role = 'alert'")
                #     )
                # except:
                #     logger.error("Failed to update error messages using chart id",
                #                  exc_info=True)

        except:
            logger.error("Failed to capture unexpected errors", exc_info=True)

        logger.info(f"Errors: {error_messages}")
        logger.info("=========================================================")

# Changelog

## Unreleased


## 3.30.1 - 2023/1/3

### Features
- Additional internal event logs
### Bug fixes
- fixed bug in mobile environment

## 3.30.0 - 2022/12/19

### Features
- Deprecated "Content" match level value in favor of "IgnoreColors"
- Add Support for storyStoreV7 flag
### Bug fixes
- Handle fake shadowRoot with UFG
- Handed error during polling in long requests to eyes server

## 3.29.4 - 2022/9/12

### Features
### Bug fixes
- Prevent Eyes-Storybook from hanging when there is a failure to take DOM

## 3.29.3 - 2022/8/18

### Features
### Bug fixes
- Better support in DOM slot element
- fix error handling

## 3.29.2 - 2022/7/14

### Features
- Allow configuration file to be loaded from ancestor directories
### Bug fixes
- Fixed bug where a failure in a single UFG environment fails all other environments in the same configuration

## 3.29.1 - 2022/6/16

### Features
- Allowed `` values in custom properties
- Add special attribute for pseudo elements
- Support padding for regions in the following region types - ignoreRegions, layoutRegions, strictRegions, contentRegions
### Bug fixes
- Fixed broken links to enums implementation in the README.md
- Fix rendering issues with Salesforce Lightning design system
- Add timeout when attempting to get data for a story

## 3.29.0 - 2022/6/2

### Features
- Dorp support for Node.js versions <=12
### Bug fixes

## 3.28.0 - 2022/5/26

### Features
- Support [Storybook interactions](https://storybook.js.org/docs/react/essentials/interactions). For stories which have a `Play` function defined, the screenshot will be taken automatically after the `Play` flow is done.
### Bug fixes
- added `properties` and `notifyOnCompletion` as optional Types of Batch (for TS)
- Allow running with self-signed certificates

## 3.27.6 - 2022/4/13

### Features
### Bug fixes
- Support data urls in iframes

## 3.27.5 - 2022/3/29

### Features
- Preserve search parameters in Storybook URLs
### Bug fixes

## 3.27.4 - 2022/2/9

- updated to @applitools/driver@1.4.9 (from 1.4.7)
- updated to @applitools/eyes-sdk-core@13.0.0 (from 12.24.9)
- updated to @applitools/logger@1.0.9 (from 1.0.8)
- updated to @applitools/visual-grid-client@15.8.62 (from 15.8.55)
- support adding new test(s) and the value of saveNewTest is false will warn
- README.md update default value of 'exitcode' to 'true' (from 'false')
- updated to @applitools/driver@1.4.12 (from 1.4.9)
- updated to @applitools/eyes-sdk-core@13.0.2 (from 13.0.0)
- updated to @applitools/logger@1.0.10 (from 1.0.9)
- updated to @applitools/visual-grid-client@15.8.63 (from 15.8.62)
- updated to @applitools/utils@1.2.12 (from 1.2.11)

## 3.27.3 - 2022/1/26

- avoid unwanted page reloading due to unknown query parameters
- updated to @applitools/driver@1.4.9 (from 1.4.7)
- updated to @applitools/eyes-sdk-core@13.0.0 (from 12.24.9)
- updated to @applitools/logger@1.0.9 (from 1.0.8)
- updated to @applitools/visual-grid-client@15.8.62 (from 15.8.55)

## 3.27.2 - 2021/12/23

- updated to @applitools/driver@1.4.7 (from 1.4.5)
- updated to @applitools/eyes-sdk-core@12.24.9 (from 12.24.7)
- updated to @applitools/logger@1.0.8 (from 1.0.7)
- updated to @applitools/visual-grid-client@15.8.55 (from 15.8.53)

## 3.27.1 - 2021/12/21

- add support for storybook api 6.4
- updated to @applitools/driver@1.4.5 (from 1.3.5)
- updated to @applitools/eyes-sdk-core@12.24.7 (from 12.24.5)
- updated to @applitools/logger@1.0.7 (from 1.0.6)
- updated to @applitools/test-server@1.0.8 (from 1.0.7)
- updated to @applitools/visual-grid-client@15.8.53 (from 15.8.49)

## 3.27.0 - 2021/12/6

- support custom properties and query params
- remove `queryParams` api from story and global config

## 3.26.1 - 2021/11/28

- add custom test properties to stories with query params

## 3.26.0 - 2021/11/26

- add support for `queryParams` config property
- updated to @applitools/driver@1.3.5 (from 1.2.7)
- updated to @applitools/eyes-puppeteer@1.9.0 (from 1.8.5)
- updated to @applitools/eyes-sdk-core@12.24.5 (from 12.23.24)
- updated to @applitools/logger@1.0.6 (from 1.0.5)
- updated to @applitools/test-server@1.0.7 (from 1.0.6)
- updated to @applitools/visual-grid-client@15.8.49 (from 15.8.43)

 ## 3.25.3 - 2021/11/1

- add a retry mechanism for cases we get 0 stories

## 3.25.2 - 2021/10/30

- replace legacy logger construction with new
- deprecate `waitBeforeScreenshot` and introduce `waitBeforeCapture` instead
- updated to @applitools/driver@1.2.7 (from 1.2.6)
- updated to @applitools/eyes-puppeteer@1.8.5 (from 1.8.4)
- updated to @applitools/eyes-sdk-core@12.23.24 (from 12.23.18)
- updated to @applitools/test-server@1.0.6 (from 1.0.5)
- updated to @applitools/visual-grid-client@15.8.43 (from 15.8.37)

## 3.25.1 - 2021/10/20

- updated to @applitools/eyes-puppeteer@1.8.4 (from 1.8.3)
- updated to @applitools/eyes-sdk-core@12.23.18 (from 12.23.17)
- updated to @applitools/visual-grid-client@15.8.37 (from 15.8.36)

## 3.25.0 - 2021/10/18

- updated to @applitools/driver@1.2.6 (from 1.1.3)
- updated to @applitools/eyes-puppeteer@1.8.3 (from 1.8.2)
- updated to @applitools/eyes-sdk-core@12.23.17 (from 12.23.0)
- updated to @applitools/test-server@1.0.5 (from 1.0.4)
- updated to @applitools/visual-grid-client@15.8.36 (from 15.8.21)

## 3.24.0 - 2021/8/23

- add `startStorybookServerTimeout` config param

## 3.23.1 - 2021/8/23

- add `visualGridOptions`, `useDom`, and `enablePatterns` config params

## 3.23.0 - 2021/8/17

- add `sendDom` config param

## 3.22.11 - 2021/8/16

- updated to @applitools/driver@1.1.3 (from 1.1.2)
- updated to @applitools/eyes-puppeteer@1.8.2 (from 1.8.1)
- updated to @applitools/eyes-sdk-core@12.23.0 (from 12.22.4)
- updated to @applitools/visual-grid-client@15.8.21 (from 15.8.18)

## 3.22.10 - 2021/8/13

- updated to @applitools/dom-snapshot@4.5.7 (from 4.5.6)

## 3.22.9 - 2021/8/12

- upgrade to latest puppeteer
- updated to @applitools/eyes-puppeteer@1.8.1 (from 1.8.0)
- updated to @applitools/eyes-sdk-core@12.22.4 (from 12.22.3)
- updated to @applitools/visual-grid-client@15.8.18 (from 15.8.17)

## 3.22.8 - 2021/8/8

- updated to @applitools/driver@1.1.2 (from 1.1.0)
- updated to @applitools/eyes-puppeteer@1.8.0 (from 1.7.4)
- updated to @applitools/eyes-sdk-core@12.22.3 (from 12.22.1)
- updated to @applitools/test-server@1.0.4 (from 1.0.3)
- updated to @applitools/visual-grid-client@15.8.17 (from 15.8.15)

## 3.22.7 - 2021/8/8

- fix IE execution in parallel
- updated to @applitools/dom-snapshot@4.5.6 (from 4.5.4)
- updated to @applitools/driver@1.1.0 (from 1.0.6)
- updated to @applitools/eyes-sdk-core@12.22.1 (from 12.21.3)
- updated to @applitools/visual-grid-client@15.8.15 (from 15.8.13)

## 3.22.6 - 2021/7/7

- document runBefore and runAfter functions caveats
- updated to @applitools/dom-snapshot@4.5.4 (from 4.5.3)

  ## 3.22.5 - 2021/6/30

 - fail immediately when the api key is invalid 
- updated to @applitools/eyes-puppeteer@1.7.4 (from 1.7.3)
- updated to @applitools/eyes-sdk-core@12.21.3 (from 12.21.2)
- updated to @applitools/visual-grid-client@15.8.13 (from 15.8.12)

## 3.22.4 - 2021/6/29

- fix storybook url `html` extensions
- updated to @applitools/driver@1.0.7 (from 1.0.6)
- updated to @applitools/eyes-sdk-core@12.21.2 (from 12.20.2)
- updated to @applitools/visual-grid-client@15.8.11 (from 15.8.8)
- updated to @applitools/visual-grid-client@15.8.12 (from 15.8.11)
- updated to @applitools/eyes-puppeteer@1.7.3 (from 1.7.2)

## 3.22.3 - 2021/6/1

- fix browser config
- updated to @applitools/dom-snapshot@4.5.3 (from 4.5.0)
- updated to @applitools/eyes-sdk-core@12.20.2 (from 12.20.1)
- updated to @applitools/visual-grid-client@15.8.8 (from 15.8.7)

## 3.22.2 - 2021/5/11

- fix ie browser name

## 3.22.1 - 2021/5/5

- fix no browser config storybook

## 3.22.0 - 2021/5/2

- render on fake IE browser
- updated to @applitools/eyes-puppeteer@1.6.0 (from 1.4.3)
- updated to @applitools/eyes-sdk-core@12.17.4 (from 12.17.2)
- updated to @applitools/visual-grid-client@15.8.2 (from 15.8.0)

## 3.21.0 - 2021/4/22

- updated to @applitools/dom-snapshot@4.5.0 (from 4.4.14)
- updated to @applitools/eyes-sdk-core@12.17.2 (from 12.16.2)
- updated to @applitools/visual-grid-client@15.8.0 (from 15.6.3)

## 3.20.2 - 2021/3/22

- Fix regression with `concurrency` that was introduced in version 3.17.1

## 3.20.1 - 2021/3/17

- Handle story parameters with circular reference better

  ## 3.20.0 - 2021/3/17

 - added runAfter hook 
- updated to @applitools/dom-snapshot@4.4.14 (from 4.4.11)
- updated to @applitools/eyes-sdk-core@12.16.2 (from 12.15.0)
- updated to @applitools/visual-grid-client@15.6.3 (from 15.6.0)

## 3.19.0 - 2021/3/4

- support passing a string or regex to the include configuration

## 3.18.0 - 2021/2/26

- support `ignoreGitMergeBase`
- updated to @applitools/eyes-sdk-core@12.15.0 (from 12.14.11)
- updated to @applitools/visual-grid-client@15.6.0 (from 15.5.22)

## 3.17.1 - 2021/2/24

- fix concurrency message condition
- add `include` documentation
- updated to @applitools/eyes-sdk-core@12.14.11 (from 12.14.10)

## 3.17.0 - 2021/2/23

- don't auto-populate the batch name when not specified ([Trello](https://trello.com/c/MGGJ3Rh8))
- updated to @applitools/dom-snapshot@4.4.11 (from 4.4.10)
- updated to @applitools/eyes-sdk-core@12.14.10 (from 12.14.6)
- updated to @applitools/visual-grid-client@15.5.22 (from 15.5.19)

## 3.16.5 - 2021/1/31

- updated to @applitools/dom-snapshot@4.4.10 (from 4.4.9)
- updated to @applitools/eyes-sdk-core@12.14.6 (from 12.14.5)
- updated to @applitools/visual-grid-client@15.5.19 (from 15.5.17)

## 3.16.4 - 2021/1/31

- chore: add husky
- updated to @applitools/dom-snapshot@4.4.9 (from 4.4.7)
- updated to @applitools/eyes-puppeteer@1.4.3 (from 1.4.2)
- updated to @applitools/eyes-sdk-core@12.14.5 (from 12.13.4)
- updated to @applitools/visual-grid-client@15.5.17 (from 15.5.10)

## 3.16.3 - 2021/1/15

- updated to @applitools/dom-snapshot@4.4.7 (from 4.4.5)
- updated to @applitools/eyes-puppeteer@1.4.2 (from 1.4.0)
- updated to @applitools/eyes-sdk-core@12.13.4 (from 12.12.2)
- updated to @applitools/visual-grid-client@15.5.10 (from 15.5.5)

## 3.16.2 - 2021/1/12

- updated to @applitools/dom-snapshot@4.4.5 (from 4.4.4)

## 3.16.1 - 2021/1/10

- updated to @applitools/dom-snapshot@4.4.4 (from 4.4.1)
- updated to @applitools/eyes-sdk-core@12.12.2 (from 12.11.0)
- updated to @applitools/visual-grid-client@15.5.5 (from 15.5.0)

## 3.16.0 - 2020/12/30

- support JS layout
- updated to @applitools/eyes-sdk-core@12.11.0 (from 12.10.0)
- updated to @applitools/visual-grid-client@15.5.0 (from 15.4.0)

## 3.15.0 - 2020/12/18

- updated to @applitools/eyes-puppeteer@1.4.0 (from 1.3.1)
- updated to @applitools/eyes-sdk-core@12.10.0 (from 12.9.3)
- updated to @applitools/visual-grid-client@15.4.0 (from 15.3.2)

## 3.14.2 - 2020/12/15

- updated to @applitools/dom-snapshot@4.4.1 (from 4.4.0)
- updated to @applitools/eyes-puppeteer@1.3.1 (from 1.3.0)
- updated to @applitools/eyes-sdk-core@12.9.3 (from 12.9.2)
- updated to @applitools/visual-grid-client@15.3.2 (from 15.3.1)

## 3.14.1 - 2020/12/14

- updated to @applitools/dom-snapshot@4.4.0 (from 4.3.1)
- updated to @applitools/eyes-puppeteer@1.3.0 (from 1.2.2)
- updated to @applitools/eyes-sdk-core@12.9.2 (from 12.9.1)
- updated to @applitools/visual-grid-client@15.3.1 (from 15.3.0)

## 3.14.0 - 2020/12/11

- updated to @applitools/dom-snapshot@4.3.1 (from 4.2.9)
- updated to @applitools/eyes-sdk-core@12.9.1 (from 12.8.3)
- updated to @applitools/visual-grid-client@15.3.0 (from 15.2.4)

## 3.13.4 - 2020/12/4

- updated to @applitools/eyes-puppeteer@1.2.2 (from 1.2.1)
- updated to @applitools/eyes-sdk-core@12.8.3 (from 12.8.2)
- updated to @applitools/visual-grid-client@15.2.4 (from 15.2.3)

## 3.13.3 - 2020/12/4

- updated to @applitools/visual-grid-client@15.2.3 (from 15.2.2)

## 3.13.2 - 2020/12/4

- updated to @applitools/dom-snapshot@4.2.9 (from 4.2.8)
- updated to @applitools/eyes-puppeteer@1.2.1 (from 1.2.0)

## 3.13.1 - 2020/12/3

- updated to @applitools/dom-snapshot@4.2.8 (from 4.2.7)
- updated to @applitools/eyes-sdk-core@12.8.2 (from 12.8.1)
- updated to @applitools/visual-grid-client@15.2.2 (from 15.2.1)

- fix `saveFailedTests`

## 3.13.0 - 2020/12/2

- use eyes-puppeteer SDK for running dom-snapshot - adds support for cross-origin iframes [Trello 635](https://trello.com/c/TgiAqTUM) and [Trello 551](https://trello.com/c/wPl3ef7y))
- updated to @applitools/eyes-puppeteer@1.2.0 (from 1.1.1)
- updated to @applitools/eyes-sdk-core@12.8.1 (from 12.6.2)

## 3.12.1 - 2020/11/26

- updated to @applitools/eyes-sdk-core@12.6.2 (from 12.6.0)
- updated to @applitools/visual-grid-client@15.2.1 (from 15.2.0)

## 3.12.0 - 2020/11/19

- updated to @applitools/dom-snapshot@4.2.7 (from 4.2.6)
- updated to @applitools/eyes-sdk-core@12.6.0 (from 12.5.7)
- updated to @applitools/visual-grid-client@15.2.0 (from 15.1.1)

## 3.11.0 - 2020/11/13

- updated to @applitools/dom-snapshot@4.2.6 (from 4.2.4)
- updated to @applitools/eyes-sdk-core@12.5.7 (from 12.5.4)
- updated to @applitools/visual-grid-client@15.1.1 (from 15.0.16)

## 3.10.1 - 2020/10/28

- support indeterminate checkboxes
- updated to @applitools/dom-snapshot@4.2.4 (from 4.2.2)
- updated to @applitools/eyes-sdk-core@12.5.4 (from 12.4.4)
- updated to @applitools/visual-grid-client@15.0.16 (from 15.0.12)

## 3.10.0 - 2020/10/19

- deprecate `saveDebugData`
- updated to @applitools/eyes-sdk-core@12.4.4 (from 12.4.3)
- updated to @applitools/visual-grid-client@15.0.12 (from 15.0.11)

## 3.9.2 - 2020/10/18

- updated to @applitools/dom-snapshot@4.2.2 (from 4.2.1)
- updated to @applitools/eyes-sdk-core@12.4.3 (from 12.4.2)
- updated to @applitools/visual-grid-client@15.0.11 (from 15.0.10)

## 3.9.1 - 2020/10/14

- add iosVersion to readme
- updated to @applitools/dom-snapshot@4.2.1 (from 4.2.0)
- updated to @applitools/eyes-sdk-core@12.4.2 (from 12.3.1)
- updated to @applitools/visual-grid-client@15.0.10 (from 15.0.9)

## 3.9.0 - 2020/10/12

- updated to @applitools/dom-snapshot@4.2.0 (from 4.1.1)
- updated to @applitools/eyes-sdk-core@12.3.1 (from 12.2.9)
- updated to @applitools/visual-grid-client@15.0.9 (from 15.0.8)

## 3.8.11 - 2020/10/1

- added "See details at..." at the beginning
- updated to @applitools/dom-snapshot@4.1.1 (from 4.1.0)

## 3.8.10 - 2020/9/28

- remove yarn workspaces
- updated to @applitools/dom-snapshot@4.1.0 (from 4.0.6)
- updated to @applitools/eyes-sdk-core@12.2.6 (from 12.2.5)
- updated to @applitools/visual-grid-client@15.0.6 (from 15.0.5)
- updated to @applitools/eyes-sdk-core@12.2.9 (from 12.2.6)
- updated to @applitools/visual-grid-client@15.0.8 (from 15.0.6)

## 3.8.9 - 2020/8/31

- fix exception when getStoryData throws an error ([Trello](https://trello.com/c/FLDMYl2O))
- updated to @applitools/eyes-sdk-core@12.2.0 (from 12.1.4)
- updated to @applitools/visual-grid-client@15.0.0 (from 14.7.5)

## 3.8.8 - 2020/8/13

- updated to @applitools/eyes-sdk-core@12.1.4 (from 12.1.0)
- updated to @applitools/visual-grid-client@14.7.5 (from 14.7.1)

## 3.8.7 - 2020/8/9

- updated to @applitools/dom-snapshot@4.0.3 (from 4.0.1)
- updated to @applitools/eyes-sdk-core@12.1.0 (from 11.5.1)
- updated to @applitools/visual-grid-client@14.7.1 (from 14.6.2)
- add JSON file output [PR 224](https://github.com/applitools/eyes.sdk.javascript1/pull/224)

## 3.8.6 - 2020/7/30

- updated to @applitools/dom-snapshot@4.0.1 (from 4.0.0)
- updated to @applitools/eyes-sdk-core@11.5.1 (from 11.5.0)
- updated to @applitools/visual-grid-client@14.6.2 (from 14.6.0)

## 3.8.5 - 2020/7/26

- updated to @applitools/dom-snapshot@4.0.0 (from 3.7.2)
- updated to @applitools/eyes-sdk-core@11.5.0 (from 11.3.9)
- updated to @applitools/visual-grid-client@14.6.0 (from 14.5.13)

## 3.8.4 - 2020/7/22

- updated to @applitools/dom-snapshot@3.7.2 (from 3.7.1)
- updated to @applitools/eyes-sdk-core@11.3.9 (from 11.3.7)
- updated to @applitools/visual-grid-client@14.5.13 (from 14.5.11)

## 3.8.3 - 2020/7/17

- add ios device info to readme
- updated to @applitools/dom-snapshot@3.7.1 (from 3.6.0)
- updated to @applitools/eyes-sdk-core@11.3.7 (from 11.1.0)
- updated to @applitools/visual-grid-client@14.5.11 (from 14.5.0)

## 3.8.2 - 2020/6/29

- updated to @applitools/dom-snapshot@3.6.0 (from 3.5.3)
- updated to @applitools/eyes-sdk-core@11.1.0 (from 11.0.5)
- updated to @applitools/visual-grid-client@14.5.0 (from 14.4.4)

## 3.8.1 - 2020/6/29

- released erroneously

## 3.8.0 - 2020/6/9

- updated to @applitools/dom-snapshot@3.5.3 (from 3.5.2)
- updated to @applitools/eyes-sdk-core@11.0.5 (from 11.0.3)
- updated to @applitools/visual-grid-client@14.4.4 (from 14.4.2)

## 3.7.1 - 2020/6/3

- fixed 409 conflict error
- Unified core
- updated to @applitools/eyes-sdk-core@11.0.3 (from v10.3.1)
- updated to @applitools/visual-grid-client@14.4.2 (from v14.3.1)

## 3.7.0 - 2020/5/24

- add ability to render tests results to XUnit XML (per [Trello 261](https://trello.com/c/ozmI1rav))
- updated to @applitools/eyes-sdk-core@10.3.0
- updated to @applitools/visual-grid-client@14.2.0

## 3.6.0 - 2020/5/19

- Support for AccessibilityGuidelinesVersion
- updated to @applitools/dom-snapshot@3.5.2
- updated to @applitools/eyes-sdk-core@10.2.0
- updated to @applitools/visual-grid-client@14.1.0

## 3.5.3 - 2020/5/4

- changed console output to contain story data on errors
- updated to @applitools/dom-snapshot@3.5.0
- updated to @applitools/eyes-sdk-core@10.0.1
- updated to @applitools/visual-grid-client@13.7.6

## 3.5.2 - 2020/4/27

- add edgechromium to types
- updated to @applitools/visual-grid-client@13.7.2

## 3.5.1 - 2020/4/27

- add edgechromium to readme

## 3.5.0 - 2020/4/26

- support edgelegacy, edgechromium, and edgechromium-one-version-back
- updated to @applitools/dom-snapshot@3.4.5
- updated to @applitools/eyes-sdk-core@9.2.1
- updated to @applitools/visual-grid-client@13.7.1

## 3.4.0 - 2020/4/1

- Add capability to specify `ignoreDisplacements` (both via global and local configuration). ([Trello](https://trello.com/c/IfkEZ4V3/45-storybook-add-set-get-ignoredisplacements-to-eyes-global-and-fluent))
- Add capability to specify Layout, Strict, Content, Floating regions (both via global and local configuration). ([Trello](https://trello.com/c/NNko9uQr/200-storybook-add-capability-to-add-layout-strict-content-floating-regions-via-the-config))
- Add capability to specify custom properties (both via global and local configuration) ([Trello](https://trello.com/c/yWbAZ2Fm/170-storybook-sdk-custom-properties-support))

## 3.3.3 - 2020/3/31

- removed eyes-common dependency

## 3.3.2

- avoid unnecessary requests to get batchInfo (due to wrong `isGeneratedId` value on batchInfo)

## 3.3.1

- update @applitools/dom-snapshot@3.4.0 to get correct css in DOM snapshots ([Trello](https://trello.com/c/3BFtM4hx/188-hidden-spinners-in-text-field-are-visible-in-firefox), [Trello](https://trello.com/c/S4XT7ONp/192-vg-dom-snapshot-deletes-duplicate-keys-from-css-rules), [Trello](https://trello.com/c/mz8CKKB7/173-selector-not-seen-as-it-should-be-issue-with-css-variable), [Trello](https://trello.com/c/KZ25vktg/245-edge-screenshot-different-from-chrome-and-ff))

## 3.3.0

- Add `viewportSize` parameter to control the puppeteer browser size ([Trello](https://trello.com/c/lGEGpIZI/237-bad-rendering-of-element-storybook))

## 3.2.14

- Support both new and old server versions for identifying new running sessions. ([Trello](https://trello.com/c/mtSiheZ9/267-support-startsession-as-long-running-task))

## 3.2.13

- dom snapshot log for fetched resources now shows the byte length that was fetched [Trello](https://trello.com/c/CjSvn1OQ/262-storybook-409-conflict-wrong-sha)

## 3.2.12

- dom snapshot error while fetching is now always in clear text [Trello](https://trello.com/c/Jx1VJgpA/258-gap-storybook-assets-not-loading)

## 3.2.11

- fix trying to fetch branch info from server on non github integration runs
- support future long running tasks [Trello](https://trello.com/c/60Rm4xXG/240-support-future-long-running-tasks)

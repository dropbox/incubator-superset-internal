# Driver

[![npm](https://img.shields.io/npm/v/@applitools/driver?color=%2302afc2&label=@applitools/driver&logo=npm)](https://www.npmjs.com/package/@applitools/eyes-universal)


Driver is a unified interface for automation frameworks. It allows you to use any automation framework with the same featureful api.

The API and abstractions of the interface provides an extra functionality which doesn't exists in some of the frameworks. All of these could be archived for any framework the only requirement is implementing a set of simple commands.

- [Driver](#driver)
  - [Basic concepts](#basic-concepts)
    - [Driver](#driver-1)
    - [Content](#content)
    - [Element](#element)
    - [Selector](#selector)
    - [SpecDriver](#specdriver)
  - [SpecDriver API](#specdriver-api)
    - [spec.isDriver(driver)](#specisdriverdriver)
    - [spec.isContext(context)](#speciscontextcontext)
    - [spec.isElement(element)](#speciselementelement)
    - [spec.isSelector(selector)](#specisselectorselector)
    - [spec.transformDriver(driver)](#spectransformdriverdriver)
    - [spec.transformElement(element)](#spectransformelementelement)
    - [spec.transformSelector(selector)](#spectransformselectorselector)
    - [spec.extractContext(driver)](#specextractcontextdriver)
    - [spec.extractSelector(element)](#specextractselectorelement)
    - [spec.isStaleElementError(error)](#specisstaleelementerrorerror)
    - [spec.isEqualElements(context, element1, element2)](#specisequalelementscontext-element1-element2)
    - [spec.mainContext(context)](#specmaincontextcontext)
    - [spec.parentContext(context)](#specparentcontextcontext)
    - [spec.childContext(context, element)](#specchildcontextcontext-element)
    - [spec.executeScript(context, script, arg)](#specexecutescriptcontext-script-arg)
    - [spec.findElement(context, selector, parentElement)](#specfindelementcontext-selector-parentelement)
    - [spec.findElements(context, selector, parentElement)](#specfindelementscontext-selector-parentelement)
    - [spec.getWindowSize(driver)](#specgetwindowsizedriver)
    - [spec.setWindowSize(driver, size)](#specsetwindowsizedriver-size)
    - [spec.getViewportSize(driver)](#specgetviewportsizedriver)
    - [spec.setViewportSize(driver, size)](#specsetviewportsizedriver-size)
    - [spec.getCookies(driverOrContext, isContext)](#specgetcookiesdriverorcontext-iscontext)
    - [spec.getDriverInfo(driver)](#specgetdriverinfodriver)
    - [spec.getCapabilities(driver)](#specgetcapabilitiesdriver)
    - [spec.getTitle(driver)](#specgettitledriver)
    - [spec.getUrl(driver)](#specgeturldriver)
    - [spec.takeScreenshot(driver)](#spectakescreenshotdriver)
    - [spec.click(context, element)](#specclickcontext-element)
    - [spec.type(context, element, value)](#spectypecontext-element-value)
    - [spec.visit(driver, url)](#specvisitdriver-url)
    - [spec.getOrientation(driver)](#specgetorientationdriver)
    - [spec.getBarsSize(driver)](#specgetbarsSizedriver)
    - [spec.getElementRegion(driver, element)](#specgetelementregiondriver-element)
    - [spec.getElementAttribute(driver, element, attribute)](#specgetelementattributedriver-element-attribute)
    - [spec.getElementText(driver, element)](#specgetelementtextdriver-element)
    - [spec.performAction(driver, steps)](#specperformactiondriver-steps)

## Basic concepts

Except **SpecDriver** this package operates with 4 basic abstractions - **Driver**, **Context**, **Element**, **Selector**. It is important to understand those 4 abstractions for each framework before start with a **SpecDriver**.

### Driver
**Driver** is the most important abstraction, since this is the first thing you would interact with, and it will create instances of other abstractions for you. It is helpful to think about **Driver** as controller of an automated environment _(for example: browser in web automation, or device in native app automation)_.

So through the **Driver** you are gonna have a basic access to the automation environment, such as getting and setting viewport size, navigating, taking screenshots, and the most important having access to the page's/app's contexts.

### Content
**Context** is where all of the page's/app's content is. If you need to find an element, execute script, or click on a button - **Context** is what you need.

> **❓ FAQ**
>
> _- Can I do all of this with a **Driver**?_
>
> No, you can't.\
> Because **Driver** doesn't contain any content in itself, instead it has access to the **Context**s. Think about it as about a `window` object in a web page, it doesn't contain elements, but it has `document` object in it, and `document` is has access to the elements.

There always at leas one **Context** - main **Context**, however one web page could contain multiple **Context**s, it is possible because each iframe on the page would create its own **Context**. So **Context**s on the web page create a tree-like structure where root is a main **Context** and all its iframes are child **Context**s, this structure repeats for each next context.

> **📝 NOTE**
>
> You could be familiar with a similar to **Context** concept from frameworks like Puppeteer and Playwright, where the same role plays `Frame`.

### Element
**Element** is one of the simplest for understanding concepts. It is just an element that you could find on a web page, or native application _(for example: `<div>` or `View`)_

The access to the **Element**s is possible only through the **Context**.

### Selector
**Selector** concept has two different types, first is always the same and the second is framework dependant. The first type called **CommonSelector** it is declared as part of the package and could be used with any king of framework. The second type doesn't have a one name it could be `By` instance for Selenium framework, `Locator` for Playwright, or just a `string` for WDIO.

### SpecDriver
**SpecDriver** is the interface we need to communicate with the framework api. It should consists of a number of commands each of those is a small function which performs one of the basic actions we could automate. The combination of commands is not the same for all of the frameworks, so it is important to understand which combination should be implemented in each specific case.

> **📝 NOTE**
>
> Decision about what to implement should be made in context of frameworks capabilities. For example frameworks like Playwright and Puppeteer have a dedicated method to set viewport size of web page, in the same time WDIO and Selenium don't have method like this, but instead they method to set browser window size.

## SpecDriver API

The first step to implement a `SpecDriver` should be an understanding if your framework shares a **Context** concept, in other words, does it have a separation between something that would be a **Driver** and **Context**. If framework doesn't share a **Context** concept, its role will be played by the **Driver**.

> **❓ FAQ**
>
> _- How to understand if my framework has a separation between **Driver** and **Context**?_
>
> It is fairly easy, in most cases it has. But there are one big exception, that are webdriver based frameworks. Webdriver protocol doesn't separate **Context** from a **Driver**, instead it maintains **Driver** state and automation inside iframes is performed by switching **Driver** to the iframe context.\
> In all other cases you would have some representation of a single **Context** (for example: `Frame` in Playwright and Puppeteer, or `Document` in web api)

All `SpecDriver` commands could be divided on a two groups:

- 🛠️ Utility commands. These commands have to be synchronous, and mostly perform runtime type checks or simple transformations.
- 🤖 Automation commands. These commands could be asynchronous, and mostly they perform automation actions or provide an information about automation state. There commands could be also divided on two groups.
  - 🕸️ Web automation commands. Commands that are valid for web.
  - 📱 Mobile automation commands. Commands that are valid for native apps.

### spec.isDriver(driver)
This command is a simple type guard that checks its argument on being a framework's driver.

This command is required.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L46) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L38-L41) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L83-L86)

### spec.isContext(context)
This command is a simple type guard that checks its argument on being a framework's context.

This command is required for web automation frameworks, that have a differentiation between driver and context.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L47) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L42-L45)

### spec.isElement(element)
This command is a simple type guard that checks its argument on being a framework's element.

This command is required.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L48) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L46-L49) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L87-L90)

### spec.isSelector(selector)
This command is a simple type guard that checks its argument on being a framework's selector.

This command is required.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L49) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L50-L53) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L91-L94)

### spec.transformDriver(driver)
This command will be executed when a framework's driver is going to be wrapped. It should return a value of driver type.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L50) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L96-L120)

> **❓ FAQ**
>
> _- When should I implement it?_
>
> This command should be implemented in two cases.
> - Monkey patching or configuration of an object before we actually start using it.
> - Supporting multiple types of drivers as input.
>
> In the case of supporting multiple types you would still wanna work internally with only one of them, so you have to transform whatever could be accepted as an input to the type that you actually wanna work with.

### spec.transformElement(element)
This command will be executed when a framework's element is going to be wrapped. It should return a value of element type.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L51) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L121-L124)

> **❓ FAQ**
>
> _- When should I implement it?_
>
> See answer for [`spec.transformDriver`](#spec.transformdriver).

### spec.transformSelector(selector)
This command will be executed when the selector is going to be used. The command should perform the transformation of common selectors to the framework's selector type. Some frameworks might also support shadow selectors, but by default, the package will not provide common shadow selectors, to tell the package that the framework supports it, `shadowSelectors` feature should be specified in [`spec.getDriverInfo(driver)`](#specgetdriverinfodriver).

This command is required. The only exception is if framework selectors are identical to common selectors.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L52) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L54-L60) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L125-L132)

> **❓ FAQ**
>
> _- What is the common selector?_
>
> The common selector is a type of object to describe selectors, that is used by the package to describe different selector types. It is a simple object with a signature - `{type: string, selector: string}`.
>
> _- When framework's selectors could be identical to common selectors?_
>
> It could happen when a framework doesn't have real restrictions for selector type. For instance web api doesn't have a function that could find an element using different selector types, instead `document` has different methods to find elements using `css` and `xpath` selectors. It means that common selector type could be used to decide what method should be called.

### spec.extractContext(driver)
This command will be executed to get a context from a driver.

This command is required for web automation frameworks, that have a differentiation between driver and context.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L53) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L61-L63)

### spec.extractSelector(element)
This command will be executed to get a framework selector from framework element. Some frameworks keep metadata inside an element, this metadata might contain a selector that was used to find an element in first place. This is selector will be used in some edge case scenarios to re-find an element.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L54) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L133-L135)

### spec.isStaleElementError(error)
This command is a simple type guard that checks if object is a framework stale element error. Not all of the frameworks share concept of stale element errors, but those which share could benefit of implementing this in some edge cases when element with known selector was stalled during an automation.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L55) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L64-L71) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L136-L140)

### spec.isEqualElements(context, element1, element2)
This command will be executed to check if two framework elements are equal. Some frameworks have shortcuts to compare elements, such as unique element ids or some specific backend functionality. Normally on web you can compare elements by simply compare them inside a browser, but native automation doesn't have this capability so custom logic has to be applied.

This command is required for native app automation frameworks, and optional for web automation frameworks but still recommended if there is a framework-specific way to compare elements.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L56) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L141-L146)

> **❓ FAQ**
>
> _- What if this method returns a false-negative result?_
>
> In webdriver based frameworks every element has a unique id by the specification, but in the real world some of the implementations violate this requirement, so sometimes id comparison would produce false-negative results. In order to avoid it for the web if `spec.isEqualElements` is implemented and returns a negative result, we will verify it with an in-browser element comparison.

### spec.mainContext(context)
This command will be executed to get a top-most (main) context of a given context. If the context is already a top-most (main) one it should return itself.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L60) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L82-L89) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L160-L163)

> **❓ FAQ**
>
> _- What should I do in webdriver based framework?_
>
> In webdriver based frameworks this command would rather change state of the driver (a.k.a switch to the frame). After state is changed driver object should be returned.

### spec.parentContext(context)
This command will be executed to get a parent context of a given context. If the context is already a top-most (main) one it should return itself.

This command is optional but highly recommended for implementation, because the fallback is very time-consuming for large pages.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L61) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L90-L93) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L164-L167)

> **❓ FAQ**
>
> _- What should I do in webdriver based framework?_
>
> See answer for [`spec.mainContext(context)`](#spec.maincontextcontext).

### spec.childContext(context, element)
This command will be executed to get a child context of a given context for a given iframe element.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L62) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L94-L96) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L168-L171)

> **❓ FAQ**
>
> _- What should I do in webdriver based framework?_
>
> See answer for [`spec.mainContext(context)`](#spec.maincontextcontext).

### spec.executeScript(context, script, arg)
This command will be executed to run a certain script with a specific argument in a given context.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L63) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L77-L81) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L152-L159)

### spec.findElement(context, selector, parentElement)
This command will be executed to get an element by the given selector in a given context if `parentElement` is provided it means that the seeking element should be located as a descendant of provided parent element. As a parent element also might be provided document fragment node. If an element could not be found `null` should be returned as a result.

This command is required.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L64) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L97-L101) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L172-L181)

### spec.findElements(context, selector, parentElement)
This command will be executed to get elements by the given selector in a given context if `parentElement` is provided it means that the seeking elements should be located as a descendants of provided parent element. As a parent element also might be provided document fragment node. If an elements could not be found empty array should be returned as a result.

This command is required.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L65) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L102-L106) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L182-L191)

### spec.getWindowSize(driver)
This command will be executed to get the size of the browser window or device screens in web or native automation, respectively.

This command is required for web and native automation frameworks, but for web frameworks it is required only if [`spec.setWindowSize(driver)`](#spec.setwindowsizedriver-size) is implemented.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L67) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L192-L199)

### spec.setWindowSize(driver, size)
This command will be executed to set size of the browser window.

This command is required for web automation frameworks only if [`spec.setViewportSize(driver)`](#spec.setviewportsizedriver-size) is not implemented.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L66) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L200-L207)

### spec.getViewportSize(driver)
This command will be executed to set the size of the browser viewport (the area where a webpage is actually rendered).

This command is optional but highly recommended if a framework provides a simple way to get this value.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L69) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L107-L109)

### spec.setViewportSize(driver, size)
This command will be executed to set the size of the browser viewport (the area where a webpage is actually rendered).

This command is required for web frameworks and should be implemented instead of [`spec.setWindowSize(driver)`](#spec.setwindowsizedriver-size) if possible.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L68) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L110-L112)

### spec.getCookies(driverOrContext, isContext)
This command will be executed to get cookies stored in the browser or a given context. The main purpose of this command is to provide cookies of the browser, but since this is not always possible the fallback for extraction cookies for a particular context exists.

This command is optional but highly recommended for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L70) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L113-L120) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L208-L233)

> **❓ FAQ**
>
> _- How should I know to extract cookies from the whole browser or context?_
>
> It is always preferable to get cookies of the browser because it is a superset of the context's cookies. But it is possible only in some cases, so if the package thinks that this is not possible in a current environment, it will pass context object as a first argument and `true` value as a second in other cases driver will be passed as first argument and `false` as a second. If the framework has a possibility to extract browser's cookies in any environment this `allCookies` feature should be overridden in [`spec.getDriverInfo(driver)`](#specgetdriverinfodriver).

### spec.getDriverInfo(driver)
This command will be executed to get basic info about the driver and the current environment. Usually, the package is able to understand all important information about a current environment using the information provided by [`spec.getCapabilities(driver)`](#specgetcapabilitiesdriver) and user agent, but sometimes additional information about the capabilities of the framework should be provided. For instance `features` field contains a map of supported framework features.

|Feature         |Description|
|----------------|-----------|
|`shadowSelector`|This feature means that framework is capable of finding elements under the shadow root using a specific selector. It also means that [`spec.transformSelector(selector)`](#spectransformselectorselector) should be able to transform a recursive version of common selector - `{type: string, selector: string, shadow?: CommonSelector}`.|
|`allCookies`    |This feature means that framework is capable of extracting cookies from the whole browser. Usually, this feature is calculated on the package side by checking if the browser is a Chrome browser.|

This command is optional and should be implemented only to override the default behavior of the package or provide useful metadata.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L71) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L121-L123) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L237-L243)

### spec.getCapabilities(driver)
This command will be executed to get webdriver capabilities of the session.

This command is required for webdriver based frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L72) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L234-L236)

### spec.getTitle(driver)
This command will be executed to get title of current page.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L73) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L124-L126) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L244-L246)

### spec.getUrl(driver)
This command will be executed to get url of current page.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L74) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L127-L129) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L247-L249)

### spec.takeScreenshot(driver)
This command will be executed to take a screenshot of a current state of the driver.

This command is required for web automation frameworks.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L75) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L133-L135) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L253-L261)

### spec.click(context, element)
This command will be executed to perform click automation on the area of a given element.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L76) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L136-L139) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L262-L266)

### spec.type(context, element, value)
This command will be executed to automate typing a given value into a given element.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L77) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L140-L143) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L267-L271)

### spec.visit(driver, url)
This command will be executed perform a navigation to a given url address.

This command is optional.

[API Reference](https://github.com/applitools/eyes.sdk.javascript1/blob/15c887a5a4f939f689f463c2875669edc8daf2f5/packages/types/src/driver.ts#L78) |
[Playwright Example](https://github.com/applitools/eyes.sdk.javascript1/blob/f1516acf1bc5bc2a557baa0028a5de5c8fddef37/packages/spec-driver-playwright/src/spec-driver.ts#L130-L132) |
[WDIO Example](https://github.com/applitools/eyes.sdk.javascript1/blob/c8d426947e1a38a3a8798357e946c8054351f46e/packages/spec-driver-webdriverio/src/spec-driver.ts#L250-L252)

### spec.getOrientation(driver)
TBD

### spec.getBarsSize(driver)
TBD

### spec.getElementRegion(driver, element)
TBD

### spec.getElementAttribute(driver, element, attribute)
TBD

### spec.getElementText(driver, element)
TBD

### spec.performAction(driver, steps)
TBD

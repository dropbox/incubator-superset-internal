# storybook-pretty-props

Render prop types from react-docgen or react-docgen-typescript in a pretty way.
Useful for storybook addons that display prop types.

## Installation

```sh
npm i storybook-pretty-props
# with yarn
yarn add storybook-pretty-props
```

## Usage

Combine this with docgen output to render the prop type!

```js
import PrettyPropType from "storybook-pretty-props";

const Example = () => (
  <PrettyPropType
    propType={{
      name: "enum",
      value: [
        { name: "literal", value: "a" },
        { name: "literal", value: "b" },
        { name: "literal", value: "c" }
      ]
    }}
  />
);
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://hipstersmoothie.com"><img src="https://avatars3.githubusercontent.com/u/1192452?v=4" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/hipstersmoothie/storybook-pretty-props/commits?author=hipstersmoothie" title="Code">💻</a> <a href="https://github.com/hipstersmoothie/storybook-pretty-props/commits?author=hipstersmoothie" title="Documentation">📖</a> <a href="#example-hipstersmoothie" title="Examples">💡</a> <a href="https://github.com/hipstersmoothie/storybook-pretty-props/commits?author=hipstersmoothie" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/petermikitsh"><img src="https://avatars3.githubusercontent.com/u/1571918?v=4" width="100px;" alt=""/><br /><sub><b>Peter Mikitsh</b></sub></a><br /><a href="#example-petermikitsh" title="Examples">💡</a> <a href="https://github.com/hipstersmoothie/storybook-pretty-props/commits?author=petermikitsh" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
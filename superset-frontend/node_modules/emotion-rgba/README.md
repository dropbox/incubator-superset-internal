# Emotion RGBA
[![License][license-image]][license-url] ![coverage-badge-green]

[Emotion] does not currently support the Sass rgba function syntax of `rgba($color, $alpha)` out of the box.

To remedy this, Emotion RGBA is a simple helper function which can be called from a styled component or css block and returns a valid css rgba color string. 

For example:

```js
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

// define a color for our theme
const hotPink = '#ff69b4';
const alpha = 0.5;

// create a styled component and use our color
const StyledComponent = styled.div`
    background-color: ${rgba(hotPink, alpha)};
`;
```
Outputs the css:
```css
.css-icd11q {
    background-color: rgba(255, 105, 180, 0.5);
}
```
Standard HTML color strings are also supported, for example:
```js
const StyledComponent = styled.div`
    background-color: ${rgba('red', 0.8)};
`;
```

[Emotion]: https://github.com/emotion-js/emotion
[coverage-badge-green]: https://img.shields.io/badge/Coverage-100%25-brightgreen.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

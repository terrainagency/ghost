<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Range.js
Add class `@ui-range` to the container element of the number input element.

Parameters are defined by datatypes and native input properties. 

```html
<div class="@ui-range">
    <div class="@btn-minus"></div>
    <div class="@content"></div>
    <div class="@btn-plus"></div>

    <input type="number" min="0" max="5" step="1">
</div>
```

Class | Functionality
------------ | -------------
`@ui-range` | Creates an instance of Range.js
`@content` | Container element where the range slider will be generated
`@btn-minus` | Subtracts a step from the input value
`@btn-plus` | Adds a step from the input value

# Status
Active Development
<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Number.js
Add class `@number` to the container element of the number input element. Add class `@btn-plus` and `@btn-minus` to enable button functionality.

Parameters are defined by native `<input type="number">` properties.

```html
<div>
    <label for="quantity" class="block mb-4">Quantity</label>
    <div class="@number">
        <div class="@btn-minus">-</div>
        <input name="quantity" class="p-4" min="1" max="9" step="1" value="1" type="number" />
        <div class="@btn-plus">+</div>
    </div>
</div>
```

Class | Functionality
------------ | -------------
`@number` | Creates an instance of Number.js
`@btn-plus` | Adds 1 step to the input
`@btn-minus` | Subtracts 1 step to the input

# Status
`v1.0`
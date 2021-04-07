<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Number.js

* [Ghost](https://github.com/terrainagency/ghost/tree/main/) / * [Interface](https://github.com/terrainagency/ghost/tree/main/interface) / Number

# Usage

```html
<div>
    <label for="quantity" class="block mb-4">Quantity</label>
    <div class="@uiNum flex" data-max="9">
        <div data-btn="minus" class="flex items-center justify-center border p-4 cursor-pointer">-</div>
        <input class="p-4" data-min="1" data-max="9" name="quantity" value="1" type="number" />
        <div data-btn="plus" class="flex items-center justify-center border p-4 cursor-pointer">+</div>
    </div>
</div>
```
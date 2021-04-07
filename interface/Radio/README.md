<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Radio.js
Add class `@ui-radio` to the container element of the radio input element.

Parameters are defined by datatypes. 

```html
<div class="@ui-radio" data-type="follow">
    <div class="@state-active"></div>

    <label for="option1">Female</label>
    <input type="radio" id="option1" name="radio" value="value1">

    <label for="option2">Other</label>
    <input type="radio" id="option2" name="radio" value="value2">
</div>
```

Class | Functionality
------------ | -------------
`@ui-radio` | Creates an instance of Radio.js

Parameter | Usage
------------ | ------------- 
`data-type="follow"` | Active state div will animate between options 

# Status
Active Development
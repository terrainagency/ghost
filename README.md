<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/src/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# ghost-ui
Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

```
npm i ghost-ui --save
```

Built to be non-obtrusive, all Ghost bases do not create any actions without implicit direction. It is designed to be as agnostic as possible, allowing the library to function freely accross a large variety of applications.

# Usage
Ghost is a high performance library, and is intended to be used on a byte-by-byte basis. 

# Concepts 
All ghost-ui objects are connected to DOM elements via id and class names that begin with `@`, and utilize native properties or `data-` attributes for configuration. All classes are written in kebab-case

### Parent Selectors
Parent selectors connect the functionality of Ghost interface and content components to HTML elements.

> Examples: `@number` `@scroll-sequence` `@load`

### Child Selectors
Child selectors are used to attach specific properties or methods of Ghost interface and content components to HTML elements.

Classname structure: "`@` `type` `-` `name`"

Class | Functionality
------------ | -------------
`@btn-X` | Connects to the relevant event listener
`@content` | Inserts generated content
`@active` | Refers to the active element within the parent

> Examples: `@btn-plus` `@btn-minus`

# Interface [ @ui ]
* [Input.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Input) :small_orange_diamond: `v0.1` `Active Development`
* [Number.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Number) :small_blue_diamond: `v1.0` 
* [Paginate.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Paginate) :small_red_triangle: `Proposed`
* [Pin.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Pin) :small_red_triangle: `Proposed`
* [Radio.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Radio) :small_orange_diamond: `v0.1` `Active Development`
* [Range.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Range) :small_orange_diamond: `v0.1` `Active Development`
* [Select.js](https://github.com/terrainagency/ghost/tree/main/src/interface/Select) :small_orange_diamond: `v0.1` `Active Development`

# Content [ @obj ]
* [Accordion.js](https://github.com/terrainagency/ghost/tree/main/src/content/Accordion) :small_blue_diamond: `v1.0`
* [DragDropList.js](https://github.com/terrainagency/ghost/tree/main/src/content/DragDropList) :small_red_triangle: `Proposed`
* [Gallery.js](https://github.com/terrainagency/ghost/tree/main/src/content/Gallery) :small_orange_diamond: `v0.1` `Active Development`
* [ScrollSequence.js](https://github.com/terrainagency/ghost/tree/main/src/content/ScrollSequence) :small_blue_diamond: `v1.0` 
* [Slider.js](https://github.com/terrainagency/ghost/tree/main/src/content/Slider) :small_blue_diamond: `v1.0` 

# Utils
* [debounce.js](https://github.com/terrainagency/ghost/blob/main/src/utils/debounce.js) :small_blue_diamond: `v1.0` 
* [lazy.js](https://github.com/terrainagency/ghost/blob/main/src/utils/lazy.js) :small_orange_diamond: `v0.1` `Active Development`
* [objectToArray.js](https://github.com/terrainagency/ghost/blob/main/src/utils/objecToArray.js) :small_blue_diamond: `v1.0` 
* [parentClass.js](https://github.com/terrainagency/ghost/tree/main/src/utils/WindowQuery.js) :small_blue_diamond: `v1.0` 
* [timer.js](https://github.com/terrainagency/ghost/tree/main/src/utils/Timer.js) :small_blue_diamond: `v1.0` 
* [wordToSpan.js](https://github.com/terrainagency/ghost/blob/main/src/utils/wordToSpan.js) :small_blue_diamond: `v1.0` 
* [windowQuery.js](https://github.com/terrainagency/ghost/tree/main/src/utils/WindowQuery.js) :small_blue_diamond: `v1.0` 

# Snippets
* [Button.liquid](https://github.com/terrainagency/ghost/tree/main/src/snippets/Icon) :small_blue_diamond: `v1.0` 
* [Icon.liquid](https://github.com/terrainagency/ghost/tree/main/src/snippets/Icon) :small_blue_diamond: `v1.0` 
* [Image.liquid](https://github.com/terrainagency/ghost/tree/main/src/snippets/Image) :small_blue_diamond: `v1.0` 

# Status
ghost-ui is under active development. 

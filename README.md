<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Ghost
Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

Ghost's code is non-obtrusive, and does not create any actions without implicit direction. It is designed to be as agnostic as possible, allowing the library to function freely accross a large variety of applications.

# Usage
Ghost was built primarily for high performance Shopify themes, and is intended to be used in on a byte-by-byte basis. 

# Concepts 
All Ghost objects are connected to DOM elements via id and class names that begin with `@`, and utilize native properties or `data-` attributes for configuration.

Classname structure: "`@` `type` `-` `name`"

Parent selector examples: `@ui-number` `@obj-ScrollSequence`

Child selector example: `@btn-plus` `@btn-minus`


# Interface [ @ui ]
* [Input.js](https://github.com/terrainagency/ghost/tree/main/interface/Input) :small_orange_diamond: `Active Development`
* [Number.js](https://github.com/terrainagency/ghost/tree/main/interface/Number) :small_blue_diamond: `v1.0` 
* [Paginate.js](https://github.com/terrainagency/ghost/tree/main/interface/Paginate) :small_red_triangle: `Proposed`
* [Pin.js](https://github.com/terrainagency/ghost/tree/main/interface/Pin) :small_red_triangle: `Proposed`
* [Radio.js](https://github.com/terrainagency/ghost/tree/main/interface/Radio) :small_orange_diamond: `Active Development`
* [Range.js](https://github.com/terrainagency/ghost/tree/main/interface/Range) :small_orange_diamond: `Active Development`
* [Select.js](https://github.com/terrainagency/ghost/tree/main/interface/Select) :small_orange_diamond: `Active Development`

# Content [ @obj ]
* [Accordion.js](https://github.com/terrainagency/ghost/tree/main/content/Accordion) :small_blue_diamond: `v1.0`
* [DragDropList.js](https://github.com/terrainagency/ghost/tree/main/content/DragDropList) :small_red_triangle: `Proposed`
* [Gallery.js](https://github.com/terrainagency/ghost/tree/main/content/Gallery) :small_orange_diamond: `Active Development`
* [ScrollSequence.js](https://github.com/terrainagency/ghost/tree/main/content/ScrollSequence) :small_blue_diamond: `v1.0` 
* [Slider.js](https://github.com/terrainagency/ghost/tree/main/content/Slider) :small_blue_diamond: `v1.0` 

# Utils
* [debounce.js](https://github.com/terrainagency/ghost/blob/main/utils/debounce.js) :small_blue_diamond: `v1.0` 
* [objectToArray.js](https://github.com/terrainagency/ghost/blob/main/utils/objecToArray.js) :small_blue_diamond: `v1.0` 
* [parentClass.js](https://github.com/terrainagency/ghost/tree/main/utils/WindowQuery.js) :small_blue_diamond: `v1.0` 
* [timer.js](https://github.com/terrainagency/ghost/tree/main/utils/Timer.js) :small_blue_diamond: `v1.0` 
* [wordToSpan.js](https://github.com/terrainagency/ghost/blob/main/utils/wordToSpan.js) :small_blue_diamond: `v1.0` 
* [windowQuery.js](https://github.com/terrainagency/ghost/tree/main/utils/WindowQuery.js) :small_blue_diamond: `v1.0` 

# Snippets
* [Icon.liquid](https://github.com/terrainagency/ghost/tree/main/snippets/Icon) :small_blue_diamond: `v1.0` 
* [Image.liquid](https://github.com/terrainagency/ghost/tree/main/snippets/Image) :small_blue_diamond: `v1.0` 

# Status
Ghost-UI is under active development. 

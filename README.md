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
* [Input.js](https://github.com/terrainagency/ghost/tree/main/interface/Input) `:small_orange_diamond:`
* [Number.js](https://github.com/terrainagency/ghost/tree/main/interface/Number) `v1.0` 
* [Paginate.js](https://github.com/terrainagency/ghost/tree/main/interface/Paginate) `Active Development`
* [Pin.js](https://github.com/terrainagency/ghost/tree/main/interface/Pin) `Active Development`
* [Radio.js](https://github.com/terrainagency/ghost/tree/main/interface/Radio) `Active Development`
* [Range.js](https://github.com/terrainagency/ghost/tree/main/interface/Range) `Active Development`
* [Select.js](https://github.com/terrainagency/ghost/tree/main/interface/Select) `Active Development`

# Content [ @obj ]
* [Accordion.js](https://github.com/terrainagency/ghost/tree/main/content/Accordion) `v1.0`
* [DropDropList.js](https://github.com/terrainagency/ghost/tree/main/content/DragDropList)
* [Gallery.js](https://github.com/terrainagency/ghost/tree/main/content/Gallery)
* [ScrollSequence.js](https://github.com/terrainagency/ghost/tree/main/content/ScrollSequence)
* [Slider.js](https://github.com/terrainagency/ghost/tree/main/content/Slider)

# Utils
* [debounce.js](https://github.com/terrainagency/ghost/blob/main/utils/debounce.js)
* [objectToArray.js](https://github.com/terrainagency/ghost/blob/main/utils/objecToArray.js)
* [parentClass.js](https://github.com/terrainagency/ghost/tree/main/utils/WindowQuery.js)
* [timer.js](https://github.com/terrainagency/ghost/tree/main/utils/Timer.js)
* [wordToSpan.js](https://github.com/terrainagency/ghost/blob/main/utils/wordToSpan.js)
* [windowQuery.js](https://github.com/terrainagency/ghost/tree/main/utils/WindowQuery.js)

# Snippets
* [Icon.liquid](https://github.com/terrainagency/ghost/tree/main/snippets/Icon)
* [Image.liquid](https://github.com/terrainagency/ghost/tree/main/snippets/Image)

# Status
Current state: v0.9.1

Ghost-UI is currently under active development. 

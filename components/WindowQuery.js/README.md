<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# WindowQuery.js

Dependencies: Ghost[utils/debounce.js]

# Usage

WindowQuery.js is used to pass a set of conditions that if met, will run the related callback function

```javascript
// 1. Import WindowQuery
import { WindowQuery } from './components/WindowQuery.js'

// 2. Create a new WindowQuery instance and define queries
const app = new WindowQuery({
    xs: '375px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '1526px',
    xxl: '2000px',
})

// 3. Define callbacks for specific queries
app.xl = () => {
    // Do something
}

// 4. Initialize
app.init()
```

> NOTE: The name of the callback function must match the name of the key in the queries object.

# Status

WindowQuery.js is a part of Terrain's Ghost library, and is currently in development. Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

Ghost's code is non-obtrusive, and does not create any actions without your direction. It is designed to be as agnostic as possible, allowing it to function freely accross a large variety of applications.

v0.1:
- [x] Basic functionality
- [x] Separate initialization
- [x] Scoped for larger projects


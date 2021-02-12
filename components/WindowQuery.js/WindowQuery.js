import { debounce } from '../utils/debounce.js'
import { objectToArray } from '../utils/objectToArray.js'

export class WindowQuery {
    constructor(queries) {
        this.queries = objectToArray(queries)
        this.build()
    }
    findMatch() {
        // 1. Find the first matching query
        let result = (() => {
            for(var i = 0; i < this.queries.length-1; i++) {
                for (const [key, value] of Object.entries(this.queries[i])) {
                    if(window.matchMedia(`(max-width: ${value})`).matches) {
                        return key
                    }
                }
            }
        })()

        // 2. If query is out of bounds, set result to largest available query name
        if(result === undefined) {result = Object.keys(this.queries[this.queries.length-1])[0]}

        // 3. Run the method that matches
        if(this[result] !== undefined) {
            this[result]()
        }
    }
    build() {
        // 1. Find initial window size
        window.addEventListener('DOMContentLoaded', () => {
            // 2. Find new match on resize
            window.addEventListener('resize', debounce((e) => {this.findMatch()}, 250))
        })
    }
    init() {this.findMatch()}
}
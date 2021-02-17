const loaders = []
const arr = document.querySelectorAll('@lazy')

arr.forEach((loader, i) => {
    loaders[i] = new LazyLoad(loader, {})
})

class LazyLoad {
    constructor(container, config) {
        this.container = container
        this.build(config)
    }
    build(config) {
        
    }
}
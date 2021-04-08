export class Timer {
    constructor(fn, t) {
        this.fn = fn
        this.t = t
        this.timer = setInterval(this.fn, this.t)
    }
    stop() {
        if(this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
        return this;
    }
    start() {
        if(!this.timer) {
            this.stop()
            this.timer = setInterval(this.fn, this.t)
        }
        return this
    }
    reset(t) {
        this.t = t
        return this.stop().start()
    }
}
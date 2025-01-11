import { Queue } from "spque"
const kígyó = {
    ahossz() {
      return this.q.size
    },
    pozmod() {
      this.x += this.vx
      this.y += this.vy
    },
    control(key) {
        switch (key) {
            case "ArrowLeft":
                this.vx = -1
                this.vy = 0
                break
            case "ArrowRight":
                this.vx = 1
                this.vy = 0
                break
            case "ArrowDown":
                this.vx = 0
                this.vy = 1
                break
            case "ArrowUp":
                this.vx = 0
                this.vy = -1
                break
            default:
                break
        }
    },
    hossz: 10,
    q: new Queue(),
    x: 50,
    y: 50,
    vx: 1,
    vy: 0
}
export default kígyó

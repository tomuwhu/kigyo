import { Queue } from "spque"

class Kígyó {
    ahossz() {
      return this.q.size
    }
    pozmod() {
      this.x += this.vx
      this.y += this.vy
      this.q.put({x: this.x, y: this.y})
      if (this.q.size > this.hossz) {
        let fp = this.q.get()
        this.fx = fp.x
        this.fy = fp.y
      }
    }
    control(key) {
        switch (key) {
            case this.controlkeys[0]:
                this.vx = -1
                this.vy = 0
                break
            case this.controlkeys[1]:
                this.vx = 1
                this.vy = 0
                break
            case this.controlkeys[2]:
                this.vx = 0
                this.vy = 1
                break
            case this.controlkeys[3]:
                this.vx = 0
                this.vy = -1
                break
            default:
                break
        }
    }
    constructor(p) {
        this.hossz = 10
        this.q = new Queue()
        this.x = p.x  //a feje
        this.y = p.y
        this.fx = p.x //a farka
        this.fy = p.y

        this.vx = p.vx  // sebesség vektor
        this.vy = 0

        this.controlkeys = p.control
    }
}
export default Kígyó
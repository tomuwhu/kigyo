import { Queue } from "spque"
const kígyó = {
    ahossz() {
      return this.q.size
    },
    pozmod() {
      this.x += this.vx
      this.y += this.vy
      this.hossz++
      this.q.put({x: this.x, y: this.y})
      if (this.q.size > this.hossz) {
        this.hossz--
        console.log(this.q.get())
        
        //[this.fx, this.fy] = this.q.get()
      }
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
    x: 50,  //a feje
    y: 50,

    fx: 50, //a farka
    fy: 50,

    vx: 1,  // sebesség vektor
    vy: 0
}
export default kígyó

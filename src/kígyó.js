import { Queue } from "spque"
const kígyó = {
    ahossz() {
      return this.q.size
    },
    pozmod() {
      this.x += this.vx
      this.y += this.vy
    },
    hossz: 10,
    q: new Queue(),
    x: 50,
    y: 50,
    vx: 1,
    vy: 0
}
export default kígyó

<script>
// @ts-nocheck
  import { onMount } from 'svelte';
  import Kígyó from './kígyó.js'
  const kígyók = [
    new Kígyó({x: 90, y: 50, vx: -1, control: ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"]}),
    new Kígyó({x: 10, y: 51, vx: 1, control: ["a", "d", "s", "w"]})
  ]
  var vége = 0
  const pálya = Array.from({length: 100}, (_, i) => Array.from({length: 100}, (_, j) => 
    i === 0 || j === 0 || i === 99 || j === 99 ? 4 : 0))
  onMount(() => window.onkeydown = e => kígyók.forEach(kígyó => kígyó.control(e.key)))
  setInterval(() => {
    if (!vége) {
      kígyók.forEach((kígyó, kssz) => {
        kígyó.pozmod(),
        [-1, 0, 1].forEach(i => {
          [-1, 0, 1].forEach(j => {
            if (pálya[kígyó.y + i][kígyó.x + j] === 3) {
            pálya[kígyó.y + i][kígyó.x + j] = 0
            kígyó.hossz += 10
            }
          })
        })
        if (pálya[kígyó.y][kígyó.x] === 0) {
          pálya[kígyó.y][kígyó.x] = kssz + 1
          pálya[kígyó.fy][kígyó.fx] = 0
        } else {
          if (vége) vége = 12
          else vége = kssz + 1
        }
      })
    }
  }, 50)
  setInterval(() => {
    if (vége) return
    pálya[Math.floor( 1 + Math.random() * 98)][Math.floor(1 + Math.random() * 98)] = 3
  }, 3000)
</script>

<main>
  <div class="cont">
    {#each pálya as row}
      <div class="row">
        {#each row as cell}
          <div class="cell c{cell}"></div>
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  div.cont {
    display: grid;
  }
  div.row {
    display: grid;
    grid-template-columns: repeat(100, 1fr);
  }
  div.cell {
    background-color: black;
    width: 5px;
    height: 5px;
  }
  div.c1 {
    background-color: rgb(109, 109, 224);
  }
  div.c2 {
    background-color: rgb(60, 162, 60);
  }
  div.c3 {
    background-color: red;
  }
  div.c4 {
    background-color: rgb(64, 110, 113);
  }
</style>

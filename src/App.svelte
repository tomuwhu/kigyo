<script>
  import { onMount } from 'svelte';
  import Kígyó from './kígyó.js'
  const kígyó2 = new Kígyó({x: 90, y: 50, vx: -1, control: ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"]})
  const kígyó1 = new Kígyó({x: 10, y: 50, vx: 1, control: ["a", "d", "s", "w"]})
  let kígyók = {k1: kígyó1, k2: kígyó2}
  var vége = false
  var pálya = Array.from({length: 100}, () => Array.from({length: 100}, () => 0))
  pálya.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (i === 0 || j === 0 || i === 99 || j === 99) {
        pálya[i][j] = 4
      }
    })
  })
  onMount(() =>  
      window.onkeydown = e => {
        Object.values(kígyók).forEach(kígyó => kígyó.control(e.key)) 
      }
  )
  setInterval(() => {
    if (!vége) {
      Object.values(kígyók).forEach((kígyó, kssz) => {
        kígyó.pozmod()
        if (pálya[kígyó.y][kígyó.x] === 3) {
          pálya[kígyó.y][kígyó.x] = 0
          kígyó.hossz += 10
        }
        if (pálya[kígyó.y][kígyó.x] === 0) {
          pálya[kígyó.y][kígyó.x] = kssz + 1
          pálya[kígyó.fy][kígyó.fx] = 0
        } else {
          vége = true
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
    width: 5px;
    height: 5px;
  }
  div.c1 {
    background-color: blue;
  }
  div.c2 {
    background-color: green;
  }
  div.c3 {
    background-color: red;
  }
  div.c4 {
    background-color: black;
  }
</style>

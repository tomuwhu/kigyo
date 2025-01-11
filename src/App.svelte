<script>
  import kígyó from './kígyó.js'
  var vége = false
  var pálya = Array.from({length: 100}, () => Array.from({length: 100}, () => 0))
  pálya.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (i === 0 || j === 0 || i === 99 || j === 99) {
        pálya[i][j] = 2
      }
    })
  })
  window.onkeydown = e => kígyó.control(e.key)
  setInterval(() => {
    if (!vége) {
      kígyó.pozmod()
      if (pálya[kígyó.y][kígyó.x] === 3) {
        pálya[kígyó.y][kígyó.x] = 0
        kígyó.hossz += 10
      }
      if (pálya[kígyó.y][kígyó.x] === 0) {
        pálya[kígyó.y][kígyó.x] = 1
        pálya[kígyó.fy][kígyó.fx] = 0
      } else {
        vége = true
      }
    }
  }, 50)
  setInterval(() => {
    pálya[Math.floor(Math.random() * 100)][Math.floor(Math.random() * 100)] = 3
  }, 10000)
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
</style>

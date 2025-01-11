<script>
  var kígyó = {
    x: 50,
    y: 50,
    vx: 1,
    vy: 0
  }
  var vége = false
  var pálya = Array.from({length: 100}, () => Array.from({length: 100}, () => 0))
  pálya.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (i === 0 || j === 0 || i === 99 || j === 99) {
        pálya[i][j] = 2
      }
    })
  })
  window.onkeydown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        kígyó.vx = -1
        kígyó.vy = 0
       ;break
      case "ArrowRight":
        kígyó.vx = 1
        kígyó.vy = 0
        break
      case "ArrowDown":
        kígyó.vx = 0
        kígyó.vy = 1
        break
      case "ArrowUp":
        kígyó.vx = 0
        kígyó.vy = -1
        break
      default:
        break
    }
  }
  setInterval(() => {
    if (!vége) {
      kígyó.x += kígyó.vx
      kígyó.y += kígyó.vy
      if (pálya[kígyó.y][kígyó.x] === 0) {
        pálya[kígyó.y][kígyó.x] = 1
      } else {
        vége = true
      }
    }
  }, 500)
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
    background-color: red;
  }
  div.c2 {
    background-color: green;
  }
</style>

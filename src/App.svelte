<script>
  var time = 0
  var pálya = Array.from({length: 100}, () => Array.from({length: 100}, () => 0))
  pálya.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (i === 0 || j === 0 || i === 99 || j === 99) {
        pálya[i][j] = 2
      }
    })
  })
  pálya[50][50] = 1
  setInterval(() => {
    time++
  }, 500)
</script>

<main>
  Cica {time}
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

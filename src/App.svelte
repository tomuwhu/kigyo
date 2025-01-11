<script>
  var time = 0
  var pálya = Array.from({length: 100}, () => Array.from({length: 100}, () => 0))
  pálya[0][0] = 1
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
   border: 1px solid black;
   width: 10px;
   height: 10px;
 }
 div.c1 {
   background-color: red;
}
</style>

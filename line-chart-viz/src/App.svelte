<script>
  import data1Config from "./Config/data1Config.js";
  import data2Config from "./Config/data2Config.js";
  import data3Config from "./Config/data3Config.js";
  import Index from "./Components/Index.svelte";
</script>

<section>
  <div style="width: 900; text-align: center ; ">
    <Index config={data1Config} />
    <Index config={data2Config} />
    <Index config={data3Config} />
  </div>
</section>

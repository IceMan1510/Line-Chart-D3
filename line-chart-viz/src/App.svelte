<script>
  import data from "./Data/data.js";
  import data1 from "./Data/data1.js";
  import data2 from "./Data/data2.js";
  import LineChart from "./Components/LineChart.svelte";
  import chartConfig from "./Config/ChartConfig";
  let title = "Religious Weddings In India";
</script>

<section>
  <div style="width: 900; text-align: center">
    <LineChart {data} {title} {chartConfig} />
    <LineChart data={data1} {title} {chartConfig} />
    <LineChart data={data2} {title} {chartConfig} />
  </div>
</section>

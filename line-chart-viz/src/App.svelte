<script>
  import data from "./Data/data.js";
  import data1 from "./Data/data1.js";
  import data2 from "./Data/data2.js";
  import LineChart from "./Components/LineChart.svelte";
  import chartConfig from "./Config/ChartConfig";
  let title = "Religious Weddings In India";
  let xAxisLabel = "Year";
  let yAxisLabel = "Number Of Records";
</script>

<section>
  <div style="width: 900; text-align: center">
    <LineChart {data} {title} {chartConfig} {xAxisLabel} {yAxisLabel} />
    <LineChart data={data1} {title} {chartConfig} {xAxisLabel} {yAxisLabel} />
    <LineChart data={data2} {title} {chartConfig} {xAxisLabel} {yAxisLabel} />
  </div>
</section>

<script>
  import data from "./Data/data.js";
  import data1 from "./Data/data1.js";
  import data2 from "./Data/data2.js";
  import data3 from "./Data/data3.js";
  import LineChart from "./Components/LineChart.svelte";
  import chartConfig from "./Config/ChartConfig";
</script>

<section>
  <div style="width: 900; text-align: center ; ">
    <LineChart
      {data}
      title={"Religious Weddings In India"}
      {chartConfig}
      xAxisLabel={"Years"}
      yAxisLabel={"Weddings Count"}
      xKey={"Year"}
      yKey={"Religious"}
    />
    <LineChart
      data={data1}
      title={"Religious Weddings Per Year (India)"}
      {chartConfig}
      xAxisLabel="Weddings Count"
      yAxisLabel="Years"
      xKey={"Religious"}
      yKey={"Year"}
    />

    <LineChart
      data={data3}
      title={"Hours Studies V/S Grades Achieved"}
      {chartConfig}
      xAxisLabel={"Grades Achieved"}
      yAxisLabel={"Hours Studied"}
      xKey={"grade"}
      yKey={"hours"}
    />
  </div>
</section>

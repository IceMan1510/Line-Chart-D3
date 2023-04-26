<script>
  import BarChart from "./BarChart.svelte";
  import LineChart from "./LineChart.svelte";
  import ScatterPlot from "./ScatterPlot.svelte";
  export let config;
  let data = config.data;
</script>

{#if config.GraphType === "Line"}
  <LineChart
    {data}
    title={config.Title}
    chartConfig={config}
    xAxisLabel={config.XAxisLabel}
    yAxisLabel={config.YAxisLabel}
    xKey={config.XKey}
    yKey={config.YKey}
  />
{:else if config.GraphType === "Scatter"}
  <ScatterPlot
    {data}
    title={config.Title}
    chartConfig={config}
    xAxisLabel={config.XAxisLabel}
    yAxisLabel={config.YAxisLabel}
    xKey={config.XKey}
    yKey={config.YKey}
  />
{:else if config.GraphType === "Bar"}
  <BarChart
    {data}
    title={config.Title}
    chartConfig={config}
    xAxisLabel={config.XAxisLabel}
    yAxisLabel={config.YAxisLabel}
    xKey={config.XKey}
    yKey={config.YKey}
  />
{/if}

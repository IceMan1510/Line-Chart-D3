<script>
  import XAxis from "./XAxis.svelte";
  import YAxis from "./YAxis.svelte";
  export let chartConfig;
  export let xAxisLabel;
  export let yAxisLabel;
  export let data;
  export let title;
  import * as d3 from "d3";
  data.sort((a, b) => a.Year - b.Year);
  let width = chartConfig.Chart.width;
  let height = chartConfig.Chart.height;
  const margin = chartConfig.Margin;
  const year = data.map((d) => d.Year);
  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(year))
    .range([margin.left, width - margin.right]);
  let xTicks = xScale.ticks(chartConfig.NoOfTicks.TicksOnX);
  let yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, (d) => {
        return +d.Religious;
      }),
    ])
    .range([height - margin.top - margin.bottom, 0]);
  let yTicks = yScale.ticks(chartConfig.NoOfTicks.TicksOnY);
  let path = d3
    .line()
    .x((d) => xScale(d.Year))
    .y((d) => yScale(d.Religious))
    .curve(d3.curveLinear);

  let xPath = `M${margin.left},6V0H${width - margin.right}V6`;
  let yPath = `M-6,${height - margin.top - margin.bottom}H0.5V0.5H-6`;
</script>

<section>
  <h2>{title}</h2>
  <svg {width} {height}>
    <YAxis {yScale} {margin} {yPath} {yTicks} {yAxisLabel} {chartConfig} />
    <XAxis
      {height}
      {width}
      {margin}
      {xScale}
      {xPath}
      {xTicks}
      {xAxisLabel}
      {chartConfig}
    />
    <g transform="translate({margin.left - margin.right} {margin.top})">
      <path d={path(data)} fill="none" stroke="#DC504F" />
      {#each data as d}
        <circle
          cx={xScale(d.Year)}
          cy={yScale(d.Religious)}
          fill="purple"
          stroke="black"
          r={chartConfig.OtherLengths.CircleRadius}
        >
          <title>Year:{d.Year}, Religious:{d.Religious}</title></circle
        >
      {/each}
    </g>
  </svg>
</section>

<style>
  h2 {
    text-align: center;
  }
</style>

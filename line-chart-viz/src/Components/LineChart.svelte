<script>
  import XAxis from "./XAxis.svelte";
  import YAxis from "./YAxis.svelte";
  export let chartConfig;
  export let xAxisLabel;
  export let yAxisLabel;
  export let data;
  export let title;
  export let xKey;
  export let yKey;
  import * as d3 from "d3";
  for (let i = 0; i < data.length; i++) {
    data[i].xKey = data[i][`${xKey}`];
    data[i].yKey = data[i][`${yKey}`];
    delete data[i][`${xKey}`];
    delete data[i][`${yKey}`];
  }
  data.sort((a, b) => a.xKey - b.xKey);
  let width = chartConfig.Chart.width;
  let height = chartConfig.Chart.height;
  const margin = chartConfig.Margin;
  const xKeyForTicks = data.map((d) => d.xKey);
  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(xKeyForTicks))
    .range([margin.left, width - margin.right]);
  let xTicks = xScale.ticks(chartConfig.NoOfTicks.TicksOnX);
  let yScale = d3
    .scaleLinear()
    .domain([
      d3.min(data, (d) => {
        return +d.yKey;
      }),
      d3.max(data, (d) => {
        return +d.yKey;
      }),
    ])
    .range([height - margin.top - margin.bottom, 0]);
  let yTicks = yScale.ticks(chartConfig.NoOfTicks.TicksOnY);
  let path = d3
    .line()
    .x((d) => xScale(d.xKey))
    .y((d) => yScale(d.yKey))
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
      {margin}
      {xScale}
      {xPath}
      {xTicks}
      {xAxisLabel}
      {chartConfig}
    />
    <g transform="translate({margin.left - margin.right} {margin.top})">
      <path d={path(data)} fill="none" stroke="#1DA1F2" />
      {#each data as d}
        <circle
          cx={xScale(d.xKey)}
          cy={yScale(d.yKey)}
          fill="purple"
          stroke="black"
          r={chartConfig.OtherLengths.CircleRadius}
        >
          <title>{xKey}:{d.xKey}, {yKey}:{d.yKey}</title></circle
        >
      {/each}
    </g>
  </svg>
</section>

<style>
  h2 {
    text-align: center;
  }
  svg {
    border: 1px solid black;
  }
</style>

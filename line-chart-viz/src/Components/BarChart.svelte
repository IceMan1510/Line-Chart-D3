<script>
  export let chartConfig;
  export let xAxisLabel;
  export let yAxisLabel;
  export let data;
  export let title;
  export let xKey;
  export let yKey;

  import * as d3 from "d3";
  import XAxis from "./Shared/XAxis.svelte";
  import YAxis from "./Shared/YAxis.svelte";
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
    .scaleBand()
    .domain(xKeyForTicks)
    .range([margin.left, width - margin.left]);
  let xTicks = xKeyForTicks;
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

  let xPath = `M${margin.left},6V0H${width - margin.right}V6`;
  let yPath = `M-6,${height - margin.top - margin.bottom}H0.5V0.5H-6`;
  $: innerWidth = width - (margin.left + margin.right);
  $: barWidth = innerWidth / xTicks.length;
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
      {#each data as d}
        <rect
          x={xScale(data.xKey)}
          y={yScale(data.yKey)}
          width="10"
          height={yScale(data.yKey)}
          ><title>{xKey}:{d.xKey}, {yKey}:{d.yKey}</title></rect
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

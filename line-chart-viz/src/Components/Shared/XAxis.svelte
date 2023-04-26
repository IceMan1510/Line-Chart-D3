<script>
  export let xScale;
  export let margin;
  export let xPath;
  export let height;
  export let xTicks;
  export let xAxisLabel;
  export let chartConfig;
</script>

{#if xTicks}
  <g
    transform="translate({margin.left - margin.right}, {height -
      margin.bottom})"
  >
    <text
      text-anchor="end"
      x={height}
      y={margin.bottom - chartConfig.XAxisConfig.XAxisText}
      font-size={chartConfig.Other.LabelsFontSize}>{xAxisLabel}</text
    >
    <path
      stroke={chartConfig.XAxisConfig.XAxisLineColor}
      d={xPath}
      fill={chartConfig.XAxisConfig.XAxisLineFill}
    />
    {#each xTicks as tick, i}
      <g class="tick" transform="translate({xScale(tick)},0)">
        <line
          y2={chartConfig.XAxisConfig.XTickLineLength}
          stroke={chartConfig.XAxisConfig.XAxisTickColor}
        />
        <text
          fill={chartConfig.XAxisConfig.XAxisTickTextColor}
          y={chartConfig.XAxisConfig.XTickDistance}
          x={chartConfig.XAxisConfig.XAxisTickDistance}
        >
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

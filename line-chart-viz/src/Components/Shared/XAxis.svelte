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
      y={margin.bottom - 20}
      font-size={chartConfig.OtherLengths.LabelsFontSize}>{xAxisLabel}</text
    >
    <path stroke="currentColor" d={xPath} fill="none" />
    {#each xTicks as tick, i}
      <g class="tick" transform="translate({xScale(tick)},0)">
        <line
          stroke="currentColor"
          y2={chartConfig.OtherLengths.TickLineLength}
        />
        <text
          fill="currentColor"
          y={chartConfig.OtherLengths.XTickDistance}
          x="-20"
        >
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

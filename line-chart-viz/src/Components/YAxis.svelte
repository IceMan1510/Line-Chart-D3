<script>
  export let yScale;
  export let margin;
  export let yPath;
  export let yTicks;
  export let yAxisLabel;
  export let chartConfig;
</script>

{#if yTicks}
  <g transform="translate({margin.left} {margin.top})">
    <text
      text-anchor="end"
      transform="rotate(-90)"
      x="-{margin.top + margin.bottom}"
      y="-{margin.left - 12}"
      font-size={chartConfig.OtherLengths.LabelsFontSize}>{yAxisLabel}</text
    >
    <path stroke="currentColor" d={yPath} fill="none" />

    {#each yTicks as tick}
      <g
        class="tick"
        transform="translate({margin.top - margin.bottom},{yScale(tick)})"
      >
        <line
          stroke="currentColor"
          x2="-{chartConfig.OtherLengths.TickLineLength}"
        />
        <text
          dy="5"
          fill="currentColor"
          x={chartConfig.OtherLengths.YTickDistance}
        >
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

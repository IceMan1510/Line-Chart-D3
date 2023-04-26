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
      y="-{margin.left - chartConfig.YAxisConfig.YAxisTextDistance}"
      font-size={chartConfig.Other.LabelsFontSize}>{yAxisLabel}</text
    >
    <path
      stroke={chartConfig.YAxisConfig.YAxisLineColor}
      d={yPath}
      fill={chartConfig.YAxisConfig.YAxisLineFill}
    />

    {#each yTicks as tick}
      <g
        class="tick"
        transform="translate({margin.top - margin.bottom},{yScale(tick)})"
      >
        <line
          stroke={chartConfig.YAxisConfig.YAxisTickColor}
          x2="-{chartConfig.YAxisConfig.YTickLineLength}"
        />
        <text
          dy="5"
          fill={chartConfig.YAxisConfig.YAxisTickTextColor}
          x={chartConfig.YAxisConfig.YTickDistance}
        >
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

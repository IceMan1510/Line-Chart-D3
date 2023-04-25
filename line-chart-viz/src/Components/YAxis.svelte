<script>
  export let yScale;
  export let margin;
  export let yPath;
  export let yTicks;
</script>

{#if yTicks}
  <g transform="translate({margin.left} {margin.top})">
    <text x="0" y="0" class="small">Y-Axis</text>
    <path stroke="currentColor" d={yPath} fill="none" />

    {#each yTicks as tick}
      <g class="tick" transform="translate(0,{yScale(tick)})">
        <line stroke="currentColor" x2="-5" />
        <text dy="5" fill="currentColor" x="-{margin.left - 12}">
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

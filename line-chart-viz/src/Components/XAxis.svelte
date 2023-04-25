<script>
  export let xScale;
  export let margin;
  export let xPath;
  export let height;
  export let xTicks;
  export let width;
</script>

{#if xTicks}
  <g transform="translate(0, {height - margin.bottom})">
    <text x={width - margin.right} y="0" class="small">X-Axis</text>
    <path stroke="currentColor" d={xPath} fill="none" />
    {#each xTicks as tick}
      <g class="tick" opacity="1" transform="translate({xScale(tick)},0)">
        <line stroke="currentColor" y2="5" />
        <text fill="currentColor" y="9" dy="10" x="-20">
          {tick}
        </text>
      </g>
    {/each}
  </g>
{/if}

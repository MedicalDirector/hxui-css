<template>
  <div id="spacing">
    <h1 class="hx-title">Spacing</h1>
    <h2 class="hx-subtitle">Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.</h2>

    <hr>

    <h4 class="mt-10">Type</h4>
    <ul>
      <li>
        <code>m</code> - to set margin
      </li>
      <li>
        <code>p</code> - to set padding
      </li>
    </ul>

    <h4 class="mt-10">Direction</h4>
    <ul>
      <li>
        <code>t</code> - to set top
      </li>
      <li>
        <code>r</code> - to set right
      </li>
      <li>
        <code>b</code> - to set bottom
      </li>
      <li>
        <code>l</code> - to set left
      </li>
      <li>
        <code>x</code> - to set x-axis
      </li>
      <li>
        <code>y</code> - to set y-axis
      </li>
      <li>
        <code>a</code> - to set all
      </li>
    </ul>

    <h4 class="mt-10">Size</h4>
    <ul>
      <li>
        <code>0</code> - removes margin or padding for specified direction
      </li>
      <li>
        <code>1</code> - applies margin or padding with <code>16px * {{ 1 * .25 }}</code>
      </li>
      <li>
        <code>2</code> - applies margin or padding with <code>16px * {{ 2 * .25 }}</code>
      </li>
      <li>
        <code>3</code> - applies margin or padding with <code>16px * {{ 3 * .25 }}</code>
      </li>
      <li>
        <code>4</code> - applies margin or padding with <code>16px * {{ 4 * .25 }}</code>
      </li>
      <li>
        <code>5</code> - applies margin or padding with <code>16px * {{ 5 * .25 }}</code>
      </li>
      <li>
        <code>6</code> - applies margin or padding with <code>16px * {{ 6 * .25 }}</code>
      </li>
      <li>
        <code>7</code> - applies margin or padding with <code>16px * {{ 7 * .25 }}</code>
      </li>
      <li>
        <code>8</code> - applies margin or padding with <code>16px * {{ 8 * .25 }}</code>
      </li>
      <li>
        <code>9</code> - applies margin or padding with <code>16px * {{ 9 * .25 }}</code>
      </li>
      <li>
        <code>10</code> - applies margin or padding with <code>16px * {{ 10 * .25 }}</code>
      </li>
    </ul>

    <h4 class="mt-10 mb-3">Usage</h4>
    <pre v-highlightjs><code class="html">
{{ code }}
    </code></pre>

  </div>
</template>

<script>
export default {
  data () {
    return {
      code: `
<p class="mt-1">...</p>

<li class="pb-2">...</li>
      `
    }
  }
}
</script>

<style lang="css">
</style>

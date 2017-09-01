<template>
  <div id="containers">
    <h1 class="hx-title">Container</h1>
    <h2 class="hx-subtitle">A simple container to center your content horizontally</h2>
    <hr>
    <p>The <code>.hx-container</code> class can used in any context.</p>

    This is how the container will behave:
    <ul>
      <li>on <strong>mobile</strong> and <strong>tablet</strong>, it will have <strong>a margin of 20px on both the left and right sides</strong>.</li>
      <li>on <strong>desktop</strong> (>= 1000px), it will have <strong>a maximum width of 960px and will be horizontally centered</strong>.</li>
      <li>on <strong>widescreen</strong> (>= 1192px), it will have <strong>a maximum width of 1152px</strong>.</li>
      <li>on <strong>fullhd</strong> (>= 1384px), it will have <strong>a maximum width of 1344px</strong>.</li>
    </ul>
    <p>The values 960, 1152 and 1344 have been chosen because they are divisible by both 12 and 16.</p>

    <a href="container-demo" class="hx-button is-primary" target="_blank">Container Demo</a>

    <br>
    <br>
    <br>
    <h1 class="h3">Fluid container</h1>
    <p>If you don't want to have a maximum width but want to keep the 20px margin on the left and right sides, add the <code>.is-fluid</code> modifier:</p>
    <a href="fluid-container-demo" class="hx-button is-primary" target="_blank">Fluid container Demo</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

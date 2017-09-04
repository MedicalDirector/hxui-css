<template>
  <div id="pages">
    <h1 class="hx-title">Pages</h1>
    <h2 class="hx-subtitle">Common markup to produce Hx/UI page layouts.</h2>
    <hr>

    <h4>Standard Layout</h4>
    <p>This UI doc is using this layout.</p>

    <div class="hx-columns">
      <div class="hx-column">

      <pre v-highlightjs ref="code"><code class="html">
{{ code }}
      </code></pre>

      <!-- <pre><code class="language-html"><xmp>
      <div class="hx-page">
          <header class="hx-page-header"> </header>
          <main class="hx-page-body"></main>
          <footer class="hx-page-footer"></footer>
      </div>
      </xmp></code></pre> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: `
<div class="hx-page">
  <header class="hx-page-header"> </header>
  <main class="hx-page-body"></main>
  <footer class="hx-page-footer"></footer>
</div>
      `
    }
  }
}
</script>

<style lang="css">
</style>

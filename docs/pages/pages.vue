<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Pages</h1>
      <h2 class="hx-subtitle">Common markup to produce Hx/UI page layouts.</h2>

      <hr />

      <h4>Standard Layout</h4>
      <p>This UI doc is using this layout.</p>
    </div>

    <div class="grid gap-4">
      <pre v-highlightjs ref="code"><code class="html">{{ code }}</code></pre>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      code: `
<div class="hx-page">
  <header class="hx-page-header"> </header>
  <main class="hx-page-body"></main>
  <footer class="hx-page-footer"></footer>
</div>
      `,
    }
  },
}
</script>

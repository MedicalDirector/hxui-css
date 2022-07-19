<template>
  <div id="sections">
    <h1 class="hx-title">Sections</h1>
    <h2 class="hx-subtitle">
      A simple container to divide your page into sections, like the one you're
      currently reading.
    </h2>
    <hr />
    <p>
      Simply add <code>.hx-section</code> to divide your page into sections.
    </p>

    <pre v-highlightjs ref="code"><code class="html">
    {{ code }}
    </code></pre>

    <br />
    <h1 class="h4">Modifiers</h1>
    <p>
      You can use the modifiers <code>.is-comfortable</code> (max-width:
      1280px), <code>.is-medium</code> and <code>.is-large</code> to change the
      spacing.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `
<body>
  <section class="hx-section">
    <div class="hx-container">
      <h1 class="hx-title">Section</h1>
      <h2 class="hx-subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
    </div>
  </section>
</body>
      `,
    }
  },
}
</script>

<style lang="css"></style>

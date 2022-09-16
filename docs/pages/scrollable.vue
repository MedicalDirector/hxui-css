<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Scrollable</h1>
      <h2 class="hx-subtitle">
        Helpers when working with scrollable containers
      </h2>
    </div>

    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent || true"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'

export default {
  components: {
    ExpandingCodeExample,
  },
  data() {
    return {
      examples: [
        {
          title: 'Set Scrolling',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-scrollable-y</code></td>
      <td>Set scrolling on the y axis</td>
    </tr>
      <tr>
      <td><code>.is-scrollable-x</code></td>
      <td>Set scrolling on the x axis</td>
    </tr>
    <tr>
      <td><code>.is-scrollable</code></td>
      <td>Set scrolling on both the x & y axis</td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Unset Scrolling',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.not-scrollable-y</code></td>
      <td>Unset scrolling on the y axis</td>
    </tr>
      <tr>
      <td><code>.not-scrollable-x</code></td>
      <td>Unset scrolling on the x axis</td>
    </tr>
    <tr>
      <td><code>.not-scrollable</code></td>
      <td>Unset scrolling on both the x & y axis</td>
    </tr>
  </tbody>
</table>`,
        },
      ],
    }
  },
}
</script>

<style lang="css">
.elipsedText {
  width: 250px;
}
</style>

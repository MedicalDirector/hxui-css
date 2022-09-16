<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Other</h1>
      <h2 class="hx-subtitle">Generic helper css classes</h2>
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
          title: 'Utilities',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-clipped</code></td>
      <td>Sets overflow:hidden;</td>
    </tr>
      <tr>
      <td><code>.is-overlay</code></td>
      <td>Sets position:absolute; and top,right,bottom,left positions to 0;</td>
    </tr>
      <tr>
      <td><code>.has-pointer</code></td>
      <td>Adds hand pointer to any element</td>
    </tr>
      <tr>
      <td><code>.is-disabled</code></td>
      <td>Removes pointer events from element</td>
    </tr>
    <tr>
      <td><code>.is-marginless</code></td>
      <td>Removes all margins from element</td>
    </tr>
    <tr>
      <td><code>.is-paddingless</code></td>
      <td>Removes all padding from element</td>
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

<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Toggle</h1>
      <h2 class="hx-subtitle">A toggle switch is used as an on/off control.</h2>
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
        :withContent="ex.withContent"
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
          title: 'Toggle examples',
          code: `<p>Default State</p>
  <div class="hx-toggle">
    <label>
      Off
      <input type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>
  <br>
  <p>Checked State</p>
  <div class="hx-toggle">
    <label>
      Off
      <input type="checkbox" checked>
      <span class="lever"></span>
      On
    </label>
  </div>
  <br>
  <p>Disabled State</p>
  <div class="hx-toggle">
    <label>
      Off
      <input disabled type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>`,
        },
      ],
    }
  },
}
</script>

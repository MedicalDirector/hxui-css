<template>
  <div id="toggle">
    <h1 class="hx-title">Toggle</h1>
    <h2 class="hx-subtitle">A toggle switch is used as an on/off control.</h2>

    <hr>

    <expanding-code-example v-for="example in examples"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
          title: 'Toggle examples',
          code: `
      <p>Default State</p>
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
      </div>
          `
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

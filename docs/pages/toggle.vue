<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
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
          withContent: false,
          code: `<div class="hx-card-content flex flex-col gap-4 justify-center">
  <p>Off</p>
  <div class="hx-toggle">
    <label>
      Off
      <input type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>

  <p>On</p>
  <div class="hx-toggle">
    <label>
      Off
      <input type="checkbox" checked>
      <span class="lever"></span>
      On
    </label>
  </div>
  
  <p>Disabled</p>
  <div class="hx-toggle">
    <label>
      Enable option
      <input disabled type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>

  <label class="hx-toggle">
    <span>Off switch</span>
    <input type="checkbox" role="switch">
    <span class="on" aria-hidden="true">On</span>
    <span class="off" aria-hidden="true">Off</span>
  </label>

  <label class="hx-toggle">
    <span>On switch</span>
    <input type="checkbox" role="switch" checked>
    <span class="on" aria-hidden="true">On</span>
    <span class="off" aria-hidden="true">Off</span>
  </label>
  
  <label class="hx-toggle">
    <span>Disabled switch</span>
    <input disabled type="checkbox" role="switch">
    <span class="on" aria-hidden="true">On</span>
    <span class="off" aria-hidden="true">Off</span>
  </label>
</div>`,
        },
      ],
    }
  },
}
</script>

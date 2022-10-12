<template>
  <section class="hx-card">
    <div class="hx-card-header">
      <h2 class="h3 grow-1">{{ title }}</h2>

      <div class="hx-tooltip-container hoverable inline-flex">
        <button
          class="hx-button flat icon"
          v-on:click="toggleCode"
          v-if="code !== '<h1>Code here</h1>'"
          :aria-expanded="`${!!codeVisible}`"
          :aria-controls="`${title} code snippet`"
          aria-label="Toggle code snippet"
        >
          <span class="hx-icon-control">
            <i class="hx-icon icon-code"></i>
          </span>
        </button>

        <div class="hx-tooltip left" role="tooltip">Show code</div>
      </div>
    </div>
    <div class="hx-card-content p-0" :id="`${title} code snippet`">
      <pre
        v-highlightjs
        ref="code"
        class="hx-code square"
        :class="{ open: codeVisible }"
      ><code>{{ code }}</code></pre>
    </div>
    <div
      class="hx-card-content"
      v-if="!!withContent"
      v-html="example"
      :class="background"
    ></div>
    <div
      class="contents"
      v-if="!withContent"
      v-html="example"
      :class="background"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    title: { default: 'Example title', type: String },
    code: { default: '<h1>Code here</h1>', type: String },
    example: { default: 'Example goes here', type: String },
    background: { default: '', type: String },
    visible: { default: false, type: Boolean },
    withContent: { default: true, type: Boolean },
  },
  data() {
    return {
      codeVisible: this.visible,
    }
  },
  methods: {
    toggleCode() {
      this.codeVisible = !this.codeVisible
    },
  },
}
</script>

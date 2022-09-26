<template>
  <section class="hx-card">
    <div class="hx-card-header">
      <h2 class="h3 grow-1">{{ title }}</h2>
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
    </div>
    <div class="hx-card-content p-0 hx-code" :id="`${title} code snippet`">
      <pre
        v-highlightjs
        ref="code"
        style="border-radius: 2px"
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

<style lang="scss" scoped>
.hx-code {
  overflow: auto;

  pre {
    display: none;

    &.open {
      display: flex;
      margin-bottom: 0;

      code {
        flex: 1 0 auto;
      }
    }
  }
}
</style>

<template>
  <div class="hx-card example is-flat mb-3">
    <div class="hx-card-header">
      <h4 class="hx-card-header-title my-2">{{ title }}</h4>
      <button
        class="hx-button is-round is-transparent is-small is-pulled-right mx-4"
        v-on:click="toggleCode"
        v-if="code !== '<h1>Code here</h1>'"
        :aria-expanded="`${!!codeVisible}`"
        :aria-controls="`${title} code snippet`"
        aria-label="Toggle code snippet"
      >
        <span class="hx-icon-control">
          <i class="hx-icon icon-code is-medium"></i>
        </span>
      </button>
    </div>
    <div
      class="hx-card-content pa-0 hx-code"
      :id="`${title} code snippet`"
    >
      <pre
        v-highlightjs
        ref="code"
        :class="{ open: codeVisible }"
      >
        <code>{{ code }}</code>
      </pre>
    </div>
    <div
      class="hx-card-content"
      v-html="example"
      :class="background"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    title: { default: 'Example title', type: String },
    code: { default: '<h1>Code here</h1>', type: String },
    example: { default: 'Example goes here', type: String },
    background: { default: '', type: String },
    visible: { default: false, type: Boolean }
  },
  data() {
    return {
      codeVisible: this.visible
    }
  },
  methods: {
    toggleCode() {
      this.codeVisible = !this.codeVisible
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.hx-code {
  overflow: auto;
  transition: 0.3s ease-in-out;

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

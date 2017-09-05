<template>
  <div class="hx-card example is-flat mb-3">
    <div class="hx-card-header">
      <h4 class="hx-card-header-title my-2">{{ title }}</h4>
      <button class="hx-button is-pulled-right mx-4" v-on:click="toggleCode">Code</button>
    </div>
    <div class="hx-card-content pa-0 hx-code" :style="{ height: ht + 'px' }">
      <pre v-highlightjs ref="code"><code class="html">
{{ code }}
      </code></pre>
    </div>
    <div class="hx-card-content" v-html="example" :class="background"></div>
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
  data () {
    return {
      ht: 0,
      codeVisible: this.visible
    }
  },
  methods: {
    toggleCode () {
      this.codeVisible = !this.codeVisible
      if (this.ht === 0) {
        this.getHeight()
      } else {
        this.ht = 0
      }
    },
    getHeight () {
      this.ht = this.$refs.code.clientHeight
    }
  },
  mounted () {
    if (this.codeVisible === true) {
      this.getHeight()
    }
  }
}
</script>

<style lang="scss" scoped>
.hx-code {
  overflow: auto;
  transition: .3s ease-in-out;
}
</style>

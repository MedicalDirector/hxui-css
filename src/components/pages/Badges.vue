<template>
  <div id="badges">
    <h1 class="hx-title">Badges</h1>
    <h2 class="hx-subtitle">Small and adaptive tag for adding context to just about any content.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" key="i"
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
          title: 'Badges for text',
          code: `
<div class="has-text-centered">
  <span class="hx-badge">Default</span>
  <span class="hx-badge is-white">White</span>
  <span class="hx-badge is-outlined">Outlined</span>
  <span class="hx-badge is-dark">Dark</span>
  <span class="hx-badge is-black">Black</span>
  <span class="hx-badge is-primary">Primary</span>
  <span class="hx-badge is-info">Info</span>
  <span class="hx-badge is-warning">Warning</span>
  <span class="hx-badge is-danger">Danger</span>
</div>
          `
        },
        {
          title: 'Badges for numerical values',
          code: `
<div class="has-text-centered">
  <span class="hx-badge">0</span>
  <span class="hx-badge is-white">34</span>
  <span class="hx-badge is-outlined">83</span>
  <span class="hx-badge is-dark">87</span>
  <span class="hx-badge is-black">59</span>
  <span class="hx-badge is-primary">99+</span>
  <span class="hx-badge is-info">3</span>
  <span class="hx-badge is-warning">6</span>
  <span class="hx-badge is-danger">2</span>
</div>
          `
        },
        {
          title: 'Sizes',
          code: `
<div class="has-text-centered">
  <p>There are 2 additional sizes</p>
  <p>
    <span class="hx-badge is-outlined is-medium">Medium</span>
  </p>
  <p>
    <span class="hx-badge is-danger is-large">Large</span>
  </p>
</div>
          `
        },
        {
          title: 'Add a delete button',
          code: `
<div class="has-text-centered">
  <p>Add a delete button</p>
  <p>
    <span class="hx-badge is-outlined">Default
      <button class="hx-delete is-small"></button>
    </span>
  </p>
  <p>
    <span class="hx-badge is-warning is-medium">Medium
      <button class="hx-delete is-small"></button>
    </span>
  </p>
  <p>
    <span class="hx-badge is-danger is-large">Large
      <button class="hx-delete"></button>
    </span>
  </p>
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

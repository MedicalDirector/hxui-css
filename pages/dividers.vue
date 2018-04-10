<template>
  <div id="spacing">
    <h1 class="hx-title">Dividers</h1>
    <h2 class="hx-subtitle">These dividers are useful to divide content, indicating what is related or not.</h2>

    <hr>

    <h4 class="mt-10">Type</h4>
    <ul>
      <li>
        <code>is-perforated</code> - to divide related content. Just like perforated paper.
      </li>
      <li>
        <code>is-divided</code> - to divide none related content
      </li>
    </ul>

    <br>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
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
          title: 'Examples',
          code: `
<div class="hx-columns">
  <div class="hx-column">
    <div class="hx-card">
        <div class="is-perforated py-8 px-4">Content</div>
        <div class="py-4 px-4">Related Content</div>
    </div>
  </div>
   <div class="hx-column">
    <div class="hx-card">
        <div class="py-8 px-4">Content</div>
        <div class="is-divided py-4 px-4">Non Related Content</div>
    </div>
  </div>
</div>
          `
        }]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

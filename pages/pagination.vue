<template>
  <div id="pagination">
    <h1 class="hx-title">Pagination</h1>
    <h2 class="hx-subtitle">This component provides pagination links for multi-page pagination.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
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
          title: 'Example',
          code: `
<ul class="hx-pagination">
  <li class="is-first is-disabled"><a  href="">First</a></li>
  <li class="is-prev"><a  href="">Previous</a></li>
  <li class="is-current"><a href="">1</a></li>
  <li><a href="">2</a></li>
  <li><a href="">3</a></li>
  <li><a href="">4</a></li>
  <li><a href="">5</a></li>
  <li><a href="">6</a></li>
  <li><a href="">7</a></li>
  <li class="is-next"><a href="">Next</a></li>
  <li class="is-last"><a href="">Last</a></li>
</ul>
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

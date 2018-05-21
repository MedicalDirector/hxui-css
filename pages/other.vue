<template>
  <div id="other">
    <h1 class="hx-title">Other</h1>
    <h2 class="hx-subtitle">Generic helper css classes</h2>

    <hr>

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
          title: 'Utilities',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td><code>.is-clipped</code></td>
      <td>Sets overflow:hidden;</td>
    </tr>
     <tr>
      <td><code>.is-overlay</code></td>
      <td>Sets position:absolute; and top,right,bottom,left positions to 0;</td>
    </tr>
     <tr>
      <td><code>.has-pointer</code></td>
      <td>Adds hand pointer to any element</td>
    </tr>
     <tr>
      <td><code>.is-disabled</code></td>
      <td>Removes pointer events from element</td>
    </tr>
    <tr>
      <td><code>.is-marginless</code></td>
      <td>Removes all margins from element</td>
    </tr>
    <tr>
      <td><code>.is-paddingless</code></td>
      <td>Removes all padding from element</td>
    </tr>
  </tbody>
</table>
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
  .elipsedText{
    width:250px;
  }
</style>

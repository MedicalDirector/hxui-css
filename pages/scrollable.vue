<template>
  <div id="scrollable">
    <h1 class="hx-title">Scrollable</h1>
    <h2 class="hx-subtitle">Helpers when working with scrollable containers</h2>

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
          title: 'Set Scrolling',
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
      <td><code>.is-scrollable-y</code></td>
      <td>Set scrolling on the y axis</td>
    </tr>
     <tr>
      <td><code>.is-scrollable-x</code></td>
      <td>Set scrolling on the x axis</td>
    </tr>
    <tr>
      <td><code>.is-scrollable</code></td>
      <td>Set scrolling on both the x & y axis</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Unset Scrolling',
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
      <td><code>.not-scrollable-y</code></td>
      <td>Unset scrolling on the y axis</td>
    </tr>
     <tr>
      <td><code>.not-scrollable-x</code></td>
      <td>Unset scrolling on the x axis</td>
    </tr>
    <tr>
      <td><code>.not-scrollable</code></td>
      <td>Unset scrolling on both the x & y axis</td>
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

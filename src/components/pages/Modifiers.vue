<template>
  <div id="modifiers">
    <h1 class="hx-title">Modifiers</h1>
    <h2 class="hx-subtitle">Most HxUI components have alternative styles. <br>To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" key="i"
      :title="example.title"
      :example="example.code"
      :visible="false"
      :background="example.bg"
    ></expanding-code-example>

    <br>
    <h1 class="hx-title">Helper Modifiers</h1>
    <h2 class="hx-subtitle">You can apply <strong>helper modifier classes</strong> to almost any element, in order to alter its style based upon the browser's width.</h2>
    <hr>
    <br>
    <div class="hx-columns">
      <div class="hx-column">
        <table class="hx-table is-bordered">
        <tbody>

          <tr>
            <th>Overlay</th>
            <td><code>is-overlay</code></td>
            <td>Completely covers the first positioned parent</td>
          </tr>
          <tr>
            <th>Size</th>
            <td><code>is-fullwidth</code></td>
            <td>Takes up the whole width (100%)</td>
          </tr>
          <tr>
            <th rowspan="3">Text</th>
            <td><code>has-text-centered</code></td>
            <td>Centers the text</td>
          </tr>
          <tr>
            <td><code>has-text-left</code></td>
            <td>Text is left-aligned</td>
          </tr>
          <tr>
            <td><code>has-text-right</code></td>
            <td>Text is right-aligned</td>
          </tr>
          <tr>
            <th rowspan="3">Other</th>
            <td><code>is-marginless</code></td>
            <td>Removes any <strong>margin</strong></td>
          </tr>
          <tr>
            <td><code>is-paddingless</code></td>
            <td>Removes any <strong>padding</strong></td>
          </tr>
          <tr>
            <td><code>is-unselectable</code></td>
            <td>Prevents the text from being <strong>selectable</strong></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
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

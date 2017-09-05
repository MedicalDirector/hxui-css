<template>
  <div id="dropdown">
    <h1 class="hx-title">Dropdown</h1>
    <h2 class="hx-subtitle">Contextual overlay for displaying lists of links or custom components.</h2>

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
          title: 'Contextual menu',
          code: `
<div class="has-text-centered">
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <a class="hx-dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br />
          `
        },
        {
          title: 'Grouped contextual menu',
          code: `
<div class="has-text-centered">
  <p>Add a header to label sections of actions and/or dividers in any dropdown menu.</p>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <div class="hx-dropdown-header">Dropdown header</div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <div class="hx-dropdown-divider"></div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br /><br /><br /><br /><br />
          `
        },
        {
          title: 'Position',
          code: `
<div class="has-text-centered">
  <p>Position menu <code>.is-dropup</code>, <code>.is-left</code>, <code>.is-right</code>. Default is bottom left</p>
  <div class="hx-dropdown is-dropup is-open" style="margin-top:12rem;">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <div class="hx-dropdown-header">Dropdown header</div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <div class="hx-dropdown-divider"></div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
    </div>
  </div>
</div>
          `
        },
        {
          title: 'Custom',
          code: `
<div class="has-text-centered">
  <p>Add any component within. No padding, no margins.<br>Styling should be controlled by the component.</p>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <h1 class="hx-title">Custom Component</h1>
      <h2 class="hx-subtitle">Supports any type of content</h2>
      <hr>
      <table class="table">
        <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
          <th>Col 4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Col 1</td>
          <td>Col 2</td>
          <td>Col 3</td>
          <td>Col 4</td>
          <td>Col 4</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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

<template>
  <div id="text">
    <h1 class="hx-title">Text</h1>
    <h2 class="hx-subtitle">Helpers when working with text </h2>

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
          title: 'Alignments',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td><code>.is-text-center</code></td>
      <td class="is-text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
     <tr>
      <td><code>.is-text-left</code></td>
      <td class="is-text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
     <tr>
      <td><code>.is-text-right</code></td>
      <td class="is-text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-nowrap</code></td>
      <td class="is-text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Transformation',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-lowercase</code></td>
      <td class="is-text-lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-uppercase</code></td>
      <td class="is-text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-capitalise</code></td>
      <td class="is-text-capitalise">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
     <tr>
      <td><code>.is-text-elipsed</code></td>
      <td><div class="is-text-elipsed elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Decoration',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-line-through</code></td>
      <td class="is-text-line-through">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-underline</code></td>
      <td class="is-text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Weights & italics',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-weight-normal</code></td>
      <td class="is-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-bold</code></td>
      <td class="is-text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-italic</code></td>
      <td class="is-text-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Selectable',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><code>.is-text-unselectable</code></td>
      <td class="is-text-unselectable">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-select-all</code></td>
      <td class="is-text-select-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Colours',
          code: `
<p>Easily colour text with text colour classes</p>
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><code>.is-black</code></td>
      <td class="is-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-white</code></td>
      <td class="is-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>

<tr>
      <td><code>.is-light</code></td>
      <td class="is-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-lighter</code></td>
      <td class="is-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>


      <tr>
      <td><code>.is-lightest</code></td>
      <td class="is-lightest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-dark</code></td>
      <td class="is-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-primary</code></td>
      <td class="is-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-info</code></td>
      <td class="is-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-warning</code></td>
      <td class="is-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-danger</code></td>
      <td><span class="is-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></td>
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

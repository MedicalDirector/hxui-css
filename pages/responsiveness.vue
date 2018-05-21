<template>
  <div id="responsiveness">
    <h1 class="hx-title">Responsiveness</h1>
    <h2 class="hx-subtitle">Helpers when dealing with responsive layouts/elements</h2>

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
          title: 'Breakpoints',
          code: `
<p>There are 5 breakpoints available in HxUI:</p>
<table class="hx-table matrix">
  <thead>
    <tr>
      <th>Mobile<br><small>Up to 768px</small></th>
      <th>Tablet<br><small>Between 769px and 1023px</small></th>
      <th>Desktop<br><small>Between 1024px and 1215px</small></th>
      <th>Widescreen<br><small>Between 1216px and 1407px</small></th>
      <th>Full HD<br><small>1408px and above</small></th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td class="visible"><div>Mobile</div></td>
    <td class="hidden" colspan="4"><div>&nbsp;</div></td>
  </tr>
  <tr>
    <td class="hidden"><div>&nbsp;</div></td>
    <td class="visible" colspan="4"><div>Tablet</div></td>
  </tr>
   <tr>
    <td class="hidden" colspan="2"><div>&nbsp;</div></td>
    <td class="visible" colspan="3"><div>Desktop</div></td>
  </tr>
   <tr>
    <td class="hidden" colspan="3"><div>&nbsp;</div></td>
    <td class="visible" colspan="2"><div>Widescreen</div></td>
  </tr>
   <tr>
    <td class="hidden" colspan="4"><div>&nbsp;</div></td>
    <td class="visible"><div>FullHD</div></td>
  </tr>
  </tbody>
  </table>
          `
        },
        {
          title: 'Visibility',
          code: `

<div class="hx-columns">
  <div class="hx-column">
    <h5>Show</h5>
    <p>To show an element you can use <code>.is-{display}</code> class.<p>
    <p>Just replace <code>{display}</code> with one of the following display types:</p>
    <ul>
      <li>block</li>
      <li>flex</li>
      <li>inline</li>
      <li>inline-block</li>
      <li>inline-flex</li>
    </ul>

    <p>To show an element by breakpoint type:<p>
    <ul>
       <li><code>.is-{display}-mobile</code></li>
       <li><code>.is-{display}-tablet</code></li>
       <li><code>.is-{display}-desktop</code></li>
       <li><code>.is-{display}-widescreen</code></li>
       <li><code>.is-{display}-fullhd</code></li>
    </ul>
  </div>
  <div class="hx-column">

    <h5>Hide</h5>
    <p>To hide any element anytime just use the <code>.is-hidden</code> class.<p>
    <p>To show an element by breakpoint type:<p>
    <ul>
       <li><code>.is-hidden-mobile</code></li>
       <li><code>.is-hidden-tablet</code></li>
       <li><code>.is-hidden-desktop</code></li>
       <li><code>.is-hidden-widescreen</code></li>
       <li><code>.is-hidden-fullhd</code></li>
    </ul>

  </div>
</div>





          `
        },
        {
          title: 'Visibility Example',
          code: `
<p>To test the examples below you can use the browsers resolution emulator or simply resize the browser.</p>
<br>
<div class="hx-columns responsiveExamples">
  <div class="hx-column has-text-centered is-block-mobile">
    <p class="hx-bg-primary pa-5">Mobile</p>
  </div>
  <div class="hx-column has-text-centered is-block-tablet">
    <p class="hx-bg-primary pa-5">Tablet</p>
  </div>
  <div class="hx-column has-text-centered is-block-desktop">
    <p class="hx-bg-primary pa-5">Desktop</p>
  </div>
  <div class="hx-column has-text-centered is-block-widescreen">
    <p class="hx-bg-primary pa-5">Widescreen</p>
  </div>
   <div class="hx-column has-text-centered is-block-fullhd">
    <p class="hx-bg-primary pa-5">Full Hd</p>
  </div>
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

<style lang="scss">
  .elipsedText{
    width:250px;
  }

  .responsiveExamples > div.hx-column {
    display:none;
  }

  table.matrix > tbody > tr > td,
  table.matrix > tbody > tr > th{
    background-color: transparent !important;
    border:none !important;

  }

  .hidden > div{
    background-color:rgba(0, 0, 0, .03);
    padding:1rem;
  }

  .visible > div{
    background-color:#41b987;
    color:#fff;
    padding:1rem;
  }
</style>


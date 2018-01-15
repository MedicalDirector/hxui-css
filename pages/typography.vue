<template>
  <div id="typo">
    <h1 class="hx-title">Typography</h1>
    <h2 class="hx-subtitle">Simple typography to add depth to your page</h2>

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
          title: 'Titles',
          code: `
<p>There are <strong>2 types</strong> of titles:</p>
<ul>
  <li><code>.hx-title</code></li>
  <li><code>.hx-subtitle</code></li>
</ul>
<br>
<h1 class="hx-title">Title</h1>
<h2 class="hx-subtitle">Subtitle</h2>
          `
        },
        {
          title: 'Headings',
          code: `
<p>There are <strong>6 sizes</strong> available:</p>
<ul>
  <li><code>&lt;h1&gt;</code> or <code>.h1</code></li>
  <li><code>&lt;h2&gt;</code> or <code>.h2</code></li>
  <li><code>&lt;h3&gt;</code> or <code>.h3</code></li>
  <li><code>&lt;h4&gt;</code> or <code>.h4</code></li>
  <li><code>&lt;h5&gt;</code> or <code>.h5</code></li>
  <li><code>&lt;h6&gt;</code> or <code>.h6</code></li>
</ul>
<br>
<h1>h1. HxUI heading</h1>
<h2>h2. HxUI heading</h2>
<h3>h3. HxUI heading</h3>
<h4>h4. HxUI heading</h4>
<h5>h5. HxUI heading</h5>
<h6>h6. HxUI heading</h6>
          `
        },
        {
          title: 'Paragraphs and Inline text elements',
          code: `
<div class="hx-columns">
  <div class="hx-column is-4">
    <ul>
      <li><code>&lt;p&gt;</code> Paragraphs</li>
      <li><code>&lt;mark&gt;</code> Mark</li>
      <li><code>&lt;del&gt;</code> Delete</li>
      <li><code>&lt;s&gt;</code> Strikeline</li>
      <li><code>&lt;ins&gt;</code> Insert</li>
      <li><code>&lt;u&gt;</code> Underline</li>
      <li><code>&lt;small&gt;</code> Small</li>
      <li><code>&lt;strong&gt;</code> Strong</li>
      <li><code>&lt;em&gt;</code> Emphasized</li>
    </ul>
  </div>
  <div class="hx-column">
    <p>This is a paragraph.</p>
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
  </div>
</div>
          `
        },
        {
          title: 'Lists',
          code: `
<div class="hx-columns">
  <div class="hx-column is-4">
    <p>Use an unordered list to list things, if the order of the items doesn't matter.</p>
    <p>And a definition list <code>&lt;dl&gt;</code> is used to display name-value pairs, <br>like metadata or a dictionary definition. <br>Each term <code>&lt;dt&gt;</code> is paired with one or more definitions <code>&lt;dd&gt;</code>.</p>
    <ul>
      <li><code>&lt;ul&gt;</code> Unorder list</li>
      <li><code>&lt;ol&gt;</code> Order list</li>
      <li><code>&lt;dl&gt;</code> Definition Lists</li>
    </ul>
  </div>
  <div class="hx-column is-2 is-offset-1">
    <p><strong>Unordered lists</strong></p>
    <ul>
      <li>List item</li>
      <li>List item</li>
      <ul>
        <li>List item</li>
      </ul>
    </ul>
    <p><strong>Ordered lists</strong></p>
    <ol>
      <li>List item</li>
      <li>List item</li>
      <ol>
        <li>List item</li>
      </ol>
    </ol>
  </div>
  <div class="hx-column is-3">
    <p><strong>Definition list</strong></p>
    <dl>
      <dt>Time</dt>
      <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
      <dt>Space</dt>
      <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
      <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
    </dl>
  </div>
</div>
          `
        },
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
      <td><code>.is-text-nowrap</code></td>
      <td class="is-text-nowrap">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-truncate</code></td>
      <td class="is-text-truncate">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-center</code></td>
      <td class="is-text-center">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
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
      <td class="is-text-lowercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-uppercase</code></td>
      <td class="is-text-uppercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-capitalise</code></td>
      <td class="is-text-capitalise">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
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
      <td class="is-text-weight-normal">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-bold</code></td>
      <td class="is-text-bold">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-text-italic</code></td>
      <td class="is-text-italic">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
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
      <td><code>.is-white</code></td>
      <td class="is-white">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-black</code></td>
      <td class="is-black">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-light</code></td>
      <td class="is-light">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-dark</code></td>
      <td class="is-dark">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-primary</code></td>
      <td class="is-primary">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-info</code></td>
      <td class="is-info">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-warning</code></td>
      <td class="is-warning">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
    </tr>
    <tr>
      <td><code>.is-danger</code></td>
      <td class="is-danger">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
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
</style>

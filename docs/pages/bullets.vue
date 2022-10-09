<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Bulleted lists</h1>
      <h2 class="hx-subtitle">
        A simple configurable way of using <code>ul</code> list.
      </h2>
    </div>

    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'

export default {
  components: {
    ExpandingCodeExample,
  },
  data() {
    return {
      examples: [
        {
          title: 'Standard list',
          code: `
  <p>A simple <strong>Unordered</strong> list with the option to change bullet colours. </p>
  <p>Simply add a class <code>.hx-list</code> to the list and add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>
  <ul class="hx-list">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
            `,
        },
        {
          title: 'List with status',
          code: `
  <p>An <strong>Unordered</strong> list with <strong>status</strong> is used to indicate a particular status. </p>
  <p>Simply add a class <code>.hx-list</code> <code>.has-status</code> to the list. To change colours, add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>
  <ul class="hx-list has-status">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <br />
  <p>To turn the bullets into <strong>Unchecked</strong> circles, simply add <code>.is-not-checked</code> to the list item.</p>
  <ul class="hx-list has-status">
    <li class="is-not-checked">Item one - default</li>
    <li class="is-not-checked is-success">Item two - success</li>
    <li class="is-not-checked is-warning">Item three - warning</li>
    <li class="is-not-checked is-danger">Item four - danger</li>
    <li class="is-not-checked is-info">Item five - info</li>
  </ul>
  <br />
  <p>To turn the bullets into <strong>Checked</strong> circles, simply add <code>.is-checked</code> to the list item.</p>
  <ul class="hx-list has-status">
    <li class="is-checked">Item one - default</li>
    <li class="is-checked is-success">Item two - success</li>
    <li class="is-checked is-warning">Item three - warning</li>
    <li class="is-checked is-danger">Item four - danger</li>
    <li class="is-checked is-info">Item five - info</li>
  </ul>
  
            `,
        },
        {
          title: 'Modifiers',
          code: `
  <h5>Layout</h5>
  <p>By default a list will be layed out vertically, however sometimes you will need a horizontal layout. Simply add the class <code>.is-horizontal</code> to the list.</p>
  <ul class="hx-list is-horizontal">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <p>&nbsp;</p>
  <h5>Invert</h5>
  <p>Invert the style by using the <code>.is-inverse</code> modifier. </p>
  
  <ul class="hx-list is-horizontal is-inverse">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <br />
  <ul class="hx-list has-status is-horizontal is-inverse">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <br />
  
  <ul class="hx-list has-status is-horizontal is-inverse">
    <li class="is-not-checked">Item one - default</li>
    <li class="is-not-checked is-success">Item two - success</li>
    <li class="is-not-checked is-warning">Item three - warning</li>
    <li class="is-not-checked is-danger">Item four - danger</li>
    <li class="is-not-checked is-info">Item five - info</li>
  </ul>
  <br />
  
  <ul class="hx-list has-status is-horizontal is-inverse">
    <li class="is-checked">Item one - default</li>
    <li class="is-checked is-success">Item two - success</li>
    <li class="is-checked is-warning">Item three - warning</li>
    <li class="is-checked is-danger">Item four - danger</li>
    <li class="is-checked is-info">Item five - info</li>
  </ul>
  <p>&nbsp;</p>
  <h5>Bordered</h5>
  <p>Inverted styles are predominantly designed to work on white backgrounds. <br>
  In some cases they will go on other background colours that make the inverted style hard to see. <br>
  Use the  <code>.is-bordered</code> modifier to make it stand out. </p>
  
  <ul class="hx-list is-bordered is-horizontal is-inverse">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <br />
  <ul class="hx-list is-bordered has-status is-horizontal is-inverse">
    <li>Item one - default</li>
    <li class="is-success">Item two - success</li>
    <li class="is-warning">Item three - warning</li>
    <li class="is-danger">Item four - danger</li>
    <li class="is-info">Item five - info</li>
  </ul>
  <br />
  
  <ul class="hx-list is-bordered has-status is-horizontal is-inverse">
    <li class="is-not-checked">Item one - default</li>
    <li class="is-not-checked is-success">Item two - success</li>
    <li class="is-not-checked is-warning">Item three - warning</li>
    <li class="is-not-checked is-danger">Item four - danger</li>
    <li class="is-not-checked is-info">Item five - info</li>
  </ul>
  <br />
  
  <ul class="hx-list is-bordered has-status is-horizontal is-inverse">
    <li class="is-checked">Item one - default</li>
    <li class="is-checked is-success">Item two - success</li>
    <li class="is-checked is-warning">Item three - warning</li>
    <li class="is-checked is-danger">Item four - danger</li>
    <li class="is-checked is-info">Item five - info</li>
  </ul>
            `,
        },
      ],
    }
  },
}
</script>

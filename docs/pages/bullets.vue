<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
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
          title: 'Basic',
          code: `<p class="hx-prose">Add class <code>.hx-bullet-list</code> for an <strong>unordered</strong> list</p>
<p class="hx-prose mb-4">
  To change colours, add one of <code>.is-success</code>,
  <code>.is-warning</code>, <code>.is-info</code> or
  <code>.is-danger</code> to the list item.
</p>

<ul class="hx-bullet-list">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>`,
        },
        {
          title: 'With status',
          code: `<p class="hx-prose">Add modifier <code>.has-status</code> to indicate a particular status.</p>
<p class="hx-prose mb-4">
  To change colours, add one of <code>.is-success</code>,
  <code>.is-warning</code>, <code>.is-info</code> or
  <code>.is-danger</code> to the list item.
</p>

<ul class="hx-bullet-list has-status">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>

<br />

<p class="hx-prose mb-4">
  Add modifier <code>.is-not-checked</code> to turn bullets into <strong>unchecked</strong> circles.
</p>
<ul class="hx-bullet-list has-status">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>

<br />
<p class="hx-prose mb-4">
  Add modifier <code>.is-checked</code> to turn bullets into <strong>checked</strong> circles.
</p>
<ul class="hx-bullet-list has-status">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>`,
        },
        {
          title: 'Arrangement',
          code: `<p class="hx-prose mb-4">
  Add modifier <code>.is-horizontal</code> to the list to arrange the bullets horizontally.
</p>

<ul class="hx-bullet-list is-horizontal">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>`,
        },
        {
          title: 'Inverted',
          code: `<p class="hx-prose mb-4">
  Add modifier <code>.is-inverse</code> to the invert the bullet styles in the list.
</p>
  
<ul class="hx-bullet-list is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />
<ul class="hx-bullet-list has-status is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list has-status is-horizontal is-inverse">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list has-status is-horizontal is-inverse">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>`,
        },
        {
          title: 'Bordered',
          code: `<p class="hx-prose mb-4">
  Add modifier <code>.is-bordered</code> to make inverted bullet styles
  stand out when used with different background colors.
</p>
  
<ul class="hx-bullet-list is-bordered is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list is-bordered has-status is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list is-bordered has-status is-horizontal is-inverse">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list is-bordered has-status is-horizontal is-inverse">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>`,
        },
      ],
    }
  },
}
</script>

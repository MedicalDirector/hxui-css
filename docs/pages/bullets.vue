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
  To change colours, add one of <code>.success</code>,
  <code>.warning</code>, <code>.info</code> or
  <code>.danger</code> to the list item.
</p>

<ul class="hx-bullet-list">
  <li>Item one - default</li>
  <li class="success">Item two - success</li>
  <li class="warning">Item three - warning</li>
  <li class="danger">Item four - danger</li>
  <li class="info">Item five - info</li>
</ul>`,
        },
        {
          title: 'With status',
          code: `<p class="hx-prose">Add modifier <code>.status</code> to indicate a particular status.</p>
<p class="hx-prose mb-4">
  To change colours, add one of <code>.success</code>,
  <code>.warning</code>, <code>.info</code> or
  <code>.danger</code> to the list item.
</p>

<ul class="hx-bullet-list status">
  <li>Item one - default</li>
  <li class="success">Item two - success</li>
  <li class="warning">Item three - warning</li>
  <li class="danger">Item four - danger</li>
  <li class="info">Item five - info</li>
</ul>

<br />

<p class="hx-prose mb-4">
  Add modifier <code>.unchecked</code> to turn bullets into <strong>unchecked</strong> circles.
</p>
<ul class="hx-bullet-list status">
  <li class="unchecked">Item one - default</li>
  <li class="unchecked success">Item two - success</li>
  <li class="unchecked warning">Item three - warning</li>
  <li class="unchecked danger">Item four - danger</li>
  <li class="unchecked info">Item five - info</li>
</ul>

<br />
<p class="hx-prose mb-4">
  Add modifier <code>.checked</code> to turn bullets into <strong>checked</strong> circles.
</p>
<ul class="hx-bullet-list status">
  <li class="checked">Item one - default</li>
  <li class="checked success">Item two - success</li>
  <li class="checked warning">Item three - warning</li>
  <li class="checked danger">Item four - danger</li>
  <li class="checked info">Item five - info</li>
</ul>`,
        },
        {
          title: 'Arrangement',
          code: `<p class="hx-prose mb-4">
  Add modifier <code>.horizontal</code> to the list to arrange the bullets horizontally.
</p>

<ul class="hx-bullet-list horizontal">
  <li>Item one - default</li>
  <li class="success">Item two - success</li>
  <li class="warning">Item three - warning</li>
  <li class="danger">Item four - danger</li>
  <li class="info">Item five - info</li>
</ul>`,
        },
        {
          title: 'Flat',
          code: `<p class="hx-prose mb-4">
  Add modifier <code>.outlined</code> to the invert the bullet styles in the list.
</p>

<ul class="hx-bullet-list status horizontal outlined">
  <li class="unchecked">Item one - default</li>
  <li class="unchecked success">Item two - success</li>
  <li class="unchecked warning">Item three - warning</li>
  <li class="unchecked danger">Item four - danger</li>
  <li class="unchecked info">Item five - info</li>
</ul>
<br />

<ul class="hx-bullet-list status horizontal outlined">
  <li class="checked">Item one - default</li>
  <li class="checked success">Item two - success</li>
  <li class="checked warning">Item three - warning</li>
  <li class="checked danger">Item four - danger</li>
  <li class="checked info">Item five - info</li>
</ul>`,
        },
      ],
    }
  },
}
</script>

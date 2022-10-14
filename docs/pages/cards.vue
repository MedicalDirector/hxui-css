<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Cards</h1>
      <h2 class="hx-subtitle">
        An all-around flexible and composable component
      </h2>

      <hr />

      <p class="mb-4">
        The <strong>card</strong> component comprises several elements that you
        can mix and match:
      </p>
    </div>

    <api-table :data="data"></api-table>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(eg, i) in examples"
        :key="i"
        :title="eg.title"
        :code="eg.code"
        :example="eg.code"
        :visible="false"
        :className="eg.className"
        :styleName="eg.styleName"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data: () => ({
    data: [
      {
        class: 'hx-card',
        type: 'component',
        description: 'Main container element',
      },
      {
        class: 'hx-card__header',
        type: 'sub-component',
        description: 'Horizontal bar with a shadow',
      },
      {
        class: 'hx-card__image',
        type: 'sub-component',
        description: 'A fullwidth container for a responsive image',
      },
      {
        class: 'hx-card__content',
        type: 'sub-component',
        description: 'A container for the main content',
      },
      {
        class: '{padding}',
        type: 'modifier',
        description: '.compact or .comfortable',
      },
      {
        class: 'hx-card__footer',
        type: 'sub-component',
        description: 'A horizontal list of controls',
      },
    ],
    examples: [
      {
        title: 'Basic',
        className: 'grid gap-4 phablet:grid-cols-3',
        code: `<div class="hidden phablet:!block"></div>
<div class="hx-card">
  <div class="hx-card__content">
    <p class="b0 font-bold">Choi</p>
    <p class="b0">Ella</p>
    <br>
    <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
  </div>
</div>
<div class="hidden phablet:!block"></div>`,
      },
      {
        title: 'Border highlighted card',
        className: 'grid grid-cols-1 phablet:grid-cols-2 gap-4',
        code: `<div class="hx-prose">
  <p>Add <code>.highlight</code> to the card for border highlighted card.</p>
  <p>You can also add modifiers for different colour border.</p>
  <ul>
    <li><code>.highlight-info</code></li>
    <li><code>.highlight-success</code> (default)</li>
    <li><code>.highlight-caution</code></li>
    <li><code>.highlight-warning</code></li>
    <li><code>.highlight-danger</code></li>
  </ul>
</div>

<div class="grid grid-cols-1 phablet:grid-cols-2 gap-4">
  <div class="hx-card highlight highlight-info">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>

  <div class="hx-card highlight highlight-success">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>

  <div class="hx-card highlight highlight-warning">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>

  <div class="hx-card highlight highlight-caution">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>

  <div class="hx-card highlight highlight-danger">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Border sizes',
        className: 'grid grid-cols-1 phablet:grid-cols-2 gap-4',
        code: `<div class="hx-prose">
  <p>You can add modifiers for different border sizes.</p>
  <ul>
    <li><code>.highlight-sm</code> (default)</li>
    <li><code>.highlight-lg</code></li>
  </ul>
</div>

<div class="grid grid-cols-1 phablet:grid-cols-2 gap-4">
  <div class="hx-card highlight">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>

  <div class="hx-card highlight highlight-lg">
    <div class="hx-card__content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Raised',
        className: 'grid grid-cols-1 phablet:grid-cols-2 gap-4',
        code: `<div class="hx-prose">
  <p>Add <code>.raised</code> modifier class to add depth to cards.</p>
  <ul>
    <li><code>hovered</code></li>
    <li><code>focused</code></li>
    <li><code>active</code></li>
  </ul>
</div>

<div class="grid grid-cols-1 phablet:grid-cols-2 gap-4">
  <div class="hx-card raised hover">
    <div class="hx-card__content">
      <div class="">
        <div><strong>Choi</strong></div>
        <div>Ella</div>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
  </div>

  <div class="hx-card raised focus">
    <div class="hx-card__content">
      <div class="">
        <div><strong>Choi</strong></div>
        <div>Ella</div>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
  </div>

  <div class="hx-card raised active">
    <div class="hx-card__content">
      <div class="">
        <div><strong>Choi</strong></div>
        <div>Ella</div>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  }),
}
</script>

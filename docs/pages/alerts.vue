<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Alerts</h1>
      <h2 class="hx-subtitle">
        The alert component is a small complete navigation component.
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :withContent="example.withContent"
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
  data() {
    return {
      data: [
        {
          class: 'hx-alert[role="alert"]',
          type: 'component',
          description:
            'Main element. Requires adding element attribute of role="alert".',
        },
        {
          class: '{context}',
          type: 'modifier',
          description: 'Context: success (default), danger, warning, info',
        },
        {
          class: 'compact',
          type: 'modifier',
          description: 'Reduced padding',
        },
        {
          class: 'hx-alert__content',
          type: 'sub-component',
          description: 'Content element (class is optional, element is not)',
        },
      ],
      examples: [
        {
          title: 'Context',
          withContent: false,
          code: `<div class="hx-card__content grid">
  <p class="hx-prose">
    Add any of the following modifiers to control the context.
  </p>
  <p class="hx-prose">
    Note that close buttons and icons can be changed / removed.
  </p>

  <p class="hx-prose"><code>.success</code> (default)</p>
  <div class="hx-alert" role="alert">
    <span class="hx-icon-container">
      <i class="hx-icon icon-check"></i>
    </span>
    <span>
      This is a success alert
    </span>
    <button class="hx-button success flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-close-empty"></i>
      </span>
    </button>
  </div>

  <p class="hx-prose"><code>.warning</code></p>
  <div class="hx-alert warning" role="alert">
    <span class="hx-icon-container">
      <i class="hx-icon icon-exclamation"></i>
    </span>
    <span>
      This is a warning alert
    </span>
    <button class="hx-button warning flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-close-empty"></i>
      </span>
    </button>
  </div>

  <p class="hx-prose"><code>.danger</code></p>
  <div class="hx-alert danger" role="alert">
    <span class="hx-icon-container">
      <i class="hx-icon icon-exclamation"></i>
    </span>
    <span>
      This is a danger alert
    </span>
    <button class="hx-button danger flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-close-empty"></i>
      </span>
    </button>
  </div>

  <p class="hx-prose"><code>.info</code></p>
  <div class="hx-alert info" role="alert">
    <span class="hx-icon-container">
      <i class="hx-icon icon-information"></i>
    </span>
    <span>
      This is the default alert
    </span>
    <button class="hx-button info flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-close-empty"></i>
      </span>
    </button>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>Add modifier <code>.compact</code> for reduced vertical padding.</p>
  </div>
  
  <div class="hx-alert compact" role="alert">
    <span class="hx-icon-container">
      <i class="hx-icon icon-check"></i>
    </span>
    <span>
      This is the default alert
    </span>
    <button class="hx-button info flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-close-empty"></i>
      </span>
    </button>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

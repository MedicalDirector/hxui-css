<template>
  <article class="hx-section scrollable-y" style="min-height: 100%">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Tooltips</h1>
      <h2 class="hx-subtitle">
        This component is used to display extra information to a user about an
        element by displaying a floating description.
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent"
        :background="ex.bg"
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
          class: 'hx-tooltip-container',
          type: 'component',
          description: 'Container element (optional)',
        },
        {
          class: 'hoverable',
          type: 'modifier',
          description: 'Makes tooltip visible on hover',
        },
        {
          class: 'hx-tooltip[role="tooltip"]',
          type: 'component',
          description:
            'Main element. Requires adding element attribute of role="tooltip".',
        },
        {
          class: 'contrast',
          type: 'modifier',
          description: 'Neutral background in light mode',
        },
        {
          class: 'active',
          type: 'modifier',
          description: 'Makes tooltip visible',
        },
        {
          class: 'hx-tooltip-content',
          type: 'sub-component',
          description: 'Content element (class is optional, element is not)',
        },
      ],
      examples: [
        {
          title: 'Basic',
          withContent: false,
          code: `<div class="hx-card-content grid grid-cols-2">

  <div class="hx-flex justify-center">
    <div class="hx-tooltip active" role="tooltip">
      <span>
        A Simple Tooltip
      </span>
    </div>
  </div>

  <div class="hx-flex justify-center">
    <div class="hx-tooltip active contrast" role="tooltip">
      <span>
        A Simple Tooltip
      </span>
    </div>
  </div>
  
</div>`,
        },
        {
          title: 'Hover',
          withContent: false,
          code: `<div class="hx-card-content flex grow-1 justify-center">
  <div class="hx-tooltip-container hoverable">
    <span>Hover over me!</span>
    <div class="hx-tooltip" role="tooltip">
      <span>
        Contrasting background
      </span>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Position (on hover)',
          withContent: false,
          code: `<div class="hx-card-content grid phablet:grid-cols-2 tablet:grid-cols-4 gap-4">
  <div class="hx-flex justify-center">
    <div class="hx-tooltip-container hoverable">
      <span>Hover over me!</span>
      <div class="hx-tooltip" role="tooltip">
        <span>Bottom</span>
      </div>
    </div>
  </div>

  <div class="hx-flex justify-center">
    <div class="hx-tooltip-container hoverable">
      <span>Hover over me!</span>
      <div class="hx-tooltip top" role="tooltip">
        <span>Top</span>
      </div>
    </div>
  </div>

  <div class="hx-flex justify-center">
    <div class="hx-tooltip-container hoverable">
      <span>Hover over me!</span>
      <div class="hx-tooltip right" role="tooltip">
        <span>Right</span>
      </div>
    </div>
  </div>

  <div class="hx-flex justify-center">
    <div class="hx-tooltip-container hoverable">
      <span>Hover over me!</span>
      <div class="hx-tooltip left" role="tooltip">
        <span>Left</span>
      </div>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

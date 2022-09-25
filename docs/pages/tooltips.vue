<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Tooltips</h1>
      <h2 class="hx-subtitle">
        This component is used to display extra information to a user about an
        element by displaying a floating description.
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
        :background="ex.bg"
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
          title: 'Example',
          code: `
  <p>The tooltip structure is simple:</p>
  <ul>
    <li>
      <code>.hx-tooltip</code>: The tooltip container
      <ul>
        <li>
          <code>.hx-tooltip-content</code>: The tooltip content
        </li>
      </ul>
    </li>
  </ul>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-active">
      <div class="hx-tooltip-content">
        A Simple Tooltip
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Arrow positions',
          code: `
  <p>There are four modifiers to change the tooltip arrow alignment: <br /><code>.is-top</code>, <code>.is-right</code>, <code>.is-bottom</code>, and <code>.is-left</code></p>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-top is-active">
      <div class="hx-tooltip-content">
        Tooltip on the top
      </div>
    </div>
    <div class="hx-tooltip is-right is-active">
      <div class="hx-tooltip-content">
        Tooltip on the right
      </div>
    </div>
    <div class="hx-tooltip is-bottom is-active">
      <div class="hx-tooltip-content">
        Tooltip on the bottom
      </div>
    </div>
    <div class="hx-tooltip is-left is-active">
      <div class="hx-tooltip-content">
        Tooltip on the left
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Contextual',
          code: `
  <p>Add contextual class modifiers <code>is-white</code>, <code>is-danger</code>, <code>is-warning</code> or  <code>is-success</code> to change the colour of the tooltip.</p>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-top is-white is-active">
      <div class="hx-tooltip-content">
        Tooltip on the top
      </div>
    </div>
    <div class="hx-tooltip is-right is-white is-active">
      <div class="hx-tooltip-content">
        Tooltip on the right
      </div>
    </div>
    <div class="hx-tooltip is-bottom is-white is-active">
      <div class="hx-tooltip-content">
        Tooltip on the bottom
      </div>
    </div>
    <div class="hx-tooltip is-left is-white is-active">
      <div class="hx-tooltip-content">
        Tooltip on the left
      </div>
    </div>
  </div>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-top is-success is-active">
      <div class="hx-tooltip-content">
        Tooltip on the top
      </div>
    </div>
    <div class="hx-tooltip is-right is-success is-active">
      <div class="hx-tooltip-content">
        Tooltip on the right
      </div>
    </div>
    <div class="hx-tooltip is-bottom is-success is-active">
      <div class="hx-tooltip-content">
        Tooltip on the bottom
      </div>
    </div>
    <div class="hx-tooltip is-left is-success is-active">
      <div class="hx-tooltip-content">
        Tooltip on the left
      </div>
    </div>
  </div>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-top is-warning is-active">
      <div class="hx-tooltip-content">
        Tooltip on the top
      </div>
    </div>
    <div class="hx-tooltip is-right is-warning is-active">
      <div class="hx-tooltip-content">
        Tooltip on the right
      </div>
    </div>
    <div class="hx-tooltip is-bottom is-warning is-active">
      <div class="hx-tooltip-content">
        Tooltip on the bottom
      </div>
    </div>
    <div class="hx-tooltip is-left is-warning is-active">
      <div class="hx-tooltip-content">
        Tooltip on the left
      </div>
    </div>
  </div>
  <br />
  <div class="hx-example has-text-centered">
    <div class="hx-tooltip is-top is-danger is-active">
      <div class="hx-tooltip-content">
        Tooltip on the top
      </div>
    </div>
    <div class="hx-tooltip is-right is-danger is-active">
      <div class="hx-tooltip-content">
        Tooltip on the right
      </div>
    </div>
    <div class="hx-tooltip is-bottom is-danger is-active">
      <div class="hx-tooltip-content">
        Tooltip on the bottom
      </div>
    </div>
    <div class="hx-tooltip is-left is-danger is-active">
      <div class="hx-tooltip-content">
        Tooltip on the left
      </div>
    </div>
  </div>
            `,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.hx-example {
  .hx-tooltip {
    display: inline-block;
    margin: 0 1rem;
    position: relative;
  }
}
</style>

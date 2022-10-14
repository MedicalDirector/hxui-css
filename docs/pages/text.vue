<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Text</h1>
      <h2 class="hx-subtitle">Helpers when working with text</h2>
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
        :withContent="ex.withContent || true"
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
          title: 'Alignments',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.text-center</code></td>
      <td class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
      <tr>
      <td><code>.text-left</code></td>
      <td class="text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
      <tr>
      <td><code>.text-right</code></td>
      <td class="text-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
    <tr>
      <td><code>.text-nowrap</code></td>
      <td class="text-nowrap">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Transformation',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.text-lowercase</code></td>
      <td class="text-lowercase">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.text-uppercase</code></td>
      <td class="text-uppercase">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
    <tr>
      <td><code>.text-capitalise</code></td>
      <td class="text-capitalise">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
    <tr>
      <td><code>.is-text-ellipsis</code></td>
      <td><div class="is-text-ellipsed example-truncate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-nowrap</code></td>
      <td class="is-text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.text-truncate</code></td>
      <td class="text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Decoration',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><code>.is-text-line-through</code></td>
      <td class="is-text-line-through">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
    <tr>
      <td><code>.is-text-underline</code></td>
      <td class="is-text-underline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
    <tr>
      <td><code>.is-text-dotted</code></td>
      <td class="is-text-dotted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Weights & italics',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><code>.font-normal</code></td>
      <td class="!font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.font-light</code></td>
      <td class="!font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.font-medium</code></td>
      <td class="!font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.font-bold</code></td>
      <td class="!font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.text-italic</code></td>
      <td class="text-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Selectable',
          code: `<table class="hx-table is-striped mb-0">
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
</table>`,
        },
        {
          title: 'Line Clamping / Multi-line Ellipsis',
          code: `<div class="hx-alert info" role="alert">
  <span class="hx-icon-container mr-2">
    <i class="hx-icon is-medium icon-information" aria-hidden="true"></i>
  </span>
  <span class="hx-flex-1">
    Line clamping is possible via the <strong>-webkit-box-orient: vertical;</strong> css property which is non-standard and is not on a standards track.<br>
    Chrome does currently support it and when a replacement property is set, we will make the appropriate change accordingly.
  </span>
</div>

<div class="hx-alert warning" role="alert">
  <span class="hx-icon-container mr-2">
    <i class="hx-icon is-medium icon-exclamation" aria-hidden="true"></i>
  </span>
  <span class="hx-flex-1">
        Line clamping will only work with plain text and not html formatted text.
  </span>
</div>

<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-line-clamp-1</code></td>
      <td>
        <div class="is-text-line-clamp-1 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-line-clamp-2</code></td>
      <td>
        <div class="is-text-line-clamp-2 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-line-clamp-3</code></td>
      <td>
        <div class="is-text-line-clamp-3 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-line-clamp-4</code></td>
      <td>
        <div class="is-text-line-clamp-4 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-line-clamp-5</code></td>
      <td>
        <div class="is-text-line-clamp-5 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.is-text-line-clamp-6</code></td>
      <td>
        <div class="is-text-line-clamp-6 example-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </td>
    </tr>
  </tbody>
</table>`,
        },
      ],
    }
  },
}
</script>

<style lang="css">
.example-truncate {
  width: 250px;
}
</style>

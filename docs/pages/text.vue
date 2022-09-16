<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Text</h1>
    <h2 class="hx-subtitle">Helpers when working with text</h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
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
        <td><code>.is-text-center</code></td>
        <td class="is-text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
       <tr>
        <td><code>.is-text-left</code></td>
        <td class="is-text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
       <tr>
        <td><code>.is-text-right</code></td>
        <td class="is-text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-nowrap</code></td>
        <td class="is-text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
    </tbody>
  </table>
            `,
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
        <td class="is-text-lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-uppercase</code></td>
        <td class="is-text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-capitalise</code></td>
        <td class="is-text-capitalise">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
       <tr>
        <td><code>.is-text-ellipsis</code></td>
        <td><div class="is-text-ellipsed elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
    </tbody>
  </table>
            `,
        },
        {
          title: 'Line Clamping / Multi-line Ellipsis',
          code: `
    <div class="hx-alert is-info is-inverse">
      <span class="hx-icon-control mr-2">
        <i class="hx-icon is-medium icon-information"></i>
      </span>
      <span class="hx-flex-1">
            Line clamping is possible via the <strong>-webkit-box-orient: vertical;</strong> css property which is non-standard and is not on a standards track.<br>
            Chrome does currently support it and when a replacement property is set, we will make the appropriate change accordingly.
      </span>
    </div>
    <div class="hx-alert is-warning is-inverse">
      <span class="hx-icon-control mr-2">
        <i class="hx-icon is-medium icon-exclamation"></i>
      </span>
      <span class="hx-flex-1">
            Line clamping will only work with plain text and not html formatted text.
      </span>
    </div>
  <table class="hx-table is-striped">
    <thead>
      <tr>
        <th>Class</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.is-text-line-clamp-1</code></td>
        <td><div class="is-text-line-clamp-1 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
      <tr>
        <td><code>.is-text-line-clamp-2</code></td>
        <td><div class="is-text-line-clamp-2 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
      <tr>
        <td><code>.is-text-line-clamp-3</code></td>
        <td><div class="is-text-line-clamp-3 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
      <tr>
        <td><code>.is-text-line-clamp-4</code></td>
        <td><div class="is-text-line-clamp-4 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
      <tr>
        <td><code>.is-text-line-clamp-5</code></td>
        <td><div class="is-text-line-clamp-5 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
      <tr>
        <td><code>.is-text-line-clamp-6</code></td>
        <td><div class="is-text-line-clamp-6 elipsedText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></td>
      </tr>
    </tbody>
  </table>
            `,
        },
        {
          title: 'Decoration',
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
        <td><code>.is-text-line-through</code></td>
        <td class="is-text-line-through">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-underline</code></td>
        <td class="is-text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-dotted</code></td>
        <td class="is-text-dotted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
    </tbody>
  </table>
            `,
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
        <td class="is-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-bold</code></td>
        <td class="is-text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-italic</code></td>
        <td class="is-text-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
    </tbody>
  </table>
            `,
        },
        {
          title: 'Selectable',
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
        <td><code>.is-text-unselectable</code></td>
        <td class="is-text-unselectable">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
      <tr>
        <td><code>.is-text-select-all</code></td>
        <td class="is-text-select-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
      </tr>
    </tbody>
  </table>
            `,
        },
      ],
    }
  },
}
</script>

<style lang="css">
.elipsedText {
  width: 250px;
}
</style>

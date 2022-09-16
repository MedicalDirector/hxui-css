<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Nav</h1>
    <h2 class="hx-subtitle">
      A responsive horizontal nav bar that can contain links, tabs, buttons,
      icons, and a logo
    </h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
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
          title: 'Basic nav',
          code: `
  <p>Note the nav requires the <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">News & data</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">Status board</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">Custom</a>
    </li>
  </ul>
            `,
        },
        {
          title: 'Alignments',
          code: `
  <h5>Center aligned</h5>
  <p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav is-centered">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">News & data</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">Status board</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">Custom</a>
    </li>
  </ul>
  <hr />
  <h5>Right aligned</h5>
  <p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav is-right">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">News & data</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">Status board</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">Custom</a>
    </li>
  </ul>
            `,
        },
        {
          title: 'Vertical nav',
          code: `
  <p>Note the vertical nav requires the modifier <code>.is-vertical</code> added to <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav is-vertical">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">News & data</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">Status board</a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">Custom</a>
    </li>
  </ul>
            `,
        },
      ],
    }
  },
}
</script>

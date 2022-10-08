<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Nav</h1>
      <h2 class="hx-subtitle">
        A responsive horizontal nav bar that can contain links, tabs, buttons,
        icons, and a logo
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
          title: 'Basic nav',
          code: `
  <p>Note the nav requires the <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>News & data</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link active">
        <span>Status board</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>Custom</span>
      </a>
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
      <a href="#" class="hx-nav-link">
        <span>News & data</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">
        <span>Status board</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>Custom</span>
      </a>
    </li>
  </ul>
  <hr />
  <h5>Right aligned</h5>
  <p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>
  <br>
  <ul class="hx-nav is-right">
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>News & data</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">
        <span>Status board</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>Custom</span>
      </a>
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
      <a href="#" class="hx-nav-link">
        <span>News & data</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link is-active">
        <span>Status board</span>
      </a>
    </li>
    <li class="hx-nav-item">
      <a href="#" class="hx-nav-link">
        <span>Custom</span>
      </a>
    </li>
  </ul>
            `,
        },
      ],
    }
  },
}
</script>

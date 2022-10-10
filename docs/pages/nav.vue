<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
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
          code: `<p class="hx-prose">Add class <code>.hx-nav</code></p>

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
</ul>`,
        },
        {
          title: 'Alignments',
          code: `<h3 class="h4 hx-prose mt-0">Center aligned</h3>
<p class="hx-prose">Add modifier <code>.center</code> to center the nav.</p>

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

<h3 class="hx-prose h4">Right aligned</h5>
<p class="hx-prose">Add modifier <code>.right</code> to center the nav.</p>

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
</ul>`,
        },
        {
          title: 'Vertical nav',
          code: `<p class="hx-prose mt-0">Add modifier <code>.vertical</code> to arrange the nav vertically.</p>

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
</ul>`,
        },
      ],
    }
  },
}
</script>

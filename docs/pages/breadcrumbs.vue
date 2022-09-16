<template>
  <article class="hx-section scrollable-y">
    <div class="content">
      <h1 class="hx-title pt-4">Breadcrumbs</h1>
      <h2 class="hx-subtitle">
        The <code>hx-breadcrumb</code> component is a navigational helper for
        pages. It can accept a Icons or characters as a divider.
      </h2>
    </div>

    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
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
  data: () => ({
    examples: [
      {
        title: 'Usage',
        code: `<ul class="hx-breadcrumb">
  <li class="">
    <a href="#">Dashboard</a>
  </li>
  <li class="hx-breadcrumb-divider">/</li>
  <li class="">
    <a href="#">Parent</a>
  </li>
  <li class="hx-breadcrumb-divider">/</li>
  <li class=" is-disabled">
    <a href="#">Child page</a>
  </li>
</ul>

<ul class="hx-breadcrumb">
  <li class="">
    <a href="#">Dashboard</a>
  </li>
  <li class="hx-breadcrumb-divider">-</li>
  <li class="">
    <a href="#">Parent</a>
  </li>
  <li class="hx-breadcrumb-divider">-</li>
  <li class=" is-disabled">
    <a href="#">Child page</a>
  </li>
</ul>`,
      },
      {
        title: 'Using icons',
        code: `<ul class="hx-breadcrumb">
  <li class="">
    <a href="#">Dashboard</a>
  </li>
  <li class="hx-breadcrumb-divider">
    <i class="hx-icon icon-angle-right"></i>
  </li>
  <li class="">
    <a href="#">Parent</a>
  </li>
  <li class="hx-breadcrumb-divider">
    <i class="hx-icon icon-angle-right"></i>
  </li>
  <li class=" is-disabled">
    <a href="#">Child page</a>
  </li>
</ul>

<ul class="hx-breadcrumb">
  <li class="">
    <a href="#">Dashboard</a>
  </li>
  <li class="hx-breadcrumb-divider">
    <i class="hx-icon icon-arrow-right"></i>
  </li>
  <li class="">
    <a href="#">Parent</a>
  </li>
  <li class="hx-breadcrumb-divider">
    <i class="hx-icon icon-arrow-right"></i>
  </li>
  <li class=" is-disabled">
    <a href="#">Child page</a>
  </li>
</ul>`,
      },
    ],
  }),
}
</script>

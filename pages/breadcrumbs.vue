<template>
  <div id="breadcrumbs">
    <h1 class="hx-title">Breadcrumbs</h1>
    <h2 class="hx-subtitle">The <code>hx-breadcrumb</code> component is a navigational helper for pages. It can accept a Icons or characters as a divider.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data: () => ({
    examples: [
      {
        title: 'Usage',
        code: `
<ul class="hx-breadcrumb">
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
</ul>
        `
      },
      {
        title: 'Using icons',
        code: `
<ul class="hx-breadcrumb">
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
</ul>
        `
      }
    ]
  }),
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="scss">
</style>

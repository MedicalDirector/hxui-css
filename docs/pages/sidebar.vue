<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Sidebar / Drawer</h1>
      <h2 class="hx-subtitle">Primarily used for navigation or meta data.</h2>
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
  data: () => ({
    examples: [
      {
        title: 'States',
        code: `<div class="hx-card flex mb-2">
  <div class="hx-sidebar-container" style="z-index: 2;">
    <div class="hx-sidebar bg-primary-gradient collapsed">
      <div class="hx-nav vertical p-0"></div>
    </div>
  </div>
  <!-- Main content -->
  <div class="hx-prose py-4 px-6">
    <h3>Collapsed</h3>
    <p>Add class <code>.collapsed</code> to the drawer.</p>
  </div>
</div>

<div class="hx-card flex mb-2">
  <div class="hx-sidebar-container" style="z-index: 2;">
    <div class="hx-sidebar bg-primary-gradient mini">
      <div class="hx-nav vertical"></div>
    </div>
  </div>
  <!-- Main content -->
  <div class="hx-prose py-4 px-6">
    <h3>Minimised</h3>
    <p>Add class <code>.mini</code> to the drawer.</p>
  </div>
</div>

<div class="hx-card flex mb-2">
  <div class="hx-sidebar-container" style="z-index: 2;">
    <div class="hx-sidebar bg-primary-gradient">
      <div class="hx-nav vertical"></div>
    </div>
  </div>
  <!-- Main content -->
  <div class="hx-prose py-4 px-6">
    <h3>Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec imperdiet pellentesque finibus.
      Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.
    </p>
  </div>
</div>`,
      },
      {
        title: 'As overlay',
        code: `
<p class="hx-prose">Add class <code>.detached</code> to the drawer.</p>
      
<div class="hx-card flex mb-2">
  <div class="hx-sidebar-container" style="position: relative; z-index: 2;">
    <div class="hx-sidebar bg-primary-gradient detached">
      <div class="hx-nav vertical"></div>
    </div>
  </div>

  <!-- Main content -->
  <div class="hx-prose py-4 px-6">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec imperdiet pellentesque finibus.
      Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.
    </p>
  </div>
</div>

<p class="hx-prose">
  Add element with class <code>.hx-overlay</code> 
  inside <code>.hx-sidebar-container</code>.
</p>

<div class="hx-card flex mb-2">
  <div class="hx-sidebar-container" style="position: relative; z-index: 2;">
    <div class="hx-sidebar bg-primary-gradient detached">
      <div class="hx-nav vertical"></div>
    </div>
    <!-- Ignore custom styles -->
    <button class="hx-overlay" style="position: absolute;"></button>
  </div>

  <!-- Main content -->
  <div class="hx-prose py-4 px-6">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec imperdiet pellentesque finibus.
      Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.
    </p>
    <!-- Below for stylistic purposes only! -->
    <div class="hx-overlay" style="position: absolute; z-index: 1;"></div>
  </div>
</div>`,
      },
    ],
  }),
}
</script>

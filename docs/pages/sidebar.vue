<template>
  <div id="sidebar">
    <h1 class="hx-title">Sidebar / Drawer</h1>
    <h2 class="hx-subtitle">Primarily used for navigation or meta data.</h2>

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

    <!-- <h4>Variations</h4>
    <p>You can use any combination of variations except for more than 1 gradient at a time</p>

    <div class="hx-columns">
      <div class="hx-column">
        <pre v-highlightjs><code class="html">
{{ code }}
        </code></pre>
      </div>
    </div> -->
  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data: () => ({
    examples: [
      {
        title: 'Default',
        code: `
<div class="hx-card is-flex mb-2 hx-nav-drawer" style="height: 10rem">
  <!-- no gradient (.hx-sidebar still works)-->
  <div class="hx-drawer is-active"></div>
  <!-- Main content -->
  <div class="content py-3 px-6">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>

<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">
  <!--  purple gradient -->
  <div class="hx-drawer has-purple-gradient is-active"></div>
  <!-- Main content -->
  <div class="content py-3 px-6">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>

<!--
<div class="hx-card mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer has-purple-gradient"></div>
</div>

<div class="hx-card mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer has-orange-gradient"></div>
</div>
-->
        `,
      },
      {
        title: 'Navigation drawer',
        code: `
<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">
  <div class="is-flex">
    <div class="hx-drawer has-purple-gradient is-minified is-active"></div>
    <div class="hx-drawer is-active"></div>
  </div>
  <!-- Main content -->
  <div class="content py-3 px-6">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>
        `,
      },
      {
        title: 'Sizes',
        code: `
<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer hx-bg-purple is-active is-minified"></div>
  <div class="content py-4 px-6">
    <h3>Minimised</h3>
    <p>Add class <code>is-minified</code> to the drawer.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>
<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer hx-bg-purple is-active"></div>
  <div class="content py-4 px-6">
    <h3>Default</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>
<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer hx-bg-purple is-active is-expanded"></div>
  <div class="content py-4 px-6">
    <h3>Expanded</h3>
    <p>Add class <code>is-expanded</code> to the drawer.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>
        `,
      },
      {
        title: 'Right aligned',
        code: `
<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">
  <div class="content py-3 px-6">
    <p>Add class <code>is-right</code> to the drawer.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
  <div class="hx-drawer hx-bg-purple is-active is-right"></div>
</div>
        `,
      },
      {
        title: 'With overlay',
        code: `
<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">
  <div class="hx-drawer hx-bg-purple is-absolute is-active"></div>
  <div class="hx-drawer-bg is-active"></div>
  <div class="content py-4 px-6">
    <p>Add class <code>is-expanded</code> to the drawer.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>
  </div>
</div>
        `,
      },
      {
        title: 'Top level',
        code: `
<p>To have the drawer on the top level and not in a container, add class <code>is-fixed</code> to the drawer.</p>
        `,
      },
    ],
  }),
  components: {
    ExpandingCodeExample,
  },
}
</script>

<style lang="css"></style>

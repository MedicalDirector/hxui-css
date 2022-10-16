<template>
  <article class="hx-section scrollable-y">
    <div class="contents hx-prose">
      <h1 class="hx-title pt-4">Accordion</h1>
      <h2 class="hx-subtitle">
        The <code>hx-accordion</code> component is useful for reducing vertical
        space with large amounts of information.
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :className="example.bg"
        :withContent="example.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data: () => ({
    data: [
      {
        class: 'hx-accordion',
        type: 'component',
        description: 'Container element',
      },
      {
        class: 'no-border',
        type: 'modifier',
        description: 'Removes outer border',
      },
      {
        class: 'hx-accordion__header',
        type: 'sub-component',
        description: 'Header element',
      },
      {
        class: '[aria-expanded="true"]',
        type: 'modifier',
        description: 'Added to header. Controls visibility of adjacent content',
      },
      {
        class: 'compact',
        type: 'modifier',
        description: 'Reduces vertical padding to header',
      },
      {
        class: 'hx-accordion__content[role="region"]',
        type: 'sub-component',
        description: 'Content element',
      },
      {
        class: 'compact',
        type: 'modifier',
        description: 'Removes padding to content',
      },
    ],
    examples: [
      {
        title: 'Kitchen sink',
        code: `<section class="hx-accordion">
  
  <!-- header as a button -->
  <div class="hx-accordion__header" aria-expanded="true">
    <button>
      <span class="h3">Item 1</span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="hx-accordion__content" role="region">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer libero mi, fermentum non eleifend eu, scelerisque ut risus.
      Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Etiam ac eros sit amet diam mattis porttitor ut vitae nulla.
      Nulla non ligula mattis, hendrerit urna eu, aliquet mauris.
      Sed vulputate tempor mauris at aliquam.
      Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.
    </p>
  </div>

  <!-- header with a button -->
  <div class="hx-accordion__header" aria-expanded="true">
    <h3>Item 2</h3>
    <button class="hx-button flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="hx-accordion__content" role="region">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer libero mi, fermentum non eleifend eu, scelerisque ut risus.
      Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Etiam ac eros sit amet diam mattis porttitor ut vitae nulla.
      Nulla non ligula mattis, hendrerit urna eu, aliquet mauris.
      Sed vulputate tempor mauris at aliquam.
      Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.
    </p>
  </div>

  <!-- compact header -->
  <div class="hx-accordion__header compact" aria-expanded="true">
    <h4 class="h4">
      <span>Item 3</span>
      <span> <code>.compact</code></span>
    </h4>
    <button class="hx-button flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="hx-accordion__content contrast" role="region">
    <p><code>.contrast</code></p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer libero mi, fermentum non eleifend eu, scelerisque ut risus.
      Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Etiam ac eros sit amet diam mattis porttitor ut vitae nulla.
      Nulla non ligula mattis, hendrerit urna eu, aliquet mauris.
      Sed vulputate tempor mauris at aliquam.
      Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.
    </p>
  </div>
</section>`,
      },
    ],
  }),
}
</script>

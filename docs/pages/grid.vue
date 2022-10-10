<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Grid</h1>
      <h2 class="hx-subtitle">Responsive layouts (based on css grid)</h2>
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
          title: 'Basics',
          code: `<p class="hx-prose">Add a container element with class <code>.hx-grid</code>.</p>
<p class="hx-prose">
  To configure the number of columns, add modifier 
  <code>.grid-cols-{{ number }}</code> to the container element.
  The number can be from 1 through 12.
</p>
<p class="hx-prose">
  To add a gap between the columns, add modifier
  <code>.gap-{{ number }}</code> to the container element. This works similar to spacing.
</p>

<div class="grid phablet:grid-cols-4 gap-2">
  <p class="bg-primary-emphasis fg-contrast p-4 text-center">First column</p>
  <p class="bg-primary-emphasis fg-contrast p-4 text-center">Second column</p>
  <p class="bg-primary-emphasis fg-contrast p-4 text-center">Third column</p>
  <p class="bg-primary-emphasis fg-contrast p-4 text-center">Fourth column</p>
</div>`,
        },
        {
          title: 'Spanning columns',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4">
  <p class="hx-prose">
    Add a modifier with a reference to the number of columns spanned <code>.col-span-{{ number }}</code>.
  </p>

  <div class="grid phablet:grid-cols-8 gap-4">
    <p class="phablet:col-span-6 box--main">3/4</p>
    <p class="box--alt">1/8</p>
    <p class="box--alt">1/8</p>
  </div>

  <div class="grid phablet:grid-cols-6 gap-4">
    <p class="phablet:col-span-4 box--main">2/3</p>
    <p class="box--alt">1/6</p>
    <p class="box--alt">1/6</p>
  </div>

  <div class="grid phablet:grid-cols-4 gap-4">
    <p class="phablet:col-span-2 box--main">1/2</p>
    <p class="box--alt">1/4</p>
    <p class="box--alt">1/4</p>
  </div>
</div>`,
        },
        {
          title: 'Offsetting columns',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4">
  <p class="hx-prose">
    Add a modifier with a start <code>.col-start-{{ number }}</code> and end <code>.col-end-{{ number }}</code> column reference to span multiple columns.
  </p>

  <div class="grid phablet:grid-cols-12 gap-4">
    <p class="phablet:col-start-4 phablet:col-end-10 box--main">
      .col-start-4 .col-end-10 (span 6 in 12)
    </p>
  </div>

  <div class="grid phablet:grid-cols-12 gap-4">
    <p class="phablet:col-start-8 phablet:col-end-11 box--main">
      .col-start-8 .col-end-11 (span 3 in 12)
    </p>
  </div>

  <div class="grid phablet:grid-cols-12 gap-4">
    <p class="phablet:col-start-3 phablet:col-end-8 box--main">
      .col-start-3 .col-end-8 (span 5 in 12)
    </p>
  </div>

  <div class="grid phablet:grid-cols-12 gap-4">
    <p class="phablet:col-start-2 phablet:col-end-13 box--main">
      .col-start-2 .col-end-13 (span 5 in 12)
    </p>
  </div>
</div>`,
        },
        {
          title: 'Nesting',
          code: `<p class="hx-prose">
  Add child containers with class <code>.hx-grid</code> to nest grids.
</p>

<div class="grid phablet:grid-cols-2 gap-x-4">
  <div class="grid grid-cols-2 gap-x-2">
    <p class="col-start-1 col-end-3 bg-primary-emphasis fg-contrast p-4 text-center">
      1st level - First column
    </p>
    <p class="bg-warning-emphasis fg p-4 text-center">
      2nd level - Nested column
    </p>
    <p class="bg-warning-emphasis fg p-4 text-center">
      2nd level - Nested column
    </p>
  </div>
  <div class="grid grid-cols-2 gap-x-2">
    <p class="col-start-1 col-end-3 bg-primary-emphasis fg-contrast p-4 text-center">
      1st level - Second column
    </p>
    <p class="bg-warning-emphasis fg p-4 text-center">
      2nd level
    </p>
    <div class="grid grid-cols-2 gap-x-2">
      <p class="bg-danger-emphasis fg-contrast p-4 text-center">
        3rd level
      </p>
      <p class="bg-danger-emphasis fg-contrast p-4 text-center">
        3rd level
      </p>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Gapless',
          code: `<p class="hx-prose">
  Simply remove any <code>.gap-{{ number }}</code> modifier from the container element.
</p>

<div class="grid phablet:grid-cols-4">
  <p class="box--main">First column</p>
  <p class="box--main">Second column</p>
  <p class="box--main">Third column</p>
  <p class="box--main">Fourth column</p>
</div>`,
        },
        {
          title: 'Columns responsiveness',
          code: `<div class="hx-alert is-inverse">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-information"></i>
  </span>
  <span class="hx-flex-1">
    Resize your browser to observe changes in grid layout.
  </span>
</div>

<p class="hx-prose">
  If a columns modifier is not added, the grid will have 1 column by default.
</p>

<p class="hx-prose">
  The below has the following layout:
</p>
<ul class="hx-prose">
  <li>mobile: 1 column</li>
  <li>phablet: 2 columns <code>.phablet:grid-cols-2</code></li>
  <li>tablet: 4 columns <code>.tablet:grid-cols-4</code></li>
  <li>laptop: 6 columns <code>.laptop:grid-cols-6</code></li>
  <li class="mb-4">desktop: 8 columns <code>.desktop:grid-cols-8</code></li>
</ul>

<div class="grid phablet:grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-6 desktop:grid-cols-8 gap-4">
  <p class="box--main">1</p>
  <p class="box--main">2</p>
  <p class="box--main">3</p>
  <p class="box--main">4</p>
  <p class="box--main">5</p>
  <p class="box--main">6</p>
  <p class="box--main">7</p>
  <p class="box--main">8</p>
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.box {
  color: var(--color-foreground-contrast);
  padding: 1rem;
  text-align: center;

  &--main {
    @extend .box;
    background-color: var(--color-surface-primary-emphasis);
  }
  &--alt {
    @extend .box;

    background-color: var(--color-surface-info-emphasis);
  }
}
</style>

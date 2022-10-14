<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Responsive</h1>
      <h2 class="hx-subtitle">
        Helpers when dealing with responsive layouts/elements
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
          title: 'Breakpoints',
          code: `<p class="hx-prose">
  There are 5 breakpoints available in HxUI.
</p>

<div class="flex scrollable-x">
  <div class="grid grow-1 phablet:grid-cols-5 gap-y-2">
    <div class="box--main col-span-1">
      <span class="h4">Mobile</span>
      <br>
      <span class="b2">Up to 603px</span>
    </div>
    <div class="box--secondary col-span-4 mobile:hidden"></div>

    <div class="box--secondary col-span-1 mobile:hidden"></div>
    <div class="box--main phablet:col-span-4">
      <span class="h4">Phablet</span>
      <br>
      <span class="b2">Between 604px and 895px</small>
    </div>

    <div class="box--secondary col-span-2 mobile:hidden"></div>
    <div class="box--main phablet:col-span-3">
      <span class="h4">Tablet</span>
      <br>
      <span class="b2">Between 896px and 1247px</small>
    </div>

    <div class="box--secondary col-span-3 mobile:hidden"></div>
    <div class="box--main phablet:col-span-2">
      <span class="h4">Laptop</span>
      <br>
      <span class="b2">Between 1248px and 1439px</small>
    </div>

    <div class="box--secondary col-span-4 mobile:hidden"></div>
    <div class="box--main phablet:col-span-1">
      <span class="h4">Desktop</span>
      <br>
      <span class="b2">1440px and above</small>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Visibility',
          withContent: false,
          code: `<div 
  class="hx-card__content grid phablet:grid-cols-2 gap-4"
>
  <div class="hx-prose">
    <h3 class="h4 mt-0">Show</h4>
    <p>
      To show an element, add one of the following 
      <code>{display}</code> classes:
    <p>
    <ul>
      <li><code>.inline-block</code></li>
      <li><code>.block</code></li>
      <li><code>.flex</code></li>
      <li><code>.inline-flex</code></li>
      <li><code>.grid</code></li>
      <li><code>.inline-grid</code></li>
      <li><code>.contents</code></li>
      <li><code>.inline</code></li>
    </ul>

    <p>To show an element above a specific breakpoint:<p>
    <ul>
      <li><code>.phablet:{display}</code></li>
      <li><code>.tablet:{display}</code></li>
      <li><code>.laptop:{display}</code></li>
      <li><code>.desktop:{display}</code></li>
    </ul>
  </div>

  <div class="hx-prose">
    <h3 class="h4 mt-0">Hide</h4>
    <p>Add <code>.hidden</code> class to hide an element.<p>
    <p>To hide an element above a specific breakpoint:<p>
    <ul>
      <li><code>.phablet:hidden</code></li>
      <li><code>.tablet:hidden</code></li>
      <li><code>.laptop:hidden</code></li>
      <li><code>.desktop:hidden</code></li>
    </ul>
    <p>
      These will be applied from the breakpoint
      <strong>and above</strong>.
      The exception is <code>.mobile:hidden</code>,
      which is applied below the breakpoint.
    </p>
  </div>

  <div class="hx-alert info phablet:col-span-2 mb-0" role="alert">
    <span class="hx-icon-container mr-2">
      <i class="hx-icon icon-information" aria-hidden="true"></i>
    </span>
    <span class="hx-flex-1">
      Resize your browser to observe changes in grid layout.
    </span>
  </div>
  
  <div 
  class="flex flex-col phablet:flex-row gap-4 phablet:col-span-2"
>
    <p class="hidden mobile:flex box--main">Mobile</p>
    <p class="hidden phablet:flex box--main">Phablet</p>
    <p class="hidden tablet:flex box--main">Tablet</p>
    <p class="hidden laptop:flex box--main">Laptop</p>
    <p class="hidden desktop:flex box--main">Desktop</p>
  </div>  
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
table.matrix > tbody > tr > td,
table.matrix > tbody > tr > th {
  background-color: transparent !important;
  border: none !important;
}

.t-hid > div {
  background-color: var(--color-surface-background-default);
  padding: 1rem;
}

.t-vis > div {
  background-color: var(--color-surface-primary-emphasis);
  color: var(--color-foreground-contrast);
  padding: 1rem;
}

.box {
  color: var(--color-foreground-contrast);
  padding: 1rem;
  text-align: center;
  flex: 1;
  justify-content: center;

  &--main {
    @extend .box;
    background-color: var(--color-surface-primary-emphasis);
  }

  &--alt {
    @extend .box;

    background-color: var(--color-surface-info-emphasis);
  }

  &--secondary {
    @extend .box;

    background-color: var(--color-surface-neutral-muted);
  }
}
</style>

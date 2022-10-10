<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Flexbox</h1>
      <h2 class="hx-subtitle">
        The <code>hx-flex</code> component is an abstraction of the flexbox
        layout.<br />
        It aims at providing a more efficient way to lay out, align and
        distribute space among items in a container, even when their size is
        unknown and/or dynamic.
      </h2>
    </div>

    <hr />

    <div class="hx-alert is-info is-inverse">
      <span class="hx-icon-control mr-2">
        <i class="hx-icon is-medium icon-information"></i>
      </span>
      <span class="grow-1">
        Unlike the grid system it does not have any padding, margins and does
        not react to breakpoints.<br />
        It's purely for distributing items in a horizontal or vertical
        configuration, whilst optionally filling space.
      </span>
    </div>

    <div class="hx-alert is-inverse">
      <span class="hx-icon-control mr-2">
        <i class="hx-icon is-medium icon-information"></i>
      </span>
      <span class="grow-1">
        This abstraction utility supports most of the flexbox properties. <br />
        However sometimes you may need to just write pure css, for example;
        change the flex-basis values.
        <p>
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            >Click here</a
          >
          for a complete guide to flexbox.
        </p>
      </span>
    </div>

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
          title: 'Horizontal flex direction (Row)',
          code: `<p class="hx-prose">
  Add <code>hx-flex</code> for a flexbox display.
  This arranges the items horizontally by default without adding <code>flex-row</code> modifier.
</p>
<div class="hx-flex gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>`,
        },
        {
          title: 'Vertical flex direction (Column)',
          code: `<p class="hx-prose"><code>flex-col</code> modifier arranges the items vertically.</p>
<div class="hx-flex flex-col gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>`,
        },
        {
          title: 'Flex grow',
          code: `<p>
  This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. <br>
  It dictates what amount of the available space inside the flex container the item should take up.
</p>
  
<p><code>.hx-flex-*</code> from 1 - 12</p>

<h5>Flex grow 1</h5>
<div class="hx-flex gap-1 bg-background">
  <div class="box">1</div>
  <div class="grow-1 box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<h5>Flex grow 2</h5>
<div class="hx-flex gap-1 bg-background">
  <div class="grow-1 box">1</div>
  <div class="hx-flex-2 box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<h5>Flex grow 3</h5>
<div class="hx-flex gap-1 bg-background">
  <div class="grow-1 box">1</div>
  <div class="hx-flex-2 box">2</div>
  <div class="hx-flex-3 box">3</div>
  <div class="box">4</div>
</div>

<h5>Flex grow 4</h5>
<div class="hx-flex gap-1 bg-background">
  <div class="grow-1 box">1</div>
  <div class="hx-flex-2 box">2</div>
  <div class="hx-flex-3 box">3</div>
  <div class="hx-flex-4 box">4</div>
</div>`,
        },
        {
          title: 'Flex wrap',
          code: `<p class="hx-prose">
  Flex items will all try to fit onto one line by default.
  Allow items to wrap with <code>flex-wrap</code> modifier.
</p>

<div class="hx-flex flex-wrap gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
  <div class="box">10</div>
  <div class="box">11</div>
  <div class="box">12</div>
  <div class="box">13</div>
  <div class="box">14</div>
  <div class="box">15</div>
  <div class="box">16</div>
  <div class="box">17</div>
  <div class="box">18</div>
  <div class="box">19</div>
  <div class="box">20</div>
  <div class="box">21</div>
  <div class="box">22</div>
  <div class="box">23</div>
  <div class="box">24</div>
</div>`,
        },
        {
          title: 'Justify content',
          code: `<p class="hx-prose">
  The below modifiers control the alignment along the main axis.
  Horizontall with <code>flex-row</code>; vertically with <code>flex-col</code>.
</p>

<p class="hx-prose">
  <span class="font-medium">flex-start </span>
  <code>justify-start</code>
  <span>(default)</span>
</p>
<div class="hx-flex justify-start gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<p class="hx-prose font-medium">flex-end <code>justify-end</code></p>
<div class="hx-flex justify-end gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<p class="hx-prose font-medium">center <code>justify-center</code></p>
<div class="hx-flex justify-center gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<p class="hx-prose font-medium">space-between <code>justify-between</code></p>
<div class="hx-flex justify-between gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<p class="hx-prose font-medium">space-around <code>justify-around</code></p>
<div class="hx-flex justify-around gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>

<p class="hx-prose font-medium">space-evenly <code>justify-evenly</code></p>
<div class="hx-flex justify-evenly gap-1 bg-background">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>`,
        },
        {
          title: 'Align items',
          code: `<p class="hx-prose">
  The below modifiers control the alignment along the minor axis.
  Vertically with <code>flex-row</code>; horizontally with <code>flex-col</code>.
</p>

<p class="hx-prose font-medium">flex-start <code>align-start</code></p>
<div class="hx-flex align-start gap-1 bg-background box-container">
  <div class="box box--fixed">1</div>
  <div class="box box--fixed">2</div>
  <div class="box box--fixed">3</div>
  <div class="box box--fixed">4</div>
</div>

<p class="hx-prose font-medium">flex-end <code>align-end</code></p>
<div class="hx-flex align-end gap-1 bg-background box-container">
  <div class="box box--fixed">1</div>
  <div class="box box--fixed">2</div>
  <div class="box box--fixed">3</div>
  <div class="box box--fixed">4</div>
</div>

<p class="hx-prose font-medium">center <code>align-center</code></p>
<div class="hx-flex align-center gap-1 bg-background box-container">
  <div class="box box--fixed">1</div>
  <div class="box box--fixed">2</div>
  <div class="box box--fixed">3</div>
  <div class="box box--fixed">4</div>
</div>

<p class="hx-prose font-medium">stretch <code>align-stretch</code></p>
<div class="hx-flex align-stretch gap-1 bg-background box-container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.box-container {
  height: 8rem;
}
.box {
  background-color: var(--color-surface-primary-emphasis);
  color: var(--color-foreground-contrast);
  padding: 0.5rem 1rem;

  &--fixed {
    height: 3.5rem;
  }
}
</style>

<template>
  <div id="spacing">
    <h1 class="hx-title">Flexbox</h1>
    <h2 class="hx-subtitle">
      The <code>hx-flexbox</code> component is an abstraction of the flexbox
      layout.<br />
      It aims at providing a more efficient way to lay out, align and distribute
      space among items in a container, even when their size is unknown and/or
      dynamic.
    </h2>

    <hr />

    <div class="hx-alert is-info is-inverse">
      <span class="hx-icon-control mr-2">
        <i class="hx-icon is-medium icon-information"></i>
      </span>
      <span class="hx-flex-1">
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
      <span class="hx-flex-1">
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

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
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
  data() {
    return {
      examples: [
        {
          title: 'Horizontal flex direction (Row)',
          code: `

<div class="hx-flex hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>
          `,
        },
        {
          title: 'Vertical flex direction (Column)',
          code: `

<div class="hx-flex hx-flex-column hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>
          `,
        },
        {
          title: 'Flex grow',
          code: `

<p>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. <br>
It dictates what amount of the available space inside the flex container the item should take up.</p>

<p><code>.hx-flex-*</code> from 1 - 12</p>

<h5>Flex grow 1</h5>
<div class="hx-flex hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-flex-1 hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>Flex grow 2</h5>
<div class="hx-flex hx-bg">
  <div class="hx-flex-1 hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-flex-2 hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>Flex grow 3</h5>
<div class="hx-flex hx-bg">
  <div class="hx-flex-1 hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-flex-2 hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-flex-3 hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>Flex grow 4</h5>
<div class="hx-flex hx-bg">
  <div class="hx-flex-1 hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-flex-2 hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-flex-3 hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-flex-4 hx-bg-primary pa-5 ma-1">4</div>
</div>
          `,
        },
        {
          title: 'Flex wrap',
          code: `
<p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>

<div class="hx-flex hx-flex-wrap hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
  <div class="hx-bg-primary pa-5 ma-1">5</div>
  <div class="hx-bg-primary pa-5 ma-1">6</div>
  <div class="hx-bg-primary pa-5 ma-1">7</div>
  <div class="hx-bg-primary pa-5 ma-1">8</div>
  <div class="hx-bg-primary pa-5 ma-1">9</div>
  <div class="hx-bg-primary pa-5 ma-1">10</div>
  <div class="hx-bg-primary pa-5 ma-1">11</div>
  <div class="hx-bg-primary pa-5 ma-1">12</div>
  <div class="hx-bg-primary pa-5 ma-1">13</div>
  <div class="hx-bg-primary pa-5 ma-1">14</div>
  <div class="hx-bg-primary pa-5 ma-1">15</div>
  <div class="hx-bg-primary pa-5 ma-1">16</div>
  <div class="hx-bg-primary pa-5 ma-1">17</div>
  <div class="hx-bg-primary pa-5 ma-1">18</div>
  <div class="hx-bg-primary pa-5 ma-1">19</div>
  <div class="hx-bg-primary pa-5 ma-1">20</div>
  <div class="hx-bg-primary pa-5 ma-1">21</div>
  <div class="hx-bg-primary pa-5 ma-1">22</div>
  <div class="hx-bg-primary pa-5 ma-1">23</div>
  <div class="hx-bg-primary pa-5 ma-1">24</div>
</div>
          `,
        },
        {
          title: 'Justify content',
          code: `
<p>This defines the alignment along the main axis.</p>
<h5>flex-start</h5>
<div class="hx-flex hx-flex-justify-start hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>flex-end</h5>
<div class="hx-flex hx-flex-justify-end hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>center</h5>
<div class="hx-flex hx-flex-justify-center hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>space-between</h5>
<div class="hx-flex hx-flex-justify-between hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>space-around</h5>
<div class="hx-flex hx-flex-justify-around hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

<h5>space-evenly</h5>
<div class="hx-flex hx-flex-justify-evenly hx-bg">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>
          `,
        },
        {
          title: 'Align items',
          code: `
<p>This defines the default behavior for how flex items are laid out along the cross axis on the current line. </p>
<h5>flex-start</h5>
<div class="hx-flex hx-flex-align-start hx-bg flexContainer">
  <div class="hx-bg-primary pa-5 ma-1 flexItem">1</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">2</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">3</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">4</div>
</div>

<h5>flex-end</h5>
<div class="hx-flex hx-flex-align-end hx-bg flexContainer">
  <div class="hx-bg-primary pa-5 ma-1 flexItem">1</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">2</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">3</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">4</div>
</div>

<h5>center</h5>
<div class="hx-flex hx-flex-align-center hx-bg flexContainer">
  <div class="hx-bg-primary pa-5 ma-1 flexItem">1</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">2</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">3</div>
  <div class="hx-bg-primary pa-5 ma-1 flexItem">4</div>
</div>

<h5>stretch</h5>
<div class="hx-flex hx-flex-align-stretch hx-bg flexContainer">
  <div class="hx-bg-primary pa-5 ma-1">1</div>
  <div class="hx-bg-primary pa-5 ma-1">2</div>
  <div class="hx-bg-primary pa-5 ma-1">3</div>
  <div class="hx-bg-primary pa-5 ma-1">4</div>
</div>

          `,
        },
      ],
    }
  },
  components: {
    ExpandingCodeExample,
  },
}
</script>

<style lang="css">
.flexContainer {
  height: 10rem;
}
.flexItem {
  height: 4rem;
}
</style>

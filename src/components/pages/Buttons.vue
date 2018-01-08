<template>
  <div id="buttons">
    <h1 class="hx-title">Buttons</h1>
    <h2 class="hx-subtitle">The classic button, in different colors, sizes, and states</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" key="i"
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
  data () {
    return {
      examples: [
        {
          title: 'Button colours',
          code: `
<div class="has-text-centered">
  <a class="hx-button">Button</a>
  <a class="hx-button is-white">White</a>
  <a class="hx-button is-light">Light</a>
  <a class="hx-button is-dark">Dark</a>
  <a class="hx-button is-black">Black</a>
  <a class="hx-button is-primary">Primary</a>
  <a class="hx-button is-info">Info</a>
  <a class="hx-button is-warning">Warning</a>
  <a class="hx-button is-danger">Danger</a>
  <a class="hx-button is-link">Link</a>
  <a class="hx-button is-transparent">Transparent</a>
</div>
          `
        },
        {
          title: 'Sizes',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-small">Small</a>
  <a class="hx-button">Normal</a>
  <a class="hx-button is-large">Large</a>
</div>
          `
        },
        {
          title: 'Flat',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-flat">Flat</a>
  <a class="hx-button is-primary is-flat">Flat</a>
  <a class="hx-button is-info is-flat">Flat</a>
  <a class="hx-button is-danger is-flat">Flat</a>
</div>
          `
        },
        {
          title: 'Outlined',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-outlined">Outlined</a>
  <a class="hx-button is-primary is-outlined">Outlined</a>
  <a class="hx-button is-info is-outlined">Outlined</a>
  <a class="hx-button is-danger is-outlined">Outlined</a>
</div>
          `
        },
        {
          title: 'States',
          code: `
<div class="has-text-centered">
  <p>Hover</p>
  <a class="hx-button is-hovered">Hover</a>
  <a class="hx-button is-primary is-hovered">Hover</a>
  <a class="hx-button is-info is-hovered">Hover</a>
  <a class="hx-button is-warning is-hovered">Hover</a>
  <a class="hx-button is-danger is-hovered">Hover</a>
  <p class="mt-5">Focus</p>
  <a class="hx-button is-focused">Focus</a>
  <a class="hx-button is-primary is-focused">Focus</a>
  <a class="hx-button is-info is-focused">Focus</a>
  <a class="hx-button is-warning is-focused">Focus</a>
  <a class="hx-button is-danger is-focused">Focus</a>
  <p class="mt-5">Active</p>
  <a class="hx-button is-active">Active</a>
  <a class="hx-button is-primary is-active">Active</a>
  <a class="hx-button is-info is-active">Active</a>
  <a class="hx-button is-warning is-active">Active</a>
  <a class="hx-button is-danger is-active">Active</a>
</div>
          `
        },
        {
          title: 'Loading',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-loading">Loading</a>
  <a class="hx-button is-primary is-loading">Loading</a>
  <a class="hx-button is-info is-loading">Loading</a>
  <a class="hx-button is-warning is-loading">Loading</a>
  <a class="hx-button is-danger is-loading">Loading</a>
</div>
          `
        },
        {
          title: 'Disabled',
          code: `
<div class="has-text-centered">
  <a class="hx-button" disabled>Disabled</a>
  <a class="hx-button is-primary" disabled>Disabled</a>
  <a class="hx-button is-info" disabled>Disabled</a>
  <a class="hx-button is-warning" disabled>Disabled</a>
  <a class="hx-button is-danger" disabled>Disabled</a>
</div>
          `
        },
        {
          title: 'With icons',
          code: `
<div class="has-text-centered">
  <p>
    <a class="hx-button">
      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>
      <span>Helix</span>
    </a>
    <a class="hx-button">
      <span>Helix</span>
      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>
    </a>
    <a class="hx-button is-success">
      <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>
      <span>Add</span>
    </a>
    <a class="hx-button is-info">
      <span>More</span>
      <span class="hx-icon-control"><i class="icon icon-more"></i></span>
    </a>
    <a class="hx-button is-danger">
      <span class="hx-icon-control"><i class="icon icon-close-empty"></i></span>
      <span>Remove</span>
    </a>
  </p>
  <p>
    <a class="hx-button is-primary is-outlined">
      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>
    </a>
    <a class="hx-button is-warning">
      <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>
    </a>
    <a class="hx-button is-dark">
      <span class="hx-icon-control"><i class="icon icon-angle-left"></i></span>
    </a>
    <a class="hx-button is-success">
      <span class="hx-icon-control"><i class="icon icon-angle-right"></i></span>
    </a>
    <a class="hx-button is-danger">
      <span class="hx-icon-control"><i class="icon icon-heart"></i></span>
    </a>
  </p>
  <p>
    <a class="hx-button is-small">
      <span>Small</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </a>
    <a class="hx-button">
      <span>Medium</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </a>
    <a class="hx-button is-large">
      <span>Large</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </a>
  </p>
</div>
          `
        },
        {
          title: 'Round icon buttons',
          code: `
<div class="has-text-centered">
  <button class="hx-button is-round is-light is-small">
    <span class="hx-icon-control">
      <i class="hx-icon icon-minus-empty"></i>
    </span>
  </button>
  <button class="hx-button is-round is-danger is-small">
    <span class="hx-icon-control">
      <i class="hx-icon icon-heart"></i>
    </span>
  </button>
  <button class="hx-button is-round">
    <span class="hx-icon-control">
      <i class="hx-icon icon-plus-empty is-medium"></i>
    </span>
  </button>
  <button class="hx-button is-info is-round">
    <span class="hx-icon-control">
      <i class="hx-icon icon-medications is-medium"></i>
    </span>
  </button>
  <button class="hx-button is-round is-light is-large">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline is-large"></i>
    </span>
  </button>
  <button class="hx-button is-round is-black is-large">
    <span class="hx-icon-control">
      <i class="hx-icon icon-paperclip is-large"></i>
    </span>
  </button>
</div>
          `
        },
        {
          title: 'Button group',
          code: `
<p class="has-text-centered">These are examples of the Button Group.</p>
<div class="hx-button-group mb-3 has-text-centered">
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
  </a>
</div>
<div class="hx-button-group mb-3 has-text-centered">
  <a class="hx-button">
    Left
  </a>
  <a class="hx-button">
    Middle
  </a>
  <a class="hx-button">
    Right
  </a>
</div>
<div class="hx-button-group has-text-centered">
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay</span>
  </a>
</div>
<p class="mt-5 has-text-centered">You can change the button style in button group addons using the button modifiers such as <code>.is-info</code> or <code>.is-primary</code>, etc.</p>
<div class="hx-button-group mb-3 has-text-centered">
  <a class="hx-button is-info">
    Left
  </a>
  <a class="hx-button is-info">
    Middle
  </a>
  <a class="hx-button is-info">
    Right
  </a>
</div>
<div class="hx-button-group has-text-centered">
  <a class="hx-button is-primary">
    Left
  </a>
  <a class="hx-button is-primary">
    Middle
  </a>
  <a class="hx-button is-primary">
    Right
  </a>
</div>
<br />
<p class="has-text-centered">Make the group of buttons stretch to the entire width of its parent. Just add class <code>is-fullwidth</code> to the group.</p>
<div class="hx-button-group has-text-centered is-fullwidth">
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email to the patient</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print invoice</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay bill with credit card</span>
  </a>
</div>
<br />
<p class="has-text-centered">Make a group of buttons stretch at equal sizes to span the entire width of its parent. Add another class <code>is-justified</code> to the group.</p>
<div class="hx-button-group has-text-centered is-fullwidth is-justified">
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email to the patient</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print invoice</span>
  </a>
  <a class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay bill with credit card</span>
  </a>
</div>
          `
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

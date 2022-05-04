<template>
  <div id="buttons">
    <h1 class="hx-title">Buttons</h1>
    <h2 class="hx-subtitle">
      The classic button, in different colors, sizes, and states
    </h2>

    <hr />

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
          title: 'Button colours',
          code: `<div class="has-text-centered">
  <button class="hx-button">Button</button>
  <button class="hx-button is-white">White</button>
  <button class="hx-button is-light">Light</button>
  <button class="hx-button is-dark">Dark</button>
  <button class="hx-button is-black">Black</button>
  <button class="hx-button is-primary">Primary</button>
  <button class="hx-button is-info">Info</button>
  <button class="hx-button is-warning">Warning</button>
  <button class="hx-button is-danger">Danger</button>
  <button class="hx-button is-link">Link</button>
  <button class="hx-button is-transparent">Transparent</button>
</div>

<div class="hx-columns">
  <div class="hx-column">
    <div class="has-text-centered hx-bg-blue my-3 py-3">
      <button class="hx-button is-white">White</button>
      <button class="hx-button is-transparent-inverted">Transparent inverted</button>
    </div>
  </div>
  <div class="hx-column">
    <div class="has-text-centered hx-bg-primary my-3 py-3">
      <button class="hx-button is-white">White</button>
      <button class="hx-button is-transparent-inverted">Transparent inverted</button>
    </div>
  </div>
</div>`
        },
        {
          title: 'Sizes',
          code: `<div class="has-text-centered">
  <button class="hx-button is-small">Small</button>
  <button class="hx-button">Normal</button>
  <button class="hx-button is-large">Large</button>
</div>`
        },
        {
          title: 'Flat',
          code: `<div class="has-text-centered">
  <button class="hx-button is-flat">Flat</button>
  <button class="hx-button is-primary is-flat">Flat</button>
  <button class="hx-button is-info is-flat">Flat</button>
  <button class="hx-button is-danger is-flat">Flat</button>
</div>`
        },
        {
          title: 'Outlined',
          code: `<div class="has-text-centered">
  <button class="hx-button is-outlined is-large">Outlined</button>
  <button class="hx-button is-primary is-outlined is-small">Outlined</button>
  <button class="hx-button is-info is-outlined">Outlined</button>
  <button class="hx-button is-danger is-outlined">Outlined</button>
</div>`
        },
        {
          title: 'States',
          code: `<div class="has-text-centered">
  <p>Hover</p>
  <button class="hx-button is-hovered">Hover</button>
  <button class="hx-button is-primary is-hovered">Hover</button>
  <button class="hx-button is-info is-hovered">Hover</button>
  <button class="hx-button is-warning is-hovered">Hover</button>
  <button class="hx-button is-danger is-hovered">Hover</button>

  <p class="mt-5">Focus</p>

  <button class="hx-button is-focused">Focus</button>
  <button class="hx-button is-primary is-focused">Focus</button>
  <button class="hx-button is-info is-focused">Focus</button>
  <button class="hx-button is-warning is-focused">Focus</button>
  <button class="hx-button is-danger is-focused">Focus</button>

  <p class="mt-5">Active</p>
  
  <button class="hx-button is-active">Active</button>
  <button class="hx-button is-primary is-active">Active</button>
  <button class="hx-button is-info is-active">Active</button>
  <button class="hx-button is-warning is-active">Active</button>
  <button class="hx-button is-danger is-active">Active</button>
</div>`
        },
        {
          title: 'Loading',
          code: `<div class="has-text-centered">
  <button class="hx-button is-loading">Loading</button>
  <button class="hx-button is-primary is-loading">Loading</button>
  <button class="hx-button is-info is-loading">Loading</button>
  <button class="hx-button is-warning is-loading">Loading</button>
  <button class="hx-button is-danger is-loading">Loading</button>
</div>
`
        },
        {
          title: 'Disabled',
          code: `<div class="has-text-centered">
  <button class="hx-button" disabled>Disabled</button>
  <button class="hx-button is-primary" disabled>Disabled</button>
  <button class="hx-button is-info" disabled>Disabled</button>
  <button class="hx-button is-warning" disabled>Disabled</button>
  <button class="hx-button is-danger" disabled>Disabled</button>
</div>`
        },
        {
          title: 'With icons',
          code: `<div class="has-text-centered">
  <p>
    <button class="hx-button">
      <span class="hx-icon-control">
        <i class="icon icon-helix"></i>
      </span>
      <span>Helix</span>
    </button>
    <button class="hx-button">
      <span>Helix</span>
      <span class="hx-icon-control">
        <i class="icon icon-helix"></i>
      </span>
    </button>
    <button class="hx-button is-success">
      <span class="hx-icon-control">
        <i class="icon icon-plus-empty"></i>
      </span>
      <span>Add</span>
    </button>
    <button class="hx-button is-info">
      <span>More</span>
      <span class="hx-icon-control">
        <i class="icon icon-more"></i>
      </span>
    </button>
    <button class="hx-button is-danger">
      <span class="hx-icon-control">
        <i class="icon icon-close-empty"></i>
      </span>
      <span>Remove</span>
    </button>
  </p>
  <p>
    <button class="hx-button is-primary is-outlined">
      <span class="hx-icon-control">
        <i class="icon icon-helix"></i>
      </span>
    </button>
    <button class="hx-button is-warning">
      <span class="hx-icon-control">
        <i class="icon icon-plus-empty"></i>
      </span>
    </button>
    <button class="hx-button is-dark">
      <span class="hx-icon-control">
        <i class="icon icon-angle-left"></i>
      </span>
    </button>
    <button class="hx-button is-success">
      <span class="hx-icon-control">
        <i class="icon icon-angle-right"></i>
      </span>
    </button>
    <button class="hx-button is-danger">
      <span class="hx-icon-control">
        <i class="icon icon-heart"></i>
      </span>
    </button>
  </p>
  <p>
    <button class="hx-button is-small">
      <span>Small</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </button>
    <button class="hx-button">
      <span>Medium</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </button>
    <button class="hx-button is-large">
      <span>Large</span>
      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
    </button>
  </p>
</div>`
        },
        {
          title: 'Round icon buttons',
          code: `<div class="has-text-centered">
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
</div>`
        },
        {
          title: 'Button group',
          code: `<p class="has-text-centered">These are examples of the Button Group.</p>

<div class="hx-button-group mb-3 has-text-centered">
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
  </button>
  <button class="hx-button is-active">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
  </button>
</div>

<div class="hx-button-group mb-3 has-text-centered">
  <button class="hx-button">
    Left
  </button>
  <button class="hx-button is-active">
    Middle
  </button>
</div>

<div class="hx-button-group has-text-centered">
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay</span>
  </button>
</div>

<p class="mt-5 has-text-centered">
  You can change the button style in button group addons using the 
  button modifiers such as <code>.is-info</code> or <code>.is-primary</code>, etc.
</p>

<div class="hx-button-group mb-3 has-text-centered">
  <button class="hx-button is-info">
    Left
  </button>
  <button class="hx-button is-info is-active">
    Middle
  </button>
  <button class="hx-button is-info">
    Right
  </button>
</div>

<div class="hx-button-group has-text-centered">
  <button class="hx-button is-primary">
    Left
  </button>
  <button class="hx-button is-primary">
    Middle
  </button>
  <button class="hx-button is-primary">
    Right
  </button>
</div>

<br />

<p class="has-text-centered">
  Make the group of buttons stretch to the entire width of its parent. 
  Just add class <code>is-fullwidth</code> to the group.
</p>

<div class="hx-button-group has-text-centered is-fullwidth">
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email to the patient</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print invoice</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay bill with credit card</span>
  </button>
</div>

<br />

<p class="has-text-centered">
  Make a group of buttons stretch at equal sizes to span the entire 
  width of its parent. Add another class <code>is-justified</code> to the group.</p>

<div class="hx-button-group has-text-centered is-fullwidth is-justified">
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-email-outline"></i>
    </span>
    <span>Email to the patient</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-printer-outline"></i>
    </span>
    <span>Print invoice</span>
  </button>
  <button class="hx-button">
    <span class="hx-icon-control">
      <i class="hx-icon icon-credit-card"></i>
    </span>
    <span>Pay bill with credit card</span>
  </button>
</div>`
        },
        {
          title: 'Split buttons',
          code: `<div class="hx-flex hx-flex-justify-around">
  <div class="hx-button-split">
    <button type="button" class="hx-button is-primary is-small">
      Create recall
    </button>
    <button type="button" class="hx-button is-primary is-small">
      <i class="icon icon-angle-down"></i>
    </button>
  </div>
  <div class="hx-button-split">
    <button type="button" class="hx-button is-primary">
      Create recall
    </button>
    <button type="button" class="hx-button is-primary">
      <i class="icon icon-angle-down"></i>
    </button>
  </div>
  <div class="hx-button-split">
    <button type="button" class="hx-button is-primary is-large">
      Create recall
    </button>
    <button type="button" class="hx-button is-primary is-large">
      <i class="icon icon-angle-down"></i>
    </button>
  </div>
</div>`
        },
        {
          title: 'Multiline button',
          code: `<div class="hx-columns">
  <div class="hx-column is-one-third">
    <button class="hx-button is-text-multiline">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium
    </button>
  </div>

  <div class="hx-column is-one-third">
    <button class="hx-button is-text-multiline">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium
      <i class="icon icon-angle-down"></i>
    </button>
  </div>

  <div class="hx-column is-one-third">
    <button class="hx-button is-text-multiline is-primary">
      <span class="hx-icon-control">
        <i class="icon icon-plus-empty"></i>
      </span>
      <span>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium
      </span>
    </button>
  </div>
</div>`
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css"></style>

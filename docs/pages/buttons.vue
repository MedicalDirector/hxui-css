<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Buttons</h1>
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
          title: 'Button colours',
          code: `<div class="has-text-centered">
    <button class="hx-button">
      <span>Default</span>
    </button>
    <button class="hx-button primary">
      <span>Primary</span>
    </button>
    <button class="hx-button secondary">
      <span>Secondary</span>
    </button>
    <button class="hx-button tertiary">
      <span>Tertiary</span>
    </button>
    <button class="hx-button success">
      <span>Success</span>
    </button>
    <button class="hx-button danger">
      <span>Danger</span>
    </button>
    <button class="hx-button info">
      <span>Info</span>
    </button>
    <button class="hx-button warning">
      <span>Warning</span>
    </button>
    <button class="hx-button caution">
      <span>Caution</span>
    </button>
    <button class="hx-button link">
      <span>Link</span>
    </button>
  </div>
  
  <div class="hx-columns">
    <div class="hx-column">
      <div class="has-text-centered hx-bg-blue my-3 py-3">
        <button class="hx-button is-white">
          <span>White</span>
        </button>
        <button class="hx-button is-transparent-inverted">
          <span>Transparent inverted</span>
        </button>
      </div>
    </div>
    <div class="hx-column">
      <div class="has-text-centered hx-bg-primary my-3 py-3">
        <button class="hx-button is-white">
          <span>White</span>
        </button>
        <button class="hx-button is-transparent-inverted">
          <span>Transparent inverted</span>
        </button>
      </div>
    </div>
  </div>`,
        },
        {
          title: 'Sizes',
          code: `<div class="flex items-center justify-center gap-2">
    <button class="hx-button">
      <span>Default</span>
    </button>
    <button class="hx-button sm">
      <span>Small</span>
    </button>
    <button class="hx-button md">
      <span>Medium</span>
    </button>
    <button class="hx-button lg">
      <span>Large</span>
    </button>
  </div>`,
        },
        {
          title: 'Flat',
          code: `<div class="flex items-center justify-center gap-2">
    <button class="hx-button flat">
      <span>Default</span>
    </button>
    <button class="hx-button primary flat">
      <span>Primary</span>
    </button>
    <button class="hx-button secondary flat">
      <span>Secondary</span>
    </button>
    <button class="hx-button info flat">
      <span>Info</span>
    </button>
    <button class="hx-button danger flat">
      <span>Danger</span>
    </button>
  </div>`,
        },
        {
          title: 'States',
          code: `<div class="block">
    <p class="text-center">Hover</p>
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button hover">
        <span>Hover</span>
      </button>
      <button class="hx-button primary hover">
        <span>Hover</span>
      </button>
      <button class="hx-button info hover">
        <span>Hover</span>
      </button>
      <button class="hx-button warning hover">
        <span>Hover</span>
      </button>
      <button class="hx-button danger hover">
        <span>Hover</span>
      </button>
    </div>
  
    <p class="text-center">Focus</p>
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button focus">
        <span>Focus</span>
      </button>
      <button class="hx-button primary focus">
        <span>Focus</span>
      </button>
      <button class="hx-button info focus">
        <span>Focus</span>
      </button>
      <button class="hx-button warning focus">
        <span>Focus</span>
      </button>
      <button class="hx-button danger focus">
        <span>Focus</span>
      </button>
    </div>
  
    <p class="text-center">Active</p>
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button active">
        <span>Active</span>
      </button>
      <button class="hx-button primary active">
        <span>Active</span>
      </button>
      <button class="hx-button info active">
        <span>Active</span>
      </button>
      <button class="hx-button warning active">
        <span>Active</span>
      </button>
      <button class="hx-button danger active">
        <span>Active</span>
      </button>
    </div>
  </div>`,
        },
        {
          title: 'Loading',
          code: `<div class="flex items-center justify-center gap-2">
    <button class="hx-button loading">
      <span>Loading</span>
    </button>
    <button class="hx-button primary loading">
      <span>Loading</span>
    </button>
    <button class="hx-button info loading">
      <span>Loading</span>
    </button>
    <button class="hx-button warning loading">
      <span>Loading</span>
    </button>
    <button class="hx-button danger loading">
      <span>Loading</span>
    </button>
  </div>
  `,
        },
        {
          title: 'Disabled',
          code: `<div class="flex items-center justify-center gap-2">
    <button class="hx-button" disabled>Disabled</button>
  </div>`,
        },
        {
          title: 'With icons',
          code: `<div class="flex flex-col items-center justify-center gap-2">
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button">
        <span class="hx-icon-control">
          <i class="hx-icon icon-helix"></i>
        </span>
        <span>Helix</span>
      </button>
      <button class="hx-button primary">
        <span>Helix</span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-helix"></i>
        </span>
      </button>
      <button class="hx-button success">
        <span class="hx-icon-control">
          <i class="hx-icon icon-plus-empty"></i>
        </span>
        <span>Add</span>
      </button>
      <button class="hx-button info">
        <span>More</span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-more"></i>
        </span>
      </button>
      <button class="hx-button danger">
        <span class="hx-icon-control">
          <i class="hx-icon icon-close-empty"></i>
        </span>
        <span>Remove</span>
      </button>
    </div>
  
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button primary icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-helix"></i>
        </span>
      </button>
      <button class="hx-button warning icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-plus-empty"></i>
        </span>
      </button>
      <button class="hx-button success icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-right"></i>
        </span>
      </button>
      <button class="hx-button danger icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-heart"></i>
        </span>
      </button>
    </div>
  
    <div class="flex items-center justify-center gap-2">
      <button class="hx-button sm">
        <span>Small</span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
      <button class="hx-button">
        <span>Medium</span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
      <button class="hx-button lg">
        <span>Large</span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
    </div>
  </div>`,
        },
        {
          title: 'Button group',
          code: `<div class="flex flex-col items-center justify-center gap-2">
    <p class="text-center">These are examples of the Button Group.</p>
    <div class="hx-button-group">
      <button class="hx-button">
        <span class="hx-icon-control">
          <i class="hx-icon icon-email-outline"></i>
        </span>
      </button>
      <button class="hx-button active">
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
  
    <div class="hx-button-group">
      <button class="hx-button">
        Left
      </button>
      <button class="hx-button active">
        Middle
      </button>
    </div>
  
    <div class="hx-button-group">
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
  
    <p class="has-text-center">
      You can change the button style in button group addons using the 
      button modifiers such as <code>.info</code> or <code>.primary</code>, etc.
    </p>
  
    <div class="hx-button-group">
      <button class="hx-button info">
        <span>Left</span>
      </button>
      <button class="hx-button info active">
        <span>Middle</span>
      </button>
      <button class="hx-button info">
        <span>Right</span>
      </button>
    </div>
  
    <div class="hx-button-group">
      <button class="hx-button primary">
        <span>Left</span>
      </button>
      <button class="hx-button primary active">
        <span>Middle</span>
      </button>
      <button class="hx-button primary">
        <span>Right</span>
      </button>
    </div>
  
    <br />
  
    <p class="text-center">
      Make the group of buttons stretch to the entire width of its parent. 
      Just add class <code>is-fullwidth</code> to the group.
    </p>
  
    <div class="hx-button-group fullwidth">
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
  </div>`,
        },
        {
          title: 'Split buttons',
          code: `<div class="flex justify-center items-center gap-2">
    <div class="hx-button-split">
      <button class="hx-button primary sm">
        <span>Create recall</span>
      </button>
      <button class="hx-button primary sm icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
    </div>
    <div class="hx-button-split">
      <button class="hx-button primary">
        <span>Create recall</span>
      </button>
      <button class="hx-button primary icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
    </div>
    <div class="hx-button-split">
      <button class="hx-button primary lg">
        <span>Create recall</span>
      </button>
      <button class="hx-button primary lg icon">
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
    </div>
  </div>`,
        },
        {
          title: 'Multiline button',
          code: `<div class="hx-columns">
    <div class="hx-column is-one-third">
      <button class="hx-button multiline">
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
          accusantium doloremque laudantium
        </span>
      </button>
    </div>
  
    <div class="hx-column is-one-third">
      <button class="hx-button multiline">
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
          accusantium doloremque laudantium
        </span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-angle-down"></i>
        </span>
      </button>
    </div>
  
    <div class="hx-column is-one-third">
      <button class="hx-button multiline is-primary">
        <span class="hx-icon-control">
          <i class="hx-icon icon-plus-empty"></i>
        </span>
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
          accusantium doloremque laudantium
        </span>
      </button>
    </div>
  </div>`,
        },
      ],
    }
  },
}
</script>

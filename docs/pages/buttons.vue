<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Buttons</h1>
      <h2 class="hx-subtitle">
        The classic button, in different colors, sizes, and states
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
          title: 'Button colours',
          withContent: false,
          code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-1 gap-4">
  <div class="flex gap-2 justify-center">
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
    
  <div class="grid grid-cols-1 tablet:grid-cols-2 gap-4">
    <div class="hx-bg-blue p-2 flex justify-center">
      <button class="hx-button is-white">
        <span>White</span>
      </button>
      <button class="hx-button is-transparent-inverted">
        <span>Transparent inverted</span>
      </button>
    </div>
    
    <div class="hx-bg-primary p-2 flex justify-center">
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
          withContent: false,
          code: `<div class="hx-card-content flex gap-2 justify-center items-center">
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
          withContent: false,
          code: `<div class="hx-card-content flex gap-2 justify-center">
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
          withContent: false,
          code: `<div class="hx-card-content flex flex-col gap-4 justify-center">
  <div class="flex items-center justify-center gap-2">
    <p class="content inline-block">Hover</p>
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

  <div class="flex items-center justify-center gap-2">
    <p class="content inline-block">Focus</p>
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

  <div class="flex items-center justify-center gap-2">
    <p class="content inline-block">Active</p>
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
          withContent: false,
          code: `<div class="hx-card-content flex items-center justify-center gap-2">
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
</div>`,
        },
        {
          title: 'Disabled',
          withContent: false,
          code: `<div class="hx-card-content flex items-center justify-center gap-2">
  <button class="hx-button" disabled>
    <span>Disabled</span>
  </button>
</div>`,
        },
        {
          title: 'With icons',
          withContent: false,
          code: `<div class="hx-card-content flex flex-col gap-4 justify-center">
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
          withContent: false,
          code: `<div class="hx-card-content flex flex-col gap-4 justify-center">
  <div class="flex items-center justify-center gap-4">
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
        <span>Left</span>
      </button>
      <button class="hx-button active">
        <span>Middle</span>
      </button>
    </div>

    <div class="hx-button-group">
      <button class="hx-button primary active">
        <span class="hx-icon-control">
          <i class="hx-icon icon-email-outline"></i>
        </span>
        <span>Email</span>
      </button>
      <button class="hx-button primary">
        <span class="hx-icon-control">
          <i class="hx-icon icon-printer-outline"></i>
        </span>
        <span>Print</span>
      </button>
      <button class="hx-button primary">
        <span class="hx-icon-control">
          <i class="hx-icon icon-credit-card"></i>
        </span>
        <span>Pay</span>
      </button>
    </div>
  </div>
  
  <p class="text-center content">
    Occupy the full width of the container by adding <code>.fullwidth</code> to the group.
  </p>
  
  <div class="flex items-center justify-center gap-2">
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
  </div>
</div>`,
        },
        {
          title: 'Split buttons',
          withContent: false,
          code: `<div class="hx-card-content flex items-center justify-center gap-2">
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
          withContent: false,
          code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-3 gap-4">
  <button class="hx-button multiline">
    <span>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium
    </span>
  </button>

  <button class="hx-button multiline">
    <span>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium
    </span>
    <span class="hx-icon-control">
      <i class="hx-icon icon-angle-down"></i>
    </span>
  </button>

  <button class="hx-button multiline is-primary">
    <span class="hx-icon-control">
      <i class="hx-icon icon-plus-empty"></i>
    </span>
    <span>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium
    </span>
  </button>
</div>`,
        },
      ],
    }
  },
}
</script>

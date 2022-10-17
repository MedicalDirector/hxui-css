<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Bar</h1>
      <h2 class="hx-subtitle">
        The bar component is a container for headers and footers.
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

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
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data() {
    return {
      data: [
        {
          class: 'hx-bar',
          type: 'component',
          description: 'Main element',
        },
        {
          class: 'hx-bar__title',
          type: 'sub-component',
          description: 'Title container element (left)',
        },
        {
          class: 'hx-bar__actions',
          type: 'sub-component',
          description: 'Actions container element (right)',
        },
        {
          class: 'app',
          type: 'modifier',
          description: 'Appbar template',
        },
        {
          class: 'sub',
          type: 'modifier',
          description: 'Subbar (toolbar) template',
        },
        {
          class: 'dialog',
          type: 'modifier',
          description: 'Dialog header bar template',
        },
        {
          class: 'footer',
          type: 'modifier',
          description: 'Bottom bar template',
        },
        {
          class: '{padding}',
          type: 'modifier',
          description: '.compact or .comfortable. Controls vertical padding',
        },
      ],
      examples: [
        {
          title: 'Examples',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4">
  <div class="hx-bar sub perforated-b">
    <button class="hx-button">
      <span class="hx-icon-container">
        <i class="hx-icon icon-send" aria-hidden="true"></i>
      </span>
      <span>Resubmit</span>
    </button>

    <button class="hx-button">
      <span class="hx-icon-container">
        <i class="hx-icon icon-printer-outline" aria-hidden="true"></i>
      </span>
      <span>Print</span>
    </button>

    <div class="hx-divider mx-1"></div>

    <div>
      <span class="is-info font-medium">2</span>
      <span> of </span>
      <span class="is-info font-medium">4</span>
      <span> items selected</span>
    </div>

    <div class="hx-spacer"></div>

    <button class="hx-button primary">
      <span class="hx-icon-container">
        <i class="hx-icon icon-plus-empty" aria-hidden="true"></i>
      </span>
      <span>Task</span>
    </button>
  </div>
    
  <div class="hx-bar sub perforated-b">
    <div>
      <span class="is-info font-medium">4</span>
      <span> items in the address book</span>
    </div>

    <div class="hx-spacer"></div>

    <i class="hx-icon icon-filter-outline" aria-hidden="true"></i>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Practitioner:&nbsp;</span>
          <span class="font-medium text-ellipsed">Mr John GP</span>
        </span>
        <span class="hx-icon-container">
          <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span>Status:&nbsp;</span>
          <span class="font-medium text-ellipsed">New</span>
        </span>
        <span class="hx-icon-container">
          <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>

    <div class="hx-divider mx-1"></div>

    <button class="hx-button primary">
      <span class="hx-icon-container">
        <i class="hx-icon icon-plus-empty" aria-hidden="true"></i>
      </span>
      <span>Address</span>
    </button>
  </div>
    
  <div class="hx-bar sub perforated-b">
    <button class="hx-button">
      <span class="hx-icon-container">
        <i class="hx-icon icon-printer-outline" aria-hidden="true"></i>
      </span>
      <span>Print</span>
    </button>

    <div class="hx-divider mx-1"></div>

    <div>
      <span class="is-info font-medium">4</span>
      <span> of </span>
      <span class="is-info font-medium">4</span>
      <span> items selected</span>
    </div>

    <div class="hx-spacer"></div>

    <span class="hx-icon-container">
      <i class="hx-icon icon-filter-outline" aria-hidden="true"></i>
    </span>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Practitioner:&nbsp;</span>
          <span class="font-medium text-ellipsed">Mr John GP</span>
        </span>
        <span class="hx-icon-container">
          <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Status:&nbsp;</span>
          <span class="font-medium text-ellipsed">New</span>
        </span>
        <span class="hx-icon-container">
          <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>

    <div class="hx-form-control no-label no-help">
      <div class="hx-input-group">
        <span class="hx-icon-container">
          <i class="hx-icon icon-search" aria-hidden="true"></i>
        </span>
        <input class="hx-input" type="search" placeholder="Search patient...">
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          code: `<p>Toolbar supports 3 sizes.</p>
<p class="hx-prose">(default)</p>
<div class="hx-bar sub bg-info-emphasis fg-contrast">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button flat">
    <span class="hx-icon-container">
      <i class="hx-icon icon-more" aria-hidden="true"></i>
    </span>
  </button>
</div>

<p class="hx-prose"><code>.compact</code></p>
<div class="hx-bar sub bg-info-emphasis fg-contrast compact mt-2">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button flat">
    <span class="hx-icon-container">
      <i class="hx-icon icon-more" aria-hidden="true"></i>
    </span>
  </button>
</div>

<p class="hx-prose"><code>.comfortable</code></p>
<div class="hx-bar sub bg-info-emphasis fg-contrast comfortable mt-2">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button flat">
    <span class="hx-icon-container">
      <i class="hx-icon icon-more" aria-hidden="true"></i>
    </span>
  </button>
</div>`,
        },
        {
          title: 'Templates',
          code: `<p class="hx-prose"><code>.app</code></p>
<div class="hx-bar app mt-0 mb-2 demo-border">
  <div class="hx-bar__title">
    <span class="hx-icon-container">
      <i class="hx-icon icon-prescription" aria-hidden="true"></i>
    </span>
    <h1>Prescription</h1>
  </div>

  <div class="hx-bar__actions">
    <button class="hx-button">
      <span>Monography</span>
    </button>
    <button class="hx-button">
      <span>CMI</span>
    </button>
    <button class="hx-button">
      <span>PI</span>
    </button>
    <button class="hx-button flat">
      <span class="hx-icon-container">
        <i class="hx-icon icon-more" aria-hidden="true"></i>
      </span>
      <span class="sr-only">More</span>
    </button>
  </div>
</div>

<p class="hx-prose"><code>.dialog</code></p>
<div class="hx-bar dialog mb-2 demo-border">
  <h1 class="h2">Title</h1>

  <button class="hx-button flat">
    <span class="hx-icon-container">
      <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </span>
  </button>
</div>

<p class="hx-prose"><code>.sub / .tool</code></p>
<div class="hx-bar sub mb-2 demo-border">
  <button class="hx-button primary">
    <span class="hx-icon-container">
      <i class="hx-icon icon-plus-empty" aria-hidden="true"></i>
    </span>
    <span>Address</span>
  </button>
  <div class="hx-divider mx-1"></div>
  <div>
    <span class="is-info font-medium">4</span>
    <span> items in the address book</span>
  </div>

  <div class="hx-spacer"></div>

  <i class="hx-icon icon-filter-outline" aria-hidden="true"></i>
  <div class="hx-dropdown">
    <button class="hx-button hx-button-dropdown">
      <span>
        <span class="font-normal">Practitioner:&nbsp;</span>
        <span class="font-medium text-ellipsed">Mr John GP</span>
      </span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="hx-dropdown">
    <button class="hx-button hx-button-dropdown">
      <span>
        <span>Status:&nbsp;</span>
        <span class="font-medium text-ellipsed">New</span>
      </span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

<p class="hx-prose"><code>.footer</code></p>
<div class="hx-bar footer demo-border">
  <button class="hx-button">
    <span>Cancel</span>
  </button>
  <button class="hx-button primary">
    <span>Save changes</span>
  </button>
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@use '@hxui/css/src/variables' as *;

.demo-border {
  border: 1px solid $hx-border-color;
}
</style>

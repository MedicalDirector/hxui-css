<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Filter</h1>
      <h2 class="hx-subtitle">
        The filter pattern colocates a toolbar with a table component.
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
          title: 'Default',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4">    
  <div class="hx-prose">
    <p>In the default state:</p>
    <ul>
      <li>major actions are left aligned;</li>
      <li>results count is adjacent; and</li>
      <li>filters are right-aligned; and</li>
      <li>search button at end and is collapsed (grows to input on focus or click).</li>
    </ul>
  </div>

  <div class="hx-bar sub perforated-b">
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
    <button class="hx-button">
      <span class="hx-icon-container">
        <i class="hx-icon icon-search" aria-hidden="true"></i>
      </span>
      <span class="sr-only">Print</span>
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
          title: 'Bulk actions',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4">
  <div class="hx-prose">
    <p>In the selected state:</p>
    <ul>
      <li>major actions relevant to selected items are shown only;</li>
      <li>selected of total results count is adjacent; and</li>
      <li>filters and search are hidden from view.</li>
    </ul>
  </div>

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
  </div>
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

<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">App bar</h1>
      <h2 class="hx-subtitle">
        The app bar is a header organism that is placed at the start of a
        <a href="/panel">Panel</a> template.
      </h2>
      <!-- <p>
        The panel header consists of a main heading (with icon, h2 heading and
        optional subheading) and optional back link, action items and input
        field.
      </p>
      <hr />

      <h3>Panel Header - Type 1</h3>
      <p>
        This header starts with an optional top row that contains the back link
        and/or action items. The next row contains the main heading, which
        consists of an icon, h2 subheading and optional subheading.
      </p>
      <p>
        <small
          >Helix note: Add the has-fixed-height class to the hx-panel-header for
          a fixed header height of 110px. The base body/html font is 15px rather
          than 16px as used this document.</small
        >
      </p> -->
    </div>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :className="ex.class"
        :withContent="ex.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'
// import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    // ApiTable,
  },
  data() {
    return {
      examples: [
        {
          title: 'Single-row',
          class: 'compact',
          code: `<div class="hx-panel demo-panel">
  <header class="hx-panel__header">
    <div class="hx-bar app">
      <div class="hx-bar__title">
        <button class="hx-button flat">
          <span class="hx-icon-container">
            <i class="hx-icon icon-arrow-left" aria-hidden="true"></i>
          </span>
          <span class="sr-only">Back</span>
        </button>
        <span class="hx-icon-container">
          <i class="hx-icon icon-woman" aria-hidden="true"></i>
        </span>
        <h1>Obstetrics</h1>
        <div class="hx-badge lg">
          <span>No current pregnancy</span>
        </div>
      </div>
    </div>
  </header>
</div>`,
        },
        {
          title: 'Multi-row',
          class: 'compact grid gap-4 bg-neutral-emphasis',
          code: `<div class="hx-panel demo-panel">
  <header class="hx-panel__header">
    <div class="hx-bar app">
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
    <div class="hx-bar sub solid-b">
      <div class="hx-form-control no-label no-help fullwidth">
        <label class="hx-label sr-only">Search icons</label>
        <div class="hx-input-group contrast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-search" aria-hidden="true"></i>
          </span>
          <input class="hx-input" type="text" />
        </div>
      </div>
    </div>
  </header>
</div>

<div class="hx-panel demo-panel">
  <header class="hx-panel__header">
    <div class="hx-bar app">
      <div class="hx-bar__title">
        <span class="hx-icon-container">
          <i class="hx-icon icon-file-outline" aria-hidden="true"></i>
        </span>
        <h1>Letter writer</h1>
      </div>

      <div class="hx-bar__actions">
        <button class="hx-button flat">
          <span class="hx-icon-container">
            <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
          </span>
          <span class="sr-only">Close</span>
        </button>
      </div>
    </div>
    <div class="hx-bar sub solid-b">
      <div class="hx-form-control no-label no-help fullwidth">
        <label class="hx-label sr-only">Search icons</label>
        <div class="hx-input-group contrast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-search" aria-hidden="true"></i>
          </span>
          <input class="hx-input" type="text" />
        </div>
      </div>
    </div>
  </header>
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@use '@hxui/css/src/variables' as *;

.demo-panel {
  border-top: 1px solid $hx-border-color;
  padding-bottom: 6rem;
}
</style>

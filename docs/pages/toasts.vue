<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Toasts</h1>
      <h2 class="hx-subtitle">
        The toast is used to display a quick message to a user.
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
          class: 'hx-toast-container',
          type: 'component',
          description: 'Container element (optional)',
        },
        {
          class: '{position}',
          type: 'modifier',
          description:
            'Achoring to screen edge: top-left, top-middle, top-right, bottom-left, bottom-middle, bottom-right',
        },
        {
          class: 'hx-toast[role="alert"]',
          type: 'component',
          description:
            'Main element. Requires adding element attribute of role="alert".',
        },
        {
          class: '{context}',
          type: 'modifier',
          description: 'Context: success (default), danger, warning, info',
        },
        {
          class: 'hx-toast__content',
          type: 'sub-component',
          description: 'Content element (class is optional, element is not)',
        },
      ],
      examples: [
        {
          title: 'Context',
          withContent: false,
          code: `<div class="hx-card__content grid phablet:grid-cols-2 laptop:grid-cols-4 gap-4">
  <div>
    <p class="hx-prose"><code>.success</code> (default)</p>

    <div class="hx-toast success">
      <span class="hx-icon-container">
        <i class="hx-icon icon-check"></i>
      </span>
      <span>Save successful</span>
      <button class="hx-button success flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty"></i>
        </span>
      </button>
    </div>
  </div>
  
  <div>
    <p class="hx-prose"><code>.danger</code></p>

    <div class="hx-toast danger">
      <span class="hx-icon-container">
        <i class="hx-icon icon-exclamation"></i>
      </span>
      <span>Failed to send</span>
      <button class="hx-button danger flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty"></i>
        </span>
      </button>
    </div>
  </div>

  <div>
    <p class="hx-prose"><code>.warning</code></p>

    <div class="hx-toast warning">
      <span class="hx-icon-container">
        <i class="hx-icon icon-exclamation"></i>
      </span>
      <span>We're offline</span>
      <button class="hx-button warning flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty"></i>
        </span>
      </button>
    </div>
  </div>

  <div>
    <p class="hx-prose"><code>.info</code></p>
    <div class="hx-toast info">
      <span class="hx-icon-container">
        <i class="hx-icon icon-information"></i>
      </span>
      <span>For your information</span>
      <button class="hx-button info flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty"></i>
        </span>
      </button>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Position',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4">
  <h3 class="h4 hx-prose m-0">Bottom</h3>
  <div class="hx-card p-4 grid laptop:grid-cols-3" style="overflow: hidden">

    <div class="container">
      <p class="m-12 p-12 text-left grow-1">
        <code>.bottom-left</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container bottom-left" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="m-12 p-12 text-center grow-1">
        <code>.bottom-middle</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container bottom-middle" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="m-12 p-12 text-right grow-1">
        <code>.bottom-right</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container bottom-right" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <h3 class="h4 hx-prose m-0">Top</h3>
  <div class="hx-card p-4 grid laptop:grid-cols-3">

    <div class="container">
      <p class="m-12 p-12 text-left grow-1">
        <code>.top-left</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container top-left" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="m-12 p-12 text-center grow-1">
        <code>.top-middle</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container top-middle" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="m-12 p-12 text-right grow-1">
        <code>.top-right</code>
      </p>

      <!-- ignore style overrides -->
      <div class="hx-toast-container top-right" style="position: absolute;">
        <div class="hx-toast">
          <span class="hx-icon-container">
            <i class="hx-icon icon-check"></i>
          </span>
          <span>Save successful</span>
          <button class="hx-button success flat">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@use '@hxui/css/src/mixins/breakpoint';

.container {
  display: flex;
  position: relative;

  @include breakpoint.laptop {
    display: contents;
  }
}
</style>

<template>
  <article class="hx-section scrollable-y">
    <div class="prose">
      <h1 class="hx-title pt-4">Badges</h1>
      <h2 class="hx-subtitle">
        Small and adaptive tag for adding context to just about any content.
      </h2>
    </div>

    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :withContent="example.withContent"
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
          title: 'Basic',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge">
    <span>Default</span>
  </div>
  <div class="hx-badge primary">
    <span class="hx-badge-content">Primary</span>
  </div>
  <div class="hx-badge secondary">
    <span class="hx-badge-content">Secondary</span>
  </div>
  <div class="hx-badge success">
    <span>Success</span>
  </div>
  <div class="hx-badge info">
    <span>Info</span>
  </div>
  <div class="hx-badge warning">
    <span>Warning</span>
  </div>
  <div class="hx-badge caution">
    <span>Caution</span>
  </div>
  <div class="hx-badge danger">
    <span>Danger</span>
  </div>
</div>`,
        },
        {
          title: 'Flat',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge">
    <span>Secondary (Default)</span>
  </div>
  <div class="hx-badge primary flat">
    <span class="hx-badge-content">Primary</span>
  </div>
  <div class="hx-badge success flat">
    <span>Success</span>
  </div>
  <div class="hx-badge info flat">
    <span>Info</span>
  </div>
  <div class="hx-badge warning flat">
    <span>Warning</span>
  </div>
  <div class="hx-badge caution flat">
    <span>Caution</span>
  </div>
  <div class="hx-badge danger flat">
    <span>Danger</span>
  </div>
</div>`,
        },
        {
          title: 'Numerical',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge sm">
    <span>0</span>
  </div>
  <div class="hx-badge sm primary">
    <span>99+</span>
  </div>
  <div class="hx-badge sm secondary">
    <span>7</span>
  </div>
  <div class="hx-badge sm success">
    <span>3</span>
  </div>
  <div class="hx-badge sm info">
    <span>3</span>
  </div>
  <div class="hx-badge sm warning">
    <span>6</span>
  </div>
  <div class="hx-badge sm caution">
    <span>7</span>
  </div>
  <div class="hx-badge sm danger">
    <span>2</span>
  </div>
</div>`,
        },
        {
          title: 'Contained and positioned',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <button class="hx-button">
    <span>Notifications</span>
    <div class="hx-badge sm compact top-right">
      <span>0</span>
    </div>
  </button>
  <button class="hx-button secondary">
    <span class="hx-icon-control">
      <i class="hx-icon icon-calendar"></i>
    </span>
    <div class="hx-badge sm compact top-right">
      <span>10</span>
    </div>
  </button>
  <button class="hx-button primary">
    <span>Notifications</span>
    <div class="hx-badge dot top-right bg-danger-emphasis"></div>
  </button>
  <div class="hx-avatar lg">
    <img 
      src="/_nuxt/assets/images/default-avatar-business-bear.png"
      alt="portrait of cartoon bear"
    />
    <div class="hx-badge dot bottom-right bg-danger-emphasis"></div>
  </div>
  <div class="hx-avatar">
    <span class="hx-icon-container">
      <i class="hx-icon icon-alert"></i>
    </span>
    <div class="hx-badge dot bottom-right bg-danger-emphasis"></div>
  </div>
  <span class="hx-icon-container">
    <i class="hx-icon icon-alert"></i>
    <div class="hx-badge dot bottom-right bg-danger-emphasis"></div>
  </span>
</div>`,
        },
        {
          title: 'Sizes',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge sm">
    <span class="hx-badge-content">
      Small
    </span>
  </div>
  <div class="hx-badge md">
    <span class="hx-badge-content">
      Medium (Default)
    </span>
  </div>
  <div class="hx-badge lg">
    <span class="hx-badge-content">
      Large
    </span>
  </div>
</div>`,
        },
        {
          title: 'Standard delete button',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge">
    <span>Default</span>
    <button class="hx-delete is-small"></button>
  </div>
  <div class="hx-badge primary md">
    <span>Medium</span>
    <button class="hx-delete is-small"></button>
  </div>
  <div class="hx-badge primary flat lg">
    <span>Large</span>
    <button class="hx-delete"></button>
  </div>
</div>`,
        },
        {
          title: 'Custom action button',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge">
    <span>Default</span>
    <button class="hx-badge-action">
      <span class="hx-icon-control">
        <i class="hx-icon icon-refresh is-white"></i>
      </span>
    </button>
  </div>
  <div class="hx-badge primary">
    <span>Medium</span>
    <button class="hx-badge-action">
      <span class="hx-icon-control">
        <i class="hx-icon icon-refresh is-white"></i>
      </span>
    </button>
  </div>
  <div class="hx-badge primary flat lg">
    <span>Large</span>
    <button class="hx-badge-action">
      <span class="hx-icon-control">
        <i class="hx-icon icon-refresh"></i>
      </span>
    </button>
  </div>
</div>`,
        },
        {
          title: 'With avatar & icons',
          language: 'javascript',
          withContent: false,
          code: `<div class="hx-card-content grid justify-center items-center gap-2">
  <div class="flex items-center justify-center gap-2">
    <span class="hx-badge primary">
      <span
        class="hx-avatar"
        style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})">
      </span>
      <span>Medium</span>
      <button class="hx-delete is-small"></button>
    </span>
    <span class="hx-badge warning">
      <div class="hx-avatar hx-bg-black">VB</div>
      <span>Medium</span>
      <button class="hx-delete is-small"></button>
    </span>
    <span class="hx-badge danger">
      <span class="hx-avatar hx-bg-black">
        <i class="hx-icon icon-injection"></i>
      </span>
      <span>Medium</span>
      <button class="hx-delete is-small"></button>
    </span>
  </div>

  <div class="flex items-center justify-center gap-2">
    <div class="hx-badge lg">
      <div
        class="hx-avatar"
        style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})">
      </div>
      <span>Large</span>
      <button class="hx-delete"></button>
    </div>
    <div class="hx-badge info lg">
      <span class="hx-avatar hx-bg-black">VB</span>
      <span>Large</span>
      <button class="hx-badge-action delete"></button>
    </div>
    <div class="hx-badge warning lg">
      <span class="hx-avatar hx-bg-black">
        <i class="hx-icon icon-bell"></i>
      </span>
      <span>Large</span>
      <button class="hx-badge-action delete"></button>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

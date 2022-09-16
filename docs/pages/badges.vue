<template>
  <article class="hx-section scrollable-y">
    <div class="content">
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
          title: 'Badges for text',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <span class="hx-badge">
    <span class="hx-badge-content">Default</span>
  </span>
  <span class="hx-badge is-white">
    <span class="hx-badge-content">White</span>
  </span>
  <span class="hx-badge is-dark">
    <span class="hx-badge-content">Dark</span>
  </span>
  <span class="hx-badge is-black">
    <span class="hx-badge-content">Black</span>
  </span>
  <span class="hx-badge is-primary">
    <span class="hx-badge-content">Success</span>
  </span>
  <span class="hx-badge is-info">
    <span class="hx-badge-content">Info</span>
  </span>
  <span class="hx-badge is-warning">
    <span class="hx-badge-content">Warning</span>
  </span>
  <span class="hx-badge is-caution">
    <span class="hx-badge-content">Caution</span>
  </span>
  <span class="hx-badge is-danger">
    <span class="hx-badge-content">Danger</span>
  </span>
</div>`,
        },
        {
          title: 'Outlined',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <span class="hx-badge is-outlined">
    <span class="hx-badge-content">Default</span>
  </span>
  <span class="hx-badge is-dark is-outlined">
    <span class="hx-badge-content">Dark</span>
  </span>
  <span class="hx-badge is-black is-outlined">
    <span class="hx-badge-content">Black</span>
  </span>
  <span class="hx-badge is-primary is-outlined">
    <span class="hx-badge-content">Success</span>
  </span>
  <span class="hx-badge is-info is-outlined">
    <span class="hx-badge-content">Info</span>
  </span>
  <span class="hx-badge is-warning is-outlined">
    <span class="hx-badge-content">Warning</span>
  </span>
  <span class="hx-badge is-caution is-outlined">
    <span class="hx-badge-content">Caution</span>
  </span>
  <span class="hx-badge is-danger is-outlined">
    <span class="hx-badge-content">Danger</span>
  </span>
</div>`,
        },
        {
          title: 'Badges for numerical values',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge">
    <span class="hx-badge-content">0</span>
  </div>
  <div class="hx-badge is-white">
    <span class="hx-badge-content">34</span>
  </div>
  <div class="hx-badge is-outlined">
    <span class="hx-badge-content">83</span>
  </div>
  <div class="hx-badge is-dark">
    <span class="hx-badge-content">87</span>
  </div>
  <div class="hx-badge is-black">
    <span class="hx-badge-content">59</span>
  </div>
  <div class="hx-badge is-primary">
    <span class="hx-badge-content">99+</span>
  </div>
  <div class="hx-badge is-info">
    <span class="hx-badge-content">3</span>
  </div>
  <div class="hx-badge is-warning">
    <span class="hx-badge-content">6</span>
  </div>
  <div class="hx-badge is-caution">
    <span class="hx-badge-content">7</span>
  </div>
  <div class="hx-badge is-danger">
    <span class="hx-badge-content">2</span>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge is-outlined is-small">
    <span class="hx-badge-content">Small</span>
  </div>
  <div class="hx-badge is-outlined">
    <span class="hx-badge-content">Default</span>
  </div>
  <div class="hx-badge is-outlined is-medium">
    <span class="hx-badge-content">Medium</span>
  </div>
  <div class="hx-badge is-danger is-large">
    <span class="hx-badge-content">Large</span>
  </div>
</div>`,
        },
        {
          title: 'Standard delete button',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge is-outlined">
    <span class="hx-badge-content">
      Default
      <button class="hx-delete is-small"></button>
    </span>
  </div>
  <div class="hx-badge is-warning is-medium">
    <span class="hx-badge-content">
      Medium
      <button class="hx-delete is-small"></button>
    </span>
  </div>
  <div class="hx-badge is-danger is-large">
    <span class="hx-badge-content">
      Large
      <button class="hx-delete"></button>
    </span>
  </div>
</div>`,
        },
        {
          title: 'Custom action button',
          withContent: false,
          code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-badge is-outlined">
    <span class="hx-badge-content">
      Default
    </span>
    <button class="hx-delete is-small hx-icon-control">
      <i class="hx-icon icon-refresh is-white is-small"></i>
    </button>
  </div>
  <div class="hx-badge is-warning is-medium">
    <span class="hx-badge-content">
      Medium
    </span>
    <button class="hx-delete hx-icon-control">
      <i class="hx-icon icon-refresh is-white is-small"></i>
    </button>
  </div>
  <div class="hx-badge is-danger is-large">
    <span class="hx-badge-content">
      Large
    </span>
    <button class="hx-delete is-medium hx-icon-control">
      <i class="hx-icon icon-refresh is-small is-white"></i>
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
      <span class="hx-badge">
        <span class="hx-badge-content">
          <span class="hx-avatar" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></span>
          Default
          <button class="hx-delete is-small"></button>
        </span>
      </span>
      <span class="hx-badge is-dark">
        <span class="hx-badge-content">
          <span class="hx-avatar hx-bg-teal">VB</span>
          Default
          <button class="hx-delete is-small"></button>
        </span>
      </span>
      <span class="hx-badge is-black">
        <span class="hx-badge-content">
          <span class="hx-avatar hx-bg-orange">
            <i class="hx-icon icon-medications"></i>
          </span>
          Default
          <button class="hx-delete is-small"></button>
        </span>
      </span>
    </div>

    <div class="flex items-center justify-center gap-2">
      <span class="hx-badge is-primary is-medium">
        <span 
          class="hx-avatar" 
          style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})">
        </span>
        <span class="hx-badge-content">
          Medium
        </span>
        <button class="hx-delete is-small"></button>
      </span>
      <span class="hx-badge is-warning is-medium">
        <span class="hx-badge-content">
          <span class="hx-avatar hx-bg-black">VB</span>
          Medium
          <button class="hx-delete is-small"></button>
        </span>
      </span>
      <span class="hx-badge is-danger is-medium">
        <span class="hx-avatar hx-bg-black">
          <i class="hx-icon icon-injection"></i>
        </span>
        <span class="hx-badge-content">
          Medium
        </span>
        <button class="hx-delete is-small"></button>
      </span>
    </div>

    <div class="flex items-center justify-center gap-2">
      <div class="hx-badge is-large">
        <span class="hx-badge-content">
          <div 
            class="hx-avatar" 
            style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})">
          </div>
          Large
          <button class="hx-delete"></button>
        </span>
      </div>
      <div class="hx-badge is-info is-large">
        <span class="hx-badge-content">
          <span class="hx-avatar hx-bg-black">VB</span>
          Large
          <button class="hx-delete"></button>
        </span>
      </div>
      <div class="hx-badge is-warning is-large">
        <span class="hx-badge-content">
          <span class="hx-avatar hx-bg-black">
            <i class="hx-icon icon-bell"></i>
          </span>
          Large
          <button class="hx-delete"></button>
        </span>
      </div>
    </div>
  </div>`,
        },
      ],
    }
  },
}
</script>

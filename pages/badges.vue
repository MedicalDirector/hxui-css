<template>
  <div id="badges">
    <h1 class="hx-title">Badges</h1>
    <h2 class="hx-subtitle">
      Small and adaptive tag for adding context to just about any content.
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
          title: 'Badges for text',
          code: `<div class="has-text-centered">
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
</div>`
        },
        {
          title: 'Outlined',
          code: `<div class="has-text-centered">
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
</div>`
        },
        {
          title: 'Badges for numerical values',
          code: `<div class="has-text-centered">
  <span class="hx-badge"><span class="hx-badge-content">0</span></span>
  <span class="hx-badge is-white"><span class="hx-badge-content">34</span></span>
  <span class="hx-badge is-outlined"><span class="hx-badge-content">83</span></span>
  <span class="hx-badge is-dark"><span class="hx-badge-content">87</span></span>
  <span class="hx-badge is-black"><span class="hx-badge-content">59</span></span>
  <span class="hx-badge is-primary"><span class="hx-badge-content">99+</span></span>
  <span class="hx-badge is-info"><span class="hx-badge-content">3</span></span>
  <span class="hx-badge is-warning"><span class="hx-badge-content">6</span></span>
  <span class="hx-badge is-caution"><span class="hx-badge-content">7</span></span>
  <span class="hx-badge is-danger"><span class="hx-badge-content">2</span></span>
</div>`
        },
        {
          title: 'Sizes',
          code: `<div class="has-text-centered">
  <span class="hx-badge is-outlined is-small"><span class="hx-badge-content">Small</span></span>
  <span class="hx-badge is-outlined"><span class="hx-badge-content">Default</span></span>
  <span class="hx-badge is-outlined is-medium"><span class="hx-badge-content">Medium</span></span>
  <span class="hx-badge is-danger is-large"><span class="hx-badge-content">Large</span></span>
</div>`
        },
        {
          title: 'Standard delete button',
          code: `<div class="has-text-centered">
  <span class="hx-badge is-outlined">
    <span class="hx-badge-content">
      Default
      <button class="hx-delete is-small"></button>
    </span>
  </span>
  <span class="hx-badge is-warning is-medium">
    <span class="hx-badge-content">
      Medium
      <button class="hx-delete is-small"></button>
    </span>
  </span>
  <span class="hx-badge is-danger is-large">
    <span class="hx-badge-content">
      Large
      <button class="hx-delete"></button>
    </span>
  </span>
</div>`
        },
        {
          title: 'Custom action button',
          code: `<div class="has-text-centered">
  <span class="hx-badge is-outlined">
    <span class="hx-badge-content">
      Default
      <button class="hx-delete is-small hx-icon-control">
        <i class="hx-icon icon-refresh is-white is-small"></i>
      </button>
    </span>
  </span>
  <span class="hx-badge is-warning is-medium">
    <span class="hx-badge-content">
      Medium
      <button class="hx-delete hx-icon-control">
        <i class="hx-icon icon-refresh is-white is-small"></i>
      </button>
    </span>
  </span>
  <span class="hx-badge is-danger is-large">
    <span class="hx-badge-content">
      Large
      <button class="hx-delete is-medium hx-icon-control">
        <i class="hx-icon icon-refresh is-white"></i>
      </button>
    </span>
  </span>
</div>`
        },
        {
          title: 'With avatar & icons',
          language: 'javascript',
          code: `<div class="has-text-centered">
  <p>
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
  </p>
  <p>
    <span class="hx-badge is-primary is-medium">
      <span class="hx-badge-content">
        <span class="hx-avatar" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></span>
        Medium
        <button class="hx-delete is-small"></button>
      </span>
    </span>
    <span class="hx-badge is-warning is-medium">
      <span class="hx-badge-content">
        <span class="hx-avatar hx-bg-black">VB</span>
        Medium
        <button class="hx-delete is-small"></button>
      </span>
    </span>
    <span class="hx-badge is-danger is-medium">
      <span class="hx-badge-content">
        <span class="hx-avatar hx-bg-black">
          <i class="hx-icon icon-injection"></i>
        </span>
        Medium
        <button class="hx-delete is-small"></button>
      </span>
    </span>
  </p>
  <p>
    <span class="hx-badge is-large">
      <span class="hx-badge-content">
        <span class="hx-avatar" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></span>
        Large
        <button class="hx-delete"></button>
      </span>
    </span>
    <span class="hx-badge is-info is-large">
      <span class="hx-badge-content">
        <span class="hx-avatar hx-bg-black">VB</span>
        Large
        <button class="hx-delete"></button>
      </span>
    </span>
    <span class="hx-badge is-warning is-large">
      <span class="hx-badge-content">
        <span class="hx-avatar hx-bg-black">
          <i class="hx-icon icon-bell"></i>
        </span>
        Large
        <button class="hx-delete"></button>
      </span>
    </span>
  </p>
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

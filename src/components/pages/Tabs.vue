<template>
  <div id="tabs">
    <h1 class="hx-title">Tabs</h1>
    <h2 class="hx-subtitle">The tab component is a small complete navigation component.</h2>

    <expanding-code-example v-for="example in examples"
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
  data () {
    return {
      examples: [
        {
          title: 'Default tab',
          code: `
      <p>The tab component only works in the HxUi-angular or HxUi-react web component libraries.</p>

      <br>
      <div class="hx-tab-container">
        <ul class="hx-nav hx-nav-tabs">
          <li class="hx-nav-item is-active">
            <a class="hx-nav-link is-active" href="javascript:void(0);">
              <span>Template</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Typescript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Javascript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Other</span>
            </a>
          </li>
        </ul>
        <div class="hx-tab-content">
              Tab content container
        </div>
      </div>
          `
        },
        {
          title: 'Center aligned',
          code: `
      <p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>

      <br>
      <div class="hx-tab-container">
        <ul class="hx-nav hx-nav-tabs is-centered">
          <li class="hx-nav-item is-active">
            <a class="hx-nav-link is-active" href="javascript:void(0);">
              <span>Template</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Typescript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Javascript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Other</span>
            </a>
          </li>
        </ul>
        <div class="hx-tab-content">
              Tab content container
        </div>
      </div>
          `
        },
        {
          title: 'Right aligned',
          code: `
      <p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>

      <br>
      <div class="hx-tab-container">
        <ul class="hx-nav hx-nav-tabs is-right">
          <li class="hx-nav-item is-active">
            <a class="hx-nav-link is-active" href="javascript:void(0);">
              <span>Template</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Typescript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Javascript</span>
            </a>
          </li>
          <li class="hx-nav-item">
            <a class="hx-nav-link" href="javascript:void(0);">
              <span>Other</span>
            </a>
          </li>
        </ul>
        <div class="hx-tab-content">
              Tab content container
        </div>
      </div>
          `
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

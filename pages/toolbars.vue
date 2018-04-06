<template>
  <div id="alerts">
    <h1 class="hx-title">Toolbars</h1>
    <h2 class="hx-subtitle">The toolbar component is a container for headers, titles, or actions.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
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
            title: 'Basic',
            code: `
<p>The most common use case for this component, will be a single row toolbar with a title and/or actions.</p>

  <div class="hx-toolbar">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Contextual',
            code: `
<p>Toolbars can be themed using one of the existing contextual modifiers</p>

  <div class="hx-toolbar">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-primary">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-warning">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-danger">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-info">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Inverted',
            code: `
<p>Toolbar themes support the inverted modifier</p>

  <div class="hx-toolbar is-primary is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-warning is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-danger is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-info is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Examples',
            code: `
<p>Other examples of how the toolbar can be configured</p>

  <div class="hx-toolbar is-info">
   <button class="hx-button is-flat"><i class="hx-icon icon-navicon"></i></button>
    <div class="hx-spacer"></div>
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar">
    <div class="hx-spacer"></div>
      <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
      <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
      <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
    <div class="hx-spacer"></div>
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

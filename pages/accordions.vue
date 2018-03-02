<template>
  <div id="accordion">

    <h1 class="hx-title">Accordions</h1>
    <h2 class="hx-subtitle">The <code>hx-accordion</code> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one accordion-panel body at a time, however, with the <code>expandable</code> property, the accordion-panel can remain open until explicitly closed.</h2>

    <hr />

    <!-- <ul class="hx-accordion">
      <li class="hx-accordion-container" v-for="(accordion, a) in demo" :key="a">
        <div class="hx-accordion-header">
          <div class="header-title">{{ accordion.title }}</div>
          <div class="header-icon">
            <i class="hx-icon icon-angle-down"></i>
          </div>
        </div>
        <div class="hx-accordion-body">
          <div class="hx-accordion-body-wrapper" v-html="accordion.content"></div>
        </div>
      </li>
    </ul> -->

    <expanding-code-example v-for="(example, i) in examples" :key="i" :title="example.title" :code="example.code" :example="example.code" :visible="false" :background="example.bg"></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data: () => ({
    demo: [
      {
        title: 'Item 1',
        content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
        `
      },
      {
        title: 'Item 2',
        content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
        `
      },
      {
        title: 'Item 3',
        content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
        `
      }
    ],
    examples: [
      {
        title: 'Examples',
        code: `
<ul class="hx-accordion">
  <li class="hx-accordion-container is-active">
    <a class="hx-accordion-header">
      <div class="header-title">Item 1</div>
      <div class="header-icon">
        <i class="hx-icon is-small icon-angle-down" style="display: none"></i>
        <i class="hx-icon is-small icon-angle-up"></i>
      </div>
    </a>
    <div class="hx-accordion-body">
      <div class="hx-accordion-body-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
      </div>
    </div>
  </li>
  <li class="hx-accordion-container">
    <a class="hx-accordion-header">
      <div class="header-title">Item 2</div>
      <div class="header-icon">
        <i class="hx-icon is-small icon-angle-down"></i>
        <i class="hx-icon is-small icon-angle-up" style="display: none"></i>
      </div>
    </a>
    <div class="hx-accordion-body" style="height: 0">
      <div class="hx-accordion-body-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
      </div>
    </div>
  </li>
  <li class="hx-accordion-container">
    <a class="hx-accordion-header">
      <div class="header-title">Item 3</div>
      <div class="header-icon">
        <i class="hx-icon is-small icon-angle-down"></i>
        <i class="hx-icon is-small icon-angle-up" style="display: none"></i>
      </div>
    </a>
    <div class="hx-accordion-body" style="height: 0">
      <div class="hx-accordion-body-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
      </div>
    </div>
  </li>
</ul>
        `
      }
    ]
  }),
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

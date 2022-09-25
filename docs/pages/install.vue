<template>
  <article class="hx-section scrollable-y prose">
    <h1 class="hx-title pt-4">Install Guide</h1>
    <h2 class="hx-subtitle">Adding Hx/UI into a project</h2>
    <hr />
    <h3 class="h5">
      You only need <strong>1 CSS or SCSS file</strong> to use Hx/UI
    </h3>

    <section>
      <p><span class="h5">1.</span> Use <strong>NPM</strong></p>

      <pre v-highlightjs>
        <code class="shell">{{ code[0] }}</code>
      </pre>
    </section>

    <section>
      <p>
        <span class="h5">2. </span><strong>Import the compiled css</strong> into
        a index.html file.
      </p>

      <pre v-highlightjs>
        <code class="html">{{ code[1] }}</code>
      </pre>
    </section>

    <section>
      <p>
        <span class="h5">3. </span>Alternatively
        <strong>import the uncompiled .scss file</strong> into an existing
        projects scss.
      </p>

      <pre v-highlightjs>
        <code class="scss">{{ code[2] }}</code>
      </pre>
    </section>

    <p>
      Please note that by importing the scss file, icons
      <strong>may not</strong> work due to the icon font files path.<br />
      To change the path simply override it via the
      <code>$icons-path: '../fonts/';</code> scss variable.
    </p>

    <pre v-highlightjs>
      <code class="scss">{{ code[3] }}</code>
    </pre>

    <br />

    <h1 class="hx-title">Modular</h1>
    <h2 class="hx-subtitle">Just import what you need</h2>

    <hr />

    <strong>You can import components individually.</strong>
    <p>
      For example, let's say you only want the HxUI <strong>grid</strong>. The
      file is located in the HxUI/scss/components/grid folder. <br />
      Simply import the utilities dependencies, and then the files you need
      directly:
    </p>

    <pre v-highlightjs>
      <code class="scss">{{ code[4] }}</code>
    </pre>

    <strong>
      Designed to optionally work in parallel with other frameworks
    </strong>
    <p>
      In order for HxUI to work with other frameworks, you will need to set
      <code>$framework-wrap</code> to <code>true</code>.<br />
      Once enabled, the <code>.hxui-reset</code> class is required to be the
      parent class for any HxUi specific styles to work.
    </p>
    <p>
      For apps that wish to use multiple frameworks, add this class to any
      container that is HxUi specific.
    </p>

    <pre v-highlightjs>
      <code class="html">{{ code[5] }}</code>
    </pre>
  </article>
</template>

<script>
export default {
  data() {
    return {
      code: [
        'npm i @hxui/css',
        '<link rel="stylesheet" href="/node_modules/@hxui/css/dist/static/css/hxui.css">',
        '@import "/node_modules/@hxui/css/static/static/scss/hxui.scss";',
        `// set the icon path before you import
        $icons-path: '../fonts/';
        @import "/node_modules/@hxui/css/static/static/scss/hxui.scss";`,
        `@import "/node_modules/@hxui/css/static/static/scss/utilities/_all";
        @import "/node_modules/@hxui/css/static/static/scss/components/grid";`,
        `<div class="hxui-reset">
          <!-- ... -->
        </div>`,
      ],
    }
  },
  components: {},
}
</script>

<style lang="scss" scoped>
pre {
  margin: 0;

  code {
    border-radius: 2px;
  }
}
</style>

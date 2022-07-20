<template>
  <div class="install">
    <h1 class="hx-title">Install Guide</h1>
    <h2 class="hx-subtitle">Adding Hx/UI into a project</h2>
    <hr />
    <h3 class="h5">
      You only need <strong>1 CSS or SCSS file</strong> to use Hx/UI
    </h3>

    <div class="hx-columns">
      <div class="hx-column">
        <section>
          <p><span class="h5">1.</span> Use <strong>NPM</strong></p>
          <!-- <p>You can run this command if you are using <strong>personal access tokens(https)</strong> method to access Visual Studio Team Services.</p> -->

          <pre v-highlightjs><code class="apache">
npm install @hxui/css --save
          </code></pre>
        </section>
        <!-- <p>For Mac users, you need to install <a href="https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux/blob/master/Install.md" target="_blank">Git Credential Manager for Mac</a> in order to access to Visual Studio Team Services properly.</p>
        <br>
        <section>
          <p>You can run this command if you are using <strong>SSH</strong> method to access Visual Studio Team Services.</p>
          <pre><code class="language-bash"><xmp>
      npm install git+ssh://medicaldirector@medicaldirector.visualstudio.com:22/MD%20Design/_git/HxUi --save
          </xmp></code></pre>
          <p>You may need to add SSH public keys to Visual Studio Team Services in order to install HxUI using npm.</p>
        </section> -->
        <br />
        <section>
          <p>
            <span class="h5">2. </span
            ><strong>Import the compiled css</strong> into a index.html file.
          </p>

          <pre v-highlightjs><code class="html">
{{ code }}
          </code></pre>
        </section>
        <br />
        <section>
          <p>
            <span class="h5">3. </span>Alternatively
            <strong>import the uncompiled .scss file</strong> into an existing
            projects scss.
          </p>

          <pre v-highlightjs><code class="scss">
@import "/node_modules/@hxui/css/static/static/scss/hxui.scss";
          </code></pre>
        </section>
        <br />
        <p>
          Please note that by importing the scss file, icons
          <strong>may not</strong> work due to the icon font files path.<br />
          To change the path simply override it via the
          <code>$icons-path: '../fonts/';</code> scss variable.
        </p>

        <pre v-highlightjs><code class="scss">
// set the icon path before you import
$icons-path: '../fonts/';
@import "/node_modules/@hxui/css/static/static/scss/hxui.scss";
        </code></pre>
      </div>
    </div>
    <br />
    <h1 class="hx-title">Modular</h1>
    <h2 class="hx-subtitle">Just import what you need</h2>
    <hr />
    <h3 class="h5">You can import components individually.</h3>
    <p>
      For example, let's say you only want the HxUI <strong>grid</strong>. The
      file is located in the HxUI/scss/components/grid folder. <br />
      Simply import the utilities dependencies, and then the files you need
      directly:
    </p>

    <pre v-highlightjs><code class="scss">
@import "/node_modules/@hxui/css/static/static/scss/utilities/_all";
@import "/node_modules/@hxui/css/static/static/scss/components/grid";
    </code></pre>
    <br />

    <h3 class="h5">
      Designed to optionally work in parallel with other frameworks
    </h3>
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
    <pre v-highlightjs><code class="html">
&#x3C;div class=&#x22;hxui-reset&#x22;&#x3E;
...
    </code></pre>
    <br />
    <br />

    <h1 class="hx-title">Documentation</h1>
    <h2 class="hx-subtitle">Running documentation locally</h2>
    <hr />
    <h3 class="h5">One command to load them all.</h3>
    <p>
      You can easily run the documentation locally by running the following
      command in terminal or command prompt.
    </p>

    <pre v-highlightjs><code class="apache">
npm start
    </code></pre>

    <p>
      There're basic requirements to run the documentation locally. You will
      need to install
      <a href="https://nodejs.org/en/" target="_blank"
        >Node Package Manager(npm)</a
      >
      and <a href="https://vuejs.org/" target="_blank">VueJS</a> in order to run
      the documentation.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '<link rel="stylesheet" href="/node_modules/@hxui/css/dist/static/css/hxui.css">',
    }
  },
  components: {},
}
</script>

<style lang="scss"></style>

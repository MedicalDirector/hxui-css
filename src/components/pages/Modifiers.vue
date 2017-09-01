<template>
  <div id="modifiers">
    <h1 class="hx-title">Modifiers</h1>
    <h2 class="hx-subtitle">Most HxUI components have alternative styles. <br>To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</h2>
    <hr>
    <br>
    <div class="hx-columns">
      <div class="hx-column is-3">
        Let's start with a simple button that uses the <code>hx-button</code> CSS class:
      </div>
      <div class="hx-column is-3 is-offset-1">
        <a class="hx-button">Normal button</a>
      </div>
      <div class="hx-column">
        <pre v-highlightjs><code class="html"><xmp>
        <a class="hx-button">Normal button</a>
        </xmp></code></pre>
      </div>
    </div>
    <br>
    <div class="hx-columns">
      <div class="hx-column is-3">
        By adding the <code>is-primary</code> CSS class, you can modify the color:
      </div>
      <div class="hx-column is-3 is-offset-1">
        <a class="hx-button is-primary">Primary button</a>
      </div>
      <div class="hx-column">
        <pre><code class="language-html"><xmp>
        <a class="hx-button is-primary">Primary button</a>
        </xmp></code></pre>
      </div>
    </div>
    <br>
    <div class="hx-columns">
      <div class="hx-column is-3">
        You can use one of the main 5 colours:
        <ul>
          <li><code>is-primary</code></li>
          <li><code>is-info</code></li>
          <li><code>is-warning</code></li>
          <li><code>is-danger</code></li>
        </ul>
      </div>
      <div class="hx-column is-3 is-offset-1">
        <p><a class="hx-button is-primary">Primary button</a></p>
        <p><a class="hx-button is-info">Info button</a></p>
        <p><a class="hx-button is-warning">Warning button</a></p>
        <p><a class="hx-button is-danger">Danger button</a></p>
      </div>
      <div class="hx-column">
        <pre><code class="language-html"><xmp>
        <a class="hx-button is-primary">Primary button</a>
        <a class="hx-button is-info">Info button</a>
        <a class="hx-button is-warning">Warning button</a>
        <a class="hx-button is-danger">Danger button</a>
        </xmp></code></pre>
      </div>
    </div>

    <br>

    <div class="hx-columns">
      <div class="hx-column is-3">
        You can change the <strong>size</strong> by using the following modifiers:
        <ul>
          <li><code>is-small</code></li>
          <li><code>is-medium</code></li>
          <li><code>is-large</code></li>
        </ul>
      </div>
      <div class="hx-column is-3 is-offset-1">
        <p><a class="hx-button is-small">Small button</a></p>
        <p><a class="hx-button is-medium">Medium button</a></p>
        <p><a class="hx-button is-large">Large button</a></p>
      </div>
      <div class="hx-column">
        <pre><code class="language-html"><xmp>
        <a class="hx-button is-small">Small button</a>
        <a class="hx-button is-medium">Medium button</a>
        <a class="hx-button is-large">Large button</a>
        </xmp></code></pre>
      </div>
    </div>
    <br>
    <div class="hx-columns">
      <div class="hx-column is-3">
        You can also change the <strong>style</strong> or <strong>state</strong>:
        <ul>
          <li><code>is-outlined</code></li>
          <li><code>is-loading</code></li>
          <li><code>disabled</code></li>
        </ul>
      </div>
      <div class="hx-column is-3 is-offset-1">
        <p><a class="hx-button is-outlined">Outlined button</a></p>
        <p><a class="hx-button is-loading">Loading button</a></p>
        <p><a class="hx-button" disabled>Disabled button</a></p>
      </div>
      <div class="hx-column is-5">
        <pre><code class="language-html"><xmp>
        <a class="hx-button is-outlined">Outlined button</a>
        <a class="hx-button is-loading">Loading button</a>
        <a class="hx-button" disabled>Disabled button</a>
        </xmp></code></pre>
      </div>
    </div>
    <br>
    <div class="hx-columns">
      <div class="hx-column is-3">
        You can even <strong>mix different modifiers</strong> together:
        <ul>
          <li><code>is-outlined is-info</code></li>
          <li><code>is-loading is-warning</code></li>
          <li><code>disabled is-danger is-fullwidth</code></li>
        </ul>
      </div>
      <div class="hx-column is-3 is-offset-1">
        <p><a class="hx-button is-outlined is-info">Info Outlined button</a></p>
        <p><a class="hx-button is-loading is-warning">Warning Loading button</a></p>
        <p><a class="hx-button is-danger is-fullwidth" disabled>Danger disabled button</a></p>
      </div>
      <div class="hx-column is-5">
        <pre><code class="language-html"><xmp>
        <a class="hx-button is-outlined is-info">Info Outlined button</a>
        <a class="hx-button is-loading is-warning">Warning Loading button</a>
        <a class="hx-button is-danger is-fullwidth" disabled>Danger disabled button</a>
        </xmp></code></pre>
      </div>
    </div>
    <br>
    <br>
    <h1 class="hx-title">Helper Modifiers</h1>
    <h2 class="hx-subtitle">You can apply <strong>helper modifier classes</strong> to almost any element, in order to alter its style based upon the browser's width.</h2>
    <hr>
    <br>
    <div class="hx-columns">
      <div class="hx-column">
        <table class="hx-table is-bordered">
        <tbody>

          <tr>
            <th>Overlay</th>
            <td><code>is-overlay</code></td>
            <td>Completely covers the first positioned parent</td>
          </tr>
          <tr>
            <th>Size</th>
            <td><code>is-fullwidth</code></td>
            <td>Takes up the whole width (100%)</td>
          </tr>
          <tr>
            <th rowspan="3">Text</th>
            <td><code>has-text-centered</code></td>
            <td>Centers the text</td>
          </tr>
          <tr>
            <td><code>has-text-left</code></td>
            <td>Text is left-aligned</td>
          </tr>
          <tr>
            <td><code>has-text-right</code></td>
            <td>Text is right-aligned</td>
          </tr>
          <tr>
            <th rowspan="3">Other</th>
            <td><code>is-marginless</code></td>
            <td>Removes any <strong>margin</strong></td>
          </tr>
          <tr>
            <td><code>is-paddingless</code></td>
            <td>Removes any <strong>padding</strong></td>
          </tr>
          <tr>
            <td><code>is-unselectable</code></td>
            <td>Prevents the text from being <strong>selectable</strong></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

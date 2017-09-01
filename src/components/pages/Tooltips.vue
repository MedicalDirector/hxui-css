<template>
  <div id="tooltips">
    <h1 class="hx-title">Tooltips</h1>
    <h2 class="hx-subtitle">This component is used to display extra information to a user about an element by displaying a floating description.</h2>
    <hr>
    <h1 class="h3">Simple Tooltips</h1>

    <div class="hx-columns">
      <div class="hx-column is-7">
        <p>The tooltip structure is simple:</p>
        <ul>
          <li>
            <code>.hx-tooltip</code>: The tooltip container
            <ul>
              <li>
                <code>.hx-tooltip-content</code>: The tooltip content
              </li>
            </ul>
          </li>
        </ul>

        <div class="doc-example has-text-centered">
          <div class="hx-tooltip doc-tooltip-demo">
            <div class="hx-tooltip-content">
              A Simple Tooltip
            </div>
          </div>
        </div>
      </div>
      <div class="hx-column">
        <!-- <pre><code class="html"><xmp>
          <div class="hx-tooltip">
            <div class="hx-tooltip-content">
              A Simple Tooltip
            </div>
          </div>
        </xmp></code></pre> -->
      </div>
    </div>
    <br>


    <h1 class="h3">Tooltips Position</h1>
    <div class="hx-columns">
      <div class="hx-column is-7">
        <p>There are four modifiers to change the tooltip arrow alignment: <br>
          <code>.is-top</code>, <code>.is-right</code>, <code>.is-bottom</code>, and <code>.is-left</code></p>
        <div class="doc-example">
          <div class="hx-tooltip is-top doc-tooltip-demo">
            <div class="hx-tooltip-content">
              Tooltip on the top
            </div>
          </div>
          <div class="hx-tooltip is-right doc-tooltip-demo">
            <div class="hx-tooltip-content">
              Tooltip on the right
            </div>
          </div>
          <div class="hx-tooltip is-bottom doc-tooltip-demo">
            <div class="hx-tooltip-content">
              Tooltip on the bottom
            </div>
          </div>
          <div class="hx-tooltip is-left doc-tooltip-demo">
            <div class="hx-tooltip-content">
              Tooltip on the left
            </div>
          </div>
        </div>
      </div>
      <div class="hx-column">
        <!-- <pre><code class="html"><xmp>
          <div class="hx-tooltip is-top">
            <div class="hx-tooltip-content">
              Tooltip on the top
            </div>
          </div>
          <div class="hx-tooltip is-right">
            <div class="hx-tooltip-content">
              Tooltip on the right
            </div>
          </div>
          <div class="hx-tooltip is-bottom">
            <div class="hx-tooltip-content">
              Tooltip on the bottom
            </div>
          </div>
          <div class="hx-tooltip is-left">
            <div class="hx-tooltip-content">
              Tooltip on the left
            </div>
          </div>
        </div>
        </xmp></code></pre> -->
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

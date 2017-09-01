<template>
  <div id="nav">
    <h1 class="hx-title">Nav</h1>
    <h2 class="hx-subtitle">A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo</h2>
    <hr>

    <div class="hx-columns">
      <div class="hx-column">

        <h3 class="">Basic nav</h3>
        <p>Note the nav requires the <code>.hx-nav</code> base class.</p>
        <br>

        <p>Example</p>
        <ul class="hx-nav">
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">News & data</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link is-active">Status board</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">Custom</a>
          </li>
        </ul>
        <br>

        <p>Code</p>
        <pre><code class="language-markup"><xmp>
    <ul class="hx-nav">
      <li class="hx-nav-item">
        <a href="#" class="hx-nav-link">News & data</a>
      </li>
      <li class="hx-nav-item">
        <a href="#" class="hx-nav-link is-active">Status board</a>
      </li>
      <li class="hx-nav-item">
        <a href="#" class="hx-nav-link">Custom</a>
      </li>
    </ul>
        </xmp></code></pre>

        <br>
        <H4>Modifiers</H4>
        <h5>Center aligned</h5>
        <p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>

        <br>
        <p>Example</p>
        <ul class="hx-nav is-centered">
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">News & data</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link is-active">Status board</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">Custom</a>
          </li>
        </ul>
        <br>

        <p>Code</p>
        <pre><code class="language-markup"><xmp>
      <ul class="hx-nav is-centered">
        ...
      </ul>
        </xmp></code></pre>
        <br/>
        <h5>Right aligned</h5>
        <p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>

        <br>
        <p>Example</p>
        <ul class="hx-nav is-right">
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">News & data</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link is-active">Status board</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">Custom</a>
          </li>
        </ul>
        <br>

        <p>Code</p>
        <pre><code class="language-markup"><xmp>
      <ul class="hx-nav is-right">
        ...
      </ul>
        </xmp></code></pre>

      </div>
    </div>

    <hr>

    <div class="hx-columns">
      <div class="hx-column">

        <h5>Vertical</h5>
        <p>Note the vertical nav requires the modifier <code>.is-vertical</code> added to <code>.hx-nav</code> base class.</p>

        <p>Example</p>
        <ul class="hx-nav is-vertical">
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">News & data</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link is-active">Status board</a>
          </li>
          <li class="hx-nav-item">
            <a href="#" class="hx-nav-link">Custom</a>
          </li>
        </ul>

        <p>Code</p>
        <pre><code class="language-markup"><xmp>
      <ul class="hx-nav is-vertical">
        <li class="hx-nav-item">
          <a href="#" class="hx-nav-link">News & data</a>
        </li>
        <li class="hx-nav-item">
          <a href="#" class="hx-nav-link is-active">Status board</a>
        </li>
        <li class="hx-nav-item">
          <a href="#" class="hx-nav-link">Custom</a>
        </li>
      </ul>
        </xmp></code></pre>

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

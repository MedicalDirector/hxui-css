<template>
  <div id="dropdown">
    <h1 class="hx-title">Dropdown</h1>
    <h2 class="hx-subtitle">Contextual overlay for displaying lists of links or custom components.</h2>
    <hr>

    <h4>Contextual menu</h4>

    <br>

    <div class="hx-columns">
      <div class="hx-column">
        <p>Example</p>
        <div class="hx-dropdown is-open">
          <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
            Dropdown button
          </button>
          <div class="hx-dropdown-menu">
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
            <a class="hx-dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="hx-column">
      <p>Code</p>
      <pre><code class="language-markup"><xmp>
      <div class="hx-dropdown is-open">
        <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
          Dropdown button
        </button>
        <div class="hx-dropdown-menu">
          <a class="hx-dropdown-item" href="#">Action</a>
          <a class="hx-dropdown-item" href="#">Another action</a>
          <a class="hx-dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      </xmp></code></pre>
      </div>
    </div>

    <hr>


    <h4>Grouped contextual menu</h4>
    <p>Add a header to label sections of actions and/or dividers in any dropdown menu.</p>

    <br>

    <div class="hx-columns">
      <div class="hx-column">
        <p>Example</p>
        <div class="hx-dropdown is-open">
          <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
            Dropdown button
          </button>
          <div class="hx-dropdown-menu">
            <div class="hx-dropdown-header">Dropdown header</div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
            <div class="hx-dropdown-divider"></div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
          </div>
        </div>
      </div>
      <div class="hx-column">

        <p>Code</p>
      <pre><code class="language-markup"><xmp>
      <div class="hx-dropdown is-open">
        <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
          Dropdown button
        </button>
        <div class="hx-dropdown-menu">
          <div class="hx-dropdown-header">Dropdown header</div>
          <a class="hx-dropdown-item" href="#">Action</a>
          <a class="hx-dropdown-item" href="#">Another action</a>
          <div class="hx-dropdown-divider"></div>
          <a class="hx-dropdown-item" href="#">Action</a>
          <a class="hx-dropdown-item" href="#">Another action</a>
        </div>
      </div>
      </xmp></code></pre>
      </div>
    </div>


    <hr>


    <h4>Position</h4>
    <p>Position menu .is-dropup, .is-left, .is-right. Default is bottom left</p>

    <br>

    <div class="hx-columns">
      <div class="hx-column">
        <p>Example</p>
        <div class="hx-dropdown is-dropup is-open" style="margin-top:14rem;">
          <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
            Dropdown button
          </button>
          <div class="hx-dropdown-menu">
            <div class="hx-dropdown-header">Dropdown header</div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
            <div class="hx-dropdown-divider"></div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
          </div>
        </div>
      </div>
      <div class="hx-column">

        <p>Code</p>
        <pre><code class="language-markup"><xmp>
        <div class="hx-dropdown is-dropup is-open" style="margin-top:14rem;">
          <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
            Dropdown button
          </button>
          <div class="hx-dropdown-menu">
            <div class="hx-dropdown-header">Dropdown header</div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
            <div class="hx-dropdown-divider"></div>
            <a class="hx-dropdown-item" href="#">Action</a>
            <a class="hx-dropdown-item" href="#">Another action</a>
          </div>
        </div>
        </xmp></code></pre>
      </div>
    </div>


    <hr>


    <h4>Custom content</h4>
    <p>Add any component within. No padding, no margins.<br>Styling should be controlled by the component.</p>

    <br>

    <div class="hx-columns">
      <div class="hx-column">
        <p>Example</p>
        <div class="hx-dropdown is-open">
          <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
            Dropdown button
          </button>
          <div class="hx-dropdown-menu">

            <h1 class="hx-title">Custom Component</h1>
            <h2 class="hx-subtitle">Supports any type of content</h2>
            <hr>
            <table class="table">
              <thead>
              <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
                <td>Col 4</td>
                <td>Col 4</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="hx-column">

        <p>Code</p>
      <pre><code class="language-markup"><xmp>
      <div class="hx-dropdown is-open">
        <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
          Dropdown button
        </button>
        <div class="hx-dropdown-menu">
          <h1 class="hx-title">Custom Component</h1>
          <h2 class="hx-subtitle">Supports any type of content</h2>
          <hr>
          <table class="table">
            <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
              <th>Col 4</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>Col 1</td>
              <td>Col 2</td>
              <td>Col 3</td>
              <td>Col 4</td>
              <td>Col 4</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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

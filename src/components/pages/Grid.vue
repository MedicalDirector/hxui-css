<template>
  <div id="grid">
    <h1 class="hx-title">Grid</h1>
    <h2 class="hx-subtitle">A simple way to build responsive columns</h2>
    <hr>

    <section>
      <h2 class="h4">Let's start simple</h2>
      <p>To build a grid, just:
      <ol>
        <li>Add a <code>hx-columns</code> container</li>
        <li>Add as many <code>hx-column</code> elements as you want</li>
      </ol>
      <p>Each column will have an equal width, no matter the number of columns.</p>
      <br>
      <div class="hx-columns">
        <div class="hx-column">
          <p class="doc-grid-background">First column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background">Second column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background">Third column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background">Fourth column</p>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns">
        <div class="hx-column">
          <p>First column</p>
        </div>
        <div class="hx-column">
          <p>Second column</p>
        </div>
        <div class="hx-column">
          <p>Third column</p>
        </div>
        <div class="hx-column">
          <p>Fourth column</p>
        </div>
      </div>
      </xmp></code></pre>
    </section>
    <br>
    <hr>
    <section>
      <h1 class="h3">Column Sizes</h1>
      <p>If you want to change the size of a single column, you can use one the following classes:</p>
      <ul>
        <li><code>is-three-quarters</code></li>
        <li><code>is-two-thirds</code></li>
        <li><code>is-half</code></li>
        <li><code>is-one-third</code></li>
        <li><code>is-one-quarter</code></li>
      </ul>
      <p>The other columns will fill up the remaining space automatically.</p>

      <div class="hx-columns">
        <div class="hx-column is-three-quarters">
          <p class="doc-grid-background">.is-three-quarters</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-two-thirds">
          <p class="doc-grid-background">.is-two-thirds</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-half">
          <p class="doc-grid-background">.is-half</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-one-third">
          <p class="doc-grid-background">.is-one-third</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-one-quarter">
          <p class="doc-grid-background">.is-one-quarter</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Auto</p>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns">
        <div class="hx-column is-three-quarters">
          <p>.is-three-quarters</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-two-thirds">
          <p>.is-two-thirds</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-half">
          <p>.is-half</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-one-third">
          <p>.is-one-third</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-one-quarter">
          <p>.is-one-quarter</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Auto</p>
        </div>
      </div>
      </xmp></code></pre>
    </section>
    <br>
    <hr>
    <section>
      <h1 class="h3">12 Columns</h1>
      <p>As the grid can be divided into <strong>12 columns</strong>, there are size classes for each division:</p>
      <ul>
        <li><code>is-2</code></li>
        <li><code>is-3</code></li>
        <li><code>is-4</code></li>
        <li><code>is-5</code></li>
        <li><code>is-6</code></li>
        <li><code>is-7</code></li>
        <li><code>is-8</code></li>
        <li><code>is-9</code></li>
        <li><code>is-10</code></li>
        <li><code>is-11</code></li>
      </ul>

      <div class="hx-columns">
        <div class="hx-column is-2">
          <p class="doc-grid-background">.is-2</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-3">
          <p class="doc-grid-background">.is-3</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-4">
          <p class="doc-grid-background">.is-4</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-5">
          <p class="doc-grid-background">.is-5</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-6">
          <p class="doc-grid-background">.is-6</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-7">
          <p class="doc-grid-background">.is-7</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-8">
          <p class="doc-grid-background">.is-8</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-9">
          <p class="doc-grid-background">.is-9</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-10">
          <p class="doc-grid-background">.is-10</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-11">
          <p class="doc-grid-background">.is-11</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">1</p>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns">
        <div class="hx-column is-2">
          <p>.is-2</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-3">
          <p>.is-3</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-4">
          <p>.is-4</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-5">
          <p>.is-5</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-6">
          <p>.is-6</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-7">
          <p>.is-7</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-8">
          <p>.is-8</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-9">
          <p>.is-9</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-10">
          <p>.is-10</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-11">
          <p>.is-11</p>
        </div>
        <div class="hx-column">
          <p class="is-info">1</p>
        </div>
      </div>
      </xmp></code></pre>
    </section>
    <br>
    <hr>
    <section>
      <h1 class="h3">Offsetting Columns</h1>
      <p>While you can use empty columns (like <code>&lt;div class="hx-column"&gt;&lt;/div&gt;</code>) to create horizontal space around <code>.hx-column</code> elements, <br>you can also use <strong>offset modifiers</strong> like <code>.is-offset-x</code>:</p>

      <div class="hx-columns">
        <div class="hx-column is-half is-offset-one-quarter">
          <p class="doc-grid-background">.is-half .is-offset-one-quarter</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-3 is-offset-7">
          <p class="doc-grid-background">.is-3 .is-offset-7</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-5 is-offset-2">
          <p class="doc-grid-background">.is-5 .is-offset-2</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-11 is-offset-1">
          <p class="doc-grid-background">.is-11 .is-offset-1</p>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns">
        <div class="hx-column is-half is-offset-one-quarter">
          <p>.is-half .is-offset-one-quarter</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-3 is-offset-7">
          <p>.is-3 .is-offset-7</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-5 is-offset-2">
          <p>.is-5 .is-offset-2</p>
        </div>
      </div>

      <div class="hx-columns">
        <div class="hx-column is-11 is-offset-1">
          <p>.is-11 .is-offset-1</p>
        </div>
      </div>
      </xmp></code></pre>
    </section>


    <br>
    <hr>
    <section>
      <h1 class="h3">Nesting Columns</h1>
      <p>You can <strong>nest columns</strong> to have more flexibility in your design. You only need to follow this structure:</p>
      <ul>
        <li><code>.hx-columns</code> Top-level (First level) columns container</li>
          <ul>
          <li><code>.hx-column</code> A column for the First level columns</li>
            <ul>
              <li><code>.hx-columns</code> Nested columns (Second level) columns container</li>
              <ul>
                <li><code>.hx-column</code> A column for the Second level columns</li>
              </ul>
            </ul>
          </ul>
      </ul>

      <div class="hx-columns">
        <div class="hx-column">
          <p class="doc-grid-background">1st level - First column</p>
          <div class="hx-columns">
            <div class="hx-column">
              <p class="doc-grid-background is-warning">2nd level - Nested column</p>
            </div>
            <div class="hx-column">
              <p class="doc-grid-background is-warning">2nd level - Nested column</p>
            </div>
          </div>
        </div>

        <div class="hx-column">
          <p class="doc-grid-background">1st level - Second column</p>
          <div class="hx-columns">
            <div class="hx-column">
              <p class="doc-grid-background is-warning">2nd level</p>
            </div>
            <div class="hx-column">
              <div class="hx-columns">
                <div class="hx-column">
                  <p class="doc-grid-background is-danger">3rd level</p>
                </div>
                <div class="hx-column">
                  <p class="doc-grid-background is-danger">3rd level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns">
        <div class="hx-column">
          <p>1st level - First column</p>
          <div class="hx-columns">
            <div class="hx-column">
              <p class="is-warning">2nd level - Nested column</p>
            </div>
            <div class="hx-column">
              <p class="is-warning">2nd level - Nested column</p>
            </div>
          </div>
        </div>

        <div class="hx-column">
          <p>1st level - Second column</p>
          <div class="hx-columns">
            <div class="hx-column">
              <p class="is-warning">2nd level</p>
            </div>
            <div class="hx-column">
              <div class="hx-columns">
                <div class="hx-column">
                  <p class="is-danger">3rd level</p>
                </div>
                <div class="hx-column">
                  <p class="is-danger">3rd level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </xmp></code></pre>
    </section>

    <br>
    <hr>
    <section>
      <h1 class="h3">Gapless Columns</h1>
      <p>If you want to <strong>remove the space between the columns</strong>, add the <code>is-gapless</code> modifier on the columns container:</p>

      <div class="hx-columns is-gapless">
        <div class="hx-column">
          <p class="doc-grid-background">First column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-warning">Second column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-info">Third column</p>
        </div>
        <div class="hx-column">
          <p class="doc-grid-background is-danger">Fourth column</p>
        </div>
      </div>

      <pre><code class="language-markup"><xmp>
      <div class="hx-columns is-gapless">
        <div class="hx-column">
          <p>First column</p>
        </div>
        <div class="hx-column">
          <p class="is-warning">Second column</p>
        </div>
        <div class="hx-column">
          <p class="is-info">Third column</p>
        </div>
        <div class="hx-column">
          <p class="is-danger">Fourth column</p>
        </div>
      </div>
      </xmp></code></pre>
      <br>
      <p>You can even combine it with <strong>nested columns</strong>:</p>
      <div class="hx-columns is-gapless">
        <div class="hx-column">
          <p class="doc-grid-background">1st level - First column</p>
          <div class="hx-columns is-gapless">
            <div class="hx-column">
              <p class="doc-grid-background is-warning">2nd level - Nested column</p>
            </div>
            <div class="hx-column">
              <p class="doc-grid-background is-warning">2nd level - Nested column</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

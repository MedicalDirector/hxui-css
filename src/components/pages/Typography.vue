<template>
  <div id="typo">
    <h1 class="hx-title">Typography</h1>
    <h2 class="hx-subtitle">Simple typography to add depth to your page</h2>
    <hr>
    <h3>Titles</h3>
    <div class="hx-columns">
      <div class="hx-column is-3">
        <p>There are <strong>2 types</strong> of titles:</p>
        <ul>
          <li><code>.hx-title</code></li>
          <li><code>.hx-subtitle</code></li>
        </ul>
      </div>
      <div class="hx-column">
        <h1 class="hx-title">Title</h1>
        <h2 class="hx-subtitle">Subtitle</h2>
      </div>

      <div class="hx-column">
        <pre><code class="language-markup"><xmp>
        <h1 class="hx-title">Title</h1>
        <h2 class="hx-subtitle">Subtitle</h2>
        </xmp></code></pre>
      </div>
    </div>
    <hr>
    <h3>Headings</h3>
    <div class="hx-columns">
      <div class="hx-column is-3">
        <p>There are <strong>6 sizes</strong> available:</p>
        <ul>
          <li><code>&lt;h1&gt;</code> or <code>.h1</code></li>
          <li><code>&lt;h2&gt;</code> or <code>.h2</code></li>
          <li><code>&lt;h3&gt;</code> or <code>.h3</code></li>
          <li><code>&lt;h4&gt;</code> or <code>.h4</code></li>
          <li><code>&lt;h5&gt;</code> or <code>.h5</code></li>
          <li><code>&lt;h6&gt;</code> or <code>.h6</code></li>
        </ul>
      </div>
      <div class="hx-column">
        <h1>h1. HxUI heading</h1>
        <h2>h2. HxUI heading</h2>
        <h3>h3. HxUI heading</h3>
        <h4>h4. HxUI heading</h4>
        <h5>h5. HxUI heading</h5>
        <h6>h6. HxUI heading</h6>
      </div>

      <div class="hx-column">
        <pre><code class="language-markup"><xmp>
        <h1>h1. HxUI heading</h1>
        <h2>h2. HxUI heading</h2>
        <h3>h3. HxUI heading</h3>
        <h4>h4. HxUI heading</h4>
        <h5>h5. HxUI heading</h5>
        <h6>h6. HxUI heading</h6>
        </xmp></code></pre>
      </div>
    </div>

    <hr>
    <h3>Paragraphs and Inline text elements</h3>
    <div class="hx-columns">
      <div class="hx-column is-5">
        <ul>
          <li><code>&lt;p&gt;</code> Paragraphs</li>
          <li><code>&lt;mark&gt;</code> Mark</li>
          <li><code>&lt;del&gt;</code> Delete</li>
          <li><code>&lt;s&gt;</code> Strikeline</li>
          <li><code>&lt;ins&gt;</code> Insert</li>
          <li><code>&lt;u&gt;</code> Underline</li>
          <li><code>&lt;small&gt;</code> Small</li>
          <li><code>&lt;strong&gt;</code> Strong</li>
          <li><code>&lt;em&gt;</code> Emphasized</li>
        </ul>

      </div>
      <div class="hx-column">
        <p>This is a paragraph.</p>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
      </div>
    </div>
    <div class="hx-columns">
      <div class="hx-column">
        <pre><code class="language-markup"><xmp>
        <p>This is a paragraph.</p>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
        </xmp></code></pre>
      </div>
    </div>

    <hr>
    <h3>Lists</h3>
    <div class="hx-columns">
      <div class="hx-column is-4">
        <p>Use an unordered list to list things, if the order of the items doesn't matter.</p>
        <p>And a definition list <code>&lt;dl&gt;</code> is used to display name-value pairs, <br>like metadata or a dictionary definition. <br>Each term <code>&lt;dt&gt;</code> is paired with one or more definitions <code>&lt;dd&gt;</code>.</p>
        <ul>
          <li><code>&lt;ul&gt;</code> Unorder list</li>
          <li><code>&lt;ol&gt;</code> Order list</li>
          <li><code>&lt;dl&gt;</code> Definition Lists</li>
        </ul>

      </div>
      <div class="hx-column is-2 is-offset-1">
        <p><strong>Unordered lists</strong></p>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <ul>
            <li>List item</li>
          </ul>
        </ul>

        <p><strong>Ordered lists</strong></p>
        <ol>
          <li>List item</li>
          <li>List item</li>
          <ol>
            <li>List item</li>
          </ol>
        </ol>
      </div>
      <div class="hx-column is-3">
        <p><strong>Definition list</strong></p>
        <dl>
          <dt>Time</dt>
          <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
          <dt>Space</dt>
          <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
          <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
        </dl>
      </div>
    </div>
    <div class="hx-columns">
      <div class="hx-column">
        <pre><code class="language-markup"><xmp>
          <p><strong>Unordered lists</strong></p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <ul>
              <li>List item</li>
            </ul>
          </ul>

          <p><strong>Ordered lists</strong></p>
          <ol>
            <li>List item</li>
            <li>List item</li>
            <ol>
              <li>List item</li>
            </ol>
          </ol>

          <p><strong>Definition list</strong></p>
          <dl>
            <dt>Time</dt>
            <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
            <dt>Space</dt>
            <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
            <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
          </dl>
        </xmp></code></pre>
      </div>
    </div>

    <hr>
    <div class="hx-columns">
      <div class="hx-column">
        <h3>Alignments</h3>

        <table class="hx-table is-striped">
          <thead>
            <tr>
              <th>Class</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>.is-text-nowrap</td>
              <td><div class="is-text-nowrap alignment-container">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</div></td>
            </tr>

            <tr>
              <td>.is-text-truncate</td>
              <td><div class="is-text-truncate alignment-container">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</div></td>
            </tr>
            <tr>
              <td>.is-text-center</td>
              <td class="is-text-center">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr>

    <div class="hx-columns">
      <div class="hx-column">
        <h3>Transformations</h3>

        <table class="hx-table is-striped">
          <thead>
          <tr>
            <th>Class</th>
            <th>Example</th>
          </tr>
          </thead>
          <tbody>

          <tr>
            <td>.is-text-lowercase</td>
            <td class="is-text-lowercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>

          <tr>
            <td>.is-text-uppercase</td>
            <td class="is-text-uppercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>

          <tr>
            <td>.is-text-capitalise</td>
            <td class="is-text-capitalise">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr>

    <div class="hx-columns">
      <div class="hx-column">
        <h3>Weight & Italics</h3>

        <table class="hx-table is-striped">
          <thead>
          <tr>
            <th>Class</th>
            <th>Example</th>
          </tr>
          </thead>
          <tbody>

          <tr>
            <td>.is-text-weight-normal</td>
            <td class="is-text-weight-normal">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>

          <tr>
            <td>.is-text-bold</td>
            <td class="is-text-bold">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>

          <tr>
            <td>.is-text-italic</td>
            <td class="is-text-italic">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr>

    <div class="hx-columns">
      <div class="hx-column">
        <h3>Colours</h3>
        <p>Easily colour text with text colour classes</p>

        <table class="hx-table is-striped">
          <thead>
          <tr>
            <th>Class</th>
            <th>Example</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>.is-white</td>
            <td class="is-white">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-black</td>
            <td class="is-black">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-light</td>
            <td class="is-light">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-dark</td>
            <td class="is-dark">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-primary</td>
            <td class="is-primary">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-info</td>
            <td class="is-info">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-warning</td>
            <td class="is-warning">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
          </tr>
          <tr>
            <td>.is-danger</td>
            <td class="is-danger">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>
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

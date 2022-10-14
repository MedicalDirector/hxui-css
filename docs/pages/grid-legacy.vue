<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <div class="pt-4 hx-flex items-center gap-4">
        <h1 class="hx-title inline-block">Grid</h1>
        <div class="hx-badge lg warning">
          <span>Legacy</span>
        </div>
      </div>
      <h2 class="hx-subtitle">Responsive layouts (based on css flexbox)</h2>
    </div>
    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'

export default {
  components: {
    ExpandingCodeExample,
  },
  data() {
    return {
      examples: [
        {
          title: "Let's start simple",
          code: `
  <p>To build a grid, just:
  <ol>
    <li>Add a <code>hx-columns</code> container</li>
    <li>Add as many <code>hx-column</code> elements as you want</li>
  </ol>
  <p>Each column will have an equal width, no matter the number of columns.</p>
  <br>
  <div class="hx-columns">
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">First column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">Second column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">Third column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">Fourth column</p>
    </div>
  </div>
            `,
        },
        {
          title: 'Column sizes',
          code: `
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
    <div class="hx-column has-text-centered is-three-quarters">
      <p class="hx-bg-primary pa-5">.is-three-quarters</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-two-thirds">
      <p class="hx-bg-primary pa-5">.is-two-thirds</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-half">
      <p class="hx-bg-primary pa-5">.is-half</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-one-third">
      <p class="hx-bg-primary pa-5">.is-one-third</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-one-quarter">
      <p class="hx-bg-primary pa-5">.is-one-quarter</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Auto</p>
    </div>
  </div>
            `,
        },
        {
          title: '12 columns',
          code: `
  <p>As the grid can be divided into <strong>12 columns</strong>, there are size classes for each division:</p>
  <ul>
    <li><code>is-1</code></li>
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
    <div class="hx-column has-text-centered is-2">
      <p class="hx-bg-primary pa-5">.is-2</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-3">
      <p class="hx-bg-primary pa-5">.is-3</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-4">
      <p class="hx-bg-primary pa-5">.is-4</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-5">
      <p class="hx-bg-primary pa-5">.is-5</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-6">
      <p class="hx-bg-primary pa-5">.is-6</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-7">
      <p class="hx-bg-primary pa-5">.is-7</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-8">
      <p class="hx-bg-primary pa-5">.is-8</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-9">
      <p class="hx-bg-primary pa-5">.is-9</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-10">
      <p class="hx-bg-primary pa-5">.is-10</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column has-text-centered is-11">
      <p class="hx-bg-primary pa-5">.is-11</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">1</p>
    </div>
  </div>
            `,
        },
        {
          title: 'Offsetting columns',
          code: `
  <p>While you can use empty columns (like <code>&lt;div class="hx-column"&gt;&lt;/div&gt;</code>)
    to create horizontal space around <code>.hx-column</code> elements, you can also use
    <strong>offset modifiers</strong> like <code>.is-offset-x</code>:</p>
  <br />
  <div class="hx-columns">
    <div class="hx-column is-half is-offset-one-quarter">
      <p class="hx-bg-primary pa-5">.is-half .is-offset-one-quarter</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column is-3 is-offset-7">
      <p class="hx-bg-primary pa-5">.is-3 .is-offset-7</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column is-5 is-offset-2">
      <p class="hx-bg-primary pa-5">.is-5 .is-offset-2</p>
    </div>
  </div>
  <div class="hx-columns">
    <div class="hx-column is-11 is-offset-1">
      <p class="hx-bg-primary pa-5">.is-11 .is-offset-1</p>
    </div>
  </div>
            `,
        },
        {
          title: 'Nesting columns',
          code: `
  <p>You can <strong>nest columns</strong> to have more flexibility in your design.
    You only need to follow this structure:</p>
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
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">1st level - First column</p>
      <div class="hx-columns">
        <div class="hx-column has-text-centered">
          <p class="hx-bg-warning pa-5">2nd level - Nested column</p>
        </div>
        <div class="hx-column has-text-centered">
          <p class="hx-bg-warning pa-5">2nd level - Nested column</p>
        </div>
      </div>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">1st level - Second column</p>
      <div class="hx-columns">
        <div class="hx-column has-text-centered">
          <p class="hx-bg-warning pa-5">2nd level</p>
        </div>
        <div class="hx-column has-text-centered">
          <div class="hx-columns">
            <div class="hx-column has-text-centered">
              <p class="hx-bg-danger pa-5">3rd level</p>
            </div>
            <div class="hx-column has-text-centered">
              <p class="hx-bg-danger pa-5">3rd level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Gapless columns',
          code: `
  <p>If you want to <strong>remove the space between the columns</strong>, add the
    <code>is-gapless</code> modifier on the columns container:</p>
  <div class="hx-columns is-gapless">
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">First column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-warning pa-5">Second column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-info pa-5">Third column</p>
    </div>
    <div class="hx-column has-text-centered">
      <p class="hx-bg-danger pa-5">Fourth column</p>
    </div>
  </div>
  <br />
  <p>You can even combine it with <strong>nested columns</strong>:</p>
  <div class="hx-columns is-gapless">
    <div class="hx-column has-text-centered">
      <p class="hx-bg-primary pa-5">1st level - First column</p>
      <div class="hx-columns is-gapless">
        <div class="hx-column has-text-centered">
          <p class="hx-bg-warning pa-5">2nd level - Nested column</p>
        </div>
        <div class="hx-column has-text-centered">
          <p class="hx-bg-danger pa-5">2nd level - Nested column</p>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Columns responsiveness',
          code: `
  <div class="hx-alert info" role="alert">
    <span class="hx-icon-container mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      Resize your browser and see when the columns are stacked and when they are horizontally distributed.
    </span>
  </div>
  
  <h5 class="mb-2">Mobile columns</h5>
  <p>By default, columns are only activated from <strong>tablet</strong> onwards. Columns will be stacked on top of each other when displayed on <strong>mobile</strong>. If you want columns to work on mobile, simply just add the <code>is-mobile</code> modifier on the columns container.</p>
  <div class="hx-columns is-mobile">
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">2</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">3</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">4</div>
      </div>
    </div>
  </div>
  
  <h5 class="mb-2">Desktop columns</h5>
  <p>If you only want columns on <strong>desktop</strong> upwards, just use the <code>is-desktop</code> modifier on the columns container.</p>
  <div class="hx-columns is-desktop">
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">2</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">3</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">4</div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Different column sizes per breakpoint',
          code: `
  <div class="hx-alert info" role="alert">
    <span class="hx-icon-container mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      Resize your browser and see when the columns are stacked and when they are horizontally distributed.
    </span>
  </div>
  
  <p>You can define a <strong>column size</strong> for <em>each</em> viewport size: <strong>mobile</strong>, <strong>tablet</strong>, and <strong>desktop</strong>.</p>
  <div class="hx-columns is-mobile">
    <div class="hx-column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">
          <code>is-three-quarters-mobile</code><br />
          <code>is-two-thirds-tablet</code><br />
          <code>is-half-desktop</code><br />
          <code>is-one-third-widescreen</code><br />
          <code>is-one-quarter-fullhd</code>
        </div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-card hx-bg-teal lighten-5">
        <div class="hx-card__content has-text-centered">1</div>
      </div>
    </div>
  </div>
            `,
        },
      ],
    }
  },
}
</script>

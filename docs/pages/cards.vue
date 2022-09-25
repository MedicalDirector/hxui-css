<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Cards</h1>
      <h2 class="hx-subtitle">
        An all-around flexible and composable component
      </h2>

      <hr />

      <p class="mb-4">
        The <strong>card</strong> component comprises several elements that you
        can mix and match:
      </p>
    </div>

    <api-table :data="data"></api-table>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :withContent="example.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data: () => ({
    data: [
      {
        class: 'hx-card',
        type: 'component',
        description: 'Main container element',
      },
      {
        class: 'hx-card-header',
        type: 'component',
        description: 'Horizontal bar with a shadow',
      },
      {
        class: 'hx-card-header-title',
        type: 'sub-component',
        description: 'Left-aligned bold text',
      },
      {
        class: 'hx-card-header-icon',
        type: 'sub-component',
        description: 'A placeholder for an icon',
      },
      {
        class: 'hx-card-image',
        type: 'component',
        description: 'A fullwidth container for a responsive image',
      },
      {
        class: 'hx-card-content',
        type: 'component',
        description: 'A container for the main content',
      },
      {
        class: 'hx-card-footer',
        type: 'component',
        description: 'A horizontal list of controls',
      },
      {
        class: 'hx-card-footer-item',
        type: 'sub-component',
        description: 'A repeatable list item',
      },
    ],
    examples: [
      {
        title: 'Default card',
        withContent: false,
        code: `<div class="hx-card-content grid gap-4 tablet:grid-cols-3">
  <div class="hidden tablet:!block"></div>
  <div class="hx-card">
    <div class="hx-card-content">
      <p class="b0 font-bold">Choi</p>
      <p class="b0">Ella</p>
      <br>
      <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
    </div>
  </div>
  <div class="hidden tablet:!block"></div>
</div>`,
      },
      {
        title: 'Border highlighted card',
        withContent: false,
        code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-2 gap-4">
  <div class="prose">
    <p>Add <code>.highlight</code> to the card for border highlighted card.</p>
    <p>You can also add modifiers for different colour border.</p>
    <ul>
      <li><code>.highlight-info</code></li>
      <li><code>.highlight-success</code> (default)</li>
      <li><code>.highlight-caution</code></li>
      <li><code>.highlight-warning</code></li>
      <li><code>.highlight-danger</code></li>
    </ul>
  </div>

  <div class="grid grid-cols-1 tablet:grid-cols-2 gap-4">
    <div class="hx-card highlight highlight-info">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>

    <div class="hx-card highlight highlight-success">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>

    <div class="hx-card highlight highlight-warning">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>

    <div class="hx-card highlight highlight-caution">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>

    <div class="hx-card highlight highlight-danger">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Border sizes',
        withContent: false,
        code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-2 gap-4">
  <div class="prose">
    <p>You can add modifiers for different border sizes.</p>
    <ul>
      <li><code>.highlight-sm</code> (default)</li>
      <li><code>.highlight-lg</code></li>
    </ul>
  </div>

  <div class="grid grid-cols-1 tablet:grid-cols-2 gap-4">
    <div class="hx-card highlight">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>

    <div class="hx-card highlight highlight-lg">
      <div class="hx-card-content">
        <p class="b0 font-bold">Choi</p>
        <p class="b0">Ella</p>
        <br>
        <p class="b2 text-subdued">11:09 PM - 1 Jan 2016</p>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Raised',
        withContent: false,
        code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-2 gap-4">
  <div class="prose">
    <p>Add <code>.raised</code> modifier class to add depth to cards.</p>
    <ul>
      <li><code>hovered</code></li>
      <li><code>focused</code></li>
      <li><code>active</code></li>
    </ul>
  </div>

  <div class="grid grid-cols-1 tablet:grid-cols-2 gap-4">
    <div class="hx-card raised hover">
      <div class="hx-card-content">
        <div class="">
          <div><strong>Choi</strong></div>
          <div>Ella</div>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
    </div>

    <div class="hx-card raised focus">
      <div class="hx-card-content">
        <div class="">
          <div><strong>Choi</strong></div>
          <div>Ella</div>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
    </div>

    <div class="hx-card raised active">
      <div class="hx-card-content">
        <div class="">
          <div><strong>Choi</strong></div>
          <div>Ella</div>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Using HxUI grid',
        withContent: false,
        code: `<div class="hx-card-content grid grid-cols-1 tablet:grid-cols-3 gap-4">
  <div class="prose">
    <p>You can create complex layouts using HxUI Grid and Form in Card.</p>
  </div>

  <div class="grid grid-cols-1 tablet:grid-cols-2 tablet:col-start-2 tablet:col-end-4 gap-4">
    <div class="hx-card highlight is-warning">
      <div class="hx-card-content">
        <p>
          <strong>09:37</strong> <a href="#">@Liz</a>: Please call James Meadows asap re: his test result. 2nd time he has called.
        </p>
        <div class="hx-input-control is-warning">
          <input class="hx-input" type="text" placeholder="Enter your notes">
          <label class="hx-label">Add Notes</label>
        </div>
        <button class="hx-button warning fullwidth">
          <span class="hx-icon-control">
            <i class="hx-icon icon-plus-empty"></i>
          </span>
          <span>Add</span>
        </button>
      </div>
    </div>

    <div class="hx-card highlight is-info not-scrollable">
      <div class="hx-card-content has-padding-small">
        <div class="hx-columns">
          <div class="hx-column is-2">
            <div class="hx-card-icon">
              <i class="hx-icon icon-calendar-outline is-large"></i>
            </div>
          </div>
          <div class="hx-column"><p>Lunch/catch-up on patient notes</p></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  }),
}
</script>

<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Dropdown</h1>
      <h2 class="hx-subtitle">
        Contextual overlay for displaying lists of links or custom components.
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

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
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data() {
    return {
      data: [
        {
          class: 'hx-dropdown',
          type: 'component',
          description: 'Container element (optional)',
        },
        {
          class: 'hx-dropdown-menu',
          type: 'component',
          description:
            'Main element. Requires adding element attribute of role="tooltip".',
        },
        {
          class: 'open',
          type: 'modifier',
          description: 'Makes menu visible',
        },
        {
          class: '{position}',
          type: 'modifier',
          description:
            'Direction of menu: .top-start, .top-middle, .top-end, .bottom-start, .bottom-middle, .bottom-end,',
        },
        {
          class: '{restriction}',
          type: 'modifier',
          description:
            'Restricts width and height: .limit-height, .limit-width',
        },
        {
          class: 'text-ellipsed',
          type: 'modifier',
          description: 'Ellipses overflowing item text',
        },
        {
          class: 'text-multiline',
          type: 'modifier',
          description: 'Allows overflowing of item text to multiple lines',
        },
        {
          class: 'hx-dropdown-item',
          type: 'component',
          description: 'Content element (class is optional, element is not)',
        },
        {
          class: 'active',
          type: 'modifier',
          description: 'Active state of item',
        },
        {
          class: 'hx-dropdown-heading',
          type: 'component',
          description: 'Heading for a group of items',
        },
        {
          class: 'hx-dropdown-divider',
          type: 'component',
          description: 'Divider for unrelated items',
        },
      ],
      examples: [
        {
          title: 'Basic',
          withContent: false,
          code: `<div class="hx-card-content h-15">
  <div class="grid phablet:grid-cols-2 gap-4">
    <div class="hx-flex justify-center">
      <div class="hx-dropdown">
        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open">
          <button class="hx-dropdown-item">
            Action
          </button>
          <button class="hx-dropdown-item">
            Another action
          </button>
          <button class="hx-dropdown-item">
            Something else here
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown">
        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open">
          <div class="hx-dropdown-header">
            Actions
          </div>
          <button class="hx-dropdown-item">
            <span class="container-start hx-icon-container">
              <i class="hx-icon icon-clock-outline"></i> 
            </span>
            <span>Book appointment</span>
          </button>
          <button class="hx-dropdown-item">
            <span class="container-start hx-icon-container">
              <i class="hx-icon icon-doctor-outline"></i>
            </span>
            <span>Start consult</span>
          </button>
          <hr class="hx-dropdown-divider" />
          <button class="hx-dropdown-item">
            <span class="container-start hx-icon-container">
              <i class="hx-icon icon-send-outline"></i>
            </span>
            <span>Send letter</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Position',
          withContent: false,
          code: `<div class="hx-card-content">
  <p class="hx-prose">
    Add any of the following modifiers to <code>.hx-dropdown-menu</code>.
  </p>

  <div class="grid phablet:grid-cols-2 laptop:grid-cols-3 gap-4">
    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-top:6rem;">
        <button class="hx-button">
          Dropdown button
        </button>

        <p class="hx-prose">
          <code>.top-start</code>
        </p>

        <div class="hx-dropdown-menu open top-start">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-top:6rem;">
        <button class="hx-button">
          Dropdown button
        </button>

        <p class="hx-prose">
          <code>.top-middle</code>
        </p>

        <div class="hx-dropdown-menu open top-middle">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-top:6rem;">
        <button class="hx-button">
          Dropdown button
        </button>

        <p class="hx-prose">
          <code>.top-end</code>
        </p>

        <div class="hx-dropdown-menu open top-end">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-bottom:6rem;">
        <p class="hx-prose">
          <code>.bottom-start</code>
        </p>

        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open bottom-start">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-bottom:6rem;">
        <p class="hx-prose">
          <code>.bottom-middle</code>
        </p>

        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open bottom-middle">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown" style="margin-bottom:6rem;">
        <p class="hx-prose">
          <code>.bottom-end</code>
        </p>

        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open bottom-end">
          <button class="hx-dropdown-item">
            <span>Action</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Another action</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Limited length',
          withContent: false,
          code: `<div class="hx-card-content h-30">
  <p class="hx-prose">
    Add modifier <code>.limit-width</code> or <code>.limit-height</code> to <code>.hx-dropdown-menu</code>.
  </p>

  <div class="grid phablet:grid-cols-2 gap-4">
    <div class="hx-flex justify-center">
      <div class="hx-dropdown">
        <button class="hx-button">
          Dropdown button
        </button>
        <div class="hx-dropdown-menu open limit-width limit-height text-ellipsed">
          <button class="hx-dropdown-item">
            <span>Action 1</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 2</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 3</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 4</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 5</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 6</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 7</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 8</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 9</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 10 is really reaally really really reaally really really reaally really long</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 11</span>
          </button>
          <button class="hx-dropdown-item">
            <span>Action 12</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Kitchen sink / Custom',
          withContent: false,
          code: `<div class="hx-card-content h-30">
  <p class="hx-prose">
    Add any component within. No padding, no margins.
    Styling should be controlled by the component.
  </p>

  <div class="grid phablet:grid-cols-2 gap-4">
    <div class="hx-flex justify-center">
      <div class="hx-dropdown">
        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open" style="width: 14rem;">
          <span class="hx-dropdown-header">
            Sort By
          </span>
          <button class="hx-dropdown-item active">
            <span class="container-start hx-icon-container">
              <i class="hx-icon icon-caret-up"></i>
            </span>
            <span>Ascending</span>
          </button>
          <button class="hx-dropdown-item">
            <span class="container-start hx-icon-container">
              <i class="hx-icon icon-caret-down"></i>
            </span>
            <span>Descending</span>
          </button>

          <hr class="hx-dropdown-divider" />

          <div class="hx-dropdown-header">
            Filter
            <button class="hx-button sm">
              <span class="h6 font-bold fg-subdued text-uppercase">
                Clear
              </span>
            </button>
          </div>

          <div class="hx-flex flex-col gap-4 p-4">
            <div class="hx-form-control fullwidth no-help">
              <label class="hx-label" for="from">From</label>
              <div class="hx-input-group">
                <input class="hx-input" id="from" type="text">
                <button class="hx-button flat icon">
                  <span class="hx-icon-control">
                    <i class="hx-icon icon-calendar-outline"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="hx-form-control fullwidth no-help">
              <label class="hx-label" for="to">To</label>
              <div class="hx-input-group">
                <input class="hx-input" id="to" type="text">
                <button class="hx-button flat icon">
                  <span class="hx-icon-control">
                    <i class="hx-icon icon-calendar-outline"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hx-flex justify-center">
      <div class="hx-dropdown">
        <button class="hx-button">
          Dropdown button
        </button>

        <div class="hx-dropdown-menu open p-4" style="width: 14rem;">
          <span class="h3">Custom Component</span>
          <span class="b1">Supports any type of content</span>
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
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.h-10 {
  height: 10rem;
}

.h-15 {
  height: 15rem;
}

.h-20 {
  height: 20rem;
}

.h-25 {
  height: 25rem;
}

.h-30 {
  height: 30rem;
}

.h-40 {
  height: 40rem;
}
</style>

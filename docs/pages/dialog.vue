<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Modal dialogs</h1>
      <h2 class="hx-subtitle">
        A classic modal dialog, in which you can include any content you want
      </h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

    <div class="flex gap-4 p-4 items-center justify-center">
      <button class="hx-button lg" @click="openDialogCentered()">
        <span>Open dialog</span>
      </button>
      <button class="hx-button lg" @click="openDialogCentered('sm')">
        <span>Open small dialog</span>
      </button>
      <button class="hx-button lg" @click="openDialogCentered('lg')">
        <span>Open large dialog</span>
      </button>
      <button class="hx-button lg" @click="openDialogAnchored()">
        <span>Open side dialog</span>
      </button>
    </div>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :className="ex.className"
        :styleName="ex.styleName"
      ></expanding-code-example>
    </div>

    <dialog class="hx-dialog side" ref="dialogSide">
      <header class="hx-dialog__header">
        <div class="hx-bar dialog">
          <h1>Notes</h1>

          <button class="hx-button flat" @click="closeDialogAnchored()">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
              <span class="sr-only">Close</span>
            </span>
          </button>
        </div>
        <div class="hx-bar sub">
          <button class="hx-button primary">
            <span class="hx-icon-container">
              <i class="hx-icon icon-plus-empty" aria-hidden="true"></i>
            </span>
            <span>New</span>
          </button>

          <div class="hx-divider mx-1"></div>

          <dl>
            <dt class="sr-only">Count</dt>
            <dd>
              <span class="b1 fg-info font-medium">2</span>
              <span class="b1"> items</span>
            </dd>
          </dl>

          <div class="hx-spacer"></div>

          <button class="hx-button">
            <span>All</span>
            <span class="hx-icon-container">
              <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </header>
    </dialog>

    <dialog
      class="hx-dialog"
      :class="{
        sm: dialogSize === 'sm',
        lg: dialogSize === 'lg',
      }"
      ref="dialogCenter"
    >
      <header class="hx-dialog__header">
        <div class="hx-bar dialog">
          <h1 class="h2">Title</h1>

          <button class="hx-button flat" @click="closeDialogCentered()">
            <span class="hx-icon-container">
              <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
              <span class="sr-only">Close</span>
            </span>
          </button>
        </div>
      </header>

      <section class="hx-dialog__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
      </section>

      <footer class="hx-dialog__footer">
        <div class="hx-flex justify-end gap-2 items-center p-4">
          <button class="hx-button" @click="closeDialogCentered()">
            <span>Cancel</span>
          </button>
          <button class="hx-button primary" @click="closeDialogCentered()">
            <span>Save changes</span>
          </button>
        </div>
      </footer>
    </dialog>
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
  methods: {
    openDialogAnchored() {
      this.$refs.dialogSide.showModal()
    },
    closeDialogAnchored() {
      this.$refs.dialogSide.close()
    },
    openDialogCentered(size = '') {
      this.dialogSize = size
      this.$refs.dialogCenter.showModal()
    },
    closeDialogCentered() {
      this.$refs.dialogCenter.close()
      this.dialogSize = ''
    },
  },
  data() {
    return {
      dialogSize: '',
      data: [
        {
          class: 'hx-dialog-container',
          type: 'component',
          description:
            'Container element (not requried if using `dialog` element)',
        },
        {
          class: 'open',
          type: 'modifier',
          description: 'Visible state (not requried if using `dialog` element)',
        },
        {
          class: 'hx-overlay',
          type: 'component',
          description:
            'Overlay element (not requried if using `dialog` element)',
        },
        {
          class: 'hx-dialog',
          type: 'component',
          description:
            'Main element. Requires role attribute of "dialog" if not using `dialog` element',
        },
        {
          class: 'side',
          type: 'modifier',
          description: 'Anchored to right side of screen',
        },
        {
          class: '{size}',
          type: 'modifier',
          description: 'Sizes: sm, md (default), lg',
        },
        {
          class: 'hx-dialog__header',
          type: 'sub-component',
          description: 'Dialog header container element',
        },
        {
          class: 'hx-dialog__content',
          type: 'sub-component',
          description: 'Dialog content container element',
        },
        {
          class: 'padded',
          type: 'modifier',
          description: 'Inclusion of padding for side-anchored dialog content',
        },
        {
          class: 'hx-dialog__footer',
          type: 'sub-component',
          description: 'Dialog content container element',
        },
      ],
      examples: [
        {
          title: 'Default',
          styleName: 'background-color: rgba(0, 0, 0, 0.5);',
          code: `<!-- ignore style overrides -->
<!-- add class 'sm' for small width and 'lg' for large width -->
<dialog class="hx-dialog" open style="position: relative;">
  <header class="hx-dialog__header">
    <div class="hx-bar dialog">
      <h1 class="h2">Title</h1>

      <button class="hx-button flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
          <span class="sr-only">Close</span>
        </span>
      </button>
    </div>
  </header>

  <section class="hx-dialog__content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
      accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
      nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
      odio, sollicitudin vel erat vel, interdum mattis neque.
    </p>
  </section>

  <footer class="hx-dialog__footer">
    <div class="hx-bar footer">
      <button class="hx-button">
        <span>Cancel</span>
      </button>
      <button class="hx-button primary">
        <span>Save changes</span>
      </button>
    </div>
  </footer>
</dialog>`,
        },
        {
          title: 'Side (anchored)',
          styleName: 'background-color: rgba(0, 0, 0, 0.5);',
          code: `<!-- ignore style overrides -->
<dialog class="hx-dialog side" open style="position: relative;">
  <header class="hx-dialog__header">
    <div class="hx-bar dialog">
      <h1 class="h2">Notes</h1>

      <button class="hx-button flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-close-empty" aria-hidden="true"></i>
          <span class="sr-only">Close</span>
        </span>
      </button>
    </div>
    <div class="hx-bar sub">
      <button class="hx-button primary">
        <span class="hx-icon-container">
          <i class="hx-icon icon-plus-empty" aria-hidden="true"></i>
        </span>
        <span>New</span>
      </button>

      <div class="hx-divider mx-1"></div>

      <dl>
        <dt class="sr-only">Count</dt>
        <dd>
          <span class="b1 fg-info font-medium">2</span>
          <span class="b1"> items</span>
        </dd>
      </dl>

      <div class="hx-spacer"></div>

      <button class="hx-button">
        <span>All</span>
        <span class="hx-icon-container">
          <i class="hx-icon icon-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </header>
</dialog>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.example {
  .hx-modal {
    color: black;
    .hx-modal-background {
      display: none;
    }
    .hx-modal-close {
      display: none;
    }
  }
}
</style>

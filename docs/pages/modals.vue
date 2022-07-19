<template>
  <div id="modals">
    <h1 class="hx-title">Modal Dialog</h1>
    <h2 class="hx-subtitle">
      A classic modal overlay, in which you can include any content you want
    </h2>

    <hr />

    <div class="has-text-centered my-5 py-5">
      <button class="hx-button is-large" @click="demoSimple = true">
        Open simple modal
      </button>
      <button class="hx-button is-large" @click="demoTrad = true">
        Open classic modal
      </button>
      <button class="hx-button is-large" @click="demoTradSmall = true">
        Open classic small modal
      </button>
      <button class="hx-button is-large" @click="demoTradLarge = true">
        Open classic large modal
      </button>
    </div>

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
    ></expanding-code-example>

    <div class="hx-modal" :class="{ 'is-active': demoSimple }">
      <div class="hx-modal-background"></div>
      <div class="hx-modal-content">
        <div class="hx-card">
          <div class="hx-card-content">
            <p>
              <strong>09:37</strong> <a href="#">@Liz</a>: Please call James
              Meadows asap re: his test result. 2nd time he has called.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius
              lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
              Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </p>
          </div>
        </div>
      </div>
      <button class="hx-modal-close" @click="demoSimple = false"></button>
    </div>

    <div
      class="hx-modal"
      :class="{
        'is-active': demoTrad || demoTradSmall || demoTradLarge,
        'is-small': demoTradSmall,
        'is-large': demoTradLarge,
      }"
    >
      <div class="hx-modal-background"></div>
      <div class="hx-modal-card">
        <header class="hx-modal-card-head">
          <h1 class="hx-modal-card-title">
            HxUI Modal Title {{ demoTradSmall ? 'Small' : '' }}
          </h1>

          <a
            class="hx-button is-round is-small is-white"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
          >
            <span class="hx-icon-control">
              <i class="hx-icon icon-close-empty is-large"></i>
            </span>
          </a>
        </header>
        <section class="hx-modal-card-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </section>
        <footer class="hx-modal-card-foot">
          <a
            class="hx-button"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
            >Cancel</a
          >
          <a
            class="hx-button is-primary"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
            >Save changes</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'

export default {
  data() {
    return {
      demoSimple: false,
      demoTrad: false,
      demoTradSmall: false,
      demoTradLarge: false,
      examples: [
        {
          title: 'Simple modal dialog',
          bg: 'hx-bg-light',
          code: `
<p>The modal structure is very simple:</p>
<ul>
  <li>
    <code>.hx-modal</code>: the main container
    <ul>
      <li>
        <code>.hx-modal-background</code>: a transparent overlay that can act as a click target to close the modal
      </li>
      <li>
        <code>.hx-modal-content</code>: a horizontally and verticaly centered container, with a maximum width of 640px, in which you can include <em>any</em> content
      </li>
      <li>
        <code>.hx-modal-close</code>: a simple cross located in the top right corner
      </li>
    </ul>
  </li>
</ul>
<p>See demo at the top of the page.</p>
<br />
<div class="hx-modal is-active mb-5 is-demo">
  <div class="hx-modal-background"></div>
  <div class="hx-modal-content">
    <div class="hx-card">
      <div class="hx-card-content">
        <p>
          <strong>09:37</strong> <a href="#">@Liz</a>: Please call James Meadows asap re: his test result. 2nd time he has called.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
      </div>
    </div>
  </div>
  <button class="hx-modal-close"></button>
</div>
          `,
        },
        {
          title: 'Modal card dialog',
          bg: 'hx-bg-light',
          code: `
<p>If you want a more classic modal, with a head, a body and a foot, use the modal-card.</p>
<p>The modal card dialog structure:</p>
<ul>
  <li>
    <code>.hx-modal</code>: the main container
    <ul>
      <li>
        <code>.hx-modal-background</code>: a transparent overlay that can act as a click target to close the modal
      </li>
      <li>
        <code>.hx-modal-card</code>: a modal card dialog container
      </li>
      <li>
        <code>.hx-modal-card-head</code>: a modal card dialog header
      </li>
      <li>
        <code>.hx-modal-card-content</code>: a horizontally and verticaly centered container, with a maximum width of 640px, in which you can include <em>any</em> content
      </li>
      <li>
        <code>.hx-modal-card-foot</code>: a modal card dialog footer
      </li>
      <li>
        <code>.delete</code>: a simple cross located in the top right corner
      </li>
    </ul>
  </li>
</ul>
<p>See demo at the top of the page.</p>
<br />
<div class="hx-modal is-active is-demo">
  <div class="hx-modal-card">
    <header class="hx-modal-card-head">
      <h1 class="hx-modal-card-title">HxUI Modal Title</h1>
      <a class="hx-button is-round is-small is-white">
            <span class="hx-icon-control">
              <i class="hx-icon icon-close-empty is-large"></i>
            </span>
       </a>
    </header>
    <section class="hx-modal-card-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    </section>
    <footer class="hx-modal-card-foot">
      <a class="hx-button">Cancel</a>
      <a class="hx-button is-primary">Save changes</a>
    </footer>
  </div>
</div>
<br />
<div class="hx-modal is-small is-active is-demo">
  <div class="hx-modal-card">
    <header class="hx-modal-card-head">
      <h1 class="hx-modal-card-title">HxUI Modal Title Small</h1>
      <a class="hx-button is-round is-small is-white">
            <span class="hx-icon-control">
              <i class="hx-icon icon-close-empty is-large"></i>
            </span>
       </a>
    </header>
    <section class="hx-modal-card-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    </section>
    <footer class="hx-modal-card-foot">
      <a class="hx-button">Cancel</a>
      <a class="hx-button is-primary">Save changes</a>
    </footer>
  </div>
</div>
<br />
<div class="hx-modal is-active is-demo is-large">
  <div class="hx-modal-card">
    <header class="hx-modal-card-head">
      <h1 class="hx-modal-card-title">HxUI Modal Title Large</h1>
      <a class="hx-button is-round is-small is-white">
            <span class="hx-icon-control">
              <i class="hx-icon icon-close-empty is-large"></i>
            </span>
       </a>
    </header>
    <section class="hx-modal-card-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    </section>
    <footer class="hx-modal-card-foot">
      <a class="hx-button">Cancel</a>
      <a class="hx-button is-primary">Save changes</a>
    </footer>
  </div>
</div>
          `,
        },
      ],
    }
  },
  components: {
    ExpandingCodeExample,
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

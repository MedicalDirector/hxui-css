<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Modal Dialog</h1>
      <h2 class="hx-subtitle">
        A classic modal overlay, in which you can include any content you want
      </h2>
    </div>

    <hr />

    <div class="flex gap-4 p-4 items-center justify-center">
      <button class="hx-button lg" @click="demoSimple = true">
        <span>Open simple modal</span>
      </button>
      <button class="hx-button lg" @click="demoTrad = true">
        <span>Open classic modal</span>
      </button>
      <button class="hx-button lg" @click="demoTradSmall = true">
        <span>Open classic small modal</span>
      </button>
      <button class="hx-button lg" @click="demoTradLarge = true">
        <span>Open classic large modal</span>
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
        :background="ex.bg"
        :withContent="ex.withContent"
      ></expanding-code-example>
    </div>

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

          <button
            class="hx-button flat icon"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
          >
            <span class="hx-icon-control">
              <i class="hx-icon icon-close-empty"></i>
            </span>
          </button>
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
          <button
            class="hx-button"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
          >
            <span>Cancel</span>
          </button>
          <button
            class="hx-button primary"
            @click="demoTrad = demoTradSmall = demoTradLarge = false"
          >
            <span>Save changes</span>
          </button>
        </footer>
      </div>
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

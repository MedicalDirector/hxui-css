<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Snackbars & toasts</h1>
    <h2 class="hx-subtitle">
      The snackbar/toast component is used to display a quick message to a user.
    </h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
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
          title: 'Position',
          code: `
  <p>The standard <code>.hx-snackbar</code> is useful for calling attention to some function that has just happened.</p>
  <hr />
  <p class="mt-5">By default, the snackbar will be displayed on the bottom center</p>
  <div class="hx-card pa-10" style="overflow: hidden">
    <h5 class="mt-0 mb-0 has-text-centered">Bottom center</h5>
    <p class="mb-10 pb-10 has-text-centered">Aligning snackbar to the bottom center of the page.</p>
    <div class="hx-snackbar is-absolute is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <p class="mt-10">To align the snackbar to the top, just include class <code>.is-top</code> to the <code>.hx-snackbar</code>.</p>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mt-10 mb-0 pt-10 has-text-centered">Top center</h5>
    <p class="has-text-centered">Aligning snackbar to the top center of the page.</p>
    <div class="hx-snackbar is-absolute is-top is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <p class="mt-10">To align the snackbar to the top right, just include class <code>.is-top</code> and <code>.is-right</code> to the <code>.hx-snackbar</code>.</p>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mb-0 mt-2 has-text-centered">Top right</h5>
    <p class="has-text-centered">Aligning snackbar to the top right of the page.</p>
    <div class="hx-snackbar is-absolute is-top is-right is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <p class="mt-10">To align the snackbar to the bottom left, just include class <code>.is-left</code> to the <code>.hx-snackbar</code>.</p>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mb-0 mt-2 has-text-centered">Bottom left</h5>
    <p class="has-text-centered">Aligning snackbar to the top center of the page.</p>
    <div class="hx-snackbar is-absolute is-left is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Contextual',
          code: `
  <p>The <code>.hx-snackbar</code> component comes in 4 variations, success, warning and error.</p>
  
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mt-0 mb-10 pb-10 has-text-centered">Default</h5>
    <div class="hx-snackbar is-absolute is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mt-0 mb-10 pb-10 has-text-centered">Success</h5>
    <div class="hx-snackbar is-absolute is-success is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mt-0 mb-10 pb-10 has-text-centered">Warning</h5>
    <div class="hx-snackbar is-absolute is-warning is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="hx-card mt-2 pa-10" style="overflow: hidden">
    <h5 class="mt-0 mb-10 pb-10 has-text-centered">Error</h5>
    <div class="hx-snackbar is-absolute is-error is-active">
      <div class="hx-snackbar-content">
        Hello, I'm a snackbar
        <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">
          <span class="hx-icon-control">
            <i class="hx-icon icon-close-empty is-medium"></i>
          </span>
        </button>
      </div>
    </div>
  </div>          `,
        },
      ],
    }
  },
}
</script>

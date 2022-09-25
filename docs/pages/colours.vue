<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Colours</h1>
      <h2 class="hx-subtitle">
        Out of the box you get access to all colors in our HxUI spec. These
        values can be used within your style sheets, your component files and on
        actual components via the color class system.
      </h2>

      <hr />

      <h2 class="h2">Background colours</h2>
      <p>
        Each color from the spec gets converted to a background variant for
        styling within your application through a class, eg.
        <code>.hx-bg-red</code>.
      </p>

      <p>Below is a list of the HxUI themed color palette.</p>
    </div>

    <div class="grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-6 gap-4">
      <div class="hx-card hx-bg-primary">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Primary</h3>
          <p class="b2">hx-bg-primary</p>
        </div>
      </div>

      <div class="hx-card hx-bg-grey">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Neutrals</h3>
          <p class="b2">hx-bg-grey</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-white">
            <p class="b0 text-dark">hx-bg-white</p>
          </div>
          <div class="px-4 py-2 hx-bg">
            <p class="b0 text-dark">hx-bg</p>
          </div>
          <div class="px-4 py-2 hx-bg-grey-lightest">
            <p class="b0 text-dark">hx-bg-grey-lightest</p>
          </div>
          <div class="px-4 py-2 hx-bg-grey-lighter">
            <p class="b0 text-dark">hx-bg-grey-lighter</p>
          </div>
          <div class="px-4 py-2 hx-bg-grey-light">
            <p class="b0">hx-bg-grey-light</p>
          </div>
          <div class="px-4 py-2 hx-bg-grey-dark">
            <p class="b0">hx-bg-grey-dark</p>
          </div>
          <div class="px-4 py-2 hx-bg-black">
            <p class="b0">hx-bg-black</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-success-pattern text-white">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Success</h3>
          <p class="b2">hx-bg-success-pattern</p>
        </div>
      </div>

      <div class="hx-card hx-bg-warning-pattern text-dark">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Warning</h3>
          <p class="b2">hx-bg-warning-pattern</p>
        </div>
      </div>

      <div class="hx-card hx-bg-danger-pattern text-white">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Danger</h3>
          <p class="b2">hx-bg-danger-pattern</p>
        </div>
      </div>

      <div class="hx-card hx-bg-info-pattern text-white">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Info</h3>
          <p class="b2">hx-bg-info-pattern</p>
        </div>
      </div>

      <div class="hx-card hx-bg-purple">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Purple</h3>
          <p class="b2">hx-bg-purple</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-purple lighten-5">
            <p class="b0">hx-bg-purple lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple lighten-4">
            <p class="b0">hx-bg-purple lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple lighten-3">
            <p class="b0">hx-bg-purple lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple lighten-2">
            <p class="b0">hx-bg-purple lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple lighten-1">
            <p class="b0">hx-bg-purple lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple darken-1">
            <p class="b0">hx-bg-purple darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple darken-2">
            <p class="b0">hx-bg-purple darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple darken-3">
            <p class="b0">hx-bg-purple darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-purple darken-4">
            <p class="b0">hx-bg-purple darken-4</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-red">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Red</h3>
          <p class="b2">hx-bg-red</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-red lighten-5">
            <p class="b0">hx-bg-red lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-red lighten-4">
            <p class="b0">hx-bg-red lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-red lighten-3">
            <p class="b0">hx-bg-red lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-red lighten-2">
            <p class="b0">hx-bg-red lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-red lighten-1">
            <p class="b0">hx-bg-red lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-red darken-1">
            <p class="b0">hx-bg-red darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-red darken-2">
            <p class="b0">hx-bg-red darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-red darken-3">
            <p class="b0">hx-bg-red darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-red darken-4">
            <p class="b0">hx-bg-red darken-4</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-blue">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Blue</h3>
          <p class="b2">hx-bg-blue</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-blue lighten-5">
            <p class="b0">hx-bg-blue lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue lighten-4">
            <p class="b0">hx-bg-blue lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue lighten-3">
            <p class="b0">hx-bg-blue lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue lighten-2">
            <p class="b0">hx-bg-blue lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue lighten-1">
            <p class="b0">hx-bg-blue lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue darken-1">
            <p class="b0">hx-bg-blue darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue darken-2">
            <p class="b0">hx-bg-blue darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue darken-3">
            <p class="b0">hx-bg-blue darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-blue darken-4">
            <p class="b0">hx-bg-blue darken-4</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-green">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Green</h3>
          <p class="b2">hx-bg-green</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-green lighten-5">
            <p class="b0">hx-bg-green lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-green lighten-4">
            <p class="b0">hx-bg-green lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-green lighten-3">
            <p class="b0">hx-bg-green lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-green lighten-2">
            <p class="b0">hx-bg-green lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-green lighten-1">
            <p class="b0">hx-bg-green lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-green darken-1">
            <p class="b0">hx-bg-green darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-green darken-2">
            <p class="b0">hx-bg-green darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-green darken-3">
            <p class="b0">hx-bg-green darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-green darken-4">
            <p class="b0">hx-bg-green darken-4</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-orange">
        <div class="hx-card-header text-dark flex-col items-start gap-0">
          <h3 class="h3">Orange</h3>
          <p class="b2">hx-bg-orange</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-orange lighten-5">
            <p class="b0">hx-bg-orange lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange lighten-4">
            <p class="b0">hx-bg-orange lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange lighten-3">
            <p class="b0">hx-bg-orange lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange lighten-2">
            <p class="b0">hx-bg-orange lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange lighten-1">
            <p class="b0">hx-bg-orange lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange darken-1">
            <p class="b0">hx-bg-orange darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange darken-2">
            <p class="b0">hx-bg-orange darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange darken-3">
            <p class="b0">hx-bg-orange darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-orange darken-4">
            <p class="b0">hx-bg-orange darken-4</p>
          </div>
        </div>
      </div>

      <div class="hx-card hx-bg-teal">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3">Teal</h3>
          <p class="b2">hx-bg-teal</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="px-4 py-2 hx-bg-teal lighten-5">
            <p class="b0">hx-bg-teal lighten-5</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal lighten-4">
            <p class="b0">hx-bg-teal lighten-4</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal lighten-3">
            <p class="b0">hx-bg-teal lighten-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal lighten-2">
            <p class="b0">hx-bg-teal lighten-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal lighten-1">
            <p class="b0">hx-bg-teal lighten-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal darken-1">
            <p class="b0">hx-bg-teal darken-1</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal darken-2">
            <p class="b0">hx-bg-teal darken-2</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal darken-3">
            <p class="b0">hx-bg-teal darken-3</p>
          </div>
          <div class="px-4 py-2 hx-bg-teal darken-4">
            <p class="b0">hx-bg-teal darken-4</p>
          </div>
        </div>
      </div>
    </div>

    <hr />

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

export default {
  components: {
    ExpandingCodeExample,
  },
  data: () => ({
    examples: [
      {
        title: 'Text colours',
        code: `<p class="prose">Easily colour text with text colour classes</p>
<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-black</code></td>
      <td class="is-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr class="hx-bg-black">
      <td><code>.is-white</code></td>
      <td class="is-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-light</code></td>
      <td class="is-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-lighter</code></td>
      <td class="is-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-lightest</code></td>
      <td class="is-lightest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-dark</code></td>
      <td class="is-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-primary</code></td>
      <td class="is-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-info</code></td>
      <td class="is-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-caution</code></td>
      <td class="is-caution">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-warning</code></td>
      <td class="is-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-danger</code></td>
      <td><span class="is-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></td>
    </tr>
  </tbody>
</table>`,
      },
    ],
  }),
}
</script>

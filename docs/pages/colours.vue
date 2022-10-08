<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Colours</h1>
      <p class="hx-subtitle">
        Out of the box you get access to all colors in our HxUI spec. These
        values can be used within your style sheets, your component files and on
        actual components via the color class system.
      </p>

      <hr />

      <h2 class="h2">Background colours</h2>
      <p>
        Each color from the spec gets converted to a background variant for
        styling within your application through a class, eg.
        <code>.bg-success</code>.
      </p>

      <p>Below is a list of the HxUI themed color palette.</p>
    </div>

    <div class="grid grid-cols-2 phablet:grid-cols-4 laptop:grid-cols-7 gap-4">
      <div class="hx-card bg-primary-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg-contrast">Primary</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-primary-emphasis px-4 py-2">
            <p class="b1 fg-contrast">bg-primary-emphasis</p>
          </div>
          <div class="bg-primary-subdued px-4 py-2">
            <p class="b1 fg">bg-primary-subdued</p>
          </div>
          <div class="bg-primary-muted px-4 py-2">
            <p class="b1 fg-primary">bg-primary-muted</p>
          </div>
          <div class="bg-primary-gradient px-4 py-2">
            <p class="b1 fg-contrast">bg-primary-gradient</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-background">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg">Neutrals</h3>
          <p class="b2">&nbsp;</p>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-background px-4 py-2">
            <p class="b1 fg">bg-background</p>
          </div>
          <div class="bg-neutral px-4 py-2">
            <p class="b1 fg">bg-neutral</p>
          </div>
          <div class="bg-neutral-subdued px-4 py-2">
            <p class="b1 fg">bg-neutral-subdued</p>
          </div>
          <div class="bg-neutral-muted px-4 py-2">
            <p class="b1 fg">bg-neutral-muted</p>
          </div>
          <div class="bg-background-backdrop px-4 py-2">
            <p class="b1 fg-contrast">bg-background-backdrop</p>
          </div>
          <div class="bg-neutral-emphasis px-4 py-2">
            <p class="b1 fg-contrast">bg-neutral-emphasis</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-success-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg-contrast">Success</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-success-emphasis px-4 py-2">
            <p class="b1 fg-contrast">bg-success-emphasis</p>
          </div>
          <div class="bg-success-subdued px-4 py-2">
            <p class="b1 fg">bg-success-subdued</p>
          </div>
          <div class="bg-success-muted px-4 py-2">
            <p class="b1 fg-success">bg-success-muted</p>
          </div>
          <div class="bg-success-pattern px-4 py-2">
            <p class="b1 fg-contrast">bg-success-pattern</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-danger-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg-contrast">Danger</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-danger-emphasis px-4 py-2">
            <p class="b1 fg-contrast">bg-danger-emphasis</p>
          </div>
          <div class="bg-danger-subdued px-4 py-2">
            <p class="b1 fg">bg-danger-subdued</p>
          </div>
          <div class="bg-danger-muted px-4 py-2">
            <p class="b1 fg-danger">bg-danger-muted</p>
          </div>
          <div class="bg-danger-pattern px-4 py-2">
            <p class="b1 fg-contrast">bg-danger-pattern</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-warning-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg">Warning</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-warning-emphasis px-4 py-2">
            <p class="b1 fg">bg-warning-emphasis</p>
          </div>
          <div class="bg-warning-subdued px-4 py-2">
            <p class="b1 fg">bg-warning-subdued</p>
          </div>
          <div class="bg-warning-muted px-4 py-2">
            <p class="b1 fg-warning">bg-warning-muted</p>
          </div>
          <div class="bg-warning-pattern px-4 py-2">
            <p class="b1 fg">bg-warning-pattern</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-info-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg-contrast">Info</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-info-emphasis px-4 py-2">
            <p class="b1 fg-contrast">bg-info-emphasis</p>
          </div>
          <div class="bg-info-subdued px-4 py-2">
            <p class="b1 fg">bg-info-subdued</p>
          </div>
          <div class="bg-info-muted px-4 py-2">
            <p class="b1 fg-info">bg-info-muted</p>
          </div>
          <div class="bg-info-pattern px-4 py-2">
            <p class="b1 fg-contrast">bg-info-pattern</p>
          </div>
        </div>
      </div>

      <div class="hx-card bg-caution-emphasis">
        <div class="hx-card-header flex-col items-start gap-0">
          <h3 class="h3 fg">Caution</h3>
        </div>
        <div class="hx-card-content p-0">
          <div class="bg-caution-emphasis px-4 py-2">
            <p class="b1 fg">bg-caution-emphasis</p>
          </div>
          <div class="bg-caution-subdued px-4 py-2">
            <p class="b1 fg">bg-caution-subdued</p>
          </div>
          <div class="bg-caution-muted px-4 py-2">
            <p class="b1 fg">bg-caution-muted</p>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO: decorative color palette -->

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
        code: `<p class="prose">
  Easily colour text with text colour classes.
</p>
<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.fg</code></td>
      <td class="fg">The default text style. For high priority content.</td>
    </tr>
    <tr>
      <td><code>.fg-subdued</code></td>
      <td class="fg-subdued">For medium priority content.</td>
    </tr>
    <tr>
      <td><code>.fg-muted</code></td>
      <td class="fg-muted">For low priority content.</td>
    </tr>
    <tr>
      <td><code>.fg-primary</code></td>
      <td class="fg-primary">An alternative for highlighting high priority content.</td>
    </tr>
    <tr>
      <td><code>.fg-success</code></td>
      <td class="fg-success">For highlighting affirmative content.</td>
    </tr>
    <tr>
      <td><code>.fg-danger</code></td>
      <td class="fg-danger">For highlighting destructive content.</td>
    </tr>
    <tr>
      <td><code>.fg-contrast</code></td>
      <td class="fg-contrast !bg-neutral-emphasis">Contrasting text style for use on non-neutral and colourised/emphasised backgrounds.</td>
    </tr>
    <tr>
      <td><code>.fg-info</code></td>
      <td class="fg-info !bg-info-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.fg-success</code></td>
      <td class="fg-success !bg-success-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.fg-danger</code></td>
      <td class="fg-danger !bg-danger-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.fg</code></td>
      <td class="fg !bg-caution-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.fg</code></td>
      <td class="fg !bg-warning-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>`,
      },
    ],
  }),
}
</script>

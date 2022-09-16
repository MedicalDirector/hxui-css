<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Responsiveness</h1>
      <h2 class="hx-subtitle">
        Helpers when dealing with responsive layouts/elements
      </h2>
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
        :withContent="ex.withContent || true"
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
          title: 'Breakpoints',
          code: `<p class="content">There are 5 breakpoints available in HxUI:</p>
<table class="hx-table matrix mb-0">
  <thead>
    <tr>
      <th>Mobile<br><small>Up to 768px</small></th>
      <th>Tablet<br><small>Between 769px and 1023px</small></th>
      <th>Desktop<br><small>Between 1024px and 1215px</small></th>
      <th>Widescreen<br><small>Between 1216px and 1407px</small></th>
      <th>Full HD<br><small>1408px and above</small></th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td class="t-vis"><div>Mobile</div></td>
    <td class="t-hid" colspan="4"><div>&nbsp;</div></td>
  </tr>
  <tr>
    <td class="t-hid"><div>&nbsp;</div></td>
    <td class="t-vis" colspan="4"><div>Tablet</div></td>
  </tr>
  <tr>
    <td class="t-hid" colspan="2"><div>&nbsp;</div></td>
    <td class="t-vis" colspan="3"><div>Desktop</div></td>
  </tr>
  <tr>
    <td class="t-hid" colspan="3"><div>&nbsp;</div></td>
    <td class="t-vis" colspan="2"><div>Widescreen</div></td>
  </tr>
  <tr>
    <td class="t-hid" colspan="4"><div>&nbsp;</div></td>
    <td class="t-vis"><div>FullHD</div></td>
  </tr>
</tbody>
</table>`,
        },
        {
          title: 'Visibility',
          code: `<div class="grid tablet:grid-cols-2">
  <div class="content">
    <h4 class="mt-0">Show</h4>
    <p>To show an element you can use <code>.is-{display}</code> class.<p>
    <p>Just replace <code>{display}</code> with one of the following display types:</p>
    <ul>
      <li>inline-block</li>
      <li>block</li>
      <li>flex</li>
      <li>inline-flex</li>
      <li>grid</li>
      <li>inline-grid</li>
      <li>contents</li>
      <li>inline</li>
    </ul>

    <p>To show an element by breakpoint type:<p>
    <ul>
      <li><code>.mobile:{display}</code></li>
      <li><code>.tablet:{display}</code></li>
      <li><code>.desktop:{display}</code></li>
      <li><code>.widescreen:{display}</code></li>
      <li><code>.fullhd:{display}</code></li>
    </ul>
  </div>

  <div class="content">
    <h4 class="mt-0">Hide</h4>
    <p>Use <code>.hidden</code> class to hide an element.<p>
    <p>To hide an element by breakpoint type:<p>
    <ul>
      <li><code>.tablet:hidden</code></li>
      <li><code>.desktop:hidden</code></li>
      <li><code>.widescreen:hidden</code></li>
    </ul>
    <p>
      These will be applied from the breakpoint <strong>and above</strong>.
    </p>

    <hr />

    <p>To hide any element anytime just use the <code>.hidden</code> class.<p>
    <p>To show an element by breakpoint type:<p>
    <ul>
      <li><code>.mobile:hidden</code></li>
      <li><code>.tablet:hidden-down</code></li>
      <li><code>.desktop:hidden-down</code></li>
      <li><code>.widescreen:hidden-down</code></li>
    </ul>
    <p>
      These will be applied from the breakpoint <strong>and below</strong>. Note the nuance for mobile.
    </p>
  </div>
</div>`,
        },
        {
          title: 'Visibility Example',
          code: `<p class="content">To test the examples below you can use the browsers resolution emulator or simply resize the browser.</p>

<div class="flex flex-col tablet:flex-row gap-4">
  <div class="hidden mobile:flex grow-1 hx-bg-primary p-4">
    <p class="text-center">Mobile</p>
  </div>
  <div class="hidden tablet:flex grow-1 hx-bg-primary p-4">
    <p class="text-center">Tablet</p>
  </div>
  <div class="hidden desktop:flex grow-1 hx-bg-primary p-4">
    <p class="text-center">Desktop</p>
  </div>
  <div class="hidden widescreen:flex grow-1 hx-bg-primary p-4">
    <p class="text-center">Widescreen</p>
  </div>
  <div class="hidden fullhd:flex grow-1 hx-bg-primary p-4">
    <p class="text-center">Full Hd</p>
  </div>
</div> `,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.elipsedText {
  width: 250px;
}

table.matrix > tbody > tr > td,
table.matrix > tbody > tr > th {
  background-color: transparent !important;
  border: none !important;
}

.t-hid > div {
  background-color: rgba(0, 0, 0, 0.03);
  padding: 1rem;
}

.t-vis > div {
  background-color: #41b987;
  color: #fff;
  padding: 1rem;
}
</style>

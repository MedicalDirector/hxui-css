<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Typography</h1>
      <h2 class="hx-subtitle">Typography appropriate for applications</h2>
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
          title: 'Application typography',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>.h1</code>
      </td>
      <td>
        <h1 class="h1">h1. Product heading</h1>
      </td>
    </tr>
    <tr>
      <td>
        <code>.h2</code>
      </td>
      <td>
        <h2 class="h2">h2. Product heading</h2>
      </td>
    </tr>
    <tr>
      <td>
        <code>.h3</code>
      </td>
      <td>
        <h3 class="h3">h3. Product heading</h3>
      </td>
    </tr>
    <tr>
      <td>
        <code>.h4</code>
      </td>
      <td>
        <h4 class="h4">h4. Product heading</h4>
      </td>
    </tr>
    <tr>
      <td>
        <code>.h5</code>
      </td>
      <td>
        <h5 class="h5">h5. Product heading</h5>
      </td>
    </tr>
    <tr>
      <td>
        <code>.h6</code>
      </td>
      <td>
        <h6 class="h6">h6. Product heading</h6>
      </td>
    </tr>
    <tr>
      <td>
        <code>.b0</code>
      </td>
      <td>
        <p class="b0">p. Product body</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>.b1</code>
      </td>
      <td>
        <p class="b1">p. Product body</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>.b2</code>
      </td>
      <td>
        <p class="b2">p. Product body</p>
      </td>
    </tr>
  </tbody>
</table>`,
        },
        //         {
        //           title: 'Heading examples - Headings in a form or panel',
        //           withContent: false,
        //           code: `<div class="hx-card__content grid phablet:grid-cols-4 gap-4">
        //   <div>
        //     <h3>New Recipe</h3>
        //     <div class="hx-form-control no-label">
        //       <label class="hx-label sr-only">Recipe Name</label>
        //       <input class="hx-input" required type="text">
        //       <span class="hx-help">Please enter the recipe name</span>
        //     </div>
        //   </div>
        //   <div class="hx-card phablet:col-start-2 phablet:col-end-5">
        //     <div class="hx-card__content grid gap-4">
        //       <div>
        //         <div class="hx-form-control fullwidth">
        //           <label class="hx-label" for="textarea-sample">
        //             Ingredients
        //           </label>
        //           <textarea
        //             class="hx-input ng-pristine ng-invalid"
        //             name="textarea-sample"
        //             required
        //           ></textarea>
        //           <span class="hx-help">
        //             Please enter the recipe ingredients
        //           </span>
        //         </div>
        //       </div>
        //       <div class="grid phablet:grid-cols-2 gap-4">
        //         <div class="hx-form-control fullwidth">
        //           <label class="hx-label">Qty</label>
        //           <input
        //             class="hx-input ng-untouched ng-pristine ng-valid"
        //             name="Qty"
        //             required
        //             type="text"
        //           />
        //         </div>
        //         <div class="hx-form-control fullwidth">
        //           <label class="hx-label">Rpts</label>
        //           <input
        //             class="hx-input ng-untouched ng-pristine ng-valid"
        //             name="Rpts"
        //             required
        //             type="text"
        //           />
        //         </div>
        //         <p class="phablet:col-start-1 phablet:col-end-3">
        //           See <a href="/panel-header/">Panel Header</a> and <a href="/panel/">Panel</a>
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // </div>`,
        //         },
      ],
    }
  },
}
</script>

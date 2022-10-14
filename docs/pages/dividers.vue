<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Dividers</h1>
      <h2 class="hx-subtitle">
        These dividers are useful to divide content, indicating what is related
        or not.
      </h2>
    </div>

    <div class="grid gap-4 mt-4">
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
  data() {
    return {
      examples: [
        {
          title: 'Horizontal',
          withContent: false,
          code: `<div class="hx-card__content grid phablet:grid-cols-2  gap-4">
  <div class="hx-card">
    <div class="p-4">
      <span class="h3">Related Content</span>
    </div>
    <hr class="is-perforated" />
    <p class="p-4 hx-prose">
      <code>is-perforated</code> - to divide related content. Just like
      perforated paper.
    </p>
  </div>

  <div class="hx-card">
    <div class="p-4">
      <span class="h3">Non Related Content</span>
    </div>
    <hr class="is-divided" />
    <p class="p-4 hx-prose">
      <code>is-divided</code> - to divide none related content
    </p>
  </div>
</div>`,
        },
        {
          title: 'Vertical',
          withContent: false,
          code: `<div class="hx-card__content grid gap-4">
  <p>
    <code>hx-divider</code> - a vertical divider, fixed height of 20px.
    Also see the toolbar for examples.
  </p>

  <div class="grid phablet:grid-cols-2 gap-4">
    <div class="flex justify-center items-center gap-2">
      <button class="hx-button is-primary">Click me</button>
      <div class="hx-divider"></div>
      <div class="hx-input-control my-0">
        <div class="hx-checkbox-control my-0 flex items-center">
          <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option1">
          <label for="option1" class="hx-label">Option 1</label>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center items-center gap-2">
      <a href="">Link 1</a>
      <div class="hx-divider"></div>
      <a href="">Link 2</a>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

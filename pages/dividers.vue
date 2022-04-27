<template>
  <div id="spacing">
    <h1 class="hx-title">Dividers</h1>
    <h2 class="hx-subtitle">These dividers are useful to divide content, indicating what is related or not.</h2>

    <hr>

    <h4 class="mt-10">Horizontal dividers</h4>
    <ul>
      <li>
        <code>is-perforated</code> - to divide related content. Just like perforated paper.
      </li>
      <li>
          <code>is-divided</code> - to divide none related content
        </li>
    </ul>

    <h4 class="mt-10">Vertical divider</h4>
    <ul>
      <li>
        <code>hx-divider</code> - a vertical divider, fixed height of 20px. Also see the toolbar for examples.
      </li>
    </ul>

    <br>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
                            :title="example.title"
                            :code="example.code"
                            :example="example.code"
                            :visible="false"
    ></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
          title: 'Examples',
          code: `

<h5 class="mb-4">Horizontal divider examples</h5>
<div class="hx-columns">
  <div class="hx-column">
    <div class="hx-card">
        <div class="py-8 px-4">Content</div>
        <hr class="is-perforated" />
        <div class="py-4 px-4">Related Content</div>
    </div>
  </div>
   <div class="hx-column">
    <div class="hx-card">
        <div class="py-8 px-4">Content</div>
        <hr class="is-divided" />
        <div class="py-4 px-4">Non Related Content</div>
    </div>
  </div>
</div>

<h5 class="mb-4">Vertical divider examples</h5>

<div class="hx-columns">
  <div class="hx-column is-3">
    <button class="hx-button is-primary">Click me</button>
  </div>
  <div class="hx-column is-3 hx-flex-align-self-center">
    Hello
  </div>
  <div class="hx-divider"></div>
  <div class="hx-column">
    <div class="hx-input-control mt-2">
      <div class="hx-checkbox-control my-0">
        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option1">
        <label for="option1" class="hx-label">Option 1</label>
      </div>
    </div>
  </div>
</div>

<div class="hx-flex">
  <a href="">Link 1</a>
  <div class="hx-divider"></div>
  <a href="">Link 2</a>
</div>

          `
        }]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

<template>
  <div id="tooltips">
    <h1 class="hx-title">Avatars</h1>
    <h2 class="hx-subtitle">The avatar component is used to control the size and border radius of responsive images, typically used to show profile pictures.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
    ></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data: () => ({
    examples: [
      {
        title: 'Examples',
        code: `
<div class="hx-example has-text-centered">
  <p>Using images with default <code>.hx-avatar</code> class.</p>
  <div class="hx-avatar" style="background-image: url(static/assets/images/default-avatar-business-bear.png)"></div>
  <div class="hx-avatar" style="background-image: url(static/assets/images/0223.jpg)"></div>
  <div class="hx-avatar" style="background-image: url(static/assets/images/frenchie.jpg)"></div>

  <p class="mt-10">Using text.</p>
  <div class="hx-avatar hx-bg-white">JP</div>
  <div class="hx-avatar hx-bg-light">CB</div>
  <div class="hx-avatar hx-bg-black">J</div>

  <p class="mt-10">To use icon, just add <code>.has-icon</code> class.</p>
  <div class="hx-avatar hx-bg-danger has-icon">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar hx-bg-warning has-icon">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar hx-bg-success has-icon">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar hx-bg-info has-icon">
    <i class="hx-icon icon-carrot"></i>
  </div>

  <p class="mt-10">A tile variation is available for displaying an avatar without border radius. Just add class <code>is-tile</code></p>
  <div class="hx-example is-flex hx-flex-justify-center">
    <div class="hx-avatar mx-1 is-tile" style="background-image: url(static/assets/images/default-avatar-business-bear.png)"></div>
    <div class="hx-avatar mx-1 is-tile" style="background-image: url(static/assets/images/0223.jpg)"></div>
    <div class="hx-avatar mx-1 is-tile" style="background-image: url(static/assets/images/frenchie.jpg)"></div>
    <div class="hx-avatar mx-1 is-tile hx-bg-white">JP</div>
    <div class="hx-avatar mx-1 is-tile hx-bg-light">CB</div>
    <div class="hx-avatar mx-1 is-tile hx-bg-black">J</div>
    <div class="hx-avatar hx-bg-danger mx-1 is-tile has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar hx-bg-warning mx-1 is-tile has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar hx-bg-success mx-1 is-tile has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar hx-bg-info mx-1 is-tile has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>

  <p class="mt-10">There are 2 more sizes available. Adjust them with class <code>is-small</code> or <code>is-large</code>.</p>

  <p class="mb-2"><strong>Small</strong></p>
  <div class="hx-example is-flex hx-flex-justify-center">
    <div class="hx-avatar mx-1 is-small" style="background-image: url(static/assets/images/default-avatar-business-bear.png)"></div>
    <div class="hx-avatar mx-1 is-small" style="background-image: url(static/assets/images/0223.jpg)"></div>
    <div class="hx-avatar mx-1 is-small is-tile" style="background-image: url(static/assets/images/frenchie.jpg)"></div>
    <div class="hx-avatar mx-1 is-small hx-bg-white">JP</div>
    <div class="hx-avatar mx-1 is-small is-tile hx-bg-light">CB</div>
    <div class="hx-avatar mx-1 is-small hx-bg-black">J</div>
    <div class="hx-avatar mx-1 is-small hx-bg-danger has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar mx-1 is-small hx-bg-warning has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar mx-1 is-small is-tile hx-bg-success has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar mx-1 is-small hx-bg-info has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>

  <p class="mt-5 mb-2"><strong>Large</strong></p>
  <div class="hx-example mb-4 is-flex hx-flex-justify-center">
    <div class="hx-avatar mx-1 is-large" style="background-image: url(static/assets/images/default-avatar-business-bear.png)"></div>
    <div class="hx-avatar mx-1 is-large" style="background-image: url(static/assets/images/0223.jpg)"></div>
    <div class="hx-avatar mx-1 is-large" style="background-image: url(static/assets/images/frenchie.jpg)"></div>
    <div class="hx-avatar mx-1 is-large hx-bg-white">JP</div>
    <div class="hx-avatar mx-1 is-large hx-bg-light">CB</div>
    <div class="hx-avatar mx-1 is-large hx-bg-black">J</div>
    <div class="hx-avatar mx-1 is-large hx-bg-danger has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar mx-1 is-large hx-bg-warning has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar mx-1 is-large hx-bg-success has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar mx-1 is-large hx-bg-info has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>
</div>
        `
      }
    ]
  }),
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

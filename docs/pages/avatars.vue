<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data: () => ({
    data: [
      {
        class: 'hx-avatar',
        type: 'component',
        description: 'Container element',
      },
      {
        class: 'has-icon',
        type: 'modifier',
        description: 'For usage with icons',
      },
      {
        class: 'is-outlined',
        type: 'modifier',
        description: 'Colored border with transparent background',
      },
      {
        class: 'is-tile',
        type: 'modifier',
        description: 'Square',
      },
      {
        class: 'is-small',
        type: 'modifier',
        description: 'Small size',
      },
      {
        class: 'is-large',
        type: 'modifier',
        description: 'Large size',
      },
    ],
    examples: [
      {
        title: 'Basic avatar',
        code: `<div class="container">
    <div class="hx-avatar" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></div>
    <div class="hx-avatar" style="background-image: url(${require('~/assets/images/0223.jpg')})"></div>
    <div class="hx-avatar" style="background-image: url(${require('~/assets/images/frenchie.jpg')})"></div>
    <div class="hx-avatar hx-bg-white">JP</div>
    <div class="hx-avatar hx-bg-light">CB</div>
    <div class="hx-avatar hx-bg-black">J</div>
  </div>`,
      },
      {
        title: 'Icon avatar',
        code: `<div class="container">
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
  </div>`,
      },
      {
        title: 'Outlined avatar',
        code: `<div class="container">
    <div class="hx-avatar is-caution is-outlined is-text-black">J</div>
    <div class="hx-avatar is-outlined is-lighter">CB</div>
    <div class="hx-avatar is-primary is-outlined has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar is-danger is-outlined has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar is-warning is-outlined has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar is-caution is-outlined has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>`,
      },
      {
        title: 'Tiled avatar',
        code: `<div class="container">
    <div class="hx-avatar is-tile" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')}"></div>
    <div class="hx-avatar is-tile" style="background-image: url(${require('~/assets/images/0223.jpg')})"></div>
    <div class="hx-avatar is-tile" style="background-image: url(${require('~/assets/images/frenchie.jpg')})"></div>
    <div class="hx-avatar is-tile hx-bg-white">JP</div>
    <div class="hx-avatar is-tile hx-bg-light">CB</div>
    <div class="hx-avatar is-tile hx-bg-black">J</div>
    <div class="hx-avatar hx-bg-danger is-tile has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar hx-bg-warning is-tile has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar hx-bg-success is-tile has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar is-info is-tile is-outlined has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>`,
      },
      {
        title: 'Small avatar',
        code: `<div class="container">
    <div class="hx-avatar is-small" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></div>
    <div class="hx-avatar is-small" style="background-image: url(${require('~/assets/images/0223.jpg')})"></div>
    <div class="hx-avatar is-small is-tile" style="background-image: url(${require('~/assets/images/frenchie.jpg')})"></div>
    <div class="hx-avatar is-small hx-bg-white">JP</div>
    <div class="hx-avatar is-small is-tile hx-bg-light">CB</div>
    <div class="hx-avatar is-small hx-bg-black">J</div>
    <div class="hx-avatar is-small hx-bg-danger has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar is-small hx-bg-warning has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar is-small is-tile hx-bg-success has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar is-small is-info is-outlined has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>`,
      },
      {
        title: 'Large avatar',
        code: `<div class="container">
    <div class="hx-avatar is-large" style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"></div>
    <div class="hx-avatar is-large" style="background-image: url(${require('~/assets/images/0223.jpg')})"></div>
    <div class="hx-avatar is-large" style="background-image: url(${require('~/assets/images/frenchie.jpg')})"></div>
    <div class="hx-avatar is-large hx-bg-white">JP</div>
    <div class="hx-avatar is-large hx-bg-light">CB</div>
    <div class="hx-avatar is-large hx-bg-black">J</div>
    <div class="hx-avatar is-large hx-bg-danger has-icon">
      <i class="hx-icon icon-pulse"></i>
    </div>
    <div class="hx-avatar is-large hx-bg-warning has-icon">
      <i class="hx-icon icon-wine"></i>
    </div>
    <div class="hx-avatar is-large hx-bg-success has-icon">
      <i class="hx-icon icon-medications"></i>
    </div>
    <div class="hx-avatar is-large is-info is-outlined has-icon">
      <i class="hx-icon icon-carrot"></i>
    </div>
  </div>`,
      },
    ],
  }),
}
</script>

<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Avatars</h1>
    <h2 class="hx-subtitle">
      The avatar component is used to control the size and border radius of
      responsive images, typically used to show profile pictures.
    </h2>

    <hr />

    <api-table :data="data"></api-table>

    <p class="mt-6 mb-6">
      Refer to
      <router-link class="is-text-underline" :to="{ path: '/colours' }" exact
        >Colours</router-link
      >
      section to apply background and text colours.
    </p>

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
    ></expanding-code-example>
  </article>
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  div:not(:last-child) {
    margin-right: 4px;
  }
}
</style>

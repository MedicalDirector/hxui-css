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
      // {
      //   class: ',
      //   type: 'modifier',
      //   description: 'For usage with icons',
      // },
      // {
      //   class: 'outline',
      //   type: 'modifier',
      //   description: 'Colored border with transparent background',
      // },
      {
        class: 'tile',
        type: 'modifier',
        description: 'Square',
      },
      {
        class: 'sm',
        type: 'modifier',
        description: 'Small size',
      },
      {
        class: 'lg',
        type: 'modifier',
        description: 'Large size',
      },
    ],
    examples: [
      {
        title: 'Basic avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-avatar">
    <img 
      src="${require('~/assets/images/default-avatar-business-bear.png')}"
      alt="portrait of cartoon bear"
    />
  </div>
  <div class="hx-avatar">
    <img 
      src="${require('~/assets/images/0223.jpg')}"
      alt="portrait of person"
    />
  </div>
  <div class="hx-avatar">
    <img 
      src="${require('~/assets/images/frenchie.jpg')}"
      alt="portrait of dog"
    />
  </div>
  <div class="hx-avatar">JP</div>
</div>`,
      },
      {
        title: 'Icon avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-avatar danger">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar warning">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar success">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar info">
    <i class="hx-icon icon-carrot"></i>
  </div>
</div>`,
      },
      //       {
      //         title: 'Outlined avatar',
      //         withContent: false,
      //         code: `<div class="hx-card-content flex justify-center items-center gap-2">
      //   <div class="hx-avatar caution outline text-black">J</div>
      //   <div class="hx-avatar outline">CB</div>
      //   <div class="hx-avatar primary outline">
      //     <i class="hx-icon icon-pulse"></i>
      //   </div>
      //   <div class="hx-avatar danger outline">
      //     <i class="hx-icon icon-wine"></i>
      //   </div>
      //   <div class="hx-avatar warning outline">
      //     <i class="hx-icon icon-medications"></i>
      //   </div>
      //   <div class="hx-avatar caution outline">
      //     <i class="hx-icon icon-carrot"></i>
      //   </div>
      // </div>`,
      //       },
      {
        title: 'Flat avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-avatar flat caution outline text-black">J</div>
  <div class="hx-avatar flat outline">CB</div>
  <div class="hx-avatar flat primary outline">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar flat danger outline">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar flat warning outline">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar flat caution outline">
    <i class="hx-icon icon-carrot"></i>
  </div>
</div>`,
      },
      {
        title: 'Tiled avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')}">
  </div>
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/0223.jpg')})">
  </div>
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/frenchie.jpg')})">
  </div>
  <div class="hx-avatar tile hx-bg-white">JP</div>
  <div class="hx-avatar tile hx-bg-light">CB</div>
  <div class="hx-avatar tile hx-bg-black">J</div>
  <div class="hx-avatar hx-bg-danger tile">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar hx-bg-warning tile">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar hx-bg-success tile">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar is-info tile is-outline">
    <i class="hx-icon icon-carrot"></i>
  </div>
</div>`,
      },
      {
        title: 'Small avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div class="hx-avatar sm">
    <img 
      src="${require('~/assets/images/default-avatar-business-bear.png')}"
      alt="portrait of cartoon bear"
    />
  </div>
  <div class="hx-avatar sm">
    <img 
      src="${require('~/assets/images/0223.jpg')}"
      alt="portrait of person"
    />
  </div>
  <div class="hx-avatar sm">
    <img 
      src="${require('~/assets/images/frenchie.jpg')}"
      alt="portrait of dog"
    />
  </div>
  <div class="hx-avatar sm">JP</div>
  <div class="hx-avatar sm tile flat primary">CB</div>
  <div class="hx-avatar sm hx-bg-black">J</div>
  <div class="hx-avatar sm hx-bg-danger">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar sm hx-bg-warning">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar sm tile hx-bg-success">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar sm is-info is-outline">
    <i class="hx-icon icon-carrot"></i>
  </div>
</div>`,
      },
      {
        title: 'Large avatar',
        withContent: false,
        code: `<div class="hx-card-content flex justify-center items-center gap-2">
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})">
  </div>
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/0223.jpg')})">
  </div>
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/frenchie.jpg')})">
  </div>
  <div class="hx-avatar lg danger">
    <i class="hx-icon icon-pulse"></i>
  </div>
  <div class="hx-avatar lg warning">
    <i class="hx-icon icon-wine"></i>
  </div>
  <div class="hx-avatar lg success">
    <i class="hx-icon icon-medications"></i>
  </div>
  <div class="hx-avatar lg info outline">
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
    <div class="content">
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
    </div>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :background="example.bg"
        :withContent="example.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

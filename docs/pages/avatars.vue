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
        class: 'tile',
        type: 'modifier',
        description: 'Square',
      },
      {
        class: 'flat',
        type: 'modifier',
        description: 'Muted variant',
      },
      {
        class: '{size}',
        type: 'modifier',
        description: 'Sizes: sm, md (default), lg',
      },
    ],
    examples: [
      {
        title: 'Basic avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
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
  <div class="hx-avatar">
    <span>JP</span>
  </div>
</div>`,
      },
      {
        title: 'Icon avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
  <div class="hx-avatar danger">
    <span class="hx-icon-container">
      <i class="hx-icon icon-pulse" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar warning">
    <span class="hx-icon-container">
      <i class="hx-icon icon-wine" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar success">
    <span class="hx-icon-container">
      <i class="hx-icon icon-medications" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar info">
    <span class="hx-icon-container">
      <i class="hx-icon icon-carrot" aria-hidden="true"></i>
    </span>
  </div>
</div>`,
      },
      {
        title: 'Flat avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
  <div class="hx-avatar flat caution text-black">
    <span>J</span>
  </div>
  <div class="hx-avatar flat">
    <span>CB</span>
  </div>
  <div class="hx-avatar flat primary">
    <span class="hx-icon-container">
      <i class="hx-icon icon-pulse" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar flat danger">
    <span class="hx-icon-container">
      <i class="hx-icon icon-wine" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar flat warning">
    <span class="hx-icon-container">
      <i class="hx-icon icon-medications" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar flat caution">
    <span class="hx-icon-container">
      <i class="hx-icon icon-carrot" aria-hidden="true"></i>
    </span>
  </div>
</div>`,
      },
      {
        title: 'Tiled avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')}"
  ></div>
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/0223.jpg')})"
  ></div>
  <div
    class="hx-avatar tile"
    style="background-image: url(${require('~/assets/images/frenchie.jpg')})"
  ></div>
  <div class="hx-avatar tile hx-bg-white">JP</div>
  <div class="hx-avatar tile hx-bg-light">CB</div>
  <div class="hx-avatar tile hx-bg-black">J</div>
  <div class="hx-avatar hx-bg-danger tile">
    <span class="hx-icon-container">
      <i class="hx-icon icon-pulse" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar hx-bg-warning tile">
    <span class="hx-icon-container">
      <i class="hx-icon icon-wine" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar hx-bg-success tile">
    <span class="hx-icon-container">
      <i class="hx-icon icon-medications" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar is-info tile">
    <span class="hx-icon-container">
      <i class="hx-icon icon-carrot" aria-hidden="true"></i>
    </span>
  </div>
</div>`,
      },
      {
        title: 'Small avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
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
  <div class="hx-avatar sm">
    <span>JP</span>
  </div>
  <div class="hx-avatar sm tile flat primary">
    <span>CB</span>
  </div>
  <div class="hx-avatar sm hx-bg-black">
    <span>J</span>
  </div>
  <div class="hx-avatar sm hx-bg-danger">
    <span class="hx-icon-container">
      <i class="hx-icon icon-pulse" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar sm hx-bg-warning">
    <span class="hx-icon-container">
      <i class="hx-icon icon-wine" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar sm tile hx-bg-success">
    <span class="hx-icon-container">
      <i class="hx-icon icon-medications" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar sm is-info is-outline">
    <span class="hx-icon-container">
      <i class="hx-icon icon-carrot" aria-hidden="true"></i>
    </span>
  </div>
</div>`,
      },
      {
        title: 'Large avatar',
        withContent: false,
        code: `<div class="hx-card__content flex justify-center items-center gap-2">
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/default-avatar-business-bear.png')})"
  ></div>
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/0223.jpg')})"
  ></div>
  <div
    class="hx-avatar lg"
    style="background-image: url(${require('~/assets/images/frenchie.jpg')})"
  ></div>
  <div class="hx-avatar lg danger">
    <span class="hx-icon-container">
      <i class="hx-icon icon-pulse" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar lg warning">
    <span class="hx-icon-container">
      <i class="hx-icon icon-wine" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar lg success">
    <span class="hx-icon-container">
      <i class="hx-icon icon-medications" aria-hidden="true"></i>
    </span>
  </div>
  <div class="hx-avatar lg info outline">
    <span class="hx-icon-container">
      <i class="hx-icon icon-carrot" aria-hidden="true"></i>
    </span>
  </div>
</div>`,
      },
    ],
  }),
}
</script>

<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose">
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
        :className="example.bg"
        :withContent="example.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<template>
  <!-- <ul class="panel"> -->
  <li class="hx-nav-section">
    <button class="hx-nav-heading" @click="toggleItem">
      <span class="block">{{ title }}</span>
      <div class="hx-button icon flat">
        <span class="hx-icon-control">
          <i
            class="hx-icon"
            :class="{
              'icon-angle-down': show,
              'icon-angle-up': !show,
            }"
          ></i>
        </span>
      </div>
    </button>

    <ul
      class="hx-nav-items"
      ref="navs"
      :aria-expanded="show ? 'true' : 'false'"
    >
      <li class="hx-nav-item" v-for="item in items" v-bind:key="item.name">
        <router-link
          v-if="item.path"
          class="hx-nav-link"
          :to="{ path: item.path }"
          exact-active-class="is-active"
          exact
          @click.native="closeNav"
        >
          {{ item.name }}
        </router-link>
        <a
          class="hx-nav-link"
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noreferrer noopener"
        >
          {{ item.name }}</a
        >
      </li>
    </ul>
  </li>
  <!-- <div class="navs" :style="{ height: ht + 'px' }"> -->
  <!-- <div class="navs">

    </div> -->
  <!-- </ul> -->
</template>

<script>
export default {
  props: ['title', 'items'],
  data() {
    return {
      show: true,
      ht: 0,
    }
  },
  methods: {
    toggleItem() {
      this.show = !this.show
      // if (this.ht === 0) {
      //   this.getHeight()
      // } else {
      //   this.ht = 0
      // }
    },
    // getHeight() {
    //   this.ht = this.$refs.navs.clientHeight
    // },
    closeNav() {
      this.$emit('toggleNav')
    },
  },
  // mounted() {
  //   this.getHeight()
  // },
}
</script>

<style lang="scss">
// .navs {
//   // transition: 0.3s ease-in-out;
//   overflow: hidden;
//   box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
// }
</style>

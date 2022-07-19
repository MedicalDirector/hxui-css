<template>
  <div class="panel">
    <div class="hx-header hx-flex py-2 has-pointer" @click="toggleItem">
      <span class="hx-flex-1 py-2">{{ title }}</span>
      <span class="hx-icon-control py-1">
        <i
          class="hx-icon is-small my-0"
          :class="{ 'icon-angle-down': show, 'icon-angle-up': !show }"
        ></i>
      </span>
    </div>
    <div class="navs" :style="{ height: ht + 'px' }">
      <ul class="hx-nav hx-nav-vertical py-4" ref="navs">
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
          >
            {{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
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
      if (this.ht === 0) {
        this.getHeight()
      } else {
        this.ht = 0
      }
    },
    getHeight() {
      this.ht = this.$refs.navs.clientHeight
    },
    closeNav() {
      this.$emit('toggleNav')
    },
  },
  mounted() {
    this.getHeight()
  },
}
</script>

<style lang="scss">
.navs {
  transition: 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
}
</style>

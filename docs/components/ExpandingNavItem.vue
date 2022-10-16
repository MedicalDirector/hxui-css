<template>
  <li class="hx-nav-section">
    <button
      class="hx-nav-heading"
      @click="toggleItem"
      :aria-expanded="`${show}`"
    >
      <span>{{ title }}</span>
      <div class="hx-button icon flat">
        <span class="hx-icon-container">
          <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
        </span>
        <span class="sr-only">{{ show ? 'Close' : 'Show' }}</span>
      </div>
    </button>

    <ul
      class="hx-nav-list with-inert"
      ref="navs"
      :aria-expanded="show ? 'true' : 'false'"
      :inert="!show"
    >
      <li v-for="item in items" v-bind:key="item.name">
        <router-link
          v-if="item.path"
          class="hx-nav-link"
          :to="{ path: item.path }"
          exact-active-class="active"
          @click.native="closeNav"
        >
          <span class="inline-flex grow-1">{{ item.name }}</span>
          <span
            v-if="item.isLegacy"
            class="hx-badge sm warning"
            style="width: unset"
          >
            <span>Legacy</span>
          </span>
        </router-link>
        <a
          class="hx-nav-link"
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noreferrer noopener"
          @click="closeNav"
        >
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['title', 'items'],
  emits: ['close-nav'],
  data() {
    return {
      show: true,
    }
  },
  methods: {
    toggleItem() {
      this.show = !this.show
    },
    closeNav() {
      this.$emit('close-nav')
    },
  },
}
</script>

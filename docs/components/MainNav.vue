<template>
  <div
    class="hx-drawer bg-primary-gradient p-3 phablet:p-0"
    :class="{ mini: isMini }"
  >
    <div class="hx-nav-brand phablet:pb-4">
      <span class="hx-icon-container">
        <svg class="hxui-logo">
          <use xlink:href="~/assets/images/hxui.svg#hxui"></use>
        </svg>
      </span>
    </div>
    <hr class="mobile:hidden mt-0 mb-4" />
    <ul class="hx-nav">
      <li v-for="item in mainNavItems" v-bind:key="item.name">
        <a
          class="hx-nav-link"
          :href="item.link"
          :class="{
            active: item.link === 'https://hxui.io',
            disabled: item.status === 'disabled',
          }"
        >
          <span class="hx-icon-control">
            <i class="hx-icon" :class="item.icon"></i>
          </span>
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>

    <div class="hidden phablet:block hx-spacer"></div>

    <ul class="hx-nav phablet:pb-4" :class="{ mini: isMini }">
      <li>
        <a
          class="hx-nav-link"
          href="https://github.com/MedicalDirector/hxui-css/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="hx-icon-control">
            <i class="hx-icon icon-chat-bubble"></i>
          </span>
          <span>Feedback</span>
        </a>
      </li>

      <li class="hidden phablet:contents">
        <button class="hx-nav-link" @click="toggleNav">
          <span class="hx-icon-control">
            <i
              class="hx-icon"
              :class="{
                'icon-angle-right': isMini,
                'icon-angle-left': !isMini,
              }"
            ></i>
          </span>
          <span v-if="isMini">Expand</span>
          <span v-else>Collapse</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMini: true,
      isDetached: false,
      mainNavItems: [
        {
          name: 'HTML & CSS',
          link: 'https://hxui.io',
          icon: 'icon-html-css',
          status: 'active',
        },
        {
          name: 'Angular',
          link: 'https://angular.hxui.io',
          icon: 'icon-angular',
          status: 'active',
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.isMini = !this.isMini
    },
  },
}
</script>

<style lang="scss" scoped>
.hxui-logo {
  max-height: 2rem;
  max-width: 2rem;
  fill: var(--color-foreground-contrast);
}
</style>

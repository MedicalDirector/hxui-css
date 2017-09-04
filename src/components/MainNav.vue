<template>
  <aside class="hx-sidebar has-blue-gradient" :class="{ 'is-minified': isMini }" @click="toggleNav">
    <ul class="hx-nav hx-nav-vertical hx-flex-auto">
      <li class="hx-nav-item hx-nav-brand">
        <svg class="hxui-logo is-white">
          <use xlink:href="../../static/assets/images/hxui.svg#hxui"></use>
        </svg>
      </li>
      <li class="hx-nav-item" v-for="item in mainNavItems">
        <a class="hx-nav-link" :href="item.link" :class="{ 'is-active': item.link === 'http://gethxui.com', 'is-disabled' : item.status === 'disabled' }"><i class="icon" :class="item.icon"></i> <span>{{ item.name }}</span></a>
      </li>
    </ul>
    <ul class="hx-nav hx-nav-vertical is-bottom">
      <li class="hx-nav-item">
        <a class="hx-nav-link is-disabled" href=""><i class="icon icon-chat-bubble"></i>  <span>Feedback</span></a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      isMini: true,
      mainNavItems: [
        {
          name: 'HTML & CSS',
          link: 'http://gethxui.com',
          icon: 'icon-html-css',
          status: 'active'
        },
        {
          name: 'Angular',
          link: 'http://angular.gethxui.com',
          icon: 'icon-angular',
          status: 'active'
        },
        {
          name: 'ReactJS',
          link: 'http://react.gethxui.com',
          icon: 'icon-react',
          status: 'disabled'
        },
        {
          name: 'VueJS',
          link: 'http://vue.gethxui.com',
          icon: 'icon-vue',
          status: 'disabled'
        }
      ]
    }
  },
  methods: {
    toggleNav () {
      this.isMini = !this.isMini
    }
  }
}
</script>

<style lang="scss" scoped>
.hxui-logo {
  &.is-white {
    fill: white;
  }
}
</style>

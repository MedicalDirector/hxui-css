<template>
  <div class="contents">
    <div
      class="hx-drawer"
      :class="{
        collapsed: !isOpen,
        detached: isDetachable,
      }"
    >
      <button class="hx-nav-toggle" @click="toggleNav()">
        <span class="hx-icon-control">
          <i
            class="hx-icon"
            :class="{
              'icon-angle-left': isOpen,
              'icon-angle-right': !isOpen,
            }"
          ></i>
        </span>
      </button>

      <div class="scroll-container" :inert="!isOpen">
        <nav class="hx-nav vertical">
          <expanding-nav-item
            v-for="(section, i) in sections"
            :key="i"
            :title="section.title"
            :items="section.items"
            @close-nav="closeNav()"
          >
          </expanding-nav-item>
        </nav>
      </div>
    </div>
    <button
      class="hx-overlay"
      v-if="isDetachable && isOpen"
      @click="toggleNav()"
      aria-label="collapse sidebar"
    ></button>
  </div>
</template>

<script>
import ExpandingNavItem from '@/components/ExpandingNavItem'

export default {
  data() {
    return {
      isOpen: true,
      isDetachable: false,
      windowWidth: undefined,
      sections: [
        {
          title: 'Getting started',
          items: [
            {
              name: 'Welcome',
              path: '/',
            },
            {
              name: 'Install guide',
              path: '/install',
            },
          ],
        },
        {
          title: 'Layouts',
          items: [
            {
              name: 'Containers',
              path: '/containers',
            },
            {
              name: 'Dividers',
              path: '/dividers',
            },
            {
              name: 'Elevation',
              path: '/elevation',
            },
            {
              name: 'Flexbox',
              path: '/flexbox',
            },
            {
              name: 'Grid',
              path: '/grid',
            },
            {
              name: 'Pages',
              path: '/pages',
            },
            {
              name: 'Sections',
              path: '/sections',
            },
            {
              name: 'Sidebar',
              path: '/sidebar',
            },
          ],
        },
        {
          title: 'Styles',
          items: [
            {
              name: 'Colours',
              path: 'colours',
            },
            {
              name: 'Typography',
              path: '/typography',
            },
          ],
        },
        {
          title: 'Helpers',
          items: [
            {
              name: 'Responsiveness',
              path: '/responsiveness',
            },
            {
              name: 'Scrollable',
              path: '/scrollable',
            },
            {
              name: 'Spacing',
              path: '/spacing',
            },
            {
              name: 'Text',
              path: '/text',
            },
            {
              name: 'Other',
              path: '/other',
            },
          ],
        },
        {
          title: 'Elements',
          items: [
            {
              name: 'Badges',
              path: '/badges',
            },
            {
              name: 'Buttons',
              path: '/buttons',
            },
            {
              name: 'Icons',
              path: '/icons',
            },
            {
              name: 'Tables',
              path: '/tables',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              name: 'Accordions',
              path: '/accordions',
            },
            {
              name: 'Alerts',
              path: '/alerts',
            },
            {
              name: 'Avatars',
              path: '/avatars',
            },
            {
              name: 'Breadcrumbs',
              path: '/breadcrumbs',
            },
            {
              name: 'Bulleted lists',
              path: '/bullets',
            },
            {
              name: 'Cards',
              path: '/cards',
            },
            {
              name: 'Dropdowns',
              path: '/dropdowns',
            },
            {
              name: 'Forms',
              path: '/forms',
            },
            {
              name: 'Lists',
              path: '/lists',
            },
            {
              name: 'Modals',
              path: '/modals',
            },
            {
              name: 'Metadata',
              path: '/meta-data',
            },
            {
              name: 'Nav',
              path: '/nav',
            },
            {
              name: 'Pagination',
              path: '/pagination',
            },
            {
              name: 'Progress timeline',
              path: '/progress-timeline',
            },
            {
              name: 'Snackbars & toasts',
              path: '/snackbars-toasts',
            },
            {
              name: 'Steppers',
              path: '/steppers',
            },
            {
              name: 'Tabs',
              path: '/tabs',
            },
            {
              name: 'Toggle',
              path: '/toggle',
            },
            {
              name: 'Toolbars',
              path: '/toolbars',
            },
            {
              name: 'Tooltips',
              path: '/tooltips',
            },
          ],
        },
        {
          title: 'Organisms',
          items: [{ name: 'Panel header', path: '/panel-header' }],
        },
        {
          title: 'Templates',
          items: [{ name: 'Panel', path: '/panel' }],
        },
        {
          title: 'Other',
          items: [
            { name: 'Downloads', path: '/downloads' },
            {
              name: 'Changelog',
              link: 'https://github.com/MedicalDirector/hxui-css/blob/master/CHANGELOG.md',
            },
          ],
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    closeNav() {
      if (this.isDetachable) {
        this.isOpen = false
      }
    },
    getDimensions() {
      this.windowWidth = document?.documentElement.clientWidth
      // 896px 56rem
      if (!!this.windowWidth && this.windowWidth < 896) {
        this.isDetachable = true
      } else {
        this.isDetachable = false
      }
    },
  },
  mounted() {
    this.getDimensions()
    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  components: {
    ExpandingNavItem,
  },
}
</script>

<style lang="scss" scoped>
.hx-nav-toggle {
  top: 52px;

  :where(.hx-drawer-container).bottom & {
    top: unset;
    bottom: -40px;
    right: 22px;
    transform: rotate(-90deg);
  }
}
</style>

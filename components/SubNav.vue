<template>
  <div class="hx-sidebar is-medium-width is-scrollable py-0">

    <expanding-nav-item v-for="(section, i) in sections" :key="i"
      :title="section.title"
      :items="section.items">
    </expanding-nav-item>

  </div>
</template>

<script>
import ExpandingNavItem from '@/components/ExpandingNavItem'

export default {
  data () {
    return {
      sections: [
        {
          title: 'Getting started',
          items: [
            {
              name: 'Welcome',
              path: '/'
            },
            {
              name: 'Install guide',
              path: '/install'
            }
          ]
        },
        {
          title: 'Page layouts',
          items: [
            {
              name: 'Containers',
              path: '/containers'
            },
            {
              name: 'Elevation',
              path: '/elevation'
            },
            {
              name: 'Grid',
              path: '/grid'
            },
            {
              name: 'Pages',
              path: '/pages'
            },
            {
              name: 'Sections',
              path: '/sections'
            },
            {
              name: 'Spacing',
              path: '/spacing'
            }
          ]
        },
        {
          title: 'Elements',
          items: [
            {
              name: 'Badges',
              path: '/badges'
            },
            {
              name: 'Buttons',
              path: '/buttons'
            },
            {
              name: 'Icons',
              path: '/icons'
            },
            {
              name: 'Tables',
              path: '/tables'
            },
            {
              name: 'Typography',
              path: '/typography'
            }
          ]
        },
        {
          title: 'Components',
          items: [
            {
              name: 'Alerts',
              path: '/alerts'
            },
            {
              name: 'Cards',
              path: '/cards'
            },
            {
              name: 'Dropdowns',
              path: '/dropdowns'
            },
            {
              name: 'Forms',
              path: '/forms'
            },
            {
              name: 'Lists & list group',
              path: '/lists'
            },
            {
              name: 'Modals',
              path: '/modals'
            },
            {
              name: 'Nav',
              path: '/nav'
            },
            {
              name: 'Pagination',
              path: '/pagination'
            },
            {
              name: 'Progress timeline',
              path: '/progress-timeline'
            },
            {
              name: 'Sidebar',
              path: '/sidebar'
            },
            {
              name: 'Snackbars & toasts',
              path: '/snackbars-toasts'
            },
            {
              name: 'Steppers',
              path: '/steppers'
            },
            {
              name: 'Tabs',
              path: '/tabs'
            },
            {
              name: 'Toggle',
              path: '/toggle'
            },
            {
              name: 'Tooltips',
              path: '/tooltips'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Downloads', path: '/downloads' }
          ]
        }
      ]
    }
  },
  components: {
    ExpandingNavItem
  }
}
</script>

<style lang="scss">
</style>

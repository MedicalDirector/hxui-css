<template>
  <div class="hx-sidebar is-medium-width is-active is-scrollable py-0 hx-bg-white">

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
              name: 'Dividers',
              path: '/dividers'
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
            }
          ]
        },
        {
          title: 'Styles',
          items: [
            {
              name: 'Colours',
              path: 'colours'
            },
            {
              name: 'Typography',
              path: '/typography'
            }
          ]
        },
        {
          title: 'Helpers',
          items: [
            {
              name: 'Responsiveness',
              path: '/responsiveness'
            },
            {
              name: 'Scrollable',
              path: '/scrollable'
            },
            {
              name: 'Spacing',
              path: '/spacing'
            },
            {
              name: 'Text',
              path: '/text'
            },
            {
              name: 'Other',
              path: '/other'
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
            }
          ]
        },
        {
          title: 'Components',
          items: [
            {
              name: 'Accordions',
              path: '/accordions'
            },
            {
              name: 'Alerts',
              path: '/alerts'
            },
            {
              name: 'Avatars',
              path: '/avatars'
            },
            {
              name: 'Breadcrumbs',
              path: '/breadcrumbs'
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
              name: 'Lists & List Group',
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
              name: 'Progress Timeline',
              path: '/progress-timeline'
            },
            {
              name: 'Sidebar / Drawer',
              path: '/sidebar'
            },
            {
              name: 'Snackbars & Toasts',
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
              name: 'Toolbars',
              path: '/toolbars'
            },
            {
              name: 'Tooltips',
              path: '/tooltips'
            }
          ]
        },
        {
          title: 'Organisms',
          items: [
            { name: 'Panel Header', path: '/panel-header' },
            { name: 'Actions Toolbar', path: '/actions-toolbar' }
          ]
        },
        {
          title: 'Templates',
          items: [
            { name: 'Panel', path: '/panel' }
          ]
        },
        {
          title: 'Other',
          items: [
            { name: 'Downloads', path: '/downloads' },
            { name: 'Change Log', link: 'https://bitbucket.org/md-design/gethxui/src/master/CHANGELOG.md' }
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

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
              path: './'
            },
            {
              name: 'Install guide',
              path: './install'
            },
            {
              name: 'Modifiers',
              path: './modifiers'
            }
          ]
        },
        {
          title: 'Page layouts',
          items: [
            {
              name: 'Containers',
              path: './containers'
            },
            {
              name: 'Grid',
              path: './grid'
            },
            {
              name: 'Pages',
              path: './pages'
            },
            {
              name: 'Sections',
              path: './sections'
            }
          ]
        },
        // {
        //   title: 'Content',
        //   items: [
            // {
            //   name: 'Code',
            //   path: './code'
            // },
            // {
            //   name: 'Typography',
            //   path: './typography'
            // }
        //   ]
        // },
        {
          title: 'Elements',
          items: [
            {
              name: 'Badges',
              path: './badges'
            },
            {
              name: 'Buttons',
              path: './buttons'
            },
            {
              name: 'Icons',
              path: './icons'
            },
            {
              name: 'Tables',
              path: './tables'
            },
            {
              name: 'Typography',
              path: './typography'
            }
          ]
        },
        {
          title: 'Components',
          items: [
            {
              name: 'Cards',
              path: './cards'
            },
            {
              name: 'Dropdowns',
              path: './dropdowns'
            },
            {
              name: 'Forms',
              path: './forms'
            },
            {
              name: 'Modals',
              path: './modals'
            },
            {
              name: 'Nav',
              path: './nav'
            },
            {
              name: 'Pagination',
              path: './pagination'
            },
            {
              name: 'Progress timeline',
              path: './progress-timeline'
            },
            {
              name: 'Sidebar',
              path: './sidebar'
            },
            {
              name: 'Tabs',
              path: './tabs'
            },
            {
              name: 'Toggle',
              path: './toggle'
            },
            {
              name: 'Tooltips',
              path: './tooltips'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Downloads', path: './downloads' }
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

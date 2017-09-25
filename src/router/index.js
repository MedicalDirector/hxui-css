import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Hello'
import Install from '@/components/pages/Install'
import Modifiers from '@/components/pages/Modifiers'
// page layouts
import Containers from '@/components/pages/Containers'
import Elevation from '@/components/pages/Elevation'
import Pages from '@/components/pages/Pages'
import Sections from '@/components/pages/Sections'
import Spacing from '@/components/pages/Spacing'
// content
import Tables from '@/components/pages/Tables'
import Typography from '@/components/pages/Typography'
// components
import Badges from '@/components/pages/Badges'
import Buttons from '@/components/pages/Buttons'
import Cards from '@/components/pages/Cards'
import Dropdowns from '@/components/pages/Dropdowns'
import Forms from '@/components/pages/Forms'
import Grid from '@/components/pages/Grid'
import Icons from '@/components/pages/Icons'
import Lists from '@/components/pages/Lists'
import Modals from '@/components/pages/Modals'
import Nav from '@/components/pages/Nav'
import Pagination from '@/components/pages/Pagination'
import ProgressTimeline from '@/components/pages/ProgressTimeline'
import Sidebar from '@/components/pages/Sidebar'
import Tabs from '@/components/pages/Tabs'
import Toggle from '@/components/pages/Toggle'
import Tooltips from '@/components/pages/Tooltips'
import Downloads from '@/components/pages/Downloads'
// Random
import Deploying from '@/components/pages/Deploying'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/install',
      name: 'Install',
      component: Install
    },
    {
      path: '/modifiers',
      name: 'Modifiers',
      component: Modifiers
    },
    {
      path: '/containers',
      name: 'Containers',
      component: Containers
    },
    {
      path: '/elevation',
      name: 'Elevation',
      component: Elevation
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/sections',
      name: 'Sections',
      component: Sections
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/badges',
      name: 'Badges',
      component: Badges
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/dropdowns',
      name: 'Dropdowns',
      component: Dropdowns
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/progress-timeline',
      name: 'ProgressTimeline',
      component: ProgressTimeline
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/spacing',
      name: 'Spacing',
      component: Spacing
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/toggle',
      name: 'Toggle',
      component: Toggle
    },
    {
      path: '/tooltips',
      name: 'Tooltips',
      component: Tooltips
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },

    {
      path: '/deploying',
      name: 'Deploying',
      component: Deploying
    }
  ]
})

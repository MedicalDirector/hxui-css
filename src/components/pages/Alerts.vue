<template>
  <div id="alerts">
    <h1 class="hx-title">Alerts</h1>
    <h2 class="hx-subtitle">The alert component is a small complete navigation component.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
          title: 'Contextual',
          code: `
<p>The <code>.hx-alert</code> component comes in 4 variations, success, info, warning and error. They can have icons assigned which can be changed and represent different actions.</p>

<div class="hx-alert">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-information"></i>
  </span>
  <span class="hx-flex-1">
    This is the default alert
  </span>
</div>
<div class="hx-alert is-success">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-check"></i>
  </span>
  <span class="hx-flex-1">
    This is a success alert
  </span>
</div>
<div class="hx-alert is-warning">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a warning alert
  </span>
</div>
<div class="hx-alert is-danger">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a danger alert
  </span>
</div>
          `
        },
        {
          title: 'Closable',
          code: `
<p>A close button can be added.</p>

<div class="hx-alert">
  <span class="hx-icon-control mr-2"><i class="hx-icon is-medium icon-information"></i></span>
  <span class="hx-flex-1">This is the default alert</span>
  <span class="hx-icon-control ml-2">
    <button class="hx-delete"></button>
  </span>
</div>
          `
        },
        {
          title: 'Custom icon / No icon',
          code: `
<p>You can easily assign a custom icon or remove it all together.</p>

<div class="hx-alert is-success">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-credit-card"></i>
  </span>
  <span class="hx-flex-1">
    This is a success alert with a custom icon.
  </span>
</div>
<div class="hx-alert">
  <span class="hx-flex-1">
    This is an error alert with no icon.
  </span>
</div>`
        }
//         {
//           title: 'Floating alert',
//           code: `
// <p>The floating alert component is used to display a quick message to a user.</p>
// <div class="hx-alert is-float" v-if="alert">
//   <span class="hx-icon-control mr-2">
//     <i class="hx-icon is-medium icon-check"></i>
//   </span>
//   <span class="hx-flex-1">
//     This is a default alert.
//   </span>
// </div>
//           `
//         }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

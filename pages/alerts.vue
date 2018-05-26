<template>
  <div id="alerts">
    <h1 class="hx-title">Alerts</h1>
    <h2 class="hx-subtitle">The alert component is a small complete navigation component.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
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
        },
        {
          title: 'Modifiers',
          code: `
<h5>Inverted</h5>
<p>Invert the alert style by using the <code>.is-inverse</code> modifier. </p>
<div class="hx-alert is-inverse">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-information"></i>
  </span>
  <span class="hx-flex-1">
    This is the default alert. <a href="">Click here</a> to URL.
  </span>
  <span class="hx-icon-control ml-2">
    <button class="hx-delete"></button>
  </span>
</div>
<div class="hx-alert is-success is-inverse">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-check"></i>
  </span>
  <span class="hx-flex-1">
    This is a success alert. <a href="">Click here</a> to URL.
  </span>
  <span class="hx-icon-control ml-2">
    <button class="hx-delete"></button>
  </span>
</div>
<div class="hx-alert is-warning is-inverse">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a warning alert. <a href="">Click here</a> to URL.
  </span>
  <span class="hx-icon-control ml-2">
    <button class="hx-delete"></button>
  </span>
</div>
<div class="hx-alert is-danger is-inverse">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a danger alert. <a href="">Click here</a> to URL.
  </span>
  <span class="hx-icon-control ml-2">
    <button class="hx-delete"></button>
  </span>
</div>

<p>&nbsp;</p>
<h5>Bordered</h5>
<p>Inverted styles are predominantly designed to work on white backgrounds. <br>
In some cases they will go on other background colours that make the inverted style hard to see. <br>
Use the  <code>.is-bordered</code> modifier to make it stand out. </p>

<div class="hx-alert is-inverse is-bordered">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-information"></i>
  </span>
  <span class="hx-flex-1">
    This is the default alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-success is-inverse is-bordered">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-check"></i>
  </span>
  <span class="hx-flex-1">
    This is a success alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-warning is-inverse is-bordered">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a warning alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-danger is-inverse is-bordered">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a danger alert. <a href="">Click here</a> to URL.
  </span>
</div>

<p>&nbsp;</p>
<h5>Sizes</h5>
<p>Add the  <code>.is-small</code> modifier to reduce padding and overall size of alerts. </p>

<div class="hx-alert is-inverse is-bordered is-small">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-information"></i>
  </span>
  <span class="hx-flex-1">
    This is the default alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-success is-inverse is-bordered is-small">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-check"></i>
  </span>
  <span class="hx-flex-1">
    This is a success alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-warning is-inverse is-bordered is-small">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a warning alert. <a href="">Click here</a> to URL.
  </span>
</div>
<div class="hx-alert is-danger is-inverse is-bordered is-small">
  <span class="hx-icon-control mr-2">
    <i class="hx-icon is-medium icon-exclamation"></i>
  </span>
  <span class="hx-flex-1">
    This is a danger alert. <a href="">Click here</a> to URL.
  </span>
</div>
          `
        }

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

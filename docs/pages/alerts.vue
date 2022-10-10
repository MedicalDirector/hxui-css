<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Alerts</h1>
      <h2 class="hx-subtitle">
        The alert component is a small complete navigation component.
      </h2>

      <hr />
    </div>
    <div class="grid gap-4">
      <expanding-code-example
        v-for="(example, i) in examples"
        :key="i"
        :title="example.title"
        :code="example.code"
        :example="example.code"
        :visible="false"
        :withContent="example.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'

export default {
  components: {
    ExpandingCodeExample,
  },
  data() {
    return {
      examples: [
        {
          title: 'Contextual',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>
      The <code>.hx-alert</code> component comes in 4 variations, success, info, warning and error.
      They can have icons assigned which can be changed and represent different actions.
    </p>
  </div>
  
  <div class="hx-alert mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert
    </span>
  </div>
  <div class="hx-alert is-info mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert
    </span>
  </div>
  <div class="hx-alert is-success mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-check"></i>
    </span>
    <span class="hx-flex-1">
      This is a success alert
    </span>
  </div>
  <div class="hx-alert is-warning mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a warning alert
    </span>
  </div>
  <div class="hx-alert is-danger mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a danger alert
    </span>
  </div>
            `,
        },
        {
          title: 'Closable',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>A close button can be added.</p>
  </div>
  
  <div class="hx-alert mb-0">
    <span class="hx-icon-control mr-2"><i class="hx-icon is-medium icon-information"></i></span>
    <span class="hx-flex-1">This is the default alert</span>
    <span class="hx-icon-control ml-2">
      <button class="hx-delete"></button>
    </span>
  </div>
</div>`,
        },
        {
          title: 'Custom icon / No icon',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>You can easily assign a custom icon or remove it all together.</p>
  </div>

  <div class="hx-alert is-success mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-credit-card"></i>
    </span>
    <span class="grow-1">
      This is a success alert with a custom icon.
    </span>
  </div>
  <div class="hx-alert mb-0">
    <span class="grow-1">
      This is an error alert with no icon.
    </span>
  </div>
</div>`,
        },
        {
          title: 'Inverted',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>Invert the alert style by using the <code>.is-inverse</code> modifier. </p>
  </div>

  <div class="hx-alert is-inverse mb-0">
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

  <div class="hx-alert is-info is-inverse mb-0">
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

  <div class="hx-alert is-success is-inverse mb-0">
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

  <div class="hx-alert is-warning is-inverse mb-0">
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

  <div class="hx-alert is-danger is-inverse mb-0">
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
</div>`,
        },
        {
          title: 'Bordered',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>Inverted styles are predominantly designed to work on white backgrounds.</p>
    <p>In some cases they will go on other background colours that make the inverted style hard to see.</p>
    <p>Use the <code>.is-bordered</code> modifier to make it stand out.</p>
  </div>

  <div class="hx-alert is-inverse is-bordered mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-info is-inverse is-bordered mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-success is-inverse is-bordered mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-check"></i>
    </span>
    <span class="hx-flex-1">
      This is a success alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-warning is-inverse is-bordered  mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a warning alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-danger is-inverse is-bordered  mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a danger alert. <a href="">Click here</a> to URL.
    </span>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4 grid-cols-1">
  <div class="hx-prose">
    <p>Add the <code>.is-small</code> modifier to reduce padding and overall size of alerts.</p>
  </div>
  
  <div class="hx-alert is-inverse is-bordered is-small  mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-info is-inverse is-bordered is-small  mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-information"></i>
    </span>
    <span class="hx-flex-1">
      This is the default alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-success is-inverse is-bordered is-small mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-check"></i>
    </span>
    <span class="hx-flex-1">
      This is a success alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-warning is-inverse is-bordered is-small mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a warning alert. <a href="">Click here</a> to URL.
    </span>
  </div>

  <div class="hx-alert is-danger is-inverse is-bordered is-small mb-0">
    <span class="hx-icon-control mr-2">
      <i class="hx-icon is-medium icon-exclamation"></i>
    </span>
    <span class="hx-flex-1">
      This is a danger alert. <a href="">Click here</a> to URL.
    </span>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

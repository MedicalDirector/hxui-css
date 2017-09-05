<template>
  <div id="buttons">
    <h1 class="hx-title">Buttons</h1>
    <h2 class="hx-subtitle">The classic button, in different colors, sizes, and states</h2>

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
          title: 'Button colours',
          code: `
<div class="has-text-centered">
  <a class="hx-button">Button</a>
  <a class="hx-button is-white">White</a>
  <a class="hx-button is-light">Light</a>
  <a class="hx-button is-dark">Dark</a>
  <a class="hx-button is-black">Black</a>
  <a class="hx-button is-link">Link</a>
  <a class="hx-button is-primary">Primary</a>
  <a class="hx-button is-info">Info</a>
  <a class="hx-button is-warning">Warning</a>
  <a class="hx-button is-danger">Danger</a>
</div>
          `
        },
        {
          title: 'Sizes',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-small">Small</a>
  <a class="hx-button">Normal</a>
  <a class="hx-button is-large">Large</a>
</div>
          `
        },
        {
          title: 'Outlined',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-outlined">Outlined</a>
  <a class="hx-button is-primary is-outlined">Outlined</a>
  <a class="hx-button is-info is-outlined">Outlined</a>
  <a class="hx-button is-danger is-outlined">Outlined</a>
</div>
          `
        },
        {
          title: 'States',
          code: `
<div class="has-text-centered">
  <p>Hover</p>
  <a class="hx-button is-hovered">Hover</a>
  <a class="hx-button is-primary is-hovered">Hover</a>
  <a class="hx-button is-info is-hovered">Hover</a>
  <a class="hx-button is-warning is-hovered">Hover</a>
  <a class="hx-button is-danger is-hovered">Hover</a>
  <p class="mt-5">Focus</p>
  <a class="hx-button is-focused">Focus</a>
  <a class="hx-button is-primary is-focused">Focus</a>
  <a class="hx-button is-info is-focused">Focus</a>
  <a class="hx-button is-warning is-focused">Focus</a>
  <a class="hx-button is-danger is-focused">Focus</a>
  <p class="mt-5">Active</p>
  <a class="hx-button is-active">Active</a>
  <a class="hx-button is-primary is-active">Active</a>
  <a class="hx-button is-info is-active">Active</a>
  <a class="hx-button is-warning is-active">Active</a>
  <a class="hx-button is-danger is-active">Active</a>
</div>
          `
        },
        {
          title: 'Loading',
          code: `
<div class="has-text-centered">
  <a class="hx-button is-loading">Loading</a>
  <a class="hx-button is-primary is-loading">Loading</a>
  <a class="hx-button is-info is-loading">Loading</a>
  <a class="hx-button is-warning is-loading">Loading</a>
  <a class="hx-button is-danger is-loading">Loading</a>
</div>
          `
        },
        {
          title: 'Disabled',
          code: `
<div class="has-text-centered">
  <a class="hx-button" disabled>Disabled</a>
  <a class="hx-button is-primary" disabled>Disabled</a>
  <a class="hx-button is-info" disabled>Disabled</a>
  <a class="hx-button is-warning" disabled>Disabled</a>
  <a class="hx-button is-danger" disabled>Disabled</a>
</div>
          `
        },
        {
          title: 'With icons',
          code: `
<div class="has-text-centered">
  <p>
    <a class="hx-button"><span class="hx-icon-control"><i class="icon icon-helix"></i></span> <span>Helix</span></a>
    <a class="hx-button"><span>Helix</span> <span class="hx-icon-control"><i class="icon icon-helix"></i></span></a>
    <a class="hx-button is-success"><span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span> <span>Add</span></a>
    <a class="hx-button is-info"><span>More</span> <span class="hx-icon-control"><i class="icon icon-more"></i></span></a>
    <a class="hx-button is-danger"><span class="hx-icon-control"><i class="icon icon-close-empty"></i></span> <span>Remove</span></a>
  </p>
  <p>
    <a class="hx-button is-primary is-outlined"><span class="hx-icon-control"><i class="icon icon-helix"></i></span></a>
    <a class="hx-button is-warning"><span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span></a>
    <a class="hx-button is-dark"><span class="hx-icon-control"><i class="icon icon-angle-left"></i></span></a>
    <a class="hx-button is-success"><span class="hx-icon-control"><i class="icon icon-angle-right"></i></span></a>
    <a class="hx-button is-danger"><span class="hx-icon-control"><i class="icon icon-heart"></i></span></a>
  </p>
  <p>
    <a class="hx-button is-small"><span>Small</span> <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span></a>
    <a class="hx-button"><span>Medium</span> <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span></a>
    <a class="hx-button is-large"><span>Large</span> <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span></a>
  </p>
</div>
          `
        },
        {
          title: 'Button groups',
          code: `
<p class="has-text-centered">If you want to group buttons together, use the <code>.is-grouped</code> modifier on the <code>.hx-field</code> container:</p>
<div class="hx-field is-grouped">
  <p class="hx-control">
    <a class="hx-button">
      Cancel
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-danger">
      Delete item
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-primary">
      Save changes
    </a>
  </p>
</div>
<hr />
<p class="mt-5 has-text-centered">You can center the button group or any grouped elements using <code>.is-grouped-centered</code> modifier.</p>
<div class="hx-field is-grouped is-grouped-centered">
  <p class="hx-control">
    <a class="hx-button">
      Cancel
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-danger">
      Delete item
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-primary">
      Save changes
    </a>
  </p>
</div>
<hr />
<p class="mt-5 has-text-centered">You can also right align the group using <code>.is-grouped-right</code> modifier.</p>
<div class="hx-field is-grouped is-grouped-right">
  <p class="hx-control">
    <a class="hx-button">
      Cancel
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-danger">
      Delete item
    </a>
  </p>
  <p class="hx-control">
    <a class="hx-button is-primary">
      Save changes
    </a>
  </p>
</div>
          `
        },
        {
          title: 'Button group addons',
          code: `
<p class="has-text-centered">This is a simple example for the Button Group Addons</p>
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button">
      Left
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      Middle
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      Right
    </a>
  </div>
</div>
<p class="mt-5 has-text-centered">You can change the button styls in button group addons using the button modifiers such as <code>.is-info</code> or <code>.is-primary</code>, etc.</p>
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button is-info">
      Left
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-info">
      Middle
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-info">
      Right
    </a>
  </div>
</div>
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button is-primary">
      Left
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-primary">
      Middle
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-primary">
      Right
    </a>
  </div>
</div>
          `
        },
        {
          title: 'Button group addons with icons',
          code: `
<p>You can add icons to the Button Group Addons in this structure,</p>
<ul>
  <li><code>.hx-field .has-addons</code></li>
  <ul>
    <li><code>.hx-control</code></li>
    <ul>
      <li><code>.hx-button</code></li>
      <ul>
        <li><code>.hx-icon-control</code></li>
        <ul>
          <li><code>.hx-icon icon-telephone is-small</code></li>
        </ul>
        <li><code>&lt;span&gt;Call&lt;/span&gt;</code></li>
      </ul>
    </ul>
  </ul>
</ul>
<div class="hx-field has-addons mt-5">
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-telephone is-small"></i></span>
      <span>Call</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-email is-small"></i></span>
      <span>Email</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-flag is-small"></i></span>
      <span>Flag</span>
    </a>
  </div>
</div>
<hr />
<p class="mt-5 has-text-centered">This works like Button Groups, you can center it using <code>.has-addons-centered</code> modifier.</p>
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-telephone is-small"></i></span>
      <span>Call</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-email is-small"></i></span>
      <span>Email</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-flag is-small"></i></span>
      <span>Flag</span>
    </a>
  </div>
</div>
<hr />
<p class="has-text-right">Or right aligh it using <code>.has-addons-right</code> modifier.</p>
<div class="hx-field has-addons has-addons-right">
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-telephone is-small"></i></span>
      <span>Call</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-email is-small"></i></span>
      <span>Email</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button">
      <span class="hx-icon-control"><i class="hx-icon icon-flag is-small"></i></span>
      <span>Flag</span>
    </a>
  </div>
</div>
<hr />
<p class="mt-5">Make a group of buttons stretch at equal sizes to span the entire width of its parent.</p>
<p>You can have full width addons using <code>.has-addons-fullwidth</code> modifier. And use <code>.is-fullwidth</code> modifier for buttons</p>
<div class="hx-field has-addons has-addons-fullwidth">
  <div class="hx-control">
    <a class="hx-button is-fullwidth">
      <span class="hx-icon-control"><i class="hx-icon icon-telephone is-small"></i></span>
      <span>Call</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-fullwidth">
      <span class="hx-icon-control"><i class="hx-icon icon-email is-small"></i></span>
      <span>Email</span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-fullwidth">
      <span class="hx-icon-control"><i class="hx-icon icon-flag is-small"></i></span>
      <span>Flag</span>
    </a>
  </div>
</div>
          `
        },
        {
          title: 'Icon based button group addons',
          code: `
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button is-primary">
      <span class="hx-icon-control"><i class="hx-icon icon-telephone"></i></span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-primary">
      <span class="hx-icon-control"><i class="hx-icon icon-email"></i></span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-primary">
      <span class="hx-icon-control"><i class="hx-icon icon-flag"></i></span>
    </a>
  </div>
</div>
<div class="hx-field has-addons has-addons-centered">
  <div class="hx-control">
    <a class="hx-button is-info">
      <span class="hx-icon-control"><i class="hx-icon icon-cloud-download"></i></span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-info">
      <span class="hx-icon-control"><i class="hx-icon icon-cloud-upload"></i></span>
    </a>
  </div>
  <div class="hx-control">
    <a class="hx-button is-info">
      <span class="hx-icon-control"><i class="hx-icon icon-printer"></i></span>
    </a>
  </div>
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

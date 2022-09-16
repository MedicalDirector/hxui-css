<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Tabs</h1>
    <h2 class="hx-subtitle">
      The tab component is used for hiding content behind a selectable item.
    </h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
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
          title: 'Default tab',
          code: `
  <p>The tab component only works in the HxUi-angular or HxUi-react web component libraries.</p>
  
  <br>
  <div class="hx-tab-container">
    <ul class="hx-nav hx-nav-tabs">
      <li class="hx-nav-item is-active">
        <a class="hx-nav-link is-active" href="javascript:void(0);">
          <span>Template</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Typescript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Javascript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Other</span>
        </a>
      </li>
    </ul>
    <div class="hx-tab-content">
          Tab content container
    </div>
  </div>
            `,
        },
        {
          title: 'Center aligned',
          code: `
  <p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>
  
  <br>
  <div class="hx-tab-container">
    <ul class="hx-nav hx-nav-tabs is-centered">
      <li class="hx-nav-item is-active">
        <a class="hx-nav-link is-active" href="javascript:void(0);">
          <span>Template</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Typescript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Javascript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Other</span>
        </a>
      </li>
    </ul>
    <div class="hx-tab-content">
          Tab content container
    </div>
  </div>
            `,
        },
        {
          title: 'Right aligned',
          code: `
  <p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>
  
  <br>
  <div class="hx-tab-container">
    <ul class="hx-nav hx-nav-tabs is-right">
      <li class="hx-nav-item is-active">
        <a class="hx-nav-link is-active" href="javascript:void(0);">
          <span>Template</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Typescript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Javascript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Other</span>
        </a>
      </li>
    </ul>
    <div class="hx-tab-content">
          Tab content container
    </div>
  </div>
            `,
        },
        {
          title: 'Justified aligned',
          code: `
  <p>To justify align the nav, simply add the modifier <code>.is-justified</code> to the <code>.hx-nav</code> base class.</p>
  
  <br>
  <div class="hx-tab-container">
    <ul class="hx-nav hx-nav-tabs is-justified">
      <li class="hx-nav-item is-active">
        <a class="hx-nav-link is-active" href="javascript:void(0);">
          <span>Template</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Typescript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Javascript</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <span>Other</span>
        </a>
      </li>
    </ul>
    <div class="hx-tab-content">
      Tab content container
    </div>
  </div>
            `,
        },
        {
          title: 'Info tabs',
          code: `
  <p>To justify align the nav, simply add the modifier <code>.is-justified</code> to the <code>.hx-nav</code> base class.</p>
  
  <br>
  <div class="hx-tab-container">
    <ul class="hx-nav hx-nav-tabs is-justified has-info">
      <li class="hx-nav-item is-active">
        <a class="hx-nav-link is-active" href="javascript:void(0);">
          <h6 class="mt-0 mb-1">Unbatched</strong></h6>
          <div class="hx-columns mt-0 pt-0">
            <div class="hx-column hx-flex-grow">
              <h6 class="mt-0 mb-0">75 <small>vouchers</small></h6>
              <h6 class="mt-0 mb-0">-300 <small>claims</small></h6>
            </div>
            <div class="hx-column has-text-right">
              <h5 class="mb-0">$3,766.00</h4>
            </div>
          </div>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <h6 class="mt-0 mb-1">Batched</strong></h6>
          <div class="hx-columns mt-0 pt-0">
            <div class="hx-column hx-flex-grow">
              <h6 class="mt-0 mb-0">6,899 <small>vouchers</small></h6>
              <h6 class="mt-0 mb-0">300 <small>claims</small></h6>
            </div>
            <div class="hx-column has-text-right">
              <h5 class="mb-0">$3,766.00</h5>
            </div>
          </div>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <h6 class="mt-0 mb-1">Awaiting response</strong></h6>
          <div class="hx-columns mt-0 pt-0">
            <div class="hx-column hx-flex-grow">
              <h6 class="mt-0 mb-0">75 <small>vouchers</small></h6>
              <h6 class="mt-0 mb-0">4 <small>claims</small></h6>
            </div>
            <div class="hx-column has-text-right">
              <h5 class="mb-0">$3,766.00</h5>
            </div>
          </div>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <h6 class="mt-0 mb-1">Exceptions</strong></h6>
          <div class="hx-columns mt-0 pt-0">
            <div class="hx-column hx-flex-grow">
              <h6 class="mt-0 mb-0">34 <small>vouchers</small></h6>
              <h6 class="mt-0 mb-0">4 <small>claims</small></h6>
            </div>
            <div class="hx-column has-text-right">
              <h5 class="mb-0">$3,766.00</h5>
            </div>
          </div>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" href="javascript:void(0);">
          <h6 class="mt-0 mb-1">Resolved</strong></h6>
          <div class="hx-columns mt-0 pt-0">
            <div class="hx-column hx-flex-grow">
              <h6 class="mt-0 mb-0">9,728 <small>vouchers</small></h6>
              <h6 class="mt-0 mb-0">4 <small>claims</small></h6>
            </div>
            <div class="hx-column has-text-right">
              <h5 class="mb-0">$3,766.00</h5>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="hx-tab-content">
      Tab content container
    </div>
  </div>
            `,
        },
      ],
    }
  },
}
</script>

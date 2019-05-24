<template>
  <div id="alerts">
    <h1 class="hx-title">Toolbars</h1>
    <h2 class="hx-subtitle">The toolbar component is a container for headers, titles, or actions.</h2>

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
            title: 'Basic',
            code: `
<p>The most common use case for this component, will be a single row toolbar with a title and/or actions.</p>

  <div class="hx-toolbar">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Contextual',
            code: `
<p>Toolbars can be themed using one of the existing contextual modifiers</p>

  <div class="hx-toolbar">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-primary">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-warning">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-danger">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-info">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Inverted',
            code: `
<p>Toolbar themes support the inverted modifier</p>

  <div class="hx-toolbar is-primary is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-warning is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-danger is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar is-info is-inverted">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
          `
          },
          {
            title: 'Examples',
            code: `
<p>Other examples of how the toolbar can be configured</p>

  <div class="hx-toolbar is-info">
   <button class="hx-button is-flat"><i class="hx-icon icon-navicon"></i></button>
    <div class="hx-spacer"></div>
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <br>
  <div class="hx-toolbar">
    <div class="hx-spacer"></div>
      <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
      <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
      <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
    <div class="hx-spacer"></div>
  </div>

<p>More complex examples of how the toolbar can be configured</p>

    <div class="hx-toolbar is-perforated">
      <button class="hx-button is-outlined mr-1">
        <div class="hx-icon-control"><i class="hx-icon icon-send"></i></div>
        <div>Resubmit</div>
      </button>
      <button class="hx-button is-outlined">
        <div class="hx-icon-control"><i class="hx-icon icon-printer-outline"></i></div>
        <div>Print</div>
      </button>
      <div class="hx-divider"></div>
      <div><span class="is-info is-text-weight-bolder">2</span> of <span class="is-info is-text-weight-bolder">4</span><span class="is-text-weight-light"> items selected</span></div>
      <div class="hx-spacer"></div>
      <button class="hx-button is-outlined is-primary">
        <span class="hx-icon-control">
          <i class="hx-icon icon-plus"></i>
        </span>
        <span>Task</span>
      </button>

    </div>

     <div class="hx-toolbar is-perforated">
      <div><span class="is-info is-text-weight-bolder">4</span><span class="is-text-weight-light"> items in the address book</span></div>
      <div class="hx-spacer"></div>
      <div class="hx-flex hx-flex-align-center">
        <i class="hx-icon icon-filter-outline mx-1"></i>
        <div class="hx-dropdown mx-1 expandedFilter" id="practitioner">
          <a class="hx-button hx-button-dropdown expandedFilter__button"  id="practitioner-trigger">
            <span class="is-text-weight-light">Practitioner:&nbsp;</span>
            <span class="is-text-weight-bolder is-text-ellipsed" title="Mr John GP">Mr John GP</span>
            <span  class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
          </a>
        </div>
        <div class="hx-dropdown ml-1 expandedFilter ng-star-inserted" id="status">
          <a class="hx-button hx-button-dropdown expandedFilter__button"  id="status-trigger">
            <span class="is-text-weight-light">Status:&nbsp;</span>
            <span class="is-text-weight-bolder is-text-ellipsed" title="New">New</span>
            <span class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
          </a>
        </div>
      </div>
      <div class="hx-divider"></div>
      <button class="hx-button is-outlined is-primary">
        <span class="hx-icon-control">
          <i class="hx-icon icon-plus"></i>
        </span>
        <span>Address</span>
      </button>

    </div>

    <div class="hx-toolbar is-perforated">
      <button class="hx-button is-outlined">
        <div class="hx-icon-control"><i class="hx-icon icon-printer-outline"></i></div>
        <div>Print</div>
      </button>
      <div class="hx-divider"></div>
      <div><span class="is-info is-text-weight-bolder">4</span> of <span class="is-info is-text-weight-bolder">4</span><span class="is-text-weight-light"> items selected</span></div>
      <div class="hx-spacer"></div>
      <div class="hx-flex hx-flex-align-center">
        <i class="hx-icon icon-filter-outline mx-1"></i>
        <div class="hx-dropdown mx-1 expandedFilter" id="practitioner">
          <a class="hx-button hx-button-dropdown expandedFilter__button"  id="practitioner-trigger">
            <span class="is-text-weight-light">Practitioner:&nbsp;</span>
            <span class="is-text-weight-bolder is-text-ellipsed" title="Mr John GP">Mr John GP</span>
            <span  class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
          </a>
        </div>
        <div class="hx-dropdown ml-1 expandedFilter ng-star-inserted" id="status">
          <a class="hx-button hx-button-dropdown expandedFilter__button"  id="status-trigger">
            <span class="is-text-weight-light">Status:&nbsp;</span>
            <span class="is-text-weight-bolder is-text-ellipsed" title="New">New</span>
            <span class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
          </a>
        </div>
        <div class="hx-input-group ml-4 ng-star-inserted" id="searchFilter">
          <i class="hx-icon icon-search mt-1"></i>
          <div class="hx-input-control my-0">
            <input class="hx-input" type="search" placeholder="Search patient by name">
            <label class="hx-label"></label>
            <div class="hx-help"></div>
          </div>
        </div>
      </div>

    </div>
          `
          },
          {
            title: 'Sizes',
            code: `
<p>Toolbar supports 3 sizes.</p>
<ul>
  <li><span class="hx-badge is-warning"><span class="hx-badge-content">Default</span></span> - no modifier</li>
  <li><code>.is-small</code> modifier</li>
  <li><code>.is-xsmall</code> modifier</li>
</ul>

 <div class="hx-toolbar is-info">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
   <div class="hx-toolbar is-info is-small  mt-2">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
  </div>
  <div class="hx-toolbar is-info is-xsmall mt-2">
    <span>Title</span>
    <div class="hx-spacer"></div>
    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
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

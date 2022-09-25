<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Toolbars</h1>
      <h2 class="hx-subtitle">
        The toolbar component is a container for headers, titles, or actions.
      </h2>
    </div>
    <hr />

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent"
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
        //         {
        //           title: 'Basic',
        //           code: `<p>
        //   The most common use case for this component, will be a single row toolbar with a title and/or actions.
        // </p>

        // <div class="hx-toolbar--modern">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-star"></i>
        //   </button>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-plus"></i>
        //   </button>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-more"></i>
        //   </button>
        // </div>`,
        //         },
        //         {
        //           title: 'Contextual',
        //           code: `<p>
        //   Toolbars can be themed using one of the existing contextual modifiers
        // </p>

        // <div class="hx-toolbar--modern">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-star"></i>
        //   </button>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-plus"></i>
        //   </button>
        //   <button class="hx-button flat">
        //     <i class="hx-icon icon-more"></i>
        //   </button>
        // </div>
        // <br>
        // <div class="hx-toolbar is-primary">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        // </div>
        // <br>
        // <div class="hx-toolbar is-warning">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        // </div>
        // <br>
        // <div class="hx-toolbar is-danger">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        // </div>
        // <br>
        // <div class="hx-toolbar is-info">
        //   <span>Title</span>
        //   <div class="hx-spacer"></div>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //   <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        // </div>`,
        //         },
        //         {
        //           title: 'Inverted',
        //           code: `
        //   <p>Toolbar themes support the inverted modifier</p>

        //     <div class="hx-toolbar is-primary is-inverted">
        //       <span>Title</span>
        //       <div class="hx-spacer"></div>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        //     </div>
        //     <br>
        //     <div class="hx-toolbar is-warning is-inverted">
        //       <span>Title</span>
        //       <div class="hx-spacer"></div>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        //     </div>
        //     <br>
        //     <div class="hx-toolbar is-danger is-inverted">
        //       <span>Title</span>
        //       <div class="hx-spacer"></div>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        //     </div>
        //     <br>
        //     <div class="hx-toolbar is-info is-inverted">
        //       <span>Title</span>
        //       <div class="hx-spacer"></div>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>
        //       <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
        //     </div>
        //             `,
        //         },
        {
          title: 'Examples',
          withContent: false,
          code: `<div class="hx-card-content grid gap-4">
  <div class="hx-toolbar--modern perforated-b">
    <button class="hx-button">
      <span class="hx-icon-control">
        <i class="hx-icon icon-send"></i>
      </span>
      <span>Resubmit</span>
    </button>

    <button class="hx-button">
      <span class="hx-icon-control">
        <i class="hx-icon icon-printer-outline"></i>
      </span>
      <span>Print</span>
    </button>

    <div class="hx-divider mx-1"></div>

    <div>
      <span class="is-info font-medium">2</span>
      <span> of </span>
      <span class="is-info font-medium">4</span>
      <span> items selected</span>
    </div>

    <div class="hx-spacer"></div>

    <button class="hx-button primary">
      <span class="hx-icon-control">
        <i class="hx-icon icon-plus-empty"></i>
      </span>
      <span>Task</span>
    </button>
  </div>
    
  <div class="hx-toolbar--modern perforated-b">
    <div>
      <span class="is-info font-medium">4</span>
      <span> items in the address book</span>
    </div>

    <div class="hx-spacer"></div>

    <i class="hx-icon icon-filter-outline"></i>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Practitioner:&nbsp;</span>
          <span class="font-medium text-ellipsed">Mr John GP</span>
        </span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-caret-down"></i>
        </span>
      </button>
    </div>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span>Status:&nbsp;</span>
          <span class="font-medium text-ellipsed">New</span>
        </span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-caret-down"></i>
        </span>
      </button>
    </div>

    <div class="hx-divider mx-1"></div>

    <button class="hx-button primary">
      <span class="hx-icon-control">
        <i class="hx-icon icon-plus-empty"></i>
      </span>
      <span>Address</span>
    </button>
  </div>
    
  <div class="hx-toolbar--modern perforated-b">
    <button class="hx-button">
      <span class="hx-icon-control">
        <i class="hx-icon icon-printer-outline"></i>
      </span>
      <span>Print</span>
    </button>

    <div class="hx-divider mx-1"></div>

    <div>
      <span class="is-info font-medium">4</span>
      <span> of </span>
      <span class="is-info font-medium">4</span>
      <span> items selected</span>
    </div>

    <div class="hx-spacer"></div>

    <i class="hx-icon icon-filter-outline mx-1"></i>
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Practitioner:&nbsp;</span>
          <span class="font-medium text-ellipsed">Mr John GP</span>
        </span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-caret-down"></i>
        </span>
      </button>
    </div>
    
    <div class="hx-dropdown">
      <button class="hx-button hx-button-dropdown">
        <span>
          <span class="font-normal">Status:&nbsp;</span>
          <span class="font-medium text-ellipsed">New</span>
        </span>
        <span class="hx-icon-control">
          <i class="hx-icon icon-caret-down"></i>
        </span>
      </button>
    </div>

    <div class="hx-form-control no-label no-help">
      <div class="hx-input-group">
        <span class="hx-icon-control">
          <i class="hx-icon icon-search"></i>
        </span>
        <input class="hx-input" type="search" placeholder="Search patient...">
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          code: `<p>Toolbar supports 3 sizes.</p>
<p class="prose">(default)</p>
<div class="hx-toolbar--modern is-info">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
</div>

<p class="prose"><code>.compact</code></p>
<div class="hx-toolbar--modern is-info compact mt-2">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
</div>

<p class="prose"><code>.comfortable</code></p>
<div class="hx-toolbar--modern is-info comfortable mt-2">
  <span>Title</span>
  <div class="hx-spacer"></div>
  <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>
</div>
            `,
        },
      ],
    }
  },
}
</script>

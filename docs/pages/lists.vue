<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Lists</h1>
      <h2 class="hx-subtitle">Stacked cards</h2>
    </div>

    <hr />

    <api-table :data="data"></api-table>

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
import ApiTable from '../components/ApiTable.vue'

export default {
  components: {
    ExpandingCodeExample,
    ApiTable,
  },
  data() {
    return {
      data: [
        {
          class: 'hx-list',
          type: 'component',
          description: 'Container element. Use `ul`.',
        },
        {
          class: 'compact',
          type: 'modifier',
          description: 'Reduced vertical padding for list items',
        },
        {
          class: 'hx-list-item',
          type: 'component',
          description: 'List item element',
        },
        {
          class: 'hx-list-item__start',
          type: 'sub-component',
          description: 'Container for start icons and avatars (optional)',
        },
        {
          class: 'hx-list-item__primary',
          type: 'sub-component',
          description:
            'Container for primary label like subheadings and data-labels (required)',
        },
        {
          class: 'hx-list-item__end',
          type: 'sub-component',
          description: 'Container for end buttons (optional)',
        },
        {
          class: 'hx-list-item__secondary',
          type: 'sub-component',
          description:
            'Container for additional information (optional). Ocuppies own row.',
        },
        {
          class: 'highlight highlight-{context}',
          type: 'modifier',
          description:
            'Adds leading vertical highlight bar. Requires context: success (default), danger, warning, info',
        },
      ],
      examples: [
        {
          title: 'Examples',
          withContent: false,
          code: `<div 
  class="hx-card-content grid tablet:grid-cols-2 gap-4"
>
  <div>
    <h3 class="hx-prose h4 mt-0">
      Basic
    </h3>

    <ul class="hx-card hx-list">
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
  <div>
    <h3 class="hx-prose h4 mt-0">
      Kitchen sink
    </h3>

    <ul class="hx-card hx-list">
      <li>
        <div class="hx-list-item highlight">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-more"></i>
              </span>
            </button>
          </div>
          <div class="hx-list-item__secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item highlight highlight-danger">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-more"></i>
              </span>
            </button>
          </div>
          <div class="hx-list-item__secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item hx-form-control fullwidth no-label no-help">
          <label class="hx-label sr-only" for="input-2">Full Name</label>
          <input class="hx-input" id="input-2" type="text" required>
          <span class="hx-help sr-only">Please enter your full name</span>
        </div>
      </li>
      <li>
        <button class="hx-list-item hx-button">
          <span class="hx-icon-container">
            <i class="hx-icon icon-plus-empty"></i>
          </span>
          <span>Add item</span>
        </button>
      </li>
    </ul>
  </div>
</div>`,
        },
        {
          title: 'Sizes',
          code: `<p class="hx-prose mt-0">List supports 2 sizes.</p>
<div class="grid tablet:grid-cols-2 gap-4">
  <div>
    <h3 class="hx-prose h4 mt-0">
      Normal (default)
    </h3>

    <ul class="hx-card hx-list">
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-more"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
  <div>
    <h3 class="hx-prose h4 mt-0">
      Compact <code>.compact</code>
    </h3>

    <ul class="hx-card hx-list compact">
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar sm">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button sm flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-more"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item">
          <div class="hx-list-item__start">
            <div class="hx-avatar sm">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="hx-list-item__primary">
            Cras justo odio
          </div>
          <div class="hx-list-item__end">
            <button class="hx-button sm flat">
              <span class="hx-icon-control">
                <i class="hx-icon icon-bin"></i>
              </span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

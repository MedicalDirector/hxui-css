<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Lists</h1>
      <h2 class="hx-subtitle">
        A simple configurable way of using <code>ul</code> list.
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
          </div>
        </div>
      </li>
      <li>
        <div class="hx-list-item highlight highlight-danger">
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-secondary">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar sm">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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
          <div class="container-start">
            <div class="hx-avatar sm">
              <img 
                src="${require('~/assets/images/default-avatar-business-bear.png')}"
                alt="portrait of cartoon bear"
              />
            </div>
          </div>
          <div class="container-primary">
            Cras justo odio
          </div>
          <div class="container-end">
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

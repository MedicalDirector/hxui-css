<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Steppers</h1>
    <h2 class="hx-subtitle">
      The <code>hx-stepper</code> component displays progress through numbered
      steps.
    </h2>

    <hr />

    <!-- <h4 class="mb-3">Example</h4>
    <div class="hx-card mb-10">
      <div class="hx-stepper">

        <div class="hx-stepper-header">
          <template v-for="(step, s) in defaultExample">
            <div class="hx-stepper-step">
              <span class="hx-stepper-step-step">{{ s + 1 }}</span>
              <div class="hx-stepper-step-label">{{ step.label }}</div>
            </div>
            <hr class="divider" />
          </template>
        </div>

        <div class="hx-stepper-items">
          <transition name="fade">
            <div class="hx-stepper-content" v-for="(step, s) in defaultExample">
              <div class="hx-stepper-wrapper">
                <div class="mb-5" v-html="step.content"></div>
                <p class="has-text-right">
                  <button class="hx-button is-flat">Cancel</button>
                  <button class="hx-button is-primary">Continue</button>
                </p>
              </div>
            </div>
          </transition>
        </div>

      </div>
    </div> -->

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
  data: () => ({
    defaultExample: [
      {
        label: 'Name of step 1',
        content: `
  <div class="hx-card">
    123
  </div>
          `,
      },
      {
        label: 'Name of step 2',
        content: `
  <div class="hx-card">
    123
  </div>
          `,
      },
      {
        label: 'Name of step 3',
        content: `
  <div class="hx-card">
    123
  </div>
          `,
      },
    ],
    examples: [
      {
        title: 'Default',
        code: `
  <div class="hx-card">
    <div class="hx-stepper">
      <div class="hx-stepper-header">
        <div class="hx-stepper-step is-active">
          <span class="hx-stepper-step-step">1</span>
          <div class="hx-stepper-step-label">Name of step 1</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">2</span>
          <div class="hx-stepper-step-label">Name of step 2</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">3</span>
          <div class="hx-stepper-step-label">Name of step 3</div>
        </div>
      </div>
      <div class="hx-stepper-items">
        <!-- items here start -->
        <div class="hx-stepper-content">
          <div class="hx-stepper-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus elit, molestie in neque ut, mattis scelerisque tortor. Aliquam laoreet et ante et ornare. Proin interdum odio orci, et tristique turpis porttitor id. Aenean maximus, est vulputate blandit egestas, odio est luctus elit, quis ornare est magna tincidunt risus. Suspendisse eu eros id dolor euismod lobortis non et leo. Praesent in neque vitae turpis porttitor cursus viverra vel massa. Curabitur eu quam quis justo interdum aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at facilisis velit. Sed gravida convallis elit sit amet imperdiet.</p>
            <p class="has-text-right">
              <button class="hx-button is-flat">Cancel</button>
              <button class="hx-button is-primary">Continue</button>
            </p>
          </div>
        </div>
        <!-- items here end -->
      </div>
    </div>
  </div>
          `,
      },
      {
        title: 'More examples',
        code: `
  <h6 class="mb-2">Default step</h6>
  <div class="hx-card mb-10">
    <div class="hx-stepper">
      <div class="hx-stepper-header">
        <div class="hx-stepper-step is-complete">
          <span class="hx-stepper-step-step">
            <i class="hx-icon icon-check-empty"></i>
          </span>
          <div class="hx-stepper-step-label">Name of step 1</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step is-active">
          <span class="hx-stepper-step-step">2</span>
          <div class="hx-stepper-step-label">Name of step 2</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">3</span>
          <div class="hx-stepper-step-label">Name of step 3</div>
        </div>
      </div>
    </div>
  </div>
  
  <h6 class="mb-2">Editable step</h6>
  <p>Add <code>is-editable</code> to the <code>hx-stepper-step</code> inside the <code>hx-stepper-header</code> tag.</p>
  <div class="hx-card mb-10">
    <div class="hx-stepper">
      <div class="hx-stepper-header">
        <div class="hx-stepper-step is-editable is-complete">
          <span class="hx-stepper-step-step">
            <i class="hx-icon icon-check-empty"></i>
          </span>
          <div class="hx-stepper-step-label">Name of step 1</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step is-active">
          <span class="hx-stepper-step-step">2</span>
          <div class="hx-stepper-step-label">Name of step 2</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">3</span>
          <div class="hx-stepper-step-label">Name of step 3</div>
        </div>
      </div>
    </div>
  </div>
  
  <h6 class="mb-2">Error step</h6>
  <p>Add <code>has-error</code> to the error <code>hx-stepper-step</code> inside the <code>hx-stepper-header</code> tag.</p>
  <div class="hx-card mb-10">
    <div class="hx-stepper">
      <div class="hx-stepper-header">
        <div class="hx-stepper-step is-editable is-complete">
          <span class="hx-stepper-step-step">
            <i class="hx-icon icon-check-empty"></i>
          </span>
          <div class="hx-stepper-step-label">Name of step 1</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step has-error">
          <span class="hx-stepper-step-step">
            <i class="hx-icon icon-exclamation"></i>
          </span>
          <div class="hx-stepper-step-label">Name of step 2</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">3</span>
          <div class="hx-stepper-step-label">Name of step 3</div>
        </div>
      </div>
    </div>
  </div>
  
  <h6 class="mb-2">Multiline</h6>
  <p>Add <code>is-multiline</code> to the <code>hx-stepper-header</code> tag.</p>
  <div class="hx-card">
    <div class="hx-stepper">
      <div class="hx-stepper-header is-multiline">
        <div class="hx-stepper-step is-active">
          <span class="hx-stepper-step-step">1</span>
          <div class="hx-stepper-step-label">Name of step 1</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">2</span>
          <div class="hx-stepper-step-label">Name of step 2 <br> another line</div>
        </div>
        <hr class="divider" />
        <div class="hx-stepper-step">
          <span class="hx-stepper-step-step">3</span>
          <div class="hx-stepper-step-label">Name of step 3</div>
        </div>
      </div>
    </div>
  </div>
          `,
      },
      {
        title: 'Vertical',
        code: `
  <p>Add <code>is-vertical</code> to the <code>hx-stepper</code> tag.</p>
  <div class="hx-card">
    <div class="hx-stepper is-vertical">
      <div class="hx-stepper-step is-active">
        <span class="hx-stepper-step-step">1</span>
        <div class="hx-stepper-step-label">Name of step 1</div>
      </div>
      <div class="hx-stepper-content">
      </div>
      <div class="hx-stepper-step has-error">
        <span class="hx-stepper-step-step">
          <i class="hx-icon icon-exclamation"></i>
        </span>
        <div class="hx-stepper-step-label">Name of step 2</div>
      </div>
      <div class="hx-stepper-content">
        <div class="hx-stepper-wrapper">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus elit, molestie in neque ut, mattis scelerisque tortor. Aliquam laoreet et ante et ornare. Proin interdum odio orci, et tristique turpis porttitor id. Aenean maximus, est vulputate blandit egestas, odio est luctus elit, quis ornare est magna tincidunt risus. Suspendisse eu eros id dolor euismod lobortis non et leo. Praesent in neque vitae turpis porttitor cursus viverra vel massa. Curabitur eu quam quis justo interdum aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at facilisis velit. Sed gravida convallis elit sit amet imperdiet.</p>
          <p class="">
            <button class="hx-button is-primary">Continue</button>
            <button class="hx-button is-flat">Cancel</button>
          </p>
        </div>
      </div>
      <div class="hx-stepper-step">
        <span class="hx-stepper-step-step">3</span>
        <div class="hx-stepper-step-label">Name of step 3</div>
      </div>
      <div class="hx-stepper-content"></div>
    </div>
  </div>
          `,
      },
    ],
  }),
}
</script>

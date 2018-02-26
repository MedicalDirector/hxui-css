<template>
  <div id="steppers">
    <h1 class="hx-title">Steppers</h1>
    <h2 class="hx-subtitle">The <code>hx-stepper</code> component displays progress through numbered steps.</h2>

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
  data: () => ({
    examples: [
      {
        title: 'Default',
        code: `
<div class="hx-card">
  <div class="hx-stepper">
    <div class="hx-stepper__header">
      <div class="hx-stepper__step is-active">
        <span class="hx-stepper__step__step">1</span>
        <div class="hx-stepper__step__label">Name of step 1</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">2</span>
        <div class="hx-stepper__step__label">Name of step 2</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">3</span>
        <div class="hx-stepper__step__label">Name of step 3</div>
      </div>
    </div>
    <div class="hx-stepper__items">
      <!-- items here start -->
      <div class="hx-stepper__content">
        <div class="hx-stepper__wrapper">
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
        `
      },
      {
        title: 'More examples',
        code: `
<h6 class="mb-2">Default step</h6>
<div class="hx-card mb-10">
  <div class="hx-stepper">
    <div class="hx-stepper__header">
      <div class="hx-stepper__step is-complete">
        <span class="hx-stepper__step__step">
          <i class="hx-icon icon-check-empty"></i>
        </span>
        <div class="hx-stepper__step__label">Name of step 1</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step is-active">
        <span class="hx-stepper__step__step">2</span>
        <div class="hx-stepper__step__label">Name of step 2</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">3</span>
        <div class="hx-stepper__step__label">Name of step 3</div>
      </div>
    </div>
  </div>
</div>

<h6 class="mb-2">Editable step</h6>
<div class="hx-card mb-10">
  <div class="hx-stepper">
    <div class="hx-stepper__header">
      <div class="hx-stepper__step is-editable is-complete">
        <span class="hx-stepper__step__step">
          <i class="hx-icon icon-check-empty"></i>
        </span>
        <div class="hx-stepper__step__label">Name of step 1</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step is-active">
        <span class="hx-stepper__step__step">2</span>
        <div class="hx-stepper__step__label">Name of step 2</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">3</span>
        <div class="hx-stepper__step__label">Name of step 3</div>
      </div>
    </div>
  </div>
</div>

<h6 class="mb-2">Error step</h6>
<div class="hx-card mb-10">
  <div class="hx-stepper">
    <div class="hx-stepper__header">
      <div class="hx-stepper__step is-editable is-complete">
        <span class="hx-stepper__step__step">
          <i class="hx-icon icon-check-empty"></i>
        </span>
        <div class="hx-stepper__step__label">Name of step 1</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step has-error">
        <span class="hx-stepper__step__step">
          <i class="hx-icon icon-exclamation"></i>
        </span>
        <div class="hx-stepper__step__label">Name of step 2</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">3</span>
        <div class="hx-stepper__step__label">Name of step 3</div>
      </div>
    </div>
  </div>
</div>

<h6 class="mb-2">Multiline</h6>
<div class="hx-card mb-10">
  <div class="hx-stepper">
    <div class="hx-stepper__header is-multiline">
      <div class="hx-stepper__step is-active">
        <span class="hx-stepper__step__step">1</span>
        <div class="hx-stepper__step__label">Name of step 1</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">2</span>
        <div class="hx-stepper__step__label">Name of step 2 <br> another line</div>
      </div>
      <hr class="divider" />
      <div class="hx-stepper__step">
        <span class="hx-stepper__step__step">3</span>
        <div class="hx-stepper__step__label">Name of step 3</div>
      </div>
    </div>
  </div>
</div>
        `
      }
    ]
  }),
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="scss">
</style>

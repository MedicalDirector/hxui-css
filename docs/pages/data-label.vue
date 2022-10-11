<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Data label</h1>
      <h2 class="hx-subtitle">
        This <code>hx-data-label</code> component displays a text label with a
        single data value.
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
          code: `<div class="hx-card-content grid phablet:grid-cols-2 tablet:grid-cols-4 gap-4">
  <div class="hx-data-label">
    <span class="hx-label">Hcp</span>
    <span class="hx-data">John GP</span>
  </div>

  <div class="hx-data-label">
    <span class="hx-label">Appointment Type</span>
    <span class="hx-data">Standard</span>
  </div>

  <div class="hx-data-label alternate">
    <span class="hx-data">Sally Caban</span>
    <span class="hx-label">Patient</span>
  </div>

  <div class="hx-data-label">
    <span class="hx-label">Work Area</span>
    <span class="hx-data">Reception</span>
  </div>
  
  <div class="hx-data-label">
    <span class="hx-label">Date</span>
    <span class="hx-data">
      <span class="hx-icon-container">
        <i class="hx-icon icon-calendar-outline"></i>
      </span>
      <span>20/07/2019</span>
    </span>
  </div>

  <div class="hx-data-label">
    <span class="hx-label">Elapsed Time</span>
    <span class="hx-data">
      <span class="hx-icon-container">
        <i class="hx-icon icon-clock-outline"></i>
      </span>
      <span>00:15:00</span>
    </span>
  </div>

  <div class="hx-data-label">
    <span class="hx-label">Status</span>
    <div class="hx-data">
      <div class="hx-badge">
        <span>In progress</span>
      </div>
    </div>
  </div>

  <div class="hx-data-label">
    <span class="hx-label">Pulse</span>
    <div class="hx-data">
      <span class="hx-icon-container">
        <i class="hx-icon icon-heartbeat"></i>
      </span>
      <span>5 bpm</span>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

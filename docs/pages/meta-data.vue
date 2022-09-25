<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Meta Data</h1>
      <h2 class="hx-subtitle">
        This <code>hx-metadata</code> component displays read-only values, with
        a similar look and feel as form inputs.
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
          code: `
  
  <div class="hx-columns">
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Hcp</div>
          <div class="hx-value">John GP</div>
      </div>
    </div>
     <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Appointment Type</div>
          <div class="hx-value">Standard</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Patient</div>
          <div class="hx-value">Sally Caban</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Work Area</div>
          <div class="hx-value">Reception</div>
      </div>
    </div>
  </div>
  
  <div class="hx-columns">
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Date</div>
          <div class="hx-value"><i class="hx-icon icon-calendar-outline is-small"></i> 20/07/2019</div>
      </div>
    </div>
     <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Elapsed Time</div>
          <div class="hx-value"><i class="hx-icon icon-clock-outline is-small"></i> 00:15:00</div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Status</div>
          <div class="hx-value">
              <span class="hx-badge">
                <span class="hx-badge-content">In progress</span>
              </span>
          </div>
      </div>
    </div>
    <div class="hx-column">
      <div class="hx-metadata">
          <div class="hx-label">Pulse</div>
          <div class="hx-value"><i class="hx-icon icon-heartbeat is-small"></i> 5 bpm</div>
      </div>
    </div>
  </div>
            `,
        },
      ],
    }
  },
}
</script>

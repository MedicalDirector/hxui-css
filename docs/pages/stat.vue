<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Stat</h1>
      <h2 class="hx-subtitle">
        This <code>hx-stat</code> component displays a text label with a single
        data value.
      </h2>
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
          class: 'hx-stat',
          type: 'component',
          description: 'Container element',
        },
        {
          class: 'alternate',
          type: 'modifier',
          description: 'Alternate styling',
        },
        {
          class: 'hx-stat__label',
          type: 'sub-component',
          description: 'Label element',
        },
        {
          class: 'hx-stat__data',
          type: 'sub-component',
          description: 'Data value element',
        },
      ],
      examples: [
        {
          title: 'Examples',
          withContent: false,
          code: `<div class="hx-card-content">
  <dl class="grid phablet:grid-cols-2 tablet:grid-cols-4 gap-4">
    <div class="hx-stat">
      <dt class="hx-stat__label">Hcp</dt>
      <dd class="hx-stat__data">John GP</dd>
    </div>

    <div class="hx-stat">
      <dt class="hx-stat__label">Appointment Type</dt>
      <dd class="hx-stat__data">Standard</dd>
    </div>

    <div class="hx-stat alternate">
      <dt class="hx-stat__data">Sally Caban</dt>
      <dd class="hx-stat__label">Patient</dd>
    </div>

    <div class="hx-stat">
      <dt class="hx-stat__label">Work Area</dt>
      <dd class="hx-stat__data">Reception</dd>
    </div>
    
    <div class="hx-stat">
      <dt class="hx-stat__label">Date</dt>
      <dd class="hx-stat__data">
        <span class="hx-icon-container">
          <i class="hx-icon icon-calendar-outline" aria-hidden="true"></i>
        </span>
        <span>20/07/2019</span>
      </dd>
    </div>

    <div class="hx-stat">
      <dt class="hx-stat__label">Elapsed Time</dt>
      <dd class="hx-stat__data">
        <span class="hx-icon-container">
          <i class="hx-icon icon-clock-outline" aria-hidden="true"></i>
        </span>
        <span>00:15:00</span>
      </dd>
    </div>

    <div class="hx-stat">
      <dt class="hx-stat__label">Status</dt>
      <dd class="hx-stat__data">
        <div class="hx-badge">
          <span>In progress</span>
        </div>
      </dd>
    </div>

    <div class="hx-stat">
      <dt class="hx-stat__label">Pulse</dt>
      <dd class="hx-stat__data">
        <span class="hx-icon-container">
          <i class="hx-icon icon-heartbeat" aria-hidden="true"></i>
        </span>
        <span>5 bpm</span>
      </div>
    </dd>
  </dl>
</div>`,
        },
      ],
    }
  },
}
</script>

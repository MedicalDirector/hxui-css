<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Timeline</h1>
      <h2 class="hx-subtitle">
        A timeline component communicates to the user the progress of a
        particular process.
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
        :background="ex.bg"
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
          title: 'Example',
          withContent: false,
          code: `<div class="hx-card__content grid phablet:grid-cols-4">
  <div class="hx-card p-4 phablet:col-start-2 phablet:col-end-4">
    <ul class="hx-bullet-list status joined">
      <li class="success checked">
        <div class="hx-flex justify-between">
          <h3 class="h4">Booked</h3>
          <button class="hx-button sm">
            <span class="hx-icon-container">
              <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
            </span>
          </button>
        </div>

        <div class="hx-collapsible flex flex-col">
          <div class="flex justify-between">
            <span class="b1 font-medium fg-subdued">Appointment reminder</span>
            <span class="b1 fg-muted">SEP 4 at 12:00pm</span>
          </div>
          <div class="flex justify-between">
            <span class="b1 font-medium fg-subdued">Appointment booked</span>
            <span class="b1 fg-muted">SEP 11 at 3:35pm</span>
          </div>
          <span class="b2 fg-subdued">
            You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.
            You can reply 'YES' to this message to confirm, or 'NO' to cancel.
            If you need to reschedule. please call us at 03 3482 2181.
          </span>
        </div>
      </li>

      <li class="checked success">
        <div class="hx-flex justify-between">
          <h3 class="h4">Confirmed</h3>
          <button class="hx-button sm">
            <span class="hx-icon-container">
              <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
            </span>
          </button>
        </div>

        <div class="hx-collapsible flex flex-col">
          <div class="flex justify-between">
            <span class="b1 font-medium fg-success">Patient confirmed</span>
            <span class="b1 fg-muted">Today at 8:55am</span>
          </div>
          <span class="b2 fg-subdued">YES</span>
        </div>
      </li>

      <li class="checked warning">
        <div class="hx-flex justify-between">
          <h3 class="h4">Checked in</h3>
          <button class="hx-button sm">
            <span class="hx-icon-container">
              <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
            </span>
          </button>
        </div>

        <div class="hx-collapsible flex flex-col">
          <div class="flex justify-between">
            <span class="b1 font-medium fg-warning">Patient replied</span>
            <span class="b1 fg-muted">Today at 3:55pm</span>
          </div>
          <span class="b2 fg-subdued">YES</span>
        </div>
      </li>

      <li class="checked danger">
        <div class="hx-flex justify-between">
          <h3 class="h4">Waiting</h3>
          <button class="hx-button sm">
            <span class="hx-icon-container">
              <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
            </span>
          </button>
        </div>

        <div class="hx-collapsible flex flex-col">
          <div class="flex justify-between">
            <span class="b1 font-medium fg-danger">Patient declined</span>
            <span class="b1 fg-muted">Today at 4:05pm</span>
          </div>
          <span class="b2 fg-subdued">YES</span>
        </div>
      </li>
    </ul>
  </div>
</div>`,
        },
        {
          title: 'Progress timeline in popover',
          code: `<div class="hx-card" style="margin-bottom: 32rem">
  <div class="hx-card__content">
    <div class="hx-flex justify-between items-center">
      <h3 class="h3">Current Visit</h4>

      <div class="hx-flex items-center gap-2">
        <div class="hx-dropdown">
          <div class="py-1">
            <ul class="hx-bullet-list status horizontal">
              <li class="success checked">
                <span class="h4">Booked</span>
              </li>
            </ul>
          </div>

          <div class="hx-dropdown-menu popup-timeline open bottom-middle">
            <ul class="hx-bullet-list status joined">
              <li class="success checked">
                <div class="hx-flex justify-between">
                  <h3 class="h4">Booked</h3>
                  <button class="hx-button sm">
                    <span class="hx-icon-container">
                      <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>

                <div class="hx-collapsible flex flex-col">
                  <div class="flex justify-between">
                    <span class="b1 font-medium fg-subdued">Appointment reminder</span>
                    <span class="b1 fg-muted">SEP 4 at 12:00pm</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="b1 font-medium fg-subdued">Appointment booked</span>
                    <span class="b1 fg-muted">SEP 11 at 3:35pm</span>
                  </div>
                  <span class="b2 fg-subdued">
                    You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.
                    You can reply 'YES' to this message to confirm, or 'NO' to cancel.
                    If you need to reschedule. please call us at 03 3482 2181.
                  </span>
                </div>
              </li>

              <li class="checked success">
                <div class="hx-flex justify-between">
                  <h3 class="h4">Confirmed</h3>
                  <button class="hx-button sm">
                    <span class="hx-icon-container">
                      <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>

                <div class="hx-collapsible flex flex-col">
                  <div class="flex justify-between">
                    <span class="b1 font-medium fg-success">Patient confirmed</span>
                    <span class="b1 fg-muted">Today at 8:55am</span>
                  </div>
                  <span class="b2 fg-subdued">YES</span>
                </div>
              </li>

              <li class="checked warning">
                <div class="hx-flex justify-between">
                  <h3 class="h4">Checked in</h3>
                  <button class="hx-button sm">
                    <span class="hx-icon-container">
                      <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>

                <div class="hx-collapsible flex flex-col">
                  <div class="flex justify-between">
                    <span class="b1 font-medium fg-warning">Patient replied</span>
                    <span class="b1 fg-muted">Today at 3:55pm</span>
                  </div>
                  <span class="b2 fg-subdued">YES</span>
                </div>
              </li>

              <li class="checked danger">
                <div class="hx-flex justify-between">
                  <h3 class="h4">Waiting</h3>
                  <button class="hx-button sm">
                    <span class="hx-icon-container">
                      <i class="hx-icon icon-angle-up" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>

                <div class="hx-collapsible flex flex-col">
                  <div class="flex justify-between">
                    <span class="b1 font-medium fg-danger">Patient declined</span>
                    <span class="b1 fg-muted">Today at 4:05pm</span>
                  </div>
                  <span class="b2 fg-subdued">YES</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <span class="hx-icon-container">
          <i class="hx-icon icon-angle-right" aria-hidden="true"></i>
        </span>

        <button class="hx-button primary">
          <span>Add to queue</span>
          <span class="hx-icon-container">
            <i class="icon icon-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          title: 'Progress timeline marker states',
          withContent: false,
          code: `<div class="hx-card__content flex justify-between">
  <div class="hx-flex items-center gap-2">
    <div class="py-1">
      <ul class="hx-bullet-list status horizontal">
        <li class="success checked">
          <span class="h4">Success</span>
        </li>
      </ul>
    </div>
    <span class="hx-icon-container">
      <i class="hx-icon icon-angle-right" aria-hidden="true"></i>
    </span>
    <button class="hx-button primary">
      <span>Next action</span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>

  <div class="hx-flex items-center gap-2">
    <div class="py-1">
      <ul class="hx-bullet-list status horizontal">
        <li class="warning unchecked">
          <span class="h4 is-warning">Attention</span>
        </li>
      </ul>
    </div>
    <span class="hx-icon-container">
      <i class="hx-icon icon-angle-right" aria-hidden="true"></i>
    </span>
    <button class="hx-button primary">
      <span>Next action</span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>

  <div class="hx-flex items-center gap-2">
    <div class="py-1">
      <ul class="hx-bullet-list status horizontal">
        <li class="danger unchecked">
          <span class="h4 is-danger">Declined</span>
        </li>
      </ul>
    </div>
    <span class="hx-icon-container">
      <i class="hx-icon icon-angle-right" aria-hidden="true"></i>
    </span>
    <button class="hx-button primary">
      <span>Next action</span>
      <span class="hx-icon-container">
        <i class="hx-icon icon-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>

<template>
  <article class="hx-section scrollable-y">
    <div class="content contents">
      <h1 class="hx-title pt-4">Progress Timeline</h1>
      <h2 class="hx-subtitle">
        A progress timeline component communicates to the user the progress of a
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
          code: `
  <div class="hx-columns">
    <div class="hx-column is-6 is-offset-3">
      <div class="hx-card">
        <div class="hx-card-content">
          <ul class="hx-list has-status is-joined">
            <li class="is-success is-checked">
              <h6 class="hx-title">Booked <i class="icon icon-angle-up"></i></h6>
              <div class="hx-collapsible">
                <div class="hx-group">
                  <p><strong>SMS sent: Appointment Reminder</strong><p>
                  <p><em>16.04.2017</em></p>
                </div>
                <div class="hx-group">
                  <p><strong>SMS sent: Appointment booked</strong><p>
                  <p><em>20.04.2017</em></p>
                </div>
                <div class="hx-group">
                  <p>You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.
            You can reply 'YES' to this message to confirm, or 'NO' to cancel.
            If you need to reschedule. please call us at 03 3482 2181.</p>
                </div>
              </div>
            </li>
            <li class="is-not-checked is-success">
              <h6 class="hx-title">Confirmed <i class="hx-icon icon-angle-up"></i></h6>
              <div class="hx-collapsible">
                <div class="hx-group">
                  <p><strong>SMS rec'd: Patient Confirmed</strong><p>
                  <p><em>20.03.2017</em></p>
                  <p>YES</p>
                </div>
              </div>
            </li>
            <li class="is-not-checked is-warning">
              <h6 class="hx-title">Checked in <i class="hx-icon icon-angle-up"></i></h6>
              <div class="hx-collapsible">
                <div class="hx-group">
                  <p class="is-warning"><strong>SMS rec'd: Patient Replied at 3:55pm.</strong><p>
                  <p><em>20.03.2017</em></p>
                  <p>YES</p>
                </div>
              </div>
            </li>
            <li class="is-not-checked is-danger">
              <h6 class="hx-title">Waiting <i class="hx-icon icon-angle-up"></i></h6>
              <div class="hx-collapsible">
                <div class="hx-group">
                  <p class="is-danger"><strong>SMS rec'd: Patient Declined at 4:05pm.</strong><p>
                  <p><em>20.03.2017</em></p>
                  <p>YES</p>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Progress timeline in popover',
          code: `
  <div class="hx-card" style="margin-bottom: 32rem">
    <div class="hx-card-content">
      <div class="hx-flex hx-flex-justify-between">
        <h4 class="is-marginless">Current Visit</h4>
        <div class="hx-flex hx-flex-align-center">
          <div class="hx-progress-timeline-status">
            <span class="hx-marker is-success is-animated"><i class="icon icon-check-empty"></i></span>
            <div class="hx-popover is-opened">
              <ul class="hx-list has-status is-joined">
                <li class="is-success is-checked">
                  <h6 class="hx-title">Booked <i class="icon icon-angle-up"></i></h6>
                  <div class="hx-collapsible">
                    <div class="hx-group">
                      <p><strong>SMS sent: Appointment Reminder</strong><p>
                      <p><em>16.04.2017</em></p>
                    </div>
                    <div class="hx-group">
                      <p><strong>SMS sent: Appointment booked</strong><p>
                      <p><em>20.04.2017</em></p>
                    </div>
                    <div class="hx-group">
                      <p>You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.
                You can reply 'YES' to this message to confirm, or 'NO' to cancel.
                If you need to reschedule. please call us at 03 3482 2181.</p>
                    </div>
                  </div>
                </li>
                <li class="is-not-checked is-success">
                  <h6 class="hx-title">Confirmed <i class="hx-icon icon-angle-up"></i></h6>
                  <div class="hx-collapsible">
                    <div class="hx-group">
                      <p><strong>SMS rec'd: Patient Confirmed</strong><p>
                      <p><em>20.03.2017</em></p>
                      <p>YES</p>
                    </div>
                  </div>
                </li>
                <li class="is-not-checked is-warning">
                  <h6 class="hx-title">Checked in <i class="hx-icon icon-angle-up"></i></h6>
                  <div class="hx-collapsible">
                    <div class="hx-group">
                      <p class="is-warning"><strong>SMS rec'd: Patient Replied at 3:55pm.</strong><p>
                      <p><em>20.03.2017</em></p>
                      <p>YES</p>
                    </div>
                  </div>
                </li>
                <li class="is-not-checked is-danger">
                  <h6 class="hx-title">Waiting <i class="hx-icon icon-angle-up"></i></h6>
                  <div class="hx-collapsible">
                    <div class="hx-group">
                      <p class="is-danger"><strong>SMS rec'd: Patient Declined at 4:05pm.</strong><p>
                      <p><em>20.03.2017</em></p>
                      <p>YES</p>
                    </div>
                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <strong class="is-success">Booked</strong>
          <i class="icon icon-angle-right"></i>
          <a class="hx-button is-primary">
            <span>Add to queue</span>
            <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
          </a>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Progress timeline marker states',
          code: `
  <div class="hx-card">
    <div class="hx-card-content">
      <div class="hx-flex hx-flex-justify-between">
        <div class="hx-flex hx-flex-align-center">
          <ul class="hx-list has-status is-horizontal pr-1">
            <li class="is-success is-checked">
              <strong class="is-success">Success</strong>
            </li>
          </ul>
          <i class="hx-icon icon-angle-right"></i>
          <button class="hx-button is-primary">
            <span>Next action</span>
            <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>
          </button>
        </div>
        <div class="hx-flex hx-flex-align-center">
          <ul class="hx-list has-status is-horizontal pr-1">
            <li class="is-warning is-not-checked">
              <strong class="is-warning">Attention</strong>
            </li>
          </ul>
          <i class="hx-icon icon-angle-right"></i>
          <button class="hx-button is-primary">
            <span>Next action</span>
            <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>
          </button>
        </div>
        <div class="hx-flex hx-flex-align-center">
          <ul class="hx-list has-status is-horizontal pr-1">
            <li class="is-danger is-not-checked">
              <strong class="is-danger">Declined</strong>
            </li>
          </ul>
          <i class="hx-icon icon-angle-right"></i>
          <button class="hx-button is-primary">
            <span>Next action</span>
            <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>
          </button>
        </div>
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

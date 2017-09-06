<template>
<div id="progress-timeline">
  <h1 class="hx-title">Progress Timeline</h1>
  <h2 class="hx-subtitle">A progress timeline component communicates to the user the progress of a particular process.</h2>

  <hr>

  <expanding-code-example v-for="(example, i) in examples" key="i" :title="example.title" :code="example.code" :example="example.code" :visible="false" :background="example.bg"></expanding-code-example>

</div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
          title: 'Example',
          code: `
<div class="hx-columns">
  <div class="hx-column is-6 is-offset-3">
    <div class="hx-card">
      <div class="hx-card-content">
        <ul class="hx-progress-timeline">
          <li class="hx-item is-success">
            <div class="hx-head"><i class="icon icon-check-empty"></i></div>
            <div class="hx-content">
              <div><h6 class="is-marginless">Booked <i class="icon icon-angle-up"></i></h6></div>
              <ul>
                <li><strong>SMS sent: Appointment Reminder</strong></li>
                <li><small class="is-text-italic">16/03/2017</small></li>
              </ul>
              <ul>
                <li><strong>SMS sent: Appointment booked</strong></li>
                <li><small class="is-text-italic">20/03/2017</small></li>
                <li>
                    You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749. <br>
                    You can reply 'YES' to this message to confirm, or 'NO' to cancel. <br>
                    If you need to reschedule. please call us at 03 3482 2181.
                </li>
              </ul>
            </div>
          </li>
          <li class="hx-item is-next">
            <div class="hx-head"></div>
            <div class="hx-content">
              <div><h6 class="is-marginless">Confirmed <i class="icon icon-angle-up"></i></h6></div>
              <ul>
                <li><strong>SMS rec'd: Patient Confirmed</strong></li>
                <li><small class="is-text-italic">20/03/2017</small></li>
                <li>YES</li>
              </ul>
            </div>
          </li>
          <li class="hx-item is-warning">
              <div class="hx-head"></div>
              <div class="hx-content">
                <div><h6 class="is-marginless">Checked in <i class="icon icon-angle-up"></i></h6></div>
                <ul>
                    <li><strong>SMS rec'd: Patient Replied at 3:55pm.</strong></li>
                    <li><small class="is-text-italic">20/03/2017</small></li>
                    <li>Yes</li>
                </ul>
              </div>
          </li>
          <li class="hx-item is-danger">
            <div class="hx-head"></div>
            <div class="hx-content">
              <div><h6 class="is-marginless">Waiting <i class="icon icon-angle-up"></i></h6></div>
              <ul>
                <li><strong>SMS rec'd: Patient Declined at 4:05pm.</strong></li>
                <li><small class="is-text-italic">20/03/2017</small></li>
                <li>Yes</li>
              </ul>
            </div>
          </li>
          <li class="hx-item">
            <div class="hx-head"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
          `
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
            <ul class="hx-progress-timeline">
              <li class="hx-item is-success">
                <div class="hx-head"><i class="icon icon-check-empty"></i></div>
                <div class="hx-content">
                  <div>
                    <h6 class="is-marginless">Booked <i class="icon icon-angle-up"></i></h6></div>
                  <ul>
                    <li><strong>SMS sent: Appointment Reminder</strong></li>
                    <li><small class="is-text-italic">16/03/2017</small></li>
                  </ul>
                  <ul>
                    <li><strong>SMS sent: Appointment booked</strong></li>
                    <li><small class="is-text-italic">20/03/2017</small></li>
                    <li>
                      You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749. <br> You can reply 'YES' to this message to confirm, or 'NO' to cancel. <br> If you need to reschedule. please
                      call us at 03 3482 2181.
                    </li>
                  </ul>
                </div>
              </li>
              <li class="hx-item is-next">
                <div class="hx-head"></div>
                <div class="hx-content">
                  <div>
                    <h6 class="is-marginless">Confirmed <i class="icon icon-angle-up"></i></h6></div>
                  <ul>
                    <li><strong>SMS rec'd: Patient Confirmed</strong></li>
                    <li><small class="is-text-italic">20/03/2017</small></li>
                    <li>YES</li>
                  </ul>
                </div>
              </li>
              <li class="hx-item is-warning">
                <div class="hx-head"></div>
                <div class="hx-content">
                  <div>
                    <h6 class="is-marginless">Checked in <i class="icon icon-angle-up"></i></h6></div>
                  <ul>
                    <li><strong>SMS rec'd: Patient Replied at 3:55pm.</strong></li>
                    <li><small class="is-text-italic">20/03/2017</small></li>
                    <li>Yes</li>
                  </ul>
                </div>
              </li>
              <li class="hx-item is-danger">
                <div class="hx-head"></div>
                <div class="hx-content">
                  <div>
                    <h6 class="is-marginless">Waiting <i class="icon icon-angle-up"></i></h6></div>
                  <ul>
                    <li><strong>SMS rec'd: Patient Declined at 4:05pm.</strong></li>
                    <li><small class="is-text-italic">20/03/2017</small></li>
                    <li>Yes</li>
                  </ul>
                </div>
              </li>
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
          `
        },
        {
          title: 'Progress timeline marker states',
          code: `
<div class="hx-card">
  <div class="hx-card-content">
    <div class="hx-flex hx-flex-justify-between">
      <div class="hx-flex hx-flex-align-center">
        <div class="hx-progress-timeline-status">
          <span class="hx-marker is-success is-animated"><i class="icon icon-check-empty"></i></span>
          <strong class="is-success">Success</strong>
        </div>
        <i class="icon icon-angle-right"></i>
        <a class="hx-button is-primary">
            <span>Animated</span>
            <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
          </a>
      </div>
      <div class="hx-flex hx-flex-align-center">
        <div class="hx-progress-timeline-status">
          <span class="hx-marker is-success"><i class="icon icon-check-empty"></i></span>
        </div>
        <strong class="is-success">Success</strong>
        <i class="icon icon-angle-right"></i>
        <a class="hx-button is-primary">
            <span>Success</span>
            <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
          </a>
      </div>
      <div class="hx-flex hx-flex-align-center">
        <div class="hx-progress-timeline-status">
          <span class="hx-marker is-warning"></span>
        </div>
        <strong class="is-warning">Attention</strong>
        <i class="icon icon-angle-right"></i>
        <a class="hx-button is-primary">
            <span>Attention</span>
            <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
          </a>
      </div>
      <div class="hx-flex hx-flex-align-center">
        <div class="hx-progress-timeline-status">
          <span class="hx-marker is-danger"></span>
        </div>
        <strong class="is-danger">Declined</strong>
        <i class="icon icon-angle-right"></i>
        <a class="hx-button is-primary">
          <span>Danger</span>
          <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>
        </a>
      </div>
    </div>
  </div>
</div>
          `
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

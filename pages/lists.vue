<template>
  <div id="lists">
    <h1 class="hx-title">Lists</h1>
    <h2 class="hx-subtitle">A simple configurable way of using <code>ul</code> list.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i" :title="example.title" :code="example.code" :example="example.code" :visible="false" :background="example.bg"></expanding-code-example>



  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  data () {
    return {
      examples: [
        {
          title: 'Standard list',
          code: `
<p>A simple <strong>Unordered</strong> list with the option to change bullet colours. </p>
<p>Simply add a class <code>.hx-list</code> to the list and add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>
<ul class="hx-list">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
          `
        },
        {
          title: 'List with status',
          code: `
<p>An <strong>Unordered</strong> list with <strong>status</strong> is used to indicate a particular status. </p>
<p>Simply add a class <code>.hx-list</code> <code>.has-status</code> to the list. To change colours, add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>
<ul class="hx-list has-status">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />
<p>To turn the bullets into <strong>Unchecked</strong> circles, simply add <code>.is-not-checked</code> to the list item.</p>
<ul class="hx-list has-status">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>
<br />
<p>To turn the bullets into <strong>Checked</strong> circles, simply add <code>.is-checked</code> to the list item.</p>
<ul class="hx-list has-status">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>


          `
        },
        {
          title: 'Modifiers',
          code: `
<h5>Layout</h5>
<p>By default a list will be layed out vertically, however sometimes you will need a horizontal layout. Simply add the class <code>.is-horizontal</code> to the list.</p>
<ul class="hx-list is-horizontal">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
</ul>
<p>&nbsp;</p>
<h5>Invert</h5>
<p>Invert the style by using the <code>.is-inverse</code> modifier. </p>

<ul class="hx-list is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
</ul>
<br />
<ul class="hx-list has-status is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-list has-status is-horizontal is-inverse">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-list has-status is-horizontal is-inverse">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>
<p>&nbsp;</p>
<h5>Bordered</h5>
<p>Inverted styles are predominantly designed to work on white backgrounds. <br>
In some cases they will go on other background colours that make the inverted style hard to see. <br>
Use the  <code>.is-bordered</code> modifier to make it stand out. </p>

<ul class="hx-list is-bordered is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />
<ul class="hx-list is-bordered has-status is-horizontal is-inverse">
  <li>Item one - default</li>
  <li class="is-success">Item two - success</li>
  <li class="is-warning">Item three - warning</li>
  <li class="is-danger">Item four - danger</li>
  <li class="is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-list is-bordered has-status is-horizontal is-inverse">
  <li class="is-not-checked">Item one - default</li>
  <li class="is-not-checked is-success">Item two - success</li>
  <li class="is-not-checked is-warning">Item three - warning</li>
  <li class="is-not-checked is-danger">Item four - danger</li>
  <li class="is-not-checked is-info">Item five - info</li>
</ul>
<br />

<ul class="hx-list is-bordered has-status is-horizontal is-inverse">
  <li class="is-checked">Item one - default</li>
  <li class="is-checked is-success">Item two - success</li>
  <li class="is-checked is-warning">Item three - warning</li>
  <li class="is-checked is-danger">Item four - danger</li>
  <li class="is-checked is-info">Item five - info</li>
</ul>
          `
        },
        {
          title: 'Progress list',
          code: `
<p>A <strong>Progress list</strong> is an extension to the <strong>List with Status</strong>.</p>
<p>It creates a line that "join" all the bullets together to symbolises progression in terms of steps or time. Just add class <code>.is-joined</code> to the list.</p>
<ul class="hx-list has-status is-joined">
  <li class="is-success is-checked">
    <h6 class="hx-title">Booked <i class="hx-icon icon-angle-up"></i></h6>
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
          `
        },
        {
          title: 'List group',
          code: `
<p>The most basic list group is an unordered list with list items and the proper classes</p>
<div class="hx-columns mt-5">
  <div class="hx-column is-4 is-offset-4">
    <div class="hx-card">
      <ul class="hx-list-group">
        <li class="">
          <a>Cras justo odio</a>
        </li>
        <li class="">
          <a>Dapibus ac facilisis in</a>
        </li>
        <li class="">
          <a>Morbi leo risus</a>
        </li>
        <li class="">
          <a>Phasellus sem tortor, consectetur sit amet ex non, varius rhoncus neque. </a>
        </li>
        <li class="">
          <a>Vestibulum at eros</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<br />
<p>Adding actions into the list</p>
<div class="hx-columns mt-5">
  <div class="hx-column is-4 is-offset-4">
    <div class="hx-card">
      <ul class="hx-list-group">
        <li class="">
          <a>
            <div class="hx-list-action">
              <button class="hx-info is-small"></button>
            </div>
            <div class="hx-list-content">Cras justo odio</div>
            <div class="hx-list-action">
              <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
            </div>
          </a>
        </li>
        <li class="">
          <a>
            <div class="hx-list-action">
              <button class="hx-info is-small"></button>
            </div>
            <div class="hx-list-content">Dapibus ac facilisis in</div>
            <div class="hx-list-action">
              <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
            </div>
          </a>
        </li>
        <li class="">
          <a>
            <div class="hx-list-action">
              <button class="hx-info is-small"></button>
            </div>
            <div class="hx-list-content">Morbi leo risus</div>
            <div class="hx-list-action">
              <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
            </div>
          </a>
        </li>
        <li class="">
          <a>
            <div class="hx-list-action">
              <button class="hx-info is-small"></button>
            </div>
            <div class="hx-list-content">Phasellus sem tortor, consectetur sit amet ex non, varius rhoncus neque.</div>
            <div class="hx-list-action">
              <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
            </div>
          </a>
        </li>
        <li class="">
          <a>
            <div class="hx-list-action">
              <button class="hx-info is-small"></button>
            </div>
            <div class="hx-list-content">Vestibulum at eros</div>
            <div class="hx-list-action">
              <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<p>Adding textfield into the list</p>
<div class="hx-columns mt-5">
  <div class="hx-column is-4 is-offset-4">
    <div class="hx-card">
      <ul class="hx-list-group">
        <li class="">
          <a>
            Bring the dog out for a walk
          </a>
        </li>
        <li class="">
          <a>
            Clear the rubbish
          </a>
        </li>
        <li class="has-text-field">
          <input type="text" placeholder="Add item here" />
        </li>
        <li class="">
          <a href="#" class="is-gray">
            <i class="hx-icon icon-plus-outline mr-2"></i>
            Add another row
          </a>
        </li>
      </ul>
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

<style lang="scss">
</style>

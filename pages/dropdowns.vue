<template>
  <div id="dropdown">
    <h1 class="hx-title">Dropdown</h1>
    <h2 class="hx-subtitle">Contextual overlay for displaying lists of links or custom components.</h2>

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
  data () {
    return {
      examples: [
        {
          title: 'Contextual menu',
          code: `
<div>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <a class="hx-dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br />
          `
        },
        {
          title: 'Contextual menu with icons',
          code: `
<div>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu hx-dropdown-icon">
    <div class="hx-dropdown-header">Actions</div>
      <a class="hx-dropdown-item" href="#"><i class="hx-icon icon-clock-outline"></i> Book appointment</a>
      <a class="hx-dropdown-item" href="#"><i class="hx-icon icon-doctor-outline"></i> Start consult</a>
       <div class="hx-dropdown-divider"></div>
      <a class="hx-dropdown-item" href="#"><i class="hx-icon icon-send"></i> Send letter</a>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br /><br /><br /><br />
          `
        },
        {
          title: 'Grouped contextual menu',
          code: `
<div>
  <p>Add a header to label sections of actions and/or dividers in any dropdown menu.</p>
  <div class="hx-flex hx-flex-justify-center">
  <div class="hx-dropdown is-open mr-4">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <div class="hx-dropdown-header">Dropdown header</div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <div class="hx-dropdown-divider"></div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
    </div>
  </div>
  <div class="hx-dropdown is-open ml-4">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <div class="hx-dropdown-header">Sort By</div>
      <a class="hx-dropdown-item is-active" href="#"><div class="hx-flex hx-flex-align-center"><i class="hx-icon icon-caret-up"></i>Ascending</div></a>
      <a class="hx-dropdown-item" href="#"><div class="hx-flex hx-flex-align-center"><i class="hx-icon icon-caret-down"></i>Descending</div></a>


      <div class="hx-dropdown-divider"></div>
      <div class="hx-dropdown-header">Filter <a href="">clear filters</a></div>
      <div class="hx-flex hx-flex-column pl-4 pr-4 mt-4">

          <div class="hx-input-group">
              <div class="hx-input-control mb-0">
                  <input id="mhrFilterDateFrom" class="hx-input" type="text" required>
                  <label class="hx-label">From</label>
                  <div class="hx-help">&nbsp;</div>
              </div>
              <i id="fromDateCalendar" class="hx-icon icon-calendar-outline"></i>
          </div>
          <div class="hx-input-group" id="toContainer">
              <div class="hx-input-control mb-0">
                  <input id="mhrFilterDateTo" class="hx-input" type="text" required>
                  <label class="hx-label">To</label>
                  <div class="hx-help">&nbsp;</div>
              </div>
              <i id="toDateCalendar" class="hx-icon icon-calendar-outline"></i>
          </div>
      </div>
    </div>
  </div>
  </div>
</div>

<br /><br /><br /><br /><br /><br /><br />
<br>
<br>
<br>
<br>
<br>
<br>
<br>
          `
        },
        {
          title: 'Position',
          code: `
<div>
  <p>Position menu <code>.is-dropup</code>, <code>.is-left</code>, <code>.is-right</code>. Default is bottom left</p>
  <div class="hx-dropdown is-dropup is-open" style="margin-top:12rem;">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <div class="hx-dropdown-header">Dropdown header</div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
      <div class="hx-dropdown-divider"></div>
      <a class="hx-dropdown-item" href="#">Action</a>
      <a class="hx-dropdown-item" href="#">Another action</a>
    </div>
  </div>
</div>

          `
        },
        {
          title: 'Limit width and/or height',
          code: `
<div>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu has-limited-width has-limited-height">
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 1</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 2</a>
       <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 3</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 4</a>
       <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 5</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 6</a>
       <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 7</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 8</a>
       <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 9</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#" title="Action 10 is really reaally really really reaally really really reaally really long">Action 10 is really reaally really really reaally really really reaally really long</a>
       <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 11</a>
      <a class="hx-dropdown-item is-text-ellipsed" href="#">Action 12</a>
    </div>
  </div>
</div>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
          `
        },
        {
          title: 'Custom',
          code: `
<div>
  <p>Add any component within. No padding, no margins.<br>Styling should be controlled by the component.</p>
  <div class="hx-dropdown is-open">
    <button class="hx-button hx-button-gray hx-button-dropdown" type="button">
      Dropdown button
    </button>
    <div class="hx-dropdown-menu">
      <h1 class="hx-title">Custom Component</h1>
      <h2 class="hx-subtitle">Supports any type of content</h2>
      <hr>
      <table class="table">
        <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
          <th>Col 4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Col 1</td>
          <td>Col 2</td>
          <td>Col 3</td>
          <td>Col 4</td>
          <td>Col 4</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
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

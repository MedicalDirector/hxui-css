<template>
  <div id="forms">
    <h1 class="hx-title">Form</h1>
    <h2 class="hx-subtitle">Forms are the standard way to receive user inputted data. <br>The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.</h2>

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
          title: 'Input field',
          code: `
<p>Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a  <code>.hx-input-control</code> div wrapping your input and label.</p>
<br />
<div class="hx-input-control">
  <input class="hx-input" type="text" required>
  <label class="hx-label">Full Name <sup>*</sup></label>
  <div class="hx-help">Please enter your full name</div>
</div>
<div class="hx-input-control">
  <input class="hx-input" type="password" required>
  <label class="hx-label">Password <sup>*</sup></label>
  <div class="hx-help">Please enter your password</div>
</div>
<div class="hx-input-control">
  <input class="hx-input" type="text" pattern= "[0-9]" required>
  <label class="hx-label">Phone Number <sup>*</sup></label>
  <div class="hx-help">Please enter your phone number</div>
</div>
<div class="hx-input-control is-info">
  <input class="hx-input" type="email" required>
  <label class="hx-label">Email <sup>*</sup></label>
  <div class="hx-help">Info!</div>
</div>
<div class="hx-input-control is-success">
  <input class="hx-input" type="text" required>
  <label class="hx-label">Email <sup>*</sup></label>
  <div class="hx-help">Success!</div>
</div>
<div class="hx-input-control is-warning">
  <input class="hx-input" type="text" required>
  <label class="hx-label">Email <sup>*</sup></label>
  <div class="hx-help">Warning!</div>
</div>
<div class="hx-input-control is-danger">
  <input class="hx-input" type="text" value="joe.chan@medicaldirector.c">
  <label class="hx-label">Email <sup>*</sup></label>
  <div class="hx-help">Danger!</div>
</div>
<div class="hx-input-control">
  <input class="hx-input" type="text" disabled placeholder="I am disabled" required>
  <label class="hx-label">This is Disabled</label>
  <div class="hx-help">Danger!</div>
</div>
<div class="hx-input-group">
  <div class="hx-input-control">
    <input class="hx-input" type="text" required>
    <label class="hx-label">Date <sup>*</sup></label>
    <div class="hx-help">Please select a date</div>
  </div>
   <i class="hx-icon icon-calendar"></i>
</div>
<div class="hx-input-group">
 <i class="hx-icon icon-search"></i>
  <div class="hx-input-control">
    <input class="hx-input" type="text" required>
    <label class="hx-label">Search <sup>*</sup></label>
    <div class="hx-help">Please search by patient name</div>
  </div>
  <div class="hx-button-group">
     <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-close-empty"></i></span></button>
     <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-plus"></i></span></button>
  </div>
</div>
<div class="hx-input-group">
  <i class="hx-loader is-small"><div></div><div></div><div></div><div></div></i>
  <div class="hx-input-control">
    <input class="hx-input" type="text" required>
    <label class="hx-label">Search <sup>*</sup></label>
    <div class="hx-help">Please search by patient name</div>
  </div>
 <i class="hx-loader is-small"><div></div><div></div><div></div><div></div></i>
</div>
<div class="hx-input-group">
 <i class="hx-icon icon-person"></i>
  <div class="hx-input-control">
    <input class="hx-input" type="text" value="JG001" required>
    <label class="hx-label">Username <sup>*</sup></label>
    <div class="hx-help">Please enter your username</div>
  </div>
  <i class="hx-icon icon-check-empty is-medium is-success"></i>
</div>
<div class="hx-input-group">
  <div class="hx-input-control">
    <input class="hx-input" type="text"  required>
    <label class="hx-label">Search <sup>*</sup></label>
    <div class="hx-help">Please enter a search term</div>
  </div>
  <button class="hx-button is-transparent">GO</button>
</div>
  `
        },
        {
          title: 'Textarea',
          code: `
<p>Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a <code>.hx-input-control</code> div wrapping your input and label.</p>
<br />
<div class="hx-input-control">
  <textarea name="textarea-sample" class="hx-textarea" placeholder="Placeholder text... (mandatory)"></textarea>
  <label for="textarea-sample" class="hx-label">Textarea with Placeholder </label>
  <div class="hx-help">Textarea hint (if required)</div>
</div>
<div class="hx-input-control is-info">
  <textarea name="textarea-sample" class="hx-textarea" required>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem quis tincidunt egestas. </textarea>
  <label for="textarea-sample" class="hx-label">Textarea</label>
  <div class="hx-help">Info!</div>
</div>
<div class="hx-input-control is-success">
  <textarea name="textarea-sample" class="hx-textarea" required>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem quis tincidunt egestas. </textarea>
  <label for="textarea-sample" class="hx-label">Textarea</label>
  <div class="hx-help">Success!</div>
</div>
<div class="hx-input-control is-warning">
  <textarea name="textarea-sample" class="hx-textarea" required>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem quis tincidunt egestas.</textarea>
  <label for="textarea-sample" class="hx-label">Textarea</label>
  <div class="hx-help">Warning!</div>
</div>
<div class="hx-input-control is-danger">
  <textarea name="textarea-sample" class="hx-textarea" required>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem quis tincidunt egestas.</textarea>
  <label for="textarea-sample" class="hx-label">Textarea</label>
  <div class="hx-help">Danger!</div>
</div>
          `
        },
        {
          title: 'Select list',
          code: `
<p>Select allows user input through specified options. Make sure you wrap it in a <code>.hx-select-control</code> for proper alignment with other text fields. </p>
<br />
<div class="hx-input-control">
  <div class="hx-select-control">
    <select class="hx-select" id="state">
      <option value="">Please select</option>
      <option>New South Wales</option>
      <option>Victoria</option>
      <option>South Australia</option>
      <option>Tasmania</option>
      <option>Northern Territory</option>
      <option>Western Australia</option>
      <option>Queensland</option>
    </select>
    <label for="state" class="hx-label">Suburb <sup>*</sup></label>
  </div>
</div>
<div class="hx-input-control">
  <div class="hx-select-control">
    <select class="hx-select" disabled>
      <option>This is disabled</option>
      <option>New South Wales</option>
      <option>Victoria</option>
      <option>South Australia</option>
      <option>Tasmania</option>
      <option>Northern Territory</option>
      <option>Western Australia</option>
      <option>Queensland</option>
    </select>
    <label for="" class="hx-label">This is disabled <sup>*</sup></label>
  </div>
</div>
          `
        },
        {
          title: 'Radio buttons',
          code: `
<p>Radio Buttons are used when the user must make only one selection out of a group of items.</p>
<div class="hx-columns">
  <div class="hx-column is-2 is-offset-4">
    <div class="hx-input-control">
      <div class="hx-radio-control">
        <input name="radioGroup1" type="radio" class="hx-radio" id="yes" checked />
        <label for="yes" class="hx-label">Yes</label>
      </div>
      <div class="hx-radio-control">
        <input name="radioGroup1" type="radio" class="hx-radio" id="no"/>
        <label for="no" class="hx-label">No</label>
      </div>
    </div>
    <div class="hx-input-control">
      <div class="hx-radio-control">
        <input name="radioGroup2" type="radio" class="hx-radio" id="true" checked />
        <label for="true" class="hx-label">True</label>
      </div>
      <div class="hx-radio-control">
        <input name="radioGroup2" type="radio" class="hx-radio" id="false"/>
        <label for="false" class="hx-label">False</label>
      </div>
    </div>
  </div>
  <div class="hx-column is-2">
    <div class="hx-input-control">
      <div class="hx-radio-control is-inline">
        <input name="radioGroup3" type="radio" class="hx-radio is-danger" id="male" checked/>
        <label for="male" class="hx-label">Male</label>
      </div>
      <div class="hx-radio-control is-inline">
        <input name="radioGroup3" type="radio" class="hx-radio" id="female"/>
        <label for="female" class="hx-label">Female</label>
      </div>
    </div>
    <div class="hx-input-control">
      <div class="hx-radio-control">
        <input name="radioGroup4" type="radio" class="hx-radio" id="top" checked/>
        <label for="top" class="hx-label">Top</label>
      </div>
      <div class="hx-radio-control">
        <input name="radioGroup4" type="radio" class="hx-radio" id="left" disabled />
        <label for="left" class="hx-label">Disabled</label>
      </div>
      <div class="hx-radio-control">
        <input name="radioGroup4" type="radio" class="hx-radio" id="bottom"/>
        <label for="bottom" class="hx-label">Bottom</label>
      </div>
      <div class="hx-radio-control">
        <input name="radioGroup4" type="radio" class="hx-radio" id="right" disabled />
        <label for="right" class="hx-label">Disabled</label>
      </div>
    </div>
  </div>
</div>
          `
        },
        {
          title: 'Checkboxes',
          code: `
<p>Use checkboxes when looking for yes or no answers. The <code>for</code> attribute is necessary to bind our custom checkbox with the input. Add the input's <code>id</code> as the value of the <code>for</code> attribute of the label.</p>
<div class="hx-columns">
  <div class="hx-column is-2 is-offset-3">
    <div class="hx-input-control">
      <div class="hx-checkbox-control">
        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option1" />
        <label for="option1" class="hx-label">Option 1</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option2" checked />
        <label for="option2" class="hx-label">Option 2</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option3" disabled />
        <label for="option3" class="hx-label">Option 3</label>
      </div>
    </div>
  </div>
  <div class="hx-column is-2">
    <div class="hx-input-control">
      <strong>Notification Settings</strong>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="email" checked />
        <label for="email" class="hx-label">Email</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="slack"/>
        <label for="slack" class="hx-label">Slack</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="hipchat" disabled/>
        <label for="hipchat" class="hx-label">Hipchat</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="sms" disabled />
        <label for="sms" class="hx-label">SMS</label>
      </div>
    </div>
  </div>
  <div class="hx-column is-2">
    <div class="hx-input-control is-small">
      <strong>Small Variation</strong>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="email2" checked />
        <label for="email2" class="hx-label">Email</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="slack2"/>
        <label for="slack2" class="hx-label">Slack</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="hipchat2" disabled/>
        <label for="hipchat2" class="hx-label">Hipchat</label>
      </div>
      <div class="hx-checkbox-control">
        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="sms2" disabled />
        <label for="sms2" class="hx-label">SMS</label>
      </div>
    </div>
  </div>
</div>
          `
        },
        {
          title: 'Sizes',
          code: `
<h5>Medium</h5>
<p>Simply add class <code>.is-medium</code> to the base class <code>.hx-input-control</code>.</p>
<br />
<div class="hx-input-control is-medium">
  <input class="hx-input" type="text" required>
  <label class="hx-label">Full Name <sup>*</sup></label>
  <div class="hx-help">Please enter your full name</div>
</div>
<br />
<h5>Large</h5>
<p>Simply add class <code>.is-large</code> to the base class <code>.hx-input-control</code>.</p>
<br />
<div class="hx-input-control is-large">
<input class="hx-input" type="text" required>
<label class="hx-label">Full Name <sup>*</sup></label>
<div class="hx-help">Please enter your full name</div>
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

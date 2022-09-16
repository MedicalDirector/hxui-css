<template>
  <article class="hx-section scrollable-y">
    <h1 class="hx-title pt-4">Form</h1>
    <h2 class="hx-subtitle">
      Forms are the standard way to receive user inputted data. <br />The
      transitions and smoothness of these elements are very important because of
      the inherent user interaction associated with forms.
    </h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
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
    <input class="hx-input" type="text" value="joe.chan@medicaldirector.com">
    <label class="hx-label">Email <sup>*</sup></label>
    <div class="hx-help hx-flex hx-flex-justify-between">
      <span>Danger!</span>
      <div class="hx-input-control is-small">
        <div class="hx-checkbox-control my-0">
          <input name="saveEmail"  type="checkbox" class="hx-checkbox" id="saveEmail">
          <label for="saveEmail" class="hx-label no-context">Save email?</label>
        </div>
     </div>
     </div>
  </div>
  <div class="hx-input-control is-help-visible">
    <input class="hx-input" type="text" ">
    <label class="hx-label">Quantity <sup>*</sup></label>
    <div class="hx-help">Help text always visible</div>
  </div>
  <div class="hx-input-control">
    <input class="hx-input" type="text" disabled placeholder="I am disabled" required value="Hello there what are you doing">
    <label class="hx-label">This is Disabled</label>
    <div class="hx-help">Danger!</div>
  </div>
  <div class="hx-input-control">
    <input class="hx-input" type="text" disabled required placeholder="Hello there what are you doing">
    <label class="hx-label">This is Disabled, placeholder</label>
    <div class="hx-help">Danger!</div>
  </div>
  <div class="hx-input-control">
    <input class="hx-input" type="text" disabled  >
    <label class="hx-label">This is Disabled,  no placeholder, no value</label>
    <div class="hx-help"></div>
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
    <div class="hx-input-actions">
      <div class="hx-loader is-small"><div></div><div></div><div></div><div></div></div>
      <div class="hx-button-group">
         <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-close-empty"></i></span></button>
         <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-plus"></i></span></button>
      </div>
    </div>
  </div>
  <div class="hx-input-group">
    <div class="hx-input-control">
      <input class="hx-input" type="text" required>
      <label class="hx-label">Search <sup>*</sup></label>
      <div class="hx-help">Please search by patient name</div>
    </div>
    <div class="hx-input-actions"><div class="hx-loader is-small"><div></div><div></div><div></div><div></div></div></div>
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
    <div class="hx-input-actions"><button class="hx-button is-transparent">GO</button></div>
  </div>
    `,
        },
        {
          title: 'Textarea',
          code: `
  <p>Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a <code>.hx-input-control</code> div wrapping your input and label.</p>
  <p>Add the 'required' attribute for mandatory fields.</p>
  <br />
  
  <div class="hx-input-control">
    <textarea name="textarea-sample" class="hx-textarea" placeholder="Enter ingredients"></textarea>
    <label for="textarea-sample" class="hx-label">Ingredients</label>
    <div class="hx-help">Please enter the recipe ingredients</div>
  </div>
  
  <div class="hx-input-control">
    <textarea name="textarea-sample" class="hx-textarea" placeholder="Enter ingredients" required></textarea>
    <label for="textarea-sample" class="hx-label">Ingredients <sup>*</sup></label>
    <div class="hx-help">Please enter the recipe ingredients</div>
  </div>
  
  <div class="hx-input-control">
    <textarea name="textarea-sample" class="hx-textarea ng-invalid ng-dirty" placeholder="Enter ingredients" required></textarea>
    <label for="textarea-sample" class="hx-label">Ingredients <sup>*</sup></label>
    <div class="hx-help">Please enter the recipe ingredients</div>
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
  <div class="hx-input-control is-help-visible">
    <textarea name="textarea-sample" class="hx-textarea" required>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem quis tincidunt egestas.</textarea>
    <label for="textarea-sample" class="hx-label">Textarea - help always visible</label>
    <div class="hx-help">Help text always visible</div>
  </div>
  
  <div class="hx-input-control">
    <textarea name="textarea-sample" class="hx-textarea" placeholder="Enter ingredients" disabled></textarea>
    <label for="textarea-sample" class="hx-label">Ingredients disabled</label>
    <div class="hx-help">Please enter the recipe ingredients</div>
  </div>
            `,
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
    <div class="hx-column is-2">
      <strong>Small Variation</strong>
      <div class="hx-input-control">
        <div class="hx-radio-control is-inline is-small">
          <input name="radioGroup5" type="radio" class="hx-radio" id="left" checked/>
          <label for="left" class="hx-label">Left</label>
        </div>
        <div class="hx-radio-control is-inline is-small">
          <input name="radioGroup5" type="radio" class="hx-radio" id="right"/>
          <label for="right" class="hx-label">Right</label>
        </div>
      </div>
      <div class="hx-input-control">
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="top" checked/>
          <label for="top" class="hx-label">Top</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="left" disabled />
          <label for="left" class="hx-label">Disabled</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="bottom"/>
          <label for="bottom" class="hx-label">Bottom</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="right" disabled />
          <label for="right" class="hx-label">Disabled</label>
        </div>
      </div>
    </div>
     <div class="hx-column is-danger is-2">
      <strong>Contextual</strong>
      <div class="hx-input-control">
        <div class="hx-radio-control is-inline is-small">
          <input name="radioGroup5" type="radio" class="hx-radio" id="left" checked/>
          <label for="left" class="hx-label">Left</label>
        </div>
        <div class="hx-radio-control is-inline is-small">
          <input name="radioGroup5" type="radio" class="hx-radio" id="right"/>
          <label for="right" class="hx-label">Right</label>
        </div>
      </div>
      <div class="hx-input-control">
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="top" checked/>
          <label for="top" class="hx-label">Top</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="left" disabled />
          <label for="left" class="hx-label">Disabled</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="bottom"/>
          <label for="bottom" class="hx-label">Bottom</label>
        </div>
        <div class="hx-radio-control is-small">
          <input name="radioGroup6" type="radio" class="hx-radio" id="right" disabled />
          <label for="right" class="hx-label">Disabled</label>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Checkboxes',
          code: `
  <p>Use checkboxes when looking for yes or no answers. The <code>for</code> attribute is necessary to bind our custom checkbox with the input. Add the input's <code>id</code> as the value of the <code>for</code> attribute of the label.</p>
  <p>Checkboxes are in an <code>indeterminate</code> state when the
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate" target="_blank">indeterminate property of a checkbox is set to true by JavaScript</a>.
  Alternatively, you can add/remove the <code>is-indeterminate</code> class.</p>
  
  <div class="hx-columns">
    <div class="hx-column is-3">
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
        <div class="hx-checkbox-control">
          <input name="checkboxGroup1" type="checkbox" class="hx-checkbox is-indeterminate" id="option4"/>
          <label for="option4" class="hx-label">Option 4 Indeterminate</label>
        </div>
      </div>
    </div>
    <div class="hx-column is-3">
      <div class="hx-input-control">
        <strong>Notification Settings</strong>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="email2" checked />
          <label for="email2" class="hx-label is-text-multiline">You can have a multi-line label by applying the <strong>.is-text-multiline</strong> class</label>
        </div>
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
    <div class="hx-column is-3">
      <div class="hx-input-control is-small">
        <strong>Small Variation</strong>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox" id="s1" checked />
          <label for="s1" class="hx-label is-text-multiline">You can have a multi-line label by applying the <strong>.is-text-multiline</strong> class</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox" id="s2" checked />
          <label for="s2" class="hx-label">Email</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox " id="s3"/>
          <label for="s3" class="hx-label">Slack</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox " id="s4" disabled/>
          <label for="s4" class="hx-label">Hipchat</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox" id="s5" disabled />
          <label for="s5" class="hx-label">SMS</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroupSmall" type="checkbox" class="hx-checkbox is-indeterminate" id="small-indetermindate"/>
          <label for="small-indetermindate" class="hx-label">Small indeterminate</label>
        </div>
      </div>
    </div>
  
     <div class="hx-column is-3">
      <div class="hx-input-control is-danger is-small">
        <strong>Contextual</strong>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup22" type="checkbox" class="hx-checkbox" id="c1" />
          <label for="c1" class="hx-label is-text-multiline">You can have a multi-line label by applying the <strong>.is-text-multiline</strong> class</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup22" type="checkbox" class="hx-checkbox" id="c2"  />
          <label for="c2" class="hx-label">Email</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="c3"/>
          <label for="c3" class="hx-label">Slack</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="c4" disabled/>
          <label for="c4" class="hx-label">Hipchat</label>
        </div>
        <div class="hx-checkbox-control">
          <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="c5" disabled />
          <label for="c5" class="hx-label">SMS</label>
        </div>
      </div>
    </div>
  
  </div>
            `,
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
            `,
        },
        {
          title: 'Multiple form elements on one line',
          code: `
            <div class="hx-columns">
    <div class="hx-column is-1">
      <div class="hx-input-group">
        <div class="hx-input-control">
          <input class="hx-input" maxlength="2">
          <label class="hx-label"></label>
          <div class="hx-help"></div>
        </div>
        <div class="hx-input-actions">
          h
        </div>
      </div>
    </div>
    <div class="hx-column is-1">
      <div class="hx-input-group">
        <div class="hx-input-control">
          <input class="hx-input" maxlength="3">
          <label class="hx-label"></label>
          <div class="hx-help"></div>
        </div>
        <div class="hx-input-actions">
          m
        </div>
      </div>
    </div>
    <div class="hx-divider"></div>
    <div class="hx-column is-9">
      <div class="hx-input-control mt-2">
        <div class="hx-checkbox-control my-0">
          <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option-multiline">
          <label for="option-multiline" class="hx-label">Option 1</label>
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

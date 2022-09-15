<template>
  <fragment>
    <h1 class="hx-title">Card</h1>
    <h2 class="hx-subtitle">An all-around flexible and composable component</h2>

    <hr />

    <p>
      The <strong>card</strong> component comprises several elements that you
      can mix and match:
    </p>
    <ul>
      <li>
        <code>hx-card</code>: the main container
        <ul>
          <li>
            <code>hx-card-header</code>: a horizontal bar with a shadow
            <ul>
              <li>
                <code>hx-card-header-title</code>: a left-aligned bold text
              </li>
              <li>
                <code>hx-card-header-icon</code>: a placeholder for an icon
              </li>
            </ul>
          </li>
          <li>
            <code>hx-card-image</code>: a fullwidth container for a reponsive
            image
          </li>
          <li>
            <code>hx-card-content</code>: a multi-purpose container for
            <em>any</em> other element
          </li>
          <li>
            <code>hx-card-footer</code>: a horizontal list of controls
            <ul>
              <li><code>hx-card-footer-item</code>: a repeatable list item</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <br />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import ExpandingCodeExample from '@/components/ExpandingCodeExample'
export default {
  components: {
    ExpandingCodeExample,
    Fragment,
  },
  data() {
    return {
      examples: [
        {
          title: 'Default card',
          code: `<div class="hx-columns">
    <div class="hx-column is-one-third is-offset-one-third">
      <div class="hx-card">
        <div class="hx-card-content">
          <div>
            <div><strong class="h4">Choi</strong></div>
            <div>Ella</div>
            <br>
            <i class="hx-icon icon-clock-outline is-small"></i> <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </div>
  </div>`,
        },
        {
          title: 'Border highlighted card',
          code: `<div class="hx-columns">
    <div class="hx-column">
      <p>Add <code>.highlight</code> to the card for border highlighted card.</p>
      <p>You can also add modifiers for different colour border.</p>
      <ul>
        <li><code>is-info</code></li>
        <li><code>is-success</code></li>
        <li><code>is-caution</code></li>
        <li><code>is-warning</code></li>
        <li><code>is-danger</code></li>
      </ul>
    </div>
    <div class="hx-column">
      <div class="hx-columns">
        <div class="hx-column is-half">
          <div class="hx-card highlight info">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight success">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight warning">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight caution">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight danger">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
        },
        {
          title: 'Border sizes',
          code: `<div class="hx-columns">
    <div class="hx-column">
      <p>You can add modifiers for different border sizes.</p>
      <ul>
        <li><code>is-small</code></li>
        <li><code>is-medium</code></li>
        <li><code>is-large</code></li>
      </ul>
    </div>
    <div class="hx-column">
      <div class="hx-columns">
        <div class="hx-column is-half">
          <div class="hx-card highlight is-small">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight is-large">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
        },
        {
          title: 'Raised',
          code: `
  <div class="hx-columns">
    <div class="hx-column">
      <p>Add <code>.raised</code> modifier class to add depth to cards.</p>
      <ul>
        <li><code>hovered</code></li>
        <li><code>focused</code></li>
        <li><code>active</code></li>
      </ul>
    </div>
    <div class="hx-column">
      <div class="hx-columns">
        <div class="hx-column is-half">
          <div class="hx-card raised hover">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card raised focus">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card raised active">
            <div class="hx-card-content">
              <div class="">
                <div><strong>Choi</strong></div>
                <div>Ella</div>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            `,
        },
        {
          title: 'Using HxUI grid',
          code: `
  <div class="hx-columns">
    <div class="hx-column">
      <p>You can create complex layouts using HxUI Grid and Form in Card.</p>
    </div>
    <div class="hx-column is-two-thirds">
      <div class="hx-columns">
        <div class="hx-column is-half">
          <div class="hx-card highlight is-warning">
            <div class="hx-card-content">
              <div class="hx-columns">
                <div class="hx-column">
                    <p>
                      <strong>09:37</strong> <a href="#">@Liz</a>: Please call James Meadows asap re: his test result. 2nd time he has called.
                    </p>
                </div>
              </div>
                <div class="hx-input-control is-warning">
                  <input class="hx-input" type="text" placeholder="Enter your notes">
                  <label class="hx-label">Add Notes</label>
                </div>
                <button class="hx-button warning fullwidth">
                  <span class="hx-icon-control">
                    <i class="hx-icon icon-plus-empty"></i>
                  </span>
                  <span>Add</span>
                </button>
            </div>
          </div>
        </div>
        <div class="hx-column is-half">
          <div class="hx-card highlight is-info not-scrollable">
            <div class="hx-card-content has-padding-small">
              <div class="hx-columns">
                <div class="hx-column is-2">
                  <div class="hx-card-icon">
                    <i class="hx-icon icon-calendar-outline is-large"></i>
                  </div>
                </div>
                <div class="hx-column"><p>Lunch/catch-up on patient notes</p></div>
              </div>
            </div>
          </div>
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

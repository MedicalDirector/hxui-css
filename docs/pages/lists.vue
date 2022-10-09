<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Lists</h1>
      <h2 class="hx-subtitle">
        A simple configurable way of using <code>ul</code> list.
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
          title: 'Sizes',
          code: `
  <p>The most basic list group is an unordered list with list items and the proper classes</p>
  <div class="hx-columns">
    <div class="hx-column">
      <h6>Normal list</h6>
      <div class="hx-card">
        <ul class="hx-list-group">
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
  
    <div class="hx-column">
      <h6>Narrow list</h6>
      <div class="hx-card">
        <ul class="hx-list-group is-narrow">
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
  
    <div class="hx-column">
    <h6>Extra narrow list</h6>
      <div class="hx-card">
        <ul class="hx-list-group is-xnarrow">
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
  
  </div>`,
        },
        {
          title: 'List group',
          code: `
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
            `,
        },
      ],
    }
  },
}
</script>

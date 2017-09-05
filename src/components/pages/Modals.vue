<template>
  <div id="modals">
    <h1 class="hx-title">Modal Dialog</h1>
    <h2 class="hx-subtitle">A classic modal overlay, in which you can include any content you want</h2>
    <hr>
    <h1 class="h3">Simple Modal Dialog</h1>
    <div class="hx-columns">
      <div class="hx-column">
        <p>The modal structure is very simple:</p>
        <ul>
          <li>
            <code>.hx-modal</code>: the main container
            <ul>
              <li>
                <code>.hx-modal-background</code>: a transparent overlay that can act as a click target to close the modal
              </li>
              <li>
                <code>.hx-modal-content</code>: a horizontally and verticaly centered container, with a maximum width of 640px, in which you can include <em>any</em> content
              </li>
              <li>
                <code>.hx-modal-close</code>: a simple cross located in the top right corner
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="hx-column is-offset-1">
        <div class="doc-modal-demo">
          <div class="hx-modal is-active is-demo">
            <div class="hx-modal-content">
              <div class="hx-card">
                <div class="hx-card-content">
                    <p>
                      <strong>09:37</strong> <a href="#">@Liz</a>: Please call James Meadows asap re: his test result. 2nd time he has called.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                </div>
              </div>
            </div>
            <button class="hx-modal-close"></button>
          </div>
      </div>
    </div>
  </div>

  <br>

    <h1 class="h3">Modal Card Dialog</h1>
    <p>If you want a more classic modal, with a head, a body and a foot, use the modal-card.</p>
    <div class="hx-columns">
      <div class="hx-column">
        <p>The modal card dialog structure:</p>
        <ul>
          <li>
            <code>.hx-modal</code>: the main container
            <ul>
              <li>
                <code>.hx-modal-background</code>: a transparent overlay that can act as a click target to close the modal
              </li>
              <li>
                <code>.hx-modal-card</code>: a modal card dialog container
              </li>
              <li>
                <code>.hx-modal-card-head</code>: a modal card dialog header
              </li>
              <li>
                <code>.hx-modal-card-content</code>: a horizontally and verticaly centered container, with a maximum width of 640px, in which you can include <em>any</em> content
              </li>
              <li>
                <code>.hx-modal-card-foot</code>: a modal card dialog footer
              </li>
              <li>
                <code>.delete</code>: a simple cross located in the top right corner
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="hx-column is-offset-1">
        <div class="doc-modal-demo">
          <div class="hx-modal is-active is-demo">
            <div class="hx-modal-card">
              <header class="hx-modal-card-head">
                <h1 class="hx-modal-card-title">HxUI Modal Title</h1>
                <button class="delete"></button>
              </header>
              <section class="hx-modal-card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
              </section>
              <footer class="hx-modal-card-foot">
                <a class="hx-button is-primary">Save changes</a>
                <a class="hx-button">Cancel</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'

export default {
  data () {
    return {

    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="css">
</style>

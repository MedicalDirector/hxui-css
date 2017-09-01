<template>
  <div id="cards">
    <h1 class="hx-title">Card</h1>
    <h2 class="hx-subtitle">An all-around flexible and composable component</h2>

    <hr>

    <section class="hx-section">

      <p>The <strong>card</strong> component comprises several elements that you can mix and match:</p>
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
                <code>hx-card-image</code>: a fullwidth container for a reponsive image
              </li>
              <li>
                <code>hx-card-content</code>: a multi-purpose container for <em>any</em> other element
              </li>
              <li>
                <code>hx-card-footer</code>: a horizontal list of controls
                <ul>
                  <li>
                    <code>hx-card-footer-item</code>: a repeatable list item
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
    </section>
    <hr>
    <section class="hx-section">
      <h3>Default Card Style</h3>
      <div class="hx-columns">
        <div class="hx-column">
          <p>The default card style.</p>
        </div>
        <div class="hx-column is-one-third">
          <p>Example</p>
          <div class="hx-card">
            <div class="hx-card-content">
              <div>
                <div><strong class="h4">Choi</strong></div>
                <div>Ella</div>
                <br>
                <small><span class="oi" data-glyph="clock"></span>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>

        <div class="hx-column">
          <p>Code</p>
          <pre><code class="language-markup"><xmp>
      <div class="hx-card">
        <div class="hx-card-content">
          <div>
            <div><strong class="h4">Choi</strong></div>
            <div>Ella</div>
            <br>
            <small>
              <span class="oi" data-glyph="clock"></span>
              11:09 PM - 1 Jan 2016
            </small>
            </div>
          </div>
        </div>
            </xmp></code></pre>
          </div>
        </div>
      </section>

      <hr>

      <section class="hx-section">
        <h3>Border Highlighted Card</h3>
        <div class="hx-columns">
          <div class="hx-column">
            <p>Add <code>is-border-highlighted</code> to the card for border highlighted card.</p>
            <p>You can also add modifiers for different colour border.</p>
            <ul>
              <li><code>is-info</code></li>
              <li><code>is-success</code></li>
              <li><code>is-warning</code></li>
              <li><code>is-danger</code></li>
            </ul>
          </div>

          <div class="hx-column">
            <div class="hx-columns">

              <div class="hx-column is-half">
                <div class="hx-card is-border-highlighted is-info">
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
                <div class="hx-card is-border-highlighted is-success">
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
                <div class="hx-card is-border-highlighted is-warning">
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
                <div class="hx-card is-border-highlighted is-danger">
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
      </section>

      <section class="hx-section">
        <h3>Border Sizes</h3>
        <div class="hx-columns">
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
                <div class="hx-card is-border-highlighted is-small">
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
                <div class="hx-card is-border-highlighted is-medium">
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
                <div class="hx-card is-border-highlighted is-large">
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
      </section>
      <hr>
      <section class="hx-section">
        <h3>Card States</h3>
        <div class="hx-columns">
          <div class="hx-column">
            <p>You can add modifiers for different border states.</p>
            <ul>
              <li><code>is-hovered</code></li>
              <li><code>is-focused</code></li>
              <li><code>is-active</code></li>
            </ul>
          </div>

          <div class="hx-column">
            <div class="hx-columns">
              <div class="hx-column is-half">
                <div class="hx-card is-border-highlighted is-hovered">
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
                <div class="hx-card is-border-highlighted is-focused">
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
                <div class="hx-card is-border-highlighted is-active">
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
      </section>

      <hr>
      <section class="hx-section">
        <h3>Card Layout using HxUI Grid</h3>
        <div class="hx-columns">
          <div class="hx-column">
            <p>You can create complex layouts using HxUI Grid and Form in Card.</p>
          </div>
          <div class="hx-column is-two-thirds">
            <div class="hx-columns">
              <div class="hx-column is-half">
                <div class="hx-card is-border-highlighted is-warning">
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
                      <a class="hx-button is-warning is-fullwidth">
                        <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>
                        <span>Add</span>
                      </a>
                  </div>
                </div>
              </div>

              <div class="hx-column is-half">
                <div class="hx-card is-border-highlighted is-info">
                  <div class="hx-card-content has-padding-small">
                    <div class="hx-columns">
                      <div class="hx-column is-2">
                        <div class="hx-card-icon">
                          <i class="material-icons">local_dining</i>
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
      </section>
      <br>
      <hr>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

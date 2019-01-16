<template>
  <div id="pages">
    <h1 class="hx-title">Panel Header</h1>
    <h2 class="hx-subtitle">The panel header is a header organism that should be placed at the start of a vertical panel.</h2>
    <p>The panel header consists of a main heading  (with icon, h1 title and optional h5 subtitle) and optional back link, action items and input field.</p>
    <hr>

    <h4>Panel Header - Type 1</h4>
    <p>This header starts with an optional top row that contains the back link and/or action items. The next row contains the main heading, which consists of an icon, h1 title and optional subtitle.</p>
    <p><small>Helix note: Add the has-fixed-height class to the hx-panel-header for a fixed header height of 110px. The base body/html font is 15px rather than 16px as used this document.</small></p>
    <h6 class="mb-3">Examples</h6>
    <div class="hx-columns">
      <div class="hx-column">
        <div class="hx-panel mock-panel">

          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-back">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                  Back
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small">Action</a>
                <i class="hx-icon icon-close-empty icon-close-empty--larger"></i>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-medications is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Medication
                  </h1>
                  <h5>
                    Subtitle subtitling
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="hx-column">
        <div class="hx-panel mock-panel">

          <div class="hx-panel-header has-fixed-height">

            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">

                <i class="hx-icon icon-pathology-outline is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Pathology Request
                  </h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="hx-columns">
      <div class="hx-column">

        <div class="hx-panel mock-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-back">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                  Letter Creator
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <i class="hx-icon icon-external-link"></i>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-file-outline is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Blank Letter
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="hx-column">
        <div class="hx-panel mock-panel">

          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-woman is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Obstetrics
                  </h1>
                  <h5>
                    No current pregnancy
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    <pre v-highlightjs ref="code"><code class="html">
      {{ headerA }}
    </code></pre>

    <h4 class="mt-6">Panel Header - Type 2</h4>
    <p>This header consists of two rows - the first row contains the main heading (icon and h1 title, plus optional action buttons/icons) and the second row contains a full width input field.
      Each row takes up about half the height of the panel.</p>
    <div class="hx-columns">
      <div class="hx-column">
        <div class="hx-panel mock-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-prescription is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Prescription
                  </h1>
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small">Monograph</a>
                <a class="hx-button is-small">CMI</a>
                <a class="hx-button is-small">PI</a>
              </div>
            </div>
            <div class="hx-panel-header-row has-search hx-flex-column">
              <div class="hx-input-group">
                <i class="hx-icon icon-search"></i>
                <div class="hx-input-control">
                  <input class="hx-input" type="text" required="">
                  <label class="hx-label"></label>
                  <div class="hx-help"></div>
                </div>
                <div class="hx-input-actions">
                  <div class="hx-button-group">
                    <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-close-empty"></i></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hx-column">
        <div class="hx-panel mock-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-injection is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Immunisation
                  </h1>
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <div class="hx-button-group">
                  <a class="hx-button is-small">
                    Record Immunisation
                  </a>
                  <a class="hx-button is-small">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>
            <div class="hx-panel-header-row has-search hx-flex-column">
              <div class="hx-input-group">
                <i class="hx-icon icon-search"></i>
                <div class="hx-input-control">
                  <input class="hx-input" type="text" required="">
                  <label class="hx-label"></label>
                  <div class="hx-help"></div>
                </div>
                <div class="hx-input-actions">
                  <div class="hx-button-group">
                    <button class="hx-button is-flat"><span class="hx-icon-control"><i class="icon icon-close-empty"></i></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hx-columns">
      <div class="hx-column">
        <div class="hx-panel mock-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-file-outline is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Letter Creator
                  </h1>
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <i class="hx-icon icon-close-empty icon-close-empty--larger"></i>
              </div>
            </div>
            <div class="hx-panel-header-row has-search hx-flex-column">
              <div class="hx-input-group">
                <i class="hx-icon icon-search"></i>
                <div class="hx-input-control">
                  <input class="hx-input" type="text" required="">
                  <label class="hx-label"></label>
                  <div class="hx-help"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hx-column"></div>
    </div>

    <pre v-highlightjs ref="code"><code class="html">
      {{ headerB }}
    </code></pre>

  </div>
</template>

<script>
export default {
  data () {
    return {
      headerA: `
       <div class="hx-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-back">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                  Go back
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small">Action</a>
                <i class="hx-icon icon-close-empty icon-close-empty--larger"></i>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-medications is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Medication
                  </h1>
                  <h5>
                    Subtitle subtitling
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      headerB: `
        <div class="hx-panel">
          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-injection is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <h1>
                    Immunisation
                  </h1>
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <div class="hx-button-group">
                  <a class="hx-button is-small">
                    Record Immunisation
                  </a>
                  <a class="hx-button is-small">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>
            <div class="hx-panel-header-row has-search hx-flex-column">
              <div class="hx-input-group">
                <i class="hx-icon icon-search"></i>
                <div class="hx-input-control">
                  <input class="hx-input" type="text" required="">
                  <label class="hx-label"></label>
                  <div class="hx-help"></div>
                </div>
                <div class="hx-input-actions">
                  <div class="hx-button-group">
                    <button class="hx-button is-flat">
                      <span class="hx-icon-control"><i class="icon icon-close-empty"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
    }
  }
}
</script>

<style lang="css">
  .mock-panel {
    border: 1px solid #dedede;
    min-width: 480px;
    height: 40vh;
  }
</style>

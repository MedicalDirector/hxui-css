<template>
  <div id="panel-headers">
    <h1 class="hx-title">Panel Header</h1>
    <h2 class="hx-subtitle">The panel header is a header organism that should be placed at the start of a vertical panel.</h2>
    <p>The panel header consists of a main heading  (with icon, h2 title and optional h5 subtitle) and optional back link, action items and input field.</p>
    <hr>

    <h3>Panel Header - Type 1</h3>
    <p>This header starts with an optional top row that contains the back link and/or action items. The next row contains the main heading, which consists of an icon, h2 title and optional subtitle.</p>
    <p><small>Helix note: Add the has-fixed-height class to the hx-panel-header for a fixed header height of 110px. The base body/html font is 15px rather than 16px as used this document.</small></p>
    <h4>Examples</h4>
    <div class="hx-columns">
      <div class="hx-column">
        <div class="hx-panel mock-panel">

          <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <a class="hx-button hx-panel-back is-flat is-small pl-1">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                Back
                </div>
              </a>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small">Action</a>
                <a class="hx-button is-small is-white px-1">
                  <i class="hx-icon is-medium icon-close-empty"></i>
                </a>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-medications is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <div class="h2">
                    Medication
                  </div>
                  <div class="h5">
                    Subtitle subtitling
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

                <i class="hx-icon icon-pathology-outline is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <div class="h2">
                    Pathology Request
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
              <a class="hx-button hx-panel-back is-flat is-small pl-1">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                  Letter Generator
                </div>
              </a>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small is-white px-1">
                  <i class="hx-icon icon-external-link"></i>
                </a>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-file-outline is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <div class="h2">
                    Blank Letter
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
                <i class="hx-icon icon-woman is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <div class="h2">
                    Obstetrics
                  </div>
                  <div class="h5">
                    No current pregnancy
                  </div>
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

    <h3>Panel Header - Type 2</h3>
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
                  <div class="h2">
                    Prescription
                  </div>
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
                  <div class="h2">
                    Immunisation
                  </div>
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
                  <div class="h2">
                    Letter Creator
                  </div>
                </div>
              </div>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small is-white px-1">
                  <i class="hx-icon is-medium icon-close-empty"></i>
                </a>
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
       <div class="hx-panel-header has-fixed-height">
            <div class="hx-panel-header-row">
              <a class="hx-button hx-panel-back is-flat is-small pl-1">
                <i class="hx-icon icon-angle-left"></i>
                <div class="hx-panel-back-text">
                Back
                </div>
              </a>
              <div class="hx-panel-header-row-actions">
                <a class="hx-button is-small">Action</a>
                <a class="hx-button is-small is-white px-1">
                  <i class="hx-icon is-medium icon-close-empty"></i>
                </a>
              </div>
            </div>
            <div class="hx-panel-header-row">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-medications is-heading-icon"></i>
                <div class="hx-panel-header-heading-text">
                  <div class="h2">
                    Medication
                  </div>
                  <div class="h5">
                    Subtitle subtitling
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
                  <div class="h2">
                    Immunisation
                  </div>
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

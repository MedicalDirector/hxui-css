<template>
  <article class="hx-section scrollable-y">
    <div class="prose contents">
      <h1 class="hx-title pt-4">Panel Header</h1>
      <h2 class="hx-subtitle">
        The Panel Header is a header organism that is placed at the start of a
        <a href="/panel">Panel</a> template.
      </h2>
      <p>
        The panel header consists of a main heading (with icon, h2 heading and
        optional subheading) and optional back link, action items and input
        field.
      </p>
      <hr />

      <h3>Panel Header - Type 1</h3>
      <p>
        This header starts with an optional top row that contains the back link
        and/or action items. The next row contains the main heading, which
        consists of an icon, h2 subheading and optional subheading.
      </p>
      <p>
        <small
          >Helix note: Add the has-fixed-height class to the hx-panel-header for
          a fixed header height of 110px. The base body/html font is 15px rather
          than 16px as used this document.</small
        >
      </p>

      <h4>Examples</h4>
    </div>

    <div class="grid laptop:grid-cols-2 gap-4">
      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <a class="hx-button hx-panel-back is-flat is-small pl-1">
              <i class="hx-icon icon-angle-left"></i>
              <div class="hx-panel-back-text">Back</div>
            </a>
            <div class="hx-panel-header-row-actions">
              <a class="hx-button is-small">Action</a>
              <a class="hx-button is-small is-white px-1">
                <i class="hx-icon is-medium icon-close-empty"></i>
              </a>
            </div>
          </div>
          <div class="hx-panel-header-row">
            <div class="hx-flex-column">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-prescription is-heading-icon"></i>
                <div class="h2">Prescription</div>
              </div>
              <div class="hx-panel-header-subheading">
                Prescription subheading
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <div class="hx-panel-header-heading">
              <i class="hx-icon icon-pathology-outline is-heading-icon"></i>
              <div class="h2">Pathology Request</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <a class="hx-button hx-panel-back is-flat is-small pl-1">
              <i class="hx-icon icon-angle-left"></i>
              <div class="hx-panel-back-text">Letter Generator</div>
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
              <div class="h2">Blank Letter</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <div class="hx-flex-column">
              <div class="hx-panel-header-heading">
                <i class="hx-icon icon-woman is-heading-icon"></i>
                <div class="h2">Obstetrics</div>
              </div>
              <div class="hx-panel-header-subheading">No current pregnancy</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <pre v-highlightjs ref="code"><code class="html">{{ headerA }}</code></pre>

    <div class="prose contents">
      <h3>Panel Header - Type 2</h3>
      <p>
        This header consists of two rows - the first row contains the main
        heading (icon and h2 heading, plus optional action buttons/icons) and
        the second row contains a full width input field. Each row takes up
        about half the height of the panel.
      </p>
    </div>

    <div class="grid laptop:grid-cols-2 gap-4">
      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <div class="hx-panel-header-heading">
              <i class="hx-icon icon-prescription is-heading-icon"></i>
              <div class="h2">Prescription</div>
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
                <input class="hx-input" type="text" required="" />
                <label class="hx-label"></label>
                <div class="hx-help"></div>
              </div>
              <div class="hx-input-actions">
                <div class="hx-button-group">
                  <button class="hx-button is-flat">
                    <span class="hx-icon-control"
                      ><i class="icon icon-close-empty"></i
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <div class="hx-panel-header-heading">
              <i class="hx-icon icon-injection is-heading-icon"></i>
              <div class="h2">Immunisation</div>
            </div>
            <div class="hx-panel-header-row-actions">
              <div class="hx-button-group">
                <a class="hx-button is-small"> Record Immunisation </a>
                <a class="hx-button is-small"> View Schedule </a>
              </div>
            </div>
          </div>
          <div class="hx-panel-header-row has-search hx-flex-column">
            <div class="hx-input-group">
              <i class="hx-icon icon-search"></i>
              <div class="hx-input-control">
                <input class="hx-input" type="text" required="" />
                <label class="hx-label"></label>
                <div class="hx-help"></div>
              </div>
              <div class="hx-input-actions">
                <div class="hx-button-group">
                  <button class="hx-button is-flat">
                    <span class="hx-icon-control"
                      ><i class="icon icon-close-empty"></i
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hx-panel mock-panel">
        <div class="hx-panel-header has-fixed-height">
          <div class="hx-panel-header-row">
            <div class="hx-panel-header-heading">
              <i class="hx-icon icon-file-outline is-heading-icon"></i>
              <div class="h2">Letter Creator</div>
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
                <input class="hx-input" type="text" required="" />
                <label class="hx-label"></label>
                <div class="hx-help"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <pre v-highlightjs ref="code"><code class="html">{{ headerB }}</code></pre>
  </article>
</template>

<script>
export default {
  data() {
    return {
      headerA: `<div class="hx-panel-header has-fixed-height">
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
    <div class="hx-flex-column">
      <div class="hx-panel-header-heading">
        <i class="hx-icon icon-prescription is-heading-icon"></i>
        <div class="h2">
          Prescription
        </div>
      </div>
      <div class="hx-panel-header-subheading">
        Prescription subheading
      </div>
    </div>
  </div>
</div>`,
      headerB: `<div class="hx-panel">
  <div class="hx-panel-header has-fixed-height">
    <div class="hx-panel-header-row">
      <div class="hx-panel-header-heading">
        <i class="hx-icon icon-file-outline is-heading-icon"></i>
        <div class="h2">
          Letter Creator
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
</div>`,
    }
  },
}
</script>

<style lang="scss" scoped>
.mock-panel {
  border: 1px solid #dedede;
  min-width: 480px;
  height: 40vh;
}

pre {
  margin: 0;

  code {
    border-radius: 2px;
  }
}
</style>

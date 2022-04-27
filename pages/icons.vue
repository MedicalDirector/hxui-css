<template>
  <div id="icons">
    <h1 class="hx-title">Icons</h1>
    <h2 class="hx-subtitle">Hx/Ui comes with its own custom icons.</h2>
    <hr />

    <section class="hx-section">
      <div class="hx-columns">
        <div class="hx-column is-6-widescreen is-offset-3-widescreen">
          <div class="hx-input-control has-text-centered">
            <input class="hx-input" type="text" required v-model="searchTerm" />
            <label class="hx-label">
              <i class="hx-icon icon-search is-small"></i>
              Search icons
            </label>
          </div>
        </div>
      </div>
    </section>

    <section class="hx-section content is-small">
      <div class="hx-columns is-mobile">
        <div
          class="hx-column is-2 has-text-centered"
          v-for="icon in filterResults"
          :key="icon.name"
        >
          <i class="hx-icon is-large" :class="'icon-' + icon.name"></i>
          <p v-text="icon.name"></p>
        </div>
      </div>
    </section>

    <section class="hx-section content is-small">
      <h3>Legacy Icons</h3>
      <div class="hx-columns is-mobile">
        <div
          class="hx-column is-2 has-text-centered"
          v-for="icon in iconsLegacy"
          :key="icon.name"
        >
          <i class="hx-icon is-large" :class="'icon-' + icon.name"></i>
          <p v-text="icon.name"></p>
        </div>
      </div>
    </section>

    <hr />

    <section class="hx-section">
      <p>
        Because the icons can take a few seconds to load, and because you want
        control over the space the icons will take, you can use the icon class
        as a container:
      </p>

      <p>Usage</p>

      <pre v-highlightjs><code class="html">{{ code }}</code></pre>

      <p>
        The <code>icon</code> container will take up exactly
        <strong>1.5rem x 1.5rem</strong>. The icon itself is sized at
        <strong>21px</strong>.
      </p>
    </section>

    <hr />

    <section class="hx-section">
      <h3>Sizes</h3>
      <p>
        Font Awesome icons use a font-size of 28px by default, and are best
        rendered when using multiples of 7. The icon container is always
        slightly bigger than the font-size used:
      </p>
      <table class="hx-table is-striped">
        <thead>
          <tr>
            <th>Class</th>
            <th></th>
            <th>Font-size</th>
            <th>Container size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hx-icon is-small</code></td>
            <td class="has-text-centered">
              <i class="hx-icon icon-helix is-small"></i>
            </td>
            <td>14px</td>
            <td>1rem x 1rem</td>
          </tr>
          <tr>
            <td><code>hx-icon</code></td>
            <td class="has-text-centered">
              <i class="hx-icon icon-helix"></i>
            </td>
            <td>21px</td>
            <td>1.5rem x 1.5rem</td>
          </tr>
          <tr>
            <td><code>hx-icon is-medium</code></td>
            <td class="has-text-centered">
              <i class="hx-icon icon-helix is-medium"></i>
            </td>
            <td>28px</td>
            <td>2rem x 2rem</td>
          </tr>
          <tr>
            <td><code>hx-icon is-large</code></td>
            <td class="has-text-centered">
              <i class="hx-icon icon-helix is-large"></i>
            </td>
            <td>42px</td>
            <td>3rem x 3rem</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    const listIcons = [
      { name: 'lock-outline' },
      { name: 'lock' },
      { name: 'send-outline' },
      { name: 'batch-outline' },
      { name: 'batch' },
      { name: 'bell-outline' },
      { name: 'bell' },
      { name: 'body-outline' },
      { name: 'body' },
      { name: 'box-outline' },
      { name: 'box' },
      { name: 'appointment-outline' },
      { name: 'calendar-outline' },
      { name: 'appointment' },
      { name: 'calendar' },
      { name: 'chat-bubble-outline' },
      { name: 'chat-bubble' },
      { name: 'check-empty' },
      { name: 'check-outline' },
      { name: 'check' },
      { name: 'clock-outline' },
      { name: 'clock' },
      { name: 'close-empty' },
      { name: 'close-outline' },
      { name: 'close' },
      { name: 'cloud-download-outline' },
      { name: 'cloud-download' },
      { name: 'cloud-upload-outline' },
      { name: 'cloud-upload' },
      { name: 'email-outline' },
      { name: 'email' },
      { name: 'exclamation-outline' },
      { name: 'alert-outline' },
      { name: 'exclamation' },
      { name: 'alert' },
      { name: 'file-outline' },
      { name: 'file' },
      { name: 'filing-outline' },
      { name: 'filing' },
      { name: 'flag-outline' },
      { name: 'flag' },
      { name: 'flask' },
      { name: 'flask-reverse' },
      { name: 'heart-outline' },
      { name: 'heart' },
      { name: 'helix' },
      { name: 'help-empty' },
      { name: 'help-outline' },
      { name: 'help' },
      { name: 'injection' },
      { name: 'iphone' },
      { name: 'mobile' },
      { name: 'list-outline' },
      { name: 'list' },
      { name: 'medications' },
      { name: 'minus-empty' },
      { name: 'minus-outline' },
      { name: 'minus' },
      { name: 'nutrition-outline' },
      { name: 'carrot-outline' },
      { name: 'nutrition' },
      { name: 'carrot' },
      { name: 'patient-add-outline' },
      { name: 'patient-add' },
      { name: 'patient-outline' },
      { name: 'patient' },
      { name: 'doctor-check-outline' },
      { name: 'doctor-check' },
      { name: 'pie-outline' },
      { name: 'pie' },
      { name: 'compass' },
      { name: 'plus-outline' },
      { name: 'plus' },
      { name: 'printer-outline' },
      { name: 'printer' },
      { name: 'heartbeat' },
      { name: 'pulse' },
      { name: 'queue' },
      { name: 'search' },
      { name: 'star-outline' },
      { name: 'star' },
      { name: 'stopwatch-outline' },
      { name: 'stopwatch' },
      { name: 'telephone-outline' },
      { name: 'telephone' },
      { name: 'alcohol-outline' },
      { name: 'wine-outline' },
      { name: 'alcohol' },
      { name: 'wine' },
      { name: 'information-empty' },
      { name: 'information-outline' },
      { name: 'information' },
      { name: 'cash' },
      { name: 'note-outline' },
      { name: 'more-vertical' },
      { name: 'caret-down' },
      { name: 'caret-up' },
      { name: 'vue' },
      { name: 'html-css' },
      { name: 'more' },
      { name: 'angular' },
      { name: 'credit-card' },
      { name: 'paperclip' },
      { name: 'attachment' },
      { name: 'note' },
      { name: 'settings-outline' },
      { name: 'cog-outline' },
      { name: 'recall' },
      { name: 'login' },
      { name: 'logout' },
      { name: 'power' },
      { name: 'angle-left' },
      { name: 'angle-down' },
      { name: 'angle-right' },
      { name: 'angle-up' },
      { name: 'sort-asc' },
      { name: 'sort-desc' },
      { name: 'sort' },
      { name: 'caret-left' },
      { name: 'caret-right' },
      { name: 'filter-outline' },
      { name: 'funnel-outline' },
      { name: 'filter' },
      { name: 'funnel' },
      { name: 'today-outline' },
      { name: 'today' },
      { name: 'grid' },
      { name: 'settings' },
      { name: 'cog' },
      { name: 'react' },
      { name: 'dashboard-outline' },
      { name: 'speedometer-outline' },
      { name: 'dashboard' },
      { name: 'speedometer' },
      { name: 'male' },
      { name: 'man' },
      { name: 'woman' },
      { name: 'female' },
      { name: 'language' },
      { name: 'navicon' },
      { name: 'circle' },
      { name: 'arrow-down' },
      { name: 'arrow-left' },
      { name: 'arrow-right' },
      { name: 'arrow-up' },
      { name: 'circle-outline' },
      { name: 'square-outline' },
      { name: 'square' },
      { name: 'code' },
      { name: 'bin' },
      { name: 'bin-outline' },
      { name: 'imaging-outline' },
      { name: 'radiology-outline' },
      { name: 'prescription' },
      { name: 'external-link' },
      { name: 'doctor-outline' },
      { name: 'doctor' },
      { name: 'clock-minus' },
      { name: 'person' },
      { name: 'person-outline' },
      { name: 'clock-minus-outline' },
      { name: 'did-not-wait' },
      { name: 'edit-outline' },
      { name: 'edit' },
      { name: 'recalls' },
      { name: 'home-outline' },
      { name: 'home' },
      { name: 'pathology-outline' },
      { name: 'pathology' },
      { name: 'linked' },
      { name: 'radio-button' },
      { name: 'checkbox' },
      { name: 'dropdown' },
      { name: 'textarea' },
      { name: 'textbox' },
      { name: 'clone-outline' },
      { name: 're-print' },
      { name: 'imaging' },
      { name: 'radiology' },
      { name: 'compass-outline' },
      { name: 'clipboard-bullets-outline' },
      { name: 'clipboard-bullets' },
      { name: 'clipboard-heart-outline' },
      { name: 'clipboard-heart' },
      { name: 'clipboard' },
      { name: 'clipboard-outline' },
      { name: 'fullscreen-close' },
      { name: 'fullscreen' },
      { name: 'claim-dollar-circle' },
      { name: 'plus-empty' },
      { name: 'letter-tick' },
      { name: 'letter-tick-outline' },
      { name: 'letter-certificate' },
      { name: 'letter-certificate-outline' },
      { name: 'letter-signature' },
      { name: 'letter-signature-outline' },
      { name: 'buildings-outline' },
      { name: 'buildings' },
      { name: 'letter' },
      { name: 'letter-outline' },
      { name: 'file-certificate-outline' },
      { name: 'file-certificate' },
      { name: 'signature-outline' },
      { name: 'signature' },
      { name: 'address-book' },
      { name: 'allergy-outline' },
      { name: 'allergy' },
      { name: 'medications-alerts-outline' },
      { name: 'medications-alerts' },
      { name: 'table' },
      { name: 'table-outline' },
      { name: 'card-blank' },
      { name: 'card-medicare-m' },
      { name: 'card-dva' },
      { name: 'card-dva-outlined' },
      { name: 'card-cc' },
      { name: 'card-scc' },
      { name: 'card-pcc' },
      { name: 'card-hcc' },
      { name: 'send' },
      { name: 'virus' },
      { name: 'video-outline' },
      { name: 'video' },
      { name: 're-send' },
      { name: 'invisible' },
      { name: 'visible' },
      { name: 'intray' },
      { name: 'intray-outline' },
      { name: 'outtray' },
      { name: 'outtray-outline' },
      { name: 'task-outline' },
      { name: 'person-multiple' },
      { name: 'light-bulb' },
      { name: 'light-bulb-outline' },
      { name: 'zoom-minus' },
      { name: 'zoom-minus-outline' },
      { name: 'zoom-plus' },
      { name: 'zoom-plus-outline' }
    ]

    const listIconsLegacy = [
      { name: 'legacy-discharge' },
      { name: 'legacy-pathology' },
      { name: 'legacy-radiology' },
      { name: 'legacy-workers-compensation' },
      { name: 'legacy-letter-specialist' },
      { name: 'legacy-letter-referral' },
      { name: 'legacy-cdm' },
      { name: 'legacy-smd' },
      { name: 'legacy-mhr' },
      { name: 'legacy-letter-other' },
      { name: 'legacy-letter-writer' }
    ]

    const compare = (a, b) => (a.name > b.name) ? 1 : -1

    return {
      searchTerm: '',
      filterResults: this.icons,
      code: '<i class="hx-icon icon-helix"></i>',
      icons: listIcons.sort(compare),
      iconsLegacy: listIconsLegacy.sort(compare)
    }
  },
  mounted () {
    this.filterResults = this.icons
  },
  watch: {
    searchTerm () {
      if (this.searchTerm.length > 0) {
        this.filterResults = []
        for (const icon of this.icons) {
          if (
            icon.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0
          ) {
            this.filterResults.push({ name: icon.name })
          }
        }
      } else {
        this.filterResults = this.icons
      }
    }
  }
}
</script>

<style lang="css">
</style>

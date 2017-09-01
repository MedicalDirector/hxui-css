<template>
  <div id="icons">
    <h1 class="hx-title">Icons</h1>
    <h2 class="hx-subtitle">Hx/Ui comes with its own custom icons.</h2>
    <hr>

    <section class="hx-section">
      <div class="hx-columns">
        <div class="hx-column is-6-widescreen is-offset-3-widescreen">

          <div class="hx-input-control has-text-centered">
            <input class="hx-input" type="text" required v-model="searchTerm">
            <label class="hx-label">Search icons</label>
          </div>

        </div>
      </div>
    </section>

    <section class="hx-section content is-small">
      <div class="hx-columns is-mobile">

        <div class="hx-column is-2 has-text-centered" v-for="icon in filterResults">
          <i class="hx-icon is-large" :class="'icon-' + icon.name"></i>
          <p v-text="icon.name"></p>
        </div>

      </div>
    </section>

    <hr>

    <section class="hx-section">
      <p>Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use the icon class as a container:</p>

      <p>Code</p>

      <pre><code class="language-markup"><xmp>
  <i class="hx-icon icon-helix"></i>
      </xmp></code></pre>

      <p>The <code>icon</code> container will take up exactly <strong>1.5rem x 1.5rem</strong>. The icon itself is sized at <strong>21px</strong>.</p>
    </section>

    <hr>

    <section class="hx-section">

      <h3>Sizes</h3>
      <p>Font Awesome icons use a font-size of 28px by default, and are best rendered when using multiples of 7. The icon container is always slightly bigger than the font-size used:</p>
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
            <td><code>icon is-small</code></td>
            <td class="has-text-centered"><i class="hx-icon icon-helix is-small"></i></td>
            <td>14px</td>
            <td>1rem x 1rem</td>
          </tr>
          <tr>
            <td><code>icon</code></td>
            <td class="has-text-centered"><i class="hx-icon icon-helix"></i></td>
            <td>21px</td>
            <td>1.5rem x 1.5rem</td>
          </tr>
          <tr>
            <td><code>icon is-medium</code></td>
            <td class="has-text-centered"><i class="hx-icon icon-helix is-medium"></i></td>
            <td>28px</td>
            <td>2rem x 2rem</td>
          </tr>
          <tr>
            <td><code>icon is-large</code></td>
            <td class="has-text-centered"><i class="hx-icon icon-helix is-large"></i></td>
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
    return {
      searchTerm: '',
      filterResults: [],
      icons: [
        { name: 'helix' },
        { name: 'recall' },
        { name: 'power' },
        { name: 'login' },
        { name: 'logout' },
        { name: 'navicon' },
        { name: 'language' },
        { name: 'html-css' },
        { name: 'angular' },
        { name: 'react' },
        { name: 'vue' },
        { name: 'batch' },
        { name: 'batch-outline' },
        { name: 'bell' },
        { name: 'bell-outline' },
        { name: 'body' },
        { name: 'body-outline' },
        { name: 'box' },
        { name: 'box-outline' },
        { name: 'calendar' },
        { name: 'calendar-outline' },
        { name: 'chat-bubble' },
        { name: 'chat-bubble-outline' },
        { name: 'circle' },
        { name: 'circle-outline' },
        { name: 'square' },
        { name: 'square-outline' },
        { name: 'check' },
        { name: 'check-outline' },
        { name: 'check-empty' },
        { name: 'close' },
        { name: 'close-outline' },
        { name: 'close-empty' },
        { name: 'minus' },
        { name: 'minus-outline' },
        { name: 'minus-empty' },
        { name: 'plus' },
        { name: 'plus-outline' },
        { name: 'plus-empty' },
        { name: 'information' },
        { name: 'information-outline' },
        { name: 'information-empty' },
        { name: 'help' },
        { name: 'help-outline' },
        { name: 'help-empty' },
        { name: 'clock' },
        { name: 'clock-outline' },
        { name: 'cloud-download' },
        { name: 'cloud-download-outline' },
        { name: 'cloud-upload' },
        { name: 'cloud-upload-outline' },
        { name: 'email' },
        { name: 'email-outline' },
        { name: 'exclamation' },
        { name: 'exclamation-outline' },
        { name: 'file' },
        { name: 'file-outline' },
        { name: 'filing' },
        { name: 'filing-outline' },
        { name: 'flag' },
        { name: 'flag-outline' },
        { name: 'heart' },
        { name: 'heart-outline' },
        { name: 'flask' },
        { name: 'flask-reverse' },
        { name: 'list' },
        { name: 'list-outline' },
        { name: 'carrot' },
        { name: 'carrot-outline' },
        { name: 'nutrition' },
        { name: 'nutrition-outline' },
        { name: 'pie' },
        { name: 'pie-outline' },
        { name: 'telephone' },
        { name: 'telephone-outline' },
        { name: 'alcohol' },
        { name: 'alcohol-outline' },
        { name: 'wine' },
        { name: 'wine-outline' },
        { name: 'patient' },
        { name: 'patient-outline' },
        { name: 'patient-add' },
        { name: 'patient-add-outline' },
        { name: 'user' },
        { name: 'user-outline' },
        { name: 'person' },
        { name: 'person-outline' },
        { name: 'printer' },
        { name: 'printer-outline' },
        { name: 'stopwatch' },
        { name: 'stopwatch-outline' },
        { name: 'star' },
        { name: 'star-outline' },
        { name: 'queue' },
        { name: 'search' },
        { name: 'injection' },
        { name: 'heartbeat' },
        { name: 'pulse' },
        { name: 'medications' },
        { name: 'iphone' },
        { name: 'mobile' },
        { name: 'credit-card' },
        { name: 'cash' },
        { name: 'attachment' },
        { name: 'paperclip' },
        { name: 'settings' },
        { name: 'settings-outline' },
        { name: 'cog' },
        { name: 'cog-outline' },
        { name: 'note' },
        { name: 'note-outline' },
        { name: 'man' },
        { name: 'woman' },
        { name: 'male' },
        { name: 'female' },
        { name: 'more' },
        { name: 'more-vertical' },
        { name: 'grid' },
        { name: 'sort' },
        { name: 'sort-asc' },
        { name: 'sort-desc' },
        { name: 'caret-up' },
        { name: 'caret-down' },
        { name: 'arrow-up' },
        { name: 'arrow-right' },
        { name: 'arrow-down' },
        { name: 'arrow-left' },
        { name: 'angle-up' },
        { name: 'angle-right' },
        { name: 'angle-down' },
        { name: 'angle-left' },
        { name: 'dashboard' },
        { name: 'dashboard-outline' },
        { name: 'speedometer' },
        { name: 'speedometer-outline' },
        { name: 'appointment' },
        { name: 'appointment-outline' },
        { name: 'calendar' },
        { name: 'calendar-outline' },
        { name: 'today' },
        { name: 'today-outline' },
        { name: 'filter' },
        { name: 'filter-outline' },
        { name: 'funnel' },
        { name: 'funnel-outline' }
      ]
    }
  },
  mounted () {
    if (this.searchTerm.length === 0) {
      this.filterResults = this.icons
    }
  },
  watch: {
    searchTerm () {
      if (this.searchTerm.length > 0) {
        this.filterResults = []
        for (let icon of this.icons) {
          if (icon.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0) {
            this.filterResults.push({ 'name': icon.name })
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

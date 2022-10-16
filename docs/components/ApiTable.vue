<template>
  <section class="hx-card mb-4">
    <!-- <header class="hx-card__header">
      <h2>API</h2>
    </header> -->

    <section class="hx-card__content compact">
      <table class="hx-table is-narrow mb-0" v-if="data.length">
        <thead>
          <tr>
            <th>Class name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in data" v-bind:key="d.class">
            <td>
              <code>{{ d.class }}</code>
            </td>
            <td>
              <span
                class="hx-badge"
                :class="{
                  primary: d.type === 'component',
                  'primary flat': d.type === 'sub-component',
                  secondary: !['component', 'sub-component'].includes(d.type),
                }"
              >
                <span class="text-capitalise">{{ d.type }}</span>
              </span>
            </td>
            <td>{{ d.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    data: { default: [] },
  },
  data() {
    return {
      codeVisible: this.visible,
    }
  },
  methods: {
    toggleCode() {
      this.codeVisible = !this.codeVisible
    },
  },
}
</script>

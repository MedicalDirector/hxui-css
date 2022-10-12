<template>
  <table class="hx-table is-narrow" v-if="data.length">
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
              secondary: d.type !== 'component',
            }"
          >
            <span class="text-capitalise">{{ d.type }}</span>
          </span>
        </td>
        <td>{{ d.description }}</td>
      </tr>
    </tbody>
  </table>
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

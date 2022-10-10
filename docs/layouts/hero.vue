<template>
  <div id="app" class="layout-app">
    <main class="area-app-main">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@hxui/css/src/mixins/breakpoint';

.area-app-main {
  overflow: auto;
  min-height: 100vh;
}
</style>

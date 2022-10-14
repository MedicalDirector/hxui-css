<template>
  <section class="hx-not-prose">
    <h2 class="hero-nav-heading">{{ title }}</h2>
    <ul
      class="hero-nav-list phablet:grid-cols-2 tablet:grid-cols-3 gap-4 tablet:gap-8"
    >
      <li v-for="item in items" v-bind:key="item.name">
        <router-link
          v-if="item.path"
          class="hero-nav-item"
          :to="{ path: item.path }"
        >
          <span class="inline-flex">{{ item.name }}</span>
          <span
            v-if="item.isLegacy"
            class="hx-badge sm warning"
            style="width: unset"
          >
            <span>Legacy</span>
          </span>
          <div class="inline-flex grow-1"></div>
          <span class="hx-icon-container">
            <i class="hx-icon icon-angle-right" aria-hidden="true"></i>
          </span>
        </router-link>
        <a
          class="hero-nav-item"
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['title', 'items'],
}
</script>

<style lang="scss" scoped>
@use '@hxui/css/src/mixins/breakpoint';
@use '@hxui/css/src/mixins/state';
@use '@hxui/css/src/mixins/transition';

.hero-nav {
  &-heading {
    font: var(--h2);
    color: var(--color-foreground-contrast);
    margin-bottom: 1rem;
  }

  &-list {
    list-style: none;
    display: grid;
    margin: 0;
    padding: 0;

    li {
      display: contents;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-foreground-default);
    background-color: var(--color-surface-neutral-default);
    text-decoration: none;
    white-space: nowrap;
    padding: 1rem;
    border-radius: 8px;
    font: var(--h3);

    transition-property: transform, box-shadow;
    @include transition.propless;

    @include breakpoint.tablet {
      font: var(--h2);
    }

    @include state.hover {
      box-shadow: var(--shadow-global-lg);
      transform: scale(1.025);
    }
  }
}
</style>

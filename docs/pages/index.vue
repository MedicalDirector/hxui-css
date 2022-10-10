<template>
  <article
    class="hx-section scrollable-y hx-prose hero-page bg-primary-gradient"
  >
    <div class="hero-title">
      <h1 class="sr-only">Hx UI</h1>
      <svg class="hxui-logo">
        <use xlink:href="~/assets/images/hxui.svg#hxui"></use>
      </svg>
      <h2 class="subtitle">A design system for healthcare</h2>
    </div>

    <div class="hx-flex justify-center gap-4 mb-8 laptop:mb-12">
      <a class="hero-pill" href="#contents">
        <span class="hx-icon-control">
          <i class="hx-icon icon-html-css"></i>
        </span>
        <span>HTML & CSS</span>
      </a>
      <a class="hero-pill" href="https://angular.hxui.io">
        <span class="hx-icon-control">
          <i class="hx-icon icon-angular"></i>
        </span>
        <span>Angular</span>
      </a>
    </div>

    <div class="grid tablet:grid-cols-3 gap-4 tablet:gap-8">
      <section class="hero-item">
        <div class="hero-item-pictogram">
          <pictogram-layers></pictogram-layers>
        </div>
        <div>
          <h2 class="hero-item-label">Overview</h2>
          <p>
            Includes resources to create user interfaces consistent with the
            Helix design principles, design language, and best practices.
          </p>
        </div>
      </section>

      <section class="hero-item">
        <div class="hero-item-pictogram">
          <pictogram-code></pictogram-code>
        </div>
        <div>
          <h2 class="hero-item-label">Developers</h2>
          <p>
            Prioritise application logic over pixels. Explore the documentation
            to learn HxUI styling and markup with accompanying examples.
          </p>
        </div>
      </section>

      <section class="hero-item">
        <div class="hero-item-pictogram">
          <pictogram-design></pictogram-design>
        </div>
        <div>
          <h2 class="hero-item-label">Designers</h2>
          <p>
            Focus on user experience, interactions, and flows. Explore the
            documentation to learn the HxUI design principles and patterns.
          </p>
        </div>
      </section>
    </div>

    <div
      class="hero-contents gap-4 mt-4 tablet:mt-8 tablet:gap-8"
      id="contents"
    >
      <hero-nav-item
        v-for="(section, i) in sections"
        :key="i"
        :title="section.title"
        :items="section.items"
      >
      </hero-nav-item>
    </div>
  </article>
</template>

<script>
import PictogramDesign from '../components/PictogramDesign.vue'
import PictogramCode from '../components/PictogramCode.vue'
import PictogramLayers from '../components/PictogramLayers.vue'
import HeroNavItem from '../components/HeroNavItem.vue'
import { NAV_ITEMS } from '../components/constants.ts'
export default {
  layout: 'hero',
  data() {
    return {
      sections: NAV_ITEMS,
    }
  },
  components: { HeroNavItem, PictogramDesign, PictogramCode, PictogramLayers },
}
</script>

<style lang="scss" scoped>
@use '@hxui/css/src/mixins/breakpoint';
@use '@hxui/css/src/mixins/transition';

.hero-page {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @include breakpoint.phablet {
    padding: 3rem;
  }

  @include breakpoint.tablet {
    justify-content: center;
    align-items: center;
  }
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0.5rem;

  @include breakpoint.laptop {
    margin-bottom: 3rem;
  }

  .subtitle {
    font: var(--h3);
    font-weight: 400;
    color: var(--color-foreground-contrast);
    margin: 0;

    @include breakpoint.tablet {
      font: var(--h1);
      font-weight: 300;
    }
  }
}

.hero-pill {
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--color-foreground-contrast);
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0.25rem 0.75rem;
  gap: 0.5rem;
  border-radius: 2rem;
  font: var(--h3);

  .hx-icon {
    font-size: 2rem;
  }

  @include breakpoint.tablet {
    font: var(--h2);
  }

  @include transition.colors;

  &.active,
  &:hover {
    background-color: rgba(0 0 0 / 50%);
  }
}

.hxui-logo {
  fill: var(--color-foreground-contrast);
  aspect-ratio: 3 / 2;
  height: 6rem;

  @include breakpoint.tablet {
    height: 12rem;
  }

  @include breakpoint.laptop {
    height: 16rem;
  }
}

.hero-item {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content auto;
  gap: 1rem;
  background-color: rgba(0 0 0 / 50%);
  color: var(--color-foreground-contrast);
  padding: 1rem;
  border-radius: 8px;

  &-pictogram {
    align-self: center;
    justify-self: flex-start;
    background-color: white;
    padding: 0.5rem;
    border-radius: 100%;

    svg {
      height: 2rem;
      width: 2rem;
    }

    @include breakpoint.tablet {
      justify-self: center;
      padding: 1rem;

      svg {
        height: 3.5rem;
        width: 3.5rem;
      }
    }
  }

  &-label {
    font: var(--h2);
    margin: 0;
  }
}

.hero-contents {
  display: grid;
  width: 100%;
}
</style>

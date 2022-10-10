<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Elevation</h1>
      <h2 class="hx-subtitle">
        The elevation helpers allow you to control relative depth, or distance,
        between two surfaces along the z-axis.
      </h2>
      <hr />
      <h3 class="mt-10 mb-2">Variants</h3>
      <p>
        There's a total of 25 elevation levels. You can set an element's
        elevation by using the class <code>is-elevate-N</code>, where N is a
        integer between 0-24 corresponding to the desired elevation.
      </p>

      <h3 class="mt-10">Playground</h3>
    </div>

    <div class="hx-columns">
      <div class="hx-column">
        <input
          type="range"
          min="0"
          max="24"
          v-model="n"
          class="slider my-3"
          id="myRange"
        />
      </div>
      <div class="hx-column">
        <div class="hx-card" :class="'is-elevate-' + n">
          <div class="hx-card-content">
            <h4 class="has-text-centered mt-3 mb-0">Elevation {{ n }}</h4>
            <p class="has-text-centered">
              <code>is-elevate-{{ n }}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    }
  },
}
</script>

<style lang="scss">
.slider {
  appearance: none;
  width: 100%; /* Full-width */
  height: 2px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 1; /* Set transparency (for mouse-over effects on hover) */
  transition: opacity 0.3s;
  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 20px; /* Set a specific slider handle width */
    height: 20px; /* Slider handle height */
    border-radius: 100%;
    background-color: #eee;
    border: 4px solid #41b987; /* Green background */
    cursor: pointer; /* Cursor on hover */
    position: relative;
    opacity: 1;
  }
}
</style>

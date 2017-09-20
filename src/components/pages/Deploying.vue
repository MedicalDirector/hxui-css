<template>
  <div class="deploying welcome has-animation hx-flex">
    <div class="hx-container hx-flex-align-self-center has-text-centered">
      <div class="hx-button is-loading is-transparent is-superlarge"></div>
      <h1 class="hx-title">Deploying</h1>
      <p>Helix is currently being deployed. Please come back shortly.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.is-superlarge {
  font-size: 3rem;
}
.welcome {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: -moz-radial-gradient(top, circle cover, #1cffa5 0%, #00216b 100%);
  background: -webkit-gradient(radial, top top, 0px, top top, 100%, color-stop(0%, #1cffa5), color-stop(100%, #00216b));
  background: -o-radial-gradient(top, circle cover, #1cffa5 0%, #00216b 100%);
  background: -ms-radial-gradient(top, circle cover, #1cffa5 0%, #00216b 100%);
  background: radial-gradient(top, circle cover, #1cffa5 0%, #00216b 100%);
  background: -webkit-radial-gradient(top, circle cover, #1cffa5 0%, #00216b 100%);
  background-color: #1cffa5;
  > * {
    z-index: 1;
    * {
      color: white;
    }
    .hx-button.is-loading {
      &:after {
        border-color: transparent transparent white white !important;
      }
    }
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    animation-name: fade;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    transform: translateZ(0);
  }
  &:before {
    background: -moz-radial-gradient(bottom left, circle cover, #1cffa5 0%, #00216b 100%);
    background: -webkit-gradient(radial, bottom left bottom left, 0px, bottom left bottom left, 100%, color-stop(0%, #1cffa5), color-stop(100%, #00216b));
    background: -o-radial-gradient(bottom left, circle cover, #1cffa5 0%, #00216b 100%);
    background: -ms-radial-gradient(bottom left, circle cover, #1cffa5 0%, #00216b 100%);
    background: radial-gradient(bottom left, circle cover, #1cffa5 0%, #00216b 100%);
    background: -webkit-radial-gradient(bottom left, circle cover, #1cffa5 0%, #00216b 100%);
    background-color: #1cffa5;
    animation-delay: 10s;
  }
  &:after {
    background: -moz-radial-gradient(bottom right, circle cover, #1cffa5 0%, #00216b 100%);
    background: -webkit-gradient(radial, bottom right bottom right, 0px, bottom right bottom right, 100%, color-stop(0%, #1cffa5), color-stop(100%, #00216b));
    background: -o-radial-gradient(bottom right, circle cover, #1cffa5 0%, #00216b 100%);
    background: -ms-radial-gradient(bottom right, circle cover, #1cffa5 0%, #00216b 100%);
    background: radial-gradient(bottom right, circle cover, #1cffa5 0%, #00216b 100%);
    background: -webkit-radial-gradient(bottom right, circle cover, #1cffa5 0%, #00216b 100%);
    background-color: #1cffa5;
    animation-delay: 20s;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

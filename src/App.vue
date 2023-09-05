<template>
  <div id="page-container">
    <div id="content-wrap">
      <!-- all other page content -->
      <nav-bar />

      <div>
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <p>Hello World!</p>
      </div>

      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
    <footer id="footer">
      <base-footer />
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import BaseFooter from './components/BaseFooter.vue'
import ScrollIndicator from './components/ScrollIndicator.vue'
import LoadingScreen from './components/LoadingScreen.vue'

export default {
  components: {
    NavBar: NavBar,
    BaseFooter: BaseFooter,
    ScrollIndicator: ScrollIndicator,
    LoadingScreen: LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  beforeCreate() {
    setTimeout(() => {
      this.isLoading = false
    }, 800)
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.15s linear;
}

.fade-leave-to {
  transition: all 0.15s linear;
  opacity: 0;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
  /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  /* Footer height */
}
</style>

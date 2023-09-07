<template>
  <div id="page-container">
    <div id="content-wrap">
      <!-- all other page content -->
      <nav-bar />

      <div>
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <p></p>
      </div>

      <router-view v-slot="{ Component, route }">
        <transition name="nextPageFade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>

    <footer id="footer">
      <MyBaseFooter />
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ScrollIndicator from './components/ScrollIndicator.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import MyBaseFooter from './components/MyBaseFooter.vue'

export default {
  components: {
    'NavBar': NavBar,
    'MyBaseFooter': MyBaseFooter,
    'ScrollIndicator': ScrollIndicator,
    'LoadingScreen': LoadingScreen,
  },
  data() {
    return {
      isLoading: true
    }
  },
  beforeCreate() {
    setTimeout(() => {
      this.isLoading = false
    }, 1200)
  }
}
</script>

<style>
.nextPageFade-enter-from {
  opacity: 0;
}

.nextPageFade-enter-active {
  transition: all 0.15s linear;
}

.nextPageFade-leave-to {
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
  height: 10px;
  /* Footer height */
}
</style>

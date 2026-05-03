<template>
  <div id="page-container">
    <nav-bar />

    <LoadingScreen v-if="isLoading" />

    <main id="content-wrap">
      <router-view v-slot="{ Component, route }">
        <transition name="nextPageFade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>

    <MyBaseFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import MyBaseFooter from './components/MyBaseFooter.vue'

export default {
  components: {
    NavBar,
    MyBaseFooter,
    LoadingScreen
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
}

#content-wrap {
  flex: 1;
}
</style>

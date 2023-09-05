<template>
  <nav-bar />

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>

  <base-footer />
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import BaseFooter from './components/BaseFooter.vue'
import ScrollIndicator from './components/ScrollIndicator.vue'

export default {
  components: {
    'HomeView': HomeView,
    'NavBar': NavBar,
    'BaseFooter': BaseFooter,
    'ScrollIndicator': ScrollIndicator
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
</style>
<template>
  <div class="h-1.5 overflow-hidden rounded-full bg-slate-200/75">
    <div
      class="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-sky-500 transition-[width] duration-150 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollIndicator',
  data() {
    return {
      scrollProgress: 0
    }
  },
  methods: {
    updateProgress() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      this.scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
    }
  },
  mounted() {
    this.updateProgress()
    window.addEventListener('scroll', this.updateProgress, { passive: true })
    window.addEventListener('resize', this.updateProgress)
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateProgress)
    window.removeEventListener('resize', this.updateProgress)
  }
}
</script>

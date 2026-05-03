<template>
  <nav
    class="fixed inset-x-0 top-0 z-40 px-4 pt-4 transition duration-500 ease-out"
    :class="{ '-translate-y-[110%]': hideNavigation }"
  >
    <div class="mx-auto max-w-7xl">
      <div
        class="flex items-center justify-between gap-4 rounded-[20px] border border-white/60 bg-white/80 px-4 py-3 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.65)] backdrop-blur-xl sm:px-6"
      >
        <router-link to="/" class="flex min-w-0 items-center gap-3 text-slate-900" @click="closeMenu">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-[0_20px_40px_-25px_rgba(15,23,42,0.95)]"
          >
            <i class="fa-solid fa-door-open"></i>
          </span>

          <div class="min-w-0">
            <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Метални изделия
            </p>
            <p class="truncate text-lg font-semibold tracking-tight text-slate-900">Sino68</p>
          </div>
        </router-link>

        <div class="hidden items-center gap-2 rounded-2xl bg-slate-100/80 p-1 md:flex">
          <router-link
            to="/"
            exact-active-class="bg-white text-slate-900 shadow-sm"
            class="rounded-xl px-5 py-2 text-sm font-semibold text-slate-600 transition duration-200 hover:text-slate-900"
          >
            Каталог
          </router-link>
          <router-link
            to="/about"
            exact-active-class="bg-white text-slate-900 shadow-sm"
            class="rounded-xl px-5 py-2 text-sm font-semibold text-slate-600 transition duration-200 hover:text-slate-900"
          >
            За нас
          </router-link>
        </div>

        <div class="hidden items-center gap-2 md:flex">
          <a
            href="tel:0877465985"
            class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-300 hover:text-slate-900"
          >
            <i class="fa-solid fa-phone text-xs text-amber-600"></i>
            087 746 5985
          </a>
          <a
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-slate-300 hover:text-slate-900"
            href="https://www.facebook.com/profile.php?id=100057161544123"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-slate-300 hover:text-slate-900"
            href="https://goo.gl/maps/bfEmhVuF8HetXXVw9"
            target="_blank"
            rel="noreferrer"
            aria-label="Карта"
          >
            <i class="fa-solid fa-location-dot"></i>
          </a>
        </div>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label="Отвори меню"
          @click="toggleMenu"
        >
          <i :class="isMenuOpen ? 'fa-solid fa-xmark text-lg' : 'fa-solid fa-bars'"></i>
        </button>
      </div>

      <transition name="menu-fade">
        <div
          v-if="isMenuOpen"
          class="mt-3 rounded-[20px] border border-white/60 bg-white/90 p-4 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.65)] backdrop-blur-xl md:hidden"
        >
          <div class="flex flex-col gap-2">
            <router-link
              to="/"
              exact-active-class="bg-slate-900 text-white"
              class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-100"
              @click="closeMenu"
            >
              Каталог
            </router-link>
            <router-link
              to="/about"
              exact-active-class="bg-slate-900 text-white"
              class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-100"
              @click="closeMenu"
            >
              За нас
            </router-link>
          </div>

          <div class="mt-4 flex flex-wrap gap-2 border-t border-slate-200 pt-4">
            <a
              href="tel:0877465985"
              class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              <i class="fa-solid fa-phone text-xs text-amber-600"></i>
              087 746 5985
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              href="https://goo.gl/maps/bfEmhVuF8HetXXVw9"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-location-dot text-xs text-sky-600"></i>
              Локация
            </a>
          </div>
        </div>
      </transition>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      hideNavigation: false,
      isMenuOpen: false,
      lastScrollTop: 0
    }
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > this.lastScrollTop && scrollTop > 140) {
        this.hideNavigation = true
        this.isMenuOpen = false
      } else if (scrollTop < this.lastScrollTop || scrollTop <= 48) {
        this.hideNavigation = false
      }

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

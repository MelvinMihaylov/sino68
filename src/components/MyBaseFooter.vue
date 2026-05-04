<template>
  <footer id="footer" class="bg-slate-950 text-slate-200">
    <div class="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 lg:px-8">
      <div
        class="overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))] p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,1)] sm:p-10"
      >
        <div class="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1fr]">
          <div class="max-w-xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Sino 68</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white">
              Метални изделия и конструкции с модерно изпълнение и надежден монтаж
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Изработка и монтаж на врати, огради, парапети, козирки, навеси, решетки и
              нестандартни метални конструкции за домове, дворове и бизнес обекти.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in serviceTags"
                :key="tag"
                class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
              Навигация
            </h3>
            <div class="mt-5 flex flex-col gap-3 text-sm">
              <button
                v-for="link in navigationLinks"
                :key="link.label"
                type="button"
                class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100 transition duration-200 hover:bg-white/10"
                @click="navigateToSection(link.to)"
              >
                <i :class="[link.icon, link.iconColor]"></i>
                {{ link.label }}
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
              Контакти
            </h3>
            <div class="mt-5 space-y-3 text-sm text-slate-200">
              <a
                href="tel:0877465985"
                class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition duration-200 hover:bg-white/10"
              >
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-300"
                >
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span class="font-semibold">087 746 5985</span>
              </a>
              <a
                href="https://goo.gl/maps/bfEmhVuF8HetXXVw9"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition duration-200 hover:bg-white/10"
              >
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300"
                >
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span class="font-semibold">ж.к. Изгрев 1018, Варна</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100057161544123"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition duration-200 hover:bg-white/10"
              >
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-300"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
                <span class="font-semibold">Sino68 във Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© 2023 Sino68. Всички права запазени.</p>
        <p>Каталог за метални изделия и конструкции за Варна и региона.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { scrollToHashTarget } from '../utils/hashScroll'

export default {
  name: 'BaseFooter',
  data() {
    return {
      serviceTags: ['Врати', 'Огради', 'Парапети', 'Навеси', 'Конструкции'],
      navigationLinks: [
        {
          label: 'Каталог',
          icon: 'fa-solid fa-layer-group',
          iconColor: 'text-amber-300',
          to: { path: '/', hash: '#catalog' }
        },
        {
          label: 'За нас',
          icon: 'fa-solid fa-circle-info',
          iconColor: 'text-sky-300',
          to: { path: '/about', hash: '#about' }
        },
        {
          label: 'Филтрирай проекти',
          icon: 'fa-solid fa-filter',
          iconColor: 'text-emerald-300',
          to: { path: '/', hash: '#catalog-filter' }
        }
      ]
    }
  },
  methods: {
    async navigateToSection(to) {
      const resolvedRoute = this.$router.resolve(to)
      const isSameTarget =
        this.$route.path === resolvedRoute.path && this.$route.hash === resolvedRoute.hash

      if (isSameTarget && resolvedRoute.hash) {
        await scrollToHashTarget(resolvedRoute.hash)
        return
      }

      await this.$router.push(to)
    }
  }
}
</script>

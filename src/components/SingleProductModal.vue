<template>
  <div class="fixed inset-0 isolate z-[200]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>

    <div class="relative z-[1] flex min-h-full w-screen items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div class="flex min-h-full items-center justify-center">
        <div
          ref="modalRef"
          class="modal-panel w-full max-w-5xl overflow-hidden rounded-[24px] bg-gradient-to-br from-amber-200 via-white to-sky-200 p-[1px] shadow-[0_35px_120px_-35px_rgba(15,23,42,0.85)]"
        >
          <div class="grid overflow-hidden rounded-[23px] bg-white md:grid-cols-[1.25fr_0.85fr]">
            <div class="relative">
              <img
                id="image"
                class="h-[320px] w-full object-cover md:h-full"
                :src="product.imgSRC"
                :alt="product.name"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
              ></div>

              <button
                type="button"
                class="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-slate-950/55 text-white transition duration-200 hover:bg-slate-950/70 disabled:cursor-not-allowed disabled:opacity-40 md:flex"
                :disabled="!canGoPrev"
                aria-label="Предишен проект"
                @click="goPrev"
              >
                <i class="fa-solid fa-chevron-left text-sm"></i>
              </button>

              <button
                type="button"
                class="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-slate-950/55 text-white transition duration-200 hover:bg-slate-950/70 disabled:cursor-not-allowed disabled:opacity-40 md:flex"
                :disabled="!canGoNext"
                aria-label="Следващ проект"
                @click="goNext"
              >
                <i class="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </div>

            <div class="flex flex-col gap-6 p-6 md:p-8">
              <div class="flex items-start justify-between gap-4">
                <span
                  id="category"
                  class="inline-flex items-center rounded-xl border border-amber-100 bg-amber-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700"
                >
                  {{ product.category }}
                </span>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
                    :disabled="!canGoPrev"
                    aria-label="Предишен проект"
                    @click="goPrev"
                  >
                    <i class="fa-solid fa-chevron-left text-sm"></i>
                  </button>

                  <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
                    :disabled="!canGoNext"
                    aria-label="Следващ проект"
                    @click="goNext"
                  >
                    <i class="fa-solid fa-chevron-right text-sm"></i>
                  </button>

                  <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label="Затвори"
                    @click="closeModal"
                  >
                    <i class="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>
              </div>

              <div class="inline-flex items-center gap-3 text-xs font-medium text-slate-500 sm:text-sm">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span>{{ product.location }}</span>
              </div>

              <div class="space-y-3">
                <h4 id="modal-title" class="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-[28px]">
                  {{ product.name }}
                </h4>
                <p id="name" class="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {{ product.description || 'Индивидуален проект от Sino 68 с фокус върху здравина, чиста визия и прецизен монтаж.' }}
                </p>
              </div>

              <div class="mt-auto flex flex-wrap gap-3">
                <span
                  class="inline-flex items-center rounded-xl bg-slate-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600"
                >
                  Изработка по поръчка
                </span>
                <span
                  class="inline-flex items-center rounded-xl bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700"
                >
                  Монтаж на място
                </span>
                <a
                  v-if="product.sourceUrl"
                  :href="product.sourceUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition duration-200 hover:bg-slate-800"
                >
                  Facebook публикация
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core'

export default {
  name: 'SingleProductModal',
  props: {
    product: {
      type: Object,
      required: true
    },
    canGoPrev: {
      type: Boolean,
      default: false
    },
    canGoNext: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeModal', 'goPrev', 'goNext'],
  data() {
    return {
      handleEscape: null,
      stopOutsideListener: null,
      previousBodyOverflow: '',
      previousHtmlOverflow: '',
      previousBodyPaddingRight: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    goPrev() {
      if (this.canGoPrev) {
        this.$emit('goPrev')
      }
    },
    goNext() {
      if (this.canGoNext) {
        this.$emit('goNext')
      }
    },
    lockBackgroundScroll() {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      this.previousBodyOverflow = document.body.style.overflow
      this.previousHtmlOverflow = document.documentElement.style.overflow
      this.previousBodyPaddingRight = document.body.style.paddingRight

      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    },
    unlockBackgroundScroll() {
      document.body.style.overflow = this.previousBodyOverflow
      document.documentElement.style.overflow = this.previousHtmlOverflow
      document.body.style.paddingRight = this.previousBodyPaddingRight
    }
  },
  mounted() {
    this.stopOutsideListener = onClickOutside(this.$refs.modalRef, this.closeModal)
    this.lockBackgroundScroll()
    this.handleEscape = (event) => {
      if (event.key === 'Escape') {
        this.closeModal()
      } else if (event.key === 'ArrowLeft') {
        this.goPrev()
      } else if (event.key === 'ArrowRight') {
        this.goNext()
      }
    }

    document.addEventListener('keyup', this.handleEscape)
  },
  unmounted() {
    if (this.stopOutsideListener) {
      this.stopOutsideListener()
    }

    if (this.handleEscape) {
      document.removeEventListener('keyup', this.handleEscape)
    }

    this.unlockBackgroundScroll()
  }
}
</script>

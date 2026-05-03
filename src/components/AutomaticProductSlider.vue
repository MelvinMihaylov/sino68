<template>
  <section class="relative isolate overflow-hidden bg-slate-950">
    <div
      class="absolute inset-0 bg-cover bg-center transition-[transform,opacity] duration-700 ease-out"
      :style="{ backgroundImage: `url(${currentSlide.image})` }"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.25),transparent_28%),linear-gradient(110deg,rgba(2,6,23,0.88),rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.92))]"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/20"></div>

    <div
      class="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:min-h-[720px] lg:px-8"
    >
      <div class="hero-copy max-w-3xl">
        <span
          class="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur"
        >
          <span class="h-2 w-2 rounded-full bg-amber-400"></span>
          {{ currentSlide.eyebrow }}
        </span>

        <h1
          class="hero-title mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {{ currentSlide.title }}
        </h1>

        <p
          class="hero-description mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
        >
          {{ currentSlide.description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#catalog"
            class="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_45px_-20px_rgba(255,255,255,0.45)] transition duration-200 hover:translate-y-[-1px]"
          >
            Разгледай каталога
            <i class="fa-solid fa-arrow-down-long text-xs"></i>
          </a>

          <router-link
            to="/about"
            class="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:bg-white/20"
          >
            За Sino 68
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </router-link>
        </div>

        <div class="mt-10 grid gap-3 sm:grid-cols-3">
          <div
            v-for="stat in currentSlide.stats"
            :key="stat.label"
            class="rounded-[18px] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur"
          >
            <p class="text-2xl font-semibold tracking-tight text-white">{{ stat.value }}</p>
            <p
              class="mt-2 whitespace-nowrap text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-slate-300 sm:text-[11px]"
            >
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <div
          class="mx-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white backdrop-blur"
        >
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-200 hover:bg-white/10"
            aria-label="Предишен кадър"
            @click="prev"
          >
            <i class="fa-solid fa-chevron-left text-sm"></i>
          </button>

          <div class="flex items-center gap-2">
            <button
              v-for="(slide, index) in slides"
              :key="slide.title"
              type="button"
              class="h-2.5 rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'"
              :aria-label="`Отиди на кадър ${index + 1}`"
              @click="goTo(index)"
            ></button>
          </div>

          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-200 hover:bg-white/10"
            aria-label="Следващ кадър"
            @click="next"
          >
            <i class="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      slides: [
        {
          image: '/images/slider_images/metalni_ogradi1.jpg',
          eyebrow: 'Метални изделия и конструкции',
          title: 'Съвременни решения с прецизна изработка и чист детайл',
          description:
            'От огради и врати до навеси и нестандартни конструкции - изпълняваме проекти, които съчетават здравина, функционалност и модерна визия.',
          tags: ['Врати', 'Огради', 'Парапети'],
          stats: [
            { value: '50+', label: 'реализирани проекта' },
            { value: '8', label: 'основни категории' },
            { value: 'Варна', label: 'основен район' }
          ]
        },
        {
          image: '/images/slider_images/metalni_ogradi2.jpg',
          eyebrow: 'Изработка по поръчка',
          title: 'Каталог, подреден около реални проекти, а не шаблонни продукти',
          description:
            'Всеки проект е показан с реална снимка, категория и локация, за да се ориентирате по-бързо и да видите стила на изпълнение.',
          tags: ['Козирки', 'Навеси', 'Конструкции'],
          stats: [
            { value: 'Реални', label: 'снимки на обекти' },
            { value: 'По заявка', label: 'индивидуални решения' },
            { value: 'Монтаж', label: 'на място' }
          ]
        },
        {
          image: '/images/slider_images/metalni_ogradi3.jpg',
          eyebrow: 'Sino 68',
          title: 'Изберете категорията, която ви интересува, и разгледайте само релевантните проекти',
          description:
            'Новият изглед на каталога улеснява навигацията и ви отвежда по-бързо до проектите, които са най-близки до вашата идея.',
          tags: ['Филтриране', 'Каталог', 'Преглед'],
          stats: [
            { value: '1 клик', label: 'до филтъра' },
            { value: 'Бързо', label: 'отваряне на детайли' },
            { value: 'Подредено', label: 'изживяване' }
          ]
        },
        {
          image: '/images/slider_images/metalni_ogradi4.jpg',
          eyebrow: 'Професионален монтаж',
          title: 'По-модерен каталог за по-уверен избор на проект',
          description:
            'От първия преглед до детайлния модал - целият home екран е освежен, за да изглежда по-премиум и да се използва по-лесно.',
          tags: ['Премиум визия', 'Лесен избор', 'Sino 68'],
          stats: [
            { value: '24/7', label: 'онлайн каталог' },
            { value: 'Гъвкави', label: 'по размер решения' },
            { value: 'Модерен', label: 'нов интерфейс' }
          ]
        }
      ],
      currentIndex: 0
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentIndex]
    }
  },
  methods: {
    advance(step) {
      this.currentIndex = (this.currentIndex + step + this.slides.length) % this.slides.length
    },
    next() {
      this.advance(1)
    },
    prev() {
      this.advance(-1)
    },
    goTo(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.hero-copy {
  display: flex;
  flex-direction: column;
}

.hero-title {
  display: -webkit-box;
  min-height: calc(4 * 1.05em);
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.hero-description {
  display: -webkit-box;
  min-height: calc(3 * 1.75em);
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

@media (min-width: 640px) {
  .hero-title {
    min-height: calc(3 * 1.05em);
    -webkit-line-clamp: 3;
  }

  .hero-description {
    min-height: calc(3 * 1.6em);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    min-height: calc(3 * 1.05em);
  }

  .hero-description {
    min-height: calc(3 * 1.6em);
  }
}
</style>

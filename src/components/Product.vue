<template>
  <article
    class="group flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_20px_45px_-35px_rgba(15,23,42,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(15,23,42,0.48)]"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
      <img
        :alt="product.name"
        :src="product.imgSRC"
        class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div class="flex h-full flex-col items-center px-5 pb-5 pt-5 text-center sm:px-6">
      <span
        class="inline-flex items-center gap-1 rounded-md border border-amber-100 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700"
      >
        <i class="fa-solid fa-tag text-[10px]"></i>
        {{ product.category }}
      </span>

      <div class="mt-4 flex-1">
        <p class="product-title text-base font-semibold leading-6 text-slate-900 sm:text-lg sm:leading-7">
          {{ product.name }}
        </p>
      </div>

      <div class="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
        <i class="fa-solid fa-location-dot text-amber-600"></i>
        <p class="product-location">{{ product.location }}</p>
      </div>

      <div class="mt-6">
        <span
          class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 group-hover:border-amber-200 group-hover:bg-amber-50 group-hover:text-amber-700"
        >
          Виж детайли
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-location {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-title {
  display: -webkit-box;
  min-height: 4.5rem;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>

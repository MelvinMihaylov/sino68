<template>
    <div
        class="w-full h-[480px] md:w-1/3 xl:w-1/4 p-4 flex flex-col mb-11 shadow-md shadow-slate-300 rounded-lg duration-300 hover:scale-105 hover:shadow-xl">
        <a>
            <img class="hover:grow hover:shadow-lg rounded-lg" :alt="product.name" style="width: 500px; height: 250px;"
                :src="product.imgSRC" />
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 m-1">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="">{{ product.location }}</p>
                </div>
                <div class="">
                    <p>{{ product.category }}</p>
                </div>
            </div>
            <p class="pt-1 text-gray-900">{{ product.name }}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: ['product']
}
</script>
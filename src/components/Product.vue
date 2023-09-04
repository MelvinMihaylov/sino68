
<template>
    <div v-for="product in products" :key="product.name" class="w-full h-96 md:w-1/3 xl:w-1/4 p-8 flex flex-col">
        <a href="#">
            <img class="hover:grow hover:shadow-lg" style="width: 500px; height: 250px;" :src="product.imgSRC" />
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 m-1">
                    <i class="fa-solid fa-location-dot fa-beat-fade"></i>
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
    data() {
        return {
            products: [
                {
                    location: "Варна",
                    name: "Врата от ковано желязо",
                    imgSRC: "./images/zelena-vrata.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Навес за две парко места в двора на КООП",
                    imgSRC: "./images/naves-za-dve-parko-mesta.jpg",
                    category: "Навеси"
                },
                {
                    location: "с. Любен Каравелово",
                    name: "Изработка и монтаж на козирка, с покритие от поликарбонатна плоскост",
                    imgSRC: "./images/izrabotka-i-montaj-na-kozirka.jpg",
                    category: "Козирки"
                },
                {
                    location: "с. Изворско",
                    name: "Класически метален парапет в с. Изворско.",
                    imgSRC: "./images/klasicheski-metalen-parapet.jpg",
                    category: "Парапет"
                },
            ]
        }
    }
}
</script>
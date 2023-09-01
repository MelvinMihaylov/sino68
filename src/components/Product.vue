
<template>
    <div v-for="product in products" :key="product.name" class="w-full md:w-1/3 xl:w-1/4 p-8 flex flex-col">
        <a href="#">
            <img class="hover:grow hover:shadow-lg" :src="product.imgSRC" />
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
                    imgSRC: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/363404818_795632062352171_3276481335776882310_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=97mKAQrhL7oAX8ZSzwy&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDaPsSLD68oepDQWGJyUqgtE3rrC9Qwlr8KNiN34VhNEg&oe=64F5660E",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Навес за две парко места в двора на КООП",
                    imgSRC: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/359824485_784636536785057_5931790654023804415_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=eRZOTRmnAawAX-oWsoV&_nc_ht=scontent.fsof8-1.fna&oh=00_AfC30uq8JMaQeh3KknpTYwVsyeYNY6HKLDcYmBPnUm6vNQ&oe=64F47E99",
                    category: "Навеси"
                },
                {
                    location: "с. Любен Каравелово",
                    name: "Изработка и монтаж на козирка, с покритие от поликарбонатна плоскост",
                    imgSRC: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/352277768_766917315223646_5426047907203570548_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=HJHFU2RnxfoAX-b4pPP&_nc_ht=scontent.fsof8-1.fna&oh=00_AfA8KshLQOPBSkEfLCbDK1lx0vA1cpz_bkUtwEshKpbbaw&oe=64F62826",
                    category: "Козирки"
                },
                {
                    location: "с. Изворско",
                    name: "Класически метален парапет в с. Изворско.",
                    imgSRC: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/352757337_766087961973248_8513692638980697219_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=a3BfV6gIDO4AX9u5BZX&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDhhTf0SMKyr9sxY8G3u5EVgH6Blls7sy5q31-YNh3Yeg&oe=64F57584",
                    category: "Парапет"
                },
            ]
        }
    }
}
</script>
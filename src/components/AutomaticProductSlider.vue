<template>
    <div>
        <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
        </div>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            images: [
                "/images/slider_images/metalni_ogradi1.jpg",
                "/images/slider_images/metalni_ogradi2.jpg",
                "/images/slider_images/metalni_ogradi3.jpg",
                "/images/slider_images/metalni_ogradi4.jpg",
            ],
            timer: null,
            currentIndex: 0
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 3500);
        },

        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
};
</script>

<style>
img {
    height: auto;
    max-height: 600px;
    min-height: 300px;
    width: 100%;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.9);
}
</style>
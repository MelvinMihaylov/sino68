<template>
    <!--Nav-->
    <nav id="header" class="z-10 bg-white w-full top-0 border-b fixed transition-all duration-500 ease-in-out"
        :class="{ '-translate-y-[calc(100%-7px)]': hideNavigation }">
        <div id="navBar"
            class="w-full mx-auto flex flex-wrap items-center md:justify-evenly justify-between gap-20 text-center text-xl px-6">

            <div class="relative">

                <label id="menuButton" for="menu-toggle" class="cursor-pointer md:hidden block">
                    <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>

                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div class="md:relative absolute top-7 md:top-0 left-0 hidden md:flex md:items-center md:w-auto order-3 md:order-1 font-bold text-white bg-white md:ring-0 shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg md:shadow-none"
                    id="menu" ref="menuOnMobile">
                    <nav id="nav">
                        <ul class="md:flex items-center justify-between text-base text-gray-700 py-4 md:py-0 md:pt-0">
                            <li>
                                <router-link to="/"
                                    class="inline-block no-underline hover:text-yellow-500 py-2 px-4">Каталог
                                </router-link>
                            </li>
                            <li>
                                <router-link to="about" class="inline-block no-underline hover:text-yellow-500 py-2 px-4">За
                                    нас
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div class="order-1 md:order-2">
                <router-link to="/" exact-active-class="no-active"
                    class="fixed left-1/2 -translate-y-1/2 -translate-x-1/2 items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800"
                    href="#">
                    <i class="fa-solid fa-door-open mr-2"></i>
                    Sino68
                </router-link>
            </div>

            <div class="order-2 md:order-3 flex items-center gap-2 md:gap-6" id="nav-content">
                <a class="inline-block no-underline hover:text-black"
                    href="https://www.facebook.com/profile.php?id=100057161544123" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>

                <a class="pl-3 inline-block no-underline hover:text-black" href="https://goo.gl/maps/bfEmhVuF8HetXXVw9"
                    target="_blank">
                    <i class="fa-solid fa-map"></i>
                </a>
            </div>
        </div>

        <scroll-indicator />
    </nav>
</template>

<script>
import ScrollIndicator from '../components/ScrollIndicator.vue'

export default {
    name: "NavBar",
    components: {
        'ScrollIndicator': ScrollIndicator
    },
    data() {
        return {
            hideNavigation: false
        }
    },
    methods: {
        handleScroll() {
            let lastScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            window.addEventListener(
                'scroll',
                () => {

                    const scrollTopPosition =
                        window.pageYOffset || document.documentElement.scrollTop;

                    const menuButton = document.getElementById('menuButton')
                    const menuToggle = document.getElementById('menu-toggle')
                    if (menuToggle.checked) {
                        menuButton.click()
                    }

                    if (scrollTopPosition > lastScrollTop) {
                        this.hideNavigation = true
                    } else if (scrollTopPosition < lastScrollTop) {
                        this.hideNavigation = false
                    }
                    lastScrollTop =
                        scrollTopPosition <= 0 ? 0 : scrollTopPosition;
                },
                false,
            );
        }
    },
    mounted() {
        this.handleScroll()
    }
}
</script>

<style>
#navBar {
    display: flex;
    align-items: center;
    opacity: 1;
    margin: 10px;
    top: 0;
    position: sticky;
    height: 50px;
}

@-webkit-keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
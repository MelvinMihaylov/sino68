<template>
    <!-- Footer container -->
    <footer style="background-image: url('images/footer_images/footerbackground.jpg')"
        class="bg-no-repeat bg-cover bg-center bg-neutral-100 text-center dark:text-neutral-200 lg:text-left">
        <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
        <div class="mx-6 py-4 text-center md:text-left">
            <div class="flex justify-evenly items-center md:grid-cols-2 lg:grid-cols-4">
                <!-- Tailwind Elements section -->
                <div class="hidden lg:block">
                    <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                        <i class="fa-solid fa-circle-info mr-2"></i>
                        За нас
                    </h6>
                    <p class="text-xl font-bold">
                        Метални изделия и конструкции - Sino68.
                    </p>
                    <p>Метални изделия и конструкции, изработка и монтаж на гаражи, козирки, <br>
                        навеси, стълбища, огради, парапети, врати, решетки и всякакви други нестандартни.</p>
                </div>
                <!-- Contact section -->
                <div>
                    <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Контакти
                    </h6>
                    <a href="https://www.facebook.com/profile.php?id=100057161544123" target="_blank"
                        class="mb-4 flex items-center justify-center md:justify-start cursor-pointer">
                        <i class="fa-brands fa-facebook mr-4"></i>
                        <u>Sino68</u>
                    </a>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clip-rule="evenodd" />
                        </svg>
                        087 746 5985
                    </p>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path
                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path
                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        ж.к. "Изгрев" 1018, Varna, Bulgaria
                    </p>
                </div>
            </div>
        </div>

        <!--Copyright section-->
        <div class="bg-gradient-to-r from-slate-900 via-gray-800 to-stone-900 p-4 text-center">
            <span>© 2023 Sino68:</span>
            <a class="font-semibold text-neutral-600 dark:text-neutral-400" href="https://tailwind-elements.com/">Всички
                права запазени</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "BaseFooter",
}
</script>
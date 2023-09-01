<template>
    <footer class="flex justify-center mx-auto bg-zinc-50 border-t border-gray-300">
        <div class="container flex px-3 py-8">
            <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full lg:w-1/2">
                    <div class="px-3 md:px-0">
                        <h3 class="font-bold text-gray-900">About</h3>
                        <p class="py-4">
                            Метални изделия и конструкции - Sino68. Метални изделия и конструкции изработка и монтаж, гаражи
                            козирки, навеси стълбища, огради, парапети, врати,решетки и всякакви други нестандартни.

                        </p>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
                    <div class="px-3 md:px-0">
                        <h3 class="text-left font-bold text-gray-900">Social</h3>

                        <div class="w-full flex items-center py-4 mt-0">
                            <a onclick="window.open('../html-link.htm','name','width=600,height=400')" class="mx-2">
                                <i class="fa-regular fa-envelope text-2xl"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100057161544123" target="_blank" class="mx-2">
                                <i class="fa-brands fa-facebook text-2xl"></i>
                            </a>
                            <a href="#" class="mx-2">
                                <i class="fa-brands fa-instagram text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "BaseFooter"
}
</script>
<template>
    <div class="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-30 w-screen overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">

                <div ref="deleteModalRef"
                    class="md:max-w-6xl max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img id="image" class="rounded-t-lg" :src="product.imgSRC" alt="" />
                    </a>
                    <div class="p-5">
                        <a>
                            <h4 id="category" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {{ product.category }}
                            </h4>
                        </a>
                        <p id="name" class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.name }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

export default {
    name: 'SingleProductModal',
    props: ['product'],
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    },
    data() {
        return {
            deleteModalRef: ref(null),
        }
    },
    mounted() {
        document.addEventListener('click', () => {
            onClickOutside(this.$refs.deleteModalRef, this.closeModal)
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                this.$emit('closeModal')
            }
        });
    },
    unmounted() {
        document.removeEventListener('keyup', this.closeModal);
    },
}
</script>
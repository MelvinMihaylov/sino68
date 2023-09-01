<template>
    <div class="carousel relative container mx-auto" style="max-width: 1600px">
        <div class="carousel-inner relative overflow-hidden w-full">
            <!--Slide 1-->
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                checked="checked" />
            <div class="carousel-item absolute opacity-0" style="height: 50vh">
                <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="
              background-image: url('https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/330396333_1653995548399342_2509358545454718031_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=BDj2yjQBoJYAX8p8AhO&_nc_oc=AQk8SjY_Pu2s5SAqH6LueQb7bcJ21HK2gHdC4mTtvgTxYbXoNEbU5jQAeM5kj-_AcsY&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDVQghqR0lmPHBYg7zSDWEgie_FQWSnCzgMiF0ylk9ZDw&oe=64F65447');
            ">
                </div>
            </div>
            <label for="carousel-3"
                class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-2"
                class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!--Slide 2-->
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
            <div class="carousel-item absolute opacity-0 bg-cover bg-center" style="height: 50vh">
                <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top" style="
              background-image: url('https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/352757337_766087961973248_8513692638980697219_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=a3BfV6gIDO4AX9u5BZX&_nc_ht=scontent.fsof8-1.fna&oh=00_AfBNKWhGNyQu_WfTtNgiaSYYCnp1nbXFtO9lRkE-7hNPnA&oe=64F57584');
            ">
                </div>
            </div>
            <label for="carousel-1"
                class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-3"
                class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!--Slide 3-->
            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
            <div class="carousel-item absolute opacity-0" style="height: 50vh">
                <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center" style="
              background-image: url('https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/298564858_559346049314108_2565536477650828037_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ttntzlxvss4AX_aPQCJ&_nc_oc=AQkECEpUSckqhkPxJ1sF5KEN4SaejqSqkjmFgtMQFSxrZBJyCrd2smtuEpnOH_oAib4&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCQHa5bWAvBuER1bnTtFq6m5cYRB0fxxbR5uL_YRyyN8g&oe=64F4F2F0');
            ">
                </div>
            </div>
            <label for="carousel-2"
                class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-1"
                class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!-- Add additional indicators for each slide-->
            <ol class="carousel-indicators">
                <li class="inline-block mr-3">
                    <label for="carousel-1"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-2"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-3"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductSlider"
}
</script>
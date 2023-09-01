<template>
  <!--Nav-->
  <nav id="header" class="w-full z-30 top-0 py-1">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a>
            </li>
            <li>
              <a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="order-1 md:order-2">
        <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          href="#">
          <i class="fa-solid fa-door-open mr-2"></i>
          Sino68
        </a>
      </div>

      <div class="order-2 md:order-3 flex items-center" id="nav-content">
        <a class="inline-block no-underline hover:text-black" href="#">
          <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24">
            <circle fill="none" cx="12" cy="7" r="3" />
            <path
              d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
          </svg>
        </a>

        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
          <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24">
            <path
              d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
        </a>
      </div>
    </div>
  </nav>

  <div class="carousel relative container mx-auto" style="max-width: 1600px">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
        checked="checked" />
      <div class="carousel-item absolute opacity-0" style="height: 50vh">
        <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="
              background-image: url('https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/330396333_1653995548399342_2509358545454718031_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=BDj2yjQBoJYAX8p8AhO&_nc_oc=AQk8SjY_Pu2s5SAqH6LueQb7bcJ21HK2gHdC4mTtvgTxYbXoNEbU5jQAeM5kj-_AcsY&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDVQghqR0lmPHBYg7zSDWEgie_FQWSnCzgMiF0ylk9ZDw&oe=64F65447');
            ">
          <div class="container mx-auto">
            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p class="text-black bg-slate-200 bg-opacity-70 p-3 rounded-lg text-md font-bold">Метални преграждения на
                тераса</p>
            </div>
          </div>
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
          <div class="container mx-auto">
            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p class="text-black bg-slate-200 bg-opacity-70 p-3 rounded-lg text-xl font-bold">Класически метални
                парапети</p>
            </div>
          </div>
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
          <div class="container mx-auto">
            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p class="text-black bg-slate-200 bg-opacity-70 p-3 rounded-lg text-md font-bold">Метални врати и огради,
                изработка и
                монтаж</p>
            </div>
          </div>
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

  <HomeViewVue />

  <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
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
import HomeView from './views/HomeView.vue';
export default {
  components: {
    'HomeViewVue': HomeView
  }
}
</script>

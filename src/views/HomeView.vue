<template>
  <div class="pb-20">
    <AutomaticProductSlider />

    <section id="catalog" class="relative mt-4 scroll-mt-28 pb-12 sm:mt-6 sm:pb-16">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="overflow-hidden rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-50px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Sino 68</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Каталог с по-модерна визия и по-лесен избор
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Реални проекти за врати, огради, парапети, навеси и конструкции, представени в
              по-чист и по-съвременен каталог с бърз филтър по категории.
            </p>
          </div>

          <div
            id="catalog-filter"
            class="mt-8 scroll-mt-28 rounded-[20px] border border-slate-200/80 bg-slate-50/90 p-4 sm:p-6"
          >
            <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Филтър по категория
                </p>
                <h3 class="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  Избери типа проект, който искаш да разгледаш
                </h3>
              </div>

              <div class="flex flex-wrap gap-2">
                <button
                  v-for="category in categoryOptions"
                  :key="category.name"
                  type="button"
                  class="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition duration-200"
                  :class="
                    selectedCategory === category.name
                      ? 'border-transparent bg-slate-900 text-white shadow-[0_18px_35px_-22px_rgba(15,23,42,0.8)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  "
                  @click="selectCategory(category.name)"
                >
                  <span>{{ category.name }}</span>
                  <span
                    class="rounded-xl px-2 py-0.5 text-xs"
                    :class="
                      selectedCategory === category.name
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ category.count }}
                  </span>
                </button>
              </div>
            </div>

            <div
              class="mt-5 flex flex-col gap-3 border-t border-slate-200/80 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
            >
              <p>
                Показани <span class="font-semibold text-slate-900">{{ visibleProducts.length }}</span>
                от <span class="font-semibold text-slate-900">{{ filteredProducts.length }}</span>
                проекта
                <span v-if="selectedCategory !== allCategoriesLabel">
                  в категория
                  <span class="font-semibold text-amber-600">{{ selectedCategory }}</span>
                </span>
              </p>

              <button
                v-if="selectedCategory !== allCategoriesLabel"
                type="button"
                class="inline-flex items-center gap-2 self-start rounded-2xl bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition duration-200 hover:text-slate-900"
                @click="resetCategory"
              >
                <i class="fa-solid fa-rotate-left text-xs"></i>
                Изчисти филтъра
              </button>
            </div>
          </div>

          <TransitionGroup
            name="list"
            tag="div"
            class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          >
            <product
              v-for="product in visibleProducts"
              :key="product.id"
              class="cursor-pointer"
              :product="product"
              @click.prevent="productClick(product)"
            />
          </TransitionGroup>

          <div
            v-if="!filteredProducts.length"
            class="mt-8 rounded-[20px] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center"
          >
            <p class="text-lg font-semibold text-slate-900">Няма проекти в тази категория.</p>
            <p class="mt-2 text-sm text-slate-500">
              Избери друга категория или върни всички проекти.
            </p>
          </div>

          <div v-else-if="canLoadMore" class="mt-8 flex justify-center">
            <button
              type="button"
              class="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.65)] transition duration-200 hover:border-slate-300 hover:text-slate-900"
              @click="loadMore"
            >
              <span>Покажи още проекти</span>
              <i class="fa-solid fa-arrow-down-long text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="fadeProduct">
        <SingleProductModal
          v-if="showProductModal && product"
          :product="product"
          :can-go-prev="canGoPrev"
          :can-go-next="canGoNext"
          @closeModal="closeModal"
          @goPrev="goPrevProduct"
          @goNext="goNextProduct"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import AutomaticProductSlider from '../components/AutomaticProductSlider.vue'
import SingleProductModal from '../components/SingleProductModal.vue'

const ALL_CATEGORIES_LABEL = 'Всички'

export default {
  name: 'home',
  components: {
    product: Product,
    AutomaticProductSlider: AutomaticProductSlider,
    SingleProductModal: SingleProductModal
  },
  data() {
    return {
      products: [],
      visibleCount: 12,
      productsPerPage: 12,
      selectedCategory: ALL_CATEGORIES_LABEL,
      showProductModal: false,
      product: null
    }
  },
  computed: {
    allCategoriesLabel() {
      return ALL_CATEGORIES_LABEL
    },
    categoryOptions() {
      const categoryCounts = this.products.reduce((counts, product) => {
        counts[product.category] = (counts[product.category] || 0) + 1
        return counts
      }, {})

      const sortedCategories = Object.entries(categoryCounts)
        .sort(([firstCategory], [secondCategory]) => firstCategory.localeCompare(secondCategory, 'bg'))
        .map(([name, count]) => ({ name, count }))

      return [{ name: ALL_CATEGORIES_LABEL, count: this.products.length }, ...sortedCategories]
    },
    filteredProducts() {
      if (this.selectedCategory === ALL_CATEGORIES_LABEL) {
        return this.products
      }

      return this.products.filter((product) => product.category === this.selectedCategory)
    },
    modalProducts() {
      return this.filteredProducts
    },
    currentProductIndex() {
      if (!this.product) {
        return -1
      }

      return this.modalProducts.findIndex((product) => product.id === this.product.id)
    },
    visibleProducts() {
      return this.filteredProducts.slice(0, this.visibleCount)
    },
    canLoadMore() {
      return this.visibleCount < this.filteredProducts.length
    },
    canGoPrev() {
      return this.currentProductIndex > 0
    },
    canGoNext() {
      return this.currentProductIndex > -1 && this.currentProductIndex < this.modalProducts.length - 1
    }
  },
  methods: {
    getProducts() {
      const products = [
        {
          id: 1001,
          location: 'с. Каменар, Варна',
          name: 'Метален капак за кладенец в с. Каменар',
          imgSRC:
            'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/647539531_1446685313913506_6807227250868151201_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DbPqz-8SZjYQ7kNvwFKbPSW&_nc_oc=AdoS-SZ0IKQjdCNpf0Lz40Tag7VBDIpc6oefjqhCTo5hTM8kKceCeVoZF8AlOlNKyp0&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af4ElSwjNrmW0m1-GBuZsJUa8PnhUTQE5BK1SosdTetkHw&oe=69FE2156',
          category: 'Конструкции',
          description: 'Метален капак за кладенец в с. Каменар - Варна.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid02LHxpraAB9higWovAMeAmsnpSqeMMXnT7UnRFHkitEL7uriKWRuuEkipPUCURGHh2l&id=100057161544123'
        },
        {
          id: 1002,
          location: 'ул. Начо Начев 4, Варна',
          name: 'Метална врата към гаражи на ЖСК',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/602335435_1388916269690411_2889166170648087253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ed5P9nql3HAQ7kNvwFaovG3&_nc_oc=AdoLqexn5Itam-iwtpRqAiiwVBXhSE5vnFk6rBdhfbhXZLRw8DoBYZY1fT1GbwyKXac&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af4NHjI1Yn02al-XoEDDF9K3PgdlPpYX8wBiw2j_zc8rhA&oe=69FE22C8',
          category: 'Врати',
          description: 'Метална врата към подход за гаражи на ЖСК в гр. Варна, ул. Начо Начев 4.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid07nUtMUMVRYBRaYGkDDZ4SYu2ZDYkh5ZNBt14DQUxrtS5mmVvaJeTNGab3nxL3ySel&id=100057161544123'
        },
        {
          id: 1003,
          location: 'Варна',
          name: 'Метални врати за мази и сервизни помещения',
          imgSRC:
            'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/605296217_1388914486357256_819330082458640952_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ceJZ73TrtYwQ7kNvwH9Q9g-&_nc_oc=AdqFPbNhSZSkAdQLVzmzCP8AIjaUqugvTSnEwQXjPzhnwKMFpU8Bb7Tq3XfJbJ0oTEA&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af5PySfE18RTp5AfZGHUkr6ZHXEU058eyXz48X_2FYttLA&oe=69FE2255',
          category: 'Врати',
          description:
            'Метални врати в гр. Варна за мази, килери, изби, котелни помещения и подобни зони.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid0FmCorwXV5sc84jA8EUoJuMjSkPPynqVDcJ6piSyaLkDJDoSj2PMRyXXvUHuSoghSl&id=100057161544123'
        },
        {
          id: 1004,
          location: 'Варна',
          name: 'Складово помещение за заведение',
          imgSRC:
            'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/604503374_1388912383024133_6270925857958533265_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3JhmL_aUlosQ7kNvwEKfW_C&_nc_oc=Adofrak646GGcV1GV_8vf49VfYYN7LZNEKMPh7XVCmURnEfOjRJ-mQggDAY5F3iUpDk&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af57jJAOxnxLq7wxnufdxMZYkBBqFAutkdmBmhv6o49YGQ&oe=69FE2E13',
          category: 'Конструкции',
          description:
            'Складово помещение за заведение за бърза закуска. През новата година ще се облицова с термопанели.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid0pSSH43CN1dCDdE8YgaC5bJYTqXbwVx9qFB3UzQHE99ss1Bw2vy1dmimpdAW5PhRdl&id=100057161544123'
        },
        {
          id: 1005,
          location: 'с. Каменар, Варна',
          name: 'Плъзгаща врата за гараж в с. Каменар',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/605275013_1388910759690962_2289814290159365828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tObMyZy6GzwQ7kNvwEnQ3df&_nc_oc=AdoXLOg_hsJxHsz0_G-crVoRqpHbPCx8vLCTHjKksDa_rICNhAUxSo1W8Toe9aVXfCk&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af7KXJCbeyB27HfFP9M-6vIwtz1ftJqvZ17jJYta4vVJDA&oe=69FE1CF3',
          category: 'Врати',
          description: 'Плъзгаща врата за гараж в с. Каменар, гр. Варна.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid02rNhm7AAWwibQwFkZYzgCUNVwsRQL2fAHZerRGpt53dZdiGZsSPJJWGvDw68tynFbl&id=100057161544123'
        },
        {
          id: 1006,
          location: 'кв. Виница, Варна',
          name: 'Метални огради на ЖСК във Виница',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/605150848_1388907536357951_8655377465401821747_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vAoZdm8YC_oQ7kNvwHJikiM&_nc_oc=AdrlxFKwvuUy8qAwpVzedvA_wtCww-IcNJwFvER-GfTwlMG9KKZ4GLI5ig3qkaSHlIk&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af7IZzPJMY2Qmi2JlutmkQxIVr9IkI2JSv2q_YLDSusTMw&oe=69FE3327',
          category: 'Огради',
          description: 'Метални огради на ЖСК във кв. Виница, гр. Варна.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid0K6ceosAME9BfcfRFpFkRc5yZoMCCXRyByFX26JdM71TcWbWiiRLPEpwkhdbaWjdfl&id=100057161544123'
        },
        {
          id: 1007,
          location: 'с. Приселци, Варна',
          name: 'Арки за рози в с. Приселци',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/604647650_1388905759691462_5949496379957214186_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TqmQR792PccQ7kNvwGABItN&_nc_oc=AdpL8pgM6PccK_8oIQFVrOL2HRIgSGimwtXHZzPfSRWWoqQtoPX8qjsp4Q8pQSyrimg&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af6Efu2_YoEIb_g_i1eb9yz2KWv0TyDfUnoaj2JeUqdUVw&oe=69FE2E5A',
          category: 'Конструкции',
          description: 'Арки за рози в с. Приселци, гр. Варна.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid022H9e8QyDbbxNFVRafKdcSwhzo3C3CDRBkjQ1EsSgS35WE4g79g8p5FkkBjy9WDHgl&id=100057161544123'
        },
        {
          id: 1008,
          location: 'ж.к. Младост, Варна',
          name: 'Сгъваема рампа за колички',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/603865397_1388902749691763_1234311529539551761_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XKR40JerTZ0Q7kNvwHXpJ2B&_nc_oc=AdrfcRG5p9fTfIKOmaw7rT-ZHOOnBnNXII1hO8z64Ct-FInsoNz0_JpKfkWEz5aYk5Y&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af6Ezo25rir5s8xdWcc38SzYrPSOBMifNZLTb4DesTKW4w&oe=69FE2BE9',
          category: 'Конструкции',
          description: 'Сгъваема рампа за колички в ж.к. Младост 116/10, гр. Варна.',
          sourceUrl:
            'https://www.facebook.com/permalink.php?story_fbid=pfbid02Jx6XUqPmPEJzMudDWYP1641W6LxNM4NBZnEf9WgbJ7N2vuh7Qf1LcEBtjeZchko4l&id=100057161544123'
        },
        {
          id: 1009,
          location: 'район Стария хлебозавод, Варна',
          name: 'Охранителна решетка за входна врата',
          imgSRC:
            'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/602992170_1388890089693029_3665683014630944868_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=j1C6DNPQEjQQ7kNvwE8My_6&_nc_oc=AdqqzS4RHluYWnP2kEWXUSCp7-hLIG90aUp9DJpfkY6aSms-MxOyQcMEyqYmRgKCDJQ&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=t_PrwGio39-BF_WI09ylGQ&_nc_ss=7020f&oh=00_Af6DcITNhM6WKWMjasWi988cVqHs4UShsNCOlMIy6XvKxw&oe=69FE5163',
          category: 'Врати',
          description:
            'Допълнителна охранителна решетка за входна врата в района на Стария хлебозавод, гр. Варна.',
          sourceUrl:
            'https://www.facebook.com/photo.php?fbid=1388890086359696&set=a.206982924550424&type=3'
        },
        {
          id: 2,
          location: 'Варна',
          name: 'Врата от ковано желязо',
          imgSRC: './images/product_images/zelena-vrata.jpg',
          category: 'Врати'
        },
        {
          id: 3,
          location: 'Варна',
          name: 'Навес за две парко места в двора на КООП',
          imgSRC: './images/product_images/naves-za-dve-parko-mesta.jpg',
          category: 'Навеси'
        },
        {
          id: 4,
          location: 'с. Любен Каравелово',
          name: 'Изработка и монтаж на козирка, с покритие от поликарбонатна плоскост',
          imgSRC: './images/product_images/izrabotka-i-montaj-na-kozirka.jpg',
          category: 'Козирки'
        },
        {
          id: 5,
          location: 'с. Изворско',
          name: 'Класически метален парапет в с. Изворско.',
          imgSRC: './images/product_images/klasicheski-metalen-parapet.jpg',
          category: 'Парапети'
        },
        {
          id: 6,
          location: 'Варна',
          name: 'Дворна портичка на ул. Александър Василев (маалата)',
          imgSRC: './images/product_images/dvorna-portichka-maalata.jpg',
          category: 'Врати'
        },
        {
          id: 7,
          location: 'Варна',
          name: "Дворна портичка на ул.кап. 'Георги Георгиев' (маалата)",
          imgSRC: './images/product_images/dvorna-portichka-maalata-ul-georgi-georgiev.jpg',
          category: 'Врати'
        },
        {
          id: 8,
          location: 'Аксаково',
          name: 'Кокетна оградка на ул. Овеч',
          imgSRC: './images/product_images/koketna-ogradka.jpg',
          category: 'Огради'
        },
        {
          id: 9,
          location: 'с. Любен Каравелово',
          name: 'Изработка и монтаж на плъзгаща врата',
          imgSRC: './images/product_images/pluzgashta-vrata-luben-karavelov.jpg',
          category: 'Врати'
        },
        {
          id: 10,
          location: 'Варна',
          name: 'Метални преграждения на тераса, на къща близнак в местност Прибой',
          imgSRC: './images/product_images/metalni-pregrajdeniq-na-terasa.jpg',
          category: 'Преграждения'
        },
        {
          id: 11,
          location: 'Варна',
          name: 'Метална дворна врата за къща. Ул. Димчо Дебелянов, кв. Аспарухово',
          imgSRC: './images/product_images/metalna-dvorna-vrata-za-kushta.jpg',
          category: 'Врати'
        },
        {
          id: 12,
          location: 'Варна',
          name: 'Изработка на метални врати за всички мази на новопостроена сграда ул. Антон Страшимиров',
          imgSRC: './images/product_images/metalni-vrati-za-vsichki-mazi.jpg',
          category: 'Врати'
        },
        {
          id: 13,
          location: 'Варна',
          name: 'Изработка и монтаж на метални парапети на новопостроена сграда на ул. Антон Страшимиров',
          imgSRC: './images/product_images/metalni-parapeti-na-novopostroena-sgrada.jpg',
          category: 'Парапети'
        },
        {
          id: 14,
          location: 'Варна',
          name: 'Изработка на нова входна врата в жк. Младост, бл.136 (бивше общежитие на СОДИ Девня)',
          imgSRC: './images/product_images/metalna-vrata-bivshe-obshtejitie.jpg',
          category: 'Врати'
        },
        {
          id: 15,
          location: 'Варна',
          name: 'Изработка и монтаж на метални врати във вилна зона',
          imgSRC: './images/product_images/metalni-vrati-selo-zvezdica.jpg',
          category: 'Врати'
        },
        {
          id: 16,
          location: 'Варна',
          name: "Беседка от метал, с подиум, покрита с поликарбонат. Комплекс 'Варна Сити Юг', бл. Виола.",
          imgSRC: './images/product_images/besedka-kompleks-varna-city.jpg',
          category: 'Беседи'
        },
        {
          id: 17,
          location: 'Варна',
          name: 'Изработка на метални конструкции, покрити с термо панели. Складове, стопански помещения, навеси, метални къщи и всякакви други.',
          imgSRC: './images/product_images/metalni-konstrukci-pokriti-s-termo-paneli.jpg',
          category: 'Конструкции'
        },
        {
          id: 18,
          location: 'Аксково',
          name: 'Изработка и монтаж на метални врати ул. Побити камъни.',
          imgSRC: './images/product_images/metalni-vrati-ul-pobiti-kamuni.jpg',
          category: 'Врати'
        },
        {
          id: 19,
          location: 'Варна',
          name: 'Изработка на навес, метална конструкция покрита с битумни керемиди в местност Добрева чешма.',
          imgSRC: './images/product_images/naves-pokrit-s-bitumni-keremidi.jpg',
          category: 'Навеси'
        },
        {
          id: 20,
          location: 'с. Изворско',
          name: 'Изработка и монтаж на двукрила порта',
          imgSRC: './images/product_images/metalni-vrati-selo-izvorsko.jpg',
          category: 'Врати'
        },
        {
          id: 21,
          location: 'Варна',
          name: 'Фитнес уреди за открито',
          imgSRC: './images/product_images/fintes-ured.jpg',
          category: 'Фитнес'
        },
        {
          id: 22,
          location: 'с. Приселци',
          name: 'Метална ограда',
          imgSRC: './images/product_images/metalna-ograda-priselci.jpg',
          category: 'Огради'
        },
        {
          id: 23,
          location: 'с. Кичево',
          name: 'Изработка на козирка от метална конструкция и поликарбонатна плоскост в местност Добрева чешма',
          imgSRC: './images/product_images/kozirka-mestnost-dobreva-cheshma.jpg',
          category: 'Козирки'
        },
        {
          id: 24,
          location: 'с. Тополи',
          name: 'Метални парапети на новостроящ се обект',
          imgSRC: './images/product_images/metalen-parapet-selo-topoli.jpg',
          category: 'Парапети'
        },
        {
          id: 25,
          location: 'Варна',
          name: 'Декоративни преграждания пред гаражи, пригодени за жилищни помещения. Ул. Тодор Димов 31',
          imgSRC: './images/product_images/dekorativni-pregrajdeniq-ulica-todor-dimitrov.jpg',
          category: 'Преграждения'
        },
        {
          id: 26,
          location: 'Варна',
          name: 'Навес на тераса на последен етаж, метална консърукция и поликарбонат. Ул. Ген. Столипин 19',
          imgSRC: './images/product_images/naves-ul-gen-stolipin-19.jpg',
          category: 'Навеси'
        },
        {
          id: 27,
          location: 'с. Приселци',
          name: 'Метална дворна врата с две крила',
          imgSRC: './images/product_images/metalna-dvorna-vrata-selo-priselci.jpg',
          category: 'Врати'
        },
        {
          id: 28,
          location: 'Варна',
          name: 'Изработка на асма в местност Боровец юг',
          imgSRC: './images/product_images/asma-mestnost-borovec.jpg',
          category: 'Конструкции'
        },
        {
          id: 29,
          location: 'Варна',
          name: 'Конструкция на покрива на един от високите хотели на Златни пясъци, за поставяне на съоражения, с цел намаляване на енергийна мощност',
          imgSRC: './images/product_images/konstrukciq-zlatni-pqsuci.jpg',
          category: 'Конструкции'
        },
        {
          id: 30,
          location: 'Варна',
          name: 'Изработка на навес в местност Акчелар',
          imgSRC: './images/product_images/naves-akchelar.jpg',
          category: 'Навеси'
        },
        {
          id: 31,
          location: 'с. Изворско',
          name: 'Заграждения с метални колони',
          imgSRC: './images/product_images/zagrajdeniq-selo-izvorsko.jpg',
          category: 'Конструкции'
        },
        {
          id: 32,
          location: 'Варна',
          name: 'Метални врати за мази с допълнителна касова брава в жк. Бриз',
          imgSRC: './images/product_images/metalni-vrati-jk-bliz.jpg',
          category: 'Врати'
        },
        {
          id: 33,
          location: 'Варна',
          name: 'Метални изделия и конструкции в местността Акчелар',
          imgSRC: './images/product_images/metalni-izdeliq-akchelar.jpg',
          category: 'Конструкции'
        },
        {
          id: 34,
          location: 'Варна',
          name: 'Декоративни прегради в междублоковите пространства на ул. Поп Харитон, бл. 55',
          imgSRC: './images/product_images/dekorativni-pregradi-ulica-pop-hariton.jpg',
          category: 'Конструкции'
        },
        {
          id: 35,
          location: 'Варна',
          name: 'Покривна конструкция на вход на жилищен блок в жк. Кайсиева градина, бл.214, вх.3',
          imgSRC: './images/product_images/pokrivna-konstrukciq-kaisieva-gradina.jpg',
          category: 'Конструкции'
        },
        {
          id: 36,
          location: 'Варна',
          name: 'Метална двупластова врата за апартамент ул. Крепостна, бл. 17',
          imgSRC: './images/product_images/dvuplastova-vrata-ulica-krepostna.jpg',
          category: 'Врати'
        },
        {
          id: 37,
          location: 'с. Константиново',
          name: 'Дворна порта за селски имот',
          imgSRC: './images/product_images/dvorna-porta-selo-konstantinovo.jpg',
          category: 'Врати'
        },
        {
          id: 38,
          location: 'Варна',
          name: "Метални дворни врати в района на фабрика 'Христо Ботев'",
          imgSRC: './images/product_images/meltani_dvorni_vrati_hristo_botev.jpg',
          category: 'Врати'
        },
        {
          id: 39,
          location: 'Варна',
          name: "Дворна врата в района на фабрика 'Христо Ботев' ул. Горазд",
          imgSRC: './images/product_images/dvorna_vrata_ulica_gorazd.jpg',
          category: 'Врати'
        },
        {
          id: 40,
          location: 'с. Въглен',
          name: 'Метални дворни врати',
          imgSRC: './images/product_images/dvorni_vrati_selo_vuglen.jpg',
          category: 'Врати'
        },
        {
          id: 41,
          location: 'с. Въглен',
          name: 'Изработка и монтаж на метална дворна порта',
          imgSRC: './images/product_images/dvorna_porta_selo_vuglen.jpg',
          category: 'Врати'
        },
        {
          id: 42,
          location: 'Варна',
          name: 'Метални врати, вход към паркинг на ЖК в центъралната част.',
          imgSRC: './images/product_images/metalni_vrati_vhod_kum_parking.jpg',
          category: 'Врати'
        },
        {
          id: 43,
          location: 'Варна',
          name: 'Метални парапети 53 метра.',
          imgSRC: './images/product_images/metalni_parapeti_53m.jpg',
          category: 'Парапети'
        },
        {
          id: 44,
          location: 'Варна',
          name: 'Нестандартни метални изделия за рекламния и печатарски бизнес.',
          imgSRC: './images/product_images/pechatarskiq_biznes.jpg',
          category: 'Конструкции'
        },
        {
          id: 45,
          location: 'Варна',
          name: 'Метална врата с допълнително касово заключване.',
          imgSRC: './images/product_images/metalna_vrata_s_dopulnitelno_kasovo-zakl.jpg',
          category: 'Врати'
        },
        {
          id: 46,
          location: 'с. Звездица',
          name: 'Изработка на навес с покритие от плоскости и битумни керемиди.',
          imgSRC: './images/product_images/nadves_selo_zvezdica.jpg',
          category: 'Конструкции'
        },
        {
          id: 47,
          location: 'Варна',
          name: 'Метална ограда и дворна порта в местността Добрева чешма.',
          imgSRC: './images/product_images/metalna_ograda_i_dvorna_porta.jpg',
          category: 'Огради'
        },
        {
          id: 48,
          location: 'Варна',
          name: 'Класически парапет от Sino68 изработен в новострояща ЖСК в кв. Виница.',
          imgSRC: './images/product_images/klasicheski_metalen_parapet_vinica.jpg.jpg',
          category: 'Парапети'
        },
        {
          id: 49,
          location: 'Варна',
          name: 'Метална ограда във вилна зона на ж.к. Възраждане.',
          imgSRC: './images/product_images/metalni_ogradi_vinica.jpg',
          category: 'Огради'
        },
        {
          id: 50,
          location: 'с. Слънчево',
          name: 'Дворна врата на складова база.',
          imgSRC: './images/product_images/dvorna_vrata_selo_slunchevo.jpg',
          category: 'Врати'
        },
        {
          id: 51,
          location: 'Варна',
          name: 'Парапети от ковано желязо - модел Версаче. Кв. Галата.',
          imgSRC: './images/product_images/parapeti_kovano_jelqzo_versache.jpg',
          category: 'Парапети'
        },
        {
          id: 52,
          location: 'Варна',
          name: 'Класически парапет в ж.к. Младост - вилна зона.',
          imgSRC: './images/product_images/klasicheski_parapet_mladost_varna.jpg',
          category: 'Парапети'
        },
        {
          id: 53,
          location: 'с. Игнатиево',
          name: 'Огради от ковано желязо',
          imgSRC: './images/product_images/ogradi_ot_kovano_jelqzo.jpg',
          category: 'Огради'
        },
        {
          id: 54,
          location: 'Варна',
          name: 'Изработка на навес от  цветен поликарбонат в частен дом в района на "колелото".',
          imgSRC: './images/product_images/naves_koleloto.jpg',
          category: 'Навеси'
        },
        {
          id: 55,
          location: 'Варна',
          name: 'Изработка и монтаж на метални парапети на новострояща се ЖСК в кв.Вицица.',
          imgSRC: './images/product_images/parapeti_vinica.jpg',
          category: 'Парапети'
        },
        {
          id: 56,
          location: 'с. Манастир',
          name: 'Изработка и монтаж на врати и решетки.',
          imgSRC: './images/product_images/vrati_i_reshetki_selo_manastir.jpg',
          category: 'Врати'
        },
        {
          id: 57,
          location: 'с. Игнатиево',
          name: 'Изработка и монтаж на врати и решетки.',
          imgSRC: './images/product_images/metalni_vrati_i_reshetki.jpg',
          category: 'Конструкции'
        },

      ]

      return products
    },
    handleScroll() {
      if (
        this.canLoadMore &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 280
      ) {
        this.loadMore()
      }
    },
    loadMore() {
      this.visibleCount = Math.min(this.visibleCount + this.productsPerPage, this.filteredProducts.length)
    },
    selectCategory(category) {
      this.selectedCategory = category
      this.visibleCount = this.productsPerPage
    },
    resetCategory() {
      this.selectCategory(ALL_CATEGORIES_LABEL)
    },
    productClick(product) {
      this.showProductModal = true
      this.product = product
    },
    setActiveProductByIndex(index) {
      if (index < 0 || index >= this.modalProducts.length) {
        return
      }

      this.product = this.modalProducts[index]
      this.visibleCount = Math.max(this.visibleCount, index + 1)
    },
    goPrevProduct() {
      this.setActiveProductByIndex(this.currentProductIndex - 1)
    },
    goNextProduct() {
      this.setActiveProductByIndex(this.currentProductIndex + 1)
    },
    closeModal() {
      this.showProductModal = false
    }
  },
  mounted() {
    this.products = this.getProducts()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.list-enter-active,
.list-leave-active,
.list-move {
  transition: transform 0.45s ease, opacity 0.45s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(24px);
}

.fadeProduct-enter-active,
.fadeProduct-leave-active {
  transition: opacity 0.16s ease;
}

.fadeProduct-enter-from,
.fadeProduct-leave-to {
  opacity: 0;
}

.fadeProduct-enter-active .modal-panel,
.fadeProduct-leave-active .modal-panel {
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.fadeProduct-enter-from .modal-panel,
.fadeProduct-leave-to .modal-panel {
  opacity: 0;
  transform: translateY(8px) scale(0.985);
}
</style>

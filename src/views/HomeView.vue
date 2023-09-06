<template>
  <!-- <product-slider /> -->
  <div class="object-scale-down h-[580px]">
    <AutomaticProductSlider />
  </div>

  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#">
            Каталог
          </a>

          <div class="flex items-center" id="store-nav-content">
            <a class="pl-3 inline-block no-underline hover:text-black" href="#">
              <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
              </svg>
            </a>

            <a class="pl-3 inline-block no-underline hover:text-black" href="#">
              <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path
                  d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <TransitionGroup name="list">
        <product v-for="(product, index) in loadedProducts" :key="index" :product="product" />
      </TransitionGroup>


    </div>
  </section>
</template>

<script>
import Product from '../components/Product.vue';
// import ProductSlider from '../components/ProductSlider.vue';
import AutomaticProductSlider from '../components/AutomaticProductSlider.vue';

export default {
  name: 'home',
  components: {
    'product': Product,
    // 'ProductSlider': ProductSlider,
    'AutomaticProductSlider': AutomaticProductSlider
  },
  data() {
    return {
      products: [],
      loadedProducts: [],
    }
  },
  methods: {
    getProduct() {
      const products = [
        {
          id: 2,
          location: "Варна",
          name: "Врата от ковано желязо",
          imgSRC: "./images/zelena-vrata.jpg",
          category: "Врати"
        },
        {
          id: 3,
          location: "Варна",
          name: "Навес за две парко места в двора на КООП",
          imgSRC: "./images/naves-za-dve-parko-mesta.jpg",
          category: "Навеси"
        },
        {
          id: 4,
          location: "с. Любен Каравелово",
          name: "Изработка и монтаж на козирка, с покритие от поликарбонатна плоскост",
          imgSRC: "./images/izrabotka-i-montaj-na-kozirka.jpg",
          category: "Козирки"
        },
        {
          id: 5,
          location: "с. Изворско",
          name: "Класически метален парапет в с. Изворско.",
          imgSRC: "./images/klasicheski-metalen-parapet.jpg",
          category: "Парапети"
        },
        {
          id: 6,
          location: "Варна",
          name: "Дворна портичка на ул. Александър Василев (маалата)",
          imgSRC: "./images/dvorna-portichka-maalata.jpg",
          category: "Врати"
        },
        {
          id: 7,
          location: "Варна",
          name: "Дворна портичка на ул.кап. 'Георги Георгиев' (маалата)",
          imgSRC: "./images/dvorna-portichka-maalata-ul-georgi-georgiev.jpg",
          category: "Врати"
        },
        {
          id: 8,
          location: "Аксаково",
          name: "Кокетна оградка на ул. Овеч",
          imgSRC: "./images/koketna-ogradka.jpg",
          category: "Огради"
        },
        {
          id: 9,
          location: "с. Любен Каравелово",
          name: "Изработка и монтаж на плъзгаща врата",
          imgSRC: "./images/pluzgashta-vrata-luben-karavelov.jpg",
          category: "Врати"
        },
        {
          id: 10,
          location: "Варна",
          name: "Метални преграждения на тераса, на къща близнак в местност Прибой",
          imgSRC: "./images/metalni-pregrajdeniq-na-terasa.jpg",
          category: "Преграждения"
        },
        {
          id: 11,
          location: "Варна",
          name: "Метална дворна врата за къща. Ул. Димчо Дебелянов, кв. Аспарухово",
          imgSRC: "./images/metalna-dvorna-vrata-za-kushta.jpg",
          category: "Врати"
        },
        {
          id: 12,
          location: "Варна",
          name: "Изработка на метални врати за всички мази на новопостроена сграда ул. Антон Страшимиров",
          imgSRC: "./images/metalni-vrati-za-vsichki-mazi.jpg",
          category: "Врати"
        },
        {
          id: 13,
          location: "Варна",
          name: "Изработка и монтаж на метални парапети на новопостроена сграда на ул. Антон Страшимиров",
          imgSRC: "./images/metalni-parapeti-na-novopostroena-sgrada.jpg",
          category: "Парапети"
        },
        {
          id: 14,
          location: "Варна",
          name: "Изработка на нова входна врата в жк. Младост, бл.136 (бивше общежитие на СОДИ Девня)",
          imgSRC: "./images/metalna-vrata-bivshe-obshtejitie.jpg",
          category: "Врати"
        },
        {
          id: 15,
          location: "Варна",
          name: "Изработка и монтаж на метални врати във вилна зона",
          imgSRC: "./images/metalni-vrati-selo-zvezdica.jpg",
          category: "Врати"
        },
        {
          id: 16,
          location: "Варна",
          name: "Беседка от метал, с подиум, покрита с поликарбонат. Комплекс 'Варна Сити Юг', бл. Виола.",
          imgSRC: "./images/besedka-kompleks-varna-city.jpg",
          category: "Беседи"
        },
        {
          id: 17,
          location: "Варна",
          name: "Изработка на метални конструкции, покрити с термо панели. Складове, стопански помещения, навеси, метални къщи и всякакви други.",
          imgSRC: "./images/metalni-konstrukci-pokriti-s-termo-paneli.jpg",
          category: "Конструкции"
        },
        {
          id: 18,
          location: "Аксково",
          name: "Изработка и монтаж на метални врати ул. Побити камъни.",
          imgSRC: "./images/metalni-vrati-ul-pobiti-kamuni.jpg",
          category: "Врати"
        },
        {
          id: 19,
          location: "Варна",
          name: "Изработка на навес, метална конструкция покрита с битумни керемиди в местност Добрева чешма.",
          imgSRC: "./images/naves-pokrit-s-bitumni-keremidi.jpg",
          category: "Навеси"
        },
        {
          id: 20,
          location: "с. Изворско",
          name: "Изработка и монтаж на двукрила порта",
          imgSRC: "./images/metalni-vrati-selo-izvorsko.jpg",
          category: "Врати"
        },
        {
          id: 21,
          location: "Варна",
          name: "Фитнес уреди за открито",
          imgSRC: "./images/fintes-ured.jpg",
          category: "Фитнес"
        },
        {
          id: 22,
          location: "с. Приселци",
          name: "Метална ограда",
          imgSRC: "./images/metalna-ograda-priselci.jpg",
          category: "Огради"
        },
        {
          id: 23,
          location: "с. Кичево",
          name: "Изработка на козирка от метална конструкция и поликарбонатна плоскост в местност Добрева чешма",
          imgSRC: "./images/kozirka-mestnost-dobreva-cheshma.jpg",
          category: "Козирки"
        },
        {
          id: 24,
          location: "с. Тополи",
          name: "Метални парапети на новостроящ се обект",
          imgSRC: "./images/metalen-parapet-selo-topoli.jpg",
          category: "Парапети"
        },
        {
          id: 25,
          location: "Варна",
          name: "Декоративни преграждания пред гаражи, пригодени за жилищни помещения. Ул. Тодор Димов 31",
          imgSRC: "./images/dekorativni-pregrajdeniq-ulica-todor-dimitrov.jpg",
          category: "Преграждения"
        },
        {
          id: 26,
          location: "Варна",
          name: "Навес на тераса на последен етаж, метална консърукция и поликарбонат. Ул. Ген. Столипин 19",
          imgSRC: "./images/naves-ul-gen-stolipin-19.jpg",
          category: "Навеси"
        },
        {
          id: 27,
          location: "с. Приселци",
          name: "Метална дворна врата с две крила",
          imgSRC: "./images/metalna-dvorna-vrata-selo-priselci.jpg",
          category: "Врати"
        },
        {
          id: 28,
          location: "Варна",
          name: "Изработка на асма в местност Боровец юг",
          imgSRC: "./images/asma-mestnost-borovec.jpg",
          category: "Конструкции"
        },
        {
          id: 29,
          location: "Варна",
          name: "Конструкция на покрива на един от високите хотели на Златни пясъци, за поставяне на съоражения, с цел намаляване на енергийна мощност",
          imgSRC: "./images/konstrukciq-zlatni-pqsuci.jpg",
          category: "Конструкции"
        },
        {
          id: 30,
          location: "Варна",
          name: "Изработка на навес в местност Акчелар",
          imgSRC: "./images/naves-akchelar.jpg",
          category: "Навеси"
        },
        {
          id: 31,
          location: "с. Изворско",
          name: "Заграждения с метални колони",
          imgSRC: "./images/zagrajdeniq-selo-izvorsko.jpg",
          category: "Конструкции"
        },
        {
          id: 32,
          location: "Варна",
          name: "Метални врати за мази с допълнителна касова брава в жк. Бриз",
          imgSRC: "./images/metalni-vrati-jk-bliz.jpg",
          category: "Врати"
        },
        {
          id: 33,
          location: "Варна",
          name: "Метални изделия и конструкции в местността Акчелар",
          imgSRC: "./images/metalni-izdeliq-akchelar.jpg",
          category: "Конструкции"
        },
        {
          id: 34,
          location: "Варна",
          name: "Декоративни прегради в междублоковите пространства на ул. Поп Харитон, бл. 55",
          imgSRC: "./images/dekorativni-pregradi-ulica-pop-hariton.jpg",
          category: "Конструкции"
        },
        {
          id: 35,
          location: "Варна",
          name: "Покривна конструкция на вход на жилищен блок в жк. Кайсиева градина, бл.214, вх.3",
          imgSRC: "./images/pokrivna-konstrukciq-kaisieva-gradina.jpg",
          category: "Конструкции"
        },
        {
          id: 36,
          location: "Варна",
          name: "Метална двупластова врата за апартамент ул. Крепостна, бл. 17",
          imgSRC: "./images/dvuplastova-vrata-ulica-krepostna.jpg",
          category: "Врати"
        },
        {
          id: 37,
          location: "с. Константиново",
          name: "Дворна порта за селски имот",
          imgSRC: "./images/dvorna-porta-selo-konstantinovo.jpg",
          category: "Врати"
        },
      ];

      const product = [];

      let found = true;
      let currentProductIndex = 0;

      while (found) {

        if (this.loadedProducts.length <= currentProductIndex) {

          let perPage = 8;
          let prodLen = products.length;
          let currentLen = currentProductIndex + perPage;

          if (prodLen < currentLen) {
            perPage = (prodLen - currentProductIndex)
          }

          for (let i = 0; i < perPage; i++) {
            this.loadedProducts.push({
              id: products[currentProductIndex + i].id,
              location: products[currentProductIndex + i].location,
              name: products[currentProductIndex + i].name,
              imgSRC: products[currentProductIndex + i].imgSRC,
              category: products[currentProductIndex + i].category
            });
          };

          found = false;
        }
        currentProductIndex++;
      }

      return product;
    },
    handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 500) {
        this.getProduct()
      }
    }
  },
  mounted() {
    this.products = this.getProduct();
    window.addEventListener("scroll", this.handleScroll)
  },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

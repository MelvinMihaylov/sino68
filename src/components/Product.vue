
<template>
    <div v-for="product in products" :key="product.name" class="w-full h-96 md:w-1/3 xl:w-1/4 p-8 flex flex-col mb-5">
        <a href="#">
            <img class="hover:grow hover:shadow-lg" style="width: 500px; height: 250px;" :src="product.imgSRC" />
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
                    imgSRC: "./images/zelena-vrata.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Навес за две парко места в двора на КООП",
                    imgSRC: "./images/naves-za-dve-parko-mesta.jpg",
                    category: "Навеси"
                },
                {
                    location: "с. Любен Каравелово",
                    name: "Изработка и монтаж на козирка, с покритие от поликарбонатна плоскост",
                    imgSRC: "./images/izrabotka-i-montaj-na-kozirka.jpg",
                    category: "Козирки"
                },
                {
                    location: "с. Изворско",
                    name: "Класически метален парапет в с. Изворско.",
                    imgSRC: "./images/klasicheski-metalen-parapet.jpg",
                    category: "Парапет"
                },
                {
                    location: "Варна",
                    name: "Дворна портичка на ул. Александър Василев (маалата)",
                    imgSRC: "./images/dvorna-portichka-maalata.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Дворна портичка на ул.кап. 'Георги Георгиев' (маалата)",
                    imgSRC: "./images/dvorna-portichka-maalata-ul-georgi-georgiev.jpg",
                    category: "Врати"
                },
                {
                    location: "Аксаково",
                    name: "Кокетна оградка на ул. Овеч",
                    imgSRC: "./images/koketna-ogradka.jpg",
                    category: "Огради"
                },
                {
                    location: "с. Любен Каравелово",
                    name: "Изработка и монтаж на плъзгаща врата",
                    imgSRC: "./images/pluzgashta-vrata-luben-karavelov.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Метални преграждения на тераса, на къща близнак в местност Прибой",
                    imgSRC: "./images/metalni-pregrajdeniq-na-terasa.jpg",
                    category: "Преграждения"
                },
                {
                    location: "Варна",
                    name: "Метална дворна врата за къща. Ул. Димчо Дебелянов, кв. Аспарухово",
                    imgSRC: "./images/metalna-dvorna-vrata-za-kushta.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Изработка на метални врати за всички мази на новопостроена сграда ул. Антон Страшимиров",
                    imgSRC: "./images/metalni-vrati-za-vsichki-mazi.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Изработка и монтаж на метални парапети на новопостроена сграда на ул. Антон Страшимиров",
                    imgSRC: "./images/metalni-parapeti-na-novopostroena-sgrada.jpg",
                    category: "Парапети"
                },
                {
                    location: "Варна",
                    name: "Изработка на нова входна врата в жк. Младост, бл.136 (бивше общежитие на СОДИ Девня)",
                    imgSRC: "./images/metalna-vrata-bivshe-obshtejitie.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Изработка и монтаж на метални врати във вилна зона",
                    imgSRC: "./images/metalni-vrati-selo-zvezdica.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Беседка от метал, с подиум, покрита с поликарбонат. Комплекс 'Варна Сити Юг', бл. Виола.",
                    imgSRC: "./images/besedka-kompleks-varna-city.jpg",
                    category: "Беседи"
                },
                {
                    location: "Варна",
                    name: "Изработка на метални конструкции, покрити с термо панели. Складове, стопански помещения, навеси, метални къщи и всякакви други.",
                    imgSRC: "./images/metalni-konstrukci-pokriti-s-termo-paneli.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Аксково",
                    name: "Изработка и монтаж на метални врати ул. Побити камъни.",
                    imgSRC: "./images/metalni-vrati-ul-pobiti-kamuni.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Изработка на навес, метална конструкция покрита с битумни керемиди в местност Добрева чешма.",
                    imgSRC: "./images/naves-pokrit-s-bitumni-keremidi.jpg",
                    category: "Навеси"
                },
                {
                    location: "с. Изворско",
                    name: "Изработка и монтаж на двукрила порта",
                    imgSRC: "./images/metalni-vrati-selo-izvorsko.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Фитнес уреди за открито",
                    imgSRC: "./images/fintes-ured.jpg",
                    category: "Фитнес"
                },
                {
                    location: "с. Приселци",
                    name: "Метална ограда",
                    imgSRC: "./images/metalna-ograda-priselci.jpg",
                    category: "Огради"
                },
                {
                    location: "с. Кичево",
                    name: "Изработка на козирка от метална конструкция и поликарбонатна плоскост в местност Добрева чешма",
                    imgSRC: "./images/kozirka-mestnost-dobreva-cheshma.jpg",
                    category: "Козирки"
                },
                {
                    location: "с. Тополи",
                    name: "Метални парапети на новостроящ се обект",
                    imgSRC: "./images/metalen-parapet-selo-topoli.jpg",
                    category: "Парапети"
                },
                {
                    location: "Варна",
                    name: "Декоративни преграждания пред гаражи, пригодени за жилищни помещения. Ул. Тодор Димов 31",
                    imgSRC: "./images/dekorativni-pregrajdeniq-ulica-todor-dimitrov.jpg",
                    category: "Преграждения"
                },
                {
                    location: "Варна",
                    name: "Навес на тераса на последен етаж, метална консърукция и поликарбонат. Ул. Ген. Столипин 19",
                    imgSRC: "./images/naves-ul-gen-stolipin-19.jpg",
                    category: "Навеси"
                },
                {
                    location: "с. Приселци",
                    name: "Метална дворна врата с две крила",
                    imgSRC: "./images/metalna-dvorna-vrata-selo-priselci.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Изработка на асма в местност Боровец юг",
                    imgSRC: "./images/asma-mestnost-borovec.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Конструкция на покрива на един от високите хотели на Златни пясъци, за поставяне на съоражения, с цел намаляване на енергийна мощност",
                    imgSRC: "./images/konstrukciq-zlatni-pqsuci.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Изработка на навес в местност Акчелар",
                    imgSRC: "./images/naves-akchelar.jpg",
                    category: "Навеси"
                },
                {
                    location: "с. Изворско",
                    name: "Заграждения с метални колони",
                    imgSRC: "./images/zagrajdeniq-selo-izvorsko.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Метални врати за мази с допълнителна касова брава в жк. Бриз",
                    imgSRC: "./images/metalni-vrati-jk-bliz.jpg",
                    category: "Врати"
                },
                {
                    location: "Варна",
                    name: "Метални изделия и конструкции в местността Акчелар",
                    imgSRC: "./images/metalni-izdeliq-akchelar.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Декоративни прегради в междублоковите пространства на ул. Поп Харитон, бл. 55",
                    imgSRC: "./images/dekorativni-pregradi-ulica-pop-hariton.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Покривна конструкция на вход на жилищен блок в жк. Кайсиева градина, бл.214, вх.3",
                    imgSRC: "./images/pokrivna-konstrukciq-kaisieva-gradina.jpg",
                    category: "Конструкции"
                },
                {
                    location: "Варна",
                    name: "Метална двупластова врата за апартамент ул. Крепостна, бл. 17",
                    imgSRC: "./images/dvuplastova-vrata-ulica-krepostna.jpg",
                    category: "Врати"
                },
                {
                    location: "с. Константиново",
                    name: "Дворна порта за селски имот",
                    imgSRC: "./images/dvorna-porta-selo-konstantinovo.jpg",
                    category: "Врати"
                },
            ]
        }
    }
}
</script>
<script setup>
import { reactive } from 'vue'
import Plus from '../assets/images/plus.svg';
import Minus from '../assets/images/minus.svg';

const questions = reactive([
  {
    title: 'Що таке StreamAdvisor як він працює?',
    answer: 'StreamAdvisor — це сервіс, що дозволяє малим і великим стрімерам монетизувати свій контент за допомогою спонсорства у вигляді реклами, яка автоматично з\'являється в ефірі стрімера протягом певного періоду часу.',
    isExpanded: true // Initial value
  },
  {
    title: 'На яких платформах працює StreamAdvisor?',
    answer: 'Наразі StreamAdvisor працює на двох платформах - Twitch і YouTube.',
    isExpanded: false
  },
  {
    title: 'Як часто з\'являються нові спонсори?',
    answer: 'Нове спонсорство стає доступним якомога частіше. Ми постійно працюємо з брендами та ведемо переговори про потенційне спонсорство з багатьма компаніями. Якщо спонсорство підтверджено, ми негайно повідомляємо про це наших стрімерів у нашому Discord або електронною поштою. При цьому, StreamAdvisor не гарантує появу конкретних та/або будь-яких брендів та не визначає певну періодичність такої появи.',
    isExpanded: false
  },
  {
    title: 'Чи можуть стрімери брати участь у спонсорстві іншою мовою, крім української?',
    answer: 'Ми - український сервіс, а тому, співпрацюємо тільки зі стрімерами, що транслюють контент українською мовою.',
    isExpanded: false
  },
  {
    title: 'Як розраховуються перегляди спонсорських коштів?',
    answer: 'Перегляди розраховуються простим способом: якщо спонсорські матеріали відображаються в потоці - стрімер отримає таку ж кількість переглядів, як і кількість глядачів, які в цей час перебувають у прямому ефірі. Одна людина, яка переглядає потік під час відображення ілюстрації, вважається одним переглядом. Так, наприклад, якби в даний момент трансляцію подивилися 100 осіб, вона б зараховувалася як 100 переглядів.',
    isExpanded: false
  },
  {
    title: 'Що за програми «Приведи друга» та «Level Up»?',
    answer: '«Приведи друга» — це партнерська програма StreamAdvisor, яка дозволяє стрімерам заробляти додаткові бонусні кошти у визначеному StreamAdvisor  розмірі за запрошення інших стрімерів на нашу платформу, за умови подальшого використання таким стрімером сервісу . Level Up – це наша програма гейміфікації, де стрімери збирають бали XP для розблокування визначених програмою рівнів. Кожен рівень включає в себе можливість збільшити заробіток стрімера.',
    isExpanded: false
  },
  {
    title: 'Чи захищені конфіденційні дані стрімера в StreamAdvisor?',
    answer: 'Звичайно, усі конфіденційні дані стрімера охороняються та захищаються кількома системами. Вони не будуть використовуватися з будь-якої причини і не передаються третім особам без особистого дозволу стрімера, за виключенням передачі inStreamly P.S.A.. Умови використання персональних даних передбачені в Загальних положеннях та умовах сервісу та Політиці конфіденційності.',
    isExpanded: false
  },
  {
    title: 'Чому обліковий запис StreamAdvisor потрібно пов\'язати з обліковим записом Twitch/YouTube?',
    answer: 'Це необхідно, щоб наша система могла зчитувати статистику таких даних як: тривалість трансляції, кількість глядачів або категорія, в якій відображається трансляція, а наша система могла виводи рекламні прояви на веб-сторінці або веб-ресурсі, якою керує стрімер.',
    isExpanded: false
  }
])

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}
</script>

<script>
import { Collapse } from 'vue-collapsed';
export default {
  components: {
    Collapse
  }
}
</script>

<template>
  <div class="info">
    <div class="info-wrapper">
      <div class="info-accordion">
        <div v-for="(question, index) in questions" :key="question.title" class="info-accordion__item">
          <button @click="handleAccordion(index)" class="info-subtitle">
            <div class="info-accordion__button">
              {{ question.title }}
              <img :src="question.isExpanded ? Minus : Plus" alt="btn">
            </div>
          </button>
          <Collapse :when="questions[index].isExpanded" class="info-accordion__collapse">
            <p class="info-text">
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
    <div class="info-line"/>
    <div class="info-image">
      <img src="../assets/images/info-background.svg" alt="background">
    </div>
  </div>
</template>

<style lang="scss">

</style>


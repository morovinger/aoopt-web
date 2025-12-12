<template>
  <div class="law-page bg-gray-50" data-page="law">
    <!-- Legal Practice Section -->
    <section class="law-practice py-20 bg-white" data-section="practice">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Section Title -->
        <h1 class="section-title text-5xl font-bold text-gray-300 mb-16 uppercase tracking-wide">
          Юридическая практика
          <span class="title-underline"></span>
        </h1>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <!-- Left Column - Text Content -->
          <div class="text-content space-y-6">
            <p class="text-base text-gray-700 leading-relaxed">
              За годы работы в заповедниках и национальных парков Северо-Запада России накоплен ценный 
              практический опыт в правовой сфере.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              Судебные дела, оформление документации, разрешение конфликтных юридических вопросов - вся 
              эта информация может быть весьма полезной для коллег, поэтому она будет размещаться здесь.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              Информация приведена в сжатом формате, если какой-то из примеров заинтересовал вас - можно 
              обратиться к контактному лицу, указанному в описании конкретного случая.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              Приглашаем всех специалистов ООПТ Асоциации присоединяться к работе над разделом.
            </p>
          </div>

          <!-- Right Column - Scales Image -->
          <div class="scales-image-wrapper">
            <div class="relative h-96 rounded-lg overflow-hidden">
              <NuxtImg 
                src="/images/law/justice.jpg" 
                alt="Scales of Justice"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Examples Section -->
    <section class="law-examples py-20 bg-gray-50" data-section="examples">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Section Title -->
        <h2 class="section-title text-5xl font-bold text-gray-300 mb-16 uppercase tracking-wide">
          Примеры из практики
          <span class="title-underline"></span>
        </h2>

        <!-- Image Gallery Grid -->
        <div class="examples-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(example, index) in legalExamples" 
            :key="index"
            @click="openModal(example)"
            class="example-card group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative"
          >
            <div class="relative h-64 overflow-hidden bg-gray-200">
              <NuxtImg 
                :src="example.image"
                :alt="example.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <!-- Overlay with title on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-4 text-white">
                  <h3 class="text-sm font-semibold leading-tight">{{ example.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Popup -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="selectedExample"
          @click="closeModal"
          class="modal-overlay fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            @click.stop
            class="modal-content bg-white rounded-lg shadow-2xl max-w-4xl w-full my-8 overflow-hidden"
          >
            <!-- Modal Header with Image -->
            <div class="relative h-64 md:h-80 overflow-hidden bg-gray-200">
              <NuxtImg 
                :src="selectedExample.image"
                :alt="selectedExample.title"
                class="w-full h-full object-cover"
              />
              <button 
                @click="closeModal"
                class="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body p-6 md:p-8 max-h-96 overflow-y-auto">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {{ selectedExample.title }}
              </h2>
              
              <div class="prose prose-sm md:prose-base max-w-none">
                <p 
                  v-for="(paragraph, idx) in selectedExample.fullText.split('\n\n')" 
                  :key="idx"
                  class="text-gray-700 leading-relaxed mb-4"
                >
                  {{ paragraph }}
                </p>
              </div>

              <!-- Link to PDF if available -->
              <div v-if="selectedExample.pdfLink" class="mt-6 pt-6 border-t border-gray-200">
                <a 
                  :href="`${baseURL}${selectedExample.pdfLink.replace(/^\//, '')}`"
                  target="_blank"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Смотреть решение суда
                </a>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer bg-gray-50 px-6 md:px-8 py-4 flex justify-end">
              <button 
                @click="closeModal"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

useHead({
  title: 'Юридическая практика | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Практический опыт в правовой сфере заповедников и национальных парков Северо-Запада России' 
    }
  ]
})

interface LegalExample {
  image: string
  title: string
  fullText: string
  pdfLink?: string
}

const legalExamples: LegalExample[] = [
  {
    image: '/images/law/tree.png',
    title: 'Расторжение контракта с подрядчиком, проводившим лесоустройство, через суд - «Онежское Поморье» (Кенозерский национальный парк)',
    fullText: `Национальный парк «Онежское Поморье» — территория, на которой натурные лесоустроительные работы проводились 40 лет назад. После передачи национального парка «Онежское Поморье» в управление ФГБУ «Национальный парк «Кенозерский» директор учреждения Елена Шатковская смогла добиться выделения средств на проведение лесоустройства.

В 2017 году был объявлен конкурс, победителем стало общество с ограниченной ответственностью «Лесные и Экологические Проекты». Уже на первом этапе предоставленные материалы ООО «ЛесЭколПроект» не позволили признать результаты подготовительных работ полноценными, качественными и исчерпывающими. В ходе работ выяснилось, что Общество вовсе не обладало необходимыми допусками и лицензией на работу с картографическим материалом высокой точности.

Директором учреждения было принято вынужденное решение — расторгнуть контракт с подрядчиком в одностороннем порядке. С данным решением исполнитель не согласился, и инициировал судебный процесс, который продолжался восемь месяцев. В течение этого времени Парку удалось собрать необходимые доказательства для обоснования принятого решения о расторжении контракта.

Необоснованная законом и агрессивная по отношению к требовательному заказчику позиция ООО «ЛесЭколПроект» не была поддержана судебным решением. Федеральный бюджет не понёс многомиллионных потерь, оплачивая некачественное лесоустройство.

Для получения подробной информации обратитесь к Елене Андреевне Христинюк, начальнику юридического отдела (по вопросам застройки и землепользования, правовым аспектам деятельности ФГБУ «Национальный парк «Кенозерский») по эл. почте urist@kenozero.ru или телефону +7 (8182) 21-40-13.`,
    pdfLink: '/images/law/court-decision-kenozero.pdf'
  },
  {
    image: '/images/law/house.png',
    title: 'Снос капитального строения на земелях сельскохозназначения в «Смоленском Поозерье»',
    fullText: `В 2008 году гражданин N. стал владельцем полевого земельного участка, находящегося за границами населённого пункта. Продавец данного земельного участка ранее планировал вести фермерское хозяйство и установил сруб дома на бетонном фундаменте, накрыв его временной крышей. Сруб дома был установлен до образования национального парка «Смоленское Поозерье».

Гражданин N. установил в 50 метрах новый фундамент и перенёс на него сруб дома. Данные действия, по сути, являлись незаконным возведением капитального строения - жилого дома на полевом земельном участке за границами населённого пункта.

Национальный парк «Смоленское Поозерье» подал иск в районный суд о сносе вышеуказанного строения. Судебное разбирательство длилось до 2014 года. В этот период N. пытался разными способами легализовать постройку и планировал создание сети гостевых домов. В частности он при поддержке сельской администрации пытался присоединить свой земельный участок к ближайшему населённому пункту – деревня Маклаково. Он организовал сход граждан из числа местных жителей, которые на тот период постоянно проживали в деревне Маклаково – 5 человек.

Демидовским районным судом было вынесено решение о сносе данного дома за счёт гражданина N. Смоленский областной суд оставил данное решение в силе.

Для получения подробной информации обратитесь к Гудковой Екатерине Алексеевне, начальнику отдела по правовому обеспечению деятельности и кадровой политике НП "Смоленское Поозерье" по эл. почте ekunash@mail.ru или телефону: 8 (481 47) 2 62 04`
  },
  {
    image: '/images/law/field.png',
    title: 'Изменение вида разрешённого использования земельных участков сельскохозназначения с «для ведения личного подсобного хозяйства» на «для ведения садоводства» - «Смоленское Поозерье»',
    fullText: `В 2008 году гражданин N. стал владельцем полевого земельного участка, находящегося за границами населённого пункта. Продавец данного земельного участка ранее планировал вести фермерское хозяйство и установил сруб дома на бетонном фундаменте, накрыв его временной крышей. Сруб дома был установлен до образования национального парка «Смоленское Поозерье».

Гражданин N. установил в 50 метрах новый фундамент и перенёс на него сруб дома. Данные действия, по сути, являлись незаконным возведением капитального строения - жилого дома на полевом земельном участке за границами населённого пункта.

Национальный парк «Смоленское Поозерье» подал иск в районный суд о сносе вышеуказанного строения. Судебное разбирательство длилось до 2014 года. В этот период N. пытался разными способами легализовать постройку и планировал создание сети гостевых домов. В частности он при поддержке сельской администрации пытался присоединить свой земельный участок к ближайшему населённому пункту – деревня Маклаково. Он организовал сход граждан из числа местных жителей, которые на тот период постоянно проживали в деревне Маклаково – 5 человек.

Демидовским районным судом было вынесено решение о сносе данного дома за счёт гражданина N. Смоленский областной суд оставил данное решение в силе.

Для получения подробной информации обратитесь к Гудковой Екатерине Алексеевне, начальнику отдела по правовому обеспечению деятельности и кадровой политике НП "Смоленское Поозерье" по эл. почте ekunash@mail.ru или телефону: 8 (481 47) 2 62 04`
  },
  {
    image: '/images/law/hunt.png',
    title: 'Регулирование численности кабана - национальный парк «Орловское полесье»',
    fullText: `Постановлением заместителя руководителя Управления Росприроднадзора по Орловской области № 05-043/2017 от 23 марта 2017 г. директор ФГБУ «Национальный парк «Орловское полесье» за проведение не в полном объеме регулирования численности кабана привлекался к ответственности по ч.3 ст. 8.37 КоАП РФ.

Решением суда №12-1-6/2017 от 26 июня 2017 года данное постановление было отменено. В судебном заседании представителями национального парка было доказано, что при принятии решения о регулировании численности, он получает ПРАВО, а не ОБЯЗАННОСТЬ по освоению выделенных квот на регулирование. Единственной нормой, регулирующей неиспользование лицензии, выданной в целях регулирования численности, определена обязанность по ее сдаче в двухнедельный срок после окончания срока действия по месту выдачи.

Для получения подробной информации обратитесь к заместителю директора по охране окружающей среды Николаю Викторовичу Вышегородских по эл. почте: niko141@yandex.ru, или телефону: 89208190066.`
  },
  {
    image: '/images/law/garbage.png',
    title: 'Привлечение к административной ответственности за несанкционированное размещение отходов на территории национального парка «Смоленское Поозерье»',
    fullText: `При патрулировании территории были обнаружены несанкционированные места размещения отходов производства и потребления в выделе 4 квартала 49 Гобзянской лесной дачи около 10 м. куб. и в выделе 10 квартала 42 Гобзянской лесной дачи около 15 м. куб.

Вышеуказанные несанкционированные места размещения отходов производства и потребления возникли в результате не надлежащего исполнения Главой Администрации своих полномочий в области обращения с отходами в части организации сбора и вывоза бытовых отходов и мусора.

В соответствии с п. 2 ст. 15 ФЗ «Об ООПТ» на территориях национального парка запрещается любая деятельности, которая может нанести ущерб природным комплексам и объектам растительного и животного мира, культурно-историческим объектам и которая противоречит целям и задачам национального парка.

Согласно п. 1 ст. 51 ФЗ № 7 «Об охрянее окружающей среды» отходы потребления, подлежат сбору, накоплению, утилизации, транспортировке, хранению и захоронению, условия и способы, которых должны быть безопасными для окружающей среды. 08.10.2018г. Мировой судья судебного участка № 31 в МО «Демидовский район» Смоленской области вынесла в отношении Главы Администрации МО Заборьевское сельское поселение Демидовского района Смоленской области постановление о привлечении к административной ответственности по ч. 3 ст. 8.31 КоАП РФ и назначила административное наказание в виде штрафа в размере 20 000 рублей.

Для получения подробной информации обратитесь к Гудковой Екатерине Алексеевне, начальнику отдела по правовому обеспечению деятельности и кадровой политике НП «Смоленское Поозерье» по эл. почте ekunash@mail.ru или телефону: 8 (481 47) 2 62 04`
  }
]

const selectedExample = ref<LegalExample | null>(null)

const openModal = (example: LegalExample) => {
  selectedExample.value = example
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedExample.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.law-page {
  font-family: system-ui, -apple-system, sans-serif;
}

.section-title {
  position: relative;
  display: inline-block;
}

.title-underline {
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #06b6d4 0%, #0891b2 100%);
  margin-top: 12px;
}

.scales-image-wrapper {
  position: relative;
}

.scales-image-wrapper::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: 10px;
  bottom: 10px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%);
  border-radius: 0.5rem;
  z-index: -1;
}

.example-card {
  background: white;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-4px);
}

.examples-grid {
  perspective: 1000px;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95);
  opacity: 0;
}

.modal-overlay {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Scrollbar styling for modal */
.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

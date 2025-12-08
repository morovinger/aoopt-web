<template>
  <section id="contacts" class="contacts-section py-16 bg-white" data-component="contacts">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-6xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Контакты
          <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-cyan-400"></span>
        </h2>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Left Column: Map -->
        <div class="w-full h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            class="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5422107335826!2d31.836044676866205!3d55.509888472995264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cf49945a3b470b%3A0xe34070ade22df32d!2z0YPQuy4g0JPRg9GA0LXQstC40YfQsCwgMTksINCf0YDQttC10LLQsNC70YzRgdC60L7QtSwg0KHQvNC-0LvQtdC90YHQutCw0Y8g0L7QsdC7LiwgMjE2Mjcw!5e1!3m2!1sru!2sru!4v1765233705628!5m2!1sru!2sru"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Right Column: Contact Information -->
        <div class="flex flex-col justify-center">
          <!-- Legal Address -->
          <div class="mb-8 text-center lg:text-left">
            <h3 class="text-lg font-bold text-gray-700 mb-2">Юридический адрес:</h3>
            <p class="text-gray-600">
              ул. Гуревича, 19, Пржевальское, Смоленская обл., Россия, 216270
            </p>
          </div>

          <!-- Team Section -->
          <div>
            <h3 class="text-base font-bold text-gray-700 mb-4 text-center lg:text-left">Команда:</h3>
            
            <div class="space-y-6">
              <!-- President -->
              <div class="border-l-4 border-cyan-400 pl-4">
                <p class="font-semibold text-gray-800 mb-1">Президент Ассоциации - Виктор Гришенков</p>
                <p class="text-gray-600">
                  <a href="mailto:grishenkov@parkugra.ru" class="text-cyan-600 hover:text-cyan-700 hover:underline">
                    grishenkov@parkugra.ru
                  </a>
                </p>
                <p class="text-gray-600">
                  <a href="tel:+79206115062" class="hover:text-cyan-600">+7 (920) 611-50-62</a>
                </p>
              </div>

              <!-- Coordinator -->
              <div class="border-l-4 border-cyan-400 pl-4">
                <p class="font-semibold text-gray-800 mb-1">Координатор - Михаил Яблоков</p>
                <p class="text-gray-600">
                  <a href="mailto:aoopt.szr@gmail.com" class="text-cyan-600 hover:text-cyan-700 hover:underline">
                    aoopt.szr@gmail.com
                  </a>
                </p>
                <p class="text-gray-600">
                  <a href="tel:+79210038522" class="hover:text-cyan-600">+7 (921) 003-85-22</a>
                </p>
              </div>

              <!-- Chief Accountant -->
              <div class="border-l-4 border-cyan-400 pl-4">
                <p class="font-semibold text-gray-800 mb-1">Главный бухгалтер - Ольга Кочергина</p>
                <p class="text-gray-600">
                  <a href="mailto:ko4ergina.olga@yandex.ru" class="text-cyan-600 hover:text-cyan-700 hover:underline">
                    ko4ergina.olga@yandex.ru
                  </a>
                </p>
                <p class="text-gray-600">
                  <a href="tel:+79156338167" class="hover:text-cyan-600">+7 (915) 633-81-67</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

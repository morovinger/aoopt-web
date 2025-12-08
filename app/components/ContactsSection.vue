<template>
  <section id="contacts" class="contacts-section py-16 bg-white" data-component="contacts">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Контакты
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400"></span>
        </h2>
      </div>

      <div class="max-w-3xl mx-auto">
        <!-- Legal Address -->
        <div class="mb-8">
          <h3 class="text-lg font-bold text-gray-700 mb-2">Юридический адрес:</h3>
          <p class="text-gray-600">
            ул. Гуревича, 19, Пржевальское, Смоленская обл., Россия, 216270
          </p>
        </div>

        <!-- Team Section -->
        <div>
          <h3 class="text-base font-bold text-gray-700 mb-4">Команда:</h3>
          
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
  </section>
</template>

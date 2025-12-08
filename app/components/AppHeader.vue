<template>
  <header class="site-header bg-[#52894A] sticky top-0 z-50 font-sans" data-component="header">
    <div class="container mx-auto px-4 py-3">
      <div class="header-wrapper flex justify-between items-center">
        <!-- Logo Section -->
        <NuxtLink to="/" class="site-logo flex items-center gap-3" data-element="logo">
          <div class="w-10 h-10 bg-[#3D7C3B] rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-white font-bold text-base uppercase tracking-wide">Ассоциация ООПТ</span>
            <span class="text-white text-xs uppercase tracking-wider">Северо-Запада</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav hidden lg:flex items-center space-x-1" data-element="navigation">
          <NuxtLink to="/" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">Главная</NuxtLink>
          <a href="/#about" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">О Нас</a>
          <NuxtLink to="/news" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">Новости</NuxtLink>
          
          <div class="nav-dropdown relative group" data-dropdown="specialist">
            <NuxtLink to="/specialist" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded flex items-center gap-1">
              Специалисту
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </NuxtLink>
            <div class="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <NuxtLink to="/specialist" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold border-b">Специалистам</NuxtLink>
              <NuxtLink to="/law" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Юридическая практика</NuxtLink>
              <NuxtLink to="/experts" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">База научных сотрудников</NuxtLink>
              <NuxtLink to="/eco-expeditions" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Площадки для экспедиций</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/tourism" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">Туристу</NuxtLink>
          <NuxtLink to="/volunteer" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">Волонтеру</NuxtLink>
          <NuxtLink to="/contacts" class="px-4 py-2 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs transition rounded">Контакты</NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="mobile-menu-toggle lg:hidden text-white focus:outline-none" data-element="mobile-toggle">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu lg:hidden mt-3 pb-3 border-t border-[#3D7C3B] pt-3" data-element="mobile-menu">
        <div class="flex flex-col space-y-1">
          <NuxtLink to="/" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Главная</NuxtLink>
          <a href="/#about" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded" @click="isMobileMenuOpen = false">О Нас</a>
          <NuxtLink to="/news" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Новости</NuxtLink>
          <NuxtLink to="/specialist" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Специалисту</NuxtLink>
          <div class="pl-4 py-2">
            <NuxtLink to="/law" class="block py-1 pl-4 text-sm text-white/90 hover:text-white">Юридическая практика</NuxtLink>
            <NuxtLink to="/experts" class="block py-1 pl-4 text-sm text-white/90 hover:text-white">База научных сотрудников</NuxtLink>
            <NuxtLink to="/eco-expeditions" class="block py-1 pl-4 text-sm text-white/90 hover:text-white">Площадки для экспедиций</NuxtLink>
          </div>
          <NuxtLink to="/tourism" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Туристу</NuxtLink>
          <NuxtLink to="/volunteer" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Волонтеру</NuxtLink>
          <NuxtLink to="/contacts" class="block py-2 px-4 text-white hover:bg-[#3D7C3B] font-medium uppercase text-xs rounded">Контакты</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>


<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-1">
      <SideMenu />

      <div class="flex-1">
        <header class="bg-blue-600 text-white p-4 shadow-md">
          <h1 class="text-lg font-bold">Payroll System</h1>
        </header>
        <main class="p-4 overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>

    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Demo System. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
</script>

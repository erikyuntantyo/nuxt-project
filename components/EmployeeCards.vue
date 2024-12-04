<template>
  <div
    class="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition cursor-pointer"
    @click="handleToggle"
  >
    <h3 class="text-lg font-semibold">{{ employee.name }}</h3>
    <p class="text-gray-600">Position: {{ employee.position }}</p>
    <div v-if="isOpen" class="mt-4 text-sm text-gray-700">
      <p>Email: {{ employee.email }}</p>
      <p>Phone: {{ employee.phone }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Employee {
  id: number
  name: string
  position: string
  email: string
  phone: string
}

defineProps<{
  employee: Employee
  isOpen: boolean
}>()

defineEmits<{
  (e: 'toggleOpen', id: number): void
}>()

const handleToggle = () => {
  emit('toggleOpen', employee.id)
}
</script>

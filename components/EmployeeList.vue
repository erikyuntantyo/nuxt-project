<template>
  <div class="mt-5">
    <div v-if="loading" class="text-center">
      <p>Loading employees...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Failed to load employees.</p>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        :is-open="openEmployeeId === employee.id"
        @toggle-open="handleToggleOpen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from './EmployeeCards.vue'
import { ref } from 'vue'
import { useFetch } from '#app'

interface Employee {
  id: number
  name: string
  position: string
  email: string
  phone: string
}

const { data: employees, pending: loading, error } = useFetch<Employee[]>('/api/employees')

const openEmployeeId = ref<number | null>(null)

const handleToggleOpen = (employeeId: number) => {
  openEmployeeId.value = openEmployeeId.value === employeeId ? null : employeeId
}
</script>

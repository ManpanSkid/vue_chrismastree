<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-900 to-green-950 p-4 text-white">
    <div class="w-full max-w-xl bg-white text-black rounded-3xl p-6 shadow-2xl border border-gray-200">
      <h1 class="text-4xl font-extrabold text-center mb-6 tracking-tight">Order Status</h1>

      <!-- Email Input Section -->
      <div v-if="!orderId && !loading" class="space-y-4">
        <p class="text-gray-700 text-center">Enter your email to look up your order:</p>
        <input
          v-model="email"
          type="email"
          class="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-700 focus:outline-none"
          placeholder="Your email"
        />
        <button
          @click="fetchOrderByEmail"
          class="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
        >
          Find Order
        </button>
      </div>

      <!-- Loading Spinner -->
      <div v-if="loading" class="flex justify-center py-6">
        <div class="animate-spin rounded-full h-10 w-10 border-4 border-green-700 border-t-transparent"></div>
      </div>

      <!-- Order Details -->
      <div v-if="order && !loading" class="space-y-4">
        <div class="bg-gray-50 p-4 rounded-2xl shadow-inner border border-gray-200">
          <h2 class="text-2xl font-bold mb-3 text-center">Order Overview</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p class="font-semibold text-gray-600">Order ID</p>
              <p class="text-lg font-medium">{{ order.id }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Name</p>
              <p class="text-lg font-medium">{{ order.first_name }} {{ order.last_name }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Tree</p>
              <p class="text-lg font-medium">{{ order.tree }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Package</p>
              <p class="text-lg font-medium">{{ order.package }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Delivery</p>
              <p class="text-lg font-medium">{{ order.delivery }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Status</p>
              <p class="text-lg font-bold text-red-600">{{ order.status }}</p>
            </div>
          </div>
        </div>

        <button
          @click="reset"
          class="w-full mt-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl text-lg font-semibold shadow transition"
        >
          Look Up Another Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const orderId = ref(sessionStorage.getItem('order_id'))
const order = ref(null)
const email = ref('')
const loading = ref(false)

onMounted(() => {
  if (orderId.value) fetchOrderById(orderId.value)
})

async function fetchOrderById(id) {
  try {
    loading.value = true
    const res = await fetch(`http://localhost:8000/orders/${id}`)
    if (!res.ok) throw new Error('Order not found')
    order.value = await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

async function fetchOrderByEmail() {
  if (!email.value) return
  try {
    loading.value = true
    const res = await fetch(`http://localhost:8000/orders/${email.value}`)
    if (!res.ok) throw new Error('Order not found')
    const data = await res.json()
    order.value = data
    orderId.value = data.id
    sessionStorage.setItem('order_id', data.id)
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

function reset() {
  orderId.value = null
  order.value = null
  email.value = ''
  sessionStorage.removeItem('order_id')
}
</script>

<style>
/* Additional mobile tweaks */
@media (max-width: 640px) {
  h1 {
    font-size: 1.9rem;
  }
}
</style>

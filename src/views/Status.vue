<template>
  <div class="min-h-screen flex items-center justify-center bg-linear-to-b from-green-900 to-green-950 p-4 text-white">
    <div class="w-full max-w-xl bg-white text-black rounded-3xl p-6 shadow-2xl border border-gray-200">
      <h1 class="text-4xl font-extrabold text-center mb-6 tracking-tight">Order Status</h1>

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

      <div v-if="loading" class="flex justify-center py-6">
        <div class="animate-spin rounded-full h-10 w-10 border-4 border-green-700 border-t-transparent"></div>
      </div>

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
              <p class="text-lg font-medium capitalize">{{ order.first_name }} {{ order.last_name }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Tree</p>
              <p class="text-lg font-medium capitalize">{{ order.tree }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Package</p>
              <p class="text-lg font-medium capitalize">{{ order.package }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Delivery</p>
              <p class="text-lg font-medium capitalize">{{ order.delivery }}</p>
            </div>

            <div>
              <p class="font-semibold text-gray-600">Status</p>
              <p class="text-lg font-bold text-red-600 capitalize">{{ order.status }}</p>
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
      
      <div v-if="error" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const apiUrl: string = import.meta.env.VITE_API_BASE_URL;

// 1. Define the Order Interface
interface Order {
    id: string;
    first_name: string;
    last_name: string;
    tree: string;
    package: string;
    delivery: string;
    status: string;
}

// 2. Apply explicit types to refs
const orderId = ref<string | null>(sessionStorage.getItem('order_id'))
const order = ref<Order | null>(null)
const email = ref<string>('')
const loading = ref<boolean>(false)
const error = ref<string | null>(null) // Added for better error handling

onMounted(() => {
  if (orderId.value) fetchOrderById(orderId.value)
})

// 3. Type function parameters and return value
async function fetchOrderById(id: string): Promise<void> {
  error.value = null; // Clear previous errors
  try {
    loading.value = true
    const res = await fetch(`${apiUrl}/orders/${id}`)
    
    if (!res.ok) {
        // Assume API returns JSON even on 404/400 for a detailed message
        // For this example, we'll use a generic not found error
        throw new Error('Order not found or an error occurred.')
    }
    
    // Type assertion for the fetched data
    const data: Order = await res.json()
    order.value = data
    
  } catch (e: any) {
    console.error(e)
    error.value = e.message || 'Could not connect to the order service.'
    order.value = null // Clear order on failure
  } finally {
    loading.value = false
  }
}

// 4. Type function parameters and return value
async function fetchOrderByEmail(): Promise<void> {
  if (!email.value) return
  error.value = null; // Clear previous errors
  try {
    loading.value = true
    const res = await fetch(`${apiUrl}/orders/${email.value}`) // Adjusted endpoint to be more realistic for email lookup
    
    if (!res.ok) {
        throw new Error('No order found for that email address.')
    }
    
    // Type assertion for the fetched data
    const data: Order = await res.json()
    order.value = data
    orderId.value = data.id
    sessionStorage.setItem('order_id', data.id)
    
  } catch (e: any) {
    console.error(e)
    error.value = e.message || 'Could not connect to the order service.'
    order.value = null // Clear order on failure
  } finally {
    loading.value = false
  }
}

// 5. Type function return value
function reset(): void {
  orderId.value = null
  order.value = null
  email.value = ''
  error.value = null;
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
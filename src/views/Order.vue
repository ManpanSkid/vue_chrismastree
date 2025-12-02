<template>
  <div class="p-4 md:p-6 space-y-8 max-w-3xl mx-auto text-gray-100">

    <!-- Price -->
    <div class="text-right text-lg font-bold text-green-300">
      Current Price: €{{ totalPrice.toFixed(2) }}
    </div>

    <!-- STEP 1 – TREE & SPECS -->
    <div v-if="step === 1" class="space-y-6 bg-white/10 p-5 rounded-xl shadow">
      <h2 class="text-xl font-semibold mb-4">Select Tree & Specs</h2>

      <!-- TREE TYPE -->
      <div>
        <h3 class="font-medium mb-3">Tree Type (multiplier)</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <!-- Nordmann Card -->
          <div class="option-card" :class="{ active: order.tree === 'nordmann' }" @click="order.tree = 'nordmann'">
            <img src="/nordmann.jpg" class="h-20 mx-auto" alt="Nordmann tree" />
            <div class="text-center font-bold mt-2">Nordmann</div>
            <div class="text-sm text-gray-200">Strong needles, premium quality</div>
          </div>

          <!-- Spruce Card -->
          <div class="option-card" :class="{ active: order.tree === 'spruce' }" @click="order.tree = 'spruce'">
            <img src="/nordmann.jpg" class="h-20 mx-auto" alt="Spruce tree" />
            <div class="text-center font-bold mt-2">Spruce</div>
            <div class="text-sm text-gray-200">Traditional and aromatic</div>
          </div>

        </div>
      </div>

      <!-- SIZE -->
      <div>
        <h3 class="font-medium mb-3">Tree Size</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

          <div class="option-card" :class="{ active: order.size === 's' }" @click="order.size = 's'">
            <div class="font-bold text-center">Small</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.Small }}</div>
          </div>

          <div class="option-card" :class="{ active: order.size === 'm' }" @click="order.size = 'm'">
            <div class="font-bold text-center">Medium</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.Medium }}</div>
          </div>

          <div class="option-card" :class="{ active: order.size === 'l' }" @click="order.size = 'l'">
            <div class="font-bold text-center">Large</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.Large }}</div>
          </div>

          <div class="option-card" :class="{ active: order.size === 'xl' }" @click="order.size = 'xl'">
            <div class="font-bold text-center">XL</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.XLarge }}</div>
          </div>

        </div>
      </div>

      <!-- PACKAGE -->
      <div>
        <h3 class="font-medium mb-3">Package</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div class="option-card" :class="{ active: order.package === 'basic' }" @click="order.package = 'basic'">
            <div class="font-bold text-center">Basic</div>
            <div class="text-sm text-gray-200 text-center">Just the tree</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Basic }}</div>
          </div>

          <div class="option-card" :class="{ active: order.package === 'extra' }" @click="order.package = 'extra'">
            <div class="font-bold text-center">Extra</div>
            <div class="text-sm text-gray-200 text-center">Setup included</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Extra }}</div>
          </div>

          <div class="option-card" :class="{ active: order.package === 'full' }" @click="order.package = 'full'">
            <div class="font-bold text-center">Full</div>
            <div class="text-sm text-gray-200 text-center">Setup + removal</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Full }}</div>
          </div>

        </div>
      </div>

      <!-- DELIVERY -->
      <div>
        <h3 class="font-medium mb-3">Delivery</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div class="option-card" :class="{ active: order.delivery === 'standard' }"
            @click="order.delivery = 'standard'">
            <div class="text-center font-bold">Standard</div>
            <div class="text-gray-200 text-sm text-center">2–3 days</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Delivery.Standard }}</div>
          </div>

          <div class="option-card" :class="{ active: order.delivery === 'fast' }" @click="order.delivery = 'fast'">
            <div class="text-center font-bold">Fast</div>
            <div class="text-gray-200 text-sm text-center">Next day</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Delivery.Fast }}</div>
          </div>

          <div class="option-card" :class="{ active: order.delivery === 'express' }"
            @click="order.delivery = 'express'">
            <div class="text-center font-bold">Express</div>
            <div class="text-gray-200 text-sm text-center">Same day</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Delivery.Express }}</div>
          </div>

        </div>
      </div>

      <!-- TREE STAND -->
      <div>
        <label
          class="flex items-center gap-3 cursor-pointer bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/20 transition">
          <input type="checkbox" class="form-checkbox h-5 w-5" v-model="order.tree_stand" />
          <div>
            <div class="font-bold">Tree Stand</div>
            <div class="text-sm text-gray-200">Stable metal stand</div>
            <div class="text-green-300">€{{ prices.treeStand }}</div>
          </div>
        </label>
      </div>

      <!-- NEXT -->
      <button class="px-4 py-2 text-base font-bold rounded bg-green-400 text-black hover:bg-green-300 w-full"
        @click="step = 2">
        Next
      </button>

    </div>



    <!-- STEP 2 – Personal Data -->
    <div v-if="step === 2" class="bg-white/10 p-6 rounded-xl shadow space-y-6">

      <h2 class="text-xl font-semibold text-center">Your Details</h2>

      <div v-if="error" class="text-red-300 text-sm text-center">{{ error }}</div>

      <!-- FIRST + LAST NAME -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <!-- First Name -->
        <div class="floating-group">
          <input v-model="order.customer.first_name" type="text" id="firstName" class="floating-input" />
          <label for="firstName" class="floating-label">First Name</label>
        </div>

        <!-- Last Name -->
        <div class="floating-group">
          <input v-model="order.customer.last_name" type="text" id="lastName" class="floating-input" />
          <label for="lastName" class="floating-label">Last Name</label>
        </div>

      </div>

      <!-- EMAIL -->
      <div class="floating-group">
        <input v-model="order.customer.email" type="email" id="email" class="floating-input" />
        <label for="email" class="floating-label">Email Address</label>
      </div>

      <!-- PHONE -->
      <div class="floating-group">
        <input v-model="order.customer.phone" type="text" id="phone" class="floating-input" />
        <label for="phone" class="floating-label">Phone Number</label>
      </div>

      <!-- ADDRESS -->
      <div class="floating-group">
        <input v-model="order.customer.address" type="text" id="address" class="floating-input" />
        <label for="address" class="floating-label">Street & House Number</label>
      </div>

      <!-- ZIP + CITY -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div class="floating-group">
          <input v-model="order.customer.postal_code" type="text" id="zip" class="floating-input" />
          <label for="zip" class="floating-label">Postal Code</label>
        </div>

        <div class="floating-group">
          <input v-model="order.customer.city" type="text" id="city" class="floating-input" />
          <label for="city" class="floating-label">City</label>
        </div>

      </div>

      <!-- NAV BUTTONS -->
      <div class="flex justify-between pt-2">
        <button class="btn-secondary" @click="step = 1">Back</button>
        <button class="btn-primary" @click="validateStep2">Next</button>
      </div>

    </div>


    <!-- STEP 3 – Payment -->
    <div v-if="step === 3" class="space-y-6 bg-white/10 p-5 rounded-xl shadow">
      <h2 class="text-xl font-semibold text-center">Select Payment Method</h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <!-- PAYPAL -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'paypal' }"
          @click="selectPayment('paypal')">
          <img src="/paypal.svg" alt="PayPal" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">PayPal</div>
          <p class="text-xs text-gray-300 text-center mt-1">Secure purchase protection</p>
        </div>

        <!-- STRIPE -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'stripe' }"
          @click="selectPayment('stripe')">
          <img src="/card.png" alt="Stripe" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">Credit Card (Stripe)</div>
          <p class="text-xs text-gray-300 text-center mt-1">Visa • Mastercard • Amex</p>
        </div>

        <!-- CASH -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'cash' }"
          @click="selectPayment('cash')">
          <img src="/cash.png" alt="Cash" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">Cash</div>
          <p class="text-xs text-gray-300 text-center mt-1">Pay at delivery</p>
        </div>

      </div>

      <div class="flex justify-between mt-6">
        <button class="btn-secondary" @click="step = 2">Back</button>

        <button class="btn-primary" :disabled="!order.payment_method"
          :class="{ 'opacity-50 cursor-not-allowed': !order.payment_method }"
          @click="order.payment_method && selectPayment(order.payment_method)">
          Continue
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.payment-card {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s ease;
}

.payment-card:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.payment-active {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.2);
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.5);
}

.option-card {
  background-color: rgba(128, 128, 128, 0.25);
  border: 1px solid;
  border-color: color-mix(in oklab, var(--color-white));
  border-radius: var(--radius-xl);
  cursor: pointer;
  padding: calc(var(--spacing) * 4)
    /* 1rem = 16px */
  ;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)
      /* cubic-bezier(0.4, 0, 0.2, 1) */
    );
  transition-duration: var(--tw-duration, var(--default-transition-duration)
      /* 150ms */
    );

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.option-card:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.option-card.active {
  border-color: #05df7220;
  background-color: #05df7220;
}

.input {
  width: 100%;
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 2);
  color: black;
  background-color: white;
}

.btn-primary {
  padding-inline: calc(var(--spacing) * 4);
  border-radius: 0.25rem;
  padding-block: calc(var(--spacing) * 2);
  background-color: var(--color-green-400);
  color: var(--color-black);

  font-weight: bold;
}

.btn-primary:hover {
  background-color: var(--color-green-300);
}

.btn-secondary {
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);

  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-300);
  color: var(--color-white);
  font: bold;
}

.floating-group {
  position: relative;
}

.floating-input {
  width: 100%;
  padding: 1rem 0.75rem 0.5rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.85);
  color: #000;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
}

.floating-input:focus {
  border-color: #4ade80;
  /* green-400 */
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.4);
  background: #fff;
}

.floating-label {
  position: absolute;
  top: 1rem;
  left: 0.75rem;
  color: #555;
  pointer-events: none;
  transition: 0.2s ease;
  background: transparent;
  padding: 0 0.25rem;
}

.floating-input:focus+.floating-label,
.floating-input:not(:placeholder-shown)+.floating-label {
  transform: translateY(-1.1rem);
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  color: black;
}
</style>

<script setup>
import { ref, computed } from 'vue'

const prices = {
  Tree: { Nordmann: 1, Spruce: 0.7 },
  Size: { Small: 35.87, Medium: 49.92, Large: 65.76, XLarge: 79.89 },
  Package: { Basic: 33.23, Extra: 41.36, Full: 55.78 },
  Delivery: { Standard: 0, Fast: 8.85, Express: 24.67 },
  treeStand: 35.99
}

const step = ref(1)
const error = ref("")

const order = ref({
  customer: {
    first_name: "", last_name: "", address: "",
    postal_code: "", city: "", phone: "", email: ""
  },
  tree: "nordmann",
  size: "s",
  package: "basic",
  delivery: "standard",
  tree_stand: false,
  payment_method: ""
})

/* PRICE CALCULATION */
const totalPrice = computed(() => {
  let total = 0
  const treeMap = { nordmann: "Nordmann", spruce: "Spruce" }
  const multiplier = prices.Tree[treeMap[order.value.tree]]
  const sizeMap = { s: "Small", m: "Medium", l: "Large", xl: "XLarge" }
  total += prices.Size[sizeMap[order.value.size]] * multiplier
  const packageMap = { basic: "Basic", extra: "Extra", full: "Full" }
  total += prices.Package[packageMap[order.value.package]]
  const deliveryMap = { standard: "Standard", fast: "Fast", express: "Express" }
  total += prices.Delivery[deliveryMap[order.value.delivery]]
  if (order.value.tree_stand) total += prices.treeStand
  return total
})

/* INPUT VALIDATION */
const validateStep2 = () => {
  error.value = ""

  const c = order.value.customer

  if (!c.first_name || !c.last_name || !c.address || !c.city ||
    !c.postal_code || !c.email || !c.phone) {
    error.value = "Bitte alle Felder ausfüllen."
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) {
    error.value = "Bitte eine gültige Email-Adresse eingeben."
    return
  }

  if (c.phone.length < 6) {
    error.value = "Telefonnummer ist zu kurz."
    return
  }

  if (!/^\d{4,6}$/.test(c.postal_code)) {
    error.value = "PLZ muss aus Zahlen bestehen."
    return
  }

  step.value = 3
}

/* PAYMENT */
const paymentResponse = ref(null)

const selectPayment = async (method) => {
  order.value.payment_method = method

  const res = await fetch('http://localhost:8000/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order.value)
  })

  paymentResponse.value = await res.json()
  step.value = 5
}

const proceedToPayment = () => {
  if (paymentResponse.value?.checkout_url) {
    sessionStorage.setItem("order_id", paymentResponse.value.order_id)
    window.location.href = paymentResponse.value.checkout_url
  }
}
</script>

<template>
  <div class="p-4 md:p-6 space-y-8 max-w-3xl mx-auto text-gray-100">

    <!-- Price -->
    <div class="text-right text-lg font-bold text-green-300">
      Aktueller Preis: €{{ totalPrice.toFixed(2) }}
    </div>

    <!-- STEP 1 – TREE & SPECS -->
    <div v-if="step === 1" class="space-y-6 bg-white/10 p-5 rounded-xl shadow">
      <h2 class="text-xl font-semibold mb-4">Baum & Eigenschaften auswählen</h2>

      <!-- TREE TYPE -->
      <div>
        <h3 class="font-medium mb-3">Baumart</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <!-- Nordmann Card -->
          <div class="option-card" :class="{ active: order.tree === 'nordmann' }" @click="order.tree = 'nordmann'">
            <img src="/nordmann.jpg" class="h-20 mx-auto" alt="Nordmann Baum" />
            <div class="text-center font-bold mt-2">Nordmann</div>
            <div class="text-sm text-gray-200">Starke Nadeln, Premium-Qualität</div>
          </div>

          <!-- Spruce Card -->
          <div class="option-card" :class="{ active: order.tree === 'spruce' }" @click="order.tree = 'spruce'">
            <img src="/nordmann.jpg" class="h-20 mx-auto" alt="Fichte" />
            <div class="text-center font-bold mt-2">Fichte</div>
            <div class="text-sm text-gray-200">Traditionell und aromatisch</div>
          </div>

        </div>
      </div>

      <!-- SIZE -->
      <div>
        <h3 class="font-medium mb-3">Baumgröße</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

          <div class="option-card" :class="{ active: order.size === 's' }" @click="order.size = 's'">
            <div class="font-bold text-center">Klein</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.Small }}</div>
          </div>

          <div class="option-card" :class="{ active: order.size === 'm' }" @click="order.size = 'm'">
            <div class="font-bold text-center">Mittel</div>
            <div class="text-center text-sm text-green-300">€{{ prices.Size.Medium }}</div>
          </div>

          <div class="option-card" :class="{ active: order.size === 'l' }" @click="order.size = 'l'">
            <div class="font-bold text-center">Groß</div>
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
        <h3 class="font-medium mb-3">Paket</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div class="option-card" :class="{ active: order.package === 'basic' }" @click="order.package = 'basic'">
            <div class="font-bold text-center">Basic</div>
            <div class="text-sm text-gray-200 text-center">Nur der Baum</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Basic }}</div>
          </div>

          <div class="option-card" :class="{ active: order.package === 'extra' }" @click="order.package = 'extra'">
            <div class="font-bold text-center">Extra</div>
            <div class="text-sm text-gray-200 text-center">Aufbau inklusive</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Extra }}</div>
          </div>

          <div class="option-card" :class="{ active: order.package === 'full' }" @click="order.package = 'full'">
            <div class="font-bold text-center">Full</div>
            <div class="text-sm text-gray-200 text-center">Aufbau + Abholung</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Package.Full }}</div>
          </div>

        </div>
      </div>

      <!-- DELIVERY -->
      <div>
        <h3 class="font-medium mb-3">Lieferung</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div class="option-card" :class="{ active: order.delivery === 'standard' }"
            @click="order.delivery = 'standard'">
            <div class="text-center font-bold">Standard</div>
            <div class="text-gray-200 text-sm text-center">2–3 Tage</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Delivery.Standard }}</div>
          </div>

          <div class="option-card" :class="{ active: order.delivery === 'fast' }" @click="order.delivery = 'fast'">
            <div class="text-center font-bold">Schnell</div>
            <div class="text-gray-200 text-sm text-center">Nächster Tag</div>
            <div class="text-green-300 text-center mt-1">€{{ prices.Delivery.Fast }}</div>
          </div>

          <div class="option-card" :class="{ active: order.delivery === 'express' }"
            @click="order.delivery = 'express'">
            <div class="text-center font-bold">Express</div>
            <div class="text-gray-200 text-sm text-center">Gleicher Tag</div>
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
            <div class="font-bold">Christbaumständer</div>
            <div class="text-sm text-gray-200">Stabiler Metallständer</div>
            <div class="text-green-300">€{{ prices.treeStand }}</div>
          </div>
        </label>
      </div>

      <!-- NEXT -->
      <button class="px-4 py-2 text-base font-bold rounded bg-green-400 text-black hover:bg-green-300 w-full"
        @click="step = 2">
        Weiter
      </button>

    </div>



    <!-- STEP 2 – Personal Data -->
    <div v-if="step === 2" class="bg-white/10 p-6 rounded-xl shadow space-y-6">

      <h2 class="text-xl font-semibold text-center">Ihre Daten</h2>

      <div v-if="error" class="text-red-300 text-sm text-center">{{ error }}</div>

      <!-- FIRST + LAST NAME -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <!-- First Name -->
        <div class="floating-group">
          <input v-model="order.customer.first_name" type="text" id="firstName" class="floating-input" />
          <label for="firstName" class="floating-label">Vorname</label>
        </div>

        <!-- Last Name -->
        <div class="floating-group">
          <input v-model="order.customer.last_name" type="text" id="lastName" class="floating-input" />
          <label for="lastName" class="floating-label">Nachname</label>
        </div>

      </div>

      <!-- EMAIL -->
      <div class="floating-group">
        <input v-model="order.customer.email" type="email" id="email" class="floating-input" />
        <label for="email" class="floating-label">E-Mail-Adresse</label>
      </div>

      <!-- PHONE -->
      <div class="floating-group">
        <input v-model="order.customer.phone" type="text" id="phone" class="floating-input" />
        <label for="phone" class="floating-label">Telefonnummer</label>
      </div>

      <!-- ADDRESS -->
      <div class="floating-group">
        <input v-model="order.customer.address" type="text" id="address" class="floating-input" />
        <label for="address" class="floating-label">Straße & Hausnummer</label>
      </div>

      <!-- ZIP + CITY -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div class="floating-group">
          <input v-model="order.customer.postal_code" type="text" id="zip" class="floating-input" />
          <label for="zip" class="floating-label">PLZ</label>
        </div>

        <div class="floating-group">
          <input v-model="order.customer.city" type="text" id="city" class="floating-input" />
          <label for="city" class="floating-label">Stadt</label>
        </div>

      </div>

      <!-- NAV BUTTONS -->
      <div class="flex justify-between pt-2">
        <button class="btn-secondary" @click="step = 1">Zurück</button>
        <button class="btn-primary" @click="validateStep2">Weiter</button>
      </div>

    </div>


    <!-- STEP 3 – Payment -->
    <div v-if="step === 3" class="space-y-6 bg-white/10 p-5 rounded-xl shadow">
      <h2 class="text-xl font-semibold text-center">Zahlungsmethode wählen</h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <!-- PAYPAL -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'paypal' }"
          @click="selectPayment('paypal')">
          <img src="/paypal.svg" alt="PayPal" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">PayPal</div>
          <p class="text-xs text-gray-300 text-center mt-1">Sicherer Käuferschutz</p>
        </div>

        <!-- STRIPE -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'stripe' }"
          @click="selectPayment('stripe')">
          <img src="/card.png" alt="Stripe" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">Kartenzahlung</div>
          <p class="text-xs text-gray-300 text-center mt-1">Visa • Mastercard • Debit</p>
        </div>

        <!-- CASH -->
        <div class="payment-card" :class="{ 'payment-active': order.payment_method === 'cash' }"
          @click="selectPayment('cash')">
          <img src="/cash.png" alt="Barzahlung" class="h-14 mx-auto" />
          <div class="text-center font-bold mt-2">Barzahlung</div>
          <p class="text-xs text-gray-300 text-center mt-1">Bezahlung bei Lieferung</p>
        </div>

      </div>

      <div class="flex justify-between mt-6">
        <button class="btn-secondary" @click="step = 2">Zurück</button>

        <button class="btn-primary" :disabled="!order.payment_method"
          :class="{ 'opacity-50 cursor-not-allowed': !order.payment_method }"
          @click="order.payment_method && clickToPayment()">
          Fortfahren
        </button>
      </div>
    </div>

    <!-- STEP 4 – Wait for Checkout -->
    <div v-if="step === 4" class="space-y-6 bg-white/10 p-5 rounded-xl shadow">
      <span class="flex items-center gap-2">
        <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        Verarbeitung läuft...
      </span>
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

<script setup lang="ts">
import { ref, computed } from 'vue'

const apiUrl: string = import.meta.env.VITE_API_BASE_URL;

// --- 1. Define Price Types ---
type TreeTypeKey = "Nordmann" | "Spruce";
type SizeKey = "Small" | "Medium" | "Large" | "XLarge";
type PackageKey = "Basic" | "Extra" | "Full";
type DeliveryKey = "Standard" | "Fast" | "Express";

interface Prices {
  Tree: Record<TreeTypeKey, number>;
  Size: Record<SizeKey, number>;
  Package: Record<PackageKey, number>;
  Delivery: Record<DeliveryKey, number>;
  treeStand: number;
}

const prices: Prices = {
  Tree: { Nordmann: 1, Spruce: 0.7 },
  Size: { Small: 35.87, Medium: 49.92, Large: 65.76, XLarge: 79.89 },
  Package: { Basic: 33.23, Extra: 41.36, Full: 55.78 },
  Delivery: { Standard: 0, Fast: 8.85, Express: 24.67 },
  treeStand: 35.99
}

// --- 2. Define Order Types ---
type OrderTree = 'nordmann' | 'spruce';
type OrderSize = 's' | 'm' | 'l' | 'xl';
type OrderPackage = 'basic' | 'extra' | 'full';
type OrderDelivery = 'standard' | 'fast' | 'express';
type OrderPayment = 'paypal' | 'stripe' | 'cash' | '';

interface Customer {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone: string;
  email: string;
}

interface Order {
  customer: Customer;
  tree: OrderTree;
  size: OrderSize;
  package: OrderPackage;
  delivery: OrderDelivery;
  tree_stand: boolean;
  payment_method: OrderPayment;
}

// --- 3. Define Reactive State ---
const step = ref<number>(1)
const error = ref<string>("")
const order = ref<Order>({
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
interface PaymentResponse {
  checkout_url: string;
  order_id: string;
}
const paymentResponse = ref<PaymentResponse | null>(null)

// --- 4. Define Mappers with Types ---
const treeMap: Record<OrderTree, TreeTypeKey> = { nordmann: "Nordmann", spruce: "Spruce" }
const sizeMap: Record<OrderSize, SizeKey> = { s: "Small", m: "Medium", l: "Large", xl: "XLarge" }
const packageMap: Record<OrderPackage, PackageKey> = { basic: "Basic", extra: "Extra", full: "Full" }
const deliveryMap: Record<OrderDelivery, DeliveryKey> = { standard: "Standard", fast: "Fast", express: "Express" }


/* PRICE CALCULATION */
const totalPrice = computed((): number => {
  let total: number = 0

  // Tree & Size
  const treeMultiplier: number = prices.Tree[treeMap[order.value.tree]]
  total += prices.Size[sizeMap[order.value.size]] * treeMultiplier

  // Package
  total += prices.Package[packageMap[order.value.package]]

  // Delivery
  total += prices.Delivery[deliveryMap[order.value.delivery]]

  // Tree Stand
  if (order.value.tree_stand) {
    total += prices.treeStand
  }

  return total
})

/* INPUT VALIDATION */
const validateStep2 = (): void => {
  error.value = ""

  const c: Customer = order.value.customer

  if (!c.first_name || !c.last_name || !c.address || !c.city ||
    !c.postal_code || !c.email || !c.phone) {
    error.value = "Bitte alle Felder ausfüllen."
    return
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) {
    error.value = "Bitte eine gültige Email-Adresse eingeben."
    return
  }

  // Phone validation
  if (c.phone.length < 6) {
    error.value = "Telefonnummer ist zu kurz."
    return
  }

  // Postal code validation
  if (!/^\d{4,6}$/.test(c.postal_code)) {
    error.value = "PLZ muss aus Zahlen bestehen."
    return
  }

  step.value = 3
}

/* PAYMENT */
const selectPayment = (method: OrderPayment) => {
  order.value.payment_method = method
}

const clickToPayment = async (): Promise<void> => {
  if (!order.value.payment_method)
    return;

  step.value = 4

  try {
    const res = await fetch(`${apiUrl}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order.value)
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    console.log("oki doki")

    const data: PaymentResponse = await res.json()
    paymentResponse.value = data

    proceedToPayment()
  } catch (e) {
    step.value = 3
    console.error("Payment submission failed:", e)
  }
}

const proceedToPayment = (): void => {
  if (paymentResponse.value?.checkout_url) {
    sessionStorage.setItem("order_id", paymentResponse.value.order_id)
    window.location.href = paymentResponse.value.checkout_url
  }
  else {
    step.value = 3
  }
}
</script>

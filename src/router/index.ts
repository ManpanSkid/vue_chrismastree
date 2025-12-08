import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Impressum from '../views/Impressum.vue'
import Status from '../views/Status.vue'
import Order from '../views/Order.vue'
import Kontakt from '../views/Kontakt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        publicRoute: true,
        title: 'Nordmanntannen günstig kaufen & liefern in Berlin Brandenburg',
        metaTags: [
          {
            name: 'description',
            content: 'Frische Nordmanntannen günstig online bestellen. Schnelle Lieferung in Berlin und Brandenburg. Premium Weihnachtsbäume direkt zu Ihnen nach Hause.'
          },
          {
            name: 'keywords',
            content: 'Nordmanntanne, Weihnachtsbaum, Christbaum, Berlin, Brandenburg, Lieferung, günstig, online bestellen, Tannenbaum kaufen'
          },
          {
            property: 'og:title',
            content: 'Nordmanntannen günstig kaufen & liefern | Berlin Brandenburg'
          },
          {
            property: 'og:description',
            content: 'Frische Nordmanntannen günstig online bestellen. Schnelle Lieferung in Berlin und Brandenburg. Premium Weihnachtsbäume direkt zu Ihnen nach Hause.'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:locale',
            content: 'de_DE'
          }
        ]
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        title: 'Nordmanntanne bestellen - Weihnachtsbaum Lieferung Berlin Brandenburg',
        metaTags: [
          {
            name: 'description',
            content: 'Bestellen Sie Ihre frische Nordmanntanne online. Einfache Bestellung, flexible Liefertermine in Berlin und Brandenburg. Jetzt Weihnachtsbaum sichern!'
          },
          {
            name: 'keywords',
            content: 'Nordmanntanne bestellen, Weihnachtsbaum online kaufen, Christbaum Lieferung Berlin, Tannenbaum Brandenburg'
          },
          {
            property: 'og:title',
            content: 'Nordmanntanne online bestellen | Berlin Brandenburg'
          },
          {
            property: 'og:description',
            content: 'Bestellen Sie Ihre frische Nordmanntanne online. Einfache Bestellung, flexible Liefertermine in Berlin und Brandenburg.'
          }
        ]
      }
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
      meta: {
        title: 'Bestellstatus - Ihre Nordmanntannen Lieferung verfolgen',
        metaTags: [
          {
            name: 'description',
            content: 'Verfolgen Sie den Status Ihrer Weihnachtsbaum-Bestellung. Aktuelle Informationen zur Lieferung Ihrer Nordmanntanne in Berlin und Brandenburg.'
          },
          {
            property: 'og:title',
            content: 'Bestellstatus verfolgen | Nordmanntannen Lieferung'
          }
        ]
      }
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
      meta: {
        title: 'Kontakt - Nordmanntannen Lieferung Berlin Brandenburg',
        metaTags: [
          {
            name: 'description',
            content: 'Haben Sie Fragen zu unseren Nordmanntannen oder der Lieferung? Kontaktieren Sie uns! Wir helfen Ihnen gerne bei Ihrer Weihnachtsbaum-Bestellung.'
          },
          {
            name: 'keywords',
            content: 'Kontakt, Nordmanntanne, Weihnachtsbaum, Kundenservice, Berlin, Brandenburg'
          },
          {
            property: 'og:title',
            content: 'Kontakt | Nordmanntannen Lieferung Berlin Brandenburg'
          }
        ]
      }
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
      meta: {
        title: 'Impressum - Nordmanntannen Lieferung Berlin Brandenburg',
        metaTags: [
          {
            name: 'description',
            content: 'Impressum und rechtliche Informationen zu unserem Nordmanntannen-Lieferservice in Berlin und Brandenburg.'
          },
          {
            property: 'og:title',
            content: 'Impressum | Nordmanntannen Lieferung'
          }
        ]
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Meta Tags und Title dynamisch setzen
router.beforeEach((to, from, next) => {
  // Title setzen
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string
  }

  // Alte Meta Tags entfernen
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.remove())

  // Neue Meta Tags hinzufügen
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  if (nearestWithMeta) {
    (nearestWithMeta.meta.metaTags as Array<any>).forEach((tagDef: any) => {
      const tag = document.createElement('meta')
      
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })
      
      tag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(tag)
    })
  }

  // Canonical URL setzen
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', window.location.origin + to.path)

  next()
})

export default router
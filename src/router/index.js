import { createRouter, createWebHistory } from 'vue-router'

import groupFinder from '/src/components/groupFinder.vue'
import qrCode from '/src/components/qrCode.vue'
import payment from '/src/components/payment.vue'
import dukeLipton from '/src/components/dukeLipton.vue'
import accountCreation from '/src/components/accountCreation.vue'

const routes = [{
        path: '/',
        name: 'Accueil | chapeau digital',
        component: groupFinder,
    },
    {
        path: '/qrcode',
        name: 'QR code | chapeau digital',
        component: qrCode,
    },
    {
        path: '/payment',
        name: 'Paiement | chapeau digital',
        component: payment,
        meta: { nav: false }
    },
    {
        path: '/account',
        name: 'Mon compte | chapeau digital',
        component: accountCreation,
        meta: { nav: true }
    },
    {
        path: '/duke-lipton',
        name: 'Duke Lipton | chapeau digital',
        component: dukeLipton,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
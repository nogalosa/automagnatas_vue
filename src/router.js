import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/model-select',
      name: 'model-select',
      component: () => import('./views/ModelSelect.vue')
    },
    {
      path: '/group-select',
      name: 'group-select',
      component: () => import('./views/GroupSelect.vue')
    },
    {
      path: '/search-results',
      name: 'search-results',
      component: () => import('./views/SearchResults.vue')
    },
    {
      path: '/item-details',
      name: 'item-details',
      component: () => import('./views/ItemDetails.vue')
    },




    { // Profile links
      path: '/login',
      name: 'login',
      component: () => import('./views/user/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/user/Register.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/user/Cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/user/Checkout.vue')
    },
    {
      path: '/checkout-success',
      name: 'checkout-success',
      component: () => import('./views/user/CheckoutSuccess.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/user/Profile.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import('./views/user/EditProfile.vue')
    },
    {
      path: '/edit-password',
      name: 'edit-password',
      component: () => import('./views/user/EditPassword.vue')
    },
    




    { // Misc links
      path: '/shipping-terms',
      name: 'shipping-terms',
      component: () => import('./views/misc/Shipping.vue')
    },
    {
      path: '/return-terms',
      name: 'return-terms',
      component: () => import('./views/misc/Returns.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./views/misc/Support.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/misc/Faq.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/misc/Contacts.vue')
    },
  ]
})

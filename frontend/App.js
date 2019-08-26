'use strict';

import Vue from 'vue';
import Router from 'Routes';
import Store from 'store/Main';
import VueLocalStorage from 'vue-localstorage';
import bootstrap from 'bootstrap';
import Notifications from 'vue-notification';

Vue.use(Notifications);
Vue.use(VueLocalStorage);

//Для облегчения разработки
window.MainStore = Store;
window.config = {};

new Vue({
    store: Store,
    router: Router,
    mounted: function() {
        window.VueApp = this;
    }
}).$mount('#app');
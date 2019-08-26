'use strict';

/**
 * Главный файл роутинга
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification';
Vue.use(Notifications);
Vue.use(VueRouter);


import IndexPage from 'components/IndexPage.vue';
import UserInfo from 'components/UserInfo.vue';


const Router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes: [
        {
            name: 'indexPage',
            path: '/',
            component: IndexPage,
        },
        {
            name: 'secondPage',
            path: '/second/page',
            component: UserInfo,
        }
    ]
});

export default Router;

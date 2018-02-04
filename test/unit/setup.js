import Vue from 'vue'
import ajax from 'vue-h-ajax';
import { mockRouter } from 'vuenit';

// Setup mock localStorage
global.window = {}
import localStorage from 'mock-local-storage'
window.localStorage = global.localStorage

// Init vuex store
import store from '@/store'
global.$store = store; // Globalize store

import router from '@/router'
global.$router = router;

const { $route } = mockRouter();
$route.name = "";

global.$route = $route;

// Setup ajax
Vue.use(ajax)
Vue.http.withCredentials = false;

// Define dummy mdl directive
Vue.directive('mdl', {
    bind (el) {
        return;
    }
})

Vue.config.productionTip = false

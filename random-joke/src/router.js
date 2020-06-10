import Vue from 'vue'
import VueRouter from 'vue-router';
import RandomJoke from './components/RandomJoke.vue'
import Home from './components/Home.vue'
import FavoriteJoke from './components/FavoriteJoke.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
            { path: '/', redirect: '/Home', component: Home},
            { path: '/Home', component: Home },
            { path: '/RandomJoke', component: RandomJoke },
            { path: '/FavroiteJoke', component: FavoriteJoke }
    ]
  })

export default router;
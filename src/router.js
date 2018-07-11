import Vue from 'vue'
import Router from 'vue-router'
import PhotoGrid from './views/PhotoGrid.vue'
import PhotoDetails from './views/PhotoDetails.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'photo-grid',
            component: PhotoGrid
        },
        {
            path: '/view/:postId',
            name: 'photo-details',
            component: PhotoDetails
        }
    ]
})

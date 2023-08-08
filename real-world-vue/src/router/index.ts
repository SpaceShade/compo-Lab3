import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import StudentListview from '@/views/StudentListview.vue'
import EventDetailView from '@/views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/Student',
      name: 'StudentList',
      component: StudentListview
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    },
    {
      path:'/event/:id/edit',
      name:'event-edit',
      props: true,
      component: EventEditView

    },
    {
      path:'/event/:id/register',
      name:'event-register',
      props: true,
      component: EventRegisterView

    }

  ]
})

export default router

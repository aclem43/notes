import { ref } from 'vue';
import Home from '../pages/Home.vue';

interface Pages {
    [key: string]: {
        component: any
    }
}

const pages: Pages = {
    home: {
        component: Home
    },
    note: {
        component: () => import('../pages/Note.vue')
    }

}


const page = ref(pages.home);

export function setPage(pageName: string) {
    page.value = pages[pageName];
}

export default page;

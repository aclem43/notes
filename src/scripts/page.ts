import { shallowRef } from 'vue';
import Home from '../pages/Home.vue';
import Note from '../pages/Note.vue';

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
        component: Note
    }

}


const page = shallowRef(pages.home);

export function setPage(pageName: string) {
    page.value = pages[pageName];
}

export default page;

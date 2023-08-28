import { shallowRef } from 'vue';
import Editor from '../pages/Editor.vue';
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
    editor: {
        component: Editor
    }

}


const page = shallowRef(pages.home);

export function setPage(pageName: string) {
    page.value = pages[pageName];
}

export default page;

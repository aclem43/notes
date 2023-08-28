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

export const setPage = (pageName: keyof Pages) => {
    page.value = pages[pageName];
    console.log(page.value);
}

export default page;

import { shallowRef } from 'vue';
import Editor from '../pages/Editor.vue';
import Home from '../pages/Home.vue';
import Settings from '../pages/Settings.vue';

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
    },
    settings: {
        component: Settings
    }

}


const page = shallowRef(pages.home);

export const setPage = (pageName: keyof Pages) => {
    if (!pages[pageName]) {
        throw new Error(`Page ${pageName} does not exist`);
    }
    if (page.value === pages[pageName]) {
        page.value = pages.home;
    }

    page.value = pages[pageName];
}



export default page;

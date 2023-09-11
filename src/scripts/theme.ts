import { Ref, ref } from "vue";

const themes = {
    light: {
        '--background': '#f4f5f5',
        '--background-secondary': '#f8f8f8',

        '--hover': '#eee',
        '--hover-secondary': '#ddd',

        '--text': '#270c02',
        '--text-secondary': '#666',

        '--border': '#043a4f',
        '--border-secondary': '#ddd',

        '--primary': '#12b3f3',
        '--primary-hover': '#0069d9',

        "--secondary": "#cdbdfa"

    },
    dark: {
        '--background': '#09021d',
        '--background-secondary': '#444',

        '--hover': '#555',
        '--hover-secondary': '#666',

        '--text': ' #fef4f0',
        '--text-secondary': '#ddd',

        '--border': '#043a4f',
        '--border-secondary': '#666',

        '--primary': '#12b3f3',
        '--primary-hover': '#0069d9',

        '--secondary': '#09021d'

    }
}

const currentTheme: Ref<keyof typeof themes> = ref('light')

export const setTheme = (theme: keyof typeof themes) => {
    const root = document.documentElement;
    const selectedTheme = themes[theme];

    for (const key in selectedTheme) {
        root.style.setProperty(key, selectedTheme[key as keyof typeof selectedTheme]);
    }
}

export const switchTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    setTheme(currentTheme.value);
}



import { Ref, ref } from "vue";

const themes = {
    light: {
        '--background': '#fff',
        '--background-secondary': '#f8f8f8',

        '--hover': '#eee',
        '--hover-secondary': '#ddd',

        '--text': '#333',
        '--text-secondary': '#666',

        '--border': '#ccc',
        '--border-secondary': '#ddd',

        '--primary': '#007bff',
        '--primary-hover': '#0069d9',

    },
    dark: {
        '--background': '#333',
        '--background-secondary': '#444',

        '--hover': '#555',
        '--hover-secondary': '#666',

        '--text': '#fff',
        '--text-secondary': '#ccc',

        '--border': '#555',
        '--border-secondary': '#666',

        '--primary': '#007bff',
        '--primary-hover': '#0069d9',
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

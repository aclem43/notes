import { BaseDirectory, readTextFile, removeFile, writeFile } from "@tauri-apps/api/fs";

export const saveData = async (data: string, location: string) => {
    try {
        await writeFile(
            {
                contents: data,
                path: `.\\data\\${location}.json`,
            },
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const loadData = async (location: string) => {
    try {
        const data = await readTextFile(
            `.\\data\\${location}.json`,
            {
                dir: BaseDirectory.AppData,
            },
        );
        return data;
    }
    catch (e) {
        console.log(e);
    }
}

export const deleteData = async (location: string) => {
    try {
        await removeFile(
            `.\\data\\${location}.json`,
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}
import { BaseDirectory, readDir, readTextFile, removeFile, writeFile } from "@tauri-apps/api/fs";
import dev from "./dev";

let root = ""

if (dev) root = "dev\\"

export const saveData = async (data: string, location: string, base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        await writeFile(
            {
                contents: data,
                path: `.\\${base}${location}.json`,
            },
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const loadData = async (location: string, base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        const data = await readTextFile(
            `.\\${base}${location}.json`,
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

export const deleteData = async (location: string, base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        await removeFile(
            `.\\${base}${location}.json`,
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const allData = async (base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        const data = await readDir(
            base,
            {
                dir: BaseDirectory.AppData,
            },
        );
        return data;
    } catch (e) {
        console.log(e);
    }
}
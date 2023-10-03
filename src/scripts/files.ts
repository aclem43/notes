import { BaseDirectory, createDir, readDir, readTextFile, removeFile, writeFile } from "@tauri-apps/api/fs";
import dev from "./dev";

let root = ""

if (dev) root = "dev\\"

export const newDir = async (location: string, base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        await createDir(
            `.\\${base}${location}`,
            {
                dir: BaseDirectory.AppData,
                recursive: true,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const saveFile = async (data: string, location: string, extension?: string, base?: string) => {
    if (extension == undefined) extension = "json"
    if (base == undefined) base = `${root}data\\`
    try {
        await writeFile(
            {
                contents: data,
                path: `.\\${base}${location}.${extension}`,
            },
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const loadFile = async (location: string, extension?: string, base?: string) => {
    if (extension == undefined) extension = "json"
    if (base == undefined) base = `${root}data\\`
    try {
        const data = await readTextFile(
            `.\\${base}${location}.${extension}`,
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

export const deleteFile = async (location: string, extension?: string, base?: string) => {
    if (extension == undefined) extension = "json"
    if (base == undefined) base = `${root}data\\`
    try {
        await removeFile(
            `.\\${base}${location}.${extension}`,
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const allFiles = async (base?: string) => {
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

export const allDirs = async (base?: string) => {
    if (base == undefined) base = `${root}data\\`
    try {
        const data = await readDir(
            base,
            {
                dir: BaseDirectory.AppData,
                recursive: true,
            },
        );
        return data;
    } catch (e) {
        console.log(e);
    }
}
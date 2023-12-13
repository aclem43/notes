import { BaseDirectory, createDir, readDir, readTextFile, removeDir, removeFile, writeFile } from "@tauri-apps/api/fs";
import dev from "./dev";

let root = ""

if (dev) root = "dev\\"

interface FileOpts {
    base?: string
    extension?: string
    fullPath?: boolean
}

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

export const saveFile = async (data: string, location: string, opts: FileOpts) => {
    if (opts.extension == undefined) opts.extension = "json"
    if (opts.base == undefined) opts.base = `${root}data\\`
    try {
        await writeFile(
            {
                contents: data,
                path: `.\\${opts.base}${location}.${opts.extension}`,
            },
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const loadFile = async (location: string, opts: FileOpts) => {
    if (opts.extension == undefined) opts.extension = "json"
    if (opts.base == undefined) opts.base = `${root}data\\`
    try {
        if (opts.fullPath) {
            const data = await readTextFile(
                location,
                {
                    dir: BaseDirectory.AppData,
                },
            );
            return data;
        } else {
            const data = await readTextFile(
                `.\\${opts.base}${location}.${opts.extension}`,
                {
                    dir: BaseDirectory.AppData,
                },
            );
            return data;
        }
    }
    catch (e) {
        console.log(e);
    }
}

export const deleteFile = async (location: string, opts: FileOpts) => {
    if (opts.extension == undefined) opts.extension = "json"
    if (opts.base == undefined) opts.base = `${root}data\\`
    try {
        await removeFile(
            `.\\${opts.base}${location}.${opts.extension}`,
            {
                dir: BaseDirectory.AppData,
            },
        );
    } catch (e) {
        console.log(e);
    }
}

export const deleteFolder = async (location: string, recursive: boolean, opts: FileOpts) => {
    if (opts.base == undefined) opts.base = `${root}data\\`
    try {
        if (opts.fullPath) {
            return await removeDir(
                location,
                {
                    dir: BaseDirectory.AppData,
                    recursive: recursive,
                },
            );
        } else {
            return await removeDir(
                `.\\${opts.base}${location}`,
                {
                    dir: BaseDirectory.AppData,
                    recursive: recursive,
                },
            );
        }
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
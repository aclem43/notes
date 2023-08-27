import { BaseDirectory, writeFile } from "@tauri-apps/api/fs";

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
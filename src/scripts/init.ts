import { appDataDir } from "@tauri-apps/api/path";
import { exists, createDir, readDir } from "@tauri-apps/api/fs";

export const initDataFolder = async () => {
    const path = await appDataDir()
    const existsValue = exists(path)
    if (!existsValue) {
        try {
            await createDir(path)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(await readDir(path))
    console.log(path)
}
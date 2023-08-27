import { BaseDirectory, createDir } from "@tauri-apps/api/fs";

export const initDataFolder = async () => {
    try {
        await createDir("data", {
            dir: BaseDirectory.AppData,
            recursive: true,
        });
        console.log("Data folder created");
    } catch (e) {
        console.error(e);
    }

}
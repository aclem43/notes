import { BaseDirectory, createDir } from "@tauri-apps/api/fs";
import dev from "./dev";

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

    if (dev) {
        try {
            await createDir("dev\\data", {
                dir: BaseDirectory.AppData,
                recursive: true,
            });
            console.log("Dev Data folder created");
        } catch (e) {
            console.error(e);
        }
    }
}
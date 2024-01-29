import { ElectronAPI } from '@electron-toolkit/preload'

type FileType = "folder" | "file" | "other"

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      dir:(location:string) => {name:string, type:FileType}[] 
      readFile:(location:string) => undefined
    }
  }
}

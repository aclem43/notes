import { ElectronAPI } from '@electron-toolkit/preload'

type FileType = "folder" | "file" | "other"

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      dir:(location:string) => {name:string, type:FileType,path: string}[] 
      readFile:(location:string) => undefined
    }
  }
}

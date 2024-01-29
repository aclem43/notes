import { ElectronAPI } from '@electron-toolkit/preload'

type FileType = "folder" | "file" | "other"
type Files = {name:string, type:FileType, path: string, children?:Files[]}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      dir:(location:string) => Files[]
      readFile:(location:string) => string
    }
  }
}

import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { Dirent, readFileSync, readdirSync } from 'fs'

type FileType = "folder" | "file" | "other"

// Custom APIs for renderer
const api = {
  dir:(location) => {
    const files = readdirSync(location, { withFileTypes: true })
    const returnList: {name:string, type:FileType}[] = []
    for (let file of files){
      returnList.push({
        name: file.name,
        type: getFileType(file)
      })
    }
    return returnList
  },
  readFile:(location) => {
    return readFileSync(location, { encoding: 'utf8', flag: 'r' })
  }
}


const getFileType = (file:Dirent):FileType => {
  if (file.isDirectory()) return "folder"
  if (file.isFile()) return 'file'
  return "other"
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

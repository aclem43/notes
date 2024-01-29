import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import { Dirent, readFileSync, readdirSync, writeFileSync } from 'fs'

type FileType = "folder" | "file" | "other"

export type Files = {name:string, type:FileType, path: string, children?:Files[]}


const dir = (location:string):Files[] => {
  const files = readdirSync(location, { withFileTypes: true, recursive: true})
  return files.map(file => {
    if (file.isDirectory()) return {
      name: file.name,
      type: getFileType(file),
      path: location+"/"+file.name,
      children: dir(`${location}/${file.name}`)
    }
    return {
      name: file.name,
      type: getFileType(file),
      path:  location+"/"+file.name,
    }
  })
}

  
const getFileType = (file:Dirent):FileType => {
  if (file.isDirectory()) return "folder"
  if (file.isFile()) return 'file'
  return "other"
}

const readFile = (location:string):string => {
  return readFileSync(location, { encoding: 'utf8', flag: 'r' })
}
const writeFile = (location:string, content:string):void => {
  writeFileSync(location, content, { encoding: 'utf8', flag: 'w' })
}

// Custom APIs for renderer
const api = {
  dir:dir,
  readFile:readFile,
  writeFile: writeFile
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

"use strict";
const preload = require("@electron-toolkit/preload");
const electron = require("electron");
const fs = require("fs");
const dir = (location) => {
  const files = fs.readdirSync(location, { withFileTypes: true, recursive: true });
  return files.map((file) => {
    if (file.isDirectory())
      return {
        name: file.name,
        type: getFileType(file),
        path: location + "/" + file.name,
        children: dir(`${location}/${file.name}`)
      };
    return {
      name: file.name,
      type: getFileType(file),
      path: location + "/" + file.name,
      children: []
    };
  });
};
const getFileType = (file) => {
  if (file.isDirectory())
    return "folder";
  if (file.isFile())
    return "file";
  return "other";
};
const readFile = (location) => {
  return fs.readFileSync(location, { encoding: "utf8", flag: "r" });
};
const api = {
  dir,
  readFile
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}

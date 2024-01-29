"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const fs = require("fs");
const api = {
  dir: (location) => {
    const files = fs.readdirSync(location, { withFileTypes: true });
    const returnList = [];
    for (let file of files) {
      returnList.push({
        name: file.name,
        type: getFileType(file)
      });
    }
    return returnList;
  },
  readFile: (location) => {
    return fs.readFileSync(location, { encoding: "utf8", flag: "r" });
  }
};
const getFileType = (file) => {
  if (file.isDirectory())
    return "folder";
  if (file.isFile())
    return "file";
  return "other";
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

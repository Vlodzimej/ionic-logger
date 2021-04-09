export interface FileSystem {
  documentsDirectory: string
  checkDir(path: string, dir: string): Promise<boolean>
  createDir(path: string, dirName: string, replace?: boolean): Promise<any>
  readAsText(path: string, file: string): Promise<string>
  writeFile(path: string, fileName: string, text: string | Blob | ArrayBuffer, replace?: boolean): Promise<any>
}

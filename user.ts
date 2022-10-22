import { setItems } from "./index.js";

export class user {
    name: string;
    weight: number;
    height: number;
    SSN: string;
    docs: string[];
    meds: string[];
    vacs: string[];
    allergies: string[];
    files: string[];
    //labResults: string[];
    suboxone: boolean;
    methadone: boolean;
    

    constructor(n: string, w: number, h: number, s: string) {
        this.name = n;
        this.weight = w;
        this.height = h;
        this.SSN = s;
        this.docs = [];
        this.files = []
    }

    getName() {
        return this.name;
    }   

    /* Takes all files the user uploads and stores them in the docs array
     * 
    */
    setDocs() {
        const fs = require('fs')
        var dir = this.SSN + "-file";
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        const direct = fs.opendirSync(dir)
        let dirent
        while((dirent = direct.readSync()) !== null){
            this.docs.push(dirent.name);

        }
        direct.closeSync();
    }

    addDict(dic: string) {
        this.files.push(dic);
    }

    getDict() {
        return this.files
    }

    getDocs() {
        return this.docs
    }

    readFiles(dir, processFile) {
        const fs = require('fs');
        const path = require('path');
        // read directory
        fs.readdir(dir, (error, fileNames) => {
          if (error) throw error;
      
          fileNames.forEach(filename => {
            // get current file name
            const name = path.parse(filename).name;
            // get current file extension
            const ext = path.parse(filename).ext;
            // get current file path
            const filepath = path.resolve(dir, filename);
      
            // get information about the file
            fs.stat(filepath, function(error, stat) {
              if (error) throw error;
      
              // check if the current path is a file or a folder
              const isFile = stat.isFile();
      
              // exclude folders
              if (isFile) {
                // callback, do something with the file
                processFile(filepath, name, ext, stat);
              }
            });
          });
        });
      }

    
}

const Paul = new user("Paul", 2, 3, "r")
Paul.setDocs()
console.log(Paul.getDocs())

// setItems(Paul.setItems(1));

var dict = {}
Paul.readFiles('./r-file', (filepath, name, ext, stat) => {
    Paul.addDict(filepath)
    console.log(setItems(filepath))
    console.log(Paul.getDict())
    // console.log('file name:', name);
    // console.log('file extension:', ext);
    // console.log('file information:', stat);
  });
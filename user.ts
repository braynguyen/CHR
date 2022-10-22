class user {
    name: string;
    weight: number;
    height: number;
    SSN: string;
    docs: string[];
    meds: string[];
    vacs: string[];
    allergies: string[];
    //labResults: string[];
    suboxone: boolean;
    methadone: boolean;
    

    constructor(n: string, w: number, h: number, s: string) {
        this.name = n;
        this.weight = w;
        this.height = h;
        this.SSN = s;
        this.docs = [];
    }

    getName() {
        return this.name;
    }   

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

    getDocs() {
        return this.docs
    }
}

const Paul = new user("Paul", 2, 3, "r")
Paul.setDocs()
console.log(Paul.getDocs())


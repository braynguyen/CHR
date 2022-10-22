import { setItems } from "./index.js";
import {user} from "./user.js"

class doctor {
    patients: user[];
    name: string;
    id: number;

    constructor(n: string, p: user[], id: number){
        this.name = n;
        this.patients = p;
        this.id = id;
    }

    printPatients(){
        for(let i = 0; i < user.length; i++){
            console.log(user[i]);
        }
    }

    setUser(u: user){
        this.patients.push(u);
    }
}

setItems('./final-test.pdf')
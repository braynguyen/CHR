class doctor {
    patient: user[];
    name: string;
    id: number;

    constructor(n: string, p: user[], id: number){
        this.name = n;
        this.patient = p;
        this.id = id;
    }

    printPatients(){
        for(let i = 0; i < user.length; i++){
            console.log(user[i]);
        }
    }

    setUser(u: user){
        this.patient.push(u);
    }
}
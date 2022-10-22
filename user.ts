class user {
    name: string;
    weight: number;
    height: number;
    SSN: number;
    

    constructor(n: string) {
        this.name = n;
    }

    getName() {
        return this.name;
    }

}
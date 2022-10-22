var user = /** @class */ (function () {
    function user(n, w, h, s) {
        this.name = n;
        this.weight = w;
        this.height = h;
        this.SSN = s;
        this.docs = [];
    }
    user.prototype.getName = function () {
        return this.name;
    };
    user.prototype.setDocs = function () {
        var fs = require('fs');
        var dir = this.SSN + "-file";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        var direct = fs.opendirSync(dir);
        var dirent;
        while ((dirent = direct.readSync()) !== null) {
            this.docs.push(dirent.name);
        }
        direct.closeSync();
    };
    user.prototype.getDocs = function () {
        return this.docs;
    };
    return user;
}());
var Paul = new user("Paul", 2, 3, "r");
Paul.setDocs();
console.log(Paul.getDocs());

"use strict";
exports.__esModule = true;
var index_js_1 = require("./index.js");
var user_js_1 = require("./user.js");
var doctor = /** @class */ (function () {
    function doctor(n, p, id) {
        this.name = n;
        this.patients = p;
        this.id = id;
    }
    doctor.prototype.printPatients = function () {
        for (var i = 0; i < user_js_1.user.length; i++) {
            console.log(user_js_1.user[i]);
        }
    };
    doctor.prototype.setUser = function (u) {
        this.patients.push(u);
    };
    return doctor;
}());
(0, index_js_1.getItems)('./final-test.pdf');

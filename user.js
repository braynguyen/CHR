"use strict";
exports.__esModule = true;
exports.user = void 0;
var index_js_1 = require("./index.js");
var user = /** @class */ (function () {
    function user(n, w, h, s) {
        this.name = n;
        this.weight = w;
        this.height = h;
        this.SSN = s;
        this.docs = [];
        this.files = [];
    }
    user.prototype.getName = function () {
        return this.name;
    };
    /* Takes all files the user uploads and stores them in the docs array
     *
    */
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
    user.prototype.addDict = function (dic) {
        this.files.push(dic);
    };
    user.prototype.getDict = function () {
        return this.files;
    };
    user.prototype.getDocs = function () {
        return this.docs;
    };
    user.prototype.readFiles = function (dir, processFile) {
        var fs = require('fs');
        var path = require('path');
        // read directory
        fs.readdir(dir, function (error, fileNames) {
            if (error)
                throw error;
            fileNames.forEach(function (filename) {
                // get current file name
                var name = path.parse(filename).name;
                // get current file extension
                var ext = path.parse(filename).ext;
                // get current file path
                var filepath = path.resolve(dir, filename);
                // get information about the file
                fs.stat(filepath, function (error, stat) {
                    if (error)
                        throw error;
                    // check if the current path is a file or a folder
                    var isFile = stat.isFile();
                    // exclude folders
                    if (isFile) {
                        // callback, do something with the file
                        processFile(filepath, name, ext, stat);
                    }
                });
            });
        });
    };
    return user;
}());
exports.user = user;
var Paul = new user("Paul", 2, 3, "r");
Paul.setDocs();
console.log(Paul.getDocs());
// getItems(Paul.getItem(1));
var dict = {};
Paul.readFiles('./r-file', function (filepath, name, ext, stat) {
    Paul.addDict(filepath);
    console.log((0, index_js_1.getItems)(filepath));
    console.log(Paul.getDict());
    // console.log('file name:', name);
    // console.log('file extension:', ext);
    // console.log('file information:', stat);
});

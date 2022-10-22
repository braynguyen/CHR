//import {isLoggedIn} from "./login.js";


const pdfjs = require("pdfjs-dist/legacy/build/pdf");
dict = {}

async function getContent(src){
    //isLoggedIn()
    var doc = await pdfjs.getDocument(src).promise
    var page = await doc.getPage(1)
    return await page.getTextContent()
}


async function setItems(src){
    //isLoggedIn()
    var content = await getContent(src)
    var lineCount = 0;
    content.items.map((item) => {lineCount++})
    var items = ''
    var lineCount = 0;
    content.items.map((item) => {lineCount++})
    for(var i = 0; i < lineCount; i++){
        items = content.items[i]["str"].split(" ")
        if(!(items[0] === '' || items[0] === undefined)){
            dict[items[0]] = items[1];
        }
        if(i === lineCount -1)
            console.log(dict)
    }
    //console.log(dict)
}

function getItems() {
    return dict
}

module.exports.setItems = setItems;

asyncCall("./final-test.pdf")
console.log(getItems())
//setItems(getDocs())
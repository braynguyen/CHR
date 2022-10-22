import {isLoggedIn} from "./login.js";


const pdfjs = require("pdfjs-dist/legacy/build/pdf");
var x = []
dict = {}

async function getContent(src){
    isLoggedIn()
    var doc = await pdfjs.getDocument(src).promise
    var page = await doc.getPage(1)
    return await page.getTextContent()
}


async function getItems(src){
    isLoggedIn()
    var content = await getContent(src)
    var items
    var lineCount = 0;
    content.items.map((item) => {lineCount++})
    for(var i = 0; i < lineCount; i++){
        items = content.items[i]["str"].split(" ")
        // console.log(items)
        dict[items[0]] = items[1]
    }
    console.log(dict)
    return items
}
getItems("./sample-parse-2.pdf")

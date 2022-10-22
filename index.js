const pdfjs = require("pdfjs-dist/legacy/build/pdf");

async function getContent(src){
    const doc = await pdfjs.getDocument(src).promise
    const page = await doc.getPage(1)
    return await page.getTextContent()
}

async function getItems(src){
    const content = await getContent(src)
    const items = content.items.map((item) => {
        console.log(item.str)
    })
    return items
}

getItems("./sample.pdf")
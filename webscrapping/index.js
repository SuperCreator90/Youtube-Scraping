const puppeteer = require("puppeteer");
const fs = require("fs");

async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");

    const html = await page.content();

    fs.writeFile("index.html",html,(err)=>{
        if(err) throw err;
        console.log("File saved");
    });

    await browser.close();

}

run();
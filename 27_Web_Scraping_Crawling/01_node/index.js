import fs from 'fs';
/*
const response = await fetch('https://www.proshop.dk/Baerbar-computer');
const data = await response.text();
console.log(data);

fs.writeFileSync("index.html", data);

*/

const htmlPageString = fs.readFileSync("index.html").toString();
console.log(htmlPageString);

import { load } from 'cheerio';

const $ = load(htmlPageString);

$("#products [product]").each((index, element) => {
    const name = $(element).find(".site-product-link h2").text();
    const description = $(element).find(".site-product-link").text();
    const price = $(element).find(".site-currency-lg").text();
    console.log(name);
    console.log(description);
    console.log(price);
    console.log("=============");
})

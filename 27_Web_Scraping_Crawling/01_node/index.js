import fs from "fs";

// // download site locally and disable snippet to be courteous to the website
// const scrapeUrl = "https://www.proshop.dk/Baerbar-computer";
// const response = await fetch(scrapeUrl);
// const result = await response.text();
// fs.writeFileSync("index.html", result);

const htmlPageString = fs.readFileSync("index.html", "utf-8");

import { load } from "cheerio";

const $ = load(htmlPageString); //named $ to mirror jquery

$("#products [product]").each((index, element) => {
  const name = $(element).find(".site-product-link h2").text();
  const description = $(element).find(".site-product-link").text();
  const price = $(element).find(".site-currency-lg").text();

  console.log({ name, price });
});

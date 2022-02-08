const fetch = require("node-fetch");
// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.bbc.com");
//   // await page.screenshot({ path: "example.png" });

//   // scraping mechanism #1
//   const newsTitles = await page.evaluate(() =>
//     // scrapes: title, url, summary, category tag and category link
//     Array.from(document.querySelectorAll("div.media__content")).map((i) => {
//       // console.log(i.querySelector("p.media__summary")?.textContent);
//       return {
//         title: i.querySelector("h3.media__title")?.innerText?.trim() || "",
//         url: i.querySelector("h3.media__title")?.children?.[0]?.href || "",
//         summary: i.querySelector("p.media__summary")?.textContent.trim() || "",
//         categoryTag: i.querySelector("a.media__tag")?.innerText.trim() || "",
//         categoryLink: i.querySelector("a.media__tag")?.href || "",
//       };
//     })
//   );

//   console.log(newsTitles);

//   await browser.close();
// })();

// ------------------------------------------------------------------------------------------------

// #2
// Use publicly available RSS Feed(XML) and convert them to JSON

// XML Feed to JSON Service provider
const baseURL = "https://www.toptal.com/developers/feed2json/convert?url=";

// Our input sources
const rssFeeds = [
  "https://feeds.bbci.co.uk/news/world/rss.xml", // bbc
  "http://rss.cnn.com/rss/edition.rss", // cnn
  "https://moxie.foxnews.com/feedburner/latest.xml", // fox
];

for (let i = 0; i < rssFeeds?.length; i++) {
  let url = baseURL + rssFeeds[i];
  console.log("\n", "i=", i, "\n", "url ->", url);

  fetch(url)
    .then((response) => response.json())
    .then((response) => console.log(response));
}

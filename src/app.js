const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.bbc.com");
  // await page.screenshot({ path: "example.png" });

  const newsTitles = await page.evaluate(() =>
    // scrapes: title, url, summary, category tag and category link
    Array.from(document.querySelectorAll("div.media__content")).map((i) => {
      return {
        title: i.querySelector("h3.media__title")?.innerText?.trim(),
        url: i.querySelector("h3.media__title")?.children?.[0]?.href,
        summary: i.querySelector("p.media__summary")?.innerText,
        categoryTag: i.querySelector("a.media__tag")?.innerText,
        categoryLink: i.querySelector("a.media__tag")?.href,
      };
    })
  );

  console.log(newsTitles);

  await browser.close();
})();

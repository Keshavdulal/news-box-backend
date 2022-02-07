const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.bbc.com");
  // await page.screenshot({ path: "example.png" });

  const newsTitles = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h3.media__title")).map((i) =>
      i.innerText.trim()
    )
  );

  console.log(newsTitles);

  await browser.close();
})();

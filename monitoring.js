const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://49eb8868-b0b4-4c13-abc3-374921be2f27-00-49bqwy4azxkw.worf.replit.dev/');

  // Wait for the page to load fully
  await page.waitForNetworkIdle();

  // Take a screenshot of the page
  await page.screenshot({path: 'screenshot.png'});

  // Get the page's title
  const title = await page.title();
  console.log(`Title: ${title}`);

  // Get the page's meta description
  const description = await page.$eval('meta[name="description"]', el => el.content);
  console.log(`Description: ${description}`);

  // Get the page's main content
  const content = await page.$eval('main', el => el.innerText);
  console.log(`Content: ${content}`);

  await browser.close();
})();

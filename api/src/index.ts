import express, { Request, Response } from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/crawler', async (req: Request, res: Response) => {
  // Lauches the browser
  const browser = await puppeteer.launch();
  // Opens a new Tab
  const page = await browser.newPage();
  // This is the Base URL
  const url = 'https://duckduckgo.com/';
  // The browser opens the given URL and waits until the page is fully loaded
  await page.goto(url, { waitUntil: 'networkidle2' });
  // DuckDuckGo Input field
  await page.type('input[id=search_form_input_homepage]', req.body.search, { delay: 0 });
  // DuckDuckGo Button
  await page.$eval('input[id=search_button_homepage]', (button) => button.click());
  // Wait for the contents to load
  await page.waitFor('.result__body');
  // Click the More Results Button
  await page.$eval('.result--more__btn', (anchor) => anchor.click());
  // Results
  // eslint-disable-next-line array-callback-return
  const results = await page.$$eval('.result__body', (rows) => rows.map((row) => {
    const properties = {};
    const anchorElement = row.querySelector('.result__a');
    const descriptionElement = row.querySelector('.result__snippet');
    properties.title = anchorElement.innerText;
    properties.url = anchorElement.getAttribute('href');
    properties.description = descriptionElement.innerText;
    return properties;
  }));
  // Response
  return res.json(results);
});

app.listen(3333);

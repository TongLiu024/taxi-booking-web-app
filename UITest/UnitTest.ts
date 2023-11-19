import { Builder, By, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://your-hiker-blogger-app-url.com');
    await driver.findElement(By.name('q')).sendKeys('trails');
    await driver.findElement(By.name('btnK')).click();
    await driver.wait(until.titleIs('trail search results - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
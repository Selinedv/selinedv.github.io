async function HH() {

   // const puppeteer = require('puppeteer');
    const URL_HH = 'https://hh.ru/account/login?backurl=%2F';
    
    // const browser = await puppeteer.launch ({executablePath: 'C:/Users/HP_home/AppData/Local/Yandex/YandexBrowser/Application/browser.exe', headless: false});
    const page = await browser.newPage();
    
    await page.goto (https://hh.ru/account/login?backurl=%2F);
    await page.waitForTimeout(2000)
    page.on('dialog', async dialog => {await dialog.dismiss();});
    
    await page.click('span[class="bloko-icon bloko-icon_vk bloko-icon_initial-unique"]');
    
    await page.waitForSelector('input[name="email"]');
    await page.focus('input[name="email"]');
    await page.keyboard.type('selinedv@gmail.com');
    
    await page.waitForSelector('input[name="pass"]');
    await page.focus('input[name="pass"]');
    await page.keyboard.type('CtkbyLvbnhbq');
    
    await page.click('button[type="submit"]');
    
    await page.waitForSelector('div [data-navi-item-name="myResumes"]');
    await page.click('div [data-navi-item-name="myResumes"]');
    
 
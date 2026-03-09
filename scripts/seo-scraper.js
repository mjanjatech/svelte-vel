import puppeteer from 'puppeteer';

(async () => {
    const url = process.argv[2];
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        const data = await page.evaluate(() => {
            const getMeta = (name) => document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)?.content || null;
            return {
                title: document.title,
                description: getMeta('description'),
                h1Count: document.querySelectorAll('h1').length,
                imagesWithoutAlt: Array.from(document.querySelectorAll('img:not([alt])')).length,
                isMobileFriendly: !!document.querySelector('meta[name="viewport"]'),
            };
        });

        // Capture screenshot as base64
        const screenshot = await page.screenshot({ encoding: 'base64', type: 'png' });
        
        console.log(JSON.stringify({ ...data, screenshot }));
    } catch (e) {
        process.exit(1);
    } finally {
        await browser.close();
    }
})();

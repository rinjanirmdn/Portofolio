const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    console.log('Starting PDF generation...');
    
    // Path to the local Google Chrome binary on Windows
    const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    
    // Convert slides.html to a valid file URL
    const fileUrl = 'file:///' + path.resolve(__dirname, 'slides.html').replace(/\\/g, '/');
    
    console.log(`Loading slides from: ${fileUrl}`);
    console.log(`Using Chrome binary at: ${executablePath}`);

    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: executablePath,
            headless: true,
            args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        
        // Open the slides HTML file
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        
        // Wait 2 seconds to make sure Google Fonts and FontAwesome icons are fully loaded and rendered
        console.log('Waiting for fonts and assets to render completely...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        const outputPath = path.resolve(__dirname, 'Presentation_Rinjani_Ramadan.pdf');
        console.log(`Compiling PDF to: ${outputPath}`);

        // Print to PDF with exact 1080x1080px page size
        await page.pdf({
            path: outputPath,
            width: '1920px',
            height: '1080px',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log('PDF compiled successfully!');
    } catch (error) {
        console.error('Error during PDF generation:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();

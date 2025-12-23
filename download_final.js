import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloads = {
    // Mobiles (Fix Samsung)
    "src/assets/mobiles/samsung-s24.png": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra.jpg",

    // Electronics
    "src/assets/electronics/sony-headphones.jpg": "https://fdn2.gsmarena.com/vv/bigpic/sony-wh-1000xm5.jpg",
    "src/assets/electronics/macbook-air.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/MacBook_Air_M2_Midnight_2022.png/800px-MacBook_Air_M2_Midnight_2022.png",
    "src/assets/electronics/ipad-air.jpg": "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-2024.jpg",
    "src/assets/electronics/apple-watch.jpg": "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series9-aluminum.jpg",
    // JBL Flip 6 (Wikimedia Red variant)
    "src/assets/electronics/jbl-flip-6.png": "https://upload.wikimedia.org/wikipedia/commons/4/4b/JBL_Flip_6_Red_Front.jpg",
    // Canon R50 (Wikimedia)
    "src/assets/electronics/canon-r50.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Canon_EOS_R50_with_18-45mm_lens.jpg/640px-Canon_EOS_R50_with_18-45mm_lens.jpg"
};

Object.entries(downloads).forEach(([filepath, url]) => {
    const fullPath = path.resolve(__dirname, filepath);
    console.log(`Downloading ${filepath}...`);

    const file = fs.createWriteStream(fullPath);
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (response) {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', function () {
                file.close();
                console.log("Successfully downloaded " + filepath);
            });
        } else {
            console.error(`Failed to download ${filepath}: Status Code ${response.statusCode}`);
            file.close();
            fs.unlink(fullPath, () => { });
        }
    }).on('error', function (err) {
        fs.unlink(fullPath, () => { });
        console.error("Error downloading " + filepath + ": " + err.message);
    });
});

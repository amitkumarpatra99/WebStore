import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const desiredFiles = {
    // Mobiles
    "src/assets/mobiles/iphone-15-pro.jpg": "https://placehold.co/600x400/png?text=iPhone+15+Pro",
    "src/assets/mobiles/samsung-s24.png": "https://placehold.co/600x400/png?text=Samsung+S24",
    "src/assets/mobiles/pixel-8.jpg": "https://placehold.co/600x400/png?text=Pixel+8",
    "src/assets/mobiles/oneplus-12.jpg": "https://placehold.co/600x400/png?text=OnePlus+12",
    "src/assets/mobiles/xiaomi-14.jpg": "https://placehold.co/600x400/png?text=Xiaomi+14",
    "src/assets/mobiles/realme-12-pro-plus.jpg": "https://placehold.co/600x400/png?text=Realme+12",

    // Electronics
    "src/assets/electronics/sony-headphones.jpg": "https://placehold.co/600x400/png?text=Sony+Headphones",
    "src/assets/electronics/macbook-air.jpg": "https://placehold.co/600x400/png?text=MacBook+Air",
    "src/assets/electronics/ipad-air.jpg": "https://placehold.co/600x400/png?text=iPad+Air",
    "src/assets/electronics/apple-watch.jpg": "https://placehold.co/600x400/png?text=Apple+Watch",
    "src/assets/electronics/jbl-flip-6.png": "https://placehold.co/600x400/png?text=JBL+Speaker",
    "src/assets/electronics/canon-r50.png": "https://placehold.co/600x400/png?text=Canon+Camera"
};

Object.entries(desiredFiles).forEach(([filepath, placeholderUrl]) => {
    const fullPath = path.resolve(__dirname, filepath);

    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        if (stats.size > 1000) { // Keep if > 1KB (real image)
            console.log(`Keeping existing file: ${filepath}`);
            return;
        }
    }

    console.log(`Downloading fallback for ${filepath}...`);
    const file = fs.createWriteStream(fullPath);
    https.get(placeholderUrl, function (response) {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', function () {
                file.close();
                console.log("Successfully downloaded fallback " + filepath);
            });
        } else {
            file.close();
        }
    }).on('error', function (err) {
        fs.unlink(fullPath, () => { });
    });
});

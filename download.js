import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloads = {
    // Mobiles
    "src/assets/mobiles/samsung-s24.png": "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-539573349?$650_519_PNG$",

    // Electronics
    "src/assets/electronics/sony-headphones.jpg": "https://www.sony.co.in/image/5d02da5df552836db893cb2d504564c1?fmt=pjpeg&wid=1014",
    "src/assets/electronics/macbook-air.jpg": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-202402?wid=1000&fmt=p-jpg",
    "src/assets/electronics/ipad-air.jpg": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202405?wid=1000&fmt=p-jpg",
    "src/assets/electronics/apple-watch.jpg": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTXW3_VW_34FR+watch-45-alum-starlight-nc-s9_VW_34FR_WF_CO?wid=1000&fmt=p-jpg",
    "src/assets/electronics/jbl-flip-6.png": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664426543/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/252326_0_h7y7z7.png",
    "src/assets/electronics/canon-r50.png": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680165482/Croma%20Assets/Imaging/Camera/Images/271241_0_ps9z9z.png"
};

Object.entries(downloads).forEach(([filepath, url]) => {
    const fullPath = path.resolve(__dirname, filepath);
    console.log(`Downloading ${url} to ${fullPath}`);

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

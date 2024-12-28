// pre load all images

import { ImgFolder, ImgsJpg, ImgsJpeg } from "../properties/Properties_Image.js"

export { DictImg,  Load_Img};

var DictImg = {};  // image list

function Load_Img(){
    // load jpg
    for (const value of ImgsJpg){
        let Img = new Image();
        Img.src = ImgFolder + "/"+ value +".jpg";
        DictImg[value] = Img;
    }

    // load jpeg
    for (const value of ImgsJpeg){
        let Img = new Image();
        Img.src = ImgFolder + "/"+ value +".jpeg";
        DictImg[value] = Img;
    }
    // Load_Img2();
}

// const fs = require('fs');
// const path = require('path');
// const jpgFiles = [];

// function Load_Img2(){
//     fs.readdir(folderPath, (err, files) => {
//         if (err) {
//             console.error("Error reading the folder:", err);
//             return;
//         }

//         // Filter files with .jpg or .jpeg extensions
//         files.forEach(file => {
//             const ext = path.extname(file).toLowerCase();
//             if (ext === '.jpg' || ext === '.jpeg') {
//                 jpgFiles.push(file);
//             }
//         });

//         // Log the array of jpg/jpeg file names
//         console.log("JPG/JPEG files:", jpgFiles);
//     });
// }

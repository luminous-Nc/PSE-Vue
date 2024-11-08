// pre load all images

import { ImgFolder, ImgsJpg, ImgsJpeg } from "../properties/Properties_Image.js"

export { DictImg,  Load_Img};

var DictImg = {};  // image list

function Load_Img(){
    // load jpg
    for (const value of ImgsJpg){
        var Img = new Image();
        Img.src = ImgFolder + "/"+ value +".jpg";
        DictImg[value] = Img;
    }

    // load jpeg
    for (const value of ImgsJpeg){
        var Img = new Image();
        Img.src = ImgFolder + "/"+ value +".jpeg";
        DictImg[value] = Img;
    }
}
// preload image src
const ImgFolder = "./src/assets/images";

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
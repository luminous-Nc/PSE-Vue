// preload image src
const ImgFolder = "./src/assets/images";

for (const value of Imgs){
    var Img = new Image();
    Img.src = ImgFolder + "/"+ value +".jpg";
    DictImg[value] = Img;
}
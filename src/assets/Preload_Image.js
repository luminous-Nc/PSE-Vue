// preload image src
var ObjDict =  ["PLC", "Relay", "5VDC", "24VDC", "LimitedSensor"];
var Imgs = [];
var ImgFolder = "./src/assets/images";

for (var i = 0; i < ObjDict.length; i++){
    Imgs[i] = new Image();
    Imgs[i].src = ImgFolder + "/"+ ObjDict[i] +".jpg";
}
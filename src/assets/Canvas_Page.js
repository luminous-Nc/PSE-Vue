// display basic practice page

// canvas and stage for drawing
var stage;

// practice name
var PName;
var ObjDict  = {};
var ObjPorts = [];

// main
function Init_Canvas(CanvasRef){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;
    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();  
    stage.enableMouseOver();
    
    // initialization 
    Init_Object();              
    Draw_Image();               
    Draw_Connection_Points();
    Init_Practice();
}

// assign all ports' coordinate set to each object
function Init_Object(){
    // get current module and port
    ObjDict = DictModule[PName];
}

function Draw_Image(){
    for (const key in ObjDict){
        var Btmp = new createjs.Bitmap(DictImg[key]);
        Btmp.name   = key;
        Btmp.x      = ObjDict[key].x; // Center horizontally
        Btmp.y      = ObjDict[key].y; // Center vertically
        ObjDict[key].img = Btmp;
        stage.addChild(Btmp);
    }
    stage.update();         
}

function Draw_Connection_Points(){
    for(const ModuleName in ObjDict){
        for(const PortName of ObjDict[ModuleName].Port){
            var circle = new createjs.Shape();
            circle.graphics.beginFill("blue").drawCircle(0,0,5);
            circle.module = ModuleName;
            circle.name   = PortName;
            circle.x = ObjDict[ModuleName].x + DictObjPos[PortName].x;
            circle.y = ObjDict[ModuleName].y + DictObjPos[PortName].y;
            ObjPorts.push(circle);
            stage.addChild(circle);
            stage.update();
        }
    } 
}

// function Draw_Image(){
//     var ImagesLoadedNum = 0;
//     for (var i = 0; i < ObjDict.length; i++){
//         Imgs[i] = new Image();
//         Imgs[i].src = ImgFolder + "/"+ ObjDict[i].name +".jpg";
//         Imgs[i].onload = function(){
//             ImagesLoadedNum++;
//             if (ImagesLoadedNum == ObjDict.length){
//                 for (var i = 0; i < ObjDict.length; i++){
//                     var Btmp = new createjs.Bitmap(Imgs[i]);
//                     Btmp.name = ObjDict[i].name;
//                     Btmp.x = ObjDict[i].x; // Center horizontally
//                     Btmp.y = ObjDict[i].y; // Center vertically
//                     ObjDict[i].Obj = Btmp;
//                     stage.addChild(Btmp);
//                     stage.update();
//                 }
//             Draw_Connection_Point();
//             Init_Practice();
//             IsImgLoaded = true;
//             }
          
   
//         } 
//     }
// }

// function Draw_Canvas_Border(){
//     var shape = new createjs.Shape();
//     shape.graphics.setStrokeStyle(2); 	   // Line thickness
//     shape.graphics.beginStroke("#000000"); // Line color
//     shape.graphics.drawRect(0, 0, 
//                             MyCanvas.width, 
//                             MyCanvas.height); // coordinate
//     stage.addChild(shape);
//     stage.update();
// }
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

    // custom random port
    Custom_Random_Port();
}

// custom random port for single practice
function Custom_Random_Port(){
    if (DictRndPort.hasOwnProperty(PName)){
        var RNDPorts = DictRndPort[PName];
        for (const RNDPort of RNDPorts){
            // pick a random port from port pool
            var RNDPortName = Get_Random_Array_Value(RNDPort["PortPool"]);

            // assign port
            DictModule[PName][RNDPort["Module"]]["Port"][RNDPort["PortIndex"]] = RNDPortName;

            // assign key
            DictKeys[PName][RNDPort["KeyIndex"][0]][RNDPort["KeyIndex"][1]] = RNDPortName;

            // assign additional key port (if applicable)
            if (RNDPort.hasOwnProperty("KeyIndexEx")){
                DictKeys[PName][RNDPort["KeyIndexEx"][0]][RNDPort["KeyIndexEx"][1]] = RNDPortName;
            }
        }
    }

}

function Draw_Image(){
    for (const ModuleName in ObjDict){
        var Btmp = new createjs.Bitmap(DictImg[ModuleName]);
        Btmp.name   = ModuleName;
        Btmp.x      = ObjDict[ModuleName].x; // Center horizontally
        Btmp.y      = ObjDict[ModuleName].y; // Center vertically

        // resize the image if applicable
        var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
        Btmp.scaleX = Scale;
        Btmp.scaleY = Scale;
        Btmp.image.width  *= Scale;
        Btmp.image.height *= Scale;

        // integrate the image
        ObjDict[ModuleName].img = Btmp;
        stage.addChild(Btmp);
    }
    stage.update();
}

function Draw_Connection_Points(){
    for(const ModuleName in ObjDict){
        for(const PortName of ObjDict[ModuleName].Port){
            var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
            var circle = new createjs.Shape();
            circle.graphics.beginFill("blue").drawCircle(0,0,PortSize);
            circle.module = ModuleName;
            circle.name   = PortName;
            circle.x = ObjDict[ModuleName].x + DictObjPos[ModuleName][PortName].x * Scale;
            circle.y = ObjDict[ModuleName].y + DictObjPos[ModuleName][PortName].y * Scale;
            ObjPorts.push(circle);
            stage.addChild(circle);
            stage.update();
        }
    }
}

function Get_Img_Scale(Module){
    if (Module.hasOwnProperty("Scale")){
        return Module["Scale"];
    }else{
        return 1;
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

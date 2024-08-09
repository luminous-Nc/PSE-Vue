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
    // random port
    switch(PName){
        case "P1":
        case "P3":
        case "P4":
            // input module practice
            RndPort  = Get_Random_Array_Value(InputPort);
            RndGND   = Get_Random_Array_Value(InputGNDPort);
            DictModule[PName]["PLCInput"]["Port"][0] = RndPort;
            DictModule[PName]["PLCInput"]["Port"][1] = RndGND;
            DictKeys[PName][0][0] = RndPort;
            DictKeys[PName][1][0] = RndGND;
            break;
        case "P2":
            // output module practice
            RndPort  = Get_Random_Array_Value(OutputPort);
            RndDC    = Get_Random_Array_Value(OutputDCPort);
            DictModule[PName]["PLCOutput"]["Port"][0] = RndPort;
            DictModule[PName]["PLCOutput"]["Port"][1] = RndDC;
            DictKeys[PName][0][0] = RndPort;
            DictKeys[PName][1][0] = RndDC;
            break;
        case "P5":
            // ABB module practice
            RndABBDI    = Get_Random_Array_Value(ABBDIPort);
            RndABBGNDDI = Get_Random_Array_Value(ABBGNDDIPort);
            DictModule[PName]["ABBRobot"]["Port"][0] = RndABBDI;
            DictModule[PName]["ABBRobot"]["Port"][1] = RndABBGNDDI;
            DictKeys[PName][0][0] = RndABBDI;
            DictKeys[PName][1][0] = RndABBGNDDI;
            break;
        case "P6":

            break;

    }

    // random ground port

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
            circle.graphics.beginFill("blue").drawCircle(0,0,PortSize);
            circle.module = ModuleName;
            circle.name   = PortName;
            circle.x = ObjDict[ModuleName].x + DictObjPos[ModuleName][PortName].x;
            circle.y = ObjDict[ModuleName].y + DictObjPos[ModuleName][PortName].y;
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
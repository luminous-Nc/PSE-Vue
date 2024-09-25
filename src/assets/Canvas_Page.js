// display basic practice page

// canvas and stage for drawing
var stage;

// practice name
var PName;
var ObjDict  = {};
var ObjPorts = [];
var ObjRndPorts = {};

// main
function Init_Canvas(CanvasRef){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;
    // console.log(Canvas)
    // const displayWidth = Canvas.clientWidth;
    // const displayHeight = Canvas.clientHeight;
    // console.log(displayWidth,displayHeight)
    // if (Canvas.width !== displayWidth || Canvas.height !== displayHeight) {
    //     Canvas.width = displayWidth;
    //     Canvas.height = displayHeight;
    // }
    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();
    stage.enableMouseOver();

    // initialization
    Init_Object();
    Draw_Image();
    Draw_Connection_Ports();
    Init_Practice();
}

// assign all ports' coordinate set to each object
function Init_Object(){
    // get key
    Keys = DictModule[PName]["Key"];


    // get current module and port
    ObjDict = {...DictModule[PName]};
    delete ObjDict["Key"]

    // custom random port
    Custom_Random_Port();

}

// custom random port for single practice
function Custom_Random_Port(){
    for (const ModuleName in ObjDict){
        if (ObjDict[ModuleName].hasOwnProperty("RndPort")){
            for (const RNDPort of ObjDict[ModuleName]["RndPort"]){
                // get current random port
                const RNDPortIndex    = RNDPort[0];
                const RNDPortKeyIndex = RNDPort[1];
                const RNDGeneralName  = RNDPort[2];
                const RNDPortPool     = ObjRndPool[RNDGeneralName];
                const RNDPortOut      = Get_Random_Array_Value(RNDPortPool);

                // assign random port
                ObjDict[ModuleName]["Port"][RNDPortIndex] = RNDPortOut;

                // assign random port general name
                ObjRndPorts[RNDPortOut] = RNDGeneralName;

                // assign random port key
                Keys[RNDPortKeyIndex[0]][[RNDPortKeyIndex[1]]] = RNDPortOut;
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

function Draw_Connection_Ports(){
    for(const ModuleName in ObjDict){
        for(const PortName of ObjDict[ModuleName].Port){
            var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
            var circle = new createjs.Shape();
            circle.graphics.beginFill("blue").drawCircle(0,0,PortSize);
            circle.module = ModuleName;
            circle.name   = PortName;
            if(ObjRndPorts.hasOwnProperty(PortName)){
                circle.rndname = ObjRndPorts[PortName];
            }
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

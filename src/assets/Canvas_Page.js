// display Canvas
import { Init_Description } from "./Canvas_Description.js";
import { Init_Test } from "./Canvas_Test.js";
import { DePage, TPage } from "./Properties_Page.js";

// main
export function Init_Canvas(CanvasRef){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;
    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();  
    stage.enableMouseOver();
    
    // initialization 
    switch(true){
        case DePage.includes(PName):
            Init_Description();
            break;
        case TPage.includes(PName):
            Init_Test();
            break;
    }
    
    // Init_Object();              
    // Draw_Image();               
    // Draw_Connection_Ports();
    // Draw_Msg_Box();
    // Init_Practice();

    // read message csv
    // const fs = require('fs');
    // const { parse } = require("csv-parse");
    // fs.createReadStream("./Message.csv");
    // fs.createReadStream("./example.csv")
    //     .pipe(parse({ delimiter: ",", from_line: 2 }))
    //     .on("data", function (row) {
    //         console.log(row);
    //     })
    //     .on("error", function (error) {
    //         console.log(error.message);
    //     })
    //     .on("end", function () {
    //         console.log("finished");
    //     });
}

// assign all ports' coordinate set to each object
// function Init_Object(){
//     // get key
//     Keys = DictModule[PName]["Key"];
    

//     // get current module and port
//     ObjDict = {...DictModule[PName]};
//     delete ObjDict["Key"]

//     // custom random port
//     Custom_Random_Port();
    
// }

// // custom random port for single practice
// function Custom_Random_Port(){
//     for (const ModuleName in ObjDict){
//         if (ObjDict[ModuleName].hasOwnProperty("RndPort")){
//             for (const RNDPort of ObjDict[ModuleName]["RndPort"]){
//                 // get current random port
//                 const RNDPortIndex    = RNDPort[0];
//                 const RNDPortKeyIndex = RNDPort[1];
//                 const RNDPortPoolName = RNDPort[2];
//                 const RNDGeneralName  = ObjRndPoolName[RNDPortPoolName];
//                 const RNDPortPool     = ObjRndPool[RNDPortPoolName];
//                 const RNDPortOut      = Get_Random_Array_Value(RNDPortPool);

//                 // assign random port
//                 ObjDict[ModuleName]["Port"][RNDPortIndex] = RNDPortOut;

//                 // assign random port general name
//                 ObjRndPorts[RNDPortOut] = RNDGeneralName;
                
//                 // assign random port key
//                 Keys[RNDPortKeyIndex[0]][[RNDPortKeyIndex[1]]] = RNDPortOut;
//             }
//         }
//     }
    
// }

// function Draw_Image(){
//     for (const ModuleName in ObjDict){
//         var Btmp = new createjs.Bitmap(DictImg[ModuleName]);
//         Btmp.name   = ModuleName;
//         Btmp.x      = ObjDict[ModuleName].x; // Center horizontally
//         Btmp.y      = ObjDict[ModuleName].y; // Center vertically

//         // resize the image if applicable
//         var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
//         Btmp.scaleX = Scale;
//         Btmp.scaleY = Scale;
//         Btmp.image.width  *= Scale;
//         Btmp.image.height *= Scale;

//         // integrate the image
//         ObjDict[ModuleName].img = Btmp;
//         stage.addChild(Btmp);
//     }
//     stage.update();         
// }

// function Draw_Connection_Ports(){
//     for(const ModuleName in ObjDict){
//         for(const PortName of ObjDict[ModuleName].Port){
//             var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
//             var circle = new createjs.Shape();
//             circle.graphics.beginFill("blue").drawCircle(0,0,PortSize);
//             circle.module = ModuleName;
//             circle.name   = PortName; 
//             if(ObjRndPorts.hasOwnProperty(PortName)){
//                 circle.rndname = ObjRndPorts[PortName];
//             }
//             circle.x = ObjDict[ModuleName].x + DictObjPos[ModuleName][PortName].x * Scale;
//             circle.y = ObjDict[ModuleName].y + DictObjPos[ModuleName][PortName].y * Scale;
//             ObjPorts.push(circle);
//             stage.addChild(circle);
//             stage.update();
        
//         }
//     } 
// }

// function Get_Img_Scale(Module){
//     if (Module.hasOwnProperty("Scale")){
//         return Module["Scale"];
//     }else{
//         return 1;
//     }
// }

// function Draw_Msg_Box(){
//     MsgBox = new createjs.Text();
//     MsgBox.font = "bold 30px Arial";
//     MsgBox.color = "#000";
//     MsgBox.textAlign = "center";
//     MsgBox.x = 500;
//     MsgBox.y = 700;
//     stage.addChild(MsgBox);
//     stage.update();
// }
// display basic practice page

// canvas and stage for drawing
var stage;

// practice name
var PName;

// objects in the canvas
var ObjDict =  [{name:"PLC",           x:150, y:100},
                {name:"Relay",         x:450, y:250},
                {name:"5VDC",          x:400, y:550},
                {name:"24VDC",         x:550, y:500},
                {name:"LimitedSensor", x:450, y:100}];

// ports in each object
var PLCPort =           [{name: "DI01",  x:11, y:313},
                         {name: "DI02",  x:11, y:338},  
                         {name: "DI03",  x:11, y:363},
                         {name: "DO01",  x:11, y:94},   
                         {name: "GNDDI", x:11, y:289}];
var RelayPort =         [{name: "RLC1",  x:82, y:7},    
                         {name: "RLC2",  x:82, y:137},
                         {name: "RLSW1", x:38, y:7},   
                         {name: "RLSW2", x:23, y:137},
                         {name: "RLSW3", x:53, y:137}]
var VDC5Port =          [{name: "5VP",   x:24, y:16},
                         {name: "5VN",   x:70, y:16}];
var VDC24Port =         [{name: "24VP",  x:20, y:12},
                         {name: "24VN",  x:60, y:12}];
var LimitedSensorPort = [{name: "LS1",   x:7, y:30},
                         {name: "LS2",   x:65, y:30}];

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
    var Ports = [PLCPort, RelayPort, VDC5Port, 
                 VDC24Port, LimitedSensorPort];
    for (var i = 0; i < ObjDict.length; i++){
        ObjDict[i].Port = Ports[i];
    }
}



function Draw_Image(){
    for (var i = 0; i < ObjDict.length; i++){
        var Btmp = new createjs.Bitmap(Imgs[i]);
        Btmp.name   = ObjDict[i].name;
        Btmp.x      = ObjDict[i].x; // Center horizontally
        Btmp.y      = ObjDict[i].y; // Center vertically
        ObjDict[i].Obj = Btmp;
        stage.addChild(Btmp);
    }
    stage.update();         
}

function Draw_Connection_Points(){
    for(var i=0; i< ObjDict.length; i++){
        for(var j=0; j< ObjDict[i].Port.length; j++){
            var circle = new createjs.Shape();
            circle.graphics.beginFill("blue").drawCircle(0,0,5);
            circle.name = ObjDict[i].Port[j].name;
            circle.x = ObjDict[i].x + ObjDict[i].Port[j].x;
            circle.y = ObjDict[i].y + ObjDict[i].Port[j].y;
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
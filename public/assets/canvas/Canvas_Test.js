// display practice connection page on Canvas
import { STPage } from "../properties/Properties_Page.js";
import { DictModule } from "../properties/Properties_Task.js"
import { PortPos, OtherPos } from "../properties/Properties_Position.js"
import { DictMsg }  from "../properties/Properties_Message.js"
import { ObjRndPool, ObjRndPoolName } from "../properties/Properties_Random_Port_Pool.js";
import { Init_Practice } from "../test/Connection.js"
import { stage, PageID } from "./Canvas_Page.js";
import { DictImg } from "./Canvas_Image.js";
import { PortSize, IsObstacleOn } from "../properties/Properties_Connection.js";
// import { stage } from "./Canvas_Page.js";

var PName;
var ObjRndPorts = {};
var Obstacles   = [];  // all specific obstacle points
var ObjPorts    = [];
var MsgBox;
var AnlysBox;
var ImgLegend;

var Modules     = {};
var Msgs        = {}; // feedback message
var Keys        = []; // connecting keys

export { PName, ObjPorts, Obstacles, MsgBox, AnlysBox, ImgLegend, Msgs, Keys};

// main
export function Init_Test(){ 
    stage.removeAllChildren(); 

    // initialization 
    PName = STPage[PageID] // map customed test
    Init_Object();            
    Draw_Modules();            
    Draw_Modules_Ports();
    Draw_Msg_Box();
    Draw_Anlys_Box();
    Draw_Legend(); 
    Init_Practice();
}



// assign all ports' coordinate set to each object
function Init_Object(){
    // get dynamic message
    Msgs = DictMsg[PName];

    // get key
    Keys = DictModule[PName]["Key"];
    
    // get current module and port
    Modules = {...DictModule[PName]};
    delete Modules["Key"]

    // custom random port
    Custom_Random_Port();
    
}

// custom random port for single practice
function Custom_Random_Port(){
    for (const ModuleName in Modules){

        // assign independent random port
        if (Modules[ModuleName].hasOwnProperty("RndPort")){
            for (const RNDPort of Modules[ModuleName]["RndPort"]){
                // get current random port
                const RNDPortIndex    = RNDPort[0];
                const RNDPortKeyIndex = RNDPort[1];
                const RNDPortPoolName = RNDPort[2];
                const RNDGeneralName  = ObjRndPoolName[RNDPortPoolName];
                const RNDPortPool     = ObjRndPool[RNDPortPoolName];
                const RNDPortOut      = Get_Random_Array_Value(RNDPortPool);

                // assign random port
                Modules[ModuleName]["Port"][RNDPortIndex] = RNDPortOut;

                // assign random port general name
                ObjRndPorts[RNDPortOut] = RNDGeneralName;
                
                // assign random port key
                Keys[RNDPortKeyIndex[0]][[RNDPortKeyIndex[1]]] = RNDPortOut;
            }

        // assign group random port
        }else if (Modules[ModuleName].hasOwnProperty("RndPortSet")){         
                // get random port set
                const RndPortSet         = Modules[ModuleName]["RndPortSet"];
                const RNDPortPoolName    = RndPortSet[0][3];
                const RNDGeneralNameSet  = ObjRndPoolName[RNDPortPoolName];
                const RNDPortPool        = ObjRndPool[RNDPortPoolName];
                const RNDPortOutSet      = Get_Random_Array_Value(RNDPortPool);
                
                // assign each random port from port set
                for (var i = 0; i < RNDPortOutSet.length; i++){
                    const RndPortOutIndex = RndPortSet[i][0];
                    const RNDPortIndex    = RndPortSet[i][1];
                    const RNDPortKeyIndex = RndPortSet[i][2];

                    // get current random port out
                    const RNDPortOut = RNDPortOutSet[RndPortOutIndex];
                    
                    // assign random port
                    Modules[ModuleName]["Port"][RNDPortIndex] = RNDPortOut
                
                    // assign random port general name
                    ObjRndPorts[RNDPortOut] = RNDGeneralNameSet[RndPortOutIndex];

                    // assign random port key
                    Keys[RNDPortKeyIndex[0]][[RNDPortKeyIndex[1]]] = RNDPortOut;
                
                }
             
        }
    }
    
}

function Draw_Modules(){
    Obstacles = [];

    for (const ModuleName in Modules){
        var Btmp = new createjs.Bitmap(DictImg[ModuleName]);
        Btmp.name   = ModuleName;
        Btmp.x      = Modules[ModuleName].x; // Center horizontally
        Btmp.y      = Modules[ModuleName].y; // Center vertically

        // resize the image if applicable
        const  Scale = Get_Img_Scale(DictModule[PName][ModuleName])
        Btmp.scaleX        = Scale;
        Btmp.scaleY        = Scale;
        Btmp.bound  = {"width" : Btmp.image.width * Scale,
                       "height": Btmp.image.height * Scale
                    };

        // integrate the image
        Modules[ModuleName].img = Btmp;
        stage.addChild(Btmp);

        // draw image bound(obstacle)
        const Bound = Get_Img_Bound(PortPos[ModuleName]);
        var Obstacle = Init_Rec_Obstacle(Btmp, Bound, Scale);
        Obstacle.obj = Draw_Closed_Shape(Obstacle.Port); 
        Obstacle.obj.visible = IsObstacleOn; // display the obstacle?
        Obstacles.push(Obstacle);
        stage.addChild(Obstacle.obj);    
           
    }
    
    stage.update();         
}


function Draw_Modules_Ports(){
    ObjPorts = [];
    
    for(const ModuleName in Modules){
        for(const PortName of Modules[ModuleName].Port){
            var Scale = Get_Img_Scale(DictModule[PName][ModuleName])
            var circle = new createjs.Shape();
            circle.graphics.beginFill("blue").drawCircle(0,0,PortSize);
            circle.module = ModuleName;
            circle.name   = PortName; 
            if(ObjRndPorts.hasOwnProperty(PortName)){
                circle.rndname = ObjRndPorts[PortName];
            }
            // console.log(ModuleName + "->" + PortName);
            circle.x = Modules[ModuleName].x + PortPos[ModuleName][PortName].x * Scale;
            circle.y = Modules[ModuleName].y + PortPos[ModuleName][PortName].y * Scale;
            ObjPorts.push(circle);
            stage.addChild(circle);
            
        
        }
    } 
    stage.update();
}

function Get_Img_Scale(Module){
    if (Module.hasOwnProperty("Scale")){
        return Module["Scale"];
    }else{
        return 1;
    }
}

function Get_Img_Bound(Module){
    if (Module.hasOwnProperty("Bound")){
        return Module["Bound"];
    }else{
        return {wl: 0, wr: 0, hu: 0, hd: 0};
    }
}

function Init_Rec_Obstacle(Img, b, s){
    // buffer expand to the object
    const BufH = 5;  // horizontal
    const BufV = 10; // vertical

    const x = Img.x;
    const y = Img.y;
    const w = Img.bound.width;
    const h = Img.bound.height;
    
    var Obstacle = {};

    Obstacle.name = Img.name;

    Obstacle.Port = [{x: x - BufH + b.wl * s,
                      y: y - BufV + b.hu * s},      // left up
                     {x: x + w + BufH - b.wr * s, 
                      y: y - BufV + b.hu * s},      // right up
                     {x: x + w + BufH - b.wr * s, 
                      y: y + h + BufV - b.hd * s},  // right down
                     {x: x - BufH + b.wl * s,    
                      y: y + h + BufV - b.hd * s}]; // left down
               
    return Obstacle;
}

function Draw_Closed_Shape(Points){
    var Shape = new createjs.Shape();
    Shape.graphics.setStrokeStyle(2); 	   // Line thickness
    Shape.graphics.setStrokeDash([10, 5]); // dash point
    Shape.graphics.beginStroke("#000000");  // color

    // start to draw waypoint line
    for(var i = 0; i < Points.length - 1; i++){
        // current draw start point
        Shape.graphics.moveTo(Points[i].x, Points[i].y);

        // current draw end point
        Shape.graphics.lineTo(Points[i+1].x, Points[i+1].y);
    }

    // last draw to close the shape
    Shape.graphics.moveTo(Points[Points.length - 1].x, 
                          Points[Points.length - 1].y);
    Shape.graphics.lineTo(Points[0].x, Points[0].y);

    return Shape;
}

function Draw_Msg_Box(){
    MsgBox = new createjs.Text();
    MsgBox.font = "bold 30px Arial";
    MsgBox.color = "#000";
    MsgBox.textAlign = "center";
    MsgBox.lineWidth = 400;
    MsgBox.x = 500;
    MsgBox.y = 700;
    stage.addChild(MsgBox);
    stage.update();
}

function Draw_Anlys_Box(){
    AnlysBox = new createjs.Text();
    AnlysBox.font = "bold 20px Arial";
    AnlysBox.color = "#000";
    AnlysBox.textAlign = "left";
    AnlysBox.lineWidth  = 400;
    // AnlysBox.lineHeight = 300;
    AnlysBox.x = 400;
    AnlysBox.y = 800;
    stage.addChild(AnlysBox);
    stage.update();
}

function Draw_Legend(){
    var key     = "Legend";
    var Btmp    = new createjs.Bitmap(DictImg[key]);
    Btmp.name   = key;
    Btmp.x      = OtherPos[key].x; // Center horizontally
    Btmp.y      = OtherPos[key].y; // Center vertically
    Btmp.visible = false;

    ImgLegend   = Btmp;
    stage.addChild(ImgLegend);
    stage.update();

}

function Get_Random_Array_Value(ArrayIn){
    const randomIndex = Math.floor(Math.random() * ArrayIn.length);
    return ArrayIn[randomIndex];
}
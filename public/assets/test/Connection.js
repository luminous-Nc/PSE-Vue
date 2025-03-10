import { stage } from "../canvas/Canvas_Page.js";
import { ObjPorts, Obstacles, MsgBox, AnlysBox, ImgLegend, Msgs } from "../canvas/Canvas_Test.js"
import { Get_Path, Get_Break_Extend_Point,
         Remove_Repeated_Line_Waypoints, Reset_Dict_Scale } from "./Find_Path.js"
import { PortSize, IsLineRndColor, IsLineDash } from "../properties/Properties_Connection.js";
import { Add_Log } from "../record/Log.js";
import { useStudentStore } from "@/stores/student.js";

export { MyPorts, MyLines, Timer};
export {Init_Practice,Init_Practice_For_Demo, Display_Legend, Hide_Ports, Hide_Legend, Reset_MsgBox};
export {Get_Line,Get_SubLine,Get_Line_For_Demo,Get_SubLine_For_Demo,Redraw_Line}
// declare variables
// User's operation
var TempPorts   = [];   // current dual selected ports
var MySubLines  = [];   // user's accumulated subLines

var MyPorts     = [];   // user's accumulated ports set
var MyLines	    = [];	// user's accumulated connections(two ports array);
var Timer       = {};   // user's start time

// overall parameters
var Title       = {};   // objects' prefix
var Ports       = [];	// selectable ports



// main
function Init_Practice(){
    //Analysis_Symbols_Remove();
    Init_Parameter();
    Init_Symbol();
}

function Init_Practice_For_Demo(){
    //Analysis_Symbols_Remove();
    Init_Parameter();
    Init_Symbol(true);
}

// initialize all parameters
function Init_Parameter(){
    Reset_Dict_Scale(); // reset scale of subline && detour line move
    MyPorts	    = [];
    TempPorts   = [];
    Title       = Titles_Init();  // objects' general title
    Timer       = {Start: new Date()};
}

// initialize designated symbols in <practice> frame
function Init_Symbol(DemoMode=false){
    // remove SubLines, Lines, and Legend
    Remove_SubLines();
    Remove_Lines();

    // generate obstacles
    // Obstacles = Init_Obstacles(ObjDict);

    // generate ports and event listeners
    Reset_Ports(DemoMode);

    // reset dynamic message box
    Reset_MsgBox();

    // reset dynamic analysis box
    Reset_AnlysBox();

    // reset legend
    Reset_Legend();

}

// generate titles of the current task
function Titles_Init(){
    // setup each title
    const Title    = "Test_";
    const Port     = Title + "P"; // select
    const SubLine  = Title + "S"; // subline
    const Line     = Title + "L"; // line
    const Obstacle = Title + "B"; // obstacle
    const Module   = Title + "M"; // module

    return {"Port":     Port,
            "SubLine":  SubLine,
            "Line":     Line,
            "Obstacle": Obstacle,
            "Module":   Module};
}

// initialize all obstacles of the current task based on module figure
// function Init_Obstacles(Objs){
//     var Obstacles = []; // modules array
//     const BufHor = 5; // buffer expand to the object
//     const BufVer = 10;

//     // get all modules' figure
//     for (const key in Objs){
//         // initialize the module
//         var Module = Objs[key].img;     // object
//         var name = Module.name;         // object name
//         var x    = Module.x;            // left coordinate
//         var y    = Module.y;            // top coordinate
//         var w    = Module.image.width;  // image width
//         var h    = Module.image.height; // image height

//         // initialize obstacle
//         var Obstacle = {};
//         Obstacle.name = name;

//         // initialize 4 corner points of the module
//         Obstacle.Port = [{x: x - BufHor,     y: y - BufVer},      // left up
//                          {x: x + w + BufHor, y: y - BufVer},      // right up
//                          {x: x + w + BufHor, y: y + h + BufVer},  // right down
//                          {x: x - BufHor,     y: y + h + BufVer}]; // left down

//         // initialize 5 drawing points of the module(1->2->3->4->1)
//         var MyObPts = [...Obstacle.Port, Obstacle.Port[0]];

//         // draw obstacle(optional)
//         Obstacle.obj = Draw_Connection(name, MyObPts, true);

//         // assign to obstacles set
//         Obstacles.push(Obstacle);
//     }

//     return Obstacles;
// }

// initialize ports: display them and reset event listeners
function Reset_Ports(demoMode=false){
    // remove old events
    All_Events_Remove(Ports, "mouseover", Event_MouseOver_Connect);
    All_Events_Remove(Ports, "mousedown", Event_MouseDown_Connect);
    All_Events_Remove(Ports, "mouseout", Event_MouseOut_Connect);
    All_Events_Remove(Ports, "click", Event_Click_Connect);

    // get and display ports
    Ports = ObjPorts;
    Display_Ports();

    // if (!ReEnterFlag) {
    //     console.error('init events')
    //     // initialize all select mouseover/out and click events
    //     All_Events_Init(Ports, "mouseover", Event_MouseOver_Connect);
    //     All_Events_Init(Ports, "mousedown", Event_MouseDown_Connect);
    //     All_Events_Init(Ports, "mouseout", Event_MouseOut_Connect);
    //     All_Events_Init(Ports, "click", Event_Click_Connect);
    // }
    if (!demoMode) {
        // initialize all select mouseover/out and click events
        All_Events_Init(Ports, "mouseover", Event_MouseOver_Connect);
        All_Events_Init(Ports, "mousedown", Event_MouseDown_Connect);
        All_Events_Init(Ports, "mouseout", Event_MouseOut_Connect);
        All_Events_Init(Ports, "click", Event_Click_Connect);
    }
}

// hide all sub-line
function Hide_SubLines(){
    Execute_All(MySubLines, false);
}

// hide all connections
function Hide_Lines(){
    Execute_All(MyLines, false);
}

// hide all Ports
function Hide_Ports(){
    Execute_All(Ports, false);
}

// hide legend
function Hide_Legend(){
    ImgLegend.visible = false;
}

// reset message box
function Reset_MsgBox(){
    MsgBox.text = "";
    Updage_Stage();
}

// reset analyis box
function Reset_AnlysBox(){
    if (AnlysBox) {
        AnlysBox.text = "";
    }
    Updage_Stage();
}

// reset legend label
function Reset_Legend(){
    ImgLegend.visible = false;
    Updage_Stage();
}


// remove all connections
function Remove_Lines(){
    Remove_All(MyLines);
    MyLines = [];
}

// remove all connections
function Remove_SubLines(){
    Remove_All(MySubLines);
    MySubLines = [];
}

// remove legend
function Remove_Legend(){
    stage.removeChild(ImgLegend);
    stage.update();
}

// display all select ports initially
function Display_Ports(){
    Execute_All(Ports, true);
}

// display message box
function Display_MsgBox(){
    MsgBox.visible = true;
    Updage_Stage();
}

// display legend label
function Display_Legend(){
    ImgLegend.visible = true;
    Updage_Stage();
}

// display or hide all deSignsated items
function Execute_All(objects, action){
    for (var i = 0; i < objects.length; i++){
        // <action>: true or false
        objects[i].visible = action;
    }
    // update stage
    Updage_Stage();
}

// update canvase stage
function Updage_Stage(){
    stage.update();
}

// remove all deSignsated items
function Remove_All(object){
    for (var i = 0; i < object.length; i++){
        if(object[i]){stage.removeChild(object[i]);}
    }
    stage.update();
}


// initialize all click events
function All_Events_Init(objects, event, event_func) {
    // use for-loop to add all select listeners
    for (var i = 0; i < objects.length; i++){
        if (objects[i].hasEventListener(event) == false){
            objects[i].addEventListener(event, event_func);
        }

    }
}

// remove all click events
function All_Events_Remove(objects, event, event_func) {
    // use for-loop to add all select listeners
    for (var i = 0; i < objects.length; i++){
        if (objects[i].hasEventListener(event) == true){
            objects[i].removeEventListener(event, event_func);
        }

    }
}

// mouseover a connection
function Event_MouseOver_Connect(e){
    Edit_Connect(e.target, "blue", PortSize*3);
}

// mousedown a connection
function Event_MouseDown_Connect(e){
    Edit_Connect(e.target, "red", PortSize);
}

// mouseout a connection
function Event_MouseOut_Connect(e){
    Edit_Connect(e.target, "blue", PortSize);
}

// change shape's size and color
function Edit_Connect(shape, color, radius) {
    shape.graphics.clear();
    shape.graphics.beginFill(color).drawCircle(0,0,radius);
    stage.update();
}

// click and make a connection
function Event_Click_Connect(e){
    // 1. setup port based on the selected port
    Select_Ports(e.target);

    // 2. display connection when two ports have been selected
    Display_Connection();

    // collect time ticker
    const Detail = e.target.name;
    Add_Log("Click", "Port", Detail);
}

function Select_Ports(target){
    // get current selected port
    var Port = target;

    // get and display subline symbol from select symbol
    var SubLine = Get_SubLine(Port);

    // add subline end point to the port
    Port.SubLEnd = SubLine.point.end;

    // add time stamp
    Port.Time = new Date();

    // reset current/new ports pair
    TempPorts.push(Port);
    MySubLines.push(SubLine);

    // dispplay in web console for 2nd port
    const StringPort = ["Start Port", "End Port"];
    console.log("%s -> %s",
                StringPort[TempPorts.length - 1],
                Port.name);

}

function Display_Connection(){
    // check if the two different ports have been selected
    if (TempPorts.length == 2){
        if(TempPorts[0].name != TempPorts[1].name){
            // generate the connection
            var Line = Get_Line(TempPorts);

            // display the connection and setup other procedure
            if (typeof Line != 'undefined'){
                // disable the two select ports with successful connection
                //Disable_Select(TempPorts);

                // add operations
                MyPorts.push(TempPorts); // ports
                MyLines.push(Line);      // connections

                // notify in the console
                console.log("connection -> %s", Line.name);
                console.log("---------");

                // notify in message box(if applicable)
                Show_Msg(TempPorts[0], TempPorts[1]);
                // MsgBox.text =  TempPorts[0].name + "---" + TempPorts[0].name
                //               + ": error message(display)";
                // stage.update();
            }else{
                console.log("undefined connection");
            }
        }else{
            // resume the current subline moving scale
            DictSubMScl[TempPorts[0].module] -=2;
            console.log("connection needs two different ports");
        }

        // remove active SubLines
        Remove_SubLines();

        // reset both temperoral ports
        TempPorts = [];
    }
}

// display feedback message
function Show_Msg(Port1, Port2){
    // get original port name
    var Port1Name = Port1.name;
    var Port2Name = Port2.name;

    // assign general random name(if applicable)
    if (Port1.hasOwnProperty("rndname")){Port1Name = Port1["rndname"];}

    if (Port2.hasOwnProperty("rndname")){Port2Name = Port2["rndname"];}

    // check message dictionary
    if (Msgs === undefined){
        // generate empty string if unfouned message dictionary
        MsgBox.text = "";
    }else{
        // get message if database exists
        for (const Msg of Msgs){
            const MsgPort = Msg["Ports"];
            if (MsgPort.includes(Port1Name) && MsgPort.includes(Port2Name)){
                MsgBox.text = Msg["Message"];
                break;
            }
        }
    };

    stage.update();

}

function Get_SubLine_For_Demo(Port){
    // initialie current point
    var StartPt = {x : Port.x, y : Port.y};
    var EndPt = Get_Break_Extend_Point(StartPt, Obstacles);

    // initialize subline name
    var SubLineName = Get_Symbol_Name(Title.SubLine, Port.name);

    // return if the subline exist
    var CurrentSubLine = stage.getChildByName(SubLineName);
    if (CurrentSubLine != null){
        CurrentSubLine.visible = true;
        return CurrentSubLine;
    }

    // intialize subline
    var SubLine = new createjs.Shape();


    SubLine.name    = SubLineName;           // Name
    SubLine.Module  = Port.Module;           // parent module name
    SubLine.visible = true;                  // visibility

    // add start and end points
    SubLine.point = {start: StartPt, end: EndPt}

    // add the line to current connection array
    MySubLines.push(SubLine);

    return SubLine;
}

// get subline
function Get_SubLine(Port){
    // initialie current point
    var StartPt = {x : Port.x, y : Port.y};
    var EndPt = Get_Break_Extend_Point(StartPt, Obstacles);

    // initialize subline name
    var SubLineName = Get_Symbol_Name(Title.SubLine, Port.name);

    // return if the subline exist
    var CurrentSubLine = stage.getChildByName(SubLineName);
    if (CurrentSubLine != null){
        CurrentSubLine.visible = true;
        return CurrentSubLine;
    }

    // intialize subline
    var SubLine = new createjs.Shape();

    // setup properties
    SubLine.graphics.setStrokeStyle(5); 	 // Line thickness
    SubLine.graphics.beginStroke("#000000"); // Line color
    SubLine.name    = SubLineName;           // Name
    SubLine.Module  = Port.Module;           // parent module name
    SubLine.visible = true;                  // visibility

    // draw subline
    SubLine.graphics.moveTo(StartPt.x, StartPt.y);
    SubLine.graphics.lineTo(EndPt.x, EndPt.y);

    // add start and end points
    SubLine.point = {start: StartPt, end: EndPt}

    // add the line to the stage if new
    stage.addChild(SubLine);
    stage.update();

    // add the line to current connection array
    MySubLines.push(SubLine);

    return SubLine;
}

function Redraw_Line(Line, opacity) {
    let newLine = new createjs.Shape(); // 新建线条
    newLine.graphics.setStrokeStyle(4); // 宽度缩减

    // 使用原线条的颜色
    newLine.graphics.beginStroke(Line.graphics._stroke.style);

    // 设置透明度
    newLine.alpha = opacity;

    // 重绘原来的路径点
    Line.WayPts.forEach((point, index) => {
        if (index === 0) {
            newLine.graphics.moveTo(point.x, point.y);
        } else {
            newLine.graphics.lineTo(point.x, point.y);
        }
    });

    return newLine;
}

function Get_Line_For_Demo(MyPortSet,randomColor) {
    // get two Ports
    let Port1 = MyPortSet[0];
    let Port2 = MyPortSet[1];

    // get the line name
    let LineName = Get_Line_Name(Title.Line, Port1.name, Port2.name);

    // get original start and end point
    let StartPt0 = [{x: Port1.x, y : Port1.y}];
    let EndPt0   = [{x: Port2.x, y : Port2.y}];

    // get new start and end point
    let StartPt  = Port1.SubLEnd;
    let EndPt    = Port2.SubLEnd;

    // get detouring waypoints
    let WayPts   = Get_Path(StartPt, EndPt, Obstacles);

    // integrate with orignal start and end points
    WayPts       = [...StartPt0, ...WayPts, ...EndPt0];

    // eliminate repated line
    WayPts       = Remove_Repeated_Line_Waypoints(WayPts);

    // draw mutiple waypoints line
    let Line     = Draw_Connection_With_Animation(LineName, WayPts,randomColor);

    // assign the connection module
    Line.Module = [Port1.name, Port2.name];

    // assign waypoints
    Line.WayPts = WayPts;

    // add time elapsed(second)
    Line.Time = {Start:  (Port1.Time - Timer.Start) / 1000,
        Stop:   (Port2.Time - Timer.Start) / 1000};

    // set correct sign of the line(default: false)
    Line.Correct = false;

    Line.opacity = 1;

    return Line;
}
// get dynamic line
function Get_Line(MyPortSet){
    // get two Ports
    var Port1 = MyPortSet[0];
    var Port2 = MyPortSet[1];

    console.log(Port1,Port2)

    // get the line name
    var LineName = Get_Line_Name(Title.Line, Port1.name, Port2.name);

    // get original start and end point
    var StartPt0 = [{x: Port1.x, y : Port1.y}];
    var EndPt0   = [{x: Port2.x, y : Port2.y}];

    // get new start and end point
    var StartPt  = Port1.SubLEnd;
    var EndPt    = Port2.SubLEnd;

    // update original and new point with skip waypoints(if applicable)
    // [Port1, Port2] = Skip_Waypoints(Port1, Port2, MyLines);

    // if (Port1.hasOwnProperty("SkipPts")){
    //     StartPt0 = Port1["SkipPts"].slice(0, Port1["SkipPts"].length - 1);
    //     StartPt  = Port1["SkipPts"].slice(-1)[0];
    // }else if (Port2.hasOwnProperty("SkipPts")){
    //     EndPt0 = Port2["SkipPts"].slice(1, Port2["SkipPts"].length);
    //     EndPt  = Port2["SkipPts"][0];
    // }

    // get detouring waypoints
    var WayPts   = Get_Path(StartPt, EndPt, Obstacles);

    // integrate with orignal start and end points
    WayPts       = [...StartPt0, ...WayPts, ...EndPt0];

    // eliminate repated line
    WayPts       = Remove_Repeated_Line_Waypoints(WayPts);

    // draw mutiple waypoints line
    var Line     = Draw_Connection(LineName, WayPts);

    // draw direct line based on the position of the two Ports
    //var Line = Draw_Connection(LineName, [StartPt, EndPt]);

    // assign the connection module
    Line.Module = [Port1.name, Port2.name];

    // assign waypoints
    Line.WayPts = WayPts;

    // add time elapsed(second)
    Line.Time = {Start:  (Port1.Time - Timer.Start) / 1000,
                 Stop:   (Port2.Time - Timer.Start) / 1000};

    // set correct sign of the line(default: false)
    Line.Correct = false;

    return Line;
}

function Draw_Connection_With_Animation(LineName, Points, randomColor) {
    // 定义一条新线
    let Line = new createjs.Shape();
    let AnimationDuration = 0
    if (Points.length < 3) {
        AnimationDuration = 1000
    } else {
        AnimationDuration = 2000
    }
    // 设置线条属性
    Line.graphics.setStrokeStyle(5); // 线条宽度

    // let Color = "#6306d9";
    Line.graphics.beginStroke(randomColor); // 设置线条颜色

    // 设置是否为虚线
    if (IsLineDash) {
        Line.graphics.setStrokeDash([10, 5]); // 如果需要虚线，则设置虚线样式
    }

    // 添加线条到舞台
    stage.addChild(Line);

    // 动画绘制逻辑
    let currentIndex = 0;
    function drawNextSegment() {
        if (currentIndex < Points.length - 1) {
            // 获取当前线段的起点和终点
            let startPoint = Points[currentIndex];
            let endPoint = Points[currentIndex + 1];

            // 逐段绘制线条
            Line.graphics.moveTo(startPoint.x, startPoint.y);
            Line.graphics.lineTo(endPoint.x, endPoint.y);

            // 更新舞台
            stage.update();

            // 递归调用，绘制下一段
            currentIndex++;
            setTimeout(drawNextSegment, AnimationDuration / (Points.length - 1)); // 按总时长平分每段动画时间
        }
    }

    // 开始绘制动画
    drawNextSegment();

    // 设置线条名称
    Line.name = LineName;

    // 返回线条对象
    return Line;
}

// ***skip partial waypoints for the same start/end point
function Skip_Waypoints(Port1, Port2, MyLines){
    for (const MyLine of MyLines){
        const WayPts = MyLine.WayPts;
        if (MyLine.Module.includes(Port1.name)){
            let SkipPt = Get_Closest_Polyline_Point(Port2.SubLEnd, WayPts);
            let Index  = WayPts.indexOf(SkipPt);
            Port1.SkipPts = WayPts.slice(0, Index);
            return [Port1, Port2];
        } else if ((MyLine.Module.includes(Port2.name))){
            let SkipPt = Get_Closest_Polyline_Point(Port1.SubLEnd, WayPts);
            let Index  = WayPts.indexOf(SkipPt);
            Port2.SkipPts = WayPts.slice(Index, WayPts.length);
            return [Port1, Port2];
        }
    }
    return [Port1, Port2];
}


// draw waypoint connection
function Draw_Connection(LineName, Points){
    // define a new line
    let Line = new createjs.Shape();
    let Color = 0
    // setup properties
    Line.graphics.setStrokeStyle(2); 	  // Line thickness

    // set color(black || random)
    if (IsLineRndColor == true){
        Color = Get_Rnd_Color()
    }else{
        Color = "#000000"
        };
    Line.graphics.beginStroke(Color); // Line color

    // set dash(solid || dash)
    if (IsLineDash == true) {
        Line.graphics.setStrokeDash([10, 5]); // dash line if required
    }

    // start to draw waypoint line
    for(let i = 0; i < Points.length - 1; i++){
        // current draw start point
        Line.graphics.moveTo(Points[i].x, Points[i].y);

        // current draw end point
        Line.graphics.lineTo(Points[i+1].x, Points[i+1].y);
    }

    // setup line name
    Line.name = LineName;

    // hide the line(optinal)
    //Line.visible = false;

    stage.addChild(Line);
    stage.update();

    return Line;
}

// generate random stroke color
function Get_Rnd_Color(){
        // Generate a random hex color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

// generate current line object
function Get_Line_Name(Title, Port1Name, Port2Name){
    return "{" + Title + ": " + Port1Name + " <---> " + Port2Name + "}";
}

// generate current select/subline object
function Get_Symbol_Name(Title, PortName){
    return Title + ": " + PortName;
}

// hide the current two select ports
function Disable_Select(Ports){
    Execute_All(Ports, false);
}

/* // initialize subline
function SubLine_Init(){
    var MySubLines = [], MyDirection,
        MySelectName,
        StartX, StartY, MoveX, MoveY;

    // review all ports and draw subline with giving direction
    for (i = 0; i < AllPorts.length; i++){
        // check if the port is in the practice sub-direction dictionary
        if (DictPractice.hasOwnProperty(AllPorts[i])){
            // get the current subline direction
            MyDirection = DictPractice[AllPorts[i]];

            // Get start point and moving direction
            MySelectName = Get_Symbol_Name(TitleSelect, AllPorts[i]);
            StartX = root[MySelectName].x;
            StartY = root[MySelectName].y;
            MoveX  = DictDirectionL[MyDirection][0];
            MoveY  = DictDirectionL[MyDirection][1];

            // intialize subline
            var MySubLine = new createjs.Shape();

            // setup properties
            MySubLine.graphics.setStrokeStyle(4); 	   // Line thickness
            MySubLine.graphics.beginStroke("#000000"); // Line color

            // draw subline
            MySubLine.graphics.moveTo(StartX, StartY);
            MySubLine.graphics.lineTo(StartX + MoveX, StartY + MoveY);

            // setup line name
            MySubLine.name  = Get_Symbol_Name(TitleSubLine, AllPorts[i]);

            // hide the line(optinal)
            MySubLine.visible = false;

            // add the line to the stage if new
            root.stage.addChild(MySubLine);
            root.stage.update();

            // add the line to an array
            MySubLines.push(MySubLine);
        }

    }
    return MySubLines
} */

/* // initialize all obstacles of the current task
function Obstacle_Init(){
    var MyObstacle;
    var MyObstacles = [];
    var MyObstacleName;

    // return [] if obstacles is unset
    if (MyTaskNum > AllModulesSet.length){
        return [];
    }

    for (var i = 0; i < AllModules.length; i++){
        MyObstacle = [];
        for (var j = 0; j < 4; j++){
            // get current obstacle point name
            MyObstacleName = TitleObstacle + "_" +
                             AllModules[i] + (j+1).toString();

            // generate obstacle object
            var MyObj      = root[MyObstacleName];

            // hide the obstacle
            MyObj.visible  = false;

            // assign obstacle as dictionary array
            MyObstacle[j]  = {name : MyObj.name, x : MyObj.x,
                                                 y : MyObj.y};
        }

        MyObstacles[i] = MyObstacle;
    }
    return MyObstacles
} */

// //  initialize all connections' and their name in one kind(Lines)
// function Connection_Init(){
//     // return if using dynamic line
//     // if (LineType == "dynamic"){
//     //     return [];
//     // }

//     var n = 0, Symbols = [];
//     var Line;

//     for (var i = 0; i < AllPorts.length; i++){
//         for (var j = i + 1; j < AllPorts.length; j++){
//             // get the current static line
//             Line = Get_Static_Line([AllPorts[i], AllPorts[j]]);

//             // integrate the line to the array with designated properties
//             if (Line !== undefined){
//                 // setup color of the line
//                 Line.children[0].graphics._stroke.style = "#00FF00";

//                 // hide the line
//                 Line.visible = false;

//                 // assigne symbol and symbol name
//                 Symbols[n] = Line;

//                 // count the number of connections
//                 n += 1;
//             }

//         }
//     }
//     return Symbols;
// }

// // get static line
// function Get_Static_Line(MyPortSet){
//     var Line, LineName1, LineName2;

//     // integrate two potential lines
//     LineName1 = Get_Line_Name(TitleSLine, MyPortSet[0],
//                                           MyPortSet[1]);
//     LineName2 = Get_Line_Name(TitleSLine, MyPortSet[1],
//                                           MyPortSet[0]);

//     // comfirm the line
//     if (root[LineName1]){
//         Line = root[LineName1];
//     }else if (root[LineName2]){
//         Line = root[LineName2];
//     }else{
//         console.log("Cannot find the line:\n" +
//                     LineName1 + " or "+ LineName2);
//         return "error";
//     }

//     // hide the line
//     Line.visible = false;

//     return Line
// }

// initialize all symbols' name in one kind(Ports, sub-line)
// function Symbols_Init(title){
//     var Symbols = [], SymbolName;
//     for (var i = 0; i < AllPorts.length; i++){
//         // setup the current symbol with name
//         SymbolName = Get_Symbol_Name(title, AllPorts[i]);
//         Symbols[i] = root[SymbolName];
//     }
//     return Symbols;
// }

// initialize current practice properties
// function Init_Properties(){
//     // current ports and keys
//     AllPorts      = AllPortsSet[IndexTasks-1];
//     AllKeys       = AllKeysSet[IndexTasks-1];

//     // current port-module dictionary
//     DictPorts     = DictPortsSet[IndexTasks-1];
//     DictModules   = DictModulesSet[IndexTasks-1];
//     DictAnalysis  = Dict_Init(DictPorts, DictModules);

//     // current obstacles
//     AllModules    = AllModulesSet[IndexTasks - 1];

// }

// // initialize designated symbols in <practice> frame
// function Init_Symbols(){
//     Titles_Init();
//     Ports = ObjPorts;
//     AllObjs = ObjDict;
//     Obstacles = Obstacle_Init();
//     //Extra_Select_Init();
// }

// // hide designsated symbols in the <practice> frame
// function Practice_Symbols_Hide(){
//     Hide_SubLines();
//     //Hide_Static_Lines();
//     //Hide_Legends();
// }

// // display deSignsated symbols in the <practice> frame
// function Display_Symbols(){
//     Display_Ports();
//     //Display_Buttons();
// }

// // main of 1st frame
// function Init(){
//     // initialize general parameters and symbols
//     General_Symbol_Init();

//     // initialize button event by once
//     All_Events_Init(Buttons, "click", Event_Click_Button);

// }

// // main of description frame
// function Init_Description(){
//     // initialize all settings
//     Description_Symbols_Hide();
//     Description_Symbols_Remove();
//     Remove_Symbols();
//     Analysis_Symbols_Remove();
//     Description_Symbols_Display();
// }

// // assign MKSV set dictionary(Multiple-Keys-Single-Value)
// function Dict_Init(Keys, Values){
//     var Dict = {};
//     for (var i = 0; i < Keys.length; i++){
//         for (var j = 0; j < Keys[i].length; j ++){
//             Dict[Keys[i][j]] = Values[i];
//         }
//     }

//     return Dict;
// }

//var DictConnections 	= new Object(); // dictionary used to check correct connection
//var DictSubConnections	= new Object(); // dictionary used to collect current sub-Lines

// // button event to different hint and practice page
// function Event_Click_Button(e){
//     // get the current button name
//     var	MyButtonName = e.target.name;

//     // execute related button function
//     switch (true){
//         // next frame
//         case (MyButtonName.includes("Next") ||
//                 MyButtonName.includes("next")):
//                 IndexMyPage += 1;
//                 root.gotoAndStop(IndexMain[IndexMyPage]);
//                 break;
//         // previous frame
//         case (MyButtonName.includes("Previous") ||
//                 MyButtonName.includes("previous")):
//                 IndexMyPage -= 1;
//                 root.gotoAndStop(IndexMain[IndexMyPage]);
//                 break;
//         // reset connections
//         case (MyButtonName.includes("Reset") ||
//                 MyButtonName.includes("reset")):
//                 Init_Practice();
//                 break;
//     }
// }

// // setup all extra select for one port with multiple connection
// function Extra_Select_Init(){
//     for (var i = 0; i < ExtraPorts.length; i++){
//         ExtraPorts[ExtraPorts[i].name] = 1;
//     }
// }

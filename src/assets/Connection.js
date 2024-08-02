// declare variables

// User's operation
var MyPorts		 = [];  // user's accumulated ports set
var TempPorts    = [];  // current dual selected ports
var MySubLines	 = [];	// user's accumulated subLines
var MyLines		 = [];	// user's accumulated connections(two ports array);
var Timer        = {};  // user's start time

// overall parameters
var Title = {};     // objects' prefix
var Obstacles       // all specific obstacle points
var Ports;	        // selectable ports

// main of practice frame
function Init_Practice(){
    //Analysis_Symbols_Remove();
    Init_Parameter();
    Init_Symbol();   
}

// initialize all parameters
function Init_Parameter(){	
    DictSubMScl = {};
    DictDetourL = {};
    MyPorts	    = [];
    TempPorts   = [];
    Title       = Titles_Init(PName);  // objects' general title
    Timer       = {Start: new Date()};
}

// initialize designated symbols in <practice> frame
function Init_Symbol(){ 
    // remove SubLines, Lines, and Legend
    Remove_SubLines();
    Remove_Lines();
    Remove_Legend();
    
    // generate obstacles
    Obstacles = Init_Obstacles(ObjDict);

    // generate ports and event listeners
    Reset_Ports();
}

// generate titles of the current task
function Titles_Init(Title){
    // setup each title
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
function Init_Obstacles(Objs){
    var Obstacles = []; // modules array
    const BufHor = 5; // buffer expand to the object
    const BufVer = 10;
        
    // get all modules' figure
    for (const key in Objs){
        // initialize the module
        var Module = Objs[key].img;     // object
        var name = Module.name;         // object name
        var x    = Module.x;            // left coordinate
        var y    = Module.y;            // top coordinate
        var w    = Module.image.width;  // image width    
        var h    = Module.image.height; // image height
        
        // initialize obstacle
        var Obstacle = {};
        Obstacle.name = name;

        // initialize 4 corner points of the module
        Obstacle.Port = [{x: x - BufHor,     y: y - BufVer},      // left up
                         {x: x + w + BufHor, y: y - BufVer},      // right up
                         {x: x + w + BufHor, y: y + h + BufVer},  // right down
                         {x: x - BufHor,     y: y + h + BufVer}]; // left down

        // initialize 5 drawing points of the module(1->2->3->4->1)
        var MyObPts = [...Obstacle.Port, Obstacle.Port[0]];

        // draw obstacle(optional)
        Obstacle.obj = Draw_Connection(name, MyObPts, true);

        // assign to obstacles set
        Obstacles.push(Obstacle);
    }

    return Obstacles;
}

// initialize ports: display them and reset event listeners
function Reset_Ports(){
    // get and display ports
    Ports = ObjPorts;
    Display_Ports();

    // initialize all select mouseover/out and click events
    All_Events_Init(Ports, "mouseover", Event_MouseOver_Connect);
    All_Events_Init(Ports, "mousedown", Event_MouseDown_Connect);
    All_Events_Init(Ports, "mouseout", Event_MouseOut_Connect);
    All_Events_Init(Ports, "click", Event_Click_Connect);
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

// display all select ports initially
function Display_Ports(){
    Execute_All(Ports, true);
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
    Edit_Connect(e.target, "blue", PortSize*2);
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

// get subline
function Get_SubLine(Port){   
    // initialie current point
    var StartPt = {x : Port.x, y : Port.y};
    var EndPt   = {};

    // get subline break part
    var BreakPts = StartPt;
    var BrkScale = 1;
    var Dir = {};

    // find break point and exit the loop
    while (Is_Inside_Obstacles(BreakPts, Obstacles)) {
        // get subline break point in 4 directions
        for (var i = 0; i < 4; i++){
            // get current subline direction dictionary
            Dir = DictDirN[i];

            // get current subline break point
            BreakPts = {x : StartPt.x + DictSubL.Break * Dir.x * BrkScale,
                        y : StartPt.y + DictSubL.Break * Dir.y * BrkScale};
           
            if (!Is_Inside_Obstacles(BreakPts, Obstacles)) {
                break;
            }
        }
        BrkScale += 1;
    }

    // get subline moving part
    // find which obstacle does the port belong to
    var ObName = Get_Inside_Obstacle(StartPt, Obstacles);

    // update subline scake dictionary (various subline length at each module)
    if (ObName in DictSubMScl){
        DictSubMScl[ObName] += 1;
    }
    else{
        DictSubMScl[ObName] = 1;
    }

    // calculate moving length
    var MoveL = DictSubL.Base + DictSubL.Move * DictSubMScl[ObName] ;

    // merge two parts: start point -> break point + moving line
    EndPt = {x : BreakPts.x + Dir.x * MoveL,
             y : BreakPts.y + Dir.y * MoveL,
             Dir: Dir};

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
    SubLine.Module  = ObName;                // parent module name
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

// get dynamic line
function Get_Line(MyPortSet){
    // get two Ports
    var Port1 = MyPortSet[0];
    var Port2 = MyPortSet[1];

    // get the line name
    var LineName = Get_Line_Name(Title.Line, Port1.name, Port2.name);
    
    // get original start and end point 
    var StartPt0 = {x: Port1.x, y : Port1.y};
    var EndPt0   = {x: Port2.x, y : Port2.y};

    // get new start and end point
    var StartPt  = Port1.SubLEnd;
    var EndPt    = Port2.SubLEnd;

    // get detouring waypoints
    var WayPts   = Get_Path(StartPt, EndPt, Obstacles);

    // integrate with orignal start and end points
    WayPts       = [StartPt0, ...WayPts, EndPt0];
    
    // eliminate repated line
    WayPts       = Remove_Repeated_Line_Waypoints(WayPts);
    
    // draw mutiple waypoints line
    var Line     = Draw_Connection(LineName, WayPts);
 
    // draw direct line based on the position of the two Ports
    //var Line = Draw_Connection(LineName, [StartPt, EndPt]);
    
    // assign the connection module
    Line.Module = [Port1.name, Port2.name];

    // add time elapsed(second)
    Line.Time = {Start:  (Port1.Time - Timer.Start) / 1000,
                 Stop:   (Port2.Time - Timer.Start) / 1000};

    // set correct sign of the line(default: false)
    Line.Correct = false;

    return Line;
}

// draw waypoint connection
function Draw_Connection(LineName, Points, DashPattern = false){
    // define a new line
    var Line = new createjs.Shape();

    // setup properties
    Line.graphics.setStrokeStyle(2); 	  // Line thickness
    Line.graphics.beginStroke("#000000"); // Line color
    if (DashPattern == true) {
        Line.graphics.setStrokeDash([10, 5]); // dash line if required
    }
    
    // start to draw waypoint line
    for(var i = 0; i < Points.length - 1; i++){
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
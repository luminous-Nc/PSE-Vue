// declare global variables 
var root; 

// declare variables in <description frame>
var TitleSelect;	 // select prefix(eg: T1S, T2S, etc)
var TitleSubLine;	 // subline prefix(eg: T1P, T2P, etc)
var TitleSLine;	     // static line prefix(eg: T1C, T2C, etc)
var TitleDLine;	     // dynamic line prefix(eg: T1L, T2L, etc)
var TitleObstacle;   // obstacle prefix(eg: T1B, T2B, etc)
var TitleModule;     // module prefix(eg: T1M, T2M, etc)


// declare  variables in <paractice frame>
var MyPorts		 = [];  // user's accumulated ports set
var MySelects	 = []; 	// user's two selected ports of a line
var MySubLines	 = [];	// user's two generated AllSubLines
var MyLines		 = [];	// user's accumulated connections(two ports array);
var MyPortsNum; 		// the number of the current selected ports
var MyLinesNum; 	    // the number of the current correct connection
var AllObstacles;       // all specific obstacle points
var AllSelects 	 = [];	// selectable ports
var ExtraSelects = []; 	// additional select if one port has more connection
var AllSubLines  = [];	// short connection after selecting
var AllLines 	 = [];	// complete connection
var LineDrawPt   = [];  // draw dynamic line start and end points
var LineDrawPts  = [];  
var ExtraPorts	 = new Object(); // to check if one port hold multiple connection

//var DictConnections 	= new Object(); // dictionary used to check correct connection
//var DictSubConnections	= new Object(); // dictionary used to collect current sub-AllLines


// main of 1st frame
function Init(){ 
    // initialize general parameters and symbols
    General_Symbol_Init();
    
    // initialize button event by once
    All_Events_Init(Buttons, "click", Event_Click_Button);

}

// main of description frame
function Init_Description(){
    // initialize all settings 
    Description_Symbols_Hide();
    Description_Symbols_Remove();
    Remove_Symbols();
    Analysis_Symbols_Remove();
    Description_Symbols_Display();
}


// main of practice frame
function Init_Practice(){
    // initialize all settings
    Remove_Symbols();
    //Analysis_Symbols_Remove();
    Init_Parameter();
    Init_Symbols();
    Display_Symbols(); 	
    	
    
    // initialize all select mouseover/out and click events
    All_Events_Init(AllSelects, "mouseover", Event_MouseOver_Connect);
    All_Events_Init(AllSelects, "mousedown", Event_MouseDown_Connect);
    All_Events_Init(AllSelects, "mouseout", Event_MouseOut_Connect);
    All_Events_Init(AllSelects, "click", Event_Click_Connect);
}

// display designated symbols in <description> frame
function Description_Symbols_Display(){
   // display button
   Display_Buttons();
}	

// hide designated symbols in <description> frame
function Description_Symbols_Hide(){
    Hide_Legends();
}	

// initialize designated symbols in <description> frame
function Description_Symbols_Remove(){
    // remove all dynamic line if available
    Remove_Lines();
}

// initialize all parameters
function Init_Parameter(){	
    DictSubLineL = {};
    DictDetourL  = {};
    MyPorts	     = [];
    MySubLines   = [];
    LineDrawPts  = [];
    MyPortsNum   = 0;
    MyLinesNum   = 0;
    IndexTasks = 1;
    Init_Properties();
}

// initialize current practice properties
function Init_Properties(){
    // current ports and keys
    AllPorts      = AllPortsSet[IndexTasks-1];
    AllKeys       = AllKeysSet[IndexTasks-1];
    
    // current port-module dictionary
    DictPorts     = DictPortsSet[IndexTasks-1];
    DictModules   = DictModulesSet[IndexTasks-1];
    DictAnalysis  = Dict_Init(DictPorts, DictModules);
   
}

// assign MKSV set dictionary(Multiple-Keys-Single-Value)
function Dict_Init(Keys, Values){
    var Dict = {};
    for (var i = 0; i < Keys.length; i++){
        for (var j = 0; j < Keys[i].length; j ++){
            Dict[Keys[i][j]] = Values[i];
        }  
    }

    return Dict;
} 

// initialize designated symbols in <practice> frame
function Init_Symbols(){
    Titles_Init();                  // objects' general title
    AllSelects = ObjPorts;          // connection port
    AllObjs = ObjDict;              // component(PLC, Relay, etc.)
    AllObstacles = Obstacle_Init(); // generated obstacle(components)
}

// generate titles of the current task
function Titles_Init(){
    // setup each title
    TitleSelect   = "T" + IndexTasks.toString() + "S";
    TitleSubLine  = "T" + IndexTasks.toString() + "P";
    TitleSLine    = "T" + IndexTasks.toString() + "C";
    TitleDLine    = "T" + IndexTasks.toString() + "L";
    TitleObstacle = "T" + IndexTasks.toString() + "B";
    TitleModule   = "T" + IndexTasks.toString() + "M";
}


// initialize all obstacles of the current task based on module figure
function Obstacle_Init(){
    var MyObstacles = [];
  
    // get all module figure(eg: T1M_PLC, T1M_RL, etc.)
    for (var i = 0; i < AllObjs.length; i++){
        // initialize the module
        var MyModule =  AllObjs[i].Obj;       // object
        var name     = MyModule.name;         // object name
        var x        = MyModule.x;            // left coordinate
        var y        = MyModule.y;            // top coordinate
        var width    = MyModule.image.width;  // image width    
        var height   = MyModule.image.height; // image height
        var Buf      = 5;                     // buffer expand to the obj

        // initialize obstacle
        var MyObstacle = {};
        MyObstacle.name = name;
        MyObstacle.Port = [];

        // initialize 4 corner points of the current module
        MyObstacle.Port[0] = {x : x - Buf, 
                              y : y - Buf};          // left up
        MyObstacle.Port[1] = {x : x + width + Buf,
                              y : y - Buf};          // right up
        MyObstacle.Port[2] = {x : x + width + Buf,
                              y : y + height + Buf}; // right down
        MyObstacle.Port[3] = {x : x - Buf,
                              y : y + height + Buf}; // left down

        // draw obstacle(optional)
        var MyObPts = [...MyObstacle.Port, MyObstacle.Port[0]];
        MyObstacle.obj = Draw_Connection(name, MyObPts, true);

        // assign to obstacles set
        MyObstacles[i] = MyObstacle;

    }

    return MyObstacles;
}

// setup all extra select for one port with multiple connection
function Extra_Select_Init(){
    for (var i = 0; i < ExtraSelects.length; i++){
        ExtraPorts[ExtraSelects[i].name] = 1;
    }
}

// display designsated symbols in the <practice> frame
function Display_Symbols(){
    Display_Selects();
}


// remove added symbols in the <practice> frame
function Remove_Symbols(){
    Remove_Lines();
    Remove_SubLines();
}


// hide all sub-line
function Hide_SubLines(){
    Execute_All(AllSubLines, false);
}

// hide all connections
function Hide_Static_Lines(){
    Execute_All(AllLines, false);
}

// hide all selects
function Hide_Selects(){
    Execute_All(AllSelects, false);
}

// hide all Buttons
function Hide_Buttons(){
    Execute_All(Buttons, false);
}

// remove all connections
function Remove_Lines(){
    Remove_All(MyLines); 
    MyLines = [];
}

// remove all connections
function Remove_SubLines(){
    Remove_All(AllSubLines);
    AllSubLines = [];
}

// display all Buttons
function Display_Buttons(){
    var ButtonPrevious, ButtonNext, ButtonReset;

    //assign all buttons
    for (var i = 0; i < Buttons.length; i++){
        // assign each button
        switch (true){
            case (Buttons[i].name.includes("Previous") || 
                    Buttons[i].name.includes("previous")):
                    ButtonPrevious = Buttons[i];
                    break;
            case (Buttons[i].name.includes("Next") || 
                    Buttons[i].name.includes("next")):
                    ButtonNext = Buttons[i];
                    break;
            case (Buttons[i].name.includes("Reset") || 
                    Buttons[i].name.includes("reset")):
                    ButtonReset = Buttons[i];
                    break;
        }
    }

    // display previous and/or next button
    if (IndexMyPage == IndexMain[0]){
        // first frame: only display next button
        ButtonPrevious.visible = false;
        ButtonNext.visible = true;
    }else if (IndexMyPage == IndexMain[IndexMain.length - 1]){
        // last frame: only display previous button
        ButtonPrevious.visible = true;
        ButtonNext.visible = false;
    }else{
        // other frame: display both previous and next button
        ButtonPrevious.visible = true;
        ButtonNext.visible = true;
    }

    // display reset button in practice frame
    if (IndexTasks.includes(IndexMyPage) == true){
        ButtonReset.visible = true;
    }else{
        ButtonReset.visible = false;
    }
    
}

// display all select ports initially
function Display_Selects(){
    Execute_All(AllSelects, true);
}

// display or hide all deSignsated items
function Execute_All(object, action){
    // <action>: true or false
    for (var i = 0; i < object.length; i++){
        object[i].visible = action;
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
    // <action>: true or false
    for (var i = 0; i < object.length; i++){
        if(object[i]){
            stage.removeChild(object[i]);
        }
        
    }
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

// button event to different hint and practice page
function Event_Click_Button(e){
    // get the current button name
    var	MyButtonName = e.target.name;

    // execute related button function
    switch (true){
        // next frame
        case (MyButtonName.includes("Next") || 
                MyButtonName.includes("next")):
                IndexMyPage += 1;
                root.gotoAndStop(IndexMain[IndexMyPage]); 
                break;
        // previous frame
        case (MyButtonName.includes("Previous") || 
                MyButtonName.includes("previous")):
                IndexMyPage -= 1;
                root.gotoAndStop(IndexMain[IndexMyPage]); 
                break;
        // reset connections
        case (MyButtonName.includes("Reset") || 
                MyButtonName.includes("reset")):
                Init_Practice(); 
                break;
    }
}

// mouseover a connection
function Event_MouseOver_Connect(e){
    Edit_Connect(e.target, "blue", 10);
}

// mousedown a connection
function Event_MouseDown_Connect(e){
    Edit_Connect(e.target, "red", 5);
}

// mouseover a connection
function Event_MouseOut_Connect(e){
    Edit_Connect(e.target, "blue", 5);
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
    Display_Single_Connection();
}

function Select_Ports(target){
    var Port, SubLine;
    var StringPort = ["Start Port", "End Port"];

    // get current selected port
    Port = target;

    // get and display subline symbol from select symbol   
    SubLine = Get_SubLine(Port);
    
    // assign selected port module name
    Port.Module = SubLine.Module;

    // reset current/new ports pair
    if (MyPortsNum == 0){
        MyPorts[MyLinesNum] = [];    
    }

    // dispplay in web console for 2nd port
    console.log("%s -> %s", StringPort[MyPortsNum], Port.name);

    // distribute current port name(start_port or end_port)
    MyPorts[MyLinesNum][MyPortsNum] = Port;
    MySubLines[MyPortsNum] 		    = SubLine;
    LineDrawPts[MyPortsNum]         = LineDrawPt;
    MyPortsNum    		           += 1;
    
}

function Display_Single_Connection(){
    var Line;
   
    // check if the two different ports have been selected
    if (MyPortsNum == 2){
        if(MyPorts[MyLinesNum][0].name != 
           MyPorts[MyLinesNum][1].name){
            // generate the connection
            Line = Get_Dynamic_Line(MyPorts[MyLinesNum]);
   
            // display the connection and setup other procedure
            if (typeof Line != 'undefined'){
                // disable the two select ports with successful connection
                Disable_Select(MyPorts[MyLinesNum]);

                // accumulate the connection(two ports nested array and line object)
                MyLines.push(Line);

                // count the number of correct connections
                MyLinesNum += 1;
            
                // notify in the console
                console.log("connection -> %s", Line.name);
                console.log("---------");     
            }else{
                MyPorts.pop();
                console.log("undefined connection");
            }                     
        }else{
            MyPorts.pop();
            console.log("connection needs two different ports");

        }
         
        // hide two active SubLines
        Execute_All(MySubLines, false);

        // reset both ports and the number of ports after checking connection
        MySubLines 	= [];
        LineDrawPts = [];
        MyPortsNum 	= 0;  
    }

}

// get subline
function Get_SubLine(Port){   
    // initialie current point
    var MySelect     = Port;
    var StartPt      = {x : MySelect.x, y : MySelect.y};
    var EndPt        = StartPt;

    // find which obstacle does the port belong to
    var ObName = Get_Inside_Obstacle(StartPt, AllObstacles);

    // update subline paramter dictionary
    if (ObName in DictSubLineL){
        // update current obstacle subline parameter
        DictSubLineL[ObName] += 1;
    }else{
        // initialize current obstacle subline parameter
        DictSubLineL[ObName] = 1;
    }

    var MoveL = SubLineBaseL + DictSubLineL[ObName] * SubLineAddL;
    var BreakPts = StartPt;
    var SublineDir = {};
    var SubLineBaseScale = 1;

     // find break point and exit the loop
    while (Is_Inside_Obstacles(BreakPts, AllObstacles)) {
        // get subline break point in 4 directions
        for (var i = 0; i < 4; i++){
            // get current subline direction dictionary
            SublineDir = DictSubLineDir[i];

            // get current subline break point
            BreakPts = {x : StartPt.x + 
                            SubLineBaseScale * 
                            SublineDir.x * 
                            SubLineBreakL,
                        y : StartPt.y +  
                            SubLineBaseScale * 
                            SublineDir.y * 
                            SubLineBreakL};
           
            if (!Is_Inside_Obstacles(BreakPts, AllObstacles)) {
                break;
            }
        }
        SubLineBaseScale += 1;
    }

    // get external subline end point and exit the loop
    EndPt = {x : BreakPts.x + SublineDir.x * MoveL,
             y : BreakPts.y + SublineDir.y * MoveL};
       
    // save the end stroke point as line start point
    LineDrawPt = EndPt;

    // initialize subline name
    var MySubLineName = Get_Symbol_Name(TitleSubLine, MySelect.name);

    // return if the subline exist
    var CurrentSubLine = stage.getChildByName(MySubLineName);
    if (CurrentSubLine != null){
        CurrentSubLine.visible = true;
        return CurrentSubLine;
    }

    // intialize subline
    var MySubLine = new createjs.Shape();

    // setup properties
    MySubLine.graphics.setStrokeStyle(2); 	   // Line thickness
    MySubLine.graphics.beginStroke("#000000"); // Line color
    MySubLine.name    = MySubLineName;         // Name
    MySubLine.Module  = ObName;                // parent module name
    MySubLine.visible = true;                  // visibility

    // draw subline
    MySubLine.graphics.moveTo(StartPt.x, StartPt.y);
    MySubLine.graphics.lineTo(EndPt.x,   EndPt.y);

    // add the line to the stage if new
    stage.addChild(MySubLine);
    stage.update();

    // add the line to current connection array
    MySubLines.push(MySubLine);
    AllSubLines.push(MySubLine);
               
    return MySubLine;
}

// get dynamic line
function Get_Dynamic_Line(MyPortSet){
    // get two selects
    var Port1 = MyPortSet[0];
    var Port2 = MyPortSet[1];

    // get the line name
    var LineName = Get_Line_Name(TitleDLine, Port1.name, Port2.name);
    
    // get original start and end point 
    var StartPt0 = {x: Port1.x, y : Port1.y};
    var EndPt0   = {x: Port2.x, y : Port2.y};

    // get new start and end point
    var StartPt  = LineDrawPts[0];
    var EndPt    = LineDrawPts[1];

    // get detouring waypoints
    var WayPts   = Get_Path(StartPt, EndPt, AllObstacles);

    // integrate with orignal start and end points
    WayPts       = [StartPt0, ...WayPts, EndPt0];
    
    // eliminate repated line
    WayPts       = Remove_Repeated_Line_Waypoints(WayPts);
    
    // draw mutiple waypoints line
    var Line     = Draw_Connection(LineName, WayPts);
 
    // draw line based on the position of the two selects
    //var Line = Draw_Connection(LineName, [StartPt, EndPt]);
    
    // assign the connection module
    Line.Module = [Port1.name, Port2.name];

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
    
    // add the line to the stage if new
    if (MyLines.includes(Line) == false){
        stage.addChild(Line);
        stage.update();
    }

    return Line;
}

// generate current line object
function Get_Line_Name(Title, Port1Name, Port2Name){
    return Title + "_" + Port1Name + "_" + Port2Name;
}

// generate current select/subline object
function Get_Symbol_Name(Title, PortName){
    return Title + "_" + PortName;
}

// hide the current select port and remove the eventListener
function Disable_Select(Selects){ 
    // if (Select.name in ExtraPorts){
    //         // 1. delete current key and keep the current select listener
    //         delete ExtraPorts[Select.name]; 
    //     }else {
    //         // delete the current select listener
    //         All_Events_Remove(Select, 'click', Event_Click_Connect);
    //         Select.visible = false;
    //     }

    // hide selected ports
    Execute_All(Selects, false);

    // remove port click events
    //All_Events_Remove(Selects, 'click', Event_Click_Connect);
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

// //  initialize all connections' and their name in one kind(AllLines)
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

// initialize all symbols' name in one kind(AllSelects, sub-line)
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
//     AllSelects = ObjPorts;
//     AllObjs = ObjDict;
//     AllObstacles = Obstacle_Init();
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
//     Display_Selects();
//     //Display_Buttons();
// }
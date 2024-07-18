// all properties and parameters in the project
var MyAnalysis;
var ImgLegend;

// main of anlaysis frame
function Init_Analysis(){  
    Init_Parameter_A();
    Init_Symbol_A();
    General_Analysis();  
    console.log(MyAnalysis);
}

// initialize current analysis properties
function Init_Parameter_A(){
    Keys = DictKeys[PName];
    Timer.Stop = (new Date() - Timer.Start) / 1000;
    MyAnalysis = new Object();
}

// initialize current analysis symbols
function Init_Symbol_A(){
    Hide_Ports();
    Init_Legend();
}

// initialize connection legend
function Init_Legend(){
        var key     = "Legend";
        var Btmp    = new createjs.Bitmap(DictImg[key]);
        Btmp.name   = key;
        Btmp.x      = DictObjPos[key].x; // Center horizontally
        Btmp.y      = DictObjPos[key].y; // Center vertically
        ImgLegend   = Btmp;
           
        stage.addChild(ImgLegend);
        stage.update();   
    
}

// hide Legend
function Remove_Legend(){
    stage.removeChild(ImgLegend);
    stage.update();
}

// analyze connections
function General_Analysis(){
    // <<Statistic Analysis>>
    // get correct and incorrect line
    var ConnectionOut = Check_Connection(MyPorts, MyLines, Keys);
    Object.assign(MyAnalysis, ConnectionOut);

    // get time elapse
    var TimeOut = Get_Time_Elapse();
    Object.assign(MyAnalysis, TimeOut);
 
    // <<Graphical Analysis>>
    // display all incorrect line as red color
    Highlight_Connection(MyLines);

    // <<Feature Analysis>>
    // review all incorrect ports set and get all related module
    var LearnModule = Get_Learn_Modules(ConnectionOut.Incorrect);
    Object.assign(MyAnalysis, LearnModule);

}

// check the user's current connections
function Check_Connection(PortsIn, LinesIn, KeysIn){
    var LoopSkipMarker   = false;
    var CorrectOut = [], IncorrectOut = [];
    var CorrectRateOut, MyIncorrectRateOut;

    //check the user's current connections
    for (var i = 0; i < PortsIn.length; i++){
        for (var j = 0; j < KeysIn.length; j++){
            // get two ports and keys' bane
            var Port1Name = PortsIn[i][0].name;
            var Port2Name = PortsIn[i][1].name;
            var Key1Name  = KeysIn[j][0];
            var Key2Name  = KeysIn[j][1];

            // check if they are match each other
            if((Port1Name == Key1Name) && (Port2Name == Key2Name) ||
               (Port1Name == Key2Name) && (Port2Name == Key1Name)){

                // append the correct connection
                MyCorrect.push([...PortsIn[i], LinesIn[i]]);

                // revise line's correct sign
                LinesIn[i].Correct = true;

                LoopSkipMarker = true;
                break;
            }
        }
        
        // skip incorrect accumulation if correct is found
        if (LoopSkipMarker == true){
            LoopSkipMarker = false;
            continue;
        }
    
        // append incorrect connection if unfound correct one
        IncorrectOut.push([...PortsIn[i], LinesIn[i]]);
    }

    // correct and incorrect rate
    var CorrectRateOut = parseFloat((CorrectOut.length / KeysIn.length).toFixed(2));
    var IncorrectRateOut = 1 - CorrectRateOut;

    // integrate all results and return as an object
    return {Line:           LinesIn,
            Key:            KeysIn,
            Correct:        CorrectOut, 
            CorrectRate:    CorrectRateOut,
            Incorrect:      IncorrectOut, 
            IncorrectRate:  IncorrectRateOut};
}

// Process time elapsed
function Get_Time_Elapse(){
    var MyTimers = [], TimeTicker = 0, i = 0;
    var IdleName, IdleTime, CircleName, CircleTime;

    // process idle and cycle time from all lines
    for (var Line of MyLines){
        // add idle operation
        i += 1;
        IdleName = "idle";
        IdleTime = Line.Time.Start - TimeTicker;
        MyTimers.push([i, IdleName, parseFloat(IdleTime.toFixed(2))]);

        // add cycle operation
        i += 1;
        CircleName = "circle" +": " + Line.name;
        CircleTime = Line.Time.Stop - Line.Time.Start;
        MyTimers.push([i, CircleName, parseFloat(CircleTime.toFixed(2))]);
        
        // update time ticker using the current line stop time
        TimeTicker = Line.Time.Stop; 
    }

    // final idle time(start&final line -> submit)
    i += 1;
    IdleName = "idle";
    IdleTime = Timer.Stop - TimeTicker;
    MyTimers.push([i, IdleName, parseFloat(IdleTime.toFixed(2))]);

    return {Time: MyTimers};

}

// Highlight connection with red & green color
function Highlight_Connection(LinesIn){
    for (var i = 0; i < LinesIn.length; i++){
        // setup line width
        LinesIn[i].graphics._strokeStyle.width = 3;

        // setup line color
        if (LinesIn[i].Correct == true){
            LinesIn[i].graphics._stroke.style = "green"
        }else{
            LinesIn[i].graphics._stroke.style = "red";
        }          
    }
    stage.update();
}

// check learning modules related to the incorrect connections
function Get_Learn_Modules(IncorrectIn){
    var ModulesOut = [];

    // get module name
    for (i = 0; i < IncorrectIn.length; i++){
        for (j = 0; j < 2; j++){
            var Module = IncorrectIn[i][j].module;
            
            // add module name
            if (!ModulesOut.includes(Module)){
                ModulesOut.push(Module);
            }    
        }
    }

    return {LearnModule: ModulesOut};
}

// hide all legends
function Hide_Legends(){
    Execute_All(Legends, false);
}

// display all legends
function Display_Legends(){
    Execute_All(Legends, true);
}

// // integrate analysis text
// function Get_Analysis_Text(NumType, CorrectType, MyPorts, MyCorrect, Precision){
//     var StringAnalysis = "<" + NumType + " connection" + ">\n" +
//                          "<" + CorrectType  + ">\n" +
//                          "My connections: " + MyPorts.length.toString() + "\n" +
//                          "My correct: "     + MyCorrect.length.toString() + "\n" +
//                          "Correct rate: "   + Precision + "%";
//     return StringAnalysis
// }

// // integrate learning modules text
// function Get_ModulesButton_Text(MyModules){
//     var StringModulesButton = "";
//     for (i = 0; i < MyModules.length; i++){
//         // assign current button text
//         StringModulesButton += (i+1).toString() + ". " + MyModules[i].name;

//         // add carrige return before the final line
//         if (i < MyModules.length - 1){
//             StringModulesButton += "\n";
//         }                                                                       
//     }
//     return StringModulesButton;
// }

// // initialize Textbox
// function Textbox_Init(MyBase, ShiftX = 0, ShiftY = 2){
//     MyBase.getBounds();
//     var MyTextbox = new createjs.Text();
//     MyTextbox.x = MyBase.x + ShiftX;
//     MyTextbox.y = MyBase.y + MyBase._rectangle.height + ShiftY;
//     MyTextbox.font  = "bold 26px 'Times New Roman'";
//     MyTextbox.maxWidth  = 300;
//     MyTextbox.lineWidth = MyTextbox.maxWidth;
//     MyTextbox.visible = false;
//     root.stage.addChild(MyTextbox);
//     root.stage.update();
//     return MyTextbox
// }

// // generate hint arrow
// function Arrow_Init(MyPts){
//     var Arrow = new createjs.Shape();
//     var ArrowLength = 20;

//     Arrow.graphics.setStrokeStyle(4);               // Set the stroke style of the shape
//     Arrow.graphics.beginStroke("#000000");          // Set the stroke color of the shape

//     // draw waypoint line
//     for (i = 0; i < MyPts.length - 1; i++){
//         Arrow.graphics.moveTo(MyPts[i][0],     MyPts[i][1]);     // Move to the point
//         Arrow.graphics.lineTo(MyPts[i + 1][0], MyPts[i + 1][1]); // Draw the line
//     }

//     // get start point and end point
//     var StartPt = MyPts[MyPts.length - 2];
//     var EndPt   = MyPts[MyPts.length - 1];

//     // Calculate the angle of the line
//     var Angle = Math.atan2(StartPt[1] - EndPt[1], EndPt[0] - StartPt[0]);

//     // Calculate the coordinates of the arrowhead lines
//     var arrow1X = EndPt[0] - ArrowLength * Math.cos(Angle + Math.PI / 6);
//     var arrow1Y = EndPt[1] - ArrowLength * Math.sin(Angle + Math.PI / 6);
//     var arrow2X = EndPt[0] - ArrowLength * Math.cos(Angle - Math.PI / 6);
//     var arrow2Y = EndPt[1] - ArrowLength * Math.sin(Angle - Math.PI / 6);
    
//     Arrow.graphics.moveTo(EndPt[0], EndPt[1]); // Move to the ending point
//     Arrow.graphics.lineTo(arrow1X, arrow1Y); // Draw the first arrowhead line
//     Arrow.graphics.moveTo(EndPt[0], EndPt[1]); // Move to the ending point again
//     Arrow.graphics.lineTo(arrow2X, arrow2Y); // Draw the second arrowhead line
    
//     // Update the stage to reflect the changes
//     Arrow.visible = false;
//     stage.addChild(Arrow);
//     stage.update();
    
//     return Arrow
// }

// 


// // display all analysis Textbox
// function Display_AnalysisText(){
//     Execute_All(MyTextboxs, true);
//     Execute_All(MyShapes, true);
// }

// // display all hints
// function Display_Hints(){
//     Execute_All(MyHints, true);
// }

// PLC and robot interface list
// Inputs
// Outputs
// PLC Input module
// PLC Output module
// Relay 
// Sensors 
// ABB Robot
// COMAU Robot
// FANUC Robot
// KUKA Robot
// OMRON Robot

// generate hint arrow
/* function Arrow_Init(StartPt, EndPt, ArrowLength){
    var Arrow = new createjs.Shape();
    
    console.log(StartPt); console.log(EndPt);
    Arrow.graphics.setStrokeStyle(2);               // Set the stroke style of the shape
    Arrow.graphics.beginStroke("#000000");          // Set the stroke color of the shape
    Arrow.graphics.moveTo(StartPt[0], StartPt[1]);  // Move to the starting point
    Arrow.graphics.lineTo(EndPt[0], EndPt[1]);      // Draw the line
    
    // Calculate the angle of the line
    var Angle = Math.atan2(StartPt[1] - EndPt[1], EndPt[0] - StartPt[0]);

    // Calculate the coordinates of the arrowhead lines
    var arrow1X = EndPt[0] - ArrowLength * Math.cos(Angle + Math.PI / 4);
    var arrow1Y = EndPt[1] - ArrowLength * Math.sin(Angle + Math.PI / 4);
    var arrow2X = EndPt[0] - ArrowLength * Math.cos(Angle - Math.PI / 4);
    var arrow2Y = EndPt[1] - ArrowLength * Math.sin(Angle - Math.PI / 4);
    
    Arrow.graphics.moveTo(EndPt[0], EndPt[1]); // Move to the ending point
    Arrow.graphics.lineTo(arrow1X, arrow1Y); // Draw the first arrowhead line
    Arrow.graphics.moveTo(EndPt[0], EndPt[1]); // Move to the ending point again
    Arrow.graphics.lineTo(arrow2X, arrow2Y); // Draw the second arrowhead line
    
    // Update the stage to reflect the changes
    stage.addChild(Arrow);
    stage.update();
    
    return Arrow
} */

    // summary table
// function Init_Summary_Table(){
//     // init the table element
//     var tbl = document.getElementById("MySummary");
//     tbl.innerHTML = "";     // reset table

//     var tblBody = document.createElement("tbody");


//     // create header
//     var row = document.createElement("tr");
//     var h1 = document.createElement("th");
//     var h2 = document.createElement("th");
//     var h3 = document.createElement("th");
//     h1.appendChild(document.createTextNode("Connection"));
//     h2.appendChild(document.createTextNode("Result"));
//     h3.appendChild(document.createTextNode("Link"));
//     row.appendChild(h1);
//     row.appendChild(h2);
//     row.appendChild(h3);

//     // add header to the table body
//     tblBody.appendChild(row);

//     // create cell
//     for (var i = 0; i < MyModules.length; i++) {
//         // initialize row
//         var row = document.createElement("tr");

//         // 1st col: connection port
//         var cell1 = document.createElement("td");
//         var cell1Text = document.createTextNode(MyModules[i].port[0].name + 
//                                                                     "<->" + 
//                                                 MyModules[i].port[1].name);
//         cell1.appendChild(cell1Text);
//         row.appendChild(cell1);

//         // 2nd col: result
//         var cell2 = document.createElement("td");
//         var cell2Text = document.createTextNode("x");
//         cell2.appendChild(cell2Text);
//         row.appendChild(cell2);

//         // 3rd col: link
//         var cell3 = document.createElement("td");
//         var link = document.createElement("a");
//         var linkText = document.createTextNode(MyModules[i].name);
//         link.appendChild(linkText);
//         link.title = MyModules[i].name;
//         link.href = AllModulesLink[MyModules[i].name];
//         cell3.appendChild(link);
//         row.appendChild(cell3);

//         // add row to the table body
//         tblBody.appendChild(row);
//     }

//     tbl.appendChild(tblBody);
    
// }

    // get hint textbox
    // StringHint         = "Click previous button to practise again";
    // MyHints[0]         = Textbox_Init(MyTextboxs[3], 0, 10);    
    // MyHints[0].text    = StringHint;
    // MyPts              = Get_Arrow_Point(MyHints[0], Button_Previous);
    // MyHints[1]         = Arrow_Init(MyPts);
   

    // setup textbox shape(statistic and learning)
    // MyShapes[0] = Textbox_Shape_Init(MyTextboxs[1]); // statistic report
    // MyShapes[1] = Textbox_Shape_Init(MyTextboxs[3]); //learning report

    // flashing learning textbox shape
    // MyTimeInterval = setInterval(ChangeColor, 1000);

    // get button link list    
    // for (i = 0; i < MyModules.length; i++){
    //     // assign current button link
    //     var MyButtonLinkX = MyTextboxs[3].x + LinkBasePos.x + LinkAdjustPos.x;
    //     var MyButtonLinkY = MyTextboxs[3].y + LinkBasePos.y + LinkAdjustPos.y * i;
    //     MyModulesButton[i] = Button_Init(MyButtonLinkX, MyButtonLinkY, MyModules[i]);
                                                                            
    // }

    // // add button link click event
    // All_Events_Init(MyModulesButton, "click", EventGoToLink);

    // display 1st button link only
    // if (MyModulesButton.length != 0){
    //     MyModulesButton[IndexButtonLink].visible = true;
    // }

        // var Table = document.getElementById("MySummary");
    // //Init_Table(Table, TableData);                                 
    // Init_Summary_Table();

    // // remove the module button
// function Remove_Modules_Button(){
//     // remove event listener
//     All_Events_Remove(MyModulesButton, "click", EventGoToLink);

//     // remove module button
//     Remove_All(MyModulesButton);
   
//     // reset module button array
//     MyModulesButton = [];
// }

// // remove textbox shape
// function Remove_Shapes(){
//     Remove_All(MyShapes);
//     MyShapes = [];
// }

// // remove textbox 
// function Remove_Textbox(){
//     Remove_All(MyTextboxs);
//     MyTextboxs = [];
// }

// // remove textbox 
// function Remove_Hints(){
//     Remove_All(MyHints);
//     MyHints = [];
// }

// // re-rank all selected module based on their priority
    // MyModules = Sort_Modules(MyModules);

    // // initialize learning report text
    // StringConnectionTitle = "Read the following content to learn each module:";

    // // get module list text 
    // if (MyModules.length != 0){
    //     StringModulesButton = Get_ModulesButton_Text(MyModules);
    // } 
    
    // // ------------------------
    // // 4. <<Report Analysis>>
    // // ------------------------
    // // integrate analysis text
    // StringAnalysisTitle = "Statistic Report:";
    // if (MyPorts != 0){
    //     StringAnalysis = Get_Analysis_Text(StringConnection, StringCorrect, 
    //                                        MyPorts, MyCorrect, MyPrecision);
    // }


    // // get and display statistic and learning textbox
    // var MyTextBox = document.getElementById("TextSummary");
    //     MyTextBox.textContent = StringAnalysisTitle + '\n' + StringAnalysis;
    // var MyTextBox2 = document.getElementById("TextSummary2");
    //     MyTextBox2.textContent = StringConnectionTitle;

    // // generate table
    // var TableData = {Header: ["Connection", "Result", "Link"],
    //                  Body:   []};
    // for (var i = 0; i < TableData.length; i++) {
    //     TableData.Body[i][0] = MyModules[i].connection;
    //     TableData.Body[i][1] = "x";
    //     TableData.Body[i][2] = MyModules[i];
    // }

    // get the arrow start and end point
// function Get_Arrow_Point(MyTextbox, MySymbol){ 
//     MyTextbox.getBounds();
//     MySymbol.getBounds();
//     MySymbol.shape.getBounds();
//     var MyPts = [];

//     // get all waypoints
//     // partial points are manually generated, optimization is needed soon!!!
//     MyPts[0] = [MyTextbox.x + MyTextbox._rectangle.width / 2, 
//                 MyTextbox.y + MyTextbox._rectangle.height];
//     MyPts[1] = [MyPts[0][0], 
//                 MySymbol.y + MySymbol.shape.y / 2];            
//     MyPts[2] = [MySymbol.x  + MySymbol.shape.x + 15, 
//                 MyPts[1][1]];

//     return MyPts
// }

// // initialize textbox shape
// function Textbox_Shape_Init(MyTextbox){
//     // draw border shape
//     var MyShape = new createjs.Shape();

//     // setup basic properties
//     MyShape.graphics.setStrokeStyle(2);      // Set the border thickness
//     MyShape.graphics.beginFill("#FAD7A0");   // Set the border color

//     // setup dimension properties
//     var BaseX = MyTextbox.x;
//     var BaseY = MyTextbox.y;
//     var MyTextboxBounds = MyTextbox.getBounds();
//     var BorderWidth     = MyTextbox.maxWidth;
//     var BorderHeight    = MyTextboxBounds.height;

//     // draw 
//     MyShape.graphics.drawRect(BaseX, BaseY, BorderWidth, BorderHeight); // Draw rectangle
    
//     // add border shape
//     MyShape.visible = false;
//     root.stage.addChild(MyShape);
//     root.stage.swapChildren(MyShape, MyTextbox);
//     root.stage.update();

//     return MyShape;
// }

// // set up and switch Bi-color
// function ChangeColor(){
//     var MyColor = "#FAD7A0";
//     var CurrentTimeSecond;

//     // use even and odd time second to determine bi-color
//     CurrentTimeSecond = new Date().getSeconds();
//     if (CurrentTimeSecond % 2 == 0){
//         MyColor = "#FAD7A0";
//     }else {
//         MyColor = "#FDEBD0";
//     }
    
//     // update color
//     MyShapes[1].graphics._fill.style = MyColor;
//     root.stage.update();

 
// }

// // Sort all selected modules baed on their priority
// function Sort_Modules(Modules){
//     var MyModulesPriority = [];
//     // get priority value
//     for (var i = 0; i < Modules.length; i++){
//         MyModulesPriority[i] = AllModulesPriority[Modules[i].name];
//     }
    
//     // sort them
//     Modules.sort(function(a, b){
//         var indexA = MyModulesPriority[Modules.indexOf(a)];
//         var indexB = MyModulesPriority[Modules.indexOf(b)];
//         return indexA - indexB;
//     })

//     return Modules
// }

// // Create new button
// function Button_Init(x, y, name){
//     // initialize a circle shape
//     var circle    = new createjs.Shape();
//     var fillColor = "#FF0000"; // Set color(Red)
//     var radius    = 5;         // Set Radius of the circle
//     circle.graphics.beginFill(fillColor).drawCircle(x, y, radius); // Draw the circle
//     circle.name   = name;

//     // initialize button
//     var MyButton = new createjs.Container();
//     MyButton.name = name;
//     MyButton.cursor = "pointer";

//     // add circle to the button
//     MyButton.addChild(circle);

//     // add and update button to the stage
//     MyButton.visible = false;
//     root.stage.addChild(MyButton);
//     root.stage.update();

//     return MyButton;
// }




// // go to weblink event function
// function EventGoToLink(e){
//     // open new window via the link
//     var link = AllModulesLink[e.currentTarget.name];
//     window.open(link,"_blank");
//     window.focus();

//     // activate the next button link
//     IndexButtonLink += 1;
//     if (IndexButtonLink < MyModulesButton.length){
//         // activate the next button link only
//         Execute_All(MyModulesButton, false);
//         MyModulesButton[IndexButtonLink].visible = true;
//     }else {
//         // activate all button link after finishing reviewing them
//         Execute_All(MyModulesButton, true);

//         // change all button link color
//         for (var i = 0; i < MyModulesButton.length; i++){
//             MyModulesButton[i].children[0].graphics._fill.style = "#00FF00";
//         }

//        // display hints
//        Display_Hints();
//     }  
// }

    
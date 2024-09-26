// initialize description page in Canvas
var stageDes;
var TB;
var AudioBarBg;
var AudioBar;
var MyAudio;
var IsAudioEnd = false;
var AudioToggle;
var SpeakerToggle;

// main
function Init_Description(CanvasRef){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;
    stageDes = new createjs.Stage(Canvas);
    stageDes.removeAllChildren();  

    // initialize modules
    ABB_Robot_Txt();
    Init_Voice();
}

function Draw_Textbox(){
    TxtBox = new createjs.Text();

    // textbox properties
    TxtBox.font         = "bold 20px Arial";
    TxtBox.color        = "#000";
    TxtBox.lineWidth    = 900;
    TxtBox.textAlign    = "left";

    stageDes.addChild(TxtBox);

    return TxtBox;
}

function ABB_Robot_Txt(){
    // textbox content
    const txtT = "Interfacing the Robot Controller Input Terminal with Input Device";

    const txt1 =    "1. The ABB Robot IRC5 Controller input terminal needs a 10 to 30 VDC power"
                    + "supply for input devices such as switches, push buttons, and sensors.";
    
    const txt2 =    "2. An external power supply is needed to power the input devices.";

    const txt3 =    "3. DI XX should be connected to the +24 VDC and the GND DI should be connected to the -24 VDC";

    const txt4 =    "4. Input devices should be placed in  the closed circuitry loop. It can be on the positive or negative sides of the loop.";

    const txt5 =    "5. If the input devices is rated for a different power supply than 24VDC, a relay should be used between the input device and the robot controller";

    const txt = [txtT, txt1, txt2, txt3, txt4, txt5];

    // textbox coordinate
    const posT = [500, 100];
    const pos1 = [50, 200];
    const pos2 = [50, 270];
    const pos3 = [50, 300];
    const pos4 = [50, 350];
    const pos5 = [50, 400];

    const pos = [posT, pos1, pos2, pos3, pos4, pos5];

    // initialization
    TB = [];

    for(var i = 0; i < txt.length; i++){
        var myTB = Draw_Textbox();
        myTB.text = txt[i];
        myTB.x = pos[i][0];
        myTB.y = pos[i][1];   

        TB.push(myTB);
    }

    // customization
    TB[0].color = "red";
    TB[0].font = "bold 30px Times New Roman";
    TB[0].textAlign = "center";

    stageDes.update();
}

function Init_Voice(){
    // generate audio
    MyAudio = new Audio("./src/assets/audio/ABB Robot-intro.mp3");
    MyAudio.controls = true;

    // generate audio progress bar background
    AudioBarBg = new createjs.Shape();
    AudioBarBg = Draw_ProgressBar_Background(AudioBarBg);
    stageDes.addChild(AudioBarBg);

    // generate audio progress bar 
    AudioBar = new createjs.Shape();
    AudioBar = Draw_ProgressBar(AudioBar);
    stageDes.addChild(AudioBar);

    // generate pause/play toggle
    AudioToggle = new createjs.Shape();
    Draw_Pause_Toggle(AudioToggle);
    stageDes.addChild(AudioToggle);

    // generate speaker toggle
    SpeakerToggle = new createjs.Shape();
    Draw_Speaker(SpeakerToggle);
    stageDes.addChild(SpeakerToggle);

    // Event listener to 
    MyAudio.addEventListener("timeupdate", Update_Bar); // update the progress bar as audio plays
    AudioToggle.addEventListener("click", Pause_Audio); // pause/play audio
    SpeakerToggle.addEventListener("click", Mute_Audio) // muted/unmuted speaker
    MyAudio.play();

    stageDes.update();
}

function Update_Bar(){
    const progress = (MyAudio.currentTime / MyAudio.duration) * 600; // Scale to canvas width
    Draw_ProgressBar(AudioBar, progress);
   
    stageDes.update();

    // check if the audio is end
    IsAudioEnd = (MyAudio.currentTime == MyAudio.duration);
  }

function Pause_Audio(){
    if (MyAudio.paused){
        Draw_Pause_Toggle(AudioToggle);
        MyAudio.play();
    }else{
        Draw_Play_Toggle(AudioToggle);
        MyAudio.pause();
    }

    stageDes.update();
}

function Mute_Audio(){
    if (MyAudio.muted){
        Draw_Speaker(SpeakerToggle)
        MyAudio.muted = false;
    }else{
        Draw_Speaker_Muted(SpeakerToggle);
        MyAudio.muted = true;
    }

    stageDes.update();
    
}

function Draw_ProgressBar_Background(MyShape){
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#d3d3d3").drawRect(200, 800, 600, 20);

    return MyShape;
}

function Draw_ProgressBar(MyShape, MyProgress){
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#4caf50").drawRect(200, 800, MyProgress, 20);

    return MyShape;
}

function Draw_Play_Toggle(MyShape){
    MyShape.graphics.clear();
    
    MyShape.graphics.beginFill("#FFFFFF"); // while color
    MyShape.graphics.drawRect(160, 800, 15, 20); // background

    MyShape.graphics.beginFill("#008000"); // Green color
    MyShape.graphics.moveTo(160, 800);
    MyShape.graphics.lineTo(175, 810);
    MyShape.graphics.lineTo(160, 820);
    MyShape.graphics.lineTo(160, 800); // Close the triangle

    MyShape.graphics.endFill();

    return MyShape;
}

function Draw_Pause_Toggle(MyShape){
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#FFFFFF"); // while color
    MyShape.graphics.drawRect(160, 800, 20, 20); // background

    MyShape.graphics.beginFill("#000000"); // black color
    MyShape.graphics.drawRect(160, 800, 5, 20); // Left rectangle
    MyShape.graphics.drawRect(170, 800, 5, 20); // Right rectangle

    MyShape.graphics.endFill();

    return MyShape;
}

function Draw_Speaker(MyShape){
    MyShape.graphics.clear();

    // set size
    var Point = [820, 800];
    const PointStroke = [[15,0], [10,-10], [0, 40], [-10,-10], [-15,0]];
    Draw_Speaker_Shape(MyShape, Point, PointStroke);

    return MyShape;
}

function Draw_Speaker_Muted(MyShape){
    MyShape.graphics.clear();

    // draw speaker
    var Point = [820, 800];
    const PointStroke = [[15,0], [10,-10], [0, 40], [-10,-10], [-15,0]];
    Draw_Speaker_Shape(MyShape, Point, PointStroke);


    // draw muted line
    const PointM0 = [820, 790];
    const PointM1 = [845, 830];
    Draw_Speaker_Muted_Line(MyShape, PointM0, PointM1);

    return MyShape;
}

function Draw_Speaker_Shape(MyShape, Point, WayPoints){
    const ColorSpeaker = "#2196f3";
    MyShape.graphics.beginFill(ColorSpeaker); // Blue color

    MyShape.graphics.moveTo(Point[0], Point[1]);
    for(var i = 0; i < WayPoints.length; i++){
        Point[0] += WayPoints[i][0];
        Point[1] += WayPoints[i][1];
        MyShape.graphics.lineTo(Point[0], Point[1]);
    }

    MyShape.graphics.closePath();
    MyShape.graphics.endFill();

    return MyShape;
}

function Draw_Speaker_Muted_Line(MyShape, Point1, Point2){
    const ColorMuted = "#000000";
    MyShape.graphics.setStrokeStyle(5).beginStroke(ColorMuted);
    MyShape.graphics.moveTo(Point1[0], Point1[1]);
    MyShape.graphics.lineTo(Point2[0], Point2[1]);
    MyShape.graphics.endStroke();

    return MyShape;
}
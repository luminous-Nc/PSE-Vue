import { Dict_Func_Txt, DictTitleTxt, DictContentTxt } from '../properties/Properties_Description.js';
import { TxtTPage, TxtCPage, AudPage } from '../properties/Properties_Page.js';
import { useStudentStore } from "@/stores/student.js";
import { AudioFolder, DictAudio } from '../properties/Properties_Audio.js';
import { errorMessages } from 'vue/compiler-sfc';

export { Init_Description, Next_Step_Stop_Audio };

// initialize description page in Canvas
var AudioBarBg;
var AudioBar;
var MyAudio;
var IsAudioEnd = false;
var AudioToggle;
var SpeakerToggle;
var Name;

// main
function Init_Description() {
    // initialize modules
    stage.removeAllChildren();

    Name = PName;

    // initialize textbox
    Init_Textbox();

    // initialize audio player
    Init_Voice();
}

function Init_Textbox() {
    if (TxtTPage.hasOwnProperty(Name)){
        // init main title page
        Init_Title_Txt(TxtTPage[Name]);

    }else if(TxtCPage.hasOwnProperty(Name)){
        // init introduction page
        Init_Content_Txt(TxtCPage[Name]);
    }else{
        console.error("undefined text");
    }

    stage.update();
}

function Init_Title_Txt(Name){
    // initialize generate textbox(default properties)
    var TxtBxT = Init_TxTBx();

    // set properties
    TxtBxT.color    = "red";
    TxtBxT.font     = "bold 70px Arial";
    TxtBxT.x        = 300;
    TxtBxT.y        = 300;
    TxtBxT.text     = DictTitleTxt["Name"];

    stage.addChild(TxtBxT);
}

function Init_Content_Txt(Name){
    // check if the page has content or not
    if (!DictContentTxt.hasOwnProperty(Name)){ 
        return
    }

    // get the current content text dictionary
    const ContentTxt = DictContentTxt[Name];

    // init title
    if (ContentTxt.hasOwnProperty("Title")){
        // get the current title content
        const TTxt  = ContentTxt["Title"];

        // set up title textbox
        var TxtBxT        = Init_TxTBx();
        TxtBxT.color      = "#7A0000FF";
        TxtBxT.font       = "bold 30px Times New Roman";
        TxtBxT.lineWidth  = 900;
        TxtBxT.x          = 50;
        TxtBxT.y          = 100;
        TxtBxT.text       = TTxt;

        stage.addChild(TxtBxT);
    }

    // init subtitle
    if (ContentTxt.hasOwnProperty("SubTitle")){
        // get the current subtitle content
        const STTxt  = ContentTxt["SubTitle"];

        // set up subtitle textbox
        var TxtBxST        = Init_TxTBx();
        TxtBxST.color      = "#7A0000FF";
        TxtBxST.font       = "bold 30px Times New Roman";
        TxtBxST.lineWidth  = 900;
        TxtBxST.x          = 50;
        TxtBxST.y          = 180;
        TxtBxST.text       = STTxt;

        stage.addChild(TxtBxST);
    }

    // init content
    if (ContentTxt.hasOwnProperty("List")){
        // get the current content array
        const CTxt  = ContentTxt["List"];

        // init each content
        const TxtBxCTX      = 50
        var   TxtBxCTY      = 210;
        const TxtBxCTYAdd   = 20;

        for(var i = 0; i < CTxt.length; i++){
            // init each sub content textbox
            var TxtBxCT        = Init_TxTBx();
            TxtBxCT.color      = "#000";
            TxtBxCT.font       = "20px Arial";
            TxtBxCT.lineWidth  = 900;

            // set text and position
            TxtBxCT.x          = TxtBxCTX;
            TxtBxCT.y          = TxtBxCTY;
            TxtBxCT.text       = CTxt[i];

            stage.addChild(TxtBxCT);

            // update Y position to display the next sub content
            TxtBxCTY += TxtBxCT.getBounds().height + TxtBxCTYAdd;
        }

    }

}

function Init_TxTBx(){
    // title1
    var TxTBx        = new createjs.Text();
    TxTBx.text       = "N/A";
    TxTBx.lineWidth  = 900;
    TxTBx.color      = "#000";
    TxTBx.textAlign  = "left";

    return TxTBx;
}

function Init_Voice() {

    // check if the page has audio or not
    if (!AudPage.hasOwnProperty(Name)){ 
        return
    }

    // check if the audio exist
    const AudioFile = DictAudio[AudPage[Name]];       
    if (AudioFile === "" || AudioFile == null) {   
        console.error("undefined voice");
        return
    }
    
    // generate audio
    if (MyAudio !== undefined || AudioToggle !== undefined || SpeakerToggle !== undefined) {
        MyAudio.removeEventListener("timeupdate", Update_Bar);
        AudioToggle.removeEventListener("click", Pause_Audio)
        SpeakerToggle.removeEventListener("click", Mute_Audio)
    }

    const Path = AudioFolder + AudioFile;
    MyAudio = new Audio(Path);
    MyAudio.controls = true;

    // generate audio progress bar background
    AudioBarBg = new createjs.Shape();
    AudioBarBg = Draw_ProgressBar_Background(AudioBarBg);
    stage.addChild(AudioBarBg);

    // generate audio progress bar
    AudioBar = new createjs.Shape();
    AudioBar = Draw_ProgressBar(AudioBar);
    stage.addChild(AudioBar);

    // generate play/pause toggle
    AudioToggle = new createjs.Shape();
    Draw_Pause_Toggle(AudioToggle);
    stage.addChild(AudioToggle);

    // generate speaker toggle
    SpeakerToggle = new createjs.Shape();
    Draw_Speaker(SpeakerToggle);
    stage.addChild(SpeakerToggle);


    MyAudio.addEventListener("timeupdate", Update_Bar); // update the progress bar as audio plays

    // Event listener to
    AudioToggle.addEventListener("click", Pause_Audio); // pause/play audio
    SpeakerToggle.addEventListener("click", Mute_Audio) // muted/unmuted speaker

    // MyAudio.play();

    stage.update();
}

function Next_Step_Stop_Audio() {
    if (MyAudio) {
        MyAudio.pause();  // Stop the audio
        MyAudio.currentTime = 0;  // Reset the audio to the beginning

        // Remove the 'timeupdate' event listener
        MyAudio.removeEventListener("timeupdate", Update_Bar);

        // Optionally, clear the progress bar and reset visuals
        Draw_ProgressBar(AudioBar, 0);
        Draw_Play_Toggle(AudioToggle); // Switch to the play button visuals

        stage.update();
    }
}

function Update_Bar() {
    const progress = (MyAudio.currentTime / MyAudio.duration) * 600; // Scale to canvas width
    Draw_ProgressBar(AudioBar, progress);

    stage.update();

    const studentStore = useStudentStore();

    // check if the audio is end
    let threshold = 0.2
    if (studentStore.repeatMode) {
        threshold = 0
    }

    IsAudioEnd = (MyAudio.currentTime == MyAudio.duration);

    let IsAudioHalf = (MyAudio.currentTime >= threshold * MyAudio.duration)
    if (IsAudioHalf) {
        studentStore.finishCurrentStep()
    }
}

function Pause_Audio() {
    if (MyAudio.paused) {
        Draw_Pause_Toggle(AudioToggle);
        MyAudio.play();
    } else {
        Draw_Play_Toggle(AudioToggle);
        MyAudio.pause();
    }

    stage.update();
}

function Mute_Audio() {
    if (MyAudio.muted) {
        Draw_Speaker(SpeakerToggle)
        MyAudio.muted = false;
    } else {
        Draw_Speaker_Muted(SpeakerToggle);
        MyAudio.muted = true;
    }

    stage.update();

}

function Draw_ProgressBar_Background(MyShape) {
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#d3d3d3").drawRect(200, 800, 600, 20);

    return MyShape;
}

function Draw_ProgressBar(MyShape, MyProgress) {
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#4caf50").drawRect(200, 800, MyProgress, 20);

    return MyShape;
}

function Draw_Play_Toggle(MyShape) {
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

function Draw_Pause_Toggle(MyShape) {
    MyShape.graphics.clear();

    MyShape.graphics.beginFill("#FFFFFF"); // while color
    MyShape.graphics.drawRect(160, 800, 20, 20); // background

    MyShape.graphics.beginFill("#000000"); // black color
    MyShape.graphics.drawRect(160, 800, 5, 20); // Left rectangle
    MyShape.graphics.drawRect(170, 800, 5, 20); // Right rectangle

    MyShape.graphics.endFill();

    return MyShape;
}

function Draw_Speaker(MyShape) {
    MyShape.graphics.clear();

    // set size
    var Point = [820, 800];
    const PointStroke = [[15, 0], [10, -10], [0, 40], [-10, -10], [-15, 0]];
    Draw_Speaker_Shape(MyShape, Point, PointStroke);

    return MyShape;
}

function Draw_Speaker_Muted(MyShape) {
    MyShape.graphics.clear();

    // draw speaker
    var Point = [820, 800];
    const PointStroke = [[15, 0], [10, -10], [0, 40], [-10, -10], [-15, 0]];
    Draw_Speaker_Shape(MyShape, Point, PointStroke);


    // draw muted line
    const PointM0 = [820, 790];
    const PointM1 = [845, 830];
    Draw_Speaker_Muted_Line(MyShape, PointM0, PointM1);

    return MyShape;
}

function Draw_Speaker_Shape(MyShape, Point, WayPoints) {
    const ColorSpeaker = "#2196f3";
    MyShape.graphics.beginFill(ColorSpeaker); // Blue color

    MyShape.graphics.moveTo(Point[0], Point[1]);
    for (var i = 0; i < WayPoints.length; i++) {
        Point[0] += WayPoints[i][0];
        Point[1] += WayPoints[i][1];
        MyShape.graphics.lineTo(Point[0], Point[1]);
    }

    MyShape.graphics.closePath();
    MyShape.graphics.endFill();

    return MyShape;
}

function Draw_Speaker_Muted_Line(MyShape, Point1, Point2) {
    const ColorMuted = "#000000";
    MyShape.graphics.setStrokeStyle(5).beginStroke(ColorMuted);
    MyShape.graphics.moveTo(Point1[0], Point1[1]);
    MyShape.graphics.lineTo(Point2[0], Point2[1]);
    MyShape.graphics.endStroke();

    return MyShape;
}

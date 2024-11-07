import {Dict_Func_Txt, Dict_Audio} from '../text/Properties_Description.js';
import {useStudentStore} from "@/stores/student.js";

// initialize description page in Canvas
var AudioBarBg;
var AudioBar;
var MyAudio;
var IsAudioEnd = false;
var AudioToggle;
var SpeakerToggle;

// main
export function Init_Description() {
    // initialize modules
    stage.removeAllChildren();
    Init_Textbox();
    Init_Voice(Dict_Audio[PName]);
}


function Init_Textbox() {
    Dict_Func_Txt[PName]();
    stage.update();
}

function Init_Voice(AudioFile) {
    console.error(MyAudio)
    console.error(AudioToggle)
    // generate audio
    if (AudioFile === "" || AudioFile == null) {
        return
    }
    ;
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

    MyAudio.play();

    stage.update();
}

export function Next_Step_Stop_Audio() {
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

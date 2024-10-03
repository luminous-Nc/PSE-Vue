// display Canvas
import { Init_Description } from "./Canvas_Description.js";
import { Init_Test } from "./Canvas_Test.js";
import { DePage, STPage } from "./Properties_Page.js";

// main
export function Init_Canvas(CanvasRef, repeatMode){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;

    ReEnterFlag = repeatMode

    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();
    stage.removeAllEventListeners();
    stage.enableMouseOver();



    // initialization
    switch(true){
        case DePage.includes(PName):
            Init_Description();
            break;
        case STPage.hasOwnProperty(PName):
            PName = STPage[PName] // map customed test
            Init_Test();
            break;
    }
}

export function Destroy_Canvas(){
    stage.enableMouseOver(-1);
    stage.enableDOMEvents(false);
    stage.removeAllEventListeners();
    stage.removeAllChildren();
    stage.canvas = null;
    stage = null;
}
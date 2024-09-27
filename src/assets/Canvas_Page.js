// display Canvas
import { Init_Description } from "./Canvas_Description.js";
import { Init_Test } from "./Canvas_Test.js";
import { DePage, STPage } from "./Properties_Page.js";

// main
export function Init_Canvas(CanvasRef, studentStore){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;
    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();
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
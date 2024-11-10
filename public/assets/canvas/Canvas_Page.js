// display Canvas
import { Init_Description } from "./Canvas_Description.js";
import { Init_Test } from "./Canvas_Test.js";
import { DePage, STPage } from "../properties/Properties_Page.js";

export { Init_Canvas, Destroy_Canvas, Set_PageID, stage, PageID };

var stage;
var PageID;

// main
function Init_Canvas(CanvasRef){
    // generate canvas and stage
    if (!CanvasRef.value) return;
    const Canvas = CanvasRef.value;

    stage = new createjs.Stage(Canvas);
    stage.removeAllChildren();
    stage.removeAllEventListeners();
    stage.enableMouseOver();



    // initialization
    switch(true){
        case DePage.includes(PageID):
            Init_Description();
            break;
        case STPage.hasOwnProperty(PageID):
            Init_Test();
            break;
    }
}

function Destroy_Canvas(){
    stage.enableMouseOver(-1);
    stage.enableDOMEvents(false);
    stage.removeAllEventListeners();
    stage.removeAllChildren();
    stage.canvas = null;
    stage = null;
}

function Set_PageID(NewID){
    PageID = NewID;
}
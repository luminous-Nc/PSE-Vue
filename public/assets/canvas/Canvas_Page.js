// display Canvas
import { Init_Description } from "./Canvas_Description.js";
import { Init_Test } from "./Canvas_Test.js";
import { Init_WireDemo,Init_Test_For_Debug} from "./Canvas_Test.js"
import {Init_Design, Init_Design_For_Debug} from "./Canvas_Design_Test.js";
import { DePage, STPage, WireDemoPage } from "../properties/Properties_Page.js";

export { Init_Canvas, Destroy_Canvas, Init_Canvas_For_Debug,
         Set_Page_ID, Set_Page_Name, stage, PageID, PageName };

let stage;
let PageID;
let PageName;

// main
function Init_Canvas(CanvasRef){
    try {
        // console.log(CanvasRef.value)
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
                // Init_Design();
                break;
            case WireDemoPage.hasOwnProperty(PageID):
                Init_WireDemo();
                break;

        }
    } catch (exception) {
        console.error(exception)
    }

}

function Init_Canvas_For_Debug(CanvasRef,TargetPName){
    try {
        // generate canvas and stage
        if (!CanvasRef.value) return;
        const Canvas = CanvasRef.value;

        stage = new createjs.Stage(Canvas);
        stage.removeAllChildren();
        stage.removeAllEventListeners();
        stage.enableMouseOver();

        Init_Test_For_Debug(TargetPName)
        // Init_Design_For_Debug(TargetPName);

    } catch (exception) {
        console.error(exception)
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

function Set_Page_ID(NewID){
    PageID = NewID;
}

function Set_Page_Name(NewName){
    PageName = NewName;
}

// display practice connection page on Canvas
import {STPage} from "../properties/Properties_Page.js";
import {DictModule} from "../properties/Properties_Task.js"
import {PortPos, OtherPos} from "../properties/Properties_Position.js"
import {DictMsg} from "../properties/Properties_Message.js"
import {ObjRndPool, ObjRndPoolName} from "../properties/Properties_Random_Port_Pool.js";
import {Init_Practice} from "../test/Connection.js"
import {stage, PageID} from "./Canvas_Page.js";
import {DictImg} from "./Canvas_Image.js";
import {PortSize, IsObstacleOn} from "../properties/Properties_Connection.js";
// import { stage } from "./Canvas_Page.js";

var PName;
var Obstacles = [];  // all specific obstacle points
var ImgLegend;

var Modules = {};

var OffSet = {};

export {PName, Obstacles, ImgLegend, Init_Design, Init_Design_For_Debug, getModulePositions};

// main
function Init_Design() {
    stage.removeAllChildren();

    // initialization 
    PName = STPage[PageID] // map customed test
    Init_Object();
    Draw_Modules();
    Draw_Legend();

    window.addEventListener("keydown", Manage_Design);
}

function Init_Design_For_Debug(targetPname) {
    stage.removeAllChildren();

    // initialization
    PName = targetPname // map customed test
    Init_Object();
    Draw_Modules();
    Draw_Legend();

    window.addEventListener("keydown", Manage_Design);
}

// assign all ports' coordinate set to each object
function Init_Object() {
    // get current module and port
    Modules = {...DictModule[PName]};
    delete Modules["Key"]
}

function Draw_Modules() {
    Obstacles = [];

    for (const ModuleName in Modules) {
        // initialize image
        var Btmp = new createjs.Bitmap(DictImg[ModuleName]);
        Btmp.name = ModuleName;
        Btmp.x = Modules[ModuleName].x; // Center horizontally
        Btmp.y = Modules[ModuleName].y; // Center vertically

        // resize the image if applicable
        const Scale = Get_Img_Scale(ModuleName)
        Btmp.scaleX = Scale;
        Btmp.scaleY = Scale;
        Btmp.bound = {
            "width": Btmp.image.width * Scale,
            "height": Btmp.image.height * Scale
        };

        // integrate the image
        // Modules[ModuleName].img = Btmp;
        stage.addChild(Btmp);

        // draw image bound(obstacle)
        const Bound = Get_Img_Bound(ModuleName);
        var Obstacle = Init_Rec_Obstacle(Btmp, Bound, Scale);
        Obstacle.obj = Draw_Closed_Shape(Obstacle.Port);
        Obstacle.obj.visible = IsObstacleOn; // display the obstacle?
        Obstacles.push(Obstacle);
        stage.addChild(Obstacle.obj);

        // set drag event
        Btmp.addEventListener("mousedown", Init_Drag);
        Btmp.addEventListener("pressmove", Run_Drag);

    }

    stage.update();
}


function Get_Img_Scale(ModuleName) {
    // get module
    const Module = Modules[ModuleName];
    if (Module.hasOwnProperty("Scale")) {
        return Module["Scale"];
    } else {
        return 1;
    }
}

function Get_Img_Bound(ModuleName) {
    // check if the module port position has been generated
    if (!PortPos.hasOwnProperty(ModuleName)) {
        console.error(`${ModuleName} port does not exist!`)
        return {wl: 0, wr: 0, hu: 0, hd: 0};
    }

    // check if the module port has "bound"
    const ModulePos = PortPos[ModuleName];
    if (!ModulePos.hasOwnProperty("Bound")) {
        // console.error(`${ModuleName} bound does not exist!`)
        return {wl: 0, wr: 0, hu: 0, hd: 0};
    }

    return ModulePos["Bound"];

}

function Init_Rec_Obstacle(Img, b, s) {
    // buffer expand to the object
    const BufH = 5;  // horizontal
    const BufV = 10; // vertical

    const x = Img.x;
    const y = Img.y;
    const w = Img.bound.width;
    const h = Img.bound.height;

    var Obstacle = {};

    Obstacle.name = Img.name;

    Obstacle.Port = [{
        x: x - BufH * s + b.wl * s,
        y: y - BufV * s + b.hu * s
    },      // left up
        {
            x: x + w + BufH * s - b.wr * s,
            y: y - BufV * s + b.hu * s
        },      // right up
        {
            x: x + w + BufH * s - b.wr * s,
            y: y + h + BufV * s - b.hd * s
        },  // right down
        {
            x: x - BufH * s + b.wl * s,
            y: y + h + BufV * s - b.hd * s
        }]; // left down

    return Obstacle;
}

function Draw_Closed_Shape(Points) {
    var Shape = new createjs.Shape();
    Shape.graphics.setStrokeStyle(2); 	   // Line thickness
    Shape.graphics.setStrokeDash([10, 5]); // dash point
    Shape.graphics.beginStroke("#000000");  // color

    // start to draw waypoint line
    for (var i = 0; i < Points.length - 1; i++) {
        // current draw start point
        Shape.graphics.moveTo(Points[i].x, Points[i].y);

        // current draw end point
        Shape.graphics.lineTo(Points[i + 1].x, Points[i + 1].y);
    }

    // last draw to close the shape
    Shape.graphics.moveTo(Points[Points.length - 1].x,
        Points[Points.length - 1].y);
    Shape.graphics.lineTo(Points[0].x, Points[0].y);

    return Shape;
}

function Draw_Legend() {
    var key = "Legend";
    var Btmp = new createjs.Bitmap(DictImg[key]);
    Btmp.name = key;
    Btmp.x = OtherPos[key].x; // Center horizontally
    Btmp.y = OtherPos[key].y; // Center vertically
    Btmp.visible = true;

    ImgLegend = Btmp;
    stage.addChild(ImgLegend);
    stage.update();

}

// drag picture event
function Init_Drag(e) {
    // get initial mouse drag position
    OffSet.x = e.stageX - e.target.x;
    OffSet.y = e.stageY - e.target.y;
}

function Run_Drag(e) {
    // get current mouse drag position
    const MouseX = e.stageX;
    const MouseY = e.stageY;

    // update image drag position
    e.target.x = Math.round(MouseX - OffSet.x);
    e.target.y = Math.round(MouseY - OffSet.y);
    Update_Design(e.target)

    stage.update();
}

// manage distribution position
function Manage_Design(e) {
    Show_Design(e);
    // Save_Design(Modules);
}

function Update_Design(target) {
    const Name = target.name;
    Modules[Name].x = target.x;
    Modules[Name].y = target.y;
}

function Show_Design(e) {
    console.clear();
    if (e.key == "Control") {
        for (const ModuleName in Modules) {
            const Name = ModuleName;
            const x = Modules[ModuleName].x;
            const y = Modules[ModuleName].y;
            const Str = `${Name}\tx:${x},\ty:${y}`;
            console.log(Str);
        }
    }
}

function getModulePositions(e) {
    let output = []
    for (const ModuleName in Modules) {
        const x = Modules[ModuleName].x
        const y = Modules[ModuleName].y
        output.push(`${ModuleName}\t${x}\t${y}`) // 使用制表符分隔
    }
    return output.join('\n')
}

function Save_Design(VarIn) {

    // get JS syntax content
    const SavedVarJs = `${PName} = ${Format_Object(VarIn, 8)};`;
    // const SavedVarJs = `const ${PName} = ${JSON.stringify(VarIn, null, 2)};`;

    // create a Blob with the JS content
    const blob = new Blob([SavedVarJs], {type: 'application/javascript'});

    // create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Properties_Design.js'; // file name

    // simulate click to download the file
    link.click();
}

// Format the object as a string with custom formatting
function Format_Object(obj, indent = 4) {
    const spaces = ' '.repeat(indent);
    if (Array.isArray(obj)) {
        const items = obj
            .map(item => Format_Object(item, indent + 4))
            .join(',\n' + spaces);
        return `[\n${spaces}${items}\n${' '.repeat(indent - 4)}]`;
    } else if (typeof obj === 'object' && obj !== null) {
        const entries = Object.entries(obj)
            .map(([key, value]) => `${spaces}${key}: ${Format_Object(value, indent + 4)}`)
            .join(',\n');
        return `{\n${entries}\n${' '.repeat(indent - 4)}}`;
    } else if (typeof obj === 'string') {
        return `"${obj}"`;
    }
    return obj;
};


export var Dict_Txt = {
                        "1-1": Intro_Txt,
                        "2-1": PLC_Txt1,
                        "2-2": PLC_Txt2,
                        "3-1": ABB_Robot_Txt1,
                        "3-2": ABB_Robot_Txt2,
                        "4-1": PLC_and_ABB_Robot_Txt1,
                        "4-2": PLC_and_ABB_Robot_Txt2,
};

export var Dict_Audio = {
                            "1-1": null,
                            "2-1": null,
                            "2-2": "ob8 intro.mp3",
                            "3-1": null,
                            "3-2": "ABB Robot-intro.mp3",
                            "4-1": null,
                            "4-2": "Interfacingg the PLC output module ABB Robot.mp3"
                        };

export const AudioFolder = "./src/assets/audio/";

function Title_Txt(){
    var myTxt = {};

    myTxt.text       = "N/A"; 
    myTxt.font       = "bold 50px Arial";
    myTxt.x          = 200;
    myTxt.y          = 300;
    myTxt.lineWidth  = 900;
    myTxt.color      = "#7A0000FF";
    myTxt.textAlign  = "left";

    return myTxt;
}

function Intro_Txt(){
    var IntroTxt = Title_Txt();
    IntroTxt.text = "ASI Tutor";
    IntroTxt.font = "bold 70px Arial";
    IntroTxt.x = 300;
    IntroTxt.y = 300;
    return [IntroTxt];
}

function PLC_Txt1(){
    var PLCTxt1 = Title_Txt();
    PLCTxt1.text = "PLC - I/O Interface";
    PLCTxt1.x = 300;
    PLCTxt1.y = 300;
    return [PLCTxt1];
}

function PLC_Txt2(){
    // set textbox content
    const txtT =   "In this lesson, you will practice interfacing I/O modules with a switch and battery";
    
    const txtST =   "(IB16 input module)";

    const txt1 =    "\u2022 Need a power supply of a 10 to 30 VDC power supply for the input devices such as switch, push button, or sensors";
    
    const txt2 =    "\u2022 Input device, power supply(PS), and module forms a close-loop circuitry";    

    const txt3 =    "\u2022 IN-X should be connected to the positive side of the circuiry and GND-0 should be connected to the negative side of the circuitry";
    
    const txt4 =    "\u2022 Input devices should be placed in the circuitry loop, it can be on the positive side or negative side of the loop";
    

    // set textbox coordinate
    const posT  = [50, 100]; // title
    const posST = [50, 180]; // sub title
    const posC  = [50, 210]; // content start position

    // integrate all texbotx
    var TxtOut = [];

    // title
    var myTxt = {};
    myTxt.text       = txtT;
    myTxt.color      = "red";
    myTxt.font       = "bold 30px Times New Roman";
    myTxt.x          = posT[0];
    myTxt.y          = posT[1];
    myTxt.textAlign  = "center";
    myTxt.lineWidth  = 900;
    myTxt.color      = "#000";
    myTxt.textAlign  = "left";

    TxtOut.push(myTxt);

    // sub title
    var myTxt = {};
    myTxt.text       = txtST;
    myTxt.color      = "red";
    myTxt.font       = "bold 20px Times New Roman";
    myTxt.x          = posST[0];
    myTxt.y          = posST[1];
    myTxt.textAlign  = "center";
    myTxt.lineWidth  = 900;
    myTxt.color      = "#000";
    myTxt.textAlign  = "left";

    TxtOut.push(myTxt);

    // contents
    const txt = [txt1, txt2, txt3, txt4];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 80;

    for(var i = 0; i < txt.length; i++){
        myTxt = {};
        
        myTxt.text       = txt[i];
        myTxt.x          = posX;
        myTxt.y          = posY;  
        myTxt.font       = "20px Arial";
        myTxt.lineWidth  = 900;
        myTxt.color      = "#000";
        myTxt.textAlign  = "left";

        posY += posYAdd;
        TxtOut.push(myTxt);
    }

    return TxtOut;
}

function ABB_Robot_Txt1(){
    var ABBRobotTxt1 = Title_Txt();
    ABBRobotTxt1.text = "ABB Robot - I/O Interface";
    ABBRobotTxt1.x    = 200;
    ABBRobotTxt1.y    = 300;
    return [ABBRobotTxt1];
}

function ABB_Robot_Txt2(){
    // set textbox content
    const txtT =    "Interfacing the Robot Controller Input Terminal with Input Device";

    const txt1 =    "1. The ABB Robot IRC5 Controller input terminal needs a 10 to 30 VDC power"
                    + "supply for input devices such as switches, push buttons, and sensors.";
    
    const txt2 =    "2. An external power supply is needed to power the input devices.";

    const txt3 =    "3. DI XX should be connected to the +24 VDC and the GND DI should be connected to the -24 VDC";

    const txt4 =    "4. Input devices should be placed in  the closed circuitry loop. It can be on the positive or negative sides of the loop.";

    const txt5 =    "5. If the input devices is rated for a different power supply than 24VDC, a relay should be used between the input device and the robot controller";

    // set textbox coordinate
    const posT = [50, 100]; // title
    const posC = [50, 200]; // content start position

    // integrate all texbotx
    var TxtOut = [];

    // title
    var myTxt = {};
    myTxt.text       = txtT;
    myTxt.color      = "red";
    myTxt.font       = "bold 30px Times New Roman";
    myTxt.x          = posT[0];
    myTxt.y          = posT[1];
    myTxt.textAlign  = "center";
    myTxt.lineWidth  = 900;
    myTxt.color      = "#000";
    myTxt.textAlign  = "left";

    TxtOut.push(myTxt);

    // contents
    const txt = [txt1, txt2, txt3, txt4, txt5];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 80;

    for(var i = 0; i < txt.length; i++){
        myTxt = {};
        
        myTxt.text       = txt[i];
        myTxt.x          = posX;
        myTxt.y          = posY;  
        myTxt.font       = "20px Arial";
        myTxt.lineWidth  = 900;
        myTxt.color      = "#000";
        myTxt.textAlign  = "left";

        posY += posYAdd;
        TxtOut.push(myTxt);
    }

    return TxtOut;
}

function PLC_and_ABB_Robot_Txt1(){
    var PLCABBTxt1 = Title_Txt();
    PLCABBTxt1.text = "ABB Robot - PLC I/O Modules Interface";
    PLCABBTxt1.x    = 150;
    PLCABBTxt1.y    = 300;
    return [PLCABBTxt1];
}

function PLC_and_ABB_Robot_Txt2(){
    // set textbox content
    const txtT =    "Interfacing the PLC Input Module(1756 IB16) with the Robot Controller Scalable I/O Module";

    const txt1 =    "1. The PLC input module operates on a 10 to 30 VDC power supply. Also, the robot controller"
                    + " scalable I/O module needs a 24V power supply to communicate with PLC."
    
    const txt2 =    "2. So, an external power supply is needed with PLC input module and robot controller scalable I/O module.";

    const txt3 =    "3. The robot controller scalable I/O module and PLC input module form a closed-loop circuit.";

    const txt4 =    "4. IN-X(0-7) of the PLC input module should be connected to the DO XX(01-16) of the robot controller"
                    + "scalable I/O module, and GND-0 should be connected to the negative side of the power supply.";

    const txt5 =    "5. PWR DO terminal of the scalable I/O module should be connected to the positive side of the"
                    + "power supply. GND DO should be connected to the negative side of the power supply.";

    // set textbox coordinate
    const posT = [50, 100]; // title
    const posC = [50, 200]; // content start position

    // integrate all texbotx
    var TxtOut = [];

    // title
    var myTxt = {};
    myTxt.text       = txtT;
    myTxt.color      = "red";
    myTxt.font       = "bold 30px Times New Roman";
    myTxt.x          = posT[0];
    myTxt.y          = posT[1];
    myTxt.textAlign  = "center";
    myTxt.lineWidth  = 900;
    myTxt.color      = "#000";
    myTxt.textAlign  = "left";

    TxtOut.push(myTxt);

    // contents
    const txt = [txt1, txt2, txt3, txt4, txt5];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 80;

    for(var i = 0; i < txt.length; i++){
        myTxt = {};
        
        myTxt.text       = txt[i];
        myTxt.x          = posX;
        myTxt.y          = posY;  
        myTxt.font       = "20px Arial";
        myTxt.lineWidth  = 900;
        myTxt.color      = "#000";
        myTxt.textAlign  = "left";

        posY += posYAdd;
        TxtOut.push(myTxt);
    }

    return TxtOut;
}

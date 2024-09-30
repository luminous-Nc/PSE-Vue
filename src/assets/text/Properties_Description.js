
export var Dict_Func_Txt = {
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

function Init_Title1(){
    // title1
    var TxtT        = new createjs.Text();
    TxtT.text       = "N/A";
    TxtT.color      = "red";
    TxtT.font       = "bold 70px Arial";
    TxtT.lineWidth  = 900;
    TxtT.color      = "#000";
    TxtT.textAlign  = "left";

    return TxtT;
}

function Init_Title2(){
    // title2
    var TxtT        = new createjs.Text();
    TxtT.text       = "N/A";
    TxtT.color      = "#7A0000FF";
    TxtT.font       = "bold 30px Times New Roman";
    TxtT.lineWidth  = 900;
    TxtT.color      = "#000";
    TxtT.textAlign  = "left";

    return TxtT;
}

function Init_SubTitle(){
    // subtitle
    var TxtST        = new createjs.Text();
    TxtST.text       = "N/A";
    TxtST.color      = "#7A0000FF";
    TxtST.font       = "bold 20px Times New Roman";
    TxtST.lineWidth  = 900;
    TxtST.color      = "#000";
    TxtST.textAlign  = "left";

    return TxtST;
}

function Init_Content(){
    // subtitle
    var TxtC        = new createjs.Text();
    TxtC.text       = "N/A";
    TxtC.color      = "#7A0000FF";
    TxtC.font       = "20px Arial";
    TxtC.lineWidth  = 900;
    TxtC.color      = "#000";
    TxtC.textAlign  = "left";

    return TxtC;
}

function Intro_Txt(){
    var IntroTxt  = Init_Title1();
    IntroTxt.text = "ASI Tutor";
    IntroTxt.font = "bold 70px Arial";
    IntroTxt.x = 300;
    IntroTxt.y = 300;

    stage.addChild(IntroTxt);
}

function PLC_Txt1(){
    var PLCTxt1  = Init_Title1();
    PLCTxt1.text = "PLC - I/O Interface";
    PLCTxt1.x    = 300;
    PLCTxt1.y    = 300;

    stage.addChild(PLCTxt1);
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

    // title
    var TxtT        = Init_Title2();
    TxtT.text       = txtT;
    TxtT.x          = posT[0];
    TxtT.y          = posT[1];

    stage.addChild(TxtT);

    // sub title
    var TxtST        = Init_SubTitle();
    TxtST.text       = txtST;
    TxtST.x          = posST[0];
    TxtST.y          = posST[1];

    stage.addChild(TxtST);

    // contents
    const txt = [txt1, txt2, txt3, txt4];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 20;

    for(var i = 0; i < txt.length; i++){
        var Txt        = Init_Content();
        Txt.text       = txt[i];
        Txt.x          = posX;
        Txt.y          = posY;  

        stage.addChild(Txt);

        // update the Y coodinate for the next text
        posY += Txt.getBounds().height + posYAdd; 
    }

}

function ABB_Robot_Txt1(){
    var ABBRobotTxt1  = Init_Title1();
    ABBRobotTxt1.text = "ABB Robot - I/O Interface";
    ABBRobotTxt1.x    = 200;
    ABBRobotTxt1.y    = 300;

    stage.addChild(ABBRobotTxt1);
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

    // title
    var TxtT        = Init_Title2();
    TxtT.text       = txtT;
    TxtT.x          = posT[0];
    TxtT.y          = posT[1];

    stage.addChild(TxtT);

    // contents
    const txt = [txt1, txt2, txt3, txt4, txt5];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 20;

    for(var i = 0; i < txt.length; i++){
        var Txt         = Init_Content();    
        Txt.text       = txt[i];
        Txt.x          = posX;
        Txt.y          = posY;  

        stage.addChild(Txt);

        // update the Y coodinate for the next text
        posY += Txt.getBounds().height + posYAdd; 

    }

}

function PLC_and_ABB_Robot_Txt1(){
    var PLCABBTxt1  = Init_Title1();
    PLCABBTxt1.text = "ABB Robot - PLC I/O Modules Interface";
    PLCABBTxt1.x    = 150;
    PLCABBTxt1.y    = 300;
    stage.addChild(PLCABBTxt1);
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

    // title
    var TxtT        = Init_Title2();
    TxtT.text       = txtT;
    TxtT.x          = posT[0];
    TxtT.y          = posT[1];

    stage.addChild(TxtT);

    // contents
    const txt = [txt1, txt2, txt3, txt4, txt5];
    var   posX    = posC[0];
    var   posY    = posC[1];
    const posYAdd = 20;

    for(var i = 0; i < txt.length; i++){
        var Txt         = Init_Content();    
        Txt.text       = txt[i];
        Txt.x          = posX;
        Txt.y          = posY;

        stage.addChild(Txt);

        // update the Y coodinate for the next text
        posY += Txt.getBounds().height + posYAdd; 

    }

}

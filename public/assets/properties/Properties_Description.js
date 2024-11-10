export { Dict_Func_Txt, DictTitleTxt, DictContentTxt };

var Dict_Func_Txt = {
                        "1-1": Intro_Txt,
                        "2-1": PLC_Title_Txt,
                        "2-2": PLC_Input_Txt,
                        "2-4": PLC_Output_Txt,
                        "3-1": ABB_Robot_Title_Txt,
                        "3-2": ABB_Robot_Txt,
                        "4-1": PLC_and_Robot_Title_Txt,
                        "4-2": PLC_and_ABB_Robot_Txt,
                        "4-4": PLC_and_FANUC_Robot_Txt,
                    };


const PLCTitleTxt = {
                    "Title": "PLC - I/O Interface",
                    }

const PLCInputTxt = {
                        "Title":    "In this lesson, you will practice interfacing"
                                    + "I/O modules with a switch and battery",
                        "SubTitle": "(IB16 input module)",
                        "List": [
                                    "\u2022 Need a power supply of a 10 to 30 VDC"
                                    + "power supply for the input devices such as" 
                                    + "switch, push button, or sensors",

                                    "\u2022 Input device, power supply(PS), and module" 
                                    + "forms a close-loop circuitry",

                                    "\u2022 IN-X should be connected to the positive"
                                    + "side of the circuiry and GND-0 should be connected" 
                                    + "to the negative side of the circuitry",

                                    "\u2022 Input devices should be placed in the circuitry" 
                                    + "loop, it can be on the positive side or negative"
                                    + "side of the loop"
                                ]          
                    }

const PLCOutputTxt = {
                        "Title":    "In this lesson, you will practice interfacing I/O"
                                    + "modules with external devices such as a motor",
                        "SubTitle": "(OB8 output module)",
                        "List": [
                                    "\u2022 Need a power supply of a 10 to 30 VDC power"
                                    + "supply for the output devices such as motor,"
                                    + "relay, solenid, and light",

                                    "\u2022 Output device, power supply(PS), and module"
                                    + "forms a close-loop circuitry",

                                    "\u2022 DC(+) should be connected to the positive" 
                                    + "side of the circuiry and OUT-X should be connected" 
                                    + "to the negative side of the circuitry",

                                    "\u2022 Output devices should be placed in the circuitry" 
                                    + "loop, it can be on the positive side or negative side of the loop"
                                ]          
                    }

const RobotTitleTxt = {
                            "Title": "Robot - I/O Interface"
                        }

const ABBRobotTxt = {
                        "Title":    "Interfacing the Robot Controller Input Terminal"
                                    + "with Input Device",
                        "List": [
                                    "1. The ABB Robot IRC5 Controller input terminal"
                                    + "needs a 10 to 30 VDC power supply for input" 
                                    + "devices such as switches, push buttons, and sensors.",

                                    "2. An external power supply is needed to power"
                                    + "the input devices.",

                                    "3. DI XX should be connected to the +24 VDC and"
                                    + "the GND DI should be connected to the -24 VDC",

                                    "4. Input devices should be placed in  the closed"
                                    + "circuitry loop. It can be on the positive or"
                                    + "negative sides of the loop.",

                                    "5. If the input devices is rated for a different" 
                                    + "power supply than 24VDC, a relay should be used" 
                                    + "between the input device and the robot controller"
                                ]                                    
                    }

const PLCRobotTitleTxt = {
                        "Title": "PLC & Robot - Interface"
                    }

const PLCABBRobotTxt =  {
                        "Title":    "Interfacing the PLC Input Module(1756 IB16) with"
                                    + "the Robot Controller Scalable I/O Module",
                        "List": [
                                    "1. The PLC input module operates on a 10 to 30 VDC"
                                    + "power supply. Also, the robot controller scalable"
                                    + "I/O module needs a 24V power supply to communicate"
                                    + "with PLC.",

                                    "2. So, an external power supply is needed with PLC"
                                    + "input module and robot controller scalable I/O module.",

                                    "3. The robot controller scalable I/O module and PLC"
                                    + "input module form a closed-loop circuit.",

                                    "4. IN-X(0-7) of the PLC input module should be"
                                    + "connected to the DO XX(01-16) of the robot"
                                    + "controller scalable I/O module, and GND-0"
                                    + "should be connected to the negative side" 
                                    + "of the power supply.",

                                   "5. PWR DO terminal of the scalable I/O module should"
                                   + "be connected to the positive side of the power" 
                                   + "supply. GND DO should be connected to the negative"
                                   + "side of the power supply."
                                ]                                    
                        }  
                        
const PLCFANUCRobotTxt =    {
                            "Title":    "Interfacing the PLC Input Module(IB16) with the"
                                        + "Robot Controller Peripheral Device Module",
                            "List": [
                                        "1. The PLC input module operates on a 10 to 30"
                                        + "VDC power supply. Also, the robot controller"
                                        + "scalable I/O module needs a 24V power supply"
                                        + "to communicate with PLC.",
    
                                        "2. So, an external power supply should be used"
                                        + "with the robot controller output terminal",
    
                                        "3. The robot controller peripheral device module"
                                        + "and PLC input module form a closed-loop circuit.",
    
                                        "4. DO-XXX(101-108) of the robot controller"
                                        + "peripheral device should be connected to the"
                                        + "PLC input module's IN-X(0-7), and 0V(0 VDC)"
                                        + "should be connected to the GND-0 of the PLC"
                                        + "input module.",
    
                                        "5. Also, the DOSRC X(1-2) of the robot controller"
                                        + "peripheral device module should be connected to"
                                        + "the positive side of the external power supply,"
                                        + "and 0V(0 VDC) of the robot controller should be"
                                        + "connected to the negative side of external the power supply."
                                    ]                                    
                            } 

const DictTitleTxt =    {
                            "P1"    : PLCTitleTxt,
                            "P2"    : PLCTitleTxt,
                            "P3"    : PLCTitleTxt,
                            "P4"    : PLCTitleTxt,
                            "P5"    : RobotTitleTxt,
                            "P6"    : RobotTitleTxt,
                            "P7"    : RobotTitleTxt,
                            "P8"    : RobotTitleTxt,
                            "P9"    : RobotTitleTxt,
                            "P10"   : PLCRobotTitleTxt,
                            "P11"   : PLCRobotTitleTxt,
                            "P12"   : PLCRobotTitleTxt,
                            "P13"   : PLCRobotTitleTxt,
                            "P14"   : PLCRobotTitleTxt,
                        }

const DictContentTxt = {
                            "P1"    : PLCInputTxt,
                            "P2"    : PLCOutputTxt,
                            "P3"    : null,
                            "P4"    : null,
                            "P5"    : ABBRobotTxt,
                            "P6"    : null,
                            "P7"    : null,
                            "P8"    : null,
                            "P9"    : null,
                            "P10"   : PLCABBRobotTxt,
                            "P11"   : null,
                            "P12"   : PLCFANUCRobotTxt,
                            "P13"   : null,
                            "P14"   : null
                        }



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

function PLC_Title_Txt(){
    var PLCTxt1  = Init_Title1();
    PLCTxt1.text = "PLC - I/O Interface";
    PLCTxt1.x    = 300;
    PLCTxt1.y    = 300;

    stage.addChild(PLCTxt1);
}

function PLC_Input_Txt(){
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

function PLC_Output_Txt(){
    // set textbox content
    const txtT =   "In this lesson, you will practice interfacing I/O modules with external devices such as a motor";
    
    const txtST =   "(OB8 output module)";

    const txt1 =    "\u2022 Need a power supply of a 10 to 30 VDC power supply for the output devices such as motor, relay, solenid, and light";
    
    const txt2 =    "\u2022 Output device, power supply(PS), and module forms a close-loop circuitry";    

    const txt3 =    "\u2022 DC(+) should be connected to the positive side of the circuiry and OUT-X should be connected to the negative side of the circuitry";
    
    const txt4 =    "\u2022 Output devices should be placed in the circuitry loop, it can be on the positive side or negative side of the loop";
    

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

function ABB_Robot_Title_Txt(){
    var ABBRobotTxt1  = Init_Title1();
    ABBRobotTxt1.text = "ABB Robot - I/O Interface";
    ABBRobotTxt1.x    = 200;
    ABBRobotTxt1.y    = 300;

    stage.addChild(ABBRobotTxt1);
}

function ABB_Robot_Txt(){
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

function PLC_and_Robot_Title_Txt(){
    var PLCABBTxt1  = Init_Title1();
    PLCABBTxt1.text = "PLC & Robot - Interface";
    PLCABBTxt1.x    = 150;
    PLCABBTxt1.y    = 300;
    stage.addChild(PLCABBTxt1);
}

function PLC_and_ABB_Robot_Txt(){
    // set textbox content
    const txtT =    "Interfacing the PLC Input Module(1756 IB16) with the Robot Controller Scalable I/O Module";

    const txt1 =    "1. The PLC input module operates on a 10 to 30 VDC power supply. Also, the robot controller"
                    + " scalable I/O module needs a 24V power supply to communicate with PLC.";
    
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

    function PLC_and_FANUC_Robot_Txt(){
        // set textbox content
        const txtT =    "Interfacing the PLC Input Module(IB16) with the Robot Controller Peripheral Device Module";
    
        const txt1 =    "1. The PLC input module operates on a 10 to 30 VDC power supply. Also, the robot controller"
                        + " scalable I/O module needs a 24V power supply to communicate with PLC.";
        
        const txt2 =    "2. So, an external power supply should be used with the robot controller output terminal";
    
        const txt3 =    "3. The robot controller peripheral device module and PLC input module form a closed-loop circuit.";
    
        const txt4 =    "4. DO-XXX(101-108) of the robot controller peripheral device should be connected to the PLC input module's IN-X(0-7),"
                        + "and 0V(0 VDC) should be connected to the GND-0 of the PLC input module.";
    
        const txt5 =    "5. Also, the DOSRC X(1-2) of the robot controller peripheral device module should be connected to the positive side of the"
                        + "external power supply, and 0V(0 VDC) of the robot controller should be connected to the negative side of external the power supply.";
    
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


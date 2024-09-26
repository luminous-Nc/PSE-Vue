
export var Dict_Txt = {
                        "2-1": ABB_Robot_Txt1,
                        "2-2": ABB_Robot_Txt2
};

export var Dict_Audio = {
                            "2-1": "",
                            "2-2": "./src/assets/audio/ABB Robot-intro.mp3"
};

function ABB_Robot_Txt1(){
    var myTxt = {};

    myTxt.text       = "ABB Robot - I/O Interface";
    myTxt.x          = 200;
    myTxt.y          = 300;  
    myTxt.font       = "bold 50px Arial";
    myTxt.lineWidth  = 900;
    myTxt.color      = "#7A0000FF";
    myTxt.textAlign  = "left";

    return [myTxt];
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

    const txt = [txtT, txt1, txt2, txt3, txt4, txt5];

    // set textbox coordinate
    const posT = [500, 100];
    const pos1 = [50, 200];
    const pos2 = [50, 270];
    const pos3 = [50, 300];
    const pos4 = [50, 350];
    const pos5 = [50, 400];

    const pos = [posT, pos1, pos2, pos3, pos4, pos5];

    // integrate all texbotx
    var TxtOut = [];

    for(var i = 0; i < txt.length; i++){
        var myTxt = {};

        myTxt.text       = txt[i];
        myTxt.x          = pos[i][0];
        myTxt.y          = pos[i][1];  
        myTxt.font       = "bold 20px Arial";
        myTxt.lineWidth  = 900;
        myTxt.color      = "#000";
        myTxt.textAlign  = "left";

        TxtOut.push(myTxt);
    }

    // customization

    // title
    TxtOut[0].color     = "red";
    TxtOut[0].font      = "bold 30px Times New Roman";
    TxtOut[0].textAlign = "center";

    return TxtOut;
}

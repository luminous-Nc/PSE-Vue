export { DictTitleTxt, DictContentTxt };


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

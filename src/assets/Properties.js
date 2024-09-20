// all properties and parameters in the project
    // modules and keys' dictionary
    var Keys            = []; // connecting keys

    var topicLoaded = false

    // direction dictionary parameters
    var DictDirN = {}; // normal
    var DictDirD = {}; // diagonal

    // subline dictionary parameters
    var DictSubL    = {};   // subline length parameters
    var DictSubMScl = {}    // subline module scale

    // dynamic line dictionary parameters
    var DictDetourDir = [];
    var DetourBaseL;        // base length of detour point extention
    var DetourAddL;         // additional length of detour point extention
    var DictDetourL   = {}; // detour parameter dictionary

    // learning module parameters
    var DictModuleLink  = {}  // all modules' url
    var DictModuleRank  = {}; // all modules priority

    // image list
    var DictImg = {};

    // others
    var PortSize;

// -------------------------
// static parameters
// -------------------------

    // image list
    var ImgsJpg =  ["ABBRobot", "COMAURobot", "FANUCRobot",
                    "KUKARobot", "OMRONRobot", 
                    "Relay", "5VDC", "24VDC", 
                    "ButtonStart", "ButtonMotorStop"];

    var ImgsJpeg = ["Legend", "Switch", "Motor", "Sensor", 
                    "PLCInput", "PLCOutput", "PNP", "48VDC",
                    "Optical"];

    // default connection port size
    PortSize = 5;


    // normal direction
    DictDirN = [{x : 0,  y : -1}, // up
                {x : 0,  y : 1},  // down
                {x : -1, y : 0},  // left
                {x : 1,  y : 0}]; // right
    
    // diagonal direction
    DictDirD = [{x : -1, y : -1}, // left up
                {x : 1, y : -1},  // right up
                {x : 1, y : 1},   // right down
                {x : -1, y : 1}]  // left down

    // subline parameters
    DictSubL.Break = 2;
    DictSubL.Base  = 2;
    DictSubL.Move  = 8;
    
    // detour point property
    DetourBaseL   = 5;
    DetourAddL    = 5;

    // initialize modules' hyper link
    DictModuleLink = {  "Inputs"            : "http://128.194.119.24/tutorial?topic=1",
                        "Outputs"           : "http://128.194.119.24/tutorial?topic=2",
                        "PLC Input module"  : "http://128.194.119.24/tutorial?topic=3",
                        "PLC Output module" : "http://128.194.119.24/tutorial?topic=4", 
                        "Relay"             : "http://128.194.119.24/tutorial?topic=5",
                        "Sensors"           : "http://128.194.119.24/tutorial?topic=6", 
                        "ABB Robot"         : "http://128.194.119.24/tutorial?topic=7", 
                        "COMAU Robot"       : "http://128.194.119.24/tutorial?topic=8", 
                        "FANUC Robot"       : "http://128.194.119.24/tutorial?topic=9", 
                        "KUKA Robot"        : "http://128.194.119.24/tutorial?topic=10", 
                        "OMRON Robot"       : "http://128.194.119.24/tutorial?topic=11"
                    };

    // initalize modules' priority(0 -> low, 10 -> high,)                  
    DictModuleRank = {  "Inputs"            : 1,
                        "Outputs"           : 1,
                        "Sensors"           : 1,
                        "PLC Input module"  : 2,
                        "PLC Output module" : 2,                                  
                        "Relay"             : 3, 
                        "ABB Robot"         : 4, 
                        "COMAU Robot"       : 4, 
                        "FANUC Robot"       : 4, 
                        "KUKA Robot"        : 4, 
                        "OMRON Robot"       : 4
                    };

function Get_Random_Array_Value(ArrayIn){
    const randomIndex = Math.floor(Math.random() * ArrayIn.length);
    return ArrayIn[randomIndex];
}
//// initialize pure ports
//			// 0       1     
//AllPorts    = ["LS1",  "LS2",
//			// 2       3					   
//			   "RLC1", "RLC2",
//			// 4        5        6		   
//			   "RLSW1", "RLSW2", "RLSW3",
//			// 7      8			   		   
//			   "5VP", "5VN",
//			// 9      10              						   
//			   "24VP", "24VN",
//			// 11      12      13      14      15		   
//			   "DI01", "DI02", "DI03", "DO01", "GNDDI"];
//		


//AllKeys	= [["5VP", "RLC2"], ["RLC1", "LS1"], 
//		   ["LS2", "5VN"], ["GNDDI", "24VN"], 
//		   ["DI01", "RLSW1"], ["RLSW3", "24VP"]];


/*AllKey["Relay Coil"] =   [[["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]],
						  [["5VP", "RLC"], ["RLC", "LS"], ["LS", "5VN"]]];*/

// ---------------------------------
// -----full legend description-----
// ---------------------------------

// <Mouse over select port>

// <<Limit Sensor>>
// T1S_LS1 - Task1_Select_LimitSensor_Port1
// T1S_LS2 - Task1_Select_LimitSensor_Port2

// <<Relay Coil>>
// T1S_RLC1 - Task1_Select_RelayCoil_Port1
// T1S_RLC2 - Task1_Select_RelayCoil_Port2

// <<Relay Switch>>
// T1S_RLSW1 - Task1_Select_RelaySwitch_Port1
// T1S_RLSW2 - Task1_Select_RelaySwitch_Port2
// T1S_RLSW3 - Task1_Select_RelaySwitch_Port3

// <<5VDC Power Source>>
// T1S_5VP - Task1_Select_5VDC_Positive
// T1S_5VN - Task1_Select_5VDC_Negative

// <<24VDC Power Source>>
// T1S_24VP - Task1_Select_24VDC_Positive
// T1S_24VN - Task1_Select_24VDC_Negative

// <<PLC Module>>
// T1S_DI01 - Task1_Select_DI_01
// T1S_DI02 - Task1_Select_DI_02
// T1S_DI03 - Task1_Select_DI_03
// T1S_DO01 - Task1_Select_DO_01
// T1S_GNDDI - Task1_Select_Ground

// Mouse click subline

// <<Limit Sensor>>
// T1P_LS1 - Task1_Subline_LimitSensor_Port1
// T1P_LS2 - Task1_SSubline_LimitSensor_Port2

// <<Relay Coil>>
// T1P_RLC1 - Task1_Subline_RelayCoil_Port1
// T1P_RLC2 - Task1_Subline_RelayCoil_Port2

// <<Relay Switch>>
// T1P_RLSW1 - Task1_Subline_RelaySwitch_Port1
// T1P_RLSW2 - Task1_Subline_RelaySwitch_Port2
// T1P_RLSW3 - Task1_Subline_RelaySwitch_Port3

// <<5VDC Power Source>>
// T1P_5VP - Task1_Subline_5VDC_Positive
// T1P_5VN - Task1_Subline_5VDC_Negative

// <<24VDC Power Source>>
// T1P_24VP - Task1_Subline_24VDC_Positive
// T1P_24VN - Task1_Subline_24VDC_Negative

// <<PLC Module>>
// T1P_DI01 - Task1_Subline_DI_01
// T1P_DI02 - Task1_Subline_DI_02
// T1P_DI03 - Task1_Subline_DI_03
// T1P_DO01 - Task1_Subline_DO_01
// T1P_GNDDI - Task1_Subline_Ground

// Mouse click full connection
// T1C_GNDDI_24VN - GNDDI + 24V-
// T1C_DI01_RLSW1 - DI01 + RLSW1
// T1C_RLSW3_24VP - RLSW3 + 24V+
// T1C_RLC1_LS1 - RLC1 + LS1
// TC_LS2_5VP - LS2 + 5V+
// T1C_5VN_RLC2 - 5V- + RLC2


// port index rule: left -> right, up -> down

/* AllObstaclesSet[0] = [[root.T1B_PLC1, root.T1B_PLC2, root.T1B_PLC3, root.T1B_PLC4],
                   [root.T1B_RL1,  root.T1B_RL2,  root.T1B_RL3,  root.T1B_RL4],
                   [root.T1B_LS1,  root.T1B_LS2,  root.T1B_LS3,  root.T1B_LS4],
                   [root.T1B_5V1,  root.T1B_5V2,  root.T1B_5V3,  root.T1B_5V4],
                   [root.T1B_24V1, root.T1B_24V2, root.T1B_24V3, root.T1B_24V4]]; */

// // ports position
// DictPortPos = {P1: [{name: "DI01",  x:11, y:313},
//                     {name: "DI02",  x:11, y:338},  
//                     {name: "DI03",  x:11, y:363},
//                     {name: "DO01",  x:11, y:94},   
//                     {name: "GNDDI", x:11, y:289},
//                     {name: "RLC1",  x:82, y:7},    
//                     {name: "RLC2",  x:82, y:137},
//                     {name: "RLSW1", x:38, y:7},   
//                     {name: "RLSW2", x:23, y:137},
//                     {name: "RLSW3", x:53, y:137},
//                     {name: "5VP",   x:24, y:16},
//                     {name: "5VN",   x:70, y:16},
//                     {name: "24VP",  x:20, y:12},
//                     {name: "24VN",  x:60, y:12},
//                     {name: "LS1",   x:7, y:30},
//                     {name: "LS2",   x:65, y:30}],
//                P2: []};

// // connecting modules(objects)
// DictModule = {P1:{"PLC":     ["DI01", "DI02", "DI03", "DO01", "GNDDI"],
//     "Relay":   ["RLC1", "RLC2", "RLSW1", "RLSW2", "RLSW3"],
//     "Sensor":  ["LS1",   "LS2"],
//     "5VDC":    ["5VP", "5VN"],
//     "24VDC":   ["24VP", "24VN"]},
// P2: {}};

// P2: [["120VP", "RLSW3"], ["120VN", "C2"], 
// ["RLSW1", "C1"], ["24VP", "24F4"], 
// ["24VN", "0V2"], ["DO101", "RLC1"], 
// ["0V3", "RLC2"]]
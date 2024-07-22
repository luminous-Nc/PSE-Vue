// all properties and parameters in the project
    // modules and keys' dictionary
    var DictModule      = {}; // all connecting module name
    var DictObjPos      = []; // all objects' fixed or relative position
    var DictKeys        = {}; // all connecting keys
    var Keys            = []; // connecting keys

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
    var ImgsJpg = [];
    var ImgsJpeg = [];

    // port list
    var InputPort  = [];
    var OutputPort = [];
    var RndPort = "";

// -------------------------
// prepare dynamic parameters  
// -------------------------
    // module position
    DictModule = {P1: {"PLC": {x:150, y:100,
                        Port: ["DI01", "DI02", "DI03", "DO01", "GNDDI"]},

                       "Relay": {x:450, y:250,
                        Port: ["RLC1", "RLC2", "RLSW1", "RLSW2", "RLSW3"]},

                       "5VDC": {x:400, y:550,
                        Port: ["5VP", "5VN"]},

                       "24VDC": {x:550, y:500,
                        Port: ["24VP", "24VN"]},

                       "LimitedSensor": {x:450, y:100,
                        Port: ["LS1", "LS2"]}},

                  P2: {"PLCInput": {x:150, y:100,
                        Port: [RndPort, "GNDIN"]},

                       "24VDC": {x:650, y:500,
                        Port: ["24VP", "24VN"]},
                                              
                       "Switch": {x:650, y:200,
                        Port: ["SWL", "SWR"]}},
                       
                  P3: {"PLCOutput": {x:150, y:100,
                       Port: [RndPort, "DC0"]},

                       "24VDC": {x:650, y:500,
                       Port: ["24VP", "24VN"]},

                       "Motor": {x:650, y:200,
                       Port: ["MTL", "MTR"]}}};

    // connecting keys
    DictKeys = {P1: [["5VP", "RLC2"],   ["RLC1", "LS1"], 
                     ["LS2", "5VN"],    ["GNDDI", "24VN"], 
                     ["DI01", "RLSW1"], ["RLSW3", "24VP"]],
                P2: [[RndPort, "SWL"], ["SWR", "24VN"], ["GNDIN", "24VP"]],
                P3: [[RndPort, "MTL"], ["MTR", "24VN"], ["DC0", "24VP"]]};

// -------------------------
// prepare static parameters
// -------------------------
    ImgsJpg =  ["PLC", "Relay", "5VDC", "24VDC", "LimitedSensor"];
    ImgsJpeg = ["Legend", "Switch", "Motor", "PLCInput", "PLCOutput"];

    InputPort  = ["IN0", "IN1", "IN2", "IN3", 
                  "IN4", "IN5", "IN6", "IN7"];
    OutputPort = ["OUT0", "OUT1", "OUT2", "OUT3", "OUT4"];

    DictObjPos  = { "DI01":  {x:11, y:313}, "DI02":  {x:11, y:338},  
                    "DI03":  {x:11, y:363}, "DI04":  {x:11, y:387},
                    "DI05":  {x:11, y:411}, "DI06":  {x:11, y:437},
                    "DI07":  {x:11, y:460}, "DI08":  {x:11, y:484},
                    "GNDDI": {x:11, y:289}, 

                    "DO01":  {x:11, y:94},  "DO02":  {x:11, y:116},
                    "DO03":  {x:11, y:141}, "DO04":  {x:11, y:166},
                    "DO05":  {x:11, y:190}, "DO06":  {x:11, y:214},
                    "DO07":  {x:11, y:240}, "DO08":  {x:11, y:264}, 
                    "GNDDO": {x:9, y:68}, 
                    
                    "RLC1":  {x:82, y:7}, "RLC2":  {x:82, y:137},
                    "RLSW1": {x:38, y:7}, "RLSW2": {x:23, y:137},
                    "RLSW3": {x:53, y:137},

                    "5VP":   {x:24, y:17}, "5VN":   {x:69, y:17},

                    "24VP":  {x:20, y:12}, "24VN":  {x:60, y:12},

                    "LS1":   {x:7, y:30}, "LS2":   {x:65, y:30},

                    "SWL":   {x:5, y:21}, "SWR":   {x:95, y:21},

                    "MTL":   {x:7, y:28}, "MTR":   {x:97, y:28},

                    "IN0":   {x:133, y:113}, "IN1":   {x:338, y:113},
                    "IN2":   {x:133, y:200}, "IN3":   {x:338, y:200},
                    "IN4":   {x:133, y:285}, "IN5":   {x:338, y:285},
                    "IN6":   {x:133, y:374}, "IN7":   {x:338, y:374},
                    "GNDIN": {x:133, y:458},

                    "DC0":   {x:133, y:203}, 
                    "OUT0":  {x:338, y:117},
                    "OUT1":  {x:338, y:203},
                    "OUT2":  {x:338, y:288},
                    "OUT3":  {x:338, y:377},
                    "OUT4":  {x:338, y:461},
                    
                    "Legend": {x:650, y:30}};

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
    DictSubL.Base  = 2;
    DictSubL.Move  = 4;
    DictSubL.Break = 2;

    // detour point property
    DetourBaseL   = 5;
    DetourAddL    = 5;

    // initialize modules' hyper link
    DictModuleLink = { "Inputs"            : "http://128.194.119.24/tutorial?topic=1",
                        "Outputs"           : "http://128.194.119.24/tutorial?topic=2",
                        "PLC Input module"  : "http://128.194.119.24/tutorial?topic=3",
                        "PLC Output module" : "http://128.194.119.24/tutorial?topic=4", 
                        "Relay"             : "http://128.194.119.24/tutorial?topic=5",
                        "Sensors"           : "http://128.194.119.24/tutorial?topic=6", 
                        "ABB Robot"         : "http://128.194.119.24/tutorial?topic=7", 
                        "COMAU Robot"       : "http://128.194.119.24/tutorial?topic=8", 
                        "FANUC Robot"       : "http://128.194.119.24/tutorial?topic=9", 
                        "KUKA Robot"        : "http://128.194.119.24/tutorial?topic=10", 
                        "OMRON Robot"       : "http://128.194.119.24/tutorial?topic=11"};

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
                        "OMRON Robot"       : 4};

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
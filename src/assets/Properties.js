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

    // random port list
    var InputPort       = [];
    var InputGNDPort    = [];
    var OutputPort      = [];
    var OutputDCPort    = [];
    var ABBDIPort       = [];
    var ABBGNDDIPort    = [];
    var RndPort     = "";
    var RndGND      = "";
    var RndDC       = "";
    var RndABBDI    = "";
    var RndABBGNDDI = "";

    // others
    var PortSize;

// -------------------------
// prepare dynamic parameters  
// -------------------------
    // module position
    DictModule = {
                    P1:{
                            "PLCInput":{
                                            x:150, 
                                            y:100,
                                            Port: [RndPort, RndGND],
                                            ShapeSize: 10
                                        },                        
                            "24VDC":{
                                        x:650, 
                                        y:500,
                                        Port: ["24VP", "24VN"]
                                    },                                                
                            "Switch":{
                                        x:650, 
                                        y:200,
                                        Port: ["SWL", "SWR"]
                                     }
                        },
                       
                    P2:{
                            "PLCOutput":{
                                            x:450, 
                                            y:100,
                                            Port: [RndPort, RndDC],
                                            ShapeSize: 10
                                        },

                            "24VDC":{
                                        x:250, 
                                        y:600,
                                        Port: ["24VP", "24VN"]
                                    },

                            "Motor":{
                                        x:150, 
                                        y:150,
                                        Port: ["MTL", "MTR"]
                                    }
                        },

                    P3:{
                        "PLCInput":{
                                        x:100, 
                                        y:100,
                                        Port: [RndPort, RndGND]
                                   },

                       "Relay":{
                                    x:550, 
                                    y:150,
                                    Port: ["RLCU", "RLCD", 
                                           "RLSWU", "RLSWDL", "RLSWDR"]
                               },

                       "PNP":{
                                x:800, 
                                y:200,
                                Port: ["PNPB", "PNPE", "PNPC"]
                             },

                       "24VDC":{
                                    x:550, 
                                    y:550,
                                    Port: ["24VP", "24VN"]
                               },

                       "48VDC":{
                                    x:800, 
                                    y:560,
                                    Port: ["48VP", "48VN"]
                               }
                     },

                   P4:{
                        "PLCInput":{
                                        x:100, 
                                        y:100,
                                        Port: [RndPort, RndGND]
                                   },

                        "Optical":{
                                    x:600, 
                                    y:300,
                                    Port: ["OPUL", "OPUR", 
                                           "OPDL", "OPDR"]
                                  },
    
                        "5VDC":{
                                    x:400, 
                                    y:620,
                                    Port: ["5VP", "5VN"]
                               },

                        "24VDC":{
                                    x:700, 
                                    y:550,
                                    Port: ["24VP", "24VN"]
                                }
                        },
                            
                    P5:{
                            "ABBRobot":{
                                            x:100, 
                                            y:100,
                                            Port: [RndABBDI, RndABBGNDDI]
                                        },

                            "Relay":{
                                        x:400, 
                                        y:250,
                                        Port: ["RLCU", "RLCD", 
                                            "RLSWU", "RLSWDL", "RLSWDR"]
                                    },

                            "Sensor":{
                                        x:650, 
                                        y:120,
                                        Port: ["SL", "SR"]
                                    },
        
                            "5VDC":{
                                        x:700, 
                                        y:550,
                                        Port: ["5VP", "5VN"]
                                    },

                            "24VDC":{
                                        x:400, 
                                        y:600,
                                        Port: ["24VP", "24VN"]
                                    }
                        },

                    P6: {

                    },

                    P7: {

                    },

                    P8: {

                    },

                    P9: {

                    },
                };

    // connecting keys
    DictKeys = {
                P1: [[RndPort, "SWL"], [RndGND, "24VN"], ["SWR", "24VP"]], 
                P2: [[RndPort, "MTR"], [RndDC, "24VN"], ["MTL", "24VP"]],
                P3: [[RndPort, "RLSWU"], [RndGND, "24VN"], ["RLSWDR", "24VP"], 
                     ["RLCU", "PNPE"], ["RLCD", "PNPC"],   ["PNPB", "48VP"],
                     ["PNPC", "48VN"]],
                P4: [[RndPort, "OPUR"], [RndGND, "24VN"], ["24VP", "OPDR"],
                     ["5VP", "OPUL"], ["5VN", "OPDL"]],
                P5: [[RndABBDI, "RLSWU"], [RndABBGNDDI, "24VN"], ["24VP", "RLSWDR"], 
                     ["5VN", "SR"], ["5VP", "RLCD"], ["SL", "RLCU"]],
                };

// -------------------------
// prepare static parameters
// -------------------------

    // image list
    ImgsJpg =  ["ABBRobot", "COMAURobot", "FANUCRobot",
                "KUKARobot", "OMRONRobot", 
                "Relay", "5VDC", "24VDC"];

    ImgsJpeg = ["Legend", "Switch", "Motor", "Sensor", 
                "PLCInput", "PLCOutput", "PNP", "48VDC",
                "Optical"];

    // random point list
    InputPort  = ["IN-0", "IN-1", "IN-2", "IN-3", 
                  "IN-4", "IN-5", "IN-6", "IN-7",
                  "IN-8", "IN-9"];

    InputGNDPort = ["GNDINU", "GNDIND"];

    OutputPort = ["OUT-0", "OUT-1", "OUT-2", 
                  "OUT-3", "OUT-4", "OUT-5"];
    
    OutputDCPort = ["DC00", "DC01", "DC02", 
                    "DC03", "DC04", "DC05"];
    
    ABBDIPort = ["DI01", "DI02", "DI03", "DI04", 
                 "DI05", "DI06", "DI07", "DI08", 
                 "DI09", "DI10", "DI11", "DI12", 
                 "DI13", "DI14", "DI15", "DI16"];

    ABBGNDDIPort = ["GNDDIL", "GNDDIR"];

    // all modules' ports coordinates
    DictObjPos  = { 
                    // ABB robot
                    "ABBRobot": {              
                                    "GNDDOL": {x:7, y:56},   "GNDDOR": {x:170, y:56},
                                    "DO01":  {x:7, y:78},    "DO02":  {x:7, y:102},
                                    "DO03":  {x:7, y:126},   "DO04":  {x:7, y:150},
                                    "DO05":  {x:7, y:173},   "DO06":  {x:7, y:200},
                                    "DO07":  {x:7, y:223},   "DO08":  {x:7, y:245}, 
                                    "DO09":  {x:170, y:78},  "DO10":  {x:170, y:102},
                                    "DO11":  {x:170, y:126}, "DO12":  {x:170, y:150},
                                    "DO13":  {x:170, y:173}, "DO14":  {x:170, y:200},
                                    "DO15":  {x:170, y:223}, "DO16":  {x:170, y:245},

                                    "GNDDIL": {x:7, y:270}, "GNDDIR": {x:170, y:270}, 
                                    "DI01":  {x:7, y:291},   "DI02":  {x:7, y:312},  
                                    "DI03":  {x:7, y:335},   "DI04":  {x:7, y:359},
                                    "DI05":  {x:7, y:383},   "DI06":  {x:7, y:406},
                                    "DI07":  {x:7, y:431},   "DI08":  {x:7, y:456},
                                    "DI09":  {x:170, y:291}, "DI10":  {x:170, y:312},
                                    "DI11":  {x:170, y:335}, "DI12":  {x:170, y:359},
                                    "DI13":  {x:170, y:383}, "DI14":  {x:170, y:406},
                                    "DI15":  {x:170, y:431}, "DI16":  {x:170, y:456}                              
                    },

                    // COMAU robot
                    "COMAURobot": {
                                    "IN16":  {x:160, y:72},  "IN15":  {x:160, y:104},  
                                    "IN14":  {x:160, y:139}, "IN13":  {x:160, y:172},
                                    "IN12":  {x:160, y:208}, "IN11":  {x:160, y:241},
                                    "IN10":  {x:160, y:276}, "IN9":   {x:160, y:309},
                                    "IN8":   {x:160, y:344}, "IN7":   {x:160, y:379},
                                    "IN6":   {x:160, y:412}, "IN5":   {x:160, y:447},

                                    "OUT16":  {x:7, y:139}, "OUT15":  {x:7, y:172},
                                    "OUT14":  {x:7, y:208}, "OUT13":  {x:7, y:241},
                                    "OUT12":  {x:7, y:276}, "OUT11":  {x:7, y:309},
                                    "OUT10":  {x:7, y:344}, "OUT9":   {x:7, y:379},
                                    "OUT8":   {x:7, y:412}, "OUT7":   {x:7, y:447},

                                    "OVDC":       {x:160, y:37}, 
                                    "24VDC":      {x:7, y:72}, 
                                    "24VDriveOn": {x:7, y:104} 
                    },
                    
                    // FANUC robot
                    "FANUCRobot": {
                                    "24FUL":    {x:5, y:54},  "24FUR":      {x:242, y:54}, 
                                    "24FDL":    {x:5, y:75},  "24FDR":      {x:242, y:75},  
                                    "SDICOM1":  {x:5, y:98},  "SDICOM2":    {x:242, y:98},
                                    "0VUL":     {x:5, y:120}, "0VUR":       {x:242, y:120},
                                    "0VDL":     {x:5, y:446}, "0VDR":       {x:242, y:446}, 

                                    "DI101":  {x:5, y:143}, "DI102":  {x:242, y:143},  
                                    "DI103":  {x:5, y:165}, "DI104":  {x:242, y:165},
                                    "DI105":  {x:5, y:187}, "DI106":  {x:242, y:187},
                                    "DI107":  {x:5, y:208}, "DI108":  {x:242, y:208},
                                    "DI109":  {x:5, y:231}, "DI110":  {x:242, y:231},
                                    "DI111":  {x:5, y:253}, "DI112":  {x:242, y:253},
                                    "DI113":  {x:5, y:275}, "DI114":  {x:242, y:275},
                                    "DI115":  {x:5, y:294}, "DI116":  {x:242, y:294},          
                                    "DI117":  {x:5, y:314}, "DI118":  {x:242, y:314}, 
                                    "DI119":  {x:5, y:334}, "DI120":  {x:242, y:334}, 

                                    "DO101":  {x:7, y:356}, "DO102":  {x:7, y:356},
                                    "DO103":  {x:7, y:377}, "DO104":  {x:7, y:377},
                                    "DO105":  {x:7, y:401}, "DO106":  {x:7, y:401},
                                    "DO107":  {x:7, y:423}, "DO108":  {x:7, y:423}
                    },

                    // KUKA robot
                    "KUKARobot": {
                                    "24FL":  {x:5, y:32},  "24FR":  {x:160, y:32}, 

                                    "GNDDOL": {x:5, y:56},  "GNDDOR": {x:160, y:56},
                                    "DO1":  {x:5, y:82},  "DO9":  {x:160, y:82},  
                                    "DO2":  {x:5, y:106},  "DO10":  {x:160, y:106}, 
                                    "DO3":  {x:5, y:131},  "DO11":  {x:160, y:131}, 
                                    "DO4":  {x:5, y:155},  "DO12":  {x:160, y:155}, 
                                    "DO5":  {x:5, y:180},  "DO13":  {x:160, y:180}, 
                                    "DO6":  {x:5, y:205},  "DO14":  {x:160, y:205}, 
                                    "DO7":  {x:5, y:230},  "DO15":  {x:160, y:230}, 
                                    "DO8":  {x:5, y:255},  "DO16":  {x:160, y:255}, 

                                    "DI1":  {x:5, y:280},  "DI9":  {x:160, y:280}, 
                                    "DI2":  {x:5, y:305},  "DI10":  {x:160, y:305},
                                    "DI3":  {x:5, y:330},  "DI11":  {x:160, y:330},
                                    "DI4":  {x:5, y:355},  "DI12":  {x:160, y:355},
                                    "DI5":  {x:5, y:379},  "DI13":  {x:160, y:379},
                                    "DI6":  {x:5, y:404},  "DI14":  {x:160, y:404},
                                    "DI7":  {x:5, y:428},  "DI15":  {x:160, y:428},
                                    "DI8":  {x:5, y:452},  "DI16":  {x:160, y:452},
                                    "GNDDIL": {x:7, y:478}, "GNDDIR": {x:170, y:478}
                    },

                    // OMRON robot
                    "OMRONRobot": {
                                    "GNDL":     {x:5, y:23},  "GNDM":     {x:148, y:39},  "OUT1": {x:296, y:23}, 
                                    "24VDCL":   {x:5, y:72},  "24VDCM":   {x:148, y:88},  "OUT2": {x:296, y:72}, 
                                    "Common1L": {x:5, y:120}, "Common1M": {x:148, y:135}, "OUT3": {x:296, y:120},  
                                    "In11": {x:5, y:167},     "In12": {x:148, y:182},     "OUT4":  {x:296, y:167},  
                                    "In21": {x:5, y:214},     "In22": {x:148, y:229},     "OUT5":  {x:296, y:214}, 
                                    "In31": {x:5, y:262},     "In32": {x:148, y:277},     "OUT6":  {x:296, y:262}, 
                                    "In41": {x:5, y:311},     "In42": {x:148, y:326},     "OUT7":  {x:296, y:311}, 
                                    "In51": {x:5, y:360},     "In52": {x:148, y:375},     "OUT8":  {x:296, y:360}, 
                                    "In61": {x:5, y:408},     "In62": {x:148, y:422}, 
                    },

                    // relay
                    "Relay": {
                                "RLCU":  {x:144, y:4}, 
                                "RLCD": {x:144, y:203},
                                "RLSWU": {x:46, y:4}, 
                                "RLSWDL": {x:28, y:203},
                                "RLSWDR": {x:72, y:203}
                    },

                    // power
                    "5VDC": {
                                "5VP": {x:32, y:7}, 
                                "5VN": {x:78, y:7}
                    },
                    
                    "24VDC": {
                                "24VP": {x:31, y:7}, 
                                "24VN": {x:77, y:7}
                    },
                    
                    "48VDC": {
                                "48VP": {x:29, y:7}, 
                                "48VN": {x:75, y:7}
                    },
                    

                    // sensor
                    "Sensor": {
                                "SL": {x:6, y:30}, 
                                "SR": {x:148, y:30}
                    },
                    
                    // PNP
                    "PNP": {
                                "PNPB": {x:5, y:69}, 
                                "PNPE": {x:85, y:5},
                                "PNPC": {x:85, y:133}
                    },

                    // optical
                    "Optical": {
                                "OPUL": {x:5, y:9},   
                                "OPDL": {x:5, y:127}, 
                                "OPUR": {x:160, y:8}, 
                                "OPDR": {x:160, y:128} 
                    },

                    // switch
                    "Switch": {
                                "SWL": {x:3, y:23}, 
                                "SWR": {x:102, y:23}
                    },
                    
                    // motor
                    "Motor": {
                                "MTL": {x:6, y:28}, 
                                "MTR": {x:129, y:28}
                    },
                    
                    // PLC input
                    "PLCInput": {
                                    "IN-0": {x:71, y:373},  "IN-1": {x:115, y:373},
                                    "IN-2": {x:158, y:373}, "IN-3": {x:202, y:373},
                                    "IN-4": {x:245, y:373}, 
                                    "IN-5": {x:71, y:39},   "IN-6": {x:115, y:39},  
                                    "IN-7": {x:158, y:39},  "IN-8": {x:202, y:39},  
                                    "IN-9": {x:245, y:39},
                                    "GNDINU": {x:289, y:39}, "GNDIND": {x:289, y:373},
                    },

                    // PLC output
                    "PLCOutput" :{
                                    "DC00": {x:75, y:374},  "DC01": {x:119, y:374},
                                    "DC02": {x:163, y:374}, "DC03": {x:205, y:374},
                                    "DC04": {x:250, y:374}, "DC05": {x:293, y:374}, 
                                    "OUT-0":  {x:75, y:40},  "OUT-1":  {x:119, y:40},
                                    "OUT-2":  {x:163, y:40}, "OUT-3":  {x:205, y:40},
                                    "OUT-4":  {x:250, y:40}, "OUT-5":  {x:293, y:40},
                    },
                  
                    // legend
                    "Legend": {x:750, y:10}
                };

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
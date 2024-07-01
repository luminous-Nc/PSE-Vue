// all properties and parameters in the project
var IndexMyPage;       // current page index
var IndexMain; 	       // the index of main frames
var IndexTasks;	       // the index including all tasks
var Legends;		   // correct and incorrect connection legend
var Buttons;
var Hints;
var MyTaskNum  = 0;    // current task number
var LineType		   // draw line manually or automatically

var AllPorts	     = [];  // pure ports name (single practice)
var AllPortsSet      = [];  // pure ports name set (all practices)
var AllKeys		     = [];  // practice key (single practice)
var AllKeysSet       = [];  // practice key set (all practices)

var DictSubLineDir   = []; // subline direction-length [x, y] axis dictionary
var SubLineBaseL;          // base length of subline
var SubLineAddL;           // additional length of subline
var DictSubLineL     = {}; // subline parameter dictionary

var DictDetourDir    = [];
var DetourBaseL;           // base length of detour point extention
var DetourAddL;            // additional length of detour point extention
var DictDetourL      = {}; // detour parameter dictionary

var DictAnalysis     = {}; // the current integrated analysis dictionary
var DictPorts        = []; // analysis dictionary key set (all practice)
var DictModules      = []; // analysis dictionary value set (all practices)
var DictPortsSet     = []; // analysis dictionary key set (all practice)
var DictModulesSet   = []; // analysis dictionary value set (all practices)

var AllModulesLink   = {}; // all modules' url
var LinkBasePos      = {}; // the first module module link shifting position
var LinkAdjustPos    = {}; // adjusted position 

var AllModulesPriority = {}; // all modules priority

var AllModules        = [];  // all obstacle name (single practice)
var AllObjs           = [];  // all obstacle(components)
var AllModulesSet     = [];  // all obstacle name set (all practices)
// initialize all paramters and properties

// initialize pure ports and key
AllPortsSet[0] = ["LS1",   "LS2",   "RLC1", "RLC2", "RLSW1",
                  "RLSW2", "RLSW3", "5VP",  "5VN",  "24VP", 
                  "24VN",  "DI01",  "DI02", "DI03", "DO01", 
                  "GNDDI"];

AllKeysSet[0] = [["5VP", "RLC2"],   ["RLC1", "LS1"], 
                 ["LS2", "5VN"],    ["GNDDI", "24VN"], 
                 ["DI01", "RLSW1"], ["RLSW3", "24VP"]];

AllPortsSet[1] =["C1",    "C2",    "RLC1",  "RLC2",  "RLSW1",
                 "RLSW2", "RLSW3", "120VP", "120VN", "24VP",
                 "24VN",  "DI101", "DI102", "DI103", "DO101", 
                 "0V2",   "0V3",   "24F4"];

AllKeysSet[1] = [["120VP", "RLSW3"], ["120VN", "C2"], 
                 ["RLSW1", "C1"], ["24VP", "24F4"], 
                 ["24VN", "0V2"], ["DO101", "RLC1"], 
                 ["0V3", "RLC2"]];

// initialize port-component dictionary
DictPortsSet[0] = [["LS1", "LS2"], 
                   ["RLC1", "RLC2", "RLSW1", "RLSW2", "RLSW3"], 
                   ["DI01", "DI02", "DI03", "DO01", "GNDDI"]];

DictModulesSet[0] = ["Sensors", "Relay", "ABB Robot"];

DictPortsSet[1] = [["RLC1", "RLC2", "RLSW1", "RLSW2", "RLSW3"], 
                   ["DI101", "DI102", "DI103", "DO101", "0V3", "0V2", "24F4"]];

DictModulesSet[1] = ["Relay", "FANUC Robot"];

// initialize modules(obstacles)
AllModulesSet[0] = ["Robot", "Relay", "24VDC", "5VDC", "Sensor"];
AllModulesSet[1] = ["Robot", "Relay", "24VDC", "120VDC", "Convey"];

// initlaize subline properties
SubLineBaseL   = 2;
SubLineAddL    = 4;
SubLineBreakL  = 2; // to move and find the end point outside of the obstacles
DictSubLineDir = [{x : 0,  y : -1}, // up
                  {x : 0,  y : 1},  // down
                  {x : -1, y : 0},  // left
                  {x : 1,  y : 0}]; // right

// initialize detour point property
DetourBaseL   = 5;
DetourAddL    = 5;
DictDetourDir = [{x : -1, y : -1}, // left up
                 {x : 1, y : -1},  // right up
                 {x : 1, y : 1},   // right down
                 {x : -1, y : 1}]  // left down

// link position adjustment
LinkBasePos.x   = -15;
LinkBasePos.y   = 15;
LinkAdjustPos.x = 0;
LinkAdjustPos.y = 25;

// all page index
IndexMyPage = 0;                  // start up index
IndexMain   = [0, 1, 2, 3, 4, 5]; // all description + practice index
IndexTasks  = 1;                  // all practice index 

// initialize modules' hyper link
AllModulesLink = {"Inputs"            : "http://128.194.119.24/tutorial?topic=1",
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
AllModulesPriority ={"Inputs"            : 1,
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

// initialize all general parameters and symbols(subject to change) 
function General_Symbol_Init(){
    // all legends
    Legends = [root.Legend_Correct,  root.Legend_Incorrect,
               root.Textbox_Correct, root.Textbox_Incorrect,
               root.MyAnalysisText];
        
    // all buttons		
    Buttons = [root.Button_Previous, root.Button_Next,
               root.Button_Reset];

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

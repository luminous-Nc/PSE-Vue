// random port list

// PLC Input
var PLCInputPort    = ["IN-0", "IN-1", "IN-2", "IN-3", 
                       "IN-4", "IN-5", "IN-6", "IN-7"];
    

var PLCInputGNDPort = ["GNDPLCL", "GNDPLCR"];

// var PLCInputNewGNDPort = ["GNDINU", "GNDIND"];

// var PLCInputNewPortN  = ["IN-0", "IN-1", "IN-2", "IN-3", 
//                      "IN-4", "IN-5", "IN-6", "IN-7",
//                      "IN-8", "IN-9"];
                     
var PLCInput0To4Port  = ["IN-0", "IN-1", "IN-2", "IN-3", "IN-4"];

var PLCInput5To7Port  = ["IN-5", "IN-6", "IN-7"];

var PLCInput5To9Port  = ["IN-5", "IN-6", "IN-7", "IN-8", "IN-9"];

var PLCInput1357Port  = ["IN-1", "IN-3", "IN-5", "IN-7"];

var PLCInput0246Port  = ["IN-0", "IN-2", "IN-4", "IN-6"];

// var PLCInputNewGNDPort = ["GNDINU", "GNDIND"];

// PLC Output
var PLCOutputPort   = ["OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"];

var PLCOutputDCPort = ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4"];

// var PLCOutputNewPort = ["OUT-0", "OUT-1", "OUT-2", 
//                         "OUT-3", "OUT-4", "OUT-5"];

// var PLCOutputNewDCPort = ["DC-00", "DC-01", "DC-02", 
//                        "DC-03", "DC-04", "DC-05"];

// ABB Robot                       
var ABBDIPort = ["DI01", "DI02", "DI03", "DI04", 
                 "DI05", "DI06", "DI07", "DI08", 
                 "DI09", "DI10", "DI11", "DI12", 
                 "DI13", "DI14", "DI15", "DI16"];

var ABBDOPort = ["DO01", "DO02", "DO03", "DO04", 
                 "DO05", "DO06", "DO07", "DO08", 
                 "DO09", "DO10", "DO11", "DO12", 
                 "DO13", "DO14", "DO15", "DO16"];

var ABBGNDDIPort = ["GNDDIL", "GNDDIR"];

var ABBGNDDOPort = ["GNDDOL", "GNDDOR"];

var ABBPWRDOPort = ["PWRDOL", "PWRDOR"];

// COMAU Robot
var COMAUINPort = ["IN5",  "IN6",  "IN7",  "IN8",
                   "IN9",  "IN10", "IN11", "IN12", 
                   "IN13", "IN14", "IN15", "IN16"];

var COMAUOUTPort = ["OUT7",  "OUT8",  "OUT9",  "OUT10", 
                    "OUT11", "OUT12", "OUT13", "OUT14", 
                    "OUT15", "OUT16"];

// FANUC Robot                    
var FANUCDIPort = ["DI101", "DI102", "DI103", "DI104", 
                   "DI105", "DI106", "DI107", "DI108", 
                   "DI109", "DI110", "DI111", "DI112", 
                   "DI113", "DI114", "DI115", "DI116", 
                   "DI117", "DI118", "DI119", "DI120"];

var FANUCDOPort = ["DO101", "DO102", "DO103", "DO104", 
                   "DO105", "DO106", "DO107", "DO108"];

var FANUC0VPort = ["0VUL", "0VUR", "0VDL", "0VDR"];

var FANUC0VDPort = ["0VDL", "0VDR"];

var FANUC24FPort = ["24FUL", "24FUR", "24FDL", "24FDR"];

var FANUCSDIPort = ["SDICOM1", "SDICOM2"];

var FANUCDOSRCPort = ["DOSRC1L", "DOSRC1R"];

// KUKA Robot
var KUKADIPort = ["DI1",  "DI2",  "DI3",  "DI4", 
                  "DI5",  "DI6",  "DI7",  "DI8", 
                  "DI9",  "DI10", "DI11", "DI12", 
                  "DI13", "DI14", "DI15", "DI16"];

var KUKADOPort = ["DO1",  "DO2",  "DO3",  "DO4", 
                  "DO5",  "DO6",  "DO7",  "DO8", 
                  "DO9",  "DO10", "DO11", "DO12", 
                  "DO13", "DO14", "DO15", "DO16"];

var KUKAGNDDIPort = ["GNDDIL", "GNDDIR"];

var KUKAGNDDOPort = ["GNDDOL", "GNDDOR"];

var KUKA24VPort = ["24VL", "24VR"];

// OMRON Robot
var OMRONIN = ["In11", "In12", "In21", "In22", 
               "In31", "In32", "In41", "In42", 
               "In51", "In52", "In61", "In62"];

var OMRONOUT = ["OUT1", "OUT2", "OUT3", "OUT4", 
                "OUT5", "OUT6", "OUT7", "OUT8"];

var OMRONGND = ["GNDL", "GNDM"];

var OMRON24VDC = ["24VDCL", "24VDCM"];

var OMRONCommon = ["Common1", "Common2"];

export var ObjRndPool = {
                        PLCInputPort:       PLCInputPort,
                        PLCInput0To4Port:   PLCInput0To4Port,
                        PLCInput5To9Port:   PLCInput5To9Port,
                        PLCInput1357Port:   PLCInput1357Port,
                        PLCInput0246Port:   PLCInput0246Port,
                        PLCInputGNDPort:    PLCInputGNDPort,
                        PLCOutputPort:      PLCOutputPort,
                        PLCOutputDCPort:    PLCOutputDCPort,
                        ABBDIPort:          ABBDIPort,
                        ABBDOPort:          ABBDOPort,
                        ABBGNDDIPort:       ABBGNDDIPort,
                        ABBGNDDOPort:       ABBGNDDOPort,
                        ABBPWRDOPort:       ABBPWRDOPort,
                        COMAUINPort:        COMAUINPort,
                        COMAUOUTPort:       COMAUOUTPort,
                        FANUCDIPort:        FANUCDIPort,
                        FANUCDOPort:        FANUCDOPort,
                        FANUC0VPort:        FANUC0VPort,
                        FANUC0VDPort:       FANUC0VDPort,
                        FANUC24FPort:       FANUC24FPort,
                        FANUCSDIPort:       FANUCSDIPort,
                        FANUCDOSRCPort:     FANUCDOSRCPort,
                        KUKADIPort:         KUKADIPort,
                        KUKADOPort:         KUKADOPort,
                        KUKAGNDDIPort:      KUKAGNDDIPort,
                        KUKAGNDDOPort:      KUKAGNDDOPort,
                        KUKA24VPort:        KUKA24VPort,
                        OMRONIN:            OMRONIN,
                        OMRONOUT:           OMRONOUT,
                        OMRONGND:           OMRONGND,
                        OMRON24VDC:         OMRON24VDC,
                        OMRONCommon:        OMRONCommon
}

export var ObjRndPoolName = {
                                PLCInputPort:       "IN-RND",
                                PLCInput0To4Port:   "IN-RND0TO4",
                                PLCInput5To9Port:   "IN-RND5TO9",
                                PLCInputGNDPort:    "GNDRND",
                                PLCOutputPort:      "OUT-RND",
                                PLCOutputDCPort:    "DC-RND",
                                ABBDIPort:          "DI-RND",
                                ABBDOPort:          "DO-RND",
                                ABBGNDDIPort:       "GNDDI-RND",
                                ABBGNDDOPort:       "GNDDO-RND",
                                ABBPWRDOPort:       "PWRDO-RND",
                                COMAUINPort:        "COMAU-IN-RND",
                                COMAUOUTPort:       "COMAU-OUT-RND",
                                FANUCDIPort:        "DI-RND",
                                FANUCDOPort:        "DO-RND",
                                FANUC0VPort:        "0V-RND",
                                FANUC0VDPort:       "0VD-RND",
                                FANUC24FPort:       "24F-RND",
                                FANUCSDIPort:       "SDICOM-RND",
                                FANUCDOSRCPort:     "DOSRC1-RND",
                                KUKADIPort:         "DI-RND",
                                KUKADOPort:         "DO-RND",
                                KUKAGNDDIPort:      "GNDDI-RND",
                                KUKAGNDDOPort:      "GNDDO-RND",
                                KUKA24VPort:        "24V-RND",
                                OMRONIN:            "OMRON-IN-RND", 
                                OMRONOUT:           "OMRON-OUT-RND",
                                OMRONGND:           "GND-RND",
                                OMRON24VDC:         "24VDC-RND",
                                OMRONCommon:        "Common-RND"
}

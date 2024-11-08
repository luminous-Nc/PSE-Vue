// other static paremeters

export { DictModuleLink, DictModuleRank, topicLoaded, ReEnterFlag}

// initialize modules' hyper link
const DictModuleLink = {    
                        "Inputs"            : "http://128.194.119.24/tutorial?topic=1",
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
const DictModuleRank = {    
                        "Inputs"            : 1,
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
                        
// modules and keys' dictionary
var topicLoaded = false
var ReEnterFlag = false;
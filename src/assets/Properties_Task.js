// -------------------------
// dynamic parameters  
// -------------------------
    
// module position
var P1Port = {
                "PLCInput":{
                                x:150, y:100, Port: [RndPort, RndPort]
                            },  

                "24VDC":    {
                                x:650, y:500, Port: ["24VP", "24VN"]
                            },  

                "Switch":   {
                                x:650, y:200, Port: ["SWL", "SWR"]
                            }
            }

var P2Port = {
                "PLCOutput":{
                                x:450, y:100, Port: [RndPort, RndPort],
                            },

                "24VDC":    {
                                x:250, y:600, Port: ["24VP", "24VN"]
                            },

                "Motor":    {
                                x:150, y:150, Port: ["MTL", "MTR"]
                            }
            }

var P3Port = {
                "PLCInput": {
                                x:100, y:100, Port: [RndPort, RndPort]
                            },

                "Relay":    {
                                x:550, y:150, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
                            },

                "PNP":      {
                                x:800, y:200, Port: ["PNPB", "PNPE", "PNPC"]
                            },

                "24VDC":    {
                                x:550, y:550, Port: ["24VP", "24VN"]
                            },

                "48VDC":    {
                                x:800, y:560, Port: ["48VP", "48VN"]
                            }
            };

var P4Port = {
                "PLCInput":{
                                x:500, y:150, Port: [RndPort, RndPort]
                            },

                "Optical":  {
                                x:200, y:300, Port: ["OPUL", "OPUR", "OPDL", "OPDR"]
                            },

                "5VDC":     {
                                x:80, y:520, Port: ["5VP", "5VN"]
                            },

                "24VDC":    {
                                x:700, y:650, Port: ["24VP", "24VN"]
                            }
            };

var P5Port = {
                "ABBRobot": {
                                x:100, y:100, Port: [RndPort, RndPort]
                            },

                "Relay":    {
                                x:400, y:250, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
                            },

                "Sensor":   {
                                x:650, y:120, Port: ["SL", "SR"]
                            },

                "5VDC":     {
                                x:700, y:550, Port: ["5VP", "5VN"]
                            },

                "24VDC":    {
                                x:400, y:600, Port: ["24VP", "24VN"]
                            }
            };

var P6Port = {
                "COMAURobot":{
                                x:100, y:100, Port: [RndPort, "0VDC"]
                            },

                "Sensor":   {
                                x:650, y:120, Port: ["SL", "SR"]
                            },   

                "24VDC":    {
                                x:400, y:600, Port: ["24VP", "24VN"]
                            }            

            };

var P7Port = {
                "FANUCRobot":{
                                x:450, y:120, Port: [RndPort, RndPort, RndPort, RndPort]               
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            }  

            };

var P8Port = {
                "KUKARobot":{
                                x:450, y:120, Port: [RndPort, RndPort]
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            },   

                "24VDC":    {
                                x:100, y:600, Port: ["24VP", "24VN"]
                            }       
            };

var P9Port = {
                "OMRONRobot":{
                                x:350, y:220, Port: [RndPort, RndPort, RndPort, RndPort]               
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            }  
            };

var P10Port = {
                "ABBRobot":{
                                x:150, y:120, Scale: 1.2, Port: [RndPort, RndPort, RndPort]                        
                            },

                "PLCInput":{
                                x:650, y:300, Scale: 0.7, Port: [RndPort, RndPort]                              
                            },

                "24VDC":    {
                                x:450, y:400, Port: ["24VP", "24VN"]
                            }  
            };

var P11Port = {
                "COMAURobot":{
                                x:600, y:120, Scale: 1.2, Port: [RndPort, "24VDC", "0VDC"]                 
                            },

                "PLCInput":{
                                x:200, y:200, Scale: 0.7, Port: [RndPort, RndPort]        
                            }
            };

var P12Port = {
                "FANUCRobot":       {
                                        x:100, y:120, Scale: 1.2, Port: [RndPort, RndPort, RndPort]                     
                                    },

                "PLCInput":         {
                                        x:500, y:300, Scale: 0.5, Port: [RndPort, RndPort, "IN-8", "IN-9"]    
                                    },

                "24VDC":            {
                                        x:750, y:400, Port: ["24VP", "24VN"]
                                    },

                "ButtonStart":      {
                                        x:650, y:80, Port: ["BTSTRL", "BTSTRR"]
                                    },

                "ButtonMotorStop":  {
                                        x:650, y:180, Port: ["BTMSTPL", "BTMSTPR"]
                                    },
            };

var P13Port = {
                "KUKARobot":{
                                x:600, y:120, Port: [RndPort, RndPort, RndPort],
                                Scale: 1.2               
                            },

                "PLCInput":{
                                x:200, y:200, Scale: 0.7, Port: [RndPort, RndPort]
                                
                            },
            };

var P14Port = {
                "OMRONRobot":{
                                x:80, y:220, Scale: 1.2, Port: [RndPort, RndPort]                  
                            },

                "PLCInput":{
                                x:500, y:300, Scale: 0.7, Port: [RndPort, RndPort, RndPort]
                                
                            },

                "ButtonStart":{
                                x:700, y:100, Port: ["BTSTRL", "BTSTRR"]
                            },

                "24VDC":    {
                                x:800, y:250, Port: ["24VP", "24VN"]
                            },
            };


var DictModule = {
                    P1: P1Port,   P2: P2Port,   P3: P3Port,   P4: P4Port,
                    P5: P5Port,   P6: P6Port,   P7: P7Port,   P8: P8Port,
                    P9: P9Port,   P10: P10Port, P11: P11Port, P12: P12Port,
                    P13: P13Port, P14: P14Port
                };

// connecting keys
var DictKeys = {
                    P1:  [[RndPort, "SWL"], [RndPort, "24VN"], ["SWR", "24VP"]], 
                    P2:  [[RndPort, "MTR"], [RndPort, "24VN"], ["MTL", "24VP"]],
                    P3:  [[RndPort, "RLSWU"], [RndPort, "24VN"], ["RLSWDR", "24VP"], 
                          ["RLCU", "PNPE"],   ["RLCD", "PNPC"],  ["PNPB", "48VP"],
                          ["PNPC", "48VN"]],
                    P4:  [[RndPort, "OPUR"], [RndPort, "24VN"], ["24VP", "OPDR"],
                          ["5VP", "OPUL"],   ["5VN", "OPDL"]],
                    P5:  [[RndPort, "RLSWU"], [RndPort, "24VN"], ["24VP", "RLSWDR"], 
                          ["5VN", "SR"],      ["5VP", "RLCD"],   ["SL", "RLCU"]],
                    P6:  [[RndPort, "24VP"], ["24VN", "SR"], ["SL", "0VDC"]],
                    P7:  [[RndPort, "SL"], [RndPort, "SR"], [RndPort, RndPort]],
                    P8:  [[RndPort, "SR"], ["SL", "24VP"], ["24VN", RndPort]],
                    P9:  [[RndPort, "SL"], ["SR", RndPort], [RndPort, RndPort]],
                    P10: [[RndPort, RndPort], [RndPort, "24VN"], [RndPort, "24VN"],
                          ["24VP", RndPort]],
                    P11: [[RndPort, "24VDC"], [RndPort, "0VDC"], [RndPort, RndPort]],
                    P12: [[RndPort, RndPort],  ["IN-8", "BTSTRL"], ["BTSTRR", "24VP"],
                          ["IN-9", "BTMSTPL"], ["BTMSTPR", "24VP"], [RndPort, "24VP"],
                          ["24VN", RndPort],   ["24VN", RndPort]],
                    P13: [[RndPort, RndPort], [RndPort, RndPort], [RndPort, RndPort]],
                    P14: [[RndPort, RndPort],  [RndPort, "24VN"], [RndPort, "24VN"],
                          [RndPort, "BTSTRL"], ["BTSTRR", "24VP"]]
                };

var P134RND =   [ 
                    {
                        Module: "PLCInput", PortPool: PLCInputPort, 
                        PortIndex: 0, KeyIndex: [0, 0]
                    },

                    {
                        Module: "PLCInput", PortPool: PLCInputGNDPort, 
                        PortIndex: 1, KeyIndex: [1, 0]
                    }
                ];

var P2RND = [ 
                {
                    Module: "PLCOutput", PortPool: PLCOutputPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "PLCOutput", PortPool: PLCOutputDCPort, 
                    PortIndex: 1, KeyIndex: [1, 0]
                }
            ];

var P5RND = [ 
                {
                    Module: "ABBRobot", PortPool: ABBDIPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "ABBRobot", PortPool: ABBGNDDIPort, 
                    PortIndex: 1, KeyIndex: [1, 0]
                }
            ];

var P6RND = [ 
                {
                    Module: "COMAURobot", PortPool: COMAUINPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                }
            ];

var P7RND = [ 
                {
                    Module: "FANUCRobot", PortPool: FANUCDIPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "FANUCRobot", PortPool: FANUC24FPort, 
                    PortIndex: 1, KeyIndex: [1, 0]
                },

                {
                    Module: "FANUCRobot", PortPool: FANUCSDIPort, 
                    PortIndex: 2, KeyIndex: [2, 0]
                },

                {
                    Module: "FANUCRobot", PortPool: FANUC0VPort, 
                    PortIndex: 3, KeyIndex: [2, 1]
                }
            ];

var P8RND = [ 
                {
                    Module: "KUKARobot", PortPool: KUKADIPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "KUKARobot", PortPool: KUKAGNDDIPort, 
                    PortIndex: 1, KeyIndex: [2, 1]
                }
            ];

var P9RND = [ 
                {
                    Module: "OMRONRobot", PortPool: OMRONIN, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "OMRONRobot", PortPool: OMRONGND, 
                    PortIndex: 1, KeyIndex: [1, 1]
                },

                {
                    Module: "OMRONRobot", PortPool: OMRON24VDC, 
                    PortIndex: 2, KeyIndex: [2, 0]
                },

                {
                    Module: "OMRONRobot", PortPool: OMRONCommon, 
                    PortIndex: 3, KeyIndex: [2, 1]
                }
            ];

var P10RND = [ 
                {
                    Module: "ABBRobot", PortPool: ABBDOPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "ABBRobot", PortPool: ABBGNDDOPort, 
                    PortIndex: 1, KeyIndex: [2, 0]
                },

                {
                    Module: "ABBRobot", PortPool: ABBPWRDOPort, 
                    PortIndex: 2, KeyIndex: [3, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputPort, 
                    PortIndex: 0, KeyIndex: [0, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputGNDPort, 
                    PortIndex: 1, KeyIndex: [1, 0]
                }
            ];

var P11RND = [ 
                {
                    Module: "COMAURobot", PortPool: COMAUOUTPort, 
                    PortIndex: 0, KeyIndex: [2, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputGNDPort, 
                    PortIndex: 1, KeyIndex: [1, 0], KeyIndexEx: [2, 0]
                }
            ];

var P12RND = [ 
                {
                    Module: "FANUCRobot", PortPool: FANUCDOPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "FANUCRobot", PortPool: FANUC0VDPort, 
                    PortIndex: 1, KeyIndex: [6, 1]
                },

                {
                    Module: "FANUCRobot", PortPool: FANUCDOSRCPort, 
                    PortIndex: 2, KeyIndex: [5, 0]
                },

                {
                    Module: "PLCInput", PortPool: PLCInput0To4Port, 
                    PortIndex: 0, KeyIndex: [0, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputGNDPort, 
                    PortIndex: 1, KeyIndex: [7, 1]
                }
            ];
            
var P13RND = [ 
                {
                    Module: "KUKARobot", PortPool: KUKADOPort, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "KUKARobot", PortPool: KUKAGNDDOPort, 
                    PortIndex: 1, KeyIndex: [1, 0]
                },

                {
                    Module: "KUKARobot", PortPool: KUKA24VPort, 
                    PortIndex: 2, KeyIndex: [2, 0]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputPort, 
                    PortIndex: 0, KeyIndex: [2, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputGNDPort, 
                    PortIndex: 1, KeyIndex: [0, 1], KeyIndexEx: [1, 1]
                }
            ]; 
            
var P14RND = [ 
                {
                    Module: "OMRONRobot", PortPool: OMRONOUT, 
                    PortIndex: 0, KeyIndex: [0, 0]
                },

                {
                    Module: "OMRONRobot", PortPool: OMRONGND, 
                    PortIndex: 1, KeyIndex: [1, 0]
                },

                {
                    Module: "PLCInput", PortPool: PLCInput0To4Port, 
                    PortIndex: 0, KeyIndex: [0, 1]
                },

                {
                    Module: "PLCInput", PortPool: PLCInput5To9Port, 
                    PortIndex: 1, KeyIndex: [3, 0]
                },

                {
                    Module: "PLCInput", PortPool: PLCInputGNDPort, 
                    PortIndex: 2, KeyIndex: [2, 0]
                }
            ];                                  

var DictRndPort =   {
                        P1:  P134RND, P2:  P2RND,  P3:  P134RND, P4:  P134RND,
                        P5:  P5RND,   P6:  P6RND,  P7:  P7RND,   P8:  P8RND, 
                        P9:  P9RND,   P10: P10RND, P11: P11RND,  P12: P12RND,  
                        P13: P13RND,  P14: P14RND
                    }
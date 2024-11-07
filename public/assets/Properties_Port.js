// all modules' ports relative coordinates
export const DictObjPort = { 
                        // ABB robot
                        "ABBRobot": {              
                                        "PWRDOL": {x:7, y:33},   "PWRDOR": {x:170, y:33},
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

                                        "0VDC":       {x:160, y:37}, 
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

                                        "DO101":  {x:5, y:356}, "DO102":  {x:242, y:356},
                                        "DO103":  {x:5, y:377}, "DO104":  {x:242, y:377},
                                        "DO105":  {x:5, y:401}, "DO106":  {x:242, y:401},
                                        "DO107":  {x:5, y:423}, "DO108":  {x:242, y:423},

                                        "DOSRC1L": {x:7, y:469}, "DOSRC1R": {x:242, y:469},
                        },

                        // KUKA robot
                        "KUKARobot": {
                                        "24VL":  {x:5, y:32},  "24VR":  {x:160, y:32}, 

                                        "GNDDOL": {x:5, y:56},  "GNDDOR": {x:160, y:56},
                                        "DO1":  {x:5, y:82},   "DO9":   {x:160, y:82},  
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
                                        "GNDDIL": {x:7, y:478}, "GNDDIR": {x:160, y:478}
                        },

                        // OMRON robot
                        "OMRONRobot": {
                                        "GNDL":     {x:50, y:7},  "GNDM":     {x:150, y:7},  "OUT1": {x:296, y:23}, 
                                        "24VDCL":   {x:5, y:72},  "24VDCM":   {x:108, y:88}, "OUT2": {x:296, y:72}, 
                                        "Common1": {x:5, y:120},  "Common2": {x:108, y:120}, "OUT3": {x:296, y:120},  
                                        "In11": {x:5, y:167},     "In12": {x:108, y:182},    "OUT4":  {x:296, y:167},  
                                        "In21": {x:5, y:214},     "In22": {x:108, y:229},    "OUT5":  {x:296, y:214}, 
                                        "In31": {x:5, y:262},     "In32": {x:108, y:277},    "OUT6":  {x:296, y:262}, 
                                        "In41": {x:5, y:311},     "In42": {x:108, y:326},    "OUT7":  {x:296, y:311}, 
                                        "In51": {x:5, y:360},     "In52": {x:108, y:375},    "OUT8":  {x:296, y:360}, 
                                        "In61": {x:5, y:408},     "In62": {x:108, y:422}, 
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
                        
                        "240VDC": {
                                    "240VP": {x:22, y:4}, 
                                    "240VN": {x:60, y:4}
                        },

                        // sensor
                        "Sensor": {
                                    "SL": {x:6, y:30}, 
                                    "SR": {x:148, y:30}
                        },

                        "LSensor": {
                                    "LSL": {x:4, y:23}, 
                                    "LSR": {x:106, y:23}
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

                        "Convey": {
                                    "CVL": {x:4, y:23}, 
                                    "CVR": {x:106, y:23}
                        },

                        // button
                        "ButtonStart":{
                                        "BTSTRL": {x:1, y:53}, 
                                        "BTSTRR": {x:83, y:53}
                        },

                        "ButtonMotorStop": {
                                        "BTMSTPL": {x:1, y:34}, 
                                        "BTMSTPR": {x:83, y:34}
                        },
                        
                        // PLC input
                        "PLCInput": {
                                        "IN-1": {x:150, y:65},    "IN-0": {x:228, y:65},
                                        "IN-3": {x:150, y:115},   "IN-2": {x:228, y:115},
                                        "IN-5": {x:150, y:165},   "IN-4": {x:228, y:165},
                                        "IN-7": {x:150, y:213},   "IN-6": {x:228, y:213},
                                        "GNDPLCL": {x:150, y:263}, "GNDPLCR": {x:228, y:263},
                       
                                        "Bound": {wl: 80, wr: 70, hu: 5, hd: 5}
                        },

                        // "PLCInput(New)": {
                        //                     "IN-0": {x:71, y:373},  "IN-1": {x:115, y:373},
                        //                     "IN-2": {x:158, y:373}, "IN-3": {x:202, y:373},
                        //                     "IN-4": {x:245, y:373}, 
                        //                     "IN-5": {x:71, y:39},   "IN-6": {x:115, y:39},  
                        //                     "IN-7": {x:158, y:39},  "IN-8": {x:202, y:39},  
                        //                     "IN-9": {x:245, y:39},
                        //                     "GNDINU": {x:289, y:39}, "GNDIND": {x:289, y:373},
                        // },

                        // PLC output
                        "PLCOutput" :{
                                        "DC-0": {x:156, y:65},  "OUT-0": {x:235, y:65},
                                        "DC-1": {x:156, y:115}, "OUT-1": {x:235, y:115},
                                        "DC-2": {x:156, y:165}, "OUT-2": {x:235, y:165},
                                        "DC-3": {x:156, y:213}, "OUT-3": {x:235, y:213},
                                        "DC-4": {x:156, y:263}, "OUT-4": {x:235, y:263},
                        
                                        "Bound": {wl: 85, wr: 70, hu: 5, hd: 5}
                        },

                        // "PLCOutput(New)" :{
                        //                     "DC-00": {x:75, y:374},  "DC-01": {x:119, y:374},
                        //                     "DC-02": {x:163, y:374}, "DC-03": {x:205, y:374},
                        //                     "DC-04": {x:250, y:374}, "DC-05": {x:293, y:374}, 
                        //                     "OUT-0":  {x:75, y:40},  "OUT-1":  {x:119, y:40},
                        //                     "OUT-2":  {x:163, y:40}, "OUT-3":  {x:205, y:40},
                        //                     "OUT-4":  {x:250, y:40}, "OUT-5":  {x:293, y:40},
                        // },
                    
                        // legend
                        "Legend": {x:750, y:10}
                    };
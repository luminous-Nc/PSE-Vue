
export { PortPos, OtherPos };

// const SimpleCirclePos = {
//                                 "L": {x: 3, y: 23},
//                                 "R": {x: 98, y: 23}
//                         }
// all modules' ports relative coordinates
const PortPos = { 
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

                        "ABBRobotS": {              
                                        "ABBSPWRDOL": {x:7, y:33},   "ABBSPWRDOR": {x:170, y:33},
                                        "ABBSGNDDOL": {x:7, y:56},   "ABBSGNDDOR": {x:170, y:56},
                                        "ABBSDO01":   {x:7, y:78},   "ABBSDO02":   {x:170, y:102},
                                        "ABBSGNDDIL": {x:7, y:103},  "ABBSGNDDIR": {x:170, y:103}, 
                                        "ABBSDI01":   {x:7, y:127},  "ABBSDI02":   {x:170, y:127},                             
                                        "Bound": {wl: 0, wr: 0, hu: 30, hd: 10} 
                        },

                        "ABBRobotS1": {              
                                        "ABBS1PWRDOL": {x:7, y:33},   "ABBS1PWRDOR": {x:170, y:33},
                                        "ABBS1GNDDOL": {x:7, y:56},   "ABBS1GNDDOR": {x:170, y:56},
                                        "ABBS1DO01":   {x:7, y:78},   "ABBS1DO02":   {x:170, y:102},
                                        "ABBS1GNDDIL": {x:7, y:103},  "ABBS1GNDDIR": {x:170, y:103}, 
                                        "ABBS1DI01":   {x:7, y:127},  "ABBS1DI02":   {x:170, y:127},  
                                        "Bound": {wl: 0, wr: 0, hu: 30, hd: 10}                             
                        },

                        "ABBRobotS2": {              
                                        "ABBS2PWRDOL": {x:7, y:33},   "ABBS2PWRDOR": {x:170, y:33},
                                        "ABBS2GNDDOL": {x:7, y:56},   "ABBS2GNDDOR": {x:170, y:56},
                                        "ABBS2DO01":   {x:7, y:78},   "ABBS2DO02":   {x:170, y:102},
                                        "ABBS2GNDDIL": {x:7, y:103},  "ABBS2GNDDIR": {x:170, y:103}, 
                                        "ABBS2DI01":   {x:7, y:127},  "ABBS2DI02":   {x:170, y:127},  
                                        "Bound": {wl: 0, wr: 0, hu: 30, hd: 10}                            
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
                                        "RLCU":     {x:144, y:4}, 
                                        "RLCD":     {x:144, y:203},
                                        "RLSWU":    {x:46, y:4}, 
                                        "RLSWDL":   {x:28, y:203},
                                        "RLSWDR":   {x:72, y:203}
                        },

                        "Relay1": {
                                        "RLCU1":    {x:80, y:1}, 
                                        "RLCD1":    {x:80, y:114},
                                        "RLSWU1":   {x:24, y:1}, 
                                        "RLSWDL1":  {x:14, y:114},
                                        "RLSWDR1":  {x:39, y:114}
                        },

                        "Relay2": {
                                        "RLCU2":    {x:80, y:1}, 
                                        "RLCD2":    {x:80, y:114},
                                        "RLSWU2":   {x:24, y:1}, 
                                        "RLSWDL2":  {x:14, y:114},
                                        "RLSWDR2":  {x:39, y:114}
                        },

                        "Relay3": {
                                        "RLCU3":    {x:80, y:1}, 
                                        "RLCD3":    {x:80, y:114},
                                        "RLSWU3":   {x:24, y:1}, 
                                        "RLSWDL3":  {x:14, y:114},
                                        "RLSWDR3":  {x:39, y:114}
                        },

                        "Relay4": {
                                        "RLCU4":    {x:80, y:1}, 
                                        "RLCD4":    {x:80, y:114},
                                        "RLSWU4":   {x:24, y:1}, 
                                        "RLSWDL4":  {x:14, y:114},
                                        "RLSWDR4":  {x:39, y:114}
                        },

                        "Relay5": {
                                        "RLCU5":    {x:80, y:1}, 
                                        "RLCD5":    {x:80, y:114},
                                        "RLSWU5":   {x:24, y:1}, 
                                        "RLSWDL5":  {x:14, y:114},
                                        "RLSWDR5":  {x:39, y:114}
                        },

                        "Relay6": {
                                        "RLCU6":    {x:80, y:1}, 
                                        "RLCD6":    {x:80, y:114},
                                        "RLSWU6":   {x:24, y:1}, 
                                        "RLSWDL6":  {x:14, y:114},
                                        "RLSWDR6":  {x:39, y:114}
                        },

                        "Relay7": {
                                        "RLCU7":    {x:80, y:1}, 
                                        "RLCD7":    {x:80, y:114},
                                        "RLSWU7":   {x:24, y:1}, 
                                        "RLSWDL7":  {x:14, y:114},
                                        "RLSWDR7":  {x:39, y:114}
                        },

                        "Relay8": {
                                        "RLCU8":    {x:80, y:1}, 
                                        "RLCD8":    {x:80, y:114},
                                        "RLSWU8":   {x:24, y:1}, 
                                        "RLSWDL8":  {x:14, y:114},
                                        "RLSWDR8":  {x:39, y:114}
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
                        
                        "24VDCS": {
                                        "24VPS": {x:3, y:80}, 
                                        "24VNS": {x:142, y:80},
                                        "Bound": {wl: 0, wr: 0, hu: 50, hd: 12}
                        },

                        "48VDC": {
                                        "48VP": {x:29, y:7}, 
                                        "48VN": {x:75, y:7}
                        },

                        "120VDC": {
                                        "120VP": {x:22, y:4}, 
                                        "120VN": {x:60, y:4}
                        },

                        "120VDCS": {
                                        "120VPS": {x:3, y:80}, 
                                        "120VNS": {x:142, y:80},
                                        "Bound": {wl: 0, wr: 0, hu: 50, hd: 12}
                        },  

                        "230VDCS": {
                                        "230VPS": {x:3, y:80}, 
                                        "230VNS": {x:142, y:80},
                                        "Bound": {wl: 0, wr: 0, hu: 50, hd: 12}
                        },          

                        "240VDC": {
                                        "240VP": {x:22, y:4}, 
                                        "240VN": {x:60, y:4}
                        },

                        "400VDCS": {
                                        "400VPS": {x:3, y:80}, 
                                        "400VNS": {x:142, y:80},
                                        "Bound": {wl: 0, wr: 0, hu: 50, hd: 12}
                        },          

                        // sensor
                        "Sensor": {
                                        "SL": {x:6, y:30}, 
                                        "SR": {x:148, y:30}
                        },
                       
                        "PressureSensor": {
                                                "PRESL": {x:4, y:41}, 
                                                "PRESR": {x:137, y:41}
                        },

                        // proximity sensor
                        "ProximitySensor": {
                                                "PROSL": {x:4, y:41}, 
                                                "PROSR": {x:137, y:41}
                        },

                        "ProS1": {
                                        "BR1": {x:132, y:18}, 
                                        "BK1": {x:132, y:55},
                                        "BL1": {x:150, y:92},
                                        "Bound": {wl: 10, wr: 25, hu: 20, hd: 20}
                        },
                        
                        "ProS2": {
                                        "BR2": {x:132, y:18}, 
                                        "BK2": {x:132, y:55},
                                        "BL2": {x:150, y:92},
                                        "Bound": {wl: 10, wr: 25, hu: 20, hd: 20}
                        },
                
                        "ProS3": {
                                        "BR3": {x:132, y:18}, 
                                        "BK3": {x:132, y:55},
                                        "BL3": {x:150, y:92},
                                        "Bound": {wl: 10, wr: 25, hu: 20, hd: 20}
                        },
        
                        "ProS4": {
                                        "BR4": {x:132, y:18}, 
                                        "BK4": {x:132, y:55},
                                        "BL4": {x:150, y:92},
                                        "Bound": {wl: 10, wr: 25, hu: 20, hd: 20}
                        },

                        // thermocouple sensor
                        "THC": {
                                        "THC-1": {x:68, y:66},  "THC-6":  {x:214, y:66},
                                        "THC-2": {x:68, y:102}, "THC-7":  {x:214, y:102},
                                        "THC-3": {x:68, y:138}, "THC-8":  {x:214, y:138},
                                        "THC-4": {x:68, y:175}, "THC-9":  {x:214, y:175},
                                        "THC-5": {x:68, y:211}, "THC-10": {x:214, y:211},                       
                                        "Bound": {wl: 60, wr: 110, hu: 50, hd: 30}
                                },

                        "THC1": {
                                        "THC1-1": {x:68, y:66},  "THC1-6":  {x:214, y:66},
                                        "THC1-2": {x:68, y:102}, "THC1-7":  {x:214, y:102},
                                        "THC1-3": {x:68, y:138}, "THC1-8":  {x:214, y:138},
                                        "THC1-4": {x:68, y:175}, "THC1-9":  {x:214, y:175},
                                        "THC1-5": {x:68, y:211}, "THC1-10": {x:214, y:211},                       
                                        "Bound": {wl: 60, wr: 110, hu: 50, hd: 30}
                        },

                        "THC2": {
                                        "THC2-1": {x:68, y:66},  "THC2-6":  {x:214, y:66},
                                        "THC2-2": {x:68, y:102}, "THC2-7":  {x:214, y:102},
                                        "THC2-3": {x:68, y:138}, "THC2-8":  {x:214, y:138},
                                        "THC2-4": {x:68, y:175}, "THC2-9":  {x:214, y:175},
                                        "THC2-5": {x:68, y:211}, "THC2-10": {x:214, y:211},                       
                                        "Bound": {wl: 60, wr: 110, hu: 50, hd: 30}
                        },

                        // optical sensor
                        "OPS": {
                                        "OPS-VP":  {x:217, y:11}, 
                                        "OPS-NC":  {x:215, y:35},
                                        "OPS-COM": {x:215, y:66},
                                        "OPS-NO":  {x:218, y:92},
                                        "OPS-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS1": {
                                        "OPS1-VP":  {x:217, y:11}, 
                                        "OPS1-NC":  {x:215, y:35},
                                        "OPS1-COM": {x:215, y:66},
                                        "OPS1-NO":  {x:218, y:92},
                                        "OPS1-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS2": {
                                        "OPS2-VP":  {x:217, y:11}, 
                                        "OPS2-NC":  {x:215, y:35},
                                        "OPS2-COM": {x:215, y:66},
                                        "OPS2-NO":  {x:218, y:92},
                                        "OPS2-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS3": {
                                        "OPS3-VP":  {x:217, y:11}, 
                                        "OPS3-NC":  {x:215, y:35},
                                        "OPS3-COM": {x:215, y:66},
                                        "OPS3-NO":  {x:218, y:92},
                                        "OPS3-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS4": {
                                        "OPS4-VP":  {x:217, y:11}, 
                                        "OPS4-NC":  {x:215, y:35},
                                        "OPS4-COM": {x:215, y:66},
                                        "OPS4-NO":  {x:218, y:92},
                                        "OPS4-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS5": {
                                        "OPS5-VP":  {x:217, y:11}, 
                                        "OPS5-NC":  {x:215, y:35},
                                        "OPS5-COM": {x:215, y:66},
                                        "OPS5-NO":  {x:218, y:92},
                                        "OPS5-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },

                        "OPS6": {
                                        "OPS6-VP":  {x:217, y:11}, 
                                        "OPS6-NC":  {x:215, y:35},
                                        "OPS6-COM": {x:215, y:66},
                                        "OPS6-NO":  {x:218, y:92},
                                        "OPS6-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },   
                        
                        "OPS7": {
                                        "OPS7-VP":  {x:217, y:11}, 
                                        "OPS7-NC":  {x:215, y:35},
                                        "OPS7-COM": {x:215, y:66},
                                        "OPS7-NO":  {x:218, y:92},
                                        "OPS7-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },  

                        "OPS8": {
                                        "OPS8-VP":  {x:217, y:11}, 
                                        "OPS8-NC":  {x:215, y:35},
                                        "OPS8-COM": {x:215, y:66},
                                        "OPS8-NO":  {x:218, y:92},
                                        "OPS8-VN":  {x:218, y:118},
                                        "Bound": {wl: 10, wr: 65, hu: 10, hd: 10}
                        },  

                        // light
                        "Light": {
                                        "LTU": {x:22, y:4}, 
                                        "LTD": {x:22, y:90}
                        },

                        // solenoid
                        "SolA": {
                                        "SAU": {x:22, y:4}, 
                                        "SAD": {x:22, y:90}
                        },
                        
                        "SolB": {
                                        "SBU": {x:22, y:4}, 
                                        "SBD": {x:22, y:90}
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

                        "SwitchSP1": {
                                        "SWSPL1": {x: 1, y: 19},
                                        "SWSPR1": {x: 69, y: 19}
                        },

                        "SwitchSP2": {
                                        "SWSPL2": {x: 1, y: 19},
                                        "SWSPR2": {x: 69, y: 19}
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
                        
                        // simple letter
                        "L": {
                                "LL": {x: 3, y: 23},
                                "LR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },
                        // "L": {
                        //         "LL": SimpleCirclePos.L,
                        //         "LR": SimpleCirclePos.R,
                        //         "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        // },
                        
                        "La": {
                                "LaL": {x: 3, y: 23},
                                "LaR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "LS":   {
                                "LSL": {x:3, y:23}, 
                                "LSR": {x:98, y:23}
                        },

                        "V": {
                                "VL": {x: 3, y: 23},
                                "VR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "V1": {
                                "V1L": {x: 3, y: 23},
                                "V1R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "V2": {
                                "V2L": {x: 3, y: 23},
                                "V2R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "O": {
                                "OL": {x: 3, y: 23},
                                "OR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "F": {
                                "FL": {x: 3, y: 23},
                                "FR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "FM": {
                                "FMU": {x: 22, y: 4},
                                "FMD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C": {
                                "CL": {x: 3, y: 23},
                                "CR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C1": {
                                "C1L": {x: 3, y: 23},
                                "C1R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C2": {
                                "C2L": {x: 3, y: 23},
                                "C2R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C3": {
                                "C3L": {x: 3, y: 23},
                                "C3R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C4": {
                                "C4L": {x: 3, y: 23},
                                "C4R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C5": {
                                "C5L": {x: 3, y: 23},
                                "C5R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "C6": {
                                "C6L": {x: 3, y: 23},
                                "C6R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },
                        
                        "Co": {
                                "CoL": {x: 3, y: 23},
                                "CoR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "Cf": {
                                "CfU": {x: 22, y: 4},
                                "CfD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "Ch": {
                                "ChU": {x: 22, y: 4},
                                "ChD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "Cn": {
                                "CnU": {x: 22, y: 4},
                                "CnD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "Cb": {
                                "CbU": {x: 22, y: 4},
                                "CbD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "CP": {
                                "CPU": {x: 22, y: 4},
                                "CPD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "CNCM": {
                                "CNCML": {x: 3, y: 23},
                                "CNCMR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "DM": {
                                "DML": {x: 3, y: 23},
                                "DMR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "GM": {
                                "GML": {x: 3, y: 23},
                                "GMR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "R": {
                                "RU": {x: 22, y: 4}, 
                                "RD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "RT": {
                                "RTU": {x: 22, y: 4}, 
                                "RTD": {x: 22, y: 90},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "S": {
                                "SL": {x: 3, y: 23},
                                "SR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "M": {
                                "MU": {x: 22, y: 4},
                                "MD": {x: 22, y: 90}
                        },

                        "P": {
                                "PL": {x: 3, y: 23},
                                "PR": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "P1": {
                                "P1L": {x: 3, y: 23},
                                "P1R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },

                        "P2": {
                                "P2L": {x: 3, y: 23},
                                "P2R": {x: 98, y: 23},
                                "Bound": {wl: 0, wr: 0, hu: 10, hd: 10}
                        },                   

                        // PLC input
                        "PLCInput": {
                                        "IN-1": {x:150, y:65},    "IN-0": {x:228, y:65},
                                        "IN-3": {x:150, y:115},   "IN-2": {x:228, y:115},
                                        "IN-5": {x:150, y:165},   "IN-4": {x:228, y:165},
                                        "IN-7": {x:150, y:213},   "IN-6": {x:228, y:213},
                                        "GNDPLCL": {x:150, y:263}, "GNDPLCR": {x:228, y:263},
                        
                                        "Bound": {wl: 120, wr: 90, hu: 25, hd: 5}
                        },

                        "PLCInputAB": {
                                        "IN-1": {x:143, y:100},     "IN-0": {x:218, y:100},
                                        "IN-3": {x:143, y:160},     "IN-2": {x:218, y:160},
                                        "IN-5": {x:143, y:220},     "IN-4": {x:218, y:220},
                                        "IN-7": {x:143, y:281},     "IN-6": {x:218, y:281},
                                        "GND0PLCL": {x:143, y:342}, "GND0PLCR": {x:218, y:342},
                                        "IN-9":  {x:143, y:402},    "IN-8":  {x:218, y:402},
                                        "IN-11": {x:143, y:462},    "IN-10": {x:218, y:462},
                                        "IN-13": {x:143, y:523},    "IN-12": {x:218, y:523},
                                        "IN-15": {x:143, y:528},    "IN-14": {x:218, y:528},
                                        "GND1PLCL": {x:143, y:643}, "GND1PLCR": {x:218, y:643},
                        
                                        "Bound": {wl: 130, wr: 90, hu: 90, hd: 40}
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
                        
                                        "Bound": {wl: 125, wr: 90, hu: 25, hd: 5}
                        },

                        "PLCOutputAB" :{
                                        "DC-0": {x:186, y:76},      "OUT-0": {x:265, y:76},
                                        "DC-1": {x:186, y:140},     "OUT-1": {x:265, y:140},
                                        "DC-2": {x:186, y:203},     "OUT-2": {x:265, y:203},
                                        "DC-3": {x:186, y:268},     "OUT-3": {x:265, y:268},
                                        "RTNOUT0L": {x:186, y:330}, "RTNOUT0R": {x:265, y:330},
                                        "DC-4": {x:186, y:393},     "OUT-4": {x:265, y:393},
                                        "DC-5": {x:186, y:458},     "OUT-5": {x:265, y:458},
                                        "DC-6": {x:186, y:521},     "OUT-6": {x:265, y:521},
                                        "DC-7": {x:186, y:585},     "OUT-7": {x:265, y:585},
                                        "RTNOUT1L": {x:186, y:648}, "RTNOUT1R": {x:265, y:648},
                        
                                        "Bound": {wl: 160, wr: 130, hu: 70, hd: 20}
                        },

                        "PLCOutputAB1" :{
                                        "DC1-0": {x:186, y:92},      "OUT1-0": {x:265, y:92},
                                        "DC1-1": {x:186, y:156},     "OUT1-1": {x:265, y:156},
                                        "DC1-2": {x:186, y:219},     "OUT1-2": {x:265, y:219},
                                        "DC1-3": {x:186, y:284},     "OUT1-3": {x:265, y:284},
                                        "RTN1OUT0L": {x:186, y:346}, "RTN1OUT0R": {x:265, y:346},
                                        "DC1-4": {x:186, y:409},     "OUT1-4": {x:265, y:409},
                                        "DC1-5": {x:186, y:474},     "OUT1-5": {x:265, y:474},
                                        "DC1-6": {x:186, y:537},     "OUT1-6": {x:265, y:537},
                                        "DC1-7": {x:186, y:603},     "OUT1-7": {x:265, y:603},
                                        "RTN1OUT1L": {x:186, y:664}, "RTN1OUT1R": {x:265, y:664},
                        
                                        "Bound": {wl: 160, wr: 130, hu: 70, hd: 20}
                        },

                        "PLCOutputAB2" :{
                                        "DC2-0": {x:186, y:92},      "OUT2-0": {x:265, y:92},
                                        "DC2-1": {x:186, y:156},     "OUT2-1": {x:265, y:156},
                                        "DC2-2": {x:186, y:219},     "OUT2-2": {x:265, y:219},
                                        "DC2-3": {x:186, y:284},     "OUT2-3": {x:265, y:284},
                                        "RTN2OUT0L": {x:186, y:346}, "RTN2OUT0R": {x:265, y:346},
                                        "DC2-4": {x:186, y:409},     "OUT2-4": {x:265, y:409},
                                        "DC2-5": {x:186, y:474},     "OUT2-5": {x:265, y:474},
                                        "DC2-6": {x:186, y:537},     "OUT2-6": {x:265, y:537},
                                        "DC2-7": {x:186, y:603},     "OUT2-7": {x:265, y:603},
                                        "RTN2OUT1L": {x:186, y:664}, "RTN2OUT1R": {x:265, y:664},
                        
                                        "Bound": {wl: 160, wr: 130, hu: 70, hd: 20}
                        },

                        // "PLCOutput(New)" :{
                        //                     "DC-00": {x:75, y:374},  "DC-01": {x:119, y:374},
                        //                     "DC-02": {x:163, y:374}, "DC-03": {x:205, y:374},
                        //                     "DC-04": {x:250, y:374}, "DC-05": {x:293, y:374}, 
                        //                     "OUT-0":  {x:75, y:40},  "OUT-1":  {x:119, y:40},
                        //                     "OUT-2":  {x:163, y:40}, "OUT-3":  {x:205, y:40},
                        //                     "OUT-4":  {x:250, y:40}, "OUT-5":  {x:293, y:40},
                        // },

                        
                        "CNCController" :{
                                        "CNCIN-1": {x:91, y:56},  "CNCIN-0": {x:137, y:56},
                                        "CNCGND0L": {x:91, y:90}, "CNCGND0R": {x:137, y:90},
                                        "CNCDC-0": {x:91, y:119}, "CNCOUT-0": {x:137, y:119},
                                        "CNCDC-1": {x:91, y:156}, "CNCOUT-1": {x:137, y:156},

                                        "Bound": {wl: 80, wr: 60, hu: 35, hd: 10}
                        },

                        "DrillController" :{
                                        "DRILLIN-1": {x:91, y:56},   "DRILLIN-0": {x:137, y:56},
                                        "DRILLGND0L": {x:91, y:90},  "DRILLGND0R": {x:137, y:90},
                                        "DRILLDC-0": {x:91, y:119},  "DRILLOUT-0": {x:137, y:119},
                                        "DRILLDC-1": {x:91, y:156},  "DRILLOUT-1": {x:137, y:156},

                                        "Bound": {wl: 80, wr: 60, hu: 35, hd: 10}
                        },

                        "GrinderController" :{
                                        "GRIIN-1": {x:91, y:56},  "GRIIN-0": {x:137, y:56},
                                        "GRIGND0L": {x:91, y:90}, "GRIGND0R": {x:137, y:90},
                                        "GRIDC-0": {x:91, y:119}, "GRIOUT-0": {x:137, y:119},
                                        "GRIDC-1": {x:91, y:156}, "GRIOUT-1": {x:137, y:156},

                                        "Bound": {wl: 80, wr: 60, hu: 35, hd: 10}
                        }

                };

// other objects' relative coordinates
const OtherPos = {
                    // legend
                    "Legend": {x:750, y:10}
                }
// -------------------------
// dynamic parameters  
// -------------------------
    

export { DictModule };

// module position
const P1Port = {
                "PLCInput":{
                                x:150, y:100, Scale: 1.2, Port: ["", ""],
                                RndPort: [[0, [0, 0], "PLCInputPort"], 
                                          [1, [1, 0], "PLCInputGNDPort"]]
                            },  

                "24VDC":    {
                                x:650, y:500, Port: ["24VP", "24VN"]
                            },  

                "Switch":   {
                                x:650, y:200, Port: ["SWL", "SWR"]
                            },
                
                "Key":      [["", "SWL"], ["", "24VN"], ["SWR", "24VP"]]
            };

const P2Port = {
                "PLCOutput":{
                                x:450, y:100, Port: ["", ""],
                                RndPortSet: [[0, 0, [0, 0],  "PLCOutputPortSet"], 
                                             [1, 1, [1, 0]], "PLCOutputPortSet"]                                                              
                            },

                "24VDC":    {
                                x:250, y:600, Port: ["24VP", "24VN"]
                            },

                "Motor":    {
                                x:150, y:150, Port: ["MTL", "MTR"]
                            },
                
                "Key":      [["", "MTR"], ["", "24VP"], ["MTL", "24VN"]]
            };

const P3Port = {
                "PLCInput": {
                                x:100, y:100, Port: ["", ""],
                                RndPort: [[0, [0, 0], "PLCInputPort"], 
                                          [1, [1, 0], "PLCInputGNDPort"]]
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
                            },

                "Key":      [["", "RLSWU"],    ["", "24VN"],     ["RLSWDR", "24VP"], 
                             ["RLCU", "PNPE"], ["RLCD", "PNPC"], ["PNPB", "48VP"],
                             ["PNPC", "48VN"]]                
            };

const P4Port = {
                "PLCInput":{
                                x:500, y:150, Port: ["", ""],
                                RndPort: [[0, [0, 0], "PLCInputPort"], 
                                          [1, [1, 0], "PLCInputGNDPort"]]
                            },

                "Optical":  {
                                x:200, y:300, Port: ["OPUL", "OPUR", "OPDL", "OPDR"]
                            },

                "5VDC":     {
                                x:80, y:520, Port: ["5VP", "5VN"]
                            },

                "24VDC":    {
                                x:700, y:650, Port: ["24VP", "24VN"]
                            },

                "Key":      [["", "OPUR"],    ["", "24VN"], ["24VP", "OPDR"],
                             ["5VP", "OPUL"], ["5VN", "OPDL"]]                         
            };

const P5Port = {
                "ABBRobot": {
                                x:100, y:100, Port: ["", ""],
                                RndPort: [[0, [0, 0], "ABBDIPort"], 
                                          [1, [1, 0], "ABBGNDDIPort"]]
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
                            },

                "Key":      [["", "RLSWU"], ["", "24VN"],    ["24VP", "RLSWDR"], 
                             ["5VN", "SR"], ["5VP", "RLCD"], ["SL", "RLCU"]]                           
            };

const P6Port = {
                "COMAURobot":{
                                x:100, y:100, Port: ["", "0VDC"],
                                RndPort: [[0, [0, 0], "COMAUINPort"]]
                            },

                "Sensor":   {
                                x:650, y:120, Port: ["SL", "SR"]
                            },   

                "24VDC":    {
                                x:400, y:600, Port: ["24VP", "24VN"]
                            },
                            
                "Key":      [["", "24VP"], ["24VN", "SR"], ["SL", "0VDC"]]    
            };

const P7Port = {
                "FANUCRobot":{
                                x:450, y:120, Port: ["", "", "", ""],
                                RndPort: [[0, [0, 0], "FANUCDIPort"], 
                                          [1, [1, 0], "FANUC24FPort"],
                                          [2, [2, 0], "FANUCSDIPort"], 
                                          [3, [2, 1], "FANUC0VPort"]]           
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            },
                            
                "Key":      [["", "SL"], ["", "SR"], ["", ""]]
            };

const P8Port = {
                "KUKARobot":{
                                x:450, y:120, Port: ["", ""],
                                RndPort: [[0, [0, 0], "KUKADIPort"], 
                                          [1, [2, 1], "KUKAGNDDIPort"]]
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            },   

                "24VDC":    {
                                x:100, y:600, Port: ["24VP", "24VN"]
                            },
                            
                "Key":      [["", "SR"], ["SL", "24VP"], ["24VN", ""]]
            };

const P9Port = {
                "OMRONRobot":{
                                x:350, y:220, Port: ["", "", "", ""],
                                RndPort: [[0, [0, 0], "OMRONIN"], 
                                          [1, [1, 1], "OMRONGND"],
                                          [2, [2, 0], "OMRON24VDC"], 
                                          [3, [2, 1], "OMRONCommon"]]                   
                            },

                "Sensor":   {
                                x:100, y:100, Port: ["SL", "SR"]
                            },
                            
                "Key":      [["", "SL"], ["SR", ""], ["", ""]]
            };

const P10Port = {
                "ABBRobot":{
                                x:150, y:120, Scale: 1.2, Port: ["", "", ""],
                                RndPort: [[0, [0, 0], "ABBDOPort"], 
                                          [1, [2, 0], "ABBGNDDOPort"], 
                                          [2, [3, 1], "ABBPWRDOPort"]]                        
                            },

                "PLCInput":{
                                x:600, y:300, Scale: 1, Port: ["", ""],
                                RndPort: [[0, [0, 1], "PLCInputPort"], 
                                          [1, [1, 0], "PLCInputGNDPort"]]                               
                            },

                "24VDC":    {
                                x:420, y:400, Port: ["24VP", "24VN"]
                            },
                            
                "Key":      [["", ""], ["", "24VN"], ["", "24VN"],
                             ["24VP", ""]]
            };

const P11Port = {
                "COMAURobot":{
                                x:600, y:120, Scale: 1.2, Port: ["", "24VDC", "0VDC"],
                                RndPort: [[0, [2, 1], "COMAUOUTPort"]]                  
                            },

                "PLCInput":{
                                x:200, y:200, Scale: 1, Port: ["", ""],
                                RndPort: [[0, [0, 0], "PLCInputPort"], 
                                          [1, [1, 0], "PLCInputGNDPort"], 
                                           1, [2, 0], "PLCInputGNDPort"]         
                            },

                "Key":      [["", "24VDC"], ["", "0VDC"], ["", ""]]
            };

const P12Port = {
                "FANUCRobot":       {
                                        x:100, y:120, Scale: 1.2, Port: ["", "", ""],
                                        RndPort: [[0, [0, 0], "FANUCDOPort"], 
                                                  [1, [6, 1], "FANUC0VDPort"], 
                                                  [2, [5, 0], "FANUCDOSRCPort"]]                     
                                    },

                "PLCInput":         {
                                        x:500, y:300, Scale: 0.5, Port: ["", "", "IN-0", "IN-2"],
                                        RndPort: [[0, [0, 1], "PLCInput1357Port"], 
                                                  [1, [7, 1], "PLCInputGNDPort"]],  
                                        RndPortEx: [[1, [7, 1]]] 
                                    },

                "24VDC":            {
                                        x:750, y:400, Port: ["24VP", "24VN"]
                                    },

                "ButtonStart":      {
                                        x:700, y:80, Port: ["BTSTRL", "BTSTRR"]
                                    },

                "ButtonMotorStop":  {
                                        x:700, y:180, Port: ["BTMSTPL", "BTMSTPR"]
                                    },

                "Key":              [["", ""],  ["IN-0", "BTSTRL"], ["BTSTRR", "24VP"],
                                     ["IN-2", "BTMSTPL"], ["BTMSTPR", "24VP"], ["", "24VP"],
                                     ["24VN", ""],   ["24VN", ""]]
            };

const P13Port = {
                "KUKARobot":{
                                x:600, y:120, Port: ["", "", ""],
                                Scale: 1.2,
                                RndPort: [[0, [0, 0], "KUKADOPort"], 
                                          [1, [1, 0], "KUKAGNDDOPort"], 
                                          [2, [2, 0], "KUKA24VPort"]]               
                            },

                "PLCInput":{
                                x:200, y:200, Scale: 0.7, Port: ["", ""],
                                RndPort: [[0, [2, 1], "PLCInputPort"], 
                                          [1, [0, 1], "PLCInputGNDPort"]],
                                RndPortEx: [[1, [1, 1]]] 
                                
                            },

                "Key":      [["", ""], ["", ""], ["", ""]]
            };

const P14Port = {
                "OMRONRobot":{
                                x:80, y:220, Scale: 1.2, Port: ["", ""],
                                RndPort: [[0, [0, 0], "OMRONOUT"], 
                                          [1, [1, 0], "OMRONGND"]]                  
                            },

                "PLCInput":{
                                x:500, y:300, Scale: 0.7, Port: ["", "", ""],
                                RndPort: [[0, [0, 1], "PLCInput0To4Port"], 
                                          [1, [3, 0], "PLCInput5To9Port"], 
                                          [2, [2, 0], "PLCInputGNDPort"]]
                                
                            },

                "ButtonStart":{
                                x:700, y:100, Port: ["BTSTRL", "BTSTRR"]
                            },

                "24VDC":    {
                                x:800, y:250, Port: ["24VP", "24VN"]
                            },

                "Key":      [["", ""],  ["", "24VN"], ["", "24VN"],
                             ["", "BTSTRL"], ["BTSTRR", "24VP"]]
            };


const P15Port = {
                "FANUCRobot":       {
                                        x:50, y:300, Port: ["0VUR", "0VDR", "24FDR", "DI102", "DO102", "DOSRC1R", "SDICOM2"]                  
                                    },

                "PLCInput":         {
                                        x:170, y:50, Scale: 0.7, Port: ["GNDPLCR", "IN-0", "IN-2", "IN-6", "IN-7"]
                                    },

                "PLCOutput":        {
                                        x:700, y:50, Scale: 0.7, Port: ["DC-0", "DC-1", "OUT-0", "OUT-1"],
                                    },   

                "Relay":            {
                                        x:650, y:350, Scale: 0.5, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
                                    },

                "24VDC":            {
                                        x:450, y:700, Scale: 0.7, Port: ["24VP", "24VN"]
                                    },

                "240VDC":           {
                                        x:700, y:700, Scale: 0.9, Port: ["240VP", "240VN"]
                                    },
                            
                "LS":          {
                                        x:400, y:300, Port: ["LSL", "LSR"]
                                    },

                "Convey":           {
                                        x:750, y:550, Port: ["CVL", "CVR"]
                                    },

                "ButtonStart":      {
                                        x:500, y:40, Port: ["BTSTRL", "BTSTRR"]
                                    },

                "ButtonMotorStop":  {
                                        x:500, y:140, Port: ["BTMSTPL", "BTMSTPR"]
                                    },

                "Key":              [
                                     ["SDICOM2", "0VUR"], ["24FDR", "DC-1"], ["DI102", "OUT-1"], 
                                     ["DO102", "IN-7"], ["0VDR", "24VN"], ["DOSRC1R", "24VP"],
                                     ["IN-0", "BTSTRL"], ["IN-2", "BTMSTPL"], ["IN-6", "LSL"], 
                                     ["GNDPLCR", "24VN"], ["BTSTRR", "DC-0"], ["BTSTRR", "24VP"], 
                                     ["BTMSTPR", "24VP"], ["LSR", "24VP"], ["RLCU", "OUT-0"], 
                                     ["RLCD", "24VN"], ["RLSWU", "240VP"], ["RLSWDR", "CVL"],
                                     ["CVR", "240VN"]
                                    ]              
            };

const P16Port = {
                "ABBRobot":       {
                                        x:50, y:300, Port: ["DO02", "DI02", "GNDDOL", "GNDDIL", "PWRDOL"]                  
                                    },

                "PLCInput":         {
                                        x:170, y:50, Scale: 0.7, Port: ["GNDPLCR", "IN-0", "IN-2", "IN-6", "IN-7"]
                                    },

                "PLCOutput":        {
                                        x:700, y:50, Scale: 0.7, Port: ["DC-0", "DC-1", "OUT-0", "OUT-1"],
                                    },   

                "Relay":            {
                                        x:650, y:350, Scale: 0.5, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
                                    },

                "24VDC":            {
                                        x:450, y:700, Scale: 0.7, Port: ["24VP", "24VN"]
                                    },

                "240VDC":           {
                                        x:700, y:700, Scale: 0.9, Port: ["240VP", "240VN"]
                                    },
                            
                "LS":          {
                                        x:400, y:300, Port: ["LSL", "LSR"]
                                    },

                "Convey":           {
                                        x:750, y:550, Port: ["CVL", "CVR"]
                                    },

                "ButtonStart":      {
                                        x:500, y:40, Port: ["BTSTRL", "BTSTRR"]
                                    },

                "ButtonMotorStop":  {
                                        x:500, y:140, Port: ["BTMSTPL", "BTMSTPR"]
                                    },

                "Key":              [
                                     ["PWRDOL", "24VP"], ["GNDDOL", "24VN"], ["GNDDIL", "24VN"],
                                     ["DO02", "IN-7"], ["DI02", "OUT-1"], ["IN-0", "BTSTRL"], 
                                     ["IN-2", "BTMSTPL"], ["IN-6", "LSL"], ["GNDPLCR", "24VN"], 
                                     ["BTSTRR", "DC-0"], ["BTSTRR", "24VP"], ["BTMSTPR", "24VP"], 
                                     ["LSR", "24VP"], ["RLCU", "OUT-0"], ["RLCD", "24VN"], 
                                     ["RLSWU", "240VP"], ["RLSWDR", "CVL"], ["CVR", "240VN"]
                                    ]              
            };

const P17Port = {
                "PLCInput":         {
                                        x:150, y:100, Scale: 0.9, Port: ["GNDPLCL", "IN-0", "IN-1", "IN-2", "IN-3"]
                                    },

                "PLCOutput":        {
                                        x:600, y:100, Scale: 0.9, Port: ["DC-0", "DC-1", "DC-2", "OUT-0", "OUT-1", "OUT-2"],
                                    },   

                "Relay1":          {
                                        x:400, y:500, Scale: 1, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
                                    },

                "Relay2":          {
                                        x:700, y:500, Scale: 1, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                    },                            

                "120VDC":           {
                                        x:650, y:700, Scale: 0.7, Port: ["120VP", "120VN"]
                                    },

                "240VDC":           {
                                        x:200, y:700, Scale: 0.7, Port: ["240VP", "240VN"]
                                    },

                "PressureSensor":   {
                                        x:50, y:200, Scale: 0.7, Port: ["PRESL", "PRESR"]
                                    },

                "ProximitySensor":  {
                                        x:480, y:190, Scale: 0.7, Port: ["PROSL", "PROSR"]
                                    },

                "Light":            {
                                        x:880, y:400, Port: ["LTU", "LTD"]
                                    },

                "SolA":             {
                                        x:300, y:500, Port: ["SAU", "SAD"]
                                    },

                "SolB":             {
                                        x:600, y:500, Port: ["SBU", "SBD"]
                                    },

                "ButtonStart":      {
                                        x:480, y:120, Scale: 0.7, Port: ["BTSTRL", "BTSTRR"]
                                    },

                "ButtonMotorStop":  {
                                        x:50, y:130, Scale: 0.7, Port: ["BTMSTPL", "BTMSTPR"]
                                    },

                "Key":              [
                                     ["IN-1", "BTMSTPR"], ["IN-3", "PRESR"], ["IN-0", "BTSTRL"],
                                     ["IN-2", "PROSL"], ["BTMSTPL", "240VP"], ["PRESL", "240VP"],
                                     ["BTSTRR", "240VP"], ["PROSR", "240VP"], ["GNDPLCL", "240VN"],
                                     ["DC-0", "240VP"], ["DC-1", "240VP"], ["DC-2", "240VP"], 
                                     ["OUT-0", "RLCU1"], ["OUT-1", "RLCU2"], ["OUT-2", "LTU"],
                                     ["LTD", "240VN"], ["RLCD1", "240VN"], ["RLCD2", "240VN"], 
                                     ["RLSWU1", "SAU"], ["RLSWU2", "SBU"], ["120VN", "SBD"],
                                     ["120VN", "SAD"], ["RLSWDR1", "120VP"], ["RLSWDR2", "120VP"]
                                    ]              
            };

const PChocolateMachineStage1 = {
                "PLCInputAB":   {
                                    x:129, y:223, Scale: 0.6, 
                                    Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
                                },

                "PLCOutputAB":  {
                                    x:466, y:227, Scale: 0.6, 
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4", 
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
                                },   

                "Relay2":       {
                                    x:655, y:678, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                }, 

                "Relay3":       {
                                    x:880, y:178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },  

                "Relay4":       {
                                    x:888, y:411, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },  

                "ProS1":        {
                                    x:19, y:314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                },                

                "ProS2":        {
                                    x:22, y:401, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
                                },  

                "ProS3":        {
                                    x:357, y:421, Scale: 0.5, Port: ["BR3", "BK3", "BL3"]
                                },  

                "ProS4":        {
                                    x:349, y:317, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
                                },  

                "24VDCS":       {
                                    x:154, y:685, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "120VDCS":      {
                                    x:811, y:695, Scale: 0.7, Port: ["120VPS", "120VNS"]
                                },

                "L":            {
                                    x:723, y:249, Scale: 0.7, Port: ["LL", "LR"]
                                },

                "V":            {
                                    x:722, y:317, Scale: 0.7, Port: ["VL", "VR"]
                                },

                "R":            {
                                    x:901, y:310, Scale: 0.7, Port: ["RU", "RD"]
                                },

                "M":            {
                                    x:899, y:545, Scale: 0.7, Port: ["MU", "MD"]
                                },

                "P1":           {
                                    x:722, y:411, Scale: 0.7, Port: ["P1L", "P1R"]
                                },

                "SwitchSP1":    {
                                    x:46, y:246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:360, y:247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },                    

                "Key":              [
                                    
                                    ]              
            };


const PChocolateMachineStage2 = {
                "PLCInputAB":   {
                                    x:129, y:223, Scale: 0.6, 
                                    Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
                                },

                "PLCOutputAB":  {
                                    x:466, y:227, Scale: 0.6, 
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4", 
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
                                },   

                "Relay2":       {
                                    x:655, y:678, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                }, 

                "Relay3":       {
                                    x:880, y:178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },  

                "Relay4":       {
                                    x:888, y:411, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },  

                "ProS1":        {
                                    x:19, y:314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                },                

                "THC":          {
                                    x:10, y:654, Scale: 0.5, Port: ["THC-7", "THC-8", "THC-9", "THC-10"]
                                },  

                "OPS":{
                                    x:320, y:666, Scale: 0.5, Port: ["OPS-VP", "OPS-NO", "OPS-COM", "OPS-VN"]
                                },  

                "ProS4":        {
                                    x:349, y:317, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
                                },  

                "24VDCS":       {
                                    x:199, y:771, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "120VDCS":      {
                                    x:811, y:695, Scale: 0.7, Port: ["120VPS", "120VNS"]
                                },

                "L":            {
                                    x:723, y:249, Scale: 0.7, Port: ["LL", "LR"]
                                },

                "V":            {
                                    x:722, y:317, Scale: 0.7, Port: ["VL", "VR"]
                                },

                "C":            {
                                    x:722, y:387, Scale: 0.7, Port: ["CL", "CR"]
                                },

                "Co":            {
                                    x:804, y:517, Scale: 0.7, Port: ["CoL", "CoR"]
                                },

                "P2":            {
                                    x:826, y:288, Scale: 0.7, Port: ["P2L", "P2R"]
                                },

                "SwitchSP1":    {
                                    x:46, y:246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:360, y:247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },                    

                "Key":              [
                                    
                                    ]              
            };

const PChocolateMachineStage3 = {
                "PLCInputAB":   {
                                    x:129, y:223, Scale: 0.6, 
                                    Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
                                },

                "PLCOutputAB":  {
                                    x:466, y:227, Scale: 0.6, 
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4", 
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
                                },   

                "Relay3":       {
                                    x:880, y:178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },  

                "Relay4":       {
                                    x:884, y:503, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },  

                "ProS1":        {
                                    x:19, y:314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                },                

               // "THC":          {
                               //     x:10, y:654, Scale: 0.5, Port: ["THC-2", "THC-8", "THC-9", "THC-10"]
                              //  },

                "OPS":{
                                    x:320, y:666, Scale: 0.5, Port: ["OPS-VP", "OPS-NO", "OPS-COM", "OPS-VN"]
                                },  

                "ProS4":        {
                                    x:349, y:317, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
                                },  

                "24VDCS":       {
                                    x:199, y:771, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "120VDCS":      {
                                    x:811, y:695, Scale: 0.7, Port: ["120VPS", "120VNS"]
                                },

                "L":            {
                                    x:723, y:249, Scale: 0.7, Port: ["LL", "LR"]
                                },


                "C":            {
                                    x:776, y:483, Scale: 0.7, Port: ["CL", "CR"]
                                },

                "Cf":            {
                                    x:894, y:310, Scale: 0.7, Port: ["CfU", "CfD"]
                                },

                "Ch":            {
                                    x:732, y:358, Scale: 0.7, Port: ["ChU", "ChD"]
                                },

                "SwitchSP1":    {
                                    x:46, y:246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:360, y:247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },                    

                "Key":              [
                                    
                                    ]              
            };

const PIronBarkStage1 = {
                "PLCInputAB":   {
                                    x:180, y:125, Scale: 0.4, 
                                    Port: ["IN-0", "IN-1", "IN-2", "IN-3",
                                           "IN-4", "IN-5", "IN-6", "IN-7", "IN-8",
                                           "GND0PLCL", "GND1PLCR"]
                                },

                "PLCOutputAB":  {
                                    x:497, y:134, Scale: 0.4, 
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3",
                                           "DC-4", "DC-5", "DC-6",
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3",
                                           "OUT-4", "OUT-5", "OUT-6"]
                                },   

                "Relay1":       {
                                    x:727, y:275, Scale: 0.7,
                                    Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
                                }, 

                "Relay2":       {
                                    x:878,  y:171, Scale: 0.7,
                                    Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                }, 

                "Relay3":       {
                                    x:700, y:522, Scale: 0.7,
                                    Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },  

                "Relay4":       {
                                    x:800, y:480, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },  

                "Relay5":       {
                                    x:889, y:370, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
                                },  

                "ProS1":        {
                                    x:27, y:194, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                }, 

                "ProS2":        {
                                    x:26, y:273, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
                                },  

                "ProS3":        {
                                    x:350, y:275, Scale: 0.5, Port: ["BR3", "BK3", "BL3"]
                                },  

                "THC1":         {
                                    x:46, y:506, Scale: 0.5, Port: ["THC1-7", "THC1-8"]
                                },
                                
                "THC2":         {
                                    x:313, y:422, Scale: 0.5, Port: ["THC2-7", "THC2-8"]
                                },  

                "OPS1":         {
                                    x:14, y:369, Scale: 0.5, Port: ["OPS1-VP", "OPS1-NO", "OPS1-COM", "OPS1-VN"]
                                },  

                "OPS2":         {
                                    x:331, y:177, Scale: 0.5, Port: ["OPS2-VP", "OPS2-NC", "OPS2-COM", "OPS2-VN"]
                                },  

                "24VDCS":       {
                                    x:171, y:768, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "230VDCS":      {
                                    x:432, y:768, Scale: 0.7, Port: ["230VPS", "230VNS"]
                                },
                                
                "400VDCS":      {
                                    x:663, y:778, Scale: 0.7, Port: ["400VPS", "400VNS"]
                                },

                "L":            {
                                    x:727, y:133, Scale: 0.7, Port: ["LL", "LR"]
                                },

                "V":            {
                                    x:726, y:182, Scale: 0.7, Port: ["VL", "VR"]
                                },

                "La":            {
                                    x:883, y:282, Scale: 0.7, Port: ["LaL", "LaR"]
                                },

                "F":            {
                                    x:722, y:400, Scale: 0.7, Port: ["FL", "FR"]
                                },
  
                "Cf":            {
                                    x:726, y:649, Scale: 0.7, Port: ["CfU", "CfD"]
                                },

                "Cn":            {
                                    x:921, y:495, Scale: 0.7, Port: ["CnU", "CnD"]
                                },
                                
                "R":            {
                                    x:821, y:604, Scale: 0.7, Port: ["RU", "RD"]
                                },

                "SwitchSP1":    {
                                    x:30, y:133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:388, y:122, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },                    

                "Key":              [
                                    
                                    ]              
            };

const PIronBarkStage2 = {
                "PLCInputAB":   {
                                    x:180, y:125, Scale: 0.4, 
                                    Port: ["IN-0", "IN-1", "IN-2",
                                           "IN-3", "IN-4",
                                           "GND0PLCL"]
                                },

                "PLCOutputAB":  {
                                    x:497, y:134, Scale: 0.4, 
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4", 
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
                                },   

                "Relay1":       {
                                    x:727, y:275, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
                                }, 

                "Relay2":       {
                                    x:822, y:110, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                }, 

                "Relay3":       {
                                    x:700, y:522, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },  

                "Relay4":       {
                                    x:891, y:523, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },  

                "Relay5":       {
                                    x:895, y:282, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
                                },  

                "ProS1":        {
                                    x:27, y:194, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                }, 

                "ProS2":        {
                                    x:336, y:191, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
                                },  

                "OPS":         {
                                    x:325, y:300, Scale: 0.5, Port: ["OPS-VP", "OPS-COM", "OPS-NO", "OPS-VN"]
                                },  

                "24VDCS":       {
                                    x:171, y:768, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "230VDCS":      {
                                    x:432, y:768, Scale: 0.7, Port: ["230VPS", "230VNS"]
                                },
                                
                "400VDCS":      {
                                    x:663, y:778, Scale: 0.7, Port: ["400VPS", "400VNS"]
                                },

                "FM":            {
                                    x:833, y:217, Scale: 0.7, Port: ["FMU", "FMD"]
                                },

                "LS":            {
                                    x:722, y:400, Scale: 0.7, Port: ["LSL", "LSR"]
                                },
  
                "RT":            {
                                    x:726, y:649, Scale: 0.7, Port: ["RTU", "RTD"]
                                },

                "Cb":            {
                                    x:916, y:394, Scale: 0.7, Port: ["CbU", "CbD"]
                                },
                                
                "CP":            {
                                    x:917, y:650, Scale: 0.7, Port: ["CPU", "CPD"]
                                },

                "SwitchSP1":    {
                                    x:30, y:133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:344, y:121, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },                    

                "Key":              [

                                    ]
            };


const PEngineBlockStage1 = {
                "PLCInputAB":   {
                                    x:187, y:123, Scale: 0.4,
                                    Port: ["IN-0", "IN-1", "IN-2", "IN-3",
                                           "IN-4", "IN-5", "IN-6", "IN-7", "IN-10",
                                           "GND0PLCL", "GND1PLCL"]
                                },

                "PLCOutputAB":  {
                                    x:497, y:134, Scale: 0.4,
                                    Port: ["DC-0", "DC-1", "DC-2", "DC-3",
                                           "DC-4", "DC-5", "DC-6", "DC-7",
                                           "OUT-0", "OUT-1", "OUT-2", "OUT-3",
                                           "OUT-4", "OUT-5", "OUT-6", "OUT-7"],
                                },

                "Relay1":       {
                                    x:688, y:162, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
                                },

                "Relay2":       {
                                    x:894, y:184, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                },

                "Relay3":       {
                                    x:693, y:331, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },

                "Relay4":       {
                                    x:894, y:370, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },

                "ProS1":        {
                                    x:24, y:329, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
                                },

                "ProS2":        {
                                    x:348, y:179, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
                                },

                "OPS1":         {
                                    x:24, y:329, Scale: 0.5, Port: ["OPS1-VP", "OPS1-NC", "OPS1-COM", "OPS1-VN"]
                                },

                "OPS2":         {
                                    x:330, y:268, Scale: 0.5, Port: ["OPS2-VP", "OPS2-COM", "OPS2-NO", "OPS2-VN"]
                                },

                "THC":         {
                                    x:309, y:432, Scale: 0.7, Port: ["THC-7", "THC-8"]
                                },

                "24VDCS":       {
                                    x:151, y:639, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "230VDCS":      {
                                    x:429, y:644, Scale: 0.7, Port: ["230VPS", "230VNS"]
                                },

                "400VDCS":      {
                                    x:681, y:637, Scale: 0.7, Port: ["400VPS", "400VNS"]
                                },

                "L":            {
                                    x:792, y:131, Scale: 0.7, Port: ["LL", "LR"]
                                },

                "P":            {
                                    x:792, y:175, Scale: 0.7, Port: ["PL", "PR"]
                                },

                "La":           {
                                    x:792, y:220, Scale: 0.7, Port: ["LaL", "LaR"]
                                },

                "V1":           {
                                    x:792, y:267, Scale: 0.7, Port: ["V1L", "V1R"]
                                },

                "V2":           {
                                    x:792, y:319, Scale: 0.7, Port: ["V2L", "V2R"]
                                },

                "C":            {
                                    x:792, y:377, Scale: 0.7, Port: ["CL", "CR"]
                                },

                "O":            {
                                    x:792, y:428, Scale: 0.7, Port: ["OL", "OR"]
                                },

                "S":            {
                                    x:42, y:171, Scale: 0.7, Port: ["SL", "SR"]
                                },

                "ABBRobotS1":    {
                                    x:807, y:517, Scale: 0.7,
                                    Port: ["ABBS1PWRDOL", "ABBS1GNDDOL", "ABBS1DO01",
                                           "ABBS1DI01", "ABBS1GNDDIR"]
                                },

                "SwitchSP1":    {
                                    x:58, y:111, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:357, y:104, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },

                "Key":              [

                                    ]
            };

const PEngineBlockStage2 = {
                "PLCInputAB":   {
                                    x:180, y:125, Scale: 0.4,
                                    Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
                                },

                "PLCOutputAB1":  {
                                    x:471, y:139, Scale: 0.4,
                                    Port: ["DC1-0", "DC1-1", "DC1-2", "DC1-3", "DC1-4",
                                           "OUT1-0", "OUT1-1", "OUT1-2", "OUT1-3", "OUT1-4"],
                                },

                "PLCOutputAB2":  {
                                    x:640, y:145, Scale: 0.4,
                                    Port: ["DC2-0", "DC2-1", "DC2-2", "DC2-3", "DC2-4",
                                           "OUT2-0", "OUT2-1", "OUT2-2", "OUT2-3", "OUT2-4"],
                                },

                "Relay1":       {
                                    x:800, y:113, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
                                },

                "Relay2":       {
                                    x:902, y:108, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
                                },

                "Relay3":       {
                                    x:837, y:263, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
                                },

                "Relay4":       {
                                    x:763, y:441, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
                                },

                "Relay5":       {
                                    x:878, y:417, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
                                },

                "Relay6":       {
                                    x:290, y:734, Scale: 0.7, Port: ["RLCU6", "RLCD6", "RLSWU6", "RLSWDL6", "RLSWDR6"]
                                },

                "Relay7":       {
                                    x:501, y:731, Scale: 0.7, Port: ["RLCU7", "RLCD7", "RLSWU7", "RLSWDL7", "RLSWDR7"]
                                },

                "Relay8":       {
                                    x:886, y:614, Scale: 0.7, Port: ["RLCU8", "RLCD8", "RLSWU8", "RLSWDL8", "RLSWDR8"]
                                },

                "OPS3":         {
                                    x:13, y:184, Scale: 0.5, Port: ["OPS3-VP", "OPS3-NO", "OPS3-COM", "OPS3-VN"]
                                },

                "OPS4":         {
                                    x:13, y:264, Scale: 0.5, Port: ["OPS4-VP", "OPS4-NO", "OPS4-COM", "OPS4-VN"]
                                },

                "OPS5":         {
                                    x:18, y:350, Scale: 0.5, Port: ["OPS5-VP", "OPS5-NO", "OPS5-COM", "OPS5-VN"]
                                },

                "OPS6":         {
                                    x:325, y:183, Scale: 0.5, Port: ["OPS6-VP", "OPS6-NO", "OPS6-COM", "OPS6-VN"]
                                },

                "OPS7":         {
                                    x:325, y:265, Scale: 0.5, Port: ["OPS7-VP", "OPS7-NO", "OPS7-COM", "OPS7-VN"]
                                },

                "OPS8":         {
                                    x:325, y:352, Scale: 0.5, Port: ["OPS8-VP", "OPS8-NO", "OPS8-COM", "OPS8-VN"]
                                },

                "24VDCS":       {
                                    x:82, y:446, Scale: 0.7, Port: ["24VPS", "24VNS"]
                                },

                "230VDCS":      {
                                    x:407, y:448, Scale: 0.7, Port: ["230VPS", "230VNS"]
                                },

                "400VDCS":      {
                                    x:595, y:525, Scale: 0.7, Port: ["400VPS", "400VNS"]
                                },

                "L":            {
                                    x:691, y:90, Scale: 0.7, Port: ["LL", "LR"]
                                },

                "C2":           {
                                    x:804, y:205, Scale: 0.7, Port: ["C2L", "C2R"]
                                },

                "C3":           {
                                    x:906, y:212, Scale: 0.7, Port: ["C3L", "C3R"]
                                },

                "C4":           {
                                    x:846, y:361, Scale: 0.7, Port: ["C4L", "C4R"]
                                },

                "C5":           {
                                    x:765, y:542, Scale: 0.7, Port: ["C5L", "C5R"]
                                },

                "C6":           {
                                    x:881, y:535, Scale: 0.7, Port: ["C6L", "C6R"]
                                },

                "CNCM":         {
                                    x:586, y:669, Scale: 0.7, Port: ["CNCML", "CNCMR"]
                                },

                "DM":           {
                                    x:782, y:648, Scale: 0.7, Port: ["DML", "DMR"]
                                },

                "GM":           {
                                    x:244, y:681, Scale: 0.7, Port: ["GML", "GMR"]
                                },

                "ABBRobotS2":   {
                                    x:55, y:554, Scale: 0.7,
                                    Port: ["ABBS2PWRDOL", "ABBS2GNDDOL", "ABBS2DO01",
                                           "ABBS2DI02", "ABBS2GNDDIR"]
                                },

                "SwitchSP1":    {
                                    x:30, y:133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
                                },

                "SwitchSP2":    {
                                    x:344, y:121, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
                                },

                "CNCController":{
                                    x:634, y:731, Scale: 0.6,
                                    Port: ["CNCIN-0", "CNCGND0L", "CNCDC-1", "CNCOUT-1"],
                                },

                "DrillController":{
                                    x:859, y:737, Scale: 0.6,
                                    Port: ["DRILLIN-0", "DRILLGND0R", "DRILLDC-1", "DRILLOUT-1"],
                                },

                "GrinderController":{
                                    x:92, y:709, Scale: 0.6,
                                    Port: ["GRIIN-0", "GRIGND0R", "GRIDC-1", "GRIOUT-1"],
                                },

                "Key":              [
                                    
                                    ]              
            };

const DictModule = {
                        P1: P1Port,   P2: P2Port,   P3: P3Port,   P4: P4Port,
                        P5: P5Port,   P6: P6Port,   P7: P7Port,   P8: P8Port,
                        P9: P9Port,   P10: P10Port, P11: P11Port, P12: P12Port,
                        P13: P13Port, P14: P14Port, P15: P15Port, P16: P16Port,
                        P17: P17Port,
                        P18: PChocolateMachineStage1,
                        P19: PChocolateMachineStage2,
                        P20: PChocolateMachineStage3,
                        P21: PIronBarkStage1,
                        P22: PIronBarkStage2,
                        P23: PEngineBlockStage1,
                        P24: PEngineBlockStage2
                    };


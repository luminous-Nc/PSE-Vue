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
                                RndPort: [[0, [0, 0], "PLCOutputPort"], 
                                          [1, [1, 0], "PLCOutputDCPort"]]
                            },

                "24VDC":    {
                                x:250, y:600, Port: ["24VP", "24VN"]
                            },

                "Motor":    {
                                x:150, y:150, Port: ["MTL", "MTR"]
                            },
                
                "Key":      [["", "MTR"], ["", "24VN"], ["MTL", "24VP"]]
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
                            
                "LSensor":          {
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
                            
                "LSensor":          {
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
const DictModule = {
                        P1: P1Port,   P2: P2Port,   P3: P3Port,   P4: P4Port,
                        P5: P5Port,   P6: P6Port,   P7: P7Port,   P8: P8Port,
                        P9: P9Port,   P10: P10Port, P11: P11Port, P12: P12Port,
                        P13: P13Port, P14: P14Port, P15: P15Port, P16: P16Port
                    };


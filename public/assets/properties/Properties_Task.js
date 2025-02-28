// -------------------------
// dynamic parameters  
// -------------------------


export {DictModule};

// module position
const P1Port = {
    "PLCInput": {
        x: 150, y: 100, Scale: 1.2, Port: ["", ""],
        RndPort: [[0, [0, 0], "PLCInputPort"],
            [1, [1, 0], "PLCInputGNDPort"]]
    },

    "24VDC": {
        x: 650, y: 500, Port: ["24VP", "24VN"]
    },

    "Switch": {
        x: 650, y: 200, Port: ["SWL", "SWR"]
    },

    "Key": [["", "SWL"], ["", "24VN"], ["SWR", "24VP"]]
};

const P2Port = {
    "PLCOutput": {
        x: 450, y: 100, Port: ["", ""],
        RndPortSet: [[0, 0, [0, 0], "PLCOutputPortSet"],
            [1, 1, [1, 0]], "PLCOutputPortSet"]
    },

    "24VDC": {
        x: 250, y: 600, Port: ["24VP", "24VN"]
    },

    "Motor": {
        x: 150, y: 150, Port: ["MTL", "MTR"]
    },

    "Key": [["", "MTR"], ["", "24VP"], ["MTL", "24VN"]]
};

const P3Port = {
    "PLCInput": {
        x: 100, y: 100, Port: ["", ""],
        RndPort: [[0, [0, 0], "PLCInputPort"],
            [1, [1, 0], "PLCInputGNDPort"]]
    },

    "Relay": {
        x: 550, y: 150, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "PNP": {
        x: 800, y: 200, Port: ["PNPB", "PNPE", "PNPC"]
    },

    "24VDC": {
        x: 550, y: 550, Port: ["24VP", "24VN"]
    },

    "48VDC": {
        x: 800, y: 560, Port: ["48VP", "48VN"]
    },

    "Key": [["", "RLSWU"], ["", "24VN"], ["RLSWDR", "24VP"],
        ["RLCU", "PNPE"], ["RLCD", "PNPC"], ["PNPB", "48VP"],
        ["PNPC", "48VN"]]
};

const P4Port = {
    "PLCInput": {
        x: 500, y: 150, Port: ["", ""],
        RndPort: [[0, [0, 0], "PLCInputPort"],
            [1, [1, 0], "PLCInputGNDPort"]]
    },

    "Optical": {
        x: 200, y: 300, Port: ["OPUL", "OPUR", "OPDL", "OPDR"]
    },

    "5VDC": {
        x: 80, y: 520, Port: ["5VP", "5VN"]
    },

    "24VDC": {
        x: 700, y: 650, Port: ["24VP", "24VN"]
    },

    "Key": [["", "OPUR"], ["", "24VN"], ["24VP", "OPDR"],
        ["5VP", "OPUL"], ["5VN", "OPDL"]]
};

const P5Port = {
    "ABBRobot": {
        x: 100, y: 100, Port: ["", ""],
        RndPort: [[0, [0, 0], "ABBDIPort"],
            [1, [1, 0], "ABBGNDDIPort"]]
    },

    "Relay": {
        x: 400, y: 250, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "Sensor": {
        x: 650, y: 120, Port: ["SL", "SR"]
    },

    "5VDC": {
        x: 700, y: 550, Port: ["5VP", "5VN"]
    },

    "24VDC": {
        x: 400, y: 600, Port: ["24VP", "24VN"]
    },

    "Key": [["", "RLSWU"], ["", "24VN"], ["24VP", "RLSWDR"],
        ["5VN", "SR"], ["5VP", "RLCD"], ["SL", "RLCU"]]
};

const P6Port = {
    "COMAURobot": {
        x: 100, y: 100, Port: ["", "0VDC"],
        RndPort: [[0, [0, 0], "COMAUINPort"]]
    },

    "Sensor": {
        x: 650, y: 120, Port: ["SL", "SR"]
    },

    "24VDC": {
        x: 400, y: 600, Port: ["24VP", "24VN"]
    },

    "Key": [["", "24VP"], ["24VN", "SR"], ["SL", "0VDC"]]
};

const P7Port = {
    "FANUCRobot": {
        x: 450, y: 120, Port: ["", "", "", ""],
        RndPort: [[0, [0, 0], "FANUCDIPort"],
            [1, [1, 0], "FANUC24FPort"],
            [2, [2, 0], "FANUCSDIPort"],
            [3, [2, 1], "FANUC0VPort"]]
    },

    "Sensor": {
        x: 100, y: 100, Port: ["SL", "SR"]
    },

    "Key": [["", "SL"], ["", "SR"], ["", ""]]
};

const P8Port = {
    "KUKARobot": {
        x: 450, y: 120, Port: ["", ""],
        RndPort: [[0, [0, 0], "KUKADIPort"],
            [1, [2, 1], "KUKAGNDDIPort"]]
    },

    "Sensor": {
        x: 100, y: 100, Port: ["SL", "SR"]
    },

    "24VDC": {
        x: 100, y: 600, Port: ["24VP", "24VN"]
    },

    "Key": [["", "SR"], ["SL", "24VP"], ["24VN", ""]]
};

const P9Port = {
    "OMRONRobot": {
        x: 350, y: 220, Port: ["", "", "", ""],
        RndPort: [[0, [0, 0], "OMRONIN"],
            [1, [1, 1], "OMRONGND"],
            [2, [2, 0], "OMRON24VDC"],
            [3, [2, 1], "OMRONCommon"]]
    },

    "Sensor": {
        x: 100, y: 100, Port: ["SL", "SR"]
    },

    "Key": [["", "SL"], ["SR", ""], ["", ""]]
};

const P10Port = {
    "ABBRobot": {
        x: 150, y: 120, Scale: 1.2, Port: ["", "", ""],
        RndPort: [[0, [0, 0], "ABBDOPort"],
            [1, [2, 0], "ABBGNDDOPort"],
            [2, [3, 1], "ABBPWRDOPort"]]
    },

    "PLCInput": {
        x: 600, y: 300, Scale: 1, Port: ["", ""],
        RndPort: [[0, [0, 1], "PLCInputPort"],
            [1, [1, 0], "PLCInputGNDPort"]]
    },

    "24VDC": {
        x: 420, y: 400, Port: ["24VP", "24VN"]
    },

    "Key": [["", ""], ["", "24VN"], ["", "24VN"],
        ["24VP", ""]]
};

const P11Port = {
    "COMAURobot": {
        x: 600, y: 120, Scale: 1.2, Port: ["", "24VDC", "0VDC"],
        RndPort: [[0, [2, 1], "COMAUOUTPort"]]
    },

    "PLCInput": {
        x: 200, y: 200, Scale: 1, Port: ["", ""],
        RndPort: [[0, [0, 0], "PLCInputPort"],
            [1, [1, 0], "PLCInputGNDPort"],
            1, [2, 0], "PLCInputGNDPort"]
    },

    "Key": [["", "24VDC"], ["", "0VDC"], ["", ""]]
};

const P12Port = {
    "FANUCRobot": {
        x: 100, y: 120, Scale: 1.2, Port: ["", "", ""],
        RndPort: [[0, [0, 0], "FANUCDOPort"],
            [1, [6, 1], "FANUC0VDPort"],
            [2, [5, 0], "FANUCDOSRCPort"]]
    },

    "PLCInput": {
        x: 500, y: 300, Scale: 0.5, Port: ["", "", "IN-0", "IN-2"],
        RndPort: [[0, [0, 1], "PLCInput1357Port"],
            [1, [7, 1], "PLCInputGNDPort"]],
        RndPortEx: [[1, [7, 1]]]
    },

    "24VDC": {
        x: 750, y: 400, Port: ["24VP", "24VN"]
    },

    "ButtonStart": {
        x: 700, y: 80, Port: ["BTSTRL", "BTSTRR"]
    },

    "ButtonMotorStop": {
        x: 700, y: 180, Port: ["BTMSTPL", "BTMSTPR"]
    },

    "Key": [["", ""], ["IN-0", "BTSTRL"], ["BTSTRR", "24VP"],
        ["IN-2", "BTMSTPL"], ["BTMSTPR", "24VP"], ["", "24VP"],
        ["24VN", ""], ["24VN", ""]]
};

const P13Port = {
    "KUKARobot": {
        x: 600, y: 120, Port: ["", "", ""],
        Scale: 1.2,
        RndPort: [[0, [0, 0], "KUKADOPort"],
            [1, [1, 0], "KUKAGNDDOPort"],
            [2, [2, 0], "KUKA24VPort"]]
    },

    "PLCInput": {
        x: 200, y: 200, Scale: 0.7, Port: ["", ""],
        RndPort: [[0, [2, 1], "PLCInputPort"],
            [1, [0, 1], "PLCInputGNDPort"]],
        RndPortEx: [[1, [1, 1]]]

    },

    "Key": [["", ""], ["", ""], ["", ""]]
};

const P14Port = {
    "OMRONRobot": {
        x: 80, y: 220, Scale: 1.2, Port: ["", ""],
        RndPort: [[0, [0, 0], "OMRONOUT"],
            [1, [1, 0], "OMRONGND"]]
    },

    "PLCInput": {
        x: 500, y: 300, Scale: 0.7, Port: ["", "", ""],
        RndPort: [[0, [0, 1], "PLCInput0To4Port"],
            [1, [3, 0], "PLCInput5To9Port"],
            [2, [2, 0], "PLCInputGNDPort"]]

    },

    "ButtonStart": {
        x: 700, y: 100, Port: ["BTSTRL", "BTSTRR"]
    },

    "24VDC": {
        x: 800, y: 250, Port: ["24VP", "24VN"]
    },

    "Key": [["", ""], ["", "24VN"], ["", "24VN"],
        ["", "BTSTRL"], ["BTSTRR", "24VP"]]
};


const P15Port = {
    "FANUCRobot": {
        x: 50, y: 300, Port: ["0VUR", "0VDR", "24FDR", "DI102", "DO102", "DOSRC1R", "SDICOM2"]
    },

    "PLCInput": {
        x: 170, y: 50, Scale: 0.7, Port: ["GNDPLCR", "IN-0", "IN-2", "IN-6", "IN-7"]
    },

    "PLCOutput": {
        x: 700, y: 50, Scale: 0.7, Port: ["DC-0", "DC-1", "OUT-0", "OUT-1"],
    },

    "Relay": {
        x: 650, y: 350, Scale: 0.5, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "24VDC": {
        x: 450, y: 700, Scale: 0.7, Port: ["24VP", "24VN"]
    },

    "240VDC": {
        x: 700, y: 700, Scale: 0.9, Port: ["240VP", "240VN"]
    },

    "LS": {
        x: 400, y: 300, Port: ["LSL", "LSR"]
    },

    "Convey": {
        x: 750, y: 550, Port: ["CVL", "CVR"]
    },

    "ButtonStart": {
        x: 500, y: 40, Port: ["BTSTRL", "BTSTRR"]
    },

    "ButtonMotorStop": {
        x: 500, y: 140, Port: ["BTMSTPL", "BTMSTPR"]
    },

    "Key": [
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
    "ABBRobot": {
        x: 50, y: 300, Port: ["DO02", "DI02", "GNDDOL", "GNDDIL", "PWRDOL"]
    },

    "PLCInput": {
        x: 170, y: 50, Scale: 0.7, Port: ["GNDPLCR", "IN-0", "IN-2", "IN-6", "IN-7"]
    },

    "PLCOutput": {
        x: 700, y: 50, Scale: 0.7, Port: ["DC-0", "DC-1", "OUT-0", "OUT-1"],
    },

    "Relay": {
        x: 650, y: 350, Scale: 0.5, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "24VDC": {
        x: 450, y: 700, Scale: 0.7, Port: ["24VP", "24VN"]
    },

    "240VDC": {
        x: 700, y: 700, Scale: 0.9, Port: ["240VP", "240VN"]
    },

    "LS": {
        x: 400, y: 300, Port: ["LSL", "LSR"]
    },

    "Convey": {
        x: 750, y: 550, Port: ["CVL", "CVR"]
    },

    "ButtonStart": {
        x: 500, y: 40, Port: ["BTSTRL", "BTSTRR"]
    },

    "ButtonMotorStop": {
        x: 500, y: 140, Port: ["BTMSTPL", "BTMSTPR"]
    },

    "Key": [
        ["PWRDOL", "24VP"], ["GNDDOL", "24VN"], ["GNDDIL", "24VN"],
        ["DO02", "IN-7"], ["DI02", "OUT-1"], ["IN-0", "BTSTRL"],
        ["IN-2", "BTMSTPL"], ["IN-6", "LSL"], ["GNDPLCR", "24VN"],
        ["BTSTRR", "DC-0"], ["BTSTRR", "24VP"], ["BTMSTPR", "24VP"],
        ["LSR", "24VP"], ["RLCU", "OUT-0"], ["RLCD", "24VN"],
        ["RLSWU", "240VP"], ["RLSWDR", "CVL"], ["CVR", "240VN"]
    ]
};

const P17Port = {
    "PLCInput": {
        x: 150, y: 100, Scale: 0.9, Port: ["GNDPLCL", "IN-0", "IN-1", "IN-2", "IN-3"]
    },

    "PLCOutput": {
        x: 600, y: 100, Scale: 0.9, Port: ["DC-0", "DC-1", "DC-2", "OUT-0", "OUT-1", "OUT-2"],
    },

    "Relay1": {
        x: 400, y: 500, Scale: 1, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
    },

    "Relay2": {
        x: 700, y: 500, Scale: 1, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "120VDC": {
        x: 650, y: 700, Scale: 0.7, Port: ["120VP", "120VN"]
    },

    "240VDC": {
        x: 200, y: 700, Scale: 0.7, Port: ["240VP", "240VN"]
    },

    "PressureSensor": {
        x: 50, y: 200, Scale: 0.7, Port: ["PRESL", "PRESR"]
    },

    "ProximitySensor": {
        x: 480, y: 190, Scale: 0.7, Port: ["PROSL", "PROSR"]
    },

    "Light": {
        x: 880, y: 400, Port: ["LTU", "LTD"]
    },

    "SolA": {
        x: 300, y: 500, Port: ["SAU", "SAD"]
    },

    "SolB": {
        x: 600, y: 500, Port: ["SBU", "SBD"]
    },

    "ButtonStart": {
        x: 480, y: 120, Scale: 0.7, Port: ["BTSTRL", "BTSTRR"]
    },

    "ButtonMotorStop": {
        x: 50, y: 130, Scale: 0.7, Port: ["BTMSTPL", "BTMSTPR"]
    },

    "Key": [
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
    "PLCInputAB": {
        x: 129, y: 223, Scale: 0.6,
        Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5", "IN-6"]
    },

    "PLCOutputAB": {
        x: 466, y: 227, Scale: 0.6,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
    },

    "Relay2": {
        x: 655, y: 678, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 880, y: 178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 888, y: 411, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "ProS1": {
        x: 19, y: 314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    "ProS4": {
        x: 349, y: 520, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
    },

    "ProS3": {
        x: 357, y: 421, Scale: 0.5, Port: ["BR3", "BK3", "BL3"]
    },

    "ProS2": {
        x: 349, y: 317, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
    },

    "Sensor": {
        x: 22, y: 401, Scale: 0.5, Port: ["SL", "SR"]
    },

    "24VDCS": {
        x: 154, y: 685, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "120VDCS": {
        x: 811, y: 695, Scale: 0.7, Port: ["120VPS", "120VNS"]
    },

    "L": {
        x: 683, y: 189, Scale: 0.7, Port: ["LL", "LR"]
    },

    "V": {
        x: 762, y: 431, Scale: 0.7, Port: ["VL", "VR"]
    },

    "R": {
        x: 800, y: 245, Scale: 0.7, Port: ["RU", "RD"]
    },

    "M": {
        x: 762, y: 317, Scale: 0.7, Port: ["MU", "MD"]
    },

    "P1": {
        x: 762, y: 545, Scale: 0.7, Port: ["P1L", "P1R"]
    },

    "SwitchSP1": {
        x: 46, y: 246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 360, y: 247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [['SWSPR2', '24VNS'],
        ['SWSPL2', 'IN-0'],
        ['SWSPR1', 'IN-1'],
        ['SWSPL1', '24VNS'],
        ['24VPS', 'GND0PLCL'],
        ['BR2', '24VNS'],
        ['BL2', '24VPS'],
        ['BK1', 'IN-3'],
        ['BR1', '24VNS'],
        ['BL1', '24VPS'],
        ['BR3', '24VNS'],
        ['BL3', '24VPS'],
        ['BK3', 'IN-4'],
        ['BR4', '24VNS'],
        ['BL4', '24VPS'],
        ['LL', 'OUT-0'],
        ['DC-0', '24VNS'],
        ['DC-1', '24VNS'],
        ['DC-2', '24VNS'],
        ['DC-3', '24VNS'],
        ['DC-4', '24VNS'],
        ['LR', '24VPS'],
        ['OUT-1', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RD', '120VPS'],
        ['OUT-2', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['MD', '120VPS'],
        ['OUT-3', 'VL'],
        ['VR', '24VPS'],
        ['OUT-4', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['BK2', 'IN-2'],
        ['SR', 'IN-5'],
        ['24VNS', 'SL'],
        ['BK4', 'IN-6'],
        ['RLSWU3', 'RU'],
        ['120VNS', 'RLSWDR3'],
        ['RLSWU4', 'MU'],
        ['RLSWDR4', '120VNS'],
        ['RLSWU2', 'P1L'],
        ['P1R', '120VNS'],
        ['120VPS', 'RLSWDR2']
    ]
};


const PChocolateMachineStage2 = {
    "PLCInputAB": {
        x: 129, y: 223, Scale: 0.6,
        Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
    },

    "PLCOutputAB": {
        x: 466, y: 227, Scale: 0.6,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
    },

    "Relay2": {
        x: 655, y: 678, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 880, y: 178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 888, y: 411, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "ProS1": {
        x: 19, y: 314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    "THC": {
        x: 320, y: 654, Scale: 0.5, Port: ["THC-7", "THC-8", "THC-9", "THC-10"]
    },

    "OPS": {
        x: 10, y: 666, Scale: 0.5, Port: ["OPS-VP", "OPS-NO", "OPS-COM", "OPS-VN"]
    },

    "ProS4": {
        x: 349, y: 317, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
    },

    "24VDCS": {
        x: 199, y: 771, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "120VDCS": {
        x: 811, y: 695, Scale: 0.7, Port: ["120VPS", "120VNS"]
    },

    "L": {
        x: 723, y: 249, Scale: 0.7, Port: ["LL", "LR"]
    },

    "V": {
        x: 722, y: 317, Scale: 0.7, Port: ["VL", "VR"]
    },

    "C": {
        x: 752, y: 517, Scale: 0.7, Port: ["CL", "CR"]
    },

    "Co": {
        x: 764, y: 387, Scale: 0.7, Port: ["CoL", "CoR"]
    },

    "P2": {
        x: 826, y: 288, Scale: 0.7, Port: ["P2L", "P2R"]
    },

    "SwitchSP1": {
        x: 46, y: 246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 360, y: 247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [
        ['SWSPR1', 'IN-1'],
        ['SWSPL2', 'IN-0'],
        ['SWSPR2', '24VNS'],
        ['SWSPL1', '24VNS'],
        ['24VPS', 'GND0PLCL'],
        ['BR1', '24VNS'],
        ['BL1', '24VPS'],
        ['BK1', 'IN-3'],
        ['IN-2', 'BK4'],
        ['BR4', '24VNS'],
        ['BL4', '24VPS'],
        ['OPS-VP', '24VNS'],
        ['OPS-VN', '24VPS'],
        ['OPS-NO', '24VNS'],
        ['THC-8', '24VNS'],
        ['THC-9', '24VNS'],
        ['THC-10', '24VPS'],
        ['DC-0', '24VNS'],
        ['OUT-0', 'LL'],
        ['LR', '24VPS'],
        ['DC-1', '24VNS'],
        ['OUT-1', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWU3', '120VNS'],
        ['RLSWDR3', 'P2R'],
        ['P2L', '120VPS'],
        ['VL', 'OUT-2'],
        ['DC-2', '24VNS'],
        ['VR', '24VPS'],
        ['OUT-3', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['24VNS', 'DC-3'],
        ['CoL', '120VPS'],
        ['DC-4', '24VNS'],
        ['OUT-4', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['OPS-COM', 'IN-5'],
        ['THC-7', 'IN-4'],
        ['CoR', 'RLSWU4'],
        ['120VNS', 'RLSWDR4'],
        ['CR', '120VNS'],
        ['RLSWU2', 'CL'],
        ['120VPS', 'RLSWDR2']
    ]

};

const PChocolateMachineStage3 = {
    "PLCInputAB": {
        x: 129, y: 223, Scale: 0.6,
        Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5"]
    },

    "PLCOutputAB": {
        x: 466, y: 227, Scale: 0.6,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4"],
    },

    "Relay3": {
        x: 880, y: 178, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 884, y: 503, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "ProS1": {
        x: 19, y: 314, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    //"THC":          {
    //    x:10, y:654, Scale: 0.5, Port: ["THC-2", "THC-8", "THC-9", "THC-10"]
    //},

    "OPS1": {
        x: 320, y: 666, Scale: 0.5, Port: ["OPS1-VP", "OPS1-NO", "OPS1-COM", "OPS1-VN"]
    },

    "OPS2": {
        x: 10, y: 666, Scale: 0.5, Port: ["OPS2-VP", "OPS2-NO", "OPS2-COM", "OPS2-VN"]
    },

    "ProS4": {
        x: 349, y: 317, Scale: 0.5, Port: ["BR4", "BK4", "BL4"]
    },

    "24VDCS": {
        x: 199, y: 771, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "120VDCS": {
        x: 811, y: 695, Scale: 0.7, Port: ["120VPS", "120VNS"]
    },

    "L": {
        x: 723, y: 249, Scale: 0.7, Port: ["LL", "LR"]
    },


    "C": {
        x: 776, y: 483, Scale: 0.7, Port: ["CL", "CR"]
    },

    "Cf": {
        x: 894, y: 310, Scale: 0.7, Port: ["CfU", "CfD"]
    },

    "Ch": {
        x: 732, y: 358, Scale: 0.7, Port: ["ChU", "ChD"]
    },

    "SwitchSP1": {
        x: 46, y: 246, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 360, y: 247, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [
        ['SWSPR2', '24VNS'],
        ['SWSPL2', 'IN-0'],
        ['IN-1', 'SWSPR1'],
        ['SWSPL1', '24VNS'],
        ['24VPS', 'GND0PLCL'],
        ['BR1', '24VNS'],
        ['BR4', '24VNS'],
        ['BL4', '24VPS'],
        ['BL1', '24VPS'],
        ['BK4', 'IN-2'],
        ['BK1', 'IN-3'],
        ['IN-5', 'OPS2-COM'],
        ['IN-4', 'OPS1-COM'],
        ['OPS1-VP', '24VNS'],
        ['OPS1-NO', '24VNS'],
        ['OPS1-VN', '24VPS'],
        ['OPS2-VN', '24VPS'],
        ['OPS2-VP', '24VNS'],
        ['OPS2-NO', '24VNS'],
        ['DC-0', '24VNS'],
        ['OUT-0', 'LL'],
        ['LR', '24VPS'],
        ['DC-1', '24VNS'],
        ['OUT-1', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWU3', '120VNS'],
        ['RLSWDR3', 'CfU'],
        ['CfD', '120VPS'],
        ['OUT-2', 'ChU'],
        ['ChD', '24VPS'],
        ['DC-2', '24VNS'],
        ['DC-3', '24VNS'],
        ['OUT-3', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['RLSWU4', '120VNS'],
        ['RLSWDR4', 'CR'],
        ['CL', '120VPS']
    ]
};

const PIronBarkStage1 = {
    "PLCInputAB": {
        x: 180, y: 125, Scale: 0.4,
        Port: ["IN-0", "IN-1", "IN-2", "IN-3",
            "IN-4", "IN-5", "IN-6", "IN-7", "IN-8",
            "GND0PLCL", "GND1PLCR"]
    },

    "PLCOutputAB": {
        x: 497, y: 134, Scale: 0.4,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3",
            "DC-4", "DC-5", "DC-6",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3",
            "OUT-4", "OUT-5", "OUT-6"]
    },

    "Relay1": {
        x: 727, y: 275, Scale: 0.7,
        Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
    },

    "Relay2": {
        x: 878, y: 171, Scale: 0.7,
        Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 700, y: 522, Scale: 0.7,
        Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 800, y: 480, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "Relay5": {
        x: 889, y: 370, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
    },

    "ProS1": {
        x: 27, y: 194, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    "ProS2": {
        x: 26, y: 273, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
    },

    "ProS3": {
        x: 350, y: 275, Scale: 0.5, Port: ["BR3", "BK3", "BL3"]
    },

    "THC1": {
        x: 313, y: 422, Scale: 0.5, Port: ["THC1-7", "THC1-8", "THC1-9", "THC1-10"]
    },

    "THC2": {
        x: 46, y: 506, Scale: 0.5, Port: ["THC2-7", "THC2-8", "THC2-9", "THC2-10"]
    },

    "OPS1": {
        x: 14, y: 369, Scale: 0.5, Port: ["OPS1-VP", "OPS1-NO", "OPS1-COM", "OPS1-VN"]
    },

    "OPS2": {
        x: 331, y: 177, Scale: 0.5, Port: ["OPS2-VP", "OPS2-NO", "OPS2-COM", "OPS2-VN"]
    },

    "24VDCS": {
        x: 171, y: 768, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "230VDCS": {
        x: 432, y: 768, Scale: 0.7, Port: ["230VPS", "230VNS"]
    },

    "400VDCS": {
        x: 663, y: 778, Scale: 0.7, Port: ["400VPS", "400VNS"]
    },

    "L": {
        x: 727, y: 133, Scale: 0.7, Port: ["LL", "LR"]
    },

    "V": {
        x: 726, y: 182, Scale: 0.7, Port: ["VL", "VR"]
    },

    "La": {
        x: 883, y: 282, Scale: 0.7, Port: ["LaL", "LaR"]
    },

    "F": {
        x: 722, y: 400, Scale: 0.7, Port: ["FL", "FR"]
    },

    "Cf": {
        x: 726, y: 649, Scale: 0.7, Port: ["CfU", "CfD"]
    },

    "Cn": {
        x: 921, y: 495, Scale: 0.7, Port: ["CnU", "CnD"]
    },

    "R": {
        x: 821, y: 604, Scale: 0.7, Port: ["RU", "RD"]
    },

    "SwitchSP1": {
        x: 30, y: 133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 388, y: 122, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [
        ['SWSPL2', 'IN-0'],
        ['SWSPR2', '24VNS'],
        ['IN-1', 'SWSPR1'],
        ['SWSPL1', '24VNS'],
        ['24VPS', 'GND0PLCL'],
        ['OPS2-VP', '24VNS'],
        ['OPS2-VN', '24VPS'],
        ['OPS2-NO', '24VNS'],
        ['OPS2-COM', 'IN-2'],
        ['IN-3', 'BK1'],
        ['BR1', '24VNS'],
        ['BL1', '24VPS'],
        ['BK2', 'IN-5'],
        ['BR2', '24VNS'],
        ['BL2', '24VPS'],
        ['BR3', '24VNS'],
        ['BL3', '24VPS'],
        ['BK3', 'IN-4'],
        ['OPS1-COM', 'IN-7'],
        ['OPS1-VP', '24VNS'],
        ['OPS1-VN', '24VPS'],
        ['OPS1-NO', '24VNS'],
        ['IN-6', 'THC1-7'],
        ['THC1-8', '24VNS'],
        ['THC1-9', '24VNS'],
        ['THC1-10', '24VPS'],
        ['THC2-7', 'IN-8'],
        ['THC2-8', '24VNS'],
        ['THC2-9', '24VNS'],
        ['THC2-10', '24VPS'],
        ['GND1PLCR', '24VPS'],
        ['DC-0', '24VNS'],
        ['DC-1', '24VNS'],
        ['DC-2', '24VNS'],
        ['DC-3', '24VNS'],
        ['DC-4', '24VNS'],
        ['DC-5', '24VNS'],
        ['DC-6', '24VNS'],
        ['OUT-0', 'LL'],
        ['LR', '24VPS'],
        ['OUT-1', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['RLSWDR2', 'LaR'],
        ['LaL', '400VNS'],
        ['400VPS', 'RLSWU2'],
        ['OUT-2', 'VL'],
        ['VR', '24VPS'],
        ['OUT-3', 'RLCU1'],
        ['RLCD1', '24VPS'],
        ['RLSWDR1', 'FR'],
        ['FL', '400VNS'],
        ['400VPS', 'RLSWU1'],
        ['OUT-4', 'RLCU5'],
        ['RLCD5', '24VPS'],
        ['RLSWDR5', 'CnU'],
        ['CnD', '230VNS'],
        ['230VPS', 'RLSWU5'],
        ['OUT-5', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWDR3', 'CfU'],
        ['CfD', '230VNS'],
        ['230VPS', 'RLSWU3'],
        ['OUT-6', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['RLSWDR4', 'RU'],
        ['RD', '400VNS'],
        ['400VPS', 'RLSWU4']
    ]
};

const PIronBarkStage2 = {
    "PLCInputAB": {
        x: 180, y: 125, Scale: 0.4,
        Port: ["IN-0", "IN-1", "IN-2",
            "IN-3", "IN-4", "IN-5",
            "GND0PLCL"]
    },

    "PLCOutputAB": {
        x: 497, y: 134, Scale: 0.4,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3", "DC-4", "DC-5",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3", "OUT-4", "OUT-5"],
    },

    "Relay1": {
        x: 727, y: 275, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
    },

    "Relay2": {
        x: 822, y: 110, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 700, y: 522, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 891, y: 523, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "Relay5": {
        x: 895, y: 282, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
    },

    "ProS1": {
        x: 27, y: 194, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    "ProS2": {
        x: 336, y: 191, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
    },

    "ProS3": {
        x: 27, y: 300, Scale: 0.5, Port: ["BR3", "BK3", "BL3"]
    },

    "OPS": {
        x: 325, y: 300, Scale: 0.5, Port: ["OPS-VP", "OPS-COM", "OPS-NO", "OPS-VN"]
    },

    "24VDCS": {
        x: 171, y: 768, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "230VDCS": {
        x: 432, y: 768, Scale: 0.7, Port: ["230VPS", "230VNS"]
    },

    "400VDCS": {
        x: 663, y: 778, Scale: 0.7, Port: ["400VPS", "400VNS"]
    },

    "L": {
        x: 687, y: 73, Scale: 0.7, Port: ["LL", "LR"]
    },

    "FM": {
        x: 833, y: 217, Scale: 0.7, Port: ["FMU", "FMD"]
    },

    "LS": {
        x: 722, y: 400, Scale: 0.7, Port: ["LSL", "LSR"]
    },

    "RT": {
        x: 726, y: 649, Scale: 0.7, Port: ["RTU", "RTD"]
    },

    "Cb": {
        x: 916, y: 394, Scale: 0.7, Port: ["CbU", "CbD"]
    },

    "CP": {
        x: 917, y: 650, Scale: 0.7, Port: ["CPU", "CPD"]
    },

    "SwitchSP1": {
        x: 30, y: 133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 344, y: 121, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [
        ['SWSPL2', 'IN-0'],
        ['SWSPR2', '24VNS'],
        ['IN-1', 'SWSPR1'],
        ['SWSPL1', '24VNS'],
        ['GND0PLCL', '24VPS'],
        ['IN-2', 'OPS-COM'],
        ['OPS-VP', '24VNS'],
        ['OPS-VN', '24VPS'],
        ['OPS-NO', '24VNS'],
        ['IN-3', 'BK1'],
        ['BR1', '24VNS'],
        ['BL1', '24VPS'],
        ['IN-4', 'BK2'],
        ['BR2', '24VNS'],
        ['BL2', '24VPS'],
        ['IN-5', 'BK3'],
        ['BR3', '24VNS'],
        ['BL3', '24VPS'],
        ['DC-0', '24VNS'],
        ['DC-1', '24VNS'],
        ['DC-2', '24VNS'],
        ['DC-3', '24VNS'],
        ['DC-4', '24VNS'],
        ['LL', 'OUT-0'],
        ['LR', '24VPS'],
        ['OUT-1', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['RLSWDR2', 'FMU'],
        ['FMD', '400VNS'],
        ['400VPS', 'RLSWU2'],
        ['OUT-2', 'RLCU5'],
        ['RLCD5', '24VPS'],
        ['RLSWDR5', 'CbU'],
        ['CbD', '230VNS'],
        ['230VPS', 'RLSWU5'],
        ['OUT-3', 'RLCU1'],
        ['RLCD1', '24VPS'],
        ['RLSWDR1', 'LSR'],
        ['LSL', '400VNS'],
        ['400VPS', 'RLSWU1'],
        ['OUT-4', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWDR3', 'RTU'],
        ['RTD', '230VNS'],
        ['230VPS', 'RLSWU3'],
        ['DC-5', '24VNS'],
        ['OUT-5', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['RLSWDR4', 'CPU'],
        ['CPD', '400VNS'],
        ['400VPS', 'RLSWU4']
    ]
};


const PEngineBlockStage1 = {
    "PLCInputAB": {
        x: 187, y: 123, Scale: 0.4,
        Port: ["IN-0", "IN-1", "IN-2", "IN-3",
            "IN-4", "IN-5", "IN-6", "IN-7", "IN-10",
            "GND0PLCL", "GND1PLCL"]
    },

    "PLCOutputAB": {
        x: 497, y: 134, Scale: 0.4,
        Port: ["DC-0", "DC-1", "DC-2", "DC-3",
            "DC-4", "DC-5", "DC-6", "DC-7",
            "OUT-0", "OUT-1", "OUT-2", "OUT-3",
            "OUT-4", "OUT-5", "OUT-6", "OUT-7"],
    },

    "Relay1": {
        x: 688, y: 162, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
    },

    "Relay2": {
        x: 894, y: 184, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 693, y: 331, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 894, y: 370, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "ProS1": {
        x: 348, y: 179, Scale: 0.5, Port: ["BR1", "BK1", "BL1"]
    },

    "ProS2": {
        x: 24, y: 230, Scale: 0.5, Port: ["BR2", "BK2", "BL2"]
    },

    "OPS1": {
        x: 330, y: 268, Scale: 0.5, Port: ["OPS1-VP", "OPS1-NO", "OPS1-COM", "OPS1-VN"]
    },

    "OPS2": {
        x: 24, y: 329, Scale: 0.5, Port: ["OPS2-VP", "OPS2-COM", "OPS2-NO", "OPS2-VN"]
    },

    "THC": {
        x: 200, y: 432, Scale: 0.7, Port: ["THC-7", "THC-8", "THC-9", "THC-10"]
    },

    "24VDCS": {
        x: 151, y: 639, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "230VDCS": {
        x: 429, y: 644, Scale: 0.7, Port: ["230VPS", "230VNS"]
    },

    "400VDCS": {
        x: 681, y: 637, Scale: 0.7, Port: ["400VPS", "400VNS"]
    },

    "L": {
        x: 792, y: 131, Scale: 0.7, Port: ["LL", "LR"]
    },

    "P": {
        x: 792, y: 175, Scale: 0.7, Port: ["PL", "PR"]
    },

    "La": {
        x: 792, y: 220, Scale: 0.7, Port: ["LaL", "LaR"]
    },

    "V1": {
        x: 792, y: 267, Scale: 0.7, Port: ["V1L", "V1R"]
    },

    "V2": {
        x: 792, y: 319, Scale: 0.7, Port: ["V2L", "V2R"]
    },

    "C": {
        x: 792, y: 377, Scale: 0.7, Port: ["CL", "CR"]
    },

    "O": {
        x: 792, y: 428, Scale: 0.7, Port: ["OL", "OR"]
    },

    "S": {
        x: 42, y: 171, Scale: 0.7, Port: ["SL", "SR"]
    },

    "ABBRobotS1": {
        x: 507, y: 517, Scale: 0.7,
        Port: ["ABBS1PWRDOL", "ABBS1GNDDOL", "ABBS1DO01",
            "ABBS1DI01", "ABBS1GNDDIR"]
    },

    "SwitchSP1": {
        x: 58, y: 111, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 357, y: 104, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "Key": [['SWSPR1', 'IN-1'],
        ['SWSPL2', 'IN-0'],
        ['SWSPR2', '24VNS'],
        ['SWSPL1', '24VNS'],
        ['GND0PLCL', '24VPS'],
        ['IN-3', 'SR'],
        ['SL', '24VNS'],
        ['BR2', '24VNS'],
        ['BL2', '24VPS'],
        ['BK2', 'IN-5'],
        ['THC-7', 'IN-6'],
        ['THC-8', '24VNS'],
        ['THC-9', '24VNS'],
        ['THC-10', '24VPS'],
        ['OPS1-COM', 'IN-4'],
        ['OPS1-VP', '24VNS'],
        ['OPS1-VN', '24VPS'],
        ['OPS1-NO', '24VNS'],
        ['OPS2-VP', '24VNS'],
        ['OPS2-VN', '24VPS'],
        ['OPS2-COM', 'IN-7'],
        ['OPS2-NO', '24VNS'],
        ['GND1PLCL', 'ABBS1GNDDOL'],
        ['24VPS', 'ABBS1GNDDOL'],
        ['ABBS1DO01', 'IN-10'],
        ['ABBS1PWRDOL', '24VNS'],
        ['DC-0', '24VNS'],
        ['DC-1', '24VNS'],
        ['DC-2', '24VNS'],
        ['DC-3', '24VNS'],
        ['DC-4', '24VNS'],
        ['DC-5', '24VNS'],
        ['DC-6', '24VNS'],
        ['DC-7', '24VNS'],
        ['OUT-0', 'LL'],
        ['LR', '24VPS'],
        ['OUT-1', 'RLCU1'],
        ['RLCD1', '24VPS'],
        ['RLSWU1', 'PL'],
        ['PR', '230VNS'],
        ['230VPS', 'RLSWDR1'],
        ['OUT-2', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['RLSWU2', 'LaR'],
        ['LaL', '400VPS'],
        ['400VNS', 'RLSWDR2'],
        ['OUT-3', 'V1L'],
        ['V1R', '24VPS'],
        ['OUT-4', 'V2L'],
        ['V2R', '24VPS'],
        ['OUT-5', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWU3', 'CL'],
        ['CR', '230VNS'],
        ['RLSWDR3', '230VPS'],
        ['OUT-6', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['RLSWU4', 'OR'],
        ['OL', '400VPS'],
        ['400VNS', 'RLSWDR4'],
        ['OUT-7', 'ABBS1DI01'],
        ['ABBS1GNDDIR', '24VPS']
    ]
};

const PEngineBlockStage2 = {
    "PLCInputAB": {
        x: 180, y: 125, Scale: 0.4,
        Port: ["GND0PLCL", "IN-0", "IN-1", "IN-2", "IN-3", "IN-4", "IN-5",
            "IN-6", "IN-7", "IN-8"]
    },

    "PLCOutputAB1": {
        x: 471, y: 139, Scale: 0.4,
        Port: ["DC1-0", "DC1-2", "DC1-4", "DC1-7",
            "OUT1-0", "OUT1-2", "OUT1-4", "OUT1-7",],
    },

    "PLCOutputAB2": {
        x: 640, y: 145, Scale: 0.4,
        Port: ["DC2-0", "DC2-1", "DC2-3", "DC2-5", "DC2-6", "DC2-7",
            "OUT2-0", "OUT2-1", "OUT2-3", "OUT2-5", "OUT2-6", "OUT2-7"],
    },

    "Relay1": {
        x: 800, y: 113, Scale: 0.7, Port: ["RLCU1", "RLCD1", "RLSWU1", "RLSWDL1", "RLSWDR1"]
    },

    "Relay2": {
        x: 902, y: 178, Scale: 0.7, Port: ["RLCU2", "RLCD2", "RLSWU2", "RLSWDL2", "RLSWDR2"]
    },

    "Relay3": {
        x: 902, y: 353, Scale: 0.7, Port: ["RLCU3", "RLCD3", "RLSWU3", "RLSWDL3", "RLSWDR3"]
    },

    "Relay4": {
        x: 763, y: 511, Scale: 0.7, Port: ["RLCU4", "RLCD4", "RLSWU4", "RLSWDL4", "RLSWDR4"]
    },

    "Relay5": {
        x: 878, y: 537, Scale: 0.7, Port: ["RLCU5", "RLCD5", "RLSWU5", "RLSWDL5", "RLSWDR5"]
    },

    //"Relay6":       {
    //    x:290, y:734, Scale: 0.7, Port: ["RLCU6", "RLCD6", "RLSWU6", "RLSWDL6", "RLSWDR6"]
    //},

    //"Relay7":       {
    //    x:501, y:731, Scale: 0.7, Port: ["RLCU7", "RLCD7", "RLSWU7", "RLSWDL7", "RLSWDR7"]
    // },

    // "Relay8":       {
    //      x:886, y:614, Scale: 0.7, Port: ["RLCU8", "RLCD8", "RLSWU8", "RLSWDL8", "RLSWDR8"]
    //  },

    "OPS3": {
        x: 13, y: 184, Scale: 0.5, Port: ["OPS3-VP", "OPS3-NO", "OPS3-COM", "OPS3-VN"]
    },

    "OPS4": {
        x: 325, y: 183, Scale: 0.5, Port: ["OPS4-VP", "OPS4-NO", "OPS4-COM", "OPS4-VN"]
    },

    "OPS5": {
        x: 13, y: 324, Scale: 0.5, Port: ["OPS5-VP", "OPS5-NO", "OPS5-COM", "OPS5-VN"]
    },

    "OPS6": {
        x: 325, y: 305, Scale: 0.5, Port: ["OPS6-VP", "OPS6-NO", "OPS6-COM", "OPS6-VN"]
    },

    "OPS7": {
        x: 48, y: 460, Scale: 0.5, Port: ["OPS7-VP", "OPS7-NO", "OPS7-COM", "OPS7-VN"]
    },

    "OPS8": {
        x: 325, y: 422, Scale: 0.5, Port: ["OPS8-VP", "OPS8-NO", "OPS8-COM", "OPS8-VN"]
    },

    "24VDCS": {
        x: 482, y: 505, Scale: 0.7, Port: ["24VPS", "24VNS"]
    },

    "230VDCS": {
        x: 607, y: 606, Scale: 0.7, Port: ["230VPS", "230VNS"]
    },

    "24VDC": {
        x: 202, y: 546, Scale: 0.7, Port: ["24VP", "24VN"]
    },

    //"400VDCS":      {
    //                   x:595, y:525, Scale: 0.7, Port: ["400VPS", "400VNS"]
    //              },

    "L": {
        x: 691, y: 90, Scale: 0.7, Port: ["LL", "LR"]
    },

    "C2": {
        x: 804, y: 245, Scale: 0.7, Port: ["C2L", "C2R"]
    },

    "C3": {
        x: 836, y: 302, Scale: 0.7, Port: ["C3L", "C3R"]
    },

    "C4": {
        x: 846, y: 481, Scale: 0.7, Port: ["C4L", "C4R"]
    },

    "C5": {
        x: 765, y: 632, Scale: 0.7, Port: ["C5L", "C5R"]
    },

    "C6": {
        x: 881, y: 645, Scale: 0.7, Port: ["C6L", "C6R"]
    },

    //"CNCM":         {
    //                   x:586, y:669, Scale: 0.7, Port: ["CNCML", "CNCMR"]
    //               },

    //"DM":           {
    //                   x:782, y:648, Scale: 0.7, Port: ["DML", "DMR"]
    //               },

    //"GM":           {
    //                  x:244, y:681, Scale: 0.7, Port: ["GML", "GMR"]
    //              },

    "ABBRobotS2": {
        x: 85, y: 664, Scale: 0.7,
        Port: ["ABBS2PWRDOL", "ABBS2GNDDOL", "ABBS2DO01",
            "ABBS2DI01", "ABBS2GNDDIR"]
    },

    "SwitchSP1": {
        x: 30, y: 133, Scale: 0.7, Port: ["SWSPL1", "SWSPR1"]
    },

    "SwitchSP2": {
        x: 344, y: 121, Scale: 0.7, Port: ["SWSPL2", "SWSPR2"]
    },

    "CNCController": {
        x: 292, y: 709, Scale: 0.6,
        Port: ["CNCIN-0", "CNCGND0L"],
    },

    "DrillController": {
        x: 484, y: 731, Scale: 0.6,
        Port: ["DRILLIN-0", "DRILLGND0R"],
    },

    "GrinderController": {
        x: 659, y: 737, Scale: 0.6,
        Port: ["GRIIN-0", "GRIGND0R"],
    },

    "Key": [['IN-1', 'SWSPR1'],
        ['SWSPL1', '24VP'],
        ['IN-0', 'SWSPL2'],
        ['SWSPR2', '24VP'],
        ['24VN', 'GND0PLCL'],
        ['IN-2', 'ABBS2DO01'],
        ['ABBS2PWRDOL', '24VP'],
        ['24VN', 'ABBS2GNDDOL'],
        ['OPS3-COM', 'IN-3'],
        ['OPS3-VP', '24VP'],
        ['OPS3-VN', '24VN'],
        ['OPS3-NO', '24VP'],
        ['OPS4-COM', 'IN-4'],
        ['OPS4-VP', '24VP'],
        ['OPS4-VN', '24VN'],
        ['OPS4-NO', '24VP'],
        ['OPS5-VP', '24VP'],
        ['OPS5-VN', '24VN'],
        ['OPS5-COM', 'IN-5'],
        ['OPS5-NO', '24VP'],
        ['OPS6-VP', '24VP'],
        ['OPS6-VN', '24VN'],
        ['OPS6-COM', 'IN-6'],
        ['OPS6-NO', '24VP'],
        ['IN-7', 'OPS7-COM'],
        ['OPS7-VP', '24VP'],
        ['OPS7-VN', '24VN'],
        ['OPS7-NO', '24VP'],
        ['OPS8-VP', '24VP'],
        ['OPS8-VN', '24VN'],
        ['OPS8-COM', 'IN-8'],
        ['OPS8-NO', '24VP'],
        ['DC1-0', '24VP'],
        ['OUT1-0', 'ABBS2DI01'],
        ['ABBS2GNDDIR', '24VN'],
        ['DC1-2', '24VP'],
        ['OUT1-2', 'CNCIN-0'],
        ['CNCGND0L', '24VN'],
        ['DC1-4', '24VP'],
        ['OUT1-4', 'DRILLIN-0'],
        ['DRILLGND0R', '24VN'],
        ['DC1-7', '24VP'],
        ['OUT1-7', 'GRIIN-0'],
        ['GRIGND0R', '24VN'],
        ['DC2-0', '24VNS'],
        ['OUT2-0', 'LL'],
        ['LR', '24VPS'],
        ['DC2-1', '24VNS'],
        ['OUT2-1', 'RLCU1'],
        ['RLCD1', '24VPS'],
        ['RLSWU1', 'C2R'],
        ['C2L', '230VNS'],
        ['230VPS', 'RLSWDR1'],
        ['DC2-3', '24VNS'],
        ['OUT2-3', 'RLCU2'],
        ['RLCD2', '24VPS'],
        ['RLSWDR2', 'C3R'],
        ['RLSWU2', '230VPS'],
        ['C3L', '230VNS'],
        ['DC2-5', '24VNS'],
        ['OUT2-5', 'RLCU3'],
        ['RLCD3', '24VPS'],
        ['RLSWU3', '230VPS'],
        ['RLSWDR3', 'C4R'],
        ['C4L', '230VNS'],
        ['DC2-6', '24VNS'],
        ['OUT2-6', 'RLCU4'],
        ['RLCD4', '24VPS'],
        ['RLSWDR4', 'C5R'],
        ['C5L', '230VNS'],
        ['230VPS', 'RLSWU4'],
        ['DC2-7', '24VNS'],
        ['OUT2-7', 'RLCU5'],
        ['RLCD5', '24VPS'],
        ['230VPS', 'RLSWU5'],
        ['RLSWDR5', 'C6R'],
        ['C6L', '230VNS']
    ]
};

const P25Port = {
    "PLCInput": {
        x: 50, y: 150, Port: ["GNDPLCR","IN-0","IN-2"]
    },

    "Switch": {
        x: 560, y: 150, Port: ["SWL", "SWR"]
    },

    "Relay": {
        x: 500, y: 350, Scale: 0.8, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "Sensor": {
        x: 760, y: 250, Port: ["SL", "SR"]
    },

    "5VDC": {
        x: 750, y: 550, Port: ["5VP", "5VN"]
    },

    "24VDC": {
        x: 400, y: 700, Port: ["24VP", "24VN"]
    },

    "Key": [["IN-0", "SWL"], ["SWR", "24VP"], ["24VP", "RLSWDR"],
        ["RLSWU", "IN-2"], ["24VN", "GNDPLCR"], ["RLCU", "SL"], ["SR", "5VN"], ["5VP","RLCD"]]
};


const P26Port = {
    "PLCOutput": {
        x: 550, y: 100, Port: ["OUT-4", "DC-4"],
    },

    "Relay": {
        x: 300, y: 450, Scale: 0.6, Port: ["RLCU", "RLCD", "RLSWU", "RLSWDL", "RLSWDR"]
    },

    "Motor": {
        x: 150, y: 100, Port: ["MTL", "MTR"]
    },

    "5VDC": {
        x: 150, y: 700, Port: ["5VP", "5VN"]
    },

    "24VDC": {
        x: 600, y: 700, Port: ["24VP", "24VN"]
    },

    "Key": [["OUT-4", "RLCU"], ["DC-4", "24VP"], ["RLSWU", "MTR"], ["MTL", "5VP"], ["RLSWDR", "5VN"], ["RLCD", "24VN"]]
};

const DictModule = {
    P1: P1Port, P2: P2Port, P3: P3Port, P4: P4Port,
    P5: P5Port, P6: P6Port, P7: P7Port, P8: P8Port,
    P9: P9Port, P10: P10Port, P11: P11Port, P12: P12Port,
    P13: P13Port, P14: P14Port, P15: P15Port, P16: P16Port,
    P17: P17Port,
    P18: PChocolateMachineStage1,
    P19: PChocolateMachineStage2,
    P20: PChocolateMachineStage3,
    P21: PEngineBlockStage1,
    P22: PEngineBlockStage2,
    P23: PIronBarkStage1,
    P24: PIronBarkStage2,
    P25: P25Port,
    P26: P26Port
};


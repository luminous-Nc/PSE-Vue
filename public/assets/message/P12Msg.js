export const P12Msg = [
    {
        Ports: ["GND-RND","IN-RND1"],
        Message: "The ground does not connect to an input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","IN-RND2"],
        Message: "The ground does not connect to an input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","IN-RND3"],
        Message: "The ground does not connect to an input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","24VP"],
        Message: "The ground does not connect to the positive terminal",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","24VN"],
        Message: "The ground connects to the negative terminal",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","DO-RND"],
        Message: "The ground does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","0V-RND"],
        Message: "The ground does not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","DOSRC1-RND"],
        Message: "The ground connects to the DOSRC1",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","BTSTRL"],
        Message: "The ground does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","BTSTRR"],
        Message: "The ground does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","BTMSTPL"],
        Message: "The ground does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","BTMSTPR"],
        Message: "The ground does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","IN-RND2"],
        Message: "The inputs do not connect together",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","IN-RND3"],
        Message: "The inputs do not connect together",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","24VP"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","24VN"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","DO-RND"],
        Message: "The input connects to the output",
        Color: "Green"
     },
     {
        Ports: ["IN-RND1","0V-RND"],
        Message: "The inputs do not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","DOSRC1-RND"],
        Message: "The inputs do not connect to the DOSRC1",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","BTSTRL"],
        Message: "The lowest port should not connect to a button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND1","BTSTRR"],
        Message: "The lowest port should not connect to a button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND1","BTMSTPL"],
        Message: "The lowest port should not connect to a button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND1","BTMSTPR"],
        Message: "The lowest port should not connect to a button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND2","IN-RND3"],
        Message: "The inputs do not connect together",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","24VP"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","24VN"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","DO-RND"],
        Message: "This input could connect to the output, but the lowest port should instead",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND2","0V-RND"],
        Message: "The inputs do not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","DOSRC1-RND"],
        Message: "The inputs do not connect to the DOSRC1",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","BTSTRL"],
        Message: "The 2nd input connects to the left side of the start button",
        Color: "Green"
     },
     {
        Ports: ["IN-RND2","BTSTRR"],
        Message: "The 2nd input could connect to the right side of the start button, but for clarity should be connected to the left",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND2","BTMSTPL"],
        Message: "The 2nd input could be connected to the motor stop, but should be connected to the start button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND2","BTMSTPR"],
        Message: "The 2nd input could be connected to the motor stop, but should be connected to the start button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND3","24VP"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND3","24VN"],
        Message: "The inputs do not connect to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND3","DO-RND"],
        Message: "This input could connect to the output, but the lowest port should instead",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND3","0V-RND"],
        Message: "The inputs do not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["IN-RND3","DOSRC1-RND"],
        Message: "The inputs do not connect to the DOSRC1",
        Color: "Red"
     },
     {
        Ports: ["IN-RND3","BTSTRL"],
        Message: "The 2nd input could be connected to the start button, but should be connected to the motor stop",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND3","BTSTRR"],
        Message: "The 2nd input could be connected to the start button, but should be connected to the motor stop",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND3","BTMSTPL"],
        Message: "The 3nd input connects to the left side of the motor stop",
        Color: "Green"
     },
     {
        Ports: ["IN-RND3","BTMSTPR"],
        Message: "The 3nd input could connect to the right side of the motor stop, but for clarity should be connected to the left",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","DO-RND"],
        Message: "The positive terminal does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["24VP","0V-RND"],
        Message: "The positive terminal connects to the 0V",
        Color: "Green"
     },
     {
        Ports: ["24VP","DOSRC1-RND"],
        Message: "The positivve terminal does not connect to the DOSRC1",
        Color: "Red"
     },
     {
        Ports: ["24VP","BTSTRL"],
        Message: "The positve terminal could connect to the left side of the start button, but for clarity should be connected to the right",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","BTSTRR"],
        Message: "The positive terminal connects to the right side of the start button",
        Color: "Green"
     },
     {
        Ports: ["24VP","BTMSTPL"],
        Message: "The positve terminal could connect to the left side of the motor stop, but for clarity should be connected to the right",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","BTMSTPR"],
        Message: "The positive terminal connects to the right side of the motor stop",
        Color: "Green"
     },
     {
        Ports: ["24VN","DO-RND"],
        Message: "The negative terminal does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["24VN","0V-RND"],
        Message: "The negative terminal does not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["24VN","DOSRC1-RND"],
        Message: "The negative terminal connects to the DOSRC1",
        Color: "Green"
     },
     {
        Ports: ["24VN","BTSTRL"],
        Message: "The negative terminal does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["24VN","BTSTRR"],
        Message: "The negative terminal does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["24VN","BTMSTPL"],
        Message: "The negative terminal does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["24VN","BTMSTPR"],
        Message: "The negative terminal does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","0V-RND"],
        Message: "The output does not connect to a FANUC I/O port",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","DOSRC1-RND"],
        Message: "The output does not connect to a FANUC I/O port",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","BTSTRL"],
        Message: "The output does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","BTSTRR"],
        Message: "The output does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","BTMSTPL"],
        Message: "The output does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DO-RND","BTMSTPR"],
        Message: "The output does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["0V-RND","DOSRC1-RND"],
        Message: "The 0V does not connect to the DOSRC1",
        Color: "Red"
     },
     {
        Ports: ["0V-RND","BTSTRL"],
        Message: "The 0V does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["0V-RND","BTSTRR"],
        Message: "The 0V does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["0V-RND","BTMSTPL"],
        Message: "The 0V does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["0V-RND","BTMSTPR"],
        Message: "The 0V does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DOSRC1-RND","BTSTRL"],
        Message: "The DOSRC1 does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DOSRC1-RND","BTSTRR"],
        Message: "The DOSRC1 does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DOSRC1-RND","BTMSTPL"],
        Message: "The DOSRC1 does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["DOSRC1-RND","BTMSTPR"],
        Message: "The DOSRC1 does not connect to a button",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","BTSTRR"],
        Message: "The buttons do not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","BTMSTPL"],
        Message: "The buttons do not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","BTMSTPR"],
        Message: "The buttons do not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTSTRR","BTMSTPL"],
        Message: "The buttons do not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTSTRR","BTMSTPR"],
        Message: "The buttons do not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTMSTPL","BTMSTPR"],
        Message: "The buttons do not connect together",
        Color: "Red"
     }
]

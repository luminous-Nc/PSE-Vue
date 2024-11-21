export const P14Msg = [
    {
        Ports: ["GND-RND","IN-RND1"],
        Message: "The ground does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","IN-RND2"],
        Message: "The ground does not connect to the input",
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
        Ports: ["GND-RND","BTSTRL"],
        Message: "The ground does not connect to the button",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","BTSTRR"],
        Message: "The ground does not connect to the button",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","GND-RND"],
        Message: "The grounds connect together",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","OMRON-OUT-RND"],
        Message: "The ground does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","IN-RND2"],
        Message: "The inputs do not cconnect together",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","24VP"],
        Message: "The inputs are not connected to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","24VN"],
        Message: "The inputs are not connected to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","BTSTRL"],
        Message: "The 2nd input should be connected to the button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND1","BTSTRR"],
        Message: "The 2nd input should be connected to the button",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND1","GND-RND"],
        Message: "The inputs do not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["IN-RND1","OMRON-OUT-RND"],
        Message: "The 1st input connects to the output",
        Color: "Green"
     },
     {
        Ports: ["IN-RND2","24VP"],
        Message: "The inputs are not connected to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","24VN"],
        Message: "The inputs are not connected to the battery",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","BTSTRL"],
        Message: "The 2nd input connects to the left side of the button",
        Color: "Green"
     },
     {
        Ports: ["IN-RND2","BTSTRR"],
        Message: "The 2nd input could connect to the right side of the button, but for clarity should be connected to the left",
        Color: "Yellow"
     },
     {
        Ports: ["IN-RND2","GND-RND"],
        Message: "The inputs do not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["IN-RND2","OMRON-OUT-RND"],
        Message: "The 1st input should be connected to the output",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","BTSTRL"],
        Message: "The positive could connect to the left side of the button, but for clarity should be connected to the right",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","BTSTRR"],
        Message: "The positive terminal connects to the right side of the button",
        Color: "Green"
     },
     {
        Ports: ["24VP","GND-RND"],
        Message: "The positive terminal does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["24VP","OMRON-OUT-RND"],
        Message: "The battery does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["24VN","BTSTRL"],
        Message: "The negative terminal does not connect to the button",
        Color: "Red"
     },
     {
        Ports: ["24VN","BTSTRR"],
        Message: "The negative terminal does not connect to the button",
        Color: "Red"
     },
     {
        Ports: ["24VN","GND-RND"],
        Message: "The ground connects to the negative terminal",
        Color: "Green"
     },
     {
        Ports: ["24VN","OMRON-OUT-RND"],
        Message: "The battery does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","BTSTRR"],
        Message: "The button does not connect together",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","GND-RND"],
        Message: "The button does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["BTSTRL","OMRON-OUT-RND"],
        Message: "The button does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["BTSTRR","GND-RND"],
        Message: "The button does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["BTSTRR","OMRON-OUT-RND"],
        Message: "The button does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","OMRON-OUT-RND"],
        Message: "The ground does not connect to the output",
        Color: "Red"
     },
]

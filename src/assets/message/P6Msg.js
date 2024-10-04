export const P6Msg = [
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","SL"],
        Message: "The positive terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["24VP","SR"],
        Message: "The positive terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["24VP","0VDC"],
        Message: "The positive terminal does not connect to the 0VDC",
        Color: "Red"
     },
     {
        Ports: ["24VP","COMAU-IN-RND"],
        Message: "The positive terminal connects to the input",
        Color: "Green"
     },
     {
        Ports: ["24VN","SL"],
        Message: "The negative terminal can connect to the left side of the switch, but for clarity should be attached to the right side",
        Color: "Yellow"
     },
     {
        Ports: ["24VN","SR"],
        Message: "The negative terminal connects to the right side of the switch",
        Color: "Green"
     },
     {
        Ports: ["24VN","0VDC"],
        Message: "The negative terminal does not connect to the 0VDC",
        Color: "Red"
     },
     {
        Ports: ["24VN","COMAU-IN-RND"],
        Message: "The negative terminal does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SL","SR"],
        Message: "The switch should not connect to itself",
        Color: "Red"
     },
     {
        Ports: ["SL","0VDC"],
        Message: "The left side of the switch connects to the 0VDC",
        Color: "Green"
     },
     {
        Ports: ["SL","COMAU-IN-RND"],
        Message: "The switch does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SR","0VDC"],
        Message: "The 0VDC can connect to the right side of the switch, but for clarity should be attached to the left side",
        Color: "Yellow"
     },
     {
        Ports: ["SR","COMAU-IN-RND"],
        Message: "The switch does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["0VDC","COMAU-IN-RND"],
        Message: "The 0VDC and input do not connect directly",
        Color: "Red"
     },
     
]

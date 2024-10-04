export const P11Msg = [
    {
        Ports: ["GND-RND","IN-RND"],
        Message: "The input does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","COMAU-OUT-RND"],
        Message: "The ground connects to the output",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","0VDC"],
        Message: "The ground connects to the 0VDC",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","24VDC"],
        Message: "The ground does not connect to the 24VDC",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","COMAU-OUT-RND"],
        Message: "The input does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","0VDC"],
        Message: "The input does not connect to the 0VDC",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","24VDC"],
        Message: "The input connects to the 24VDC",
        Color: "Green"
     },
     {
        Ports: ["COMAU-OUT-RND","0VDC"],
        Message: "The output connects to the 0VDC",
        Color: "Green"
     },
     {
        Ports: ["COMAU-OUT-RND","24VDC"],
        Message: "The output does not connect to the 24VDC",
        Color: "Red"
     },
     {
        Ports: ["0VDC","24VDC"],
        Message: "The 0VDC and 24VDC do not connect",
        Color: "Red"
     },
     
]

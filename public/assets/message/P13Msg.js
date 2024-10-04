export const P13Msg = [
    {
        Ports: ["GND-RND","IN-RND"],
        Message: "The ground does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","24V-RND"],
        Message: "The ground does not connect to the 24V",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","GNDDO-RND"],
        Message: "The grounds connect together",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","DO-RND"],
        Message: "The output connects to the ground",
        Color: "Green"
     },
     {
        Ports: ["IN-RND","24V-RND"],
        Message: "The input connects to the 24V",
        Color: "Green"
     },
     {
        Ports: ["IN-RND","GNDDO-RND"],
        Message: "The input does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","DO-RND"],
        Message: "The input does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["24V-RND","GNDDO-RND"],
        Message: "The 24V does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["24V-RND","DO-RND"],
        Message: "The 24V does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["GNDDO-RND","DO-RND"],
        Message: "The output connects to the ground",
        Color: "Green"
     },
]

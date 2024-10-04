export const P8Msg = [
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","SL"],
        Message: "The positive terminal connects to the left side of the switch",
        Color: "Green"
     },
     {
        Ports: ["24VP","SR"],
        Message: "The positive terminal can connect to the right side of the switch, but should be connected on the left for clarity",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","GNDDI-RND"],
        Message: "The positive terminal does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["24VP","DI-RND"],
        Message: "The positive terminal does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["24VN","SL"],
        Message: "The negative terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["24VN","SR"],
        Message: "The negative terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["24VN","GNDDI-RND"],
        Message: "The negative terminal connects to the ground",
        Color: "Green"
     },
     {
        Ports: ["24VN","DI-RND"],
        Message: "The negative terminal does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SL","SR"],
        Message: "The switch should not connect to itself",
        Color: "Red"
     },
     {
        Ports: ["SL","GNDDI-RND"],
        Message: "The left side of the switch does not connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["SL","DI-RND"],
        Message: "The left side of the switch does not connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["SR","GNDDI-RND"],
        Message: "The right side of the switch does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["SR","DI-RND"],
        Message: "The right side of the switch connects to the input",
        Color: "Green"
     },
     {
        Ports: ["GNDDI-RND","DI-RND"],
        Message: "The ground and input do not directly cconnect",
        Color: "Red"
     },
     
]

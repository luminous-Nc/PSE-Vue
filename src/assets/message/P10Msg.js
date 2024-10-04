export const P10Msg = [
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","GND-RND"],
        Message: "The positive terminal does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["24VP","IN-RND"],
        Message: "The battery does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["24VP","PWRDO-RND"],
        Message: "The positive terminal connects to the PWRDO",
        Color: "Green"
     },
     {
        Ports: ["24VP","GNDDO-RND"],
        Message: "The positive terminal does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["24VP","DO-RND"],
        Message: "The positive terminal does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["24VN","GND-RND"],
        Message: "The negative terminal connects to the ground",
        Color: "Green"
     },
     {
        Ports: ["24VN","IN-RND"],
        Message: "The battery does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["24VN","PWRDO-RND"],
        Message: "The negative terminal does not connect to the PWRDO",
        Color: "Red"
     },
     {
        Ports: ["24VN","GNDDO-RND"],
        Message: "The negative terminal connects to the ground",
        Color: "Green"
     },
     {
        Ports: ["24VN","DO-RND"],
        Message: "The negative terminal does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","IN-RND"],
        Message: "The ground does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","PWRDO-RND"],
        Message: "The ground does not connect to the PWRDO",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","GNDDO-RND"],
        Message: "The two grounds are connected together",
        Color: "Green"
     },
     {
        Ports: ["GND-RND","DO-RND"],
        Message: "The ground does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","PWRDO-RND"],
        Message: "The input does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","GNDDO-RND"],
        Message: "The input does not connect to the PWRDO",
        Color: "Red"
     },
     {
        Ports: ["IN-RND","DO-RND"],
        Message: "The input is connected to the output",
        Color: "Green"
     },
     {
        Ports: ["PWRDO-RND","GNDDO-RND"],
        Message: "The PWRDO does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["PWRDO-RND","DO-RND"],
        Message: "The PWRDO does not connect to the output",
        Color: "Red"
     },
     {
        Ports: ["GNDDO-RND","DO-RND"],
        Message: "The ground does not connect to the output",
        Color: "Red"
     },
]

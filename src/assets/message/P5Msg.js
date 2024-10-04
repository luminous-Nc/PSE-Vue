export const P5Msg = [
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["24VP","5VP"],
        Message: "The two batteries do not connect together",
        Color: "Red"
     },
     {
        Ports: ["24VP","5VN"],
        Message: "The two batteries do not connect together",
        Color: "Red"
     },
     {
        Ports: ["24VP","RLCU"],
        Message: "The positive terminal should not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["24VP","RLCD"],
        Message: "The positive terminal should not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["24VP","RLSWU"],
        Message: "The positive terminal can connect to the upper part of the relay switch, but for clarity it should be connected to the bottom",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","RLSWDL"],
        Message: "The positve terminal should be connected to the relay switch, this configuration is normally closed",
        Color: "Yellow"
     },
     {
        Ports: ["24VP","RLSWDR"],
        Message: "The positve terminal should be connected to the relay switch, this configuration is normally open",
        Color: "Green"
     },
     {
        Ports: ["24VP","SL"],
        Message: "The 24V battery is not in the loop curcuit",
        Color: "Red"
     },
     {
        Ports: ["24VP","SR"],
        Message: "The 24V battery is not in the loop curcuit",
        Color: "Red"
     },
     {
        Ports: ["24VP","GND"],
        Message: "The positive terminal should not be connected to the ground",
        Color: "Red"
     },
     {
        Ports: ["24VP","DI-RND"],
        Message: "The battery does not direcctly connect to the input",
        Color: "Red"
     },
     {
        Ports: ["24VN","5VP"],
        Message: "The two batteries do not connect together",
        Color: "Red"
     },
     {
        Ports: ["24VN","5VN"],
        Message: "The two batteries do not connect together",
        Color: "Red"
     },
     {
        Ports: ["24VN","RLCU"],
        Message: "The negative terminal should not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["24VN","RLCD"],
        Message: "The negative terminal should not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["24VN","RLSWU"],
        Message: "The negative terminal does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["24VN","RLSWDL"],
        Message: "The negative terminal does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["24VN","RLSWDR"],
        Message: "The negative terminal does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["24VN","SL"],
        Message: "The 24V battery is not in the loop curcuit",
        Color: "Red"
     },
     {
        Ports: ["24VN","SR"],
        Message: "The 24V battery is not in the loop curcuit",
        Color: "Red"
     },
     {
        Ports: ["24VN","GND"],
        Message: "The ground is connected to the negative terminal",
        Color: "Green"
     },
     {
        Ports: ["24VN","DI-RND"],
        Message: "The battery does not direcctly connect to the input",
        Color: "Red"
     },
     {
        Ports: ["5VP","5VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
     },
     {
        Ports: ["5VP","RLCU"],
        Message: "Connecting the positive 5V terminal to the top of the coil will destroy the coil",
        Color: "Red"
     },
     {
        Ports: ["5VP","RLCD"],
        Message: "The positive 5V terminal connects to the bottom of the relay coil",
        Color: "Green"
     },
     {
        Ports: ["5VP","RLSWU"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VP","RLSWDL"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VP","RLSWDR"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VP","SL"],
        Message: "The positive terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["5VP","SR"],
        Message: "The positive terminal does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["5VP","GND"],
        Message: "The 5V battery does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["5VP","DI-RND"],
        Message: "The 5V battery does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["5VN","RLCU"],
        Message: "The 5V negative terminal does not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["5VN","RLCD"],
        Message: "The 5V negative terminal does not connect to the relay coil",
        Color: "Red"
     },
     {
        Ports: ["5VN","RLSWU"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VN","RLSWDL"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VN","RLSWDR"],
        Message: "The 5V battery does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["5VN","SL"],
        Message: "The negative 5V terminal can be connected to the left side of the switch, but should be connected to the right for clarity",
        Color: "Yellow"
     },
     {
        Ports: ["5VN","SR"],
        Message: "The negative 5V terminal connects to the right side of the switch",
        Color: "Green"
     },
     {
        Ports: ["5VN","GND"],
        Message: "The 5V battery does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["5VN","DI-RND"],
        Message: "The 5V battery does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["RLCU","RLCD"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCU","RLSWU"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCU","RLSWDL"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCU","RLSWDR"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCU","SL"],
        Message: "The relay coil connects to the switch",
        Color: "Green"
     },
     {
        Ports: ["RLCU","SR"],
        Message: "For clarity the left side of the switch should be attached to the relay coil",
        Color: "Yellow"
     },
     {
        Ports: ["RLCU","GND"],
        Message: "The relay coil does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["RLCU","DI-RND"],
        Message: "The relay coil does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["RLCD","RLSWU"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCD","RLSWDL"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCD","RLSWDR"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLCD","SL"],
        Message: "The relay coil bottom can be connected to the switch, but its best if it is connected at the top",
        Color: "Yellow"
     },
     {
        Ports: ["RLCD","SR"],
        Message: "The relay coil bottom can be connected to the switch, but its best if it is connected at the top",
        Color: "Yellow"
     },
     {
        Ports: ["RLCD","GND"],
        Message: "The relay coil does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["RLCD","DI-RND"],
        Message: "The relay coil does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","RLSWDL"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","RLSWDR"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","SL"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","SR"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","GND"],
        Message: "The relay switch does not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["RLSWU","DI-RND"],
        Message: "The upper relay switch connects to the input",
        Color: "Green"
     },
     {
        Ports: ["RLSWDL","RLSWDR"],
        Message: "The relay coil does not connect to any other part of the relay",
        Color: "Red"
     },
     {
        Ports: ["RLSWDL","SL"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDL","SR"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDL","GND"],
        Message: "The ground does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDL","DI-RND"],
        Message: "The bottom left relay switch does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["RLSWDR","SL"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDR","SR"],
        Message: "The relay switch does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDR","GND"],
        Message: "The ground does not connect to the relay switch",
        Color: "Red"
     },
     {
        Ports: ["RLSWDR","DI-RND"],
        Message: "The bottom right relay switch does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SL","SR"],
        Message: "The switch should not connect to itself",
        Color: "Red"
     },
     {
        Ports: ["SL","GND"],
        Message: "The switch should not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["SL","DI-RND"],
        Message: "The switch does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["SR","GND"],
        Message: "The switch should not connect to the ground",
        Color: "Red"
     },
     {
        Ports: ["SR","DI-RND"],
        Message: "The switch does not connect to the robot",
        Color: "Red"
     },
     {
        Ports: ["GND","DI-RND"],
        Message: "The ground does not connect to the input",
        Color: "Red"
     }
]

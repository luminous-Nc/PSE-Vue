export const P9Msg = [
    {
        Ports: ["GND-RND","24VDC-RND"],
        Message: "The ground does not connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","Common-RND"],
        Message: "The ground does not connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","OMRON-IN-RND"],
        Message: "The ground does not connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["GND-RND","SL"],
        Message: "The ground can connect to the left side of the switch, but should be connected on the right for clarity",
        Color: "Yellow"
     },
     {
        Ports: ["GND-RND","SR"],
        Message: "The ground connects to the right side of the switch",
        Color: "Green"
     },
     {
        Ports: ["24VDC-RND","Common-RND"],
        Message: "The 24VDC connects to the common",
        Color: "Green"
     },
     {
        Ports: ["24VDC-RND","OMRON-IN-RND"],
        Message: "The 24VDC does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["24VDC-RND","SL"],
        Message: "The 24VDC does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["24VDC-RND","SR"],
        Message: "The 24VDC does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["Common-RND","OMRON-IN-RND"],
        Message: "The common does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["Common-RND","SL"],
        Message: "The common does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["Common-RND","SR"],
        Message: "The common does not connect to the switch",
        Color: "Red"
     },
     {
        Ports: ["OMRON-IN-RND","SL"],
        Message: "The input connects to the left side of the switch",
        Color: "Green"
     },
     {
        Ports: ["OMRON-IN-RND","SR"],
        Message: "The input can connect to the right side of the switch, but should be connected on the left for clarity",
        Color: "Yellow"
     },
     {
        Ports: ["SL","SR"],
        Message: "The switch should not connect to itself",
        Color: "Red"
     },
]

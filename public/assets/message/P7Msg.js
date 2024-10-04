export const P7Msg = [
    {
        Ports: ["SL","SR"],
        Message: "The left side of the switch should not connect to itself",
        Color: "Red"
     },
     {
        Ports: ["SL","24F-RND"],
        Message: "The left side of the switch does not connect to the 24F",
        Color: "Red"
     },
     {
        Ports: ["SL","SDICOM-RND"],
        Message: "The left side of the switch does not connect to the SDICOM",
        Color: "Red"
     },
     {
        Ports: ["SL","DI-RND"],
        Message: "The left side of the switch connects to the input",
        Color: "Green"
     },
     {
        Ports: ["SL","0V-RND"],
        Message: "The left side of the switch does not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["SR","24F-RND"],
        Message: "The right side of the switch connects to the 24F",
        Color: "Green"
     },
     {
        Ports: ["SR","SDICOM-RND"],
        Message: "The right side of the switch does not connect to the SDICOM",
        Color: "Red"
     },
     {
        Ports: ["SR","DI-RND"],
        Message: "The right side of the switch does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SR","0V-RND"],
        Message: "The right side of the switch does not connect to the 0V",
        Color: "Red"
     },
     {
        Ports: ["24F-RND","SDICOM-RND"],
        Message: "The 24F does not directly connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["24F-RND","DI-RND"],
        Message: "The 24F does not directly connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["24F-RND","0V-RND"],
        Message: "The 24F does not directly connect to an I/O port",
        Color: "Red"
     },
     {
        Ports: ["SDICOM-RND","DI-RND"],
        Message: "The SDICOM does not connect to the input",
        Color: "Red"
     },
     {
        Ports: ["SDICOM-RND","0V-RND"],
        Message: "The SDICOM connects to the 0V",
        Color: "Green"
     },
     {
        Ports: ["DI-RND","0V-RND"],
        Message: "The input does not directly connect to an I/O port",
        Color: "Red"
     },
     
]

export const P2Msg = [
    {
        Ports: ["OUT-RND","DC-RND"],
        Message: "The output and DC form the curcuit, they should not be connected directly",
        Color: "Red"
    },
    {
        Ports: ["OUT-RND","24VP"],
        Message: "The output should not be connected directly to the battery",
        Color: "Red"
    },
    {
        Ports: ["OUT-RND","24VN"],
        Message: "The output should not be connected directly to the battery",
        Color: "Red"
    },
    {
        Ports: ["OUT-RND","MTL"],
        Message: "The output is connected to the motor, but it reverses the polarity of the motor",
        Color: "Yellow"
    },
    {
        Ports: ["OUT-RND","MTR"],
        Message: "The output is connected to the motor",
        Color: "Green"
    },
    {
        Ports: ["DC-RND","24VP"],
        Message: "The DC can be connected to the positive terminal, but it reverses the polarity of the curcuit",
        Color: "Yellow"
    },
    {
        Ports: ["DC-RND","24VN"],
        Message: "The DC is connected to the negative terminal of the battery",
        Color: "Green"
    },
    {
        Ports: ["DC-RND","MTL"],
        Message: "The DC should not be connected to the motor",
        Color: "Red"
    },
    {
        Ports: ["DC-RND","MTR"],
        Message: "The DC should not be connected to the motor",
        Color: "Red"
    },
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
    },
    {
        Ports: ["24VP","MTL"],
        Message: "The positive terminal is connected to the left side of the motor",
        Color: "Green"
    },
    {
        Ports: ["24VP","MTR"],
        Message: "The positive terminal can be connected to the right side of the motor, but it reverses the polarity of the motor",
        Color: "Yellow"
    },
    {
        Ports: ["24VN","MTL"],
        Message: "The negative terminal should not be connected to the motor",
        Color: "Red"
    },
    {
        Ports: ["24VN","MTR"],
        Message: "The negative terminal should not be connected to the motor",
        Color: "Red"
    },
    {
        Ports: ["MTL","MTR"],
        Message: "The motor cannot be connected to itself",
        Color: "Red"
    }
]
export const P4Msg = [
    {
        Ports: ["IN-RND","GNDRND"],
        Message: "The input and ground form the circuit, they should not be connected directly together",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","24VP"],
        Message: "The input should not connect directly to a voltage source",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","24VN"],
        Message: "The input should not connect directly to a voltage source",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","5VP"],
        Message: "The 5V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","5VN"],
        Message: "The 5V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","OPUL"],
        Message: "The input should not connect to the left side of the oprical sensor",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","OPDL"],
        Message: "The input should not connect to the left side of the oprical sensor",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","OPUR"],
        Message: "The input is connected to therightside of the optical sensor",
        Color: "Green"
    },
    {
        Ports: ["IN-RND","OPDR"],
        Message: "The input is connected to the right side of the optical sensor, but connecting it on the bottom reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["GNDRND","24VP"],
        Message: "The ground can be connected to the positive terminal, but it reverses the polarity of the circuit",
        Color: "Yellow"
    },
    {
        Ports: ["GNDRND","24VN"],
        Message: "The ground is connected to the negative terminal",
        Color: "Green"
    },
    {
        Ports: ["GNDRND","5VP"],
        Message: "The 5V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","5VN"],
        Message: "The 5V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","OPUL"],
        Message: "The ground should not connect to the opticcal sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","OPDL"],
        Message: "The ground should not connect to the opticcal sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","OPUR"],
        Message: "The ground should not connect to the opticcal sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","OPDR"],
        Message: "The ground should not connect to the opticcal sensor",
        Color: "Red"
    },
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
        Ports: ["24VP","OPUL"],
        Message: "The 24V battery should not connect to the left side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["24VP","OPDL"],
        Message: "The 24V battery should not connect to the left side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["24VP","OPUR"],
        Message: "The positive terminal can connecct to the upper right side of the optical sensor, but it reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["24VP","OPDR"],
        Message: "The positive terminal connects to the bottom right side of the optical sensor",
        Color: "Green"
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
        Ports: ["24VN","OPUL"],
        Message: "The negative terminal should not connect to the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["24VN","OPDL"],
        Message: "The negative terminal should not connect to the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["24VN","OPUR"],
        Message: "The negative terminal should not connect to the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["24VN","OPDR"],
        Message: "The negative terminal should not connect to the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["5VP","5VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
    },
    {
        Ports: ["5VP","OPUL"],
        Message: "The positve terminal connects to the upper left side of the optical sensor",
        Color: "Green"
    },
    {
        Ports: ["5VP","OPDL"],
        Message: "The positive terminal can connecct to the lower left side of the optical sensor, but it reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["5VP","OPUR"],
        Message: "The 5V battery does not connect to the right side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["5VP","OPDR"],
        Message: "The 5V battery does not connect to the right side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["5VN","OPUL"],
        Message: "The positive terminal can connecct to the upper left side of the optical sensor, but it reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["5VN","OPDL"],
        Message: "The positve terminal connects to the lower left side of the optical sensor",
        Color: "Green"
    },
    {
        Ports: ["5VN","OPUR"],
        Message: "The 5V battery does not connect to the right side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["5VN","OPDR"],
        Message: "The 5V battery does not connect to the right side of the optical sensor",
        Color: "Red"
    },
    {
        Ports: ["OPUL","OPDL"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["OPUL","OPUR"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["OPUL","OPDR"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["OPDL","OPUR"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["OPDL","OPDR"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["OPUR","OPDR"],
        Message: "The optical sensor should not connect to itself",
        Color: "Red"
    }
]
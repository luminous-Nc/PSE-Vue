export const P3Msg = [
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
        Ports: ["IN-RND","48VP"],
        Message: "The 48V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","48VN"],
        Message: "The 48V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","PNPB"],
        Message: "The input should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","PNPE"],
        Message: "The input should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","PNPC"],
        Message: "The input should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["IN-RND","RLCU"],
        Message: "The input should not be connected to the relay coil",
        Color: "Yellow"
    },
    {
        Ports: ["IN-RND","RLCD"],
        Message: "The input should not be connected to the relay coil",
        Color: "Yellow"
    },
    {
        Ports: ["IN-RND","RLSWU"],
        Message: "The input is connected to the relay switch",
        Color: "Green"
    },
    {
        Ports: ["IN-RND","RLSWDL"],
        Message: "The input can be connected to any part of the relay switch, but for clarity it is best to attach it to the top",
        Color: "Yellow"
    },
    {
        Ports: ["IN-RND","RLSWDR"],
        Message: "The input can be connected to any part of the relay switch, but for clarity it is best to attach it to the top",
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
        Ports: ["GNDRND","48VP"],
        Message: "The 48V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","48VN"],
        Message: "The 48V battery is not for the PLC",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","PNPB"],
        Message: "The ground should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","PNPE"],
        Message: "The ground should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","PNPC"],
        Message: "The ground should not be connected to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","RLCU"],
        Message: "The ground will never connect to the relay coil",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","RLCD"],
        Message: "The ground will never connect to the relay coil",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","RLSWU"],
        Message: "The ground should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","RLSWDL"],
        Message: "The ground should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["GNDRND","RLSWDR"],
        Message: "The ground should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["24VP","24VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
    },
    {
        Ports: ["24VP","48VP"],
        Message: "The two batteries do not connect together",
        Color: "Red"
    },
    {
        Ports: ["24VP","48VN"],
        Message: "The two batteries do not connect together",
        Color: "Red"
    },
    {
        Ports: ["24VP","PNPB"],
        Message: "The 24 volt battery does not provide power to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["24VP","PNPE"],
        Message: "The 24 volt battery does not provide power to the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["24VP","PNPC"],
        Message: "The 24 volt battery does not provide power to the PNP sensor",
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
        Ports: ["48VP","48VN"],
        Message: "The battery should not be connected to itself",
        Color: "Red"
    },
    {
        Ports: ["48VP","PNPB"],
        Message: "The positive terminal is connected to this part of the PNP sensor",
        Color: "Green"
    },
    {
        Ports: ["48VP","PNPE"],
        Message: "The positive terminal should not be connected to this part of the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["48VP","PNPC"],
        Message: "The positive terminal should not be connected to this part of the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["48VP","RLCU"],
        Message: "The positive terminal should not be connected to the relay coil",
        Color: "Red"
    },
    {
        Ports: ["48VP","RLCD"],
        Message: "The positive terminal should not be connected to the relay coil",
        Color: "Red"
    },
    {
        Ports: ["48VP","RLSWU"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["48VP","RLSWDL"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["48VP","RLSWDR"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["48VN","PNPB"],
        Message: "The negative terminal should not be connected to this part of the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["48VN","PNPE"],
        Message: "The negative terminal should not be connected to this part of the PNP sensor",
        Color: "Red"
    },
    {
        Ports: ["48VN","PNPC"],
        Message: "The negative terminal is connected to this part of the PNP sensor",
        Color: "Green"
    },
    {
        Ports: ["48VN","RLCU"],
        Message: "The negative terminal can be connected to the upper part of the relay coil, but for clarity it should be connected to the bottom",
        Color: "Yellow"
    },
    {
        Ports: ["48VN","RLCD"],
        Message: "The negative terminal is connected to the relay coil",
        Color: "Green"
    },
    {
        Ports: ["48VN","RLSWU"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["48VN","RLSWDL"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["48VN","RLSWDR"],
        Message: "The battery should not be connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPB","PNPE"],
        Message: "The PNP sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["PNPB","PNPC"],
        Message: "The PNP sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["PNPB","RLCU"],
        Message: "This part of the PNP sensor should not connect to the relay",
        Color: "Red"
    },
    {
        Ports: ["PNPB","RLCD"],
        Message: "This part of the PNP sensor should not connect to the relay",
        Color: "Red"
    },
    {
        Ports: ["PNPB","RLSWU"],
        Message: "This part of the PNP sensor should not connect to the relay",
        Color: "Red"
    },
    {
        Ports: ["PNPB","RLSWDL"],
        Message: "This part of the PNP sensor should not connect to the relay",
        Color: "Red"
    },
    {
        Ports: ["PNPB","RLSWDR"],
        Message: "This part of the PNP sensor should not connect to the relay",
        Color: "Red"
    },
    {
        Ports: ["PNPE","PNPC"],
        Message: "The PNP sensor should not connect to itself",
        Color: "Red"
    },
    {
        Ports: ["PNPE","RLCU"],
        Message: "This part of the PNP sensor connects to the relay coil",
        Color: "Green"
    },
    {
        Ports: ["PNPE","RLCD"],
        Message: "This part of the PNP sensor can be connected to either side of the relay coil, but it reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["PNPE","RLSWU"],
        Message: "The PNP sensor is not connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPE","RLSWDL"],
        Message: "The PNP sensor is not connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPE","RLSWDR"],
        Message: "The PNP sensor is not connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPC","RLCU"],
        Message: "This part of the PNP sensor can be connected to either side of the relay coil, but it reverses the polarity",
        Color: "Yellow"
    },
    {
        Ports: ["PNPC","RLCD"],
        Message: "This part of the PNP sensor connects to the relay coil",
        Color: "Green"
    },
    {
        Ports: ["PNPC","RLSWU"],
        Message: "The PNP sensor is not connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPC","RLSWDL"],
        Message: "The PNP sensor is not connected to the relay switch",
        Color: "Red"
    },
    {
        Ports: ["PNPC","RLSWDR"],
        Message: "The PNP sensor is not connected to the relay switch",
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
        Ports: ["RLSWU","RLSWDL"],
        Message: "The relay switch does not connect to any other part of the relay",
        Color: "Red"
    },
    {
        Ports: ["RLSWU","RLSWDR"],
        Message: "The relay switch does not connect to any other part of the relay",
        Color: "Red"
    },
    {
        Ports: ["RLSWDL","RLSWDR"],
        Message: "The relay switch does not connect to any other part of the relay",
        Color: "Red"
    }
]
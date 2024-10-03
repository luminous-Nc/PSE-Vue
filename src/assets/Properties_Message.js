const P1Msg = [
                {
                    Ports: ["IN-RND", "GNDRND"],
                	Message: "The input and ground form the circuit, they should not be connected directly together",
                    Color: "Red"
                },

                {
                    Ports: ["IN-RND", "24VP"],
                	Message: "The input should not be connected directly to the battery",
                    Color: "Red"
                },

                {
                    Ports: ["IN-RND", "24VP"],
                	Message: "The input should not be connected directly to the battery",
                    Color: "Red"
                },

                {
                    Ports: ["IN-RND", "24VN"],
                	Message: "The input should not be connected directly to the battery",
                    Color: "Red"
                },

                {
                    Ports: ["IN-RND", "SWL"],
                	Message: "The input is connected to the switch",
                    Color: "Green"
                },

                {
                    Ports: ["IN-RND", "SWR"],
                	Message: "The input is connected to the switch",
                    Color: "Yellow"
                },

                {
                    Ports: ["GNDRND", "24VP"],
                	Message: "The ground can be connected to the positive terminal, but it reverses the polarity of the circuit",
                    Color: "Yellow"
                },

                {
                    Ports: ["GNDRND", "24VN"],
                	Message: "The ground is connected to the negative terminal",
                    Color: "Green"
                },

                {
                    Ports: ["GNDRND", "SWL"],
                	Message: "The ground cannot be connected to a switch",
                    Color: "Red"
                },

                {
                    Ports: ["GNDRND", "SWR"],
                	Message: "The ground cannot be connected to a switch",
                    Color: "Red"
                },
       
                {
                    Ports: ["24VP", "24VN"],
                	Message: "The battery should not be connected to itself",
                    Color: "Red"
                },

                {
                    Ports: ["24VP", "SWL"],
                	Message: "The positive terminal is connected to the switch, but should be connected on the opposite side to reduce clutter on the diagram",
                    Color: "Yellow"
                },

                {
                    Ports: ["24VP", "SWR"],
                	Message: "The positive terminal is connected to the switch",
                    Color: "Green"
                },

                {
                    Ports: ["24VN", "SWL"],
                	Message: "The negative terminal can be connected to the switch, but it reverses the polarity of the circuit",
                    Color: "Yellow"
                },

                {
                    Ports: ["24VN", "SWR"],
                	Message: "The negative terminal can be connected to the switch, but it reverses the polarity of the circuit",
                    Color: "Yellow"
                },

                {
                    Ports: ["SWL", "SWR"],
                	Message: "The switch cannot be connected to itself",
                    Color: "Red"
                },
]


export const DictMsg = {
                        "P1": P1Msg
                    }
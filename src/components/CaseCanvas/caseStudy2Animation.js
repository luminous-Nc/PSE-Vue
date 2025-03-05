import {apiBaseUrlCase, clearCanvas, layerInstance, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {
    createCircle,
    createImage, createKeyFrameFunction,
    createLabel, labelAnimation,
    moveObject, scaleObject, ScaleObjectSingleDirection,
    stopAllAnimations,
    waitAnimation
} from "@/components/CaseCanvas/konvaAnimationCore.js";

export async function animation1() {

    let machineOn = false; // 机器状态

    let switchBase, upButton, downButton, bulb, pumpLabel, ladleLabel, TSensor1Label, ULFLabel, ULFPoint,  LLFLabel,LLFPoint,
        ovenLabel, TSensor2Label, valve2Label, valve1Label, valve1Img,conveyorLabel, TSensor1Point, TSensor2Point, opt1Point, opt1Label, opt2Point, opt2Label, hotWave, wave2 = 0
    let time1, time2, clock1, clock2 = 0
    let subtitleLabel,robotLabel = 0
    let moldImg ,yellowwave = 0
    let robotImage = 0

    async function initAnimation() {
        console.log('initAnimation 1')
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/background.png'
        })

        switchBase = await createImage({
            x: 500,
            y: 100,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        bulb = await createImage({
            x: 611,
            y: 95,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        clock1 = await createImage({
                x: 300,
                y: 221,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 336,
            y: 231,
            fontSize:12,
            padding:0,
            textContent: '5 sec',
        })

        clock2 = await createImage({
                x: 280,
                y: 280,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time2 = createLabel({
            x: 319,
            y: 289,
            fontSize:12,
            padding:0,
            textContent: '5 sec',
        })

        upButton = createCircle({
            x: 519,
            y: 118,
        })

        downButton = createCircle({
            x: 519,
            y: 144,
        })



        ULFPoint = createCircle({
            x: 214,
            y: 149
        })

        LLFPoint = createCircle({
            x: 214,
            y: 180
        })

        opt1Point = createCircle({
            x: 199,
            y: 317
        })

        opt1Label = createLabel({
            x: 180,
            y: 403,
            textContent: 'Opt1',
        })

        conveyorLabel = createLabel({
            x: 220,
            y: 355,
            textContent: 'Conveyor1',
            }

        )

        robotLabel = createLabel({
            x: 697,
            y: 162,
            textContent: 'Robot',
        })


        opt2Point = createCircle({
            x: 566,
            y: 316,
        })

        opt2Label = createLabel({
            x: 548,
            y: 395,
            textContent: 'Opt2',
        })

        TSensor1Point = createCircle({
            x: 233,
            y: 58
        })

        TSensor2Point = createCircle({
            x: 476,
            y: 383
        })

        pumpLabel = createLabel({
            x: 56,
            y: 60,
            textContent: 'Pump',
        })

        ladleLabel = createLabel({
            x: 70,
            y: 195,
            textContent: 'Ladle',
        })

        TSensor1Label = createLabel({
            x: 319,
            y: 53,
            fontSize:16,
            textContent: 'TSensor1',
        })


        ULFLabel = createLabel({
            x: 389,
            y: 139,
            padding:0,
            textContent: 'ULF',
        })

        LLFLabel= createLabel({
            x: 389,
            y: 177,
            padding:0,
            textContent: 'LLF',
        })

        TSensor2Label = createLabel({
            x: 432,
            y: 457,
            textContent: 'TSensor2',
        })

        ovenLabel = createLabel({
            x: 405,
            y: 252,
            textContent: 'Oven',

        })

        valve1Label = createLabel({
            x: 323,
            y: 207,
            textContent: 'Valve1',
            padding:10,
            fontSize:14,
        })

        valve2Label = createLabel({
            x: 292,
            y: 263,
            textContent: 'Valve2',
            padding:10,
            fontSize:14
        })

        subtitleLabel = createLabel(
            {
                x: 10,
                y: 0,
                textContent: '',
                fontSize:20
            }
        )

        robotImage =  await createImage({
            x: 618,
            y: 200,
            targetHeight: 150,
            targetWidth: 150,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/robot1.png'
        })

        layerInstance.draw();
    }


    async function renderAnimation() {
        const newKeyFrame = createKeyFrameFunction(subtitleLabel);

        if (machineOn) {
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            await newKeyFrame("On button is pressed and released; the system light is on");
            bulb.changeImage(apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOn.png')

            await newKeyFrame("Pump is energized when the system is on, will operate until the ingredient reach ULF \nLadle and Oven heating are also on, because TSensor1 and TSensor2 is triggered by the lower temperature.",0)
            pumpLabel.activate()
            ladleLabel.activate()
            TSensor1Point.activate()
            TSensor1Label.activate()
            ovenLabel.activate()
            TSensor2Point.activate()
            TSensor2Label.activate()
            await waitAnimation(3000)

            await newKeyFrame("When the temperature reach the requirements, TSensors bits = 0, ladle and oven heating stop.")
            TSensor1Label.changeBackgroundColor("red")
            TSensor1Point.deactivate()
            TSensor2Label.changeBackgroundColor("red")
            TSensor2Point.deactivate()
            ladleLabel.deactivate()
            ovenLabel.deactivate()

            await newKeyFrame("Pump continues till ingredient reach ULF.")
            TSensor1Label.deactivate()
            TSensor2Label.deactivate()
            hotWave = await createImage({
                x: 132,
                y: 192,
                targetHeight: 50,
                targetWidth: 93,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/hotwave.png'
            })
            await ScaleObjectSingleDirection(hotWave,1,-3,1000)
            LLFPoint.activate()
            LLFLabel.activate()

            await newKeyFrame("Pump continues till ingredient reach ULF.\n" +
                "When the ingredient is above LLF, and TSensor1 is off (temperature satisfies the requirement), start valve 1 for 5 seconds. \n")

            valve1Label.activate()
            await Promise.all([
                labelAnimation({
                    label: time1,
                    duration: 3000,
                    textContents: ["5 sec", "3 sec", "1 sec"],
                    backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
                }),
                ScaleObjectSingleDirection(hotWave,1,-5,2000)
            ]);
            valve1Img = await createImage({
                x: 143,
                y: 218,
                targetHeight: 60,
                targetWidth: 115,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/valve1.png'
            })
            ULFPoint.activate()
            ULFLabel.activate()
            pumpLabel.deactivate()
            valve1Label.deactivate()

            await newKeyFrame("After valve1 operates for 5 seconds, and the mold presents at Opt1, energizes Valve2.")
            moldImg = await createImage({
                x: 197,
                y: 275,
                targetHeight: 35,
                targetWidth: 80,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/mold_empty.png'

            })
            valve2Label.activate()
            opt1Point.activate()
            opt1Label.activate()
            time1.deactivate()

            yellowwave = await createImage({
                x: 196,
                y: 302,
                targetHeight: 10,
                targetWidth: 60,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/yellowwave.png'
            })
            await Promise.all([
                labelAnimation({
                    label: time2,
                    duration: 3000,
                    textContents: ["5 sec", "3 sec", "1 sec"],
                    backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
                }),
                ScaleObjectSingleDirection(yellowwave,1,-3,3000)
            ]);
            valve2Label.deactivate()

            await newKeyFrame("When Valve2 done, and Opt2 is empty, starts conveyor1")
            conveyorLabel.activate()
            time2.deactivate()

            await newKeyFrame("Conveyor1 operates to send the filled mold through the oven, till it reaches Opt2.")
            opt1Point.deactivate()
            opt1Label.deactivate()
            await Promise.all([
                moveObject(yellowwave,170,0,2000),
                moveObject(moldImg,170,0,2000)
               ]);

            yellowwave.destroy()
            await moldImg.changeImage(apiBaseUrlCase + '/assets/images/caseStudy/2/animation/mold_after.png')
            await moveObject(moldImg,167,0,2000)

            await newKeyFrame("After the mold went through the Oven become a block reaches Opt2, Conveyor1 stops, and triggers Robot1_DI1 to transfer the block to onto Conveyor2. \n")
            conveyorLabel.deactivate()
            opt2Point.activate()
            opt2Label.activate()
            await waitAnimation(1000)
            robotLabel.activate()
            await waitAnimation(1000)
            await robotImage.changeImage(apiBaseUrlCase + '/assets/images/caseStudy/2/animation/robot2.png')

            await waitAnimation(1000)
            await robotImage.changeImage(apiBaseUrlCase + '/assets/images/caseStudy/2/animation/robot3.png')

            moldImg.destroy()
            moldImg = await createImage({
                x: 755,
                y: 320,
                targetHeight: 35,
                targetWidth: 80,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/mold_after.png'

            })

        } else {
            stopAllAnimations();
            clearCanvas();
            await initAnimation();
            bindClick();

        }
        layerInstance.draw();
    }

    function bindClick() {
        upButton.circle.on('click', async () => {
            machineOn = true;
            await renderAnimation();
        });

        downButton.circle.on('click', async () => {
            machineOn = false;
            await renderAnimation();
        })
    }

    await initAnimation();
    bindClick();
}

export async function animation2() {

    let machineOn = false; // 机器状态

    let switchBase, upButton, downButton, bulb = 0
    let conveyor2Label,conveyor3Label,conveyor4Label,conveyor5Label,conveyor6Label = 0
    let opt3Point,opt4Point,opt5Point,opt6Point,opt7Point,opt8Point = 0
    let CNCMachineLabel,drillerLabel,grinderLabel, hotWave = 0
    let time1, time2,time3, clock1, clock2,clock3 = 0
    let subtitleLabel,robot2Label = 0
    let moldImg = 0
    let robotImage = 0

    async function initAnimation() {
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/background2.png'
        })

        switchBase = await createImage({
            x: 207,
            y: 105,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        upButton = createCircle({
            x: switchBase.x()+19,
            y: switchBase.y()+18,
        })

        downButton = createCircle({
            x: switchBase.x()+19,
            y: switchBase.y()+40,
        })


        bulb = await createImage({
            x: 261,
            y: 10,
            targetHeight: 80,
            targetWidth: 80,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        conveyor2Label = createLabel({
                x: 90,
                y: 253,
            fontSize:14,
                textContent: 'Conveyor2',
            }
        )

        conveyor3Label = createLabel({
                x: 319,
                y: 315,
                fontSize:14,
                textContent: 'Conveyor3',
            }
        )

        conveyor4Label = createLabel({
                x: 485,
                y: 287,
                fontSize:14,
                textContent: 'Conveyor4',
            }
        )

        conveyor5Label = createLabel({
                x: 557,
                y: 318,
                fontSize:14,
                textContent: 'Conveyor5',
            }
        )

        conveyor6Label = createLabel({
                x: 755,
                y: 316,
                fontSize:14,
                textContent: 'Conveyor6',
            }
        )

        opt3Point  = createCircle({
            x: 81,
            y: 228,
            radius:6
        })

        opt4Point = createCircle({
            x: 220,
            y: 240,
            radius:6
        })

        opt5Point = createCircle({
            x: 293,
            y: 230,
            radius:6
        })

        opt6Point = createCircle({
            x: 405,
            y: 227,
            radius:6
        })

        opt7Point = createCircle({
            x: 654,
            y: 239,
            radius:6
        })

        opt8Point = createCircle({
            x: 839,
            y: 242,
            radius:6
        })

        moldImg = await createImage({
            x: 64,
            y: 209,
            targetHeight: 25,
            targetWidth: 40,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/mold_after.png'

        })



        clock1 = await createImage({
                x: 239,
                y: 154,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 270,
            y: 165,
            fontSize:12,
            padding:0,
            textContent: '3 minutes',
        })

        clock2 = await createImage({
                x: 465,
                y: 58,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time2 = createLabel({
            x: 499,
            y: 67,
            fontSize:12,
            padding:0,
            textContent: '3 minutes',
        })

        time3 = createLabel({
            x: 742,
            y: 63,
            fontSize:12,
            padding:0,
            textContent: '3 minutes',
        })

        clock3 = await createImage({
                x: 710,
                y: 53,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )




        robot2Label = createLabel({
            x: 868,
            y: 84,
            textContent: 'Robot2',
        })

        CNCMachineLabel = createLabel({
            x: 192,
            y: 177,
            textContent: 'CNC\nmachine',
            fontSize:14,
            padding:0
        })

        drillerLabel = createLabel({
            x: 426,
            y: 67,
            textContent: 'Driller',
            fontSize:14,
            padding:0
        })

        grinderLabel = createLabel({
            x: 658,
            y: 60,
            textContent: 'Grinder',
            fontSize:14,
            padding:0
        })

        subtitleLabel = createLabel(
            {
                x: 10,
                y: 0,
                textContent: '',
                fontSize:20
            }
        )

        layerInstance.draw();
    }


    async function renderAnimation() {
        const newKeyFrame = createKeyFrameFunction(subtitleLabel);

        if (machineOn) {
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            await newKeyFrame("On button is pressed and released; the system light is on.");
            await bulb.changeImage(apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOn.png')

            await newKeyFrame("Conveyor2 is energized when Opt3 is triggered.\n" +
                "Conveyor4 and Conveyor6 are energized when system is on.",3000)
            opt3Point.activate()
            conveyor2Label.activate()
            conveyor4Label.activate()
            conveyor6Label.activate()

            await newKeyFrame("Conveyor2 keeps operates till it reaches Opt4.\n",0)
            opt3Point.deactivate()
            await moveObject(moldImg,135,0,2000)
            opt4Point.activate()

            await newKeyFrame("When Opt4 is triggered, pause Conveyor2 and start the CNC machine for 3 minutes.\n",0)
            conveyor2Label.deactivate()
            CNCMachineLabel.activate()
            await labelAnimation({
                label: time1,
                duration: 3000,
                textContents: ["3 minutes", "2 minutes", "1 minute"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After CNC machine done, Conveyor 2 resumes, till the block reaches Opt5.\n")
            CNCMachineLabel.deactivate()
            conveyor2Label.activate()
            opt4Point.deactivate()
            time1.deactivate()
            await moveObject(moldImg,73,0,1000)
            opt5Point.activate()

            await newKeyFrame("When Opt5 is triggered, stops Conveyor2 and energizes Conveyor3.\n")
            conveyor2Label.deactivate()
            conveyor3Label.activate()


            await newKeyFrame("Conveyor3 keeps operates till it reaches Opt6",0)
            opt5Point.deactivate()
            await moveObject(moldImg,120,0,2000)
            opt6Point.activate()

            await newKeyFrame("When the block reaches Opt6, pause Conveyor3 and start Driller for 3 minutes.\n" +
                " Conveyor 5 is also energized. \n",0)
            conveyor3Label.deactivate()
            drillerLabel.activate()
            conveyor5Label.activate()
            await labelAnimation({
                label: time2,
                duration: 3000,
                textContents: ["3 minutes", "2 minutes", "1 minute"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After Driller is done, Conveyor3 resumes, till the next coming block reaches Opt6.",0)
            conveyor3Label.activate()
            opt6Point.deactivate()
            time2.deactivate()
            await moveObject(moldImg,50,0,1000)

            await newKeyFrame("Conveyor4 is energized when the system is on",0)
            await moveObject(moldImg,50,0,1000)

            await newKeyFrame("Conveyor5 is energized when the block passed by Opt6",0)
            await moveObject(moldImg,60,0,1500)

            await newKeyFrame("Conveyor5 continued to operate until the block reaches Opt7.\n",0)
            await moveObject(moldImg,80,0,1500)

            await newKeyFrame("When the block reaches Opt7, pauses Conveyor5 and start Grinder for 3 minutes.\n",0)
            conveyor5Label.deactivate()
            opt7Point.activate()
            grinderLabel.activate()
            conveyor5Label.deactivate()

            await labelAnimation({
                label: time3,
                duration: 3000,
                textContents: ["3 minutes", "2 minutes", "1 minute"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After Grinder is done, Conveyor5 resumes till the next coming block reaches Opt7.\n",0)
            grinderLabel.deactivate()
            conveyor5Label.activate()
            time3.deactivate()
            opt7Point.deactivate()
            await moveObject(moldImg,80,0,2000)

            await newKeyFrame("Conveyor6 is on when the system is on.\n",0)
            await moveObject(moldImg,110,0,2200)

            await newKeyFrame("When the block reaches Opt8, Conveyor6 stops and energizes Robot2 to package the block")
            opt8Point.activate()
            conveyor6Label.deactivate()

            robot2Label.activate()

            robotImage =  await createImage({
                x: 808,
                y: 103,
                targetHeight: 180,
                targetWidth: 180,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/2/animation/robot4.png'
            })


        } else {
            stopAllAnimations();
            clearCanvas();
            await initAnimation();
            bindClick();

        }
        layerInstance.draw();
    }

    function bindClick() {
        upButton.circle.on('click', async () => {
            machineOn = true;
            await renderAnimation();
        });

        downButton.circle.on('click', async () => {
            machineOn = false;
            await renderAnimation();
        })
    }

    await initAnimation();
    bindClick();
}

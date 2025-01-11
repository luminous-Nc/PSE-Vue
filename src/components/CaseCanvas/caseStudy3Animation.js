import {apiBaseUrl, clearCanvas, layerInstance, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
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

    let switchBase, upButton, downButton, bulb = 0
    let tempLPoint, tempFPoint, ULFPoint, LLFPoint, ULFLabel, LLFLabel, valveLabel = null
    let tempLLabel, tempFLabel, ladleLabel, furnaceLabel, singlePassLabel, conveyorRLabel = null
    let opt1Label, conveyorFLabel, opt2Label, opt1Point, opt2Point,proxyLabel,proxyPoint = null
    let time1, clock1 = 0
    let tundishImg, hotwave, mouldImg,fireImg, liquidImg = 0
    let subtitleLabel = 0


    async function initAnimation() {
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/background.jpg'
        })

        switchBase = await createImage({
            x: 346,
            y: 74,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        upButton = createCircle({
            x: switchBase.x() + 19,
            y: switchBase.y() + 18,
        })

        downButton = createCircle({
            x: switchBase.x() + 19,
            y: switchBase.y() + 40,
        })


        bulb = await createImage({
            x: 475,
            y: 57,
            targetHeight: 80,
            targetWidth: 80,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        ULFLabel = createLabel({
                x: 285,
                y: 99,
                fontSize: 14,
                padding: 0,
                textContent: 'ULF',
            }
        )

        ULFPoint = createCircle({
            x: 135,
            y: 105,
            radius: 6
        })

        LLFLabel = createLabel({
                x: 285,
                y: 128,
                fontSize: 14,
                padding: 0,
                textContent: 'LLF',
            }
        )

        LLFPoint = createCircle({
            x: 135,
            y: 132,
            radius: 6
        })


        valveLabel = createLabel({
                x: 227,
                y: 159,
                fontSize: 14,
                textContent: 'Valve(O)',
            }
        )

        tempLLabel = createLabel({
                x: 224,
                y: 25,
                fontSize: 14,
                textContent: 'TempL',
            }
        )

        tempFLabel = createLabel({
                x: 437,
                y: 269,
                fontSize: 14,
                textContent: 'TempF',
            }
        )

        ladleLabel = createLabel({
                x: 10,
                y: 154,
                fontSize: 14,
                textContent: 'Ladle',
            }
        )
        furnaceLabel = createLabel({
                x: 429,
                y: 234,
                fontSize: 14,
                textContent: 'Furnace(O)',
            }
        )

        conveyorRLabel = createLabel({
                x: 429,
                y: 234,
                fontSize: 14,
                textContent: 'Conveyor(R)',
            }
        )

        proxyLabel  = createLabel({
                x: 704,
                y: 348,
                fontSize: 14,
                textContent: 'Prox',
            }
        )

        proxyPoint =  createCircle({
            x: 778,
            y: 348,
            radius: 6
        })


        tempLPoint = createCircle({
            x: 146,
            y: 32,
            radius: 6
        })

        tempFPoint = createCircle({
            x: 398,
            y: 370,
            radius: 6
        })

        opt1Point = createCircle({
            x: 131,
            y: 256,
            radius: 6
        })

        opt2Point = createCircle({
            x: 534,
            y: 358,
            radius: 6
        })

        opt1Label = createLabel({
            x: 218,
            y: 248,
            fontSize: 14,
            padding: 0,
            textContent: 'Opt1',
        })

        conveyorFLabel = createLabel({
            x: 237,
            y: 281,
            textContent: 'ConveyorF(O)',
            padding: 0,
            fontSize: 14,
        })

        opt2Label = createLabel({
            x: 522,
            y: 262,
            textContent: 'Opt2',
            fontSize: 14,
            padding: 0
        })

        singlePassLabel = createLabel({
            x: 467,
            y: 441,
            textContent: 'Single Pass Rougher',
            fontSize: 14,
            padding: 0
        })

        clock1 = await createImage({
                x: 608,
                y: 425,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 639,
            y: 425,
            fontSize: 12,
            padding: 0,
            textContent: '10 min',
        })

        subtitleLabel = createLabel(
            {
                x: 10,
                y: 0,
                textContent: '',
                fontSize: 20
            }
        )

        layerInstance.draw();
    }


    async function renderAnimation() {
        const newKeyFrame = createKeyFrameFunction(subtitleLabel);

        if (machineOn) {
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            await newKeyFrame("On button is pressed and released; the system light is on.",0);
            await bulb.changeImage(apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOn.png')
            await waitAnimation(1000)

            await newKeyFrame("When the liquid metal reach ULF, ULF is triggered and energize control valve, filling the liquid metal into the tundish", 2000)
            hotwave = await createImage({
                x: 70,
                y: 97,
                targetHeight: 60,
                targetWidth: 120,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/hotwave.png'
            })

            ULFPoint.activate()
            ULFLabel.activate()
            LLFPoint.activate()
            LLFLabel.activate()

            await ScaleObjectSingleDirection(hotwave,1,-0.8,2000)
            ULFPoint.deactivate()
            ULFLabel.deactivate()

            await newKeyFrame("Temperature sensor at the ladle (TempL) and furnace (TempF) are triggered when temperature is not high enough, heater at the ladle and furnace are energized.\n" +
                "Valve is on, filling the liquid metal into the tundish, until the liquid metal goes below LLF.\n", 2000)
            tempLPoint.activate()
            tempLLabel.activate()

            ladleLabel.activate()
            valveLabel.activate()

            furnaceLabel.activate()
            tempFPoint.activate()
            tempFLabel.activate()

            tundishImg = await createImage({
                x: 90,
                y: 173,
                targetHeight: 50,
                targetWidth: 80,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/tundish.png'

            })

            mouldImg = await createImage({
                x: 125,
                y: 242,
                targetHeight: 25,
                targetWidth: 40,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould1.png'

            })

            await newKeyFrame("Ladle and Furnace de-energizes when temperature reach the desired temperature (TempL and TempF is off).\n",0)
            fireImg = await createImage({
                x: 292,
                y: 337,
                targetHeight: 100,
                targetWidth: 220,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/fire.png'
            })
            await waitAnimation(2000)

            tempLPoint.deactivate()
            tempLLabel.deactivate()
            tempFPoint.deactivate()
            tempFLabel.deactivate()

            await waitAnimation(2000)

            await newKeyFrame("Valve is on, filling the liquid metal into the tundish, until the liquid metal goes below LLF.\n",0)
            await Promise.all([
                await ScaleObjectSingleDirection(hotwave,1,-0.2,3000),
                await ScaleObjectSingleDirection(mouldImg,1,-4,3000)
            ]);
            LLFLabel.deactivate()
            LLFPoint.deactivate()

            await newKeyFrame("ConveyorFront move the mold filled with metal into the solidification phase for liquid core reduction, and into the furnace to form thin slabs.\n", 0)
            opt1Label.activate()
            opt1Point.activate()
            conveyorFLabel.activate()

            await waitAnimation(1500)
            mouldImg.destroy()
            opt1Point.deactivate()
            opt1Label.deactivate()

            mouldImg = await createImage({
                x: 129,
                y: 249,
                targetHeight: 50,
                targetWidth:50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould2.png'

            })

            await waitAnimation(1500)
            mouldImg.destroy()

            mouldImg = await createImage({
                x: 184,
                y: 338,
                targetHeight: 50,
                targetWidth:50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould3.png'

            })

            await waitAnimation(1500)

            mouldImg.destroy()
            mouldImg = await createImage({
                x: 306,
                y: 374,
                targetHeight: 50,
                targetWidth:70,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould4.png'

            })

            await moveObject(mouldImg,140,0,2000)
            opt2Point.activate()
            opt2Label.activate()
            conveyorFLabel.deactivate()
            mouldImg.destroy()


            await newKeyFrame("When iron thin slab reaches the optical sensor (Opt2) in the rougher, stops ConveyorF and starts the Rougher for 10 minutes. \n",0)


            singlePassLabel.activate()


            await labelAnimation({
                label: time1,
                duration: 6000,
                textContents: ["10 min", "5 min", "1 min"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After Rougher is done, starts ConveyorR to move the roughed slab forward.\n",0)
            singlePassLabel.deactivate()
            conveyorRLabel.activate()
            time1.deactivate()

            mouldImg = await createImage({
                x: 562,
                y: 360,
                targetHeight: 50,
                targetWidth:70,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould5.png'

            })


            await moveObject(mouldImg, 160, 0, 1500)
            proxyPoint.activate()
            proxyLabel.activate()
            conveyorRLabel.deactivate()

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
    let finishingMill,stripRolling,conveyorB,laserCut,coolingSpray,runoutTable = 0
    let proxLabel,proxPoint,prox1Label,prox1Point,prox2Label,prox2Point = 0
    let time1,clock1,time2,clock2 = 0
    let opt1Label,opt1Point = 0
    let mouldImg = 0
    let subtitleLabel = 0
    let counterLabel = 0


    async function initAnimation() {
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/background2.jpg'
        })

        switchBase = await createImage({
            x: 303,
            y: 81,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        upButton = createCircle({
            x: switchBase.x() + 19,
            y: switchBase.y() + 18,
        })

        downButton = createCircle({
            x: switchBase.x() + 19,
            y: switchBase.y() + 40,
        })


        bulb = await createImage({
            x: 436,
            y: 65,
            targetHeight: 80,
            targetWidth: 80,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        finishingMill = createLabel({
                x: 195,
                y: 312,
                fontSize: 14,
                textContent: 'Finishing Mill(O)',
            }
        )

        stripRolling = createLabel({
                x: 107,
                y: 471,
                fontSize: 14,
                textContent: 'Strip Rolling(O)',
            }
        )

        conveyorB = createLabel({
                x: 240,
                y: 516,
                fontSize: 14,
                textContent: 'ConveyorB(O)',
            }
        )

        proxLabel = createLabel({
                x: 13,
                y: 370,
                fontSize: 14,
                textContent: 'Prox',
            padding:0,
            }
        )

        proxPoint = createCircle({
            x: 114,
            y: 383,
            radius: 6
        })

        prox1Label = createLabel({
                x: 252,
                y: 370,
                fontSize: 14,
                textContent: 'Prox1',
            }
        )


        prox1Point = createCircle({
            x: 178,
            y: 382,
            radius: 6
        })

        laserCut = createLabel({
                x: 292,
                y: 267,
                fontSize: 14,
                textContent: 'Laser Cut(O)',
            }
        )

        prox2Label = createLabel({
                x: 342,
                y: 436,
                fontSize: 14,
                textContent: 'Prox2',
            }
        )

        coolingSpray = createLabel({
                x: 526,
                y: 339,
                fontSize: 14,
                textContent: 'Cooling Spray (O)',
            }
        )

        runoutTable = createLabel({
                x: 509,
                y: 498,
                fontSize: 14,
                textContent: 'Runout Table',
            }
        )


        prox2Point = createCircle({
            x: 476,
            y: 410,
            radius: 6
        })




        opt1Point = createCircle({
            x: 651,
            y: 409,
            radius: 6
        })

        opt1Label =  createLabel({
                x: 588,
                y: 425,
                fontSize: 14,
                textContent: 'Opt1',
            }
        )

        mouldImg = await createImage({
            x: 30,
            y: 389,
            targetHeight: 50,
            targetWidth: 60,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/3/animation/mould6.png'

        })


        clock1 = await createImage({
                x: 351,
                y: 518,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 380,
            y: 516,
            fontSize: 12,
            padding: 0,
            textContent: '10 min',
        })

        clock2 = await createImage({
                x: 369,
                y: 230,
                targetHeight: 30,
                targetWidth: 30,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time2 = createLabel({
            x: 400,
            y: 240,
            fontSize: 12,
            padding: 0,
            textContent: '10 min',
        })




        counterLabel = createLabel({
            x: 307,
            y: 474,
            fontSize:14,
            padding:0,
            textContent: 'Counter',
        })



        subtitleLabel = createLabel(
            {
                x: 10,
                y: 0,
                textContent: '',
                fontSize: 20
            }
        )

        layerInstance.draw();
    }


    async function renderAnimation() {
        const newKeyFrame = createKeyFrameFunction(subtitleLabel);

        if (machineOn) {
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            await newKeyFrame("On button is pressed and released; the system light is on.\nRolling, Milling machine, and ConveyorBack starts once the system is on.\n",0);
            await bulb.changeImage(apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOn.png')

            finishingMill.activate()
            stripRolling.activate()
            conveyorB.activate()
            await waitAnimation(2000)

            await newKeyFrame("ConveyorBack move the iron slab forward into rolling machine.",0)
            await moveObject(mouldImg,50,0,1000)
            proxPoint.activate()
            proxLabel.activate()

            await newKeyFrame("When Prox sensor is triggered by the presence of the iron slab, stops the ConveyorB for 10 minutes. \n", 0)
            conveyorB.changeBackgroundColor("Red")
            await labelAnimation({
                label: time1,
                duration: 3000,
                textContents: ["10 min", "5 min", "1 min"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After stops in the rolling machine for 10 minutes, ConveyorBack continues to move the iron slab forward into finishing machine.\n", 0)
            conveyorB.activate()
            time1.deactivate()

            await moveObject(mouldImg,12,0,200)
            proxLabel.deactivate()
            proxPoint.deactivate()

            await moveObject(mouldImg,52,0,800)
            prox1Point.activate()
            prox1Label.activate()

            await newKeyFrame("When Prox1 sensor is triggered by the presence of the iron slab, stops the ConveyorB for 10 minutes. \n", 0)
            conveyorB.changeBackgroundColor("Red")
            await labelAnimation({
                label: time1,
                duration: 3000,
                textContents: ["10 min", "5 min", "1 min"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            await newKeyFrame("After the finishing process, ConveyorB resumes and sends the iron block further.\n", 0)
            conveyorB.activate()
            time1.deactivate()
            await moveObject(mouldImg, 29, 0, 300)

            prox1Label.deactivate()
            prox1Point.deactivate()

            await moveObject(mouldImg, 280, 0, 2700)
            prox2Point.activate()
            prox2Label.activate()

            await newKeyFrame("When iron block reaches Prox2 at the laser cutter, ConveyorB stop, and start the laser cutter for 20 minutes.\n", 0)

            conveyorB.deactivate()
            laserCut.activate()
            await Promise.all([
                await labelAnimation({
                    label: time2,
                    duration:5000,
                    textContents: ["20 min", "15 min", "10 min","5 min","1 min"],
                    backgroundColors: ["#00ff00", "#00ff00", "#05a805","#05a805", "#0d5701"]
                }),
                await scaleObject(mouldImg,0.4,0.4,5000)
            ]);


            await newKeyFrame("After 20 minutes of laser cutter operation, energizes cooling spray and runout table to cool down the iron bar and send it to packaging.\n")
            laserCut.deactivate()
            coolingSpray.activate()
            runoutTable.activate()

            await moveObject(mouldImg, 17, 0, 300)

            prox2Label.deactivate()
            prox2Point.deactivate()

            await moveObject(mouldImg, 153, 0, 2700)
            opt1Label.activate()
            opt1Point.activate()

            counterLabel.activate()
            counterLabel.changeText("Counter +1")

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

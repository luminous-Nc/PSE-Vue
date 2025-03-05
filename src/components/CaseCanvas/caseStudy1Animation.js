import {apiBaseUrlCase, clearCanvas, layerInstance, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {
    createCircle,
    createImage,
    createLabel, labelAnimation,
    moveObject,
    stopAllAnimations,
    waitAnimation
} from "@/components/CaseCanvas/konvaAnimationCore.js";

export async function animationStep3_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, pumpInLabel, refiningLabel, setPointLabel, ULBLabel, LLBLabel,
        mValveLabel, mixerLabel, ULMLabel, pumpDLabel, ULMPoint, LLBPoint, setPoint, ULBPoint, wave1, wave2 = 0
    let time1, time2, clock1, clock2 = 0

    async function initAnimation() {
        console.log('initAnimation 3.1.1')
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/background.png'
        })

        switchBase = await createImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        bulb = await createImage({
            x: 220,
            y: 300,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        clock1 = await createImage({
                x: 100,
                y: 230,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 155,
            y: 250,
            textContent: '3 minutes',
        })

        clock2 = await createImage({
                x: 680,
                y: 150,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time2 = createLabel({
            x: 735,
            y: 170,
            textContent: '3 minutes',
        })

        upButton = createCircle({
            x: 119,
            y: 418,
        })

        downButton = createCircle({
            x: 119,
            y: 444,
        })

        setPoint = createCircle({
            x: 130,
            y: 100,
        })

        ULBPoint = createCircle({
            x: 310,
            y: 100
        })

        LLBPoint = createCircle({
            x: 310,
            y: 145
        })

        ULMPoint = createCircle({
            x: 720,
            y: 330
        })

        pumpInLabel = createLabel({
            x: 20,
            y: 55,
            textContent: 'PumpIn(O)',
        })

        refiningLabel = createLabel({
            x: 0,
            y: 205,
            textContent: 'Refining(O)',
        })

        setPointLabel = createLabel({
            x: 270,
            y: 55,
            textContent: 'Set Point(I)',
        })


        ULBLabel = createLabel({
            x: 530,
            y: 90,
            textContent: 'ULB (I)',
        })

        LLBLabel = createLabel({
            x: 530,
            y: 138,
            textContent: 'LLB (I)',
        })

        mixerLabel = createLabel({
            x: 600,
            y: 138,
            textContent: 'Mixer(O)',
        })

        mValveLabel = createLabel({
            x: 380,
            y: 250,
            textContent: 'MvalveB(O)',

        })

        pumpDLabel = createLabel({
            x: 650,
            y: 520,
            textContent: 'PumpD(O)',
        })

        ULMLabel = createLabel({
            x: 740,
            y: 325,
            textContent: 'ULM(I)'
        })

        layerInstance.draw();
    }

    async function renderAnimation() {
        if (machineOn) {
            // On button is pressed and released; the system light is on
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')
            setPoint.changeBackgroundColor('orange')
            bulb = await createImage({
                x: 220,
                y: 300,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            // PumpIn is energized when the system is on, will operate until the ingredient reach ULB
            pumpInLabel.changeBackgroundColor('#00ff00')
            wave1 = await createImage({
                x: 120,
                y: 170,
                targetHeight: 50,
                targetWidth: 200,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/wave.png'
            })

            await moveObject(wave1, 0, -50, 1000);
            LLBPoint.changeBackgroundColor('orange')

            await moveObject(wave1, 0, -40, 1000);
            ULBPoint.changeBackgroundColor('orange')

            // When the ingredient reaches ULB, stops the PumpIn
            pumpInLabel.changeBackgroundColor('white')

            // Once ULB is triggered, and the setPoint is on, refiner starts for 3 minutes
            refiningLabel.changeBackgroundColor('#00ff00')
            time1.changeBackgroundColor('#00ff00')

            await labelAnimation({
                label: time1,
                duration: 3000,
                textContents: ["3 minutes", "2 minutes", "1 minutes"],
                backgroundColors: ["#00ff00", "#05a805", "#0d5701"]
            })

            // If the set point is off during the 3 minutes, refiner wil continue till the 3 minutes timing is done
            setPoint.changeBackgroundColor('grey')
            await labelAnimation({
                label: time1,
                duration: 1000,
                textContents: ["Done"],
                backgroundColors: ["#00ff00"]
            })
            refiningLabel.changeBackgroundColor("white")

            await waitAnimation(1000); // 等待 2000ms

            // After refiner done, and the ingredients is above LLB, energizes the valve
            mValveLabel.changeBackgroundColor("#00ff00")

            //Set point set back to on, resets the timer for refiner.
            setPoint.changeBackgroundColor("Orange")
            time1.changeBackgroundColor("Yellow")
            time1.text.text("3 minutes")

            //When ingredients is below ULB, turn the pUmpIn back on
            await moveObject(wave1, 0, 30, 1000);
            ULBPoint.changeBackgroundColor('grey') // below ULB
            time1.changeBackgroundColor("White")
            pumpInLabel.changeBackgroundColor("#00ff00") // pumpIN back on
            wave2 = await createImage({
                x: 530,
                y: 390,
                targetHeight: 50,
                targetWidth: 150,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/wave.png'
            })
            await moveObject(wave1, 0, 20, 1000);
            await moveObject(wave2, 0, -20, 1000);

            await moveObject(wave1, 0, 20, 1000);
            LLBPoint.changeBackgroundColor("grey")
            await moveObject(wave2, 0, -30, 1000);
            await moveObject(wave2, 0, -25, 1000);
            // When ingredient is below LLB, stop the valve.
            // When the ingredient is above ULM, start the mixer for 3 minutes
            ULMPoint.changeBackgroundColor("Orange")

            mValveLabel.changeBackgroundColor("White")


            mixerLabel.changeBackgroundColor('#00ff00')
            await labelAnimation({
                label: time2,
                duration: 1000,
                textContents: ["3 minutes"],
                backgroundColors: ["#00ff00"]
            })
            await moveObject(wave1, 0, -30, 1000);
            LLBPoint.changeBackgroundColor('orange')

            await labelAnimation({
                label: time2,
                duration: 1000,
                textContents: ["2 minutes"],
                backgroundColors: ["#05a805"]
            })
            await moveObject(wave1, 0, -10, 1000);


            await labelAnimation({
                label: time2,
                duration: 1000,
                textContents: ["1 minutes"],
                backgroundColors: ["#0d5701",]
            })

            await moveObject(wave1, 0, -25, 1000);
            ULBPoint.changeBackgroundColor('orange')
            pumpInLabel.changeBackgroundColor("white")

            await labelAnimation({
                label: time2,
                duration: 1000,
                textContents: ["Done"],
                backgroundColors: ["#00FF00",]
            })
            mixerLabel.changeBackgroundColor("white")
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
            // 切换灯泡和开关的图片
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

export async function animationStep5_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, nozzleLabel, coolingLabel, conveyorFLabel, ULDLabel, LLDLabel,
        conveyorLabel, tempBLabel, OptLabel, pumpDLabel, ULDPoint, LLDPoint, optSensorPoint, cup, wave = 0

    let time1, time2, clock1, clock2 = 0

    async function initAnimation() {
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_2/background.jpg'
        })

        switchBase = await createImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        bulb = await createImage({
            x: 219,
            y: 405,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        clock1 = await createImage({
                x: 300,
                y: 300,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 309,
            y: 347,
            textContent: '15 sec',
        })

        clock2 = await createImage({
                x: 405,
                y: 413,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time2 = createLabel({
            x: 460,
            y: 428,
            textContent: '5 sec',
        })

        upButton = createCircle({
            x: 119,
            y: 418,
        })

        downButton = createCircle({
            x: 119,
            y: 444,
        })

        optSensorPoint = createCircle({
            x: 832,
            y: 342,
        })

        ULDPoint = createCircle({
            x: 524,
            y: 233,
            radius: 5
        })

        LLDPoint = createCircle({
            x: 524,
            y: 250,
            radius: 5
        })

        nozzleLabel = createLabel({
            x: 345,
            y: 310,
            fontSize: 14,
            textContent: 'Nozzle(O)',
        })

        coolingLabel = createLabel({
            x: 652,
            y: 300,
            textContent: 'Cooling(O)',
        })

        conveyorFLabel = createLabel({
            x: 797,
            y: 285,
            textContent: 'ConveyorF(O)',
        })


        ULDLabel = createLabel({
            x: 716,
            y: 225,
            fontSize: 14,
            textContent: 'ULD (I)',
        })

        LLDLabel = createLabel({
            x: 716,
            y: 247,
            fontSize: 14,
            textContent: 'LLD (I)',
        })

        tempBLabel = createLabel({
            x: 755,
            y: 505,
            textContent: 'TempB(Set_Point)(I)',
        })

        conveyorLabel = createLabel({
            x: 430,
            y: 380,
            textContent: 'Conveyor(O)',

        })

        pumpDLabel = createLabel({
            x: 142,
            y: 208,
            textContent: 'PumpD(O)',
        })

        OptLabel = createLabel({
            x: 800,
            y: 425,
            textContent: 'Opt_SenD(I)'
        })

        cup = await createImage({
            x: 433,
            y: 315,
            targetHeight: 40,
            targetWidth: 40,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_2/cup.png'
        })

        layerInstance.draw();
    }

    async function renderAnimation() {
        if (machineOn) {
            // On button is pressed and released; the system light is on
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            bulb = await createImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            // PumpD turns on until the ingredient reaches ULD.
            pumpDLabel.changeBackgroundColor('#00ff00')

            await waitAnimation(1000); // 等待 2000ms

            // TempB set_point is not satisfied, energizes the cooling.
            tempBLabel.changeBackgroundColor('red')

            coolingLabel.changeBackgroundColor('#00ff00')

            wave = await createImage({
                x: 432,
                y: 285,
                targetHeight: 20,
                targetWidth: 80,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_2/wave.png'
            })



            await Promise.all([
                moveObject(wave, -40, -50, 1000),
                scaleObject(wave,2,1,1000)
            ]);
            LLDPoint.changeBackgroundColor('orange')

            // TempB set_point is satisfied, stops the cooling
            tempBLabel.changeBackgroundColor("#00ff00")
            await waitAnimation(500)
            coolingLabel.changeBackgroundColor("white")

            await moveObject(wave, 0, -12, 1000)
            ULDPoint.changeBackgroundColor("orange")

            // When the ingredient reaches ULD,
            // stops PumpD, and start the timer for Nozzle (15 seconds)
            pumpDLabel.changeBackgroundColor("white")

            nozzleLabel.changeBackgroundColor("#00ff00")
            time1.changeBackgroundColor("#00ff00")

            // When the ingredient runs below ULD, starts PumpD again.
            pumpDLabel.changeBackgroundColor("#00ff00")
            await moveObject(wave,0,12,1000)
            ULDPoint.changeBackgroundColor("grey")

            time1.text.text("10 sec")

            await moveObject(wave, 0, 5, 1000)
            time1.text.text("5 sec")

            await moveObject(wave,0,5,1000)
            LLDPoint.changeBackgroundColor("grey")

            // When ingredients runs below LLD, nozzle stops, resets the timer
            time1.text.text("15 sec")
            nozzleLabel.changeBackgroundColor("white")
            time1.changeBackgroundColor("yellow")


            // When ingredients is filled above LLD, nozzle starts for 15 seconds
            await moveObject(wave,0,-10,2000)
            LLDPoint.changeBackgroundColor("orange")

            nozzleLabel.changeBackgroundColor("#00ff00")
            time1.changeBackgroundColor("#00ff00")

            await labelAnimation({
                label:time1,
                duration:3000,
                textContents:["15 sec","10 sec","5 sec","Done"],
                backgroundColors:["#00ff00","#05a805","#0d5701","#00ff00"]
            })
            //After running for 15 seconds, nozzle stops, starts the conveyor for 5 seconds.
            conveyorLabel.changeBackgroundColor("#00ff00")
            nozzleLabel.changeBackgroundColor("white")

            await moveObject(wave,0,-10,1000)
            ULDPoint.changeBackgroundColor('orange')
            pumpDLabel.changeBackgroundColor('white')

            await Promise.all([
                moveObject(cup, 380, 0, 5000),
                labelAnimation({
                    label:time2,
                    duration:5000,
                    textContents:["5 sec","4 sec","3 sec","2 sec","1 sec"],
                    backgroundColors:["#00ff00","#05a805","#158003","#035903","#033F03"] }),
            ]);

            optSensorPoint.changeBackgroundColor("orange")
            time2.text.text('Done')
            conveyorLabel.changeBackgroundColor('White')

            await waitAnimation(500)
            //After operates for 5 seconds, timer for Conveyor done bit = 1, resets the timer for the Nozzle and itself.

            time1.changeBackgroundColor("yellow")
            time1.text.text("15 sec")
            time2.changeBackgroundColor("yellow")
            time2.text.text("5 sec")

            await waitAnimation(500)
            time1.changeBackgroundColor("White")
            time2.changeBackgroundColor("white")

        } else {
            bulb = await createImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
            });
            upButton.changeBackgroundColor('grey')
            downButton.changeBackgroundColor('grey')
            ULDPoint.changeBackgroundColor('grey')
            LLDPoint.changeBackgroundColor('grey')
            optSensorPoint.changeBackgroundColor('grey')
            stopAllAnimations();
        }
        layerInstance.draw();
    }

    await initAnimation();
    upButton.circle.on('click', async () => {
        machineOn = true;
        await renderAnimation();
    });

    downButton.circle.on('click', async () => {
        machineOn = false;
        await renderAnimation();
    })
}

export async function animationStep7_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, conveyorFLabel, ULPLabel, LLPLabel,
        conveyorPLabel, counterLabel, OptPLabel,OptDLabel, chutterLabel, ULPPoint, LLPPoint, optPPoint,optDPoint, cup, wave = 0
    let coffee1,coffee2,coffee3 = 0
    let chocolate, bump = 0
    let accLabel = 0
    async function initAnimation() {
        await createImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/background.jpg'
        })

        switchBase = await createImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/switchBase.png'
        });

        bulb = await createImage({
            x: 219,
            y: 405,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/bulbOff.png'
        });

        upButton = createCircle({
            x: 119,
            y: 418,
        })

        downButton = createCircle({
            x: 119,
            y: 444,
        })

        optDPoint = createCircle({
            x: 218,
            y: 262,
        })

        optPPoint = createCircle({
            x: 650,
            y: 440,
        })

        ULPPoint = createCircle({
            x: 474,
            y: 297,
            radius: 5
        })

        LLPPoint = createCircle({
            x: 474,
            y: 316,
            radius: 5
        })

        chutterLabel = createLabel({
            x: 338,
            y: 366,
            fontSize: 14,
            textContent: 'Chutter(O)',
        })

        counterLabel = createLabel({
            x: 632,
            y: 360,
            fontSize:14,
            textContent: 'Counter(I) Pre = 5',
        })

        conveyorPLabel = createLabel({
            x: 463,
            y: 480,
            fontSize:14,
            textContent: 'ConveyorP(O)',
        })


        ULPLabel = createLabel({
            x: 668,
            y: 283,
            fontSize: 14,
            textContent: 'ULP (I)',
        })

        LLPLabel = createLabel({
            x: 668,
            y: 308,
            fontSize: 14,
            textContent: 'LLP (I)',
        })

        OptPLabel = createLabel({
            x: 668,
            y: 505,
            fontSize:14,
            textContent: 'Opt_SenP(I)',
        })

        conveyorFLabel = createLabel({
            x: 172,
            y: 210,
            fontSize:14,
            textContent: 'ConveyorF(O)',

        })


        OptDLabel = createLabel({
            x: 196,
            y: 354,
            fontSize:14,
            textContent: 'Opt_SenD(I)'
        })

        cup = await createImage({
            x: 151,
            y: 234,
            targetHeight: 40,
            targetWidth: 40,
            imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/cup.png'
        })

        accLabel = createLabel(
            {
                x:700,
                y:386,
                fontSize:14,
                textContent:'Acc = 0'
            }
        )

        bump = await createImage({
            x:414,
            y:383,
            targetWidth:50,
            targetHeight:50,
            imageSrc:apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/bump.png'
        })
        layerInstance.draw();
    }

    async function renderAnimation() {
        if (machineOn) {
            // On button is pressed and released; the system light is on
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            bulb = await createImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            //Conveyor Front turns on until the amount of the chocolate reaches ULP.
            conveyorFLabel.activate()

            //Conveyor Front turns on until the amount of the chocolate reaches ULP.

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层

            coffee1 = await createImage(
                {
                    x:377,
                    y:307,
                    targetHeight:100,
                    targetWidth:100,
                    imageSrc:apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/coffee_1.png'
                }
            )

            cup = await createImage({
                x: 151,
                y: 234,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/cup.png'
            })

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层

            coffee2 = await createImage(
                {
                    x:345,
                    y:293,
                    targetHeight:150,
                    targetWidth:180,
                    imageSrc:apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/coffee_2.png'
                }
            )

            LLPPoint.activate()

            cup = await createImage({
                x: 151,
                y: 230,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/cup.png'
            })

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层


            coffee3 = await createImage(
                {
                    x:345,
                    y:280,
                    targetHeight:150,
                    targetWidth:180,
                    imageSrc:apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/coffee_3.png'
                }
            )

            // When the amount of the chocolate reaches ULP, stops conveyor front, and starts the chutter.
            ULPPoint.activate()
            conveyorFLabel.deactivate()
            chutterLabel.activate()

            // When chocolate ball passes through the chutter, activates the counter to add 1

            chocolate = await createImage({
                x: 423,
                y: 411,
                targetHeight: 20,
                targetWidth: 20,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/chocolate_1.png'

            })
            await waitAnimation(500)
            accLabel.activate()
            accLabel.text.text("Acc = 1")

            await waitAnimation(500)

            chocolate.destroy()
            chocolate = await createImage({
                x: 415,
                y: 401,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/chocolate_2.png'
            })

            await waitAnimation(500)
            accLabel.text.text("Acc = 3")

            await waitAnimation(500)
            chocolate.destroy()
            chocolate = await createImage({
                x: 415,
                y: 395,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/chocolate_3.png'
            })

            await waitAnimation(500)
            accLabel.text.text("Acc = 5")

            // When the number of the chocolate balls in the package reaches 5, stops the chutter, and starts the conveyor back (ConveyorP)
            chutterLabel.deactivate()

            conveyorPLabel.activate()

            await Promise.all([
                moveObject(bump, 200, 0, 3000),
                moveObject(chocolate,200,0,3000)
            ]);

            conveyorPLabel.deactivate()
            optPPoint.activate()
            OptPLabel.activate()

            await waitAnimation(500)

            chocolate.destroy()
            bump.destroy()
            bump = await createImage({
                x:414,
                y:383,
                targetWidth:50,
                targetHeight:50,
                imageSrc:apiBaseUrlCase + '/assets/images/caseStudy/1/animation_3/bump.png'
            })

            accLabel.changeBackgroundColor('Yellow')
            accLabel.text.text('Acc = 0')

            optPPoint.deactivate()
            OptPLabel.deactivate()

        } else {
            bulb = await createImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrlCase + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
            });
            upButton.changeBackgroundColor('grey')
            downButton.changeBackgroundColor('grey')
            stopAllAnimations();
        }
        layerInstance.draw();
    }

    await initAnimation();
    upButton.circle.on('click', async () => {
        machineOn = true;
        await renderAnimation();
    });

    downButton.circle.on('click', async () => {
        machineOn = false;
        await renderAnimation();
    })
}

import {apiBaseUrl, renderDefault, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {renderImage, renderText} from "@/components/CaseCanvas/konvaUtils.js";
import {
    animation1,
    animation2,
} from "@/components/CaseCanvas/caseStudy2Animation.js";
import {useCaseStore} from "@/stores/caseStudy.js";
let currentCaseStudyID = 0
export function renderCase2Step(currentStepId) {
    let caseStore = useCaseStore()
    currentCaseStudyID = caseStore.current_case_study.case_id
    // 根据 ID 调用对应的渲染函数
    switch (currentStepId) {
        case '1.1.1':
            renderStep1_1_1();
            break;
        case '1.1.2':
            renderStep1_1_2();
            break;
        case '1.2.1':
            renderStep1_2_1();
            break;
        case '1.3.1':
            renderStep1_3_1();
            break;
        case '2.1.1':
            renderStep2_1_1();
            break;
        case '3.1.1':
            animation1();
            break;
        case '4.1.1':
            renderStep4_1_1();
            break;
        case '5.1.1':
            animation2();
            break;
        case '8.1.1':
            renderStep8_1_1();
            break;
        case '8.1.2':
            renderStep8_1_2();
            break;
        case '8.1.3':
            renderStep8_1_3();
            break;
        case '8.1.4':
            renderProblemandSolution('8.1.4');
            break;
        case '8.1.5':
            renderProblemandSolution('8.1.5');
            break;
        case '8.1.6':
            renderProblemandSolution('8.1.6');
            break;
        case '8.1.7':
            renderProblemandSolution('8.1.7');
            break;
        case '8.1.8':
            renderProblemandSolution('8.1.8');
            break;
        case '8.1.9':
            renderProblemandSolution('8.1.9');
            break;
        case '8.1.10':
            renderProblemandSolution('8.1.10');
            break;
        case '8.1.11':
            renderProblemandSolution('8.1.11');
            break;
        case '8.1.12':
            renderProblemandSolution('8.1.12');
            break;
        case '8.1.13':
            renderProblemandSolution('8.1.13');
            break;
        case '8.1.14':
            renderStep8_1_14();
            break;
        case '8.1.15':
            renderStep8_1_15();
            break;
        case '8.2.1':
            renderStep8_2_1();
            break;
        case '8.2.2':
            renderStep8_2_2();
            break;
        case '8.2.3':
            renderStep8_2_3();
            break;
        case '8.2.4':
            renderProblemandSolution('8.2.4');
            break;
        case '8.2.5':
            renderProblemandSolution('8.2.5');
            break;
        case '8.2.6':
            renderProblemandSolution('8.2.6');
            break;
        case '8.2.7':
            renderProblemandSolution('8.2.7');
            break;
        case '8.2.8':
            renderProblemandSolution('8.2.8');
            break;
        case '8.2.9':
            renderProblemandSolution('8.2.9');
            break;
        case '8.2.10':
            renderProblemandSolution('8.2.10');
            break;
        case '8.2.11':
            renderProblemandSolution('8.2.11');
            break;
        case '8.2.12':
            renderProblemandSolution('8.2.12');
            break;
        case '8.2.13':
            renderProblemandSolution('8.2.13');
            break;
        case '8.2.14':
            renderProblemandSolution('8.2.14');
            break;
        case '8.2.15':
            renderProblemandSolution('8.2.15');
            break;
        case '8.2.16':
            renderProblemandSolution('8.2.16');
            break;
        case '8.2.17':
            renderStep8_2_17();
            break;
        case '8.2.18':
            renderStep8_2_18();
            break;
        case '8.3.1':
            renderStep8_3_1();
            break;
        case '8.3.2':
            renderStep8_3_2();
            break;
        case '8.3.3':
            renderStep8_3_3();
            break;
        case '8.3.4':
            renderStep8_3_4();
            break;
        case '8.3.5':
            renderStep8_3_5();
            break;
        case '8.3.6':
            renderStep8_3_6();
            break;
        case '8.3.7':
            renderStep8_3_7();
            break;
        case '8.3.8':
            renderStep8_3_8();
            break;
        case '8.3.9':
            renderStep8_3_9();
            break;
        case '8.3.10':
            renderStep8_3_10();
            break;
        default:
            renderDefault(currentStepId);
    }
}

function renderStep1_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        align: 'left',
        fontSize:22,
        text: 'Background Information:\n' +
            'The engine block manufacturing line is a complex production process designed to create the main structural component of an engine. The process begins with molten metal being cast into molds to form the basic shape of the engine block. After casting, the blocks are transferred to a heating station, where they undergo controlled thermal treatment to improve strength and durability. CNC machining then adds precise dimensions and intricate features, ensuring tight tolerances essential for engine performance. Finally, drilling and grinding are applied to create necessary holes and smooth surfaces, preparing the engine blocks for assembly. \n' +
            '\n' +
            'This automated line has two stages, each stage has a set of On/Off buttons, and one system light . The first stage includes a heating ladle, two valves before and after the tundish, a conveyor sending the molds through a heating oven, and a robot arm transferring the engine block to the second stage. The second stage includes CNC machine, driller, grinder, and five conveyors to send the engine blocks between the processing steps. On/Off buttons are normally open and spring return (NOSR). Make the necessary wiring of I/O devices to I/O modules, relays, and power supply for this application.\n'})

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/1.1.1.jpg'
    })
}

function renderStep1_1_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/1.1.2.png'
    })
}

function renderStep1_2_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height() + 20,
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/1.2.1.png'
    }).then((imageObject) => {
        let text2 = renderText({
            x: 0,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_3_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height() + 20,
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/1.3.1.jpg'
    }).then((imageObject) => {
        let text2 = renderText({
            x: 0,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}


function renderStep2_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Pump is energized when the system is on, will operate until the ingredient reach ULF.\n' +
            '3. When the TSensor1 (a set point) is on, when the condition hasn’t met the temperature level requirement, the ladle heating starts.\n' +
            '4. If the TSensor1 is off (when the temperature is satisfied) , and the melted metal is above LLF, starts Valve1 for 5 seconds.\n' +
            '5. After Valve1 operate for 5 seconds, and Opt1 senses a mold’s present, starts Valve2 for 5 seconds, pouring the melted metal into the mold.\n' +
            '6. After the mold is filled, starts conveyor1 to move the mold through the oven, till the mold reach Opt2.\n' +
            '7. When TSensor2 (a thermal couple) is on, when the condition hasn’t met the temperature level requirement, the oven heating starts until the temperature is satisfied.\n' +
            '8. When Opt2 sense the filled mold, and robot1 is available, start the robot arm operation, moving the mold to to conveyor 2 for stage 2 process.\n' +
            '9. The system shut down when Off button is pressed.\n',
        width: stageInstance.getWidth() / 2,
        lineHeight: 1.2,
        fontSize:19,
    })

    renderImage({
        x: text.x() + text.width(),
        y: 0,
        maxWidth: stageInstance.getWidth() / 2,
        maxHeight: stageInstance.getHeight(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/2.1.1.jpg'
    })
}

function renderStep4_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Conveyor2 is energized when Opt3 is triggered.\n' +
            '3. When the block reaches Opt4, pause Conveyor2 and start CNC machine for 3 minutes.\n' +
            '4. After CNC machine done, Conveyor 2 resumes, till the block reaches Opt5.\n' +
            '5. When Opt5 is triggered, stops Conveyor2 and energizes Conveyor3.\n' +
            '6. When the block reaches Opt6, pause Conveyor3 and start Driller for 3 minutes. Conveyor 5 is also energized. \n' +
            '7. After Driller is done, Conveyor3 resumes, till the next coming block reaches Opt6.\n' +
            '8. Conveyor4 is always on when the system is on.\n' +
            '9. When the block reaches Opt7, pauses Conveyor5 and start Grinder for 3 minutes.\n' +
            '10. After Grinder is done, Conveyor5 resumes till the next coming block reaches Opt7.\n' +
            '11. Conveyor6 is on when the system is on and stops when Opt8 is triggered.\n' +
            '12. When the block reaches Opt8, Conveyor6 stops and energizes Robot2 to package the block.\n' +
            '13. The system shut down when Off button is pressed.\n',
        width: stageInstance.getWidth(),
        fontSize: 20,
        lineHeight: 1.1
    })

    renderImage({
        x: 0,
        y: text.y() + text.height() - 25,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/4.1.1.png'
    })
}

function renderStep8_1_1() {
    renderImage({
        x: stageInstance.getWidth()*0.1,
        y: 0,
        maxWidth:  stageInstance.getWidth()*0.6,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.1.jpg'
    })

}

function renderStep8_1_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.2.png'
    })

}

function renderStep8_1_3() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. Pump is energized once the system light is on, until the metal reach ULF.\n' +
            'Step 3. When turn on the TSensor1 (set_point), it energizes ladle heating.\n' +
            'Step 4. When the TSensor2 (thermal couple) is on, it energizes oven.\n' +
            'Step 5. When melted metal is above LLF, and TSensor2 is off, starts valve1 for 5 seconds.\n' +
            'Step 5. After valve1 done, and Opt1 sense the mold’s present, starts valve2 for 5 seconds.\n' +
            'Step 6. After valve2 done, starts the conveyor1 till Opt2 sense the mold’s present.\n' +
            'Step 7. When the mold reach Opt2 , and robot1 is available, starts robot arm to transfer the mold to conveyor2.\n' +
            'Step 8. When Off is pressed, the whole system shut down, except the PumpIn will keep working till the ingredient is filled to ULB.\n',
        lineHeight: 1.5,
        fontSize: 24
    })

}

function renderProblemandSolution(stepID) {

    const problemSolutionMap = {
        "8.1.4": "Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n",
        "8.1.5": "Rung 1 specifies that when the system light bit is 1, the Pump output gets energized. When the ULF bit is 1, stops the Pump. When the system light bit turns 0, the Pump keeps operate until ULF bit is 1.\n",
        "8.1.6":"Rung 2 specifies that when the system light bit is 1, TSensor1(set_point) bit is 1, ladle heating output gets energized. When TSensor1 is off(bit is 0), stops the ladle heating. \n",
        "8.1.7":"Rung 3 specifies that when the system light bit is 1, TSensor2(thermal couple) bit is 1, oven gets energized. When TSensor2 is off(bit is 0), stops the oven heating. \n",
        "8.1.8":"Rung 4 specifies that when the system light bit is 1, the melted metal is above LLF (bit is 1), and the temperature satisfied the requirement (TSensor1 bit is 0), energize timer T1 (preset to 5 seconds). Timer T1 will be reset when timer T2 done counting.\n",
        "8.1.9":"Rung 5 specifies that valve1 is energized when timer T1 is timing for 5 seconds.\n",
        "8.1.10":"Rung 6 specifies that when system is on, timer T1 done counting (valve1 done), and Opt1 is triggered (mold present), energizes timer T2, which is preset to 5 seconds. T2 will be reset when itself is done, due to the timer T1 reset schematic in rung 4.\n",
        "8.1.11":"Rung 7 specifies that specifies that valve2 is energized when timer T2 is timing for 5 seconds.\n",
        "8.1.12":"Rung 8 specifies that when system is on, and timer T2 done bit =1 (valve2 done), energizes conveyor1, until the mold arrives at Opt2, stops conveyor1.\n",
        "8.1.13":"Rung 9 specifies that when system is on, the mold reached Opt2, and Robot1 is responding/available (Robot1_DO1 bit = 1), energizes Robot1_DI1.\n",
        "8.2.4":"Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n",
        "8.2.5":"Rung 1 specifies that when the system light bit is 1, Opt3 is triggered, while Opt4 and Opt5 is off, the Conveyor2 output gets energized. Once Conveyor2 starts, even the block passes Opt3, Conveyor2 continues until the block reaches Opt4. When the timer T1.DN bit is 1, resumes Conveyor2. When Opt5 is triggered, stops Conveyor2.\n",
        "8.2.6":"Rung 2 specifies that when the system light bit is 1, and Opt4 is triggered, starts timer T1. T1 duration = 3 minutes.\n",
        "8.2.7":"Rung 3 specifies that when the T1.TT bit is 1, energizes CNC machine.\n",
        "8.2.8":"Rung 4 specifies that when the system light bit is 1, Opt5 is triggered, while Opt6 is off, Conveyor3 output gets energized. Once Conveyor3 starts, even the block passes Opt5, Conveyor3 continues until the block reaches Opt6. When the timer T2.DN bit is 1, resumes Conveyor3, until next block reaches Opt6. \n",
        "8.2.9":"Rung 5 specifies that when the system light bits 1, energizes Conveyor4.\n",
        "8.2.10":"Rung 6 specifies that when the system light bit is 1, and Opt6 is triggered, starts timer T2. T2 duration = 3 minutes.\n",
        "8.2.11":"Rung 7 specifies that when the T2.TT bit is 1, energizes Driller.",
        "8.2.12":"Rung 8 specifies that when the system light bit is 1, Opt6 is triggered, while Opt7 is off, Conveyor5 output gets energized. Once Conveyor5 starts, even the block passes Opt6, Conveyor5 continues until the block reaches Opt7. When the timer T3.DN bit is 1, resumes Conveyor5, until next block reaches Opt7. \n",
        "8.2.13":"Rung 9 specifies that when the system light bit is 1, and Opt7 is triggered, starts timer T3. T3 duration = 3 minutes.\n",
        "8.2.14":"Rung 10 specifies that when the T3.TT bit is 1, energizes Grinder.\n",
        "8.2.15":"Rung 11 specifies that when the system light bit is 1, energizes Conveyor6. When Opt8 is triggered, stops Conveyor6.\n",
        "8.2.16":"Rung 12 specifies that when the system light bit is 1, Opt8 is triggered, and Robot2 is responding/available (Robot2_DO1 bit = 1), energizes Robot2_DI1. Even the block passes Opt8, once Robot2_DI1 is energized, it will continue until it finish the whole process. ",
    };

    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text:  problemSolutionMap[stepID]
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 40,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/'+stepID+'.png'
    })
}


function renderStep8_1_14() {

    renderImage({
        x: stageInstance.getWidth()*0.2,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.14.png'
    })
}

function renderStep8_1_15() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.15.png'
    })
}

function renderStep8_2_1() {
    renderImage({
        x: stageInstance.getWidth()*0.1,
        y: 0,
        maxWidth:  stageInstance.getWidth()*0.6,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.1.jpg'
    })
}

function renderStep8_2_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.2.png'
    })

}

function renderStep8_2_3() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. When the block reaches Opt3, energizes the Conveyor2.\n' +
            'Step 3. When the block reaches Opt4, stops Conveyor2, and energizes timer T1 (3 minutes).\n' +
            'Step 4. CNC machine is energized when timer T1.TT bit is 1.\n' +
            'Step 5. When timer T1.DN bit is 1, resumes Conveyor2, until the block reaches Opt5.\n' +
            'Step 6. When Opt5 is triggered, energizes Conveyor3.\n' +
            'Step 7. When Opt6 is triggered, stops Conveyor3, energizes timer T2 (3 minutes) and Conveyor5.\n' +
            'Step 8. Driller is energized when timer T2.TT bit is1.\n' +
            'Step 9. When timer T2.DN bit is 1, resumes Conveyor3, until the block reaches Opt6.\n' +
            'Step 10. Conveyor4 and Conveyor6 energizes when system is on.\n' +
            'Step 11. When Opt7 is triggered, stops Conveyor5, energizes timer T3 (3 minutes).\n' +
            'Step 12. Grinder is energized when timer T3.TT bit is 1.\n' +
            'Step 13. When timer T3.DN bit is 1, resumes Conveyor5, until the block reaches Opt7.\n' +
            'Step 14. When block reaches Opt8, stops Conveyor6, and energizes Robot2.\n',
        lineHeight: 1.2,
        fontSize: 26
    })

}

function renderStep8_2_17() {

    renderImage({
        x: stageInstance.getWidth()*0.2,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.17.jpg'
    })
}

function renderStep8_2_18() {

    renderImage({
        x: stageInstance.getWidth()*0.2,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.18.png'
    })
}

function renderStep8_3_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'Inputs',
        width: stageInstance.getWidth() / 2,
        fontSize: 36,
        lineHeight: 1,
        fill: 'blue',
        align: 'center'
    })

    let text2 = renderText({
        x: 0,
        y: text.height() + text.y() + 30,
        text: 'On Button (ONB)\n' +
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULP)\n' +
            'Lower Level Bound (LLP)\n' +
            'Chutter Counter\n' +
            'Opt Sensor',
        width: stageInstance.getWidth() / 2,
        fontSize: 28,
        lineHeight: 1,
        fill: 'red',
        align: 'center'
    })

    let text3 = renderText({
        x: text.x() + text.width() + 10,
        y: 10,
        text: 'Outputs',
        width: stageInstance.getWidth() / 2,
        fontSize: 36,
        lineHeight: 1,
        fill: 'blue',
        align: 'center'
    })

    let text4 = renderText({
        x: text.x() + text.width() + 10,
        y: text.height() + text.y() + 30,
        text: 'System Light\n' +
            'Conveyor Front\n' +
            'Chutter\n' +
            'Conveyor Back\n',
        width: stageInstance.getWidth() / 2,
        fontSize: 28,
        lineHeight: 1,
        fill: 'red',
        align: 'center'
    })

}

function renderStep8_3_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.2.png'
    })

}

function renderStep8_3_3() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. The Conveyor Front is energized once the system is on, until the ULP sensor is triggered, stops the Conveyor Front.\n' +
            'Step 3. When both ULP and LLP sensors’ bits are 1, energizes the chutter until the counter C5_0 counts 5 objects presented at the chutter.\n' +
            'Step 4. The counter C5_0 increase by 1 every time when the ChutterCounter is triggered (object presents at the chutter).\n' +
            'Step 5. After the Counter C5_0 reaches 5, the Conveyor Back is energized until the object pile reaches the optical sensor at the end of the production line.\n' +
            'Step 6. Once the optical sensor is triggered, reset Counter C5_0.\n' +
            'Step 7. When Off is pressed, the whole system shut down.\n',
        lineHeight: 1.3,
        fontSize: 26
    })

}

function renderStep8_3_4() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to true, then the system light gets energized. System light bit branching the start bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the start bit false.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.4.png'
    })
}

function renderStep8_3_5() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, starts the ConveyorFront. When the upper level bound (ULP) is reached (ULP bit is 1), stops the ConveyorFront.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.5.png'
    })
}

function renderStep8_3_6() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULP bit, and LLP bit are true, the chutter gets energized. When the counter C5_0 done counting (C5_0.DN bit is 1), stops the chutter.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.6.png'
    })
}

function renderStep8_3_7() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, the ChutterCounter activates the counter C5_0 to add 1 when it gets triggered by the object that reaches the chutter.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.7.png'
    })
}

function renderStep8_3_8() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, the counter C5_0 done counting (C5_0.DN bit is 1), starts the ConveyorBack to move the object piles forward. When the object piles reach the optical sensor, stops the ConveyorBack.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.8.png'
    })
}

function renderStep8_3_9() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: '\n' +
            'Rung 5 specifies that when the system light bit is 1, the counter C5_0 resets when the object piles reach the optical sensor.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.9.png'
    })
}

function renderStep8_3_10() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.3.10.png'
    })
}

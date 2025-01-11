import {apiBaseUrl, renderDefault, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {renderImage, renderText} from "@/components/CaseCanvas/konvaUtils.js";
import {
    animation1,
    animation2,
} from "@/components/CaseCanvas/caseStudy3Animation.js";
import {useCaseStore} from "@/stores/caseStudy.js";
let currentCaseStudyID = 0
export function renderCase3Step(currentStepId) {
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
            renderStep8_1_12()
            break;
        case '8.1.13':
            renderStep8_1_13()
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
            renderStep8_2_12();
            break;
        case '8.2.13':
            renderStep8_2_13();
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
              'The iron bar manufacturing line is a complex production process. This line typically involves several stages, including molding, heating, roughing and rolling, laser cutting and cooling. The process begins with molten metal being poured into molds via a ladle and tundish. The solidification phase is controlled as slabs move to the roller hearth soaking furnace, where two temperature sensors (in the ladle and furnace) monitor thermal treatment for ideal rolling properties. After heating, the slabs pass through a single-pass rougher to reduce their thickness and subsequently fed into the finishing mill for precise shaping. Position sensor indicates when the part is ready to be processed in the laser cutter machine. Once the cutting process is complete, cooling sprays rapidly solidify the metal’s microstructure. Finally, the runout table conveys the finished product for packaging, and keep track the number of products with a counter. '
    })
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/1.3.1.png'
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
        text: 'The Stage 1 operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Temperature sensor at the ladle (TempL) is triggered when temperature is not high enough, heater at the ladle is energized. Ladle de-energizes when temperature reach the desired temperature.\n' +
            '3. Same process for the the sensor and heater at Furnace (TempF and Furnace)\n' +
            '4. When the liquid metal reach ULF, ULF is triggered and energize control valve, filling the liquid metal into the tundish, until the liquid metal goes below LLF, turn off the control valve1.\n' +
            '5. When the optical sensor at the beginning of the ConveyorFront ( Opt1) sense the iron block’s presence, ConveyorFront is energized, until iron block reach the optical in the rougher, which also turn on the timer for rougher operation and ConveyorR after rougher done.\n' +
            '6. The rougher is energized for 10 minutes.\n' +
            '7. A proximity sensor is used at the end of conveyorR (before Strip rolling process) to stop conveyorR when the iron bar presents.\n' +
            '8. When the Off button is pressed, the whole system shut down.\n',
        width: stageInstance.getWidth() / 2,
        lineHeight: 1.1,
        fontSize:17,
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
        text: 'The Stage 2 operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. When the system is on, Rolling and Milling machine starts, ConveyorBack starts and transfer the iron block from ConveyorR to ConveyorBack.\n' +
            '3. Once the iron block present proximity sensor in the rolling machine (prox), it stops ConveyorBack for 10 minutes letting the rolling process to be fully operated. \n' +
            '4. After the iron block done rolling, resume ConveyorBack to send the iron block to milling process.\n' +
            '5. Once the iron block present at proximity sensor in the finishing machine (prox1), it stops ConveyorBack for 10 minutes letting the finishing process to be fully operated. \n' +
            '6. After the finishing process, ConveyorBack resume and send the iron block further.\n' +
            '7. When iron block reaches Prox2 at the laser cutter, ConveyorBack stop, and start the laser cutter for 20 minutes.\n' +
            '8. After 20 minutes of laser cutter operation, energizes cooling spray and runout table to cool down the iron bar and send it to packaging.\n' +
            '9. When the iron block reaches the end of the runout table, triggers Opt1, trigger the counter to keep track the number of the complete products, and stop both the runout table and cooling spray.\n' +
            '10. When the Off button is pressed, the whole system shut down.',
        width: stageInstance.getWidth()/2,
        fontSize: 18,
        lineHeight: 1.1
    })

    renderImage({
        x: text.x() + text.width(),
        y: 0,
        maxWidth: stageInstance.getWidth() / 2,
        maxHeight: stageInstance.getHeight(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/4.1.1.jpg'
    })
}

function renderStep8_1_1() {
    renderImage({
        x: stageInstance.getWidth()*0.1,
        y: 0,
        maxWidth:  stageInstance.getWidth()*0.6,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.1.png'
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
            'Step 2. Ladle heating is energized when TempL is triggered by low temperature.\n' +
            'Step 3. Furnace heating is energized when TempF is triggered by low temperature.\n' +
            'Step 4. When melted metal is above ULF (ULF is on), starts valve until metal is below LLF (LLF is off).\n' +
            'Step 5. When the mold is filled with metal, which triggers Opt1, energizes ConveyorFront.\n' +
            'Step 5. ConveyorFront moves the mold forward until the mold reaches Opt2.\n' +
            'Step 6. When Opt2 is triggered by the presence of the mold, ConveyorFront stops.\n' +
            'Step 7. A timer for the Rougher is also energize when Opt2 is triggered.\n' +
            'Step 8. Rougher operates for 10 minutes.\n' +
            'Step 9. When Rougher is done, energizes ConveyorR until the iron piece reaches Prox.\n' +
            'Step 10. When Off is pressed, the whole system shut down.\n',
        lineHeight: 1.5,
        fontSize: 24
    })

}

function renderProblemandSolution(stepID) {

    const problemSolutionMap = {
        "8.1.4": "Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n",
        "8.1.5": "Rung 1 specifies that when the system light bit is 1, and the thermal couple TempL is triggered (TempL bit is 1) by the low temperature, it energizes the ladle heating.\n",
        "8.1.6":"Rung 2 specifies that when the system light bit is 1, and the thermal couple TempF is triggered (TempF bit is 1) by the low temperature, it energizes the Furnace heating.\n",
        "8.1.7":"Rung 3 specifies that when the system light bit is 1, and melted metal is above ULF (ULF bit is 1), starts Valve until metal is below LLF (LLF bit is 0). Valve bit branching the ULF bit keep the Valve energized when the melted metal run below ULF, which makes the on bit 0.\n",
        "8.1.8":"Rung 4 specifies that when the system light bit is 1, and the mold is filled with metal, which triggers Opt1, energizes ConveyorFront until the mold reaches Opt2. When Opt2 bit is 1, stops ConveyorFront. The branching of ConveyorFront with Opt1 keeps ConveyorF energized when the mold pass by Opt1 and not yet reaches Opt2.\n",
        "8.1.9":"Rung 5 specifies that TimerR (10 min = 600000 msec) is energized when Opt2 bit is 1.\n",
        "8.1.10":"Rung 6 specifies that Rougher is energized when TimerR is timing for 10 minutes.\n",
        "8.1.11":"Rung 7 specifies that specifies that ConveyorR is energized when Rougher is done (TimerR DN bit is 1), until Prox is triggered then stops ConveyorR.\n",
        "8.2.4":"Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light and the rolling/finishing machines get energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n",
        "8.2.5":"Rung 1 specifies that when the system light bit is 1, ConveyorBack is also energized. ConveyorBack stops whenever Rolling, and Milling timing TT bits are 1 (operating), and when Prox2 bit is 1.\n",
        "8.2.6":"Rung 2 specifies that when the system light bit is 1, and the Proximity sensor is triggered (Prox bit is 1) by the presence of the iron piece, it energizes Timer_Rolling (10 min = 600000 msec).",
        "8.2.7":"Rung 3 specifies that when the system light bit is 1, and the Proximity sensor is triggered (Prox1 bit is 1) by the presence of the iron piece, it energizes Timer_Milling (10 min = 600000 msec).\n",
        "8.2.8":"Rung 4 specifies that when the system light bit is 1, and the Proximity sensor is triggered (Prox2 bit is 1) by the presence of the iron piece, it energizes Timer_Laser (20 min = 1200000 msec).\n",
        "8.2.9":"Rung 5 specifies that LaserCut is energized when Timer_Laser is timing for 20 minutes.\n",
        "8.2.10":"Rung 6 specifies that Cooling_Spray and Runout_Table are energized when LaserCut is done, and de-energized when Opt1 is triggered.\n",
        "8.2.11":"Rung 7 specifies that specifies that when Opt1 is triggered, it also energizes counter Packaging to count up.\n",
    };

    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        padding:0,
        text:  problemSolutionMap[stepID]
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 40,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/'+stepID+'.png'
    })
}


function renderStep8_1_12() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.12.png'
    })
}

function renderStep8_1_13() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.1.13.png'
    })
}

function renderStep8_2_1() {
    renderImage({
        x: stageInstance.getWidth()*0.1,
        y: 0,
        maxWidth:  stageInstance.getWidth()*0.6,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.1.png'
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
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light and the rolling and finishing milling machine are energized.\n' +
            'Step 2. ConveyorBack is also energized once system light is on.\n' +
            'Step 3. When iron piece reaches rolling, milling or Prox2, stops ConveyorBack.\n' +
            'Step 4. When Prox is triggered by the presence of the iron piece, start Timer_Rolling.\n' +
            'Step 5. When Prox1 is triggered by the presence of the iron piece, start Timer_Milling.\n' +
            'Step 5. When Prox2 is triggered by the presence of the iron piece, start Timer_Laser..\n' +
            'Step 6. When Timer_Laser starts timing (TT bit is 1), energizes LaserCut.\n' +
            'Step 7. After the LaserCut is done, energizes Cooling Spray and Runout Table.\n' +
            'Step 8. When Opt1 is triggered by the iron bar’s presence, stops Cooling Spray and Runout Table, also energizes a count up counter to keep track the number of the packaged iron bar.\n' +
            'Step 9. When Off is pressed, the whole system shut down.\n',
        lineHeight: 1.2,
        fontSize: 20
    })

}

function renderStep8_2_12() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.12.png'
    })
}

function renderStep8_2_13() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/'+currentCaseStudyID+'/8.2.13.png'
    })
}

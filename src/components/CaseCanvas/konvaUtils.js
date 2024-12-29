import Konva from 'konva';

const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH_CASE;
console.log('apiBase',apiBaseUrl)

let stageInstance = null;
let layerInstance = null;

let stageLogicHeight = 540
let stageLogicWidth = 960
const activeAnimations = []; // 存储所有活动的动画
/**
 * 初始化 Konva.js Stage 和 Layer
 * @param {HTMLCanvasElement} containerElement - Canvas 容器的 DOM 元素
 * @param canvasWidth
 * @param canvasHeight
 */
export function initializeKonvaCanvas(containerElement) {
    // console.log('init Canvas,', containerElement)
    // console.log('init container Element', containerElement.offsetWidth, containerElement.offsetHeight)
    // console.log('init container Element', containerElement.getBoundingClientRect())

    if (!containerElement) {
        console.error("Container element is not provided.");
        return;
    }

    // Init Stage and Layer in Case Study Canvas
    if (!stageInstance) {
        const {width, height} = containerElement.getBoundingClientRect();
        console.error('width and height in init', width, height)

        stageInstance = new Konva.Stage({
            container: containerElement, // 父容器的 DOM 元素
            width, // 使用父容器的宽度
            height, // 使用父容器的高度
        });

        layerInstance = new Konva.Layer();
        stageInstance.add(layerInstance);
    }

    resizeCanvas(containerElement);

    // 添加窗口 resize 监听器，动态调整宽高
    window.addEventListener("resize", () => resizeCanvas(containerElement));
    stageInstance.on('click', (event) => {
        const pointerPosition = stageInstance.getPointerPosition();

        if (pointerPosition) {
            const {x, y} = pointerPosition;
            console.log(`点击位置相对于画布原点的坐标: x=${x}, y=${y}`);
        } else {
            console.error("未能获取点击位置！");
        }
    })
}

export function resizeCanvas(containerElement) {
    //console.log('resize')
    if (!stageInstance) return;

    const {width, height} = containerElement.getBoundingClientRect();

    //console.log('size in resize',width,height)

    stageInstance.width(width);
    stageInstance.height(height);


    // 按宽度和高度计算缩放比例，取较小值
    const scale = Math.min(width / stageLogicWidth, height / stageLogicHeight);

    stageInstance.scale({
        x: scale, // 使用较小的缩放比例
        y: scale, // 保持比例一致
    });
}

/**
 * 清除 Canvas 上的内容
 */
export function clearCanvas() {
    if (layerInstance) {
        layerInstance.destroyChildren(); // 清除所有子元素
        layerInstance.draw(); // 重新渲染
    }
}


/**
 * 根据 currentStepId 填充 Canvas
 * @param {string} currentStepId - 当前步骤的 ID
 */
/**
 * 根据 currentStepId 调用相应的渲染函数
 * @param {string} currentStepId - 当前步骤的 ID
 */
export function renderCanvasContent(currentStepId, containerElement) {
    if (!layerInstance) return;

    clearCanvas(); // 清除当前内容

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
        case '1.4.1':
            renderStep1_4_1();
            break;
        case '2.1.1':
            renderStep2_1_1();
            break;
        case '3.1.1':
            animationStep3_1_1();
            break;
        case '4.1.1':
            renderStep4_1_1();
            break;
        case '5.1.1':
            animationStep5_1_1();
            break;
        case '6.1.1':
            renderStep6_1_1();
            break;
        case '7.1.1':
            animationStep7_1_1();
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
            renderStep8_1_4();
            break;
        case '8.1.5':
            renderStep8_1_5();
            break;
        case '8.1.6':
            renderStep8_1_6();
            break;
        case '8.1.7':
            renderStep8_1_7();
            break;
        case '8.1.8':
            renderStep8_1_8();
            break;
        case '8.1.9':
            renderStep8_1_9();
            break;
        case '8.1.10':
            renderStep8_1_10();
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
            renderStep8_2_4();
            break;
        case '8.2.5':
            renderStep8_2_5();
            break;
        case '8.2.6':
            renderStep8_2_6();
            break;
        case '8.2.7':
            renderStep8_2_7();
            break;
        case '8.2.8':
            renderStep8_2_8();
            break;
        case '8.2.9':
            renderStep8_2_9();
            break;
        case '8.2.10':
            renderStep8_2_10();
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
    resizeCanvas(containerElement);
}

function renderDefault(currentStepID) {
    const text = new Konva.Text({
        x: 50,
        y: 50,
        text: 'Current Step ID ' + currentStepID,
        fontSize: 20,
        fontFamily: 'Arial',
        fill: 'gray',
    });
    layerInstance.add(text);
    stageInstance.add(layerInstance);
    layerInstance.draw();

}

function renderStep1_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        align: 'left',
        text: 'Background Information:\nA chocolate manufacturing system utilizes three PLCs to control and monitor physical parameters affecting the three different processes (i. e. Stages), namely, refining and mixing, molding and cooling, and packing process. Each process is controlled by one PLC and has its own start and stop buttons. \n' +
            '\nIn stage 1, upon pressing the start button, the pump will inject ingredients into the refiner tank. Ingredients are heated in a furnace from 100°C to 110°C for 30 minutes for the 30 liters tank, monitored by a temperature sensor.\n' +
            '\nIn stage 2, the heated mixture is then transferred to a blender, where a motor mixes the contents for 30 minutes. \n' +
            '\nIn stage 3, the resulting liquid chocolate is dispensed into molds using a time-controlled dispenser. The molds are transported through a cooling chamber, where the temperature is maintained at 10°C. Once solidified, the chocolates are moved to a chute-type dispenser, which releases five chocolates into each box, monitored by an optical counter. After five chocolates are dispensed, the system triggers the conveyor belt to move by one unit length and activates a piston to seal the box.'
    })

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/1.1.1.jpg'
    })
}

function renderStep1_1_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/1.1.2.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/1.2.1.jpg'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/1.3.1.jpg'
    }).then((imageObject) => {
        let text2 = renderText({
            x: 0,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_4_1() {
    let text = renderText({
        x: 0,
        y: 20,
        text: 'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height() + 20,
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/1.4.1.jpg'
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
            '2. PumpIn is energized when the system is on, will operate until the ingredient reach ULB.\n' +
            '3. Once ULB is triggered, and the set_point is on (when the condition hasn’t meet the temperature level requirement), refiner starts for 3 minutes.\n' +
            '4. If the set_point is off (when the temperature is satisfied) during the 3 minutes operation, refiner will continue till the 3 minutes timing is done.\n' +
            '5. After refiner done, and the ingredients is above LLB, energizes the valve.\n' +
            '6. The system shut down when Off button is pressed.\n',
        width: stageInstance.getWidth() / 2,
        lineHeight: 1.2
    })

    renderImage({
        x: text.x() + text.width(),
        y: 0,
        maxWidth: stageInstance.getWidth() / 2,
        maxHeight: stageInstance.getHeight(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/2.1.1.png'
    })
}

function renderStep4_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Cooling is energized when the system is on and the tempB setpoint is not satisfied \n(not cold enough => bit = 0).\n' +
            '3. PumpD is energized when the system is on, will operate until the ingredient reach ULD.\n' +
            '4. Once ULD is triggered, starts the nozzle for 15 seconds.\n' +
            '5. If the ingredient decrease to below LLD, stop and reset the timer for the nozzle (which will stop the nozzle as well).\n' +
            '6. After nozzle done, start the conveyor for 5 seconds.\n' +
            '7. The conveyor should stop when object reaches OptSenD.\n' +
            '8. After conveyor run for 5 seconds, resets the timer for nozzle (ready for the next timing cycle).\n' +
            '9. The system shut down when Off button is pressed.',
        width: stageInstance.getWidth() / 2,
        fontSize: 20,
        lineHeight: 1.2
    })

    renderImage({
        x: stageInstance.getWidth() / 2,
        y: 10,
        maxWidth: stageInstance.getWidth() / 2,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/4.1.1.png'
    })
}

function renderStep6_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. ConveyorFront is energized when the system is on, will operate until the ingredient reach ULP.\n' +
            '3. Once ULP (and LLP) is triggered, starts the chutter.\n' +
            '4. A chutter counter (optical sensor) will be activated and keep track the number of chocolate balls passing by the chutter.\n' +
            '5. After the counter counts 5 chocolate balls passed by, energizes the back conveyor (ConveyorP).\n' +
            '6. The conveyor stops when the package reaches OptSenP.\n' +
            '7. As the package reaches OptSenP, resets chutter counter.\n' +
            '8. The system shut down when Off button is pressed.\n',
        width: stageInstance.getWidth() / 2,
        fontSize: 22,
        lineHeight: 1.2
    })

    renderImage({
        x: text.x() + text.width(),
        y: 10,
        maxWidth: stageInstance.getWidth() / 2,
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/6.1.1.png'
    })
}

function renderStep8_1_1() {
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
            'Upper Level Bound (ULB)\n' +
            'Lower Level Bound (LLB)\n' +
            'Upper Level Milk) (ULM)\n' +
            'Set Point',
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
            'Refiner\n' +
            'Mixer\n' +
            'Valve\n' +
            'PumpIn\n',
        width: stageInstance.getWidth() / 2,
        fontSize: 28,
        lineHeight: 1,
        fill: 'red',
        align: 'center'
    })

}

function renderStep8_1_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.2.png'
    })

}

function renderStep8_1_3() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. PumpIn is energized once the system light is on, until the ingredients reach ULB.\n' +
            'Step 3. When turn on the Set_point, it energizes a timer for the refiner to operate for 30 minutes. When the Set_point is turned off, refiner stops.\n' +
            'Step 4. After refiner works for 30 minutes, Valve is energized, until the ingredients drop below LLB.\n' +
            'Step 5. Once the ULM is triggered (enough ingredient is sent to the mixer), it energizes the Mixer for 30 minutes.\n' +
            'Step 6. When Off is pressed, the whole system shut down, except the PumpIn will keep working till the ingredient is filled to ULB.\n',
        lineHeight: 1.5,
        fontSize: 24
    })

}

function renderStep8_1_4() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.4.png'
    })
}

function renderStep8_1_5() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, the PumpIn output gets energized. When the ULB bit is 1, stops the PumpIn. When the system light bit turns 0, the PumpIn keeps operate until ULB bit is 1.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.5.png'
    })
}

function renderStep8_1_6() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULB bit are 1, the Set_point bit is 0, the Refiner output gets energized. When the Set_point is on(bit is 1), refiner continues to operate for 30 minutes (timed with T4_0.TT bit is 1).'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.6.png'
    })
}

function renderStep8_1_7() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, ULB bit, and the Set_point bit are 1, the timer T4_0 is energized to time the refiner operating time after Set_point turns on. Timer T4_0 is set for 30 minutes.'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.7.png'
    })
}

function renderStep8_1_8() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, timer T4_0.DN bit are 1 (Refiner done), and the LLB bit is 1 (ingredient is above the lower level bound), Valve will be energized. \n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.8.png'
    })
}

function renderStep8_1_9() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 5 specifies that when the system light bit is 1, ULM bit are 1 (enough ingredient is sent to the mixer), the Timer T4_1 is energized, which is set for 30 minutes. When T4_1.TT bit is 1, mixer is energized, which will have the mixer work for 30 minutes.'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.9.png'
    })
}

function renderStep8_1_10() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.1.10.png'
    })
}

function renderStep8_2_1() {
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
            'Upper Level Bound (ULD)\n' +
            'Lower Level Bound (LLD)\n' +
            'Set Point\n' +
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
            'Pump\n' +
            'Nozzle\n' +
            'Cooling\n' +
            'Conveyor\n',
        width: stageInstance.getWidth() / 2,
        fontSize: 28,
        lineHeight: 1,
        fill: 'red',
        align: 'center'
    })

}

function renderStep8_2_2() {
    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.2.png'
    })

}

function renderStep8_2_3() {
    let text = renderText({
        x: 0,
        y: 10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. When the set_point is turned off, energizes the cooling system.\n' +
            'Step 3. Pump is energized once the system light is on, until the ingredients reach Upper limit bound (ULD).\n' +
            'Step 4. Nozzle is energized for 15 seconds when Lower limit bound (LLD) bit is 1 or when Upper limit bound (ULD) bit is 1.\n' +
            'Step 5. After the nozzle works for 15 seconds, the Conveyor is energized for 5 seconds to move the parts forward.\n' +
            'Step 6. After the conveyor works for 5 seconds, timers for nozzle and conveyor are reset and ready for the next round operation.\n' +
            'Step 7. When the parts reaches the end of the conveyor and triggers the optical sensor (Opt_sensor), the conveyor stops.\n' +
            'Step 8. When Off is presed, the whole system shut down.',
        lineHeight: 1.2,
        fontSize: 24
    })

}

function renderStep8_2_4() {
    let text = renderText({
        x: 0,
        y: 80,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0. A set-point is used to energize the cooling when the set-point is turned off. \n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 10, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.4.png'
    })
}

function renderStep8_2_5() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, the Pump output gets energized. When the ULD bit is 1, stops the Pump. With this structure, we maintain the ingredient amount at the Upper level.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.5.png'
    })
}

function renderStep8_2_6() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULD bit or LLD bit is 1, the time for the Nozzle (T4_0) gets energized. The timer is reset after T4_1 timer done counting (after the conveyor move the parts forward).\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.6.png'
    })
}

function renderStep8_2_7() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, and timer T4_0 is triggered, the Nozzle starts for 15 seconds (timed by timer T4_0). \n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.7.png'
    })
}

function renderStep8_2_8() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, timer T4_0.DN bit is 1 (Nozzle done), timer T4_1 will be energized to start the conveyor. \n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.8.png'
    })
}

function renderStep8_2_9() {
    let text = renderText({
        x: 0,
        y: 100,
        fontSize: 26,
        lineHeight: 1.2,
        text: 'Rung 5 specifies that when the system light bits 1, conveyor is energized and move the parts forward for 5 seconds during T4_1.TT bit is 1. When the parts reaches the end of the conveyor and trigger the optical sensor (Opt_Sensor), conveyor stops.\n'
    })


    renderImage({
        x: 0,
        y: text.y() + text.height() + 50,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.9.png'
    })
}

function renderStep8_2_10() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.2.10.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.2.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.4.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.5.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.6.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.7.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.8.png'
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
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.9.png'
    })
}

function renderStep8_3_10() {

    renderImage({
        x: 0,
        y: 0,
        maxWidth: stageInstance.getWidth(),
        imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/8.3.10.png'
    })
}

function createLabel({
                         x,
                         y,
                         textContent,
                         fontSize = 18,
                         padding = 20,
                         textColor = 'black',
                         backgroundColor = 'white',
                         cornerRadius = 0
                     }) {

    try {
        // 创建文字
        const text = new Konva.Text({
            x,
            y,
            text: textContent,
            fontSize: fontSize,
            fontFamily: 'Arial',
            fill: textColor || 'black',
            align: 'center',
            padding: 0, // 添加一些内边距
        });

        const background = new Konva.Rect({
            x: x - padding / 2, // 为了让背景更好地包裹文字，背景的 x 坐标需要稍微偏移
            y: y - padding / 2,
            width: text.width() + padding,
            height: text.height() + padding,
            fill: backgroundColor,
            cornerRadius,
        });

        // 将背景和文字添加到图层
        layerInstance.add(background);
        layerInstance.add(text);

        // 方法：改变背景颜色
        const changeBackgroundColor = (newColor) => {
            background.fill(newColor);
            layerInstance.draw(); // 重新绘制图层以更新更改
        };

        const activate = ()=> {
            background.fill('#00FF00')
        }

        const deactivate= () => {
            background.fill('white')
        }


        // 返回 label 对象
        return {
            background,
            text,
            changeBackgroundColor,
            activate,
            deactivate
        };
    } catch (error) {
        console.error('Failed to create label:', error);
        throw error;
    }
}

function createCircle({x, y, radius = 9, fill = 'grey', stroke = 'black', strokeWidth = 1}) {

    try {
        // 创建文字
        const circle = new Konva.Circle({
            x,
            y,
            radius: radius,
            fill: 'grey',
            stroke: 'black',
            strokeWidth: 1,
        });

        // 将背景和文字添加到图层
        layerInstance.add(circle);

        // 方法：改变背景颜色
        const changeBackgroundColor = (newColor) => {
            circle.fill(newColor);
            layerInstance.draw(); // 重新绘制图层以更新更改
        };

        const activate = ()=> {
            circle.fill('orange')
        }

        const deactivate= () => {
            circle.fill('grey')
        }


        // 返回 label 对象
        return {
            circle,
            changeBackgroundColor,
            activate,
            deactivate,
        };
    } catch (error) {
        console.error('Failed to create circle:', error);
        throw error;
    }
}

function moveObject(animationObject, xMove, yMove, duration) {
    return new Promise((resolve, reject) => {
        try {
            const startX = animationObject.x();
            const startY = animationObject.y();
            const targetX = animationObject.x() + xMove
            const targetY = animationObject.y() + yMove
            let startTime = null
            let moveAnimation = new Konva.Animation((frame) => {
                if (!frame) return; // 防止帧为空
                if (!startTime) {
                    // 在第一帧设置 startTime
                    startTime = frame.time;
                }

                const elapsedTime = frame.time - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // 确保 progress 不超过 1
                    let newX = startX + xMove * progress
                    let newY = startY + yMove * progress
                    animationObject.x(newX)
                    animationObject.y(newY)
                    console.log('progress',progress,'new X:',newX,'newY',newY)
                if (progress >= 1) {
                    // 动画结束，确保最终位置为目标值
                    animationObject.x(targetX);
                    animationObject.y(targetY);
                    moveAnimation.stop(); // 停止动画
                    resolve(); // 动画完成，触发 Promise
                }
                //animationObject.getLayer().draw()
            }, animationObject.getLayer());
            moveAnimation.start();
            activeAnimations.push(moveAnimation); // 将动画实例存储到数组中
        } catch (error) {
            console.error('error in creating animation', error)
            reject(error)
        }
    })

}

function scaleObject(animationObject,targetScaleX, targetScaleY, duration) {
    return new Promise((resolve, reject) => {
        try {
            const startScaleX = animationObject.scaleX(); // 初始 X 缩放值
            const startScaleY = animationObject.scaleY(); // 初始 Y 缩放值
            let startTime = null
            let moveAnimation = new Konva.Animation((frame) => {
                if (!frame) return; // 防止帧为空
                if (!startTime) {
                    // 在第一帧设置 startTime
                    startTime = frame.time;
                }

                const elapsedTime = frame.time - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // 进度 (0 到 1)，确保不会超过 1

                // 计算新的缩放值
                let newScaleX = startScaleX + (targetScaleX - startScaleX) * progress;
                let newScaleY = startScaleY + (targetScaleY - startScaleY) * progress;
                animationObject.scale({ x: newScaleX, y: newScaleY });


                if (progress >= 1) {
                    moveAnimation.stop(); // 停止动画
                    resolve(); // 动画完成，触发 Promise
                }

                //animationObject.getLayer().draw()
            }, animationObject.getLayer());
            moveAnimation.start();
            activeAnimations.push(moveAnimation); // 将动画实例存储到数组中
        } catch (error) {
            console.error('error in creating animation', error)
            reject(error)
        }
    })

}

function waitAnimation(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

function stopAllAnimations() {
    activeAnimations.forEach((animation) => {
        animation.stop(); // 停止动画
    });
    activeAnimations.length = 0; // 清空数组
}


async function labelAnimation({label, duration, textContents, backgroundColors}) {
    return new Promise((resolve, reject) => {
        try {
            const totalFrames = textContents.length; // 文本内容的总数量
            const timePerFrame = duration / totalFrames; // 每帧时间

            let startTime = null;

            const animation = new Konva.Animation((frame) => {
                if (!frame) return; // 防止帧为空
                if (!startTime) {
                    startTime = frame.time;
                }

                const elapsedTime = frame.time - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // 确保进度在 0 到 1 之间
                const frameIndex = Math.floor(progress * totalFrames); // 当前帧索引

                // 更新文本和背景颜色
                label.text.text(textContents[frameIndex % textContents.length]);
                label.changeBackgroundColor(
                    backgroundColors[frameIndex % backgroundColors.length]
                );

                label.text.getLayer().draw(); // 重新绘制图层

                if (progress >= 1) {
                    animation.stop(); // 停止动画
                    resolve(); // 动画完成，触发 Promise
                }
            }, label.text.getLayer());

            animation.start();
        } catch (error) {
            console.error("Error in labelAnimation:", error);
            reject(error);
        }
    });
}

async function animationStep3_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, pumpInLabel, refiningLabel, setPointLabel, ULBLabel, LLBLabel,
        mValveLabel, mixerLabel, ULMLabel, pumpDLabel, ULMPoint, LLBPoint, setPoint, ULBPoint, wave1, wave2 = 0
    let time1, time2, clock1, clock2 = 0

    async function initAnimation() {
        console.log('initAnimation')
        await addImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/background.png'
        })

        switchBase = await addImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        bulb = await addImage({
            x: 220,
            y: 300,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        clock1 = await addImage({
                x: 100,
                y: 230,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 155,
            y: 250,
            textContent: '3 minutes',
        })

        clock2 = await addImage({
                x: 680,
                y: 150,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
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
            bulb = await addImage({
                x: 220,
                y: 300,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            // PumpIn is energized when the system is on, will operate until the ingredient reach ULB
            pumpInLabel.changeBackgroundColor('#00ff00')
            wave1 = await addImage({
                x: 120,
                y: 170,
                targetHeight: 50,
                targetWidth: 200,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/wave.png'
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
            wave2 = await addImage({
                x: 550,
                y: 390,
                targetHeight: 50,
                targetWidth: 150,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/wave.png'
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
            upButton.changeBackgroundColor('grey')
            downButton.changeBackgroundColor('grey')
            setPoint.changeBackgroundColor('grey')
            ULBPoint.changeBackgroundColor('grey')
            LLBPoint.changeBackgroundColor('grey')
            ULMPoint.changeBackgroundColor('grey')
            bulb = await addImage({
                x: 220,
                y: 300,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
            });
            stopAllAnimations();
        }
        layerInstance.draw();
    }

    await initAnimation();
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

async function animationStep5_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, nozzleLabel, coolingLabel, conveyorFLabel, ULDLabel, LLDLabel,
        conveyorLabel, tempBLabel, OptLabel, pumpDLabel, ULDPoint, LLDPoint, optSensorPoint, cup, wave = 0

    let time1, time2, clock1, clock2 = 0

    async function initAnimation() {
        await addImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_2/background.jpg'
        })

        switchBase = await addImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/switchBase.png'
        });

        bulb = await addImage({
            x: 219,
            y: 405,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
        });

        clock1 = await addImage({
                x: 300,
                y: 300,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
            }
        )

        time1 = createLabel({
            x: 309,
            y: 347,
            textContent: '15 sec',
        })

        clock2 = await addImage({
                x: 405,
                y: 413,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/clock1.svg'
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

        cup = await addImage({
            x: 433,
            y: 315,
            targetHeight: 40,
            targetWidth: 40,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_2/cup.png'
        })

        layerInstance.draw();
    }

    async function renderAnimation() {
        if (machineOn) {
            // On button is pressed and released; the system light is on
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            bulb = await addImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            // PumpD turns on until the ingredient reaches ULD.
            pumpDLabel.changeBackgroundColor('#00ff00')

            await waitAnimation(1000); // 等待 2000ms

            // TempB set_point is not satisfied, energizes the cooling.
            tempBLabel.changeBackgroundColor('red')

            coolingLabel.changeBackgroundColor('#00ff00')

            wave = await addImage({
                x: 432,
                y: 285,
                targetHeight: 20,
                targetWidth: 80,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_2/wave.png'
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
            bulb = await addImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
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

async function animationStep7_1_1() {

    let machineOn = false; // 机器状态
    let switchBase, upButton, downButton, bulb, conveyorFLabel, ULPLabel, LLPLabel,
        conveyorPLabel, counterLabel, OptPLabel,OptDLabel, chutterLabel, ULPPoint, LLPPoint, optPPoint,optDPoint, cup, wave = 0
    let coffee1,coffee2,coffee3 = 0
    let chocolate, bump = 0
    let accLabel = 0
    async function initAnimation() {
        await addImage({
            x: 0,
            y: 0,
            targetWidth: stageInstance.getWidth(),
            targetHeight: stageInstance.getHeight(),
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/background.jpg'
        })

        switchBase = await addImage({
            x: 100,
            y: 400,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/switchBase.png'
        });

        bulb = await addImage({
            x: 219,
            y: 405,
            targetHeight: 100,
            targetWidth: 100,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/bulbOff.png'
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

        cup = await addImage({
            x: 151,
            y: 234,
            targetHeight: 40,
            targetWidth: 40,
            imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/cup.png'
        })

        accLabel = createLabel(
            {
                x:700,
                y:386,
                fontSize:14,
                textContent:'Acc = 0'
            }
        )

        bump = await addImage({
            x:414,
            y:383,
            targetWidth:50,
            targetHeight:50,
            imageSrc:apiBaseUrl + '/assets/images/caseStudy/1/animation_3/bump.png'
        })
        layerInstance.draw();
    }

    async function renderAnimation() {
        if (machineOn) {
            // On button is pressed and released; the system light is on
            upButton.changeBackgroundColor('green')
            downButton.changeBackgroundColor('red')

            bulb = await addImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOn.png'
            });

            //Conveyor Front turns on until the amount of the chocolate reaches ULP.
            conveyorFLabel.activate()

            //Conveyor Front turns on until the amount of the chocolate reaches ULP.

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层

            coffee1 = await addImage(
                {
                    x:377,
                    y:307,
                    targetHeight:100,
                    targetWidth:100,
                    imageSrc:apiBaseUrl + '/assets/images/caseStudy/1/animation_3/coffee_1.png'
                }
            )

            cup = await addImage({
                x: 151,
                y: 234,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/cup.png'
            })

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层

            coffee2 = await addImage(
                {
                    x:345,
                    y:293,
                    targetHeight:150,
                    targetWidth:180,
                    imageSrc:apiBaseUrl + '/assets/images/caseStudy/1/animation_3/coffee_2.png'
                }
            )

            LLPPoint.activate()

            cup = await addImage({
                x: 151,
                y: 230,
                targetHeight: 40,
                targetWidth: 40,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/cup.png'
            })

            await moveObject(cup,150,0,1000)
            await moveObject(cup,50,30,500)

            cup.destroy(); // 销毁对象，移除其图层


            coffee3 = await addImage(
                {
                    x:345,
                    y:280,
                    targetHeight:150,
                    targetWidth:180,
                    imageSrc:apiBaseUrl + '/assets/images/caseStudy/1/animation_3/coffee_3.png'
                }
            )

            // When the amount of the chocolate reaches ULP, stops conveyor front, and starts the chutter.
            ULPPoint.activate()
            conveyorFLabel.deactivate()
            chutterLabel.activate()

            // When chocolate ball passes through the chutter, activates the counter to add 1

            chocolate = await addImage({
                x: 423,
                y: 411,
                targetHeight: 20,
                targetWidth: 20,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/chocolate_1.png'

            })
            await waitAnimation(500)
            accLabel.activate()
            accLabel.text.text("Acc = 1")

            await waitAnimation(500)

            chocolate.destroy()
            chocolate = await addImage({
                x: 415,
                y: 401,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/chocolate_2.png'
            })

            await waitAnimation(500)
            accLabel.text.text("Acc = 3")

            await waitAnimation(500)
            chocolate.destroy()
            chocolate = await addImage({
                x: 415,
                y: 395,
                targetHeight: 50,
                targetWidth: 50,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_3/chocolate_3.png'
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
            bump = await addImage({
                x:414,
                y:383,
                targetWidth:50,
                targetHeight:50,
                imageSrc:apiBaseUrl + '/assets/images/caseStudy/1/animation_3/bump.png'
            })

            accLabel.changeBackgroundColor('Yellow')
            accLabel.text.text('Acc = 0')

            optPPoint.deactivate()
            OptPLabel.deactivate()

        } else {
            bulb = await addImage({
                x: 219,
                y: 405,
                targetHeight: 100,
                targetWidth: 100,
                imageSrc: apiBaseUrl + '/assets/images/caseStudy/1/animation_1/bulbOff.png'
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

function renderText({
                        x = 0,
                        y = 10,
                        text,
                        fontSize = 20,
                        fontFamily = 'Times New Roman',
                        fill = 'black',
                        width = stageInstance.getWidth(),
                        align = 'left',
                        padding = 0,
                        lineHeight = 1
                    }) {

    const textNode = new Konva.Text({
        x: x,
        y: y,
        text: text,
        fontSize: fontSize,
        fontFamily: fontFamily,
        fill: fill,
        width: width,
        align: align,
        padding: padding,
        lineHeight: lineHeight
    });

    layerInstance.add(textNode);
    layerInstance.draw();
    return textNode
}

async function renderImage({
                               x = 0,
                               y = 0,
                               imageSrc,
                               maxHeight = stageInstance.getHeight(),
                               maxWidth = stageInstance.getWidth(),
                               scaleFactor = 1
                           }) {
    const imageObj = new Image();
    imageObj.src = imageSrc;

    const image = await new Promise((resolve, reject) => {
        imageObj.onload = () => {
            const originalWidth = imageObj.naturalWidth;
            const originalHeight = imageObj.naturalHeight;

            // 计算宽度和高度的缩放比例
            let scaleByWidth = maxWidth / originalWidth;
            let scaleByHeight = maxHeight / originalHeight;

            // 选择较小的比例，确保图片适配目标区域
            let scale = Math.min(scaleByWidth, scaleByHeight);
            scale = scale * scaleFactor;

            const image = new Konva.Image({
                x: x,
                y: y,
                image: imageObj,
                width: originalWidth * scale,
                height: originalHeight * scale,
            });

            layerInstance.add(image);
            layerInstance.draw()
            resolve(image);
        };
        imageObj.onerror = reject;
    });

    return image;
}

async function addImage({x = 0, y = 0, imageSrc, targetHeight, targetWidth, scaleFactor = 1}) {
    const imageObj = new Image();
    imageObj.src = imageSrc;

    const image = await new Promise((resolve, reject) => {
        imageObj.onload = () => {
            const originalWidth = imageObj.naturalWidth;
            const originalHeight = imageObj.naturalHeight;

            // 计算宽度和高度的缩放比例
            let scaleByWidth = targetWidth / originalWidth;
            let scaleByHeight = targetHeight / originalHeight;

            // 选择较小的比例，确保图片适配目标区域
            let scale = Math.min(scaleByWidth, scaleByHeight);
            scale = scale * scaleFactor;

            const image = new Konva.Image({
                x: x,
                y: y,
                image: imageObj,
                width: originalWidth * scale,
                height: originalHeight * scale,
            });

            layerInstance.add(image);
            resolve(image);
        };
        imageObj.onerror = reject;
    });

    return image;
}

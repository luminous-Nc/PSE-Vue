import Konva from 'konva';
import {stage} from "../../../public/assets/canvas/Canvas_Page.js";

let stageInstance = null;
let layerInstance = null;

let stageLogicHeight = 800
let stageLogicWidth = 1200

/**
 * 初始化 Konva.js Stage 和 Layer
 * @param {HTMLCanvasElement} containerElement - Canvas 容器的 DOM 元素
 * @param canvasWidth
 * @param canvasHeight
 */
export function initializeCanvas(containerElement) {
    // console.log('init Canvas,', containerElement)
    // console.log('init container Element',containerElement.offsetWidth,containerElement.offsetHeight)
    // console.log('init container Element',containerElement.getBoundingClientRect())

    if (!containerElement) {
        console.error("Container element is not provided.");
        return;
    }

    // Init Stage and Layer in Case Study Canvas
    if (!stageInstance) {
        const { width, height } = containerElement.getBoundingClientRect();
        console.error('width and height in init', width,height)

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
}

export function resizeCanvas(containerElement) {
    //console.log('resize')
    if (!stageInstance) return;

    const { width, height } = containerElement.getBoundingClientRect();

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
export function renderCanvasContent(currentStepId,containerElement) {
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
        case '6.1.1':
            renderStep6_1_1();
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
        x:0,
        y:10,
        align:'left',
        text: 'A chocolate manufacturing system utilizes three PLCs to control and monitor physical parameters affecting the three different processes (i. e. Stages), namely, refining and mixing, molding and cooling, and packing process. Each process is controlled by one PLC and has its own start and stop buttons. \n' +
            '\nIn stage 1, upon pressing the start button, the pump will inject ingredients into the refiner tank. Ingredients are heated in a furnace from 100°C to 110°C for 30 minutes for the 30 liters tank, monitored by a temperature sensor.\n' +
            '\nIn stage 2, the heated mixture is then transferred to a blender, where a motor mixes the contents for 30 minutes. \n' +
            '\nIn stage 3, the resulting liquid chocolate is dispensed into molds using a time-controlled dispenser. The molds are transported through a cooling chamber, where the temperature is maintained at 10°C. Once solidified, the chocolates are moved to a chute-type dispenser, which releases five chocolates into each box, monitored by an optical counter. After five chocolates are dispensed, the system triggers the conveyor belt to move by one unit length and activates a piston to seal the box.'
    })

    renderImage({
        x:0.1*stageInstance.getWidth(),
        y:text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth:stageInstance.getWidth()*0.8,
        imageSrc:'/assets/images/caseStudy/1/1.1.1.jpg'
    })
}

function renderStep1_1_2() {
    renderImage({
        x:0,
        y:0,
        maxWidth:stageInstance.getWidth(),
        imageSrc:'/assets/images/caseStudy/1/1.1.2.png'
    })
}

function renderStep1_2_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x:0.1 * stageInstance.getWidth(),
        y:text.y() + text.height() + 20,
        maxWidth:stageInstance.getWidth()*0.8,
        imageSrc:'/assets/images/caseStudy/1/1.2.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() + 20,
            text:'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_3_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x:0.1 * stageInstance.getWidth(),
        y:text.y() + text.height() + 20,
        maxWidth:stageInstance.getWidth()*0.8,
        imageSrc:'/assets/images/caseStudy/1/1.3.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() +20,
            text:'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_4_1() {
    let text = renderText({
        x:0,
        y:20,
        text:'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x:0.1 * stageInstance.getWidth(),
        y:text.y() + text.height() + 20,
        maxWidth:stageInstance.getWidth()*0.8,
        imageSrc:'/assets/images/caseStudy/1/1.4.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() + 20,
            text:'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
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
        y: stageInstance.getHeight()/4,
        maxWidth: stageInstance.getWidth() / 2,
        maxHeight: stageInstance.getHeight(),
        imageSrc: '/assets/images/caseStudy/1/2.1.1.png'
    })
}

function renderStep4_1_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Cooling is energized when the system is on and the tempB setpoint is not satisfied \n(not cold enough => bit = 0).\n' +
            '3. PumpD is energized when the system is on, will operate until the ingredient reach ULD.\n' +
            '4. Once ULD is triggered, starts the nozzle for 15 seconds.\n' +
            '5. If the ingredient decrease to below LLD, stop and reset the timer for the nozzle (which will stop the nozzle as well).\n' +
            '6. After nozzle done, start the conveyor for 5 seconds.\n' +
            '7. The conveyor should stop when object reaches OptSenD.\n' +
            '8. After conveyor run for 5 seconds, resets the timer for nozzle (ready for the next timing cycle).\n' +
            '9. The system shut down when Off button is pressed.',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1.2
    })

    renderImage({
        x:stageInstance.getWidth() / 2,
        y:10,
        maxWidth:stageInstance.getWidth() / 2,
        imageSrc:'/assets/images/caseStudy/1/4.1.1.png'
    })
}

function renderStep6_1_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. ConveyorFront is energized when the system is on, will operate until the ingredient reach ULP.\n' +
            '3. Once ULP (and LLP) is triggered, starts the chutter.\n' +
            '4. A chutter counter (optical sensor) will be activated and keep track the number of chocolate balls passing by the chutter.\n' +
            '5. After the counter counts 5 chocolate balls passed by, energizes the back conveyor (ConveyorP).\n' +
            '6. The conveyor stops when the package reaches OptSenP.\n' +
            '7. As the package reaches OptSenP, resets chutter counter.\n' +
            '8. The system shut down when Off button is pressed.\n',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1.2
    })

    renderImage({
        x:text.x() + text.width(),
        y:10,
        maxWidth:stageInstance.getWidth()/2,
        imageSrc:'/assets/images/caseStudy/1/6.1.1.png'
    })
}

function renderStep8_1_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
        'Upper Level Bound (ULB)\n' +
        'Lower Level Bound (LLB)\n' +
        'Upper Level Milk) (ULM)\n' +
        'Set Point',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

    let text3 = renderText({
        x:text.x() + text.width() + 10,
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text.x() + text.width() + 10,
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Refiner\n' +
            'Mixer\n' +
            'Valve\n' +
            'PumpIn\n',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

}

function renderStep8_1_2() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:text.x() + text.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text3 = renderText({
        x:text2.x() + text2.width(),
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text3.x() + text3.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text11 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULB)\n' +
            'Lower Level Bound (LLB)\n' +
            'Upper Level Milk) (ULM)\n' +
            'Set Point',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text22 = renderText({
        x:text.x() + text.width(),
        y:text.height() + text.y() + 30,
        text:'Local:8:I:Data.0\n'+
            'Local:8:I:Data.1\n' +
            'Local:8:I:Data.2\n' +
            'Local:8:I:Data.3\n' +
            'Local:8:I:Data.4\n' +
            'Local:8:I:Data.5',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text33 = renderText({
        x:text2.x() + text2.width(),
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Refiner\n' +
            'Mixer\n' +
            'Valve\n' +
            'PumpIn\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text44 = renderText({
        x:text3.x() + text3.width(),
        y:text.height() + text.y() + 30,
        text:'Local:9:O:Data.0\n'+
            'Local:9:O:Data.1\n' +
            'Local:9:O:Data.2\n' +
            'Local:9:O:Data.3\n' +
            'Local:9:O:Data.4\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

}

function renderStep8_1_3() {
    let text = renderText({
        x:0,
        y:10,
       text: 'The sequence of events is as follows:\n\n' +
           'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
           'Step 2. PumpIn is energized once the system light is on, until the ingredients reach ULB.\n' +
           'Step 3. When turn on the Set_point, it energizes a timer for the refiner to operate for 30 minutes. When the Set_point is turned off, refiner stops.\n' +
           'Step 4. After refiner works for 30 minutes, Valve is energized, until the ingredients drop below LLB.\n' +
           'Step 5. Once the ULM is triggered (enough ingredient is sent to the mixer), it energizes the Mixer for 30 minutes.\n' +
           'Step 6. When Off is pressed, the whole system shut down, except the PumpIn will keep working till the ingredient is filled to ULB.\n',
        lineHeight: 1.5,
        fontSize: 24})

}

function renderStep8_1_4() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.4.png'
    })
}

function renderStep8_1_5() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, the PumpIn output gets energized. When the ULB bit is 1, stops the PumpIn. When the system light bit turns 0, the PumpIn keeps operate until ULB bit is 1.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.5.png'
    })
}

function renderStep8_1_6() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULB bit are 1, the Set_point bit is 0, the Refiner output gets energized. When the Set_point is on(bit is 1), refiner continues to operate for 30 minutes (timed with T4_0.TT bit is 1).'})


        renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.6.png'
    })
}

function renderStep8_1_7() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, ULB bit, and the Set_point bit are 1, the timer T4_0 is energized to time the refiner operating time after Set_point turns on. Timer T4_0 is set for 30 minutes.'})


        renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.7.png'
    })
}

function renderStep8_1_8() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, timer T4_0.DN bit are 1 (Refiner done), and the LLB bit is 1 (ingredient is above the lower level bound), Valve will be energized. \n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.8.png'
    })
}

function renderStep8_1_9() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 5 specifies that when the system light bit is 1, ULM bit are 1 (enough ingredient is sent to the mixer), the Timer T4_1 is energized, which is set for 30 minutes. When T4_1.TT bit is 1, mixer is energized, which will have the mixer work for 30 minutes.'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.9.png'
    })
}

function renderStep8_1_10() {

    renderImage({
        x:100,
        y:10,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.1.10.png'
    })
}

function renderStep8_2_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULD)\n' +
            'Lower Level Bound (LLD)\n' +
            'Set Point\n' +
            'Opt Sensor',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

    let text3 = renderText({
        x:text.x() + text.width() + 10,
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text.x() + text.width() + 10,
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Pump\n' +
            'Nozzle\n' +
            'Cooling\n' +
            'Conveyor\n',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

}

function renderStep8_2_2() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:text.x() + text.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text3 = renderText({
        x:text2.x() + text2.width(),
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text3.x() + text3.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text11 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULD)\n' +
            'Lower Level Bound (LLD)\n' +
            'Set Point\n' +
            'Opt Sensor',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text22 = renderText({
        x:text.x() + text.width(),
        y:text.height() + text.y() + 30,
        text:'Local:8:I:Data.0\n'+
            'Local:8:I:Data.1\n' +
            'Local:8:I:Data.2\n' +
            'Local:8:I:Data.3\n' +
            'Local:8:I:Data.4\n' +
            'Local:8:I:Data.5',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text33 = renderText({
        x:text2.x() + text2.width(),
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Pump\n' +
            'Nozzle\n' +
            'Cooling\n' +
            'Conveyor\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text44 = renderText({
        x:text3.x() + text3.width(),
        y:text.height() + text.y() + 30,
        text:'Local:9:O:Data.0\n'+
            'Local:9:O:Data.1\n' +
            'Local:9:O:Data.2\n' +
            'Local:9:O:Data.3\n' +
            'Local:9:O:Data.4\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

}

function renderStep8_2_3() {
    let text = renderText({
        x:0,
        y:10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n\n' +
            'Step 2. When the set_point is turned off, energizes the cooling system.\n' +
            'Step 3. Pump is energized once the system light is on, until the ingredients reach Upper limit bound (ULD).\n' +
            'Step 4. Nozzle is energized for 15 seconds when Lower limit bound (LLD) bit is 1 or when Upper limit bound (ULD) bit is 1.\n\n' +
            'Step 5. After the nozzle works for 15 seconds, the Conveyor is energized for 5 seconds to move the parts forward.\n' +
            'Step 6. After the conveyor works for 5 seconds, timers for nozzle and conveyor are reset and ready for the next round operation.\n'+
            'Step 7. When the parts reaches the end of the conveyor and triggers the optical sensor (Opt_sensor), the conveyor stops.\n' +
            'Step 8. When Off is presed, the whole system shut down.',
        lineHeight: 1.2,
        fontSize: 24})

}

function renderStep8_2_4() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to 1, then the system light gets energized. System light bit branching the on bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the on bit 0. A set-point is used to energize the cooling when the set-point is turned off. \n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.4.png'
    })
}

function renderStep8_2_5() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, the Pump output gets energized. When the ULD bit is 1, stops the Pump. With this structure, we maintain the ingredient amount at the Upper level.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.5.png'
    })
}

function renderStep8_2_6() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULD bit or LLD bit is 1, the time for the Nozzle (T4_0) gets energized. The timer is reset after T4_1 timer done counting (after the conveyor move the parts forward).\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.6.png'
    })
}

function renderStep8_2_7() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, and timer T4_0 is triggered, the Nozzle starts for 15 seconds (timed by timer T4_0). \n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.7.png'
    })
}

function renderStep8_2_8() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, timer T4_0.DN bit is 1 (Nozzle done), timer T4_1 will be energized to start the conveyor. \n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.8.png'
    })
}

function renderStep8_2_9() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 5 specifies that when the system light bits 1, conveyor is energized and move the parts forward for 5 seconds during T4_1.TT bit is 1. When the parts reaches the end of the conveyor and trigger the optical sensor (Opt_Sensor), conveyor stops.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.9.png'
    })
}

function renderStep8_2_10() {

    renderImage({
        x:100,
        y:10,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.2.10.png'
    })
}

function renderStep8_3_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULP)\n' +
            'Lower Level Bound (LLP)\n' +
            'Chutter Counter\n' +
            'Opt Sensor',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

    let text3 = renderText({
        x:text.x() + text.width() + 10,
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 2,
        fontSize:36,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text.x() + text.width() + 10,
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Conveyor Front\n' +
            'Chutter\n' +
            'Conveyor Back\n',
        width:stageInstance.getWidth() / 2,
        fontSize:28,
        lineHeight:1,
        fill:'red',
        align:'center'
    })

}

function renderStep8_3_2() {
    let text = renderText({
        x:0,
        y:10,
        text:'Inputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text2 = renderText({
        x:text.x() + text.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text3 = renderText({
        x:text2.x() + text2.width(),
        y:10,
        text:'Outputs',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text4 = renderText({
        x:text3.x() + text3.width(),
        y:10,
        text:'Terminal Address',
        width:stageInstance.getWidth() / 4,
        fontSize:30,
        lineHeight:1,
        fill:'blue',
        align:'center'
    })

    let text11 = renderText({
        x:0,
        y:text.height() + text.y() + 30,
        text:'On Button (ONB)\n'+
            'Off Button (OFFB)\n' +
            'Upper Level Bound (ULP)\n' +
            'Lower Level Bound (LLP)\n' +
            'Chutter Counter\n' +
            'Opt Sensor',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text22 = renderText({
        x:text.x() + text.width(),
        y:text.height() + text.y() + 30,
        text:'Local:8:I:Data.0\n'+
            'Local:8:I:Data.1\n' +
            'Local:8:I:Data.2\n' +
            'Local:8:I:Data.3\n' +
            'Local:8:I:Data.4\n' +
            'Local:8:I:Data.5',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text33 = renderText({
        x:text2.x() + text2.width(),
        y:text.height() + text.y() + 30,
        text:'System Light\n'+
            'Conveyor Front\n' +
            'Chutter\n' +
            'Conveyor Back\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

    let text44 = renderText({
        x:text3.x() + text3.width(),
        y:text.height() + text.y() + 30,
        text:'Local:9:O:Data.0\n'+
            'Local:9:O:Data.1\n' +
            'Local:9:O:Data.2\n' +
            'Local:9:O:Data.3\n',
        width:stageInstance.getWidth() / 4,
        fontSize:22,
        lineHeight:2,
        fill:'red',
        align:'center'
    })

}

function renderStep8_3_3() {
    let text = renderText({
        x:0,
        y:10,
        text: 'The sequence of events is as follows:\n\n' +
            'Step 1. If On is (pressed) true and Off is false (not pressed), the system light is energized.\n' +
            'Step 2. The Conveyor Front is energized once the system is on, until the ULP sensor is triggered, stops the Conveyor Front.\n' +
            'Step 3. When both ULP and LLP sensors’ bits are 1, energizes the chutter until the counter C5_0 counts 5 objects presented at the chutter.\n' +
            'Step 4. The counter C5_0 increase by 1 every time when the ChutterCounter is triggered (object presents at the chutter).\n' +
            'Step 5. After the Counter C5_0 reaches 5, the Conveyor Back is energized until the object pile reaches the optical sensor at the end of the production line.\n' +
            'Step 6. Once the optical sensor is triggered, reset Counter C5_0.\n' +
            'Step 7. When Off is pressed, the whole system shut down.\n',
        lineHeight: 1.3,
        fontSize: 26})

}

function renderStep8_3_4() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Since the on and off buttons are inputs to the system light, we can write the following rung to specify conditions for the system light to be On. Rung 0 specifies that when the start bit is set to true, then the system light gets energized. System light bit branching the start bit keep the system light energized as spring return start button gets released, after it is pressed, which makes the start bit false.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.4.png'
    })
}

function renderStep8_3_5() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 1 specifies that when the system light bit is 1, starts the ConveyorFront. When the upper level bound (ULP) is reached (ULP bit is 1), stops the ConveyorFront.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100, // 放置在文本下方，间隔 10px
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.5.png'
    })
}

function renderStep8_3_6() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 2 specifies that when the system light bit is 1, ULP bit, and LLP bit are true, the chutter gets energized. When the counter C5_0 done counting (C5_0.DN bit is 1), stops the chutter.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.6.png'
    })
}

function renderStep8_3_7() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 3 specifies that when the system light bit is 1, the ChutterCounter activates the counter C5_0 to add 1 when it gets triggered by the object that reaches the chutter.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.7.png'
    })
}

function renderStep8_3_8() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: 'Rung 4 specifies that when the system light bit is 1, the counter C5_0 done counting (C5_0.DN bit is 1), starts the ConveyorBack to move the object piles forward. When the object piles reach the optical sensor, stops the ConveyorBack.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.8.png'
    })
}

function renderStep8_3_9() {
    let text = renderText({
        x:0,
        y:100,
        fontSize:26,
        lineHeight:1.2,
        text: '\n' +
            'Rung 5 specifies that when the system light bit is 1, the counter C5_0 resets when the object piles reach the optical sensor.\n'})


    renderImage({
        x:0,
        y:text.y() + text.height()+ 100,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.9.png'
    })
}

function renderStep8_3_10() {

    renderImage({
        x:100,
        y:10,
        maxWidth:1000,
        imageSrc:'/assets/images/caseStudy/1/8.3.10.png'
    })
}

async function animationStep3_1_1() {

    await addImage({
        x: 0,
        y: 0,
        targetWidth: stageInstance.getWidth(),
        targetHeight: stageInstance.getHeight(),
        imageSrc: '/assets/images/caseStudy/1/animation_1/background.png'
    })

    const switchBase = await addImage({
        x: 100,
        y: 600,
        targetHeight: 200,
        targetWidth: 200,
        imageSrc: '/assets/images/caseStudy/1/animation_1/switchBase.png'
    });

    const greenButton = await addImage({
        x: 115,
        y: 612,
        targetHeight: 50,
        targetWidth: 50,
        imageSrc: '/assets/images/caseStudy/1/animation_1/greenButton.png'
    });

    const offBulb = await addImage({
        x: 220,
        y: 400,
        targetHeight: 150,
        targetWidth: 150,
        imageSrc: '/assets/images/caseStudy/1/animation_1/bulbOff.png'
    });

    layerInstance.draw();

    // const powerSwitchImage = await renderImage({
    //     x: 100,
    //     y: 200,
    //     maxWidth: 100,
    //     maxHeight: 100,
    //     imageSrc: '/assets/images/caseStudy/1/switch_off.png',
    // });
    //
    // // 添加点击事件到开关图片
    // let isBulbOn = false; // 灯泡状态
    // switchImage.on('click', async () => {
    //     // 切换灯泡和开关的图片
    //     isBulbOn = !isBulbOn;
    //
    //     // 更新灯泡图片
    //     bulbImageOff.image(new Image());
    //     bulbImageOff.image().src = isBulbOn
    //         ? '/assets/images/caseStudy/1/bulb_on.png'
    //         : '/assets/images/caseStudy/1/bulb_off.png';
    //
    //     // 更新开关图片
    //     switchImage.image(new Image());
    //     switchImage.image().src = isBulbOn
    //         ? '/assets/images/caseStudy/1/switch_on.png'
    //         : '/assets/images/caseStudy/1/switch_off.png';
    //
    //     // Redraw the layer to reflect changes
    //     layerInstance.draw();
    // });

}

function renderText({
                        x = 0,
                        y = 10,
                        text,
                        fontSize = 28,
                        fontFamily = 'Times New Roman',
                        fill = 'black',
                        width = stageInstance.getWidth(),
                        align = 'left',
                        padding= 0,
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
        padding:padding,
        lineHeight:lineHeight
    });

    layerInstance.add(textNode);
    layerInstance.draw();
    return textNode
}

async function renderImage({x = 0, y = 0, imageSrc, maxHeight = stageInstance.getHeight(), maxWidth = stageInstance.getWidth(), scaleFactor = 1}) {
    const imageObj = new Image();
    imageObj.src = imageSrc;

    const image = await new Promise((resolve,reject) => {
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

    const image = await new Promise((resolve,reject) => {
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

import Konva from 'konva';
import {stage} from "../../../public/assets/canvas/Canvas_Page.js";

let stageInstance = null;
let layerInstance = null;

/**
 * 初始化 Konva.js Stage 和 Layer
 * @param {HTMLCanvasElement} containerElement - Canvas 容器的 DOM 元素
 * @param canvasWidth
 * @param canvasHeight
 */
export function initializeCanvas(containerElement, canvasWidth = 1000, canvasHeight = 500) {
    console.log('init Canvas,', containerElement)
    if (!stageInstance) {
        stageInstance = new Konva.Stage({
            container: containerElement, // 容器的 DOM ID
            width: canvasWidth, // 设置宽度
            height: canvasHeight, // 设置高度
        });

        layerInstance = new Konva.Layer();
        stageInstance.add(layerInstance);
    }
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
export function renderCanvasContent(currentStepId) {
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
        case '4.1.1':
            renderStep4_1_1();
            break;
        case '6.1.1':
            renderStep6_1_1();
            break;
        case '8.1.1':
            renderStep8_1_1();
            break;
        default:
            renderDefault(currentStepId);
    }
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
        text: 'Background information: A chocolate manufacturing system utilizes three PLCs to control and monitor physical parameters affecting the three different processes (i. e. Stages), namely, refining and mixing, molding and cooling, and packing process. Each process is controlled by one PLC and has its own start and stop buttons. In stage I, upon pressing the start button, the pump will inject ingredients into the refiner tank. Ingredients are heated in a furnace from 100°C to 110°C for 30 minutes for the 30 liters tank, monitored by a temperature sensor. In stage 2, the heated mixture is then transferred to a blender, where a motor mixes the contents for 30 minutes. In stage 3, the resulting liquid chocolate is dispensed into molds using a time-controlled dispenser. The molds are transported through a cooling chamber, where the temperature is maintained at 10°C. Once solidified, the chocolates are moved to a chute-type dispenser, which releases five chocolates into each box, monitored by an optical counter. After five chocolates are dispensed, the system triggers the conveyor belt to move by one unit length and activates a piston to seal the box.'
    })

    renderImage({
        x:100,
        y:text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth:800,
        imageSrc:'/assets/images/caseStudy/1/1.1.1.jpg'
    })
}

function renderStep1_1_2() {
    renderImage({
        x:0,
        y:0,
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
        x:100,
        y:text.y() + text.height() + 10,
        maxWidth:800,
        imageSrc:'/assets/images/caseStudy/1/1.2.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() + 10,
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
        x:100,
        y:text.y() + text.height() + 10,
        maxWidth:800,
        imageSrc:'/assets/images/caseStudy/1/1.3.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() + 10,
            text:'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_4_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The power rating requirements and I/O port assignments for each I/O device are as follows.'
    })

    renderImage({
        x:100,
        y:text.y() + text.height() + 10,
        maxWidth:800,
        imageSrc:'/assets/images/caseStudy/1/1.4.1.jpg'
    }).then((imageObject)=> {
        let text2 = renderText({
            x:0,
            y:imageObject.y() + imageObject.height() + 10,
            text:'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep2_1_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. PumpIn is energized when the system is on, will operate until the ingredient reach ULB.\n' +
            '3. Once ULB is triggered, and the set_point is on (when the condition hasn’t meet the temperature level requirement), refiner starts for 3 minutes.\n' +
            '4. If the set_point is off (when the temperature is satisfied) during the 3 minutes operation, refiner will continue till the 3 minutes timing is done.\n' +
            '5. After refiner done, and the ingredients is above LLB, energizes the valve.\n' +
            '6. The system shut down when Off button is pressed.\n',
        width:stageInstance.getWidth() / 2,
        lineHeight:1.2
    })

    renderImage({
        x:text.x() + text.width()+ 10,
        y:100,
        maxWidth:500,
        imageSrc:'/assets/images/caseStudy/1/2.1.1.png'
    })
    // const circle = new Konva.Circle({
    //     x: 200,
    //     y: 150,
    //     radius: 50,
    //     fill: 'green',
    //     stroke: 'black',
    //     strokeWidth: 2,
    // });
    // layerInstance.add(circle);
    // layerInstance.draw();
}

function renderStep4_1_1() {
    let text = renderText({
        x:0,
        y:10,
        text:'The operation procedures are as follows:\n\n' +
            '1. On button is pressed and released; the system light is on. \n' +
            '2. Cooling is energized when the system is on and the tempB setpoint is not satisfied (not cold enough => bit = 0).\n' +
            '3. PumpD is energized when the system is on, will operate until the ingredient reach ULD.\n' +
            '4. Once ULD is triggered, starts the nozzle for 15 seconds.\n' +
            '5. If the ingredient decrease to below LLD, stop and reset the timer for the nozzle (which will stop the nozzle as well).\n' +
            '6. After nozzle done, start the conveyor for 5 seconds.\n' +
            '7. The conveyor should stop when object reaches OptSenD.\n' +
            '8. After conveyor run for 5 seconds, resets the timer for nozzle (ready for the next timing cycle).\n' +
            '9. The system shut down when Off button is pressed.',
        width:stageInstance.getWidth() / 2,
        fontSize:21,
        lineHeight:1.2
    })

    renderImage({
        x:text.x() + text.width()+ 50,
        y:10,
        maxWidth:500,
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
        fontSize:21,
        lineHeight:1.2
    })

    renderImage({
        x:text.x() + text.width()+ 50,
        y:10,
        maxWidth:500,
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

function renderText({
                        x = 0,
                        y = 10,
                        text,
                        fontSize = 24,
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

async function renderImage({x = 0, y = 0, imageSrc, maxWidth = stageInstance.getWidth(), scaleFactor = 0.9}) {
    const imageObj = new Image();
    imageObj.src = imageSrc;

    const image = await new Promise((resolve,reject) => {
        imageObj.onload = () => {
            const originalWidth = imageObj.naturalWidth;
            const originalHeight = imageObj.naturalHeight;

            let scale = originalWidth > maxWidth ? maxWidth / originalWidth : 1;
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

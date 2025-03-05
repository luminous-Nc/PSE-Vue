import {apiBaseUrlPLC, renderDefault, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {renderImage, renderText} from "@/components/CaseCanvas/konvaUtils.js";

export function renderCasePLCInputStep(currentStepId) {
    // 根据 ID 调用对应的渲染函数
    switch (currentStepId) {
        case '1.1.1':
            renderStep1_1_1();
            break;
        case '1.1.2':
            renderStep1_1_2();
            break;
        case '1.1.3':
            renderStep1_2_1();
            break;
        case '1.1.5':
            renderStep1_1_5();
            break;
        case '1.2.2':
            renderStep1_2_2();
            break;
        default:
            renderDefault(currentStepId);
    }
}

function renderStep1_1_1() {
    let text = renderText({
        x: 0,
        y: 10,
        fontSize:20,
        padding:0,
        align: 'left',
        text: 'In a widget assembly line, a PLC is used in the packaging process, ensuring that each box is packed with 5 widgets. A switch controls the enable/disable function for the process, and a proximity sensor counts the widgets. \n' +
            '\nAssume that only one stack is on the conveyor at a time.'})

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.7,
        imageSrc: apiBaseUrlPLC + '/assets/images/PLCInterfacing/input/demo.png'
    })
}

function renderStep1_1_2() {
    let text = renderText({
        x: 0,
        y: 10,
        fontSize:20,
        padding:0,
        align: 'left',
        text: 'The power rating requirements and I/O port assignments for each I/O device are as follows. '})

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height(), // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.6,
        imageSrc: apiBaseUrlPLC + '/assets/images/PLCInterfacing/input/table.png'
    }).then((imageObject) => {
        let text2 = renderText({
            x: 0,
            padding:0,
            fontSize:20,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'The Input module—1756 IB16 is available for this application.  A relay and two power supplies are also available.'
        })
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
        imageSrc: apiBaseUrlPLC + '/assets/images/caseStudy/1/1.2.1.jpg'
    }).then((imageObject) => {
        let text2 = renderText({
            x: 0,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'Two I/O modules—1756 IB16 and 1756 OB8—are available for this application.  Three relays and two power supplies are also available.'
        })
    })
}

function renderStep1_1_5() {
    let text = renderText({
        x: 0,
        y: 10,
        padding:0,
        fontSize:20,
        text: '·Need a power supply of a 10 to 30 VDC power supply for the input devices such as switch, push button, or sensors' +
            '\n\n·Input device, power supply (PS) and module forms a close-loop circuitry' +
            '\n\n·IN-X should be connected to the positive side of the circuitry and GND-0 should be connected to the negative side of the circuitry' +
            '\n\n·Input devices should be placed in the circuitry loop, it can be on the positive side or negative side of the loop'
    })
}

function renderStep1_2_2() {
    let text = renderText({
        x: 0,
        y: 20,
        padding:0,
        fontSize:20,
        text: 'Now we introduce the sensor. Since the sensor operates at 5V and cannot use the 24V circuit, a relay is needed to allow the 5V sensor to control the 24V input.'
    })
}

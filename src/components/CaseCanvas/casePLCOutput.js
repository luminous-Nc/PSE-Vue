import {apiBaseUrl, renderDefault, stageInstance} from "@/components/CaseCanvas/konvaCore.js";
import {renderImage, renderText} from "@/components/CaseCanvas/konvaUtils.js";


export function renderCasePLCOutputStep(currentStepId) {
    // 根据 ID 调用对应的渲染函数
    switch (currentStepId) {
        case '1.1.1':
            renderStep1_1_1();
            break;
        case '1.1.2':
            renderStep1_1_2();
            break;
        case '1.1.3':
            renderStep1_1_3();
            break;
        case '1.2.1':
            renderStep1_2_1();
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
        text: 'In a widget assembly line, a PLC is used in the packaging process, ensuring that each box is packed with 5 widgets. A 24V motor drives the conveyor. \n' +
            '\nAssume that only one stack is on the conveyor at a time.'})

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text.y() + text.height()+10, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.8,
        imageSrc: apiBaseUrl + '/assets/images/PLCInterfacing/output/demo.png'
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
        imageSrc: apiBaseUrl + '/assets/images/PLCInterfacing/output/table.png'
    }).then((imageObject) => {
        renderText({
            x: 0,
            padding:0,
            fontSize:20,
            y: imageObject.y() + imageObject.height() + 20,
            text: 'The Output module—1756 OB8 is available for this application.  A relay and two power supplies are also available.'
        })
    })
}

function renderStep1_1_3() {

    renderText({
        x: 0,
        y: 10,
        padding:0,
        fontSize:20,
        text: '·Need a power supply of a 10 to 30 VDC power supply for the output devices such as motor, relay, solenoid and light' +
            '\n\n·Output device, power supply (PS) and module forms a close-loop circuitry' +
            '\n\n·DC(+) should be connected to the positive side of the circuitry and OUT-X should be connected to the negative side of the circuitry' +
            '\n\n·Output devices should be placed in the circuitry loop, it can be on the positive side or negative side of the loop'
    })
}


function renderStep1_2_1() {
    let text1 = renderText({
        x: 0,
        y: 10,
        fontSize:20,
        padding:0,
        align: 'left',
        text: 'In a widget assembly line, a PLC is used in the packaging process, ensuring that each box is packed with 5 widgets. A 120V motor drives the conveyor. \n' +
            '\nAssume that only one stack is on the conveyor at a time.'})

    renderImage({
        x: 0.1 * stageInstance.getWidth(),
        y: text1.y() + text1.height() + 10, // 放置在文本下方，间隔 10px
        maxWidth: stageInstance.getWidth() * 0.6,
        imageSrc: apiBaseUrl + '/assets/images/PLCInterfacing/output/demo2.png'
    }).then((imageObject) => {
        renderText({
            x: 0,
            y: imageObject.y() +imageObject.height() + 20,
            padding:0,
            fontSize:20,
            text: 'Since the motor\'s operating voltage has changed from 24V to 120V, it cannot be directly connected to the 24V circuit. Therefore, a relay is needed to allow the 24V output to control the motor.'
        })
    })


}

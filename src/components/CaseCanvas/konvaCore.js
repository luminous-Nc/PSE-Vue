import Konva from 'konva';
import {useCaseStore} from "@/stores/caseStudy.js";
import {renderCase1Step} from "@/components/CaseCanvas/caseStudy1.js";
import {renderCase2Step} from "@/components/CaseCanvas/caseStudy2.js";
import {renderCase3Step} from "@/components/CaseCanvas/caseStudy3.js";
import {useMemoryStore} from "@/stores/memory.js";
import {usePLCInterfacingStore} from "@/stores/plcInterfacing.js";
import {renderCasePLCInputStep} from "@/components/CaseCanvas/casePLCInput.js";
export {apiBaseUrl,stageInstance, layerInstance,activeAnimations,developmentMode}
const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH_CASE;
console.log('apiBase',apiBaseUrl)

let stageInstance = null;
let layerInstance = null;

let convaContainerElement = null

let developmentMode = import.meta.env.VITE_APP_ENV==="development"


const activeAnimations = []; // 存储所有活动的动画

let stageLogicHeight = 540
let stageLogicWidth = 960


export function initializeKonvaCanvas(containerElement) {
    // console.log('init Canvas,', containerElement)
    // console.log('init container Element', containerElement.offsetWidth, containerElement.offsetHeight)
    // console.log('init container Element', containerElement.getBoundingClientRect())

    if (!containerElement) {
        console.error("Container element is not provided.");
        return;
    };

    convaContainerElement = containerElement

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

    resizeCanvas();

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

export function resizeCanvas() {

    if (!stageInstance) return;

    const {width, height} = convaContainerElement.getBoundingClientRect();

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

export function clearCanvas() {
    if (layerInstance) {
        layerInstance.destroyChildren(); // 清除所有子元素
        layerInstance.draw(); // 重新渲染
    }
}

export function renderCanvasContent(currentStepId) {
    if (!layerInstance) return;

    clearCanvas(); // 清除当前内容

    const memoryStore = useMemoryStore()
    if (memoryStore.task === "plc interfacing")  {
        let plcCaseStore = usePLCInterfacingStore()
        switch(plcCaseStore.current_case_study.case_name) {
            case "PLC Input":
                renderCasePLCInputStep(currentStepId)
                break
            case "PLC Output":
                break
        }
    }

    if (memoryStore.task === "case study") {
        let caseStore = useCaseStore()
        switch(caseStore.current_case_study.case_id) {
            case "1":
                renderCase1Step(currentStepId)
                break
            case "2":
                renderCase2Step(currentStepId)
                break
            case "3":
                renderCase3Step(currentStepId)
                break
            default:
                renderDefault(caseStore.current_case_study.case_id, currentStepId)
                break
        }
    }

    resizeCanvas();
}

export function renderDefault(caseID, currentStepID) {
    const text = new Konva.Text({
        x: 50,
        y: 50,
        text: 'Current Case Study ID ' + caseID + '\nCurrentStepID' + currentStepID,
        fontSize: 20,
        fontFamily: 'Arial',
        fill: 'gray',
    });
    layerInstance.add(text);
    stageInstance.add(layerInstance);
    layerInstance.draw();
}

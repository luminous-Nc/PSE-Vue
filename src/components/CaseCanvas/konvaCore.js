import Konva from 'konva';
import {resizeCanvas} from "@/components/CaseCanvas/konvaUtils.js";
export {apiBaseUrl,stageInstance, layerInstance}
const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH_CASE;
console.log('apiBase',apiBaseUrl)

let stageInstance = null;
let layerInstance = null;

let stageLogicHeight = 540
let stageLogicWidth = 960
const activeAnimations = []; // 存储所有活动的动画

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

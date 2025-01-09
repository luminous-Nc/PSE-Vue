import Konva from 'konva';
import {layerInstance, stageInstance,developmentMode} from "@/components/CaseCanvas/konvaCore.js";


export function renderText({
                        x = 0,
                        y = 10,
                        text,
                        fontSize = 20,
                        fontFamily = 'Times New Roman',
                        fill = 'black',
                        width = stageInstance.getWidth(),
                        align = 'left',
                        padding = 20,
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

export async function renderImage({
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
                draggable:developmentMode
            });

            if (developmentMode){
                image.on('dragend', function () {
                    // 获取当前的 x 和 y 坐标
                    let x = image.x();
                    let y = image.y();

                    // 在控制台打印坐标
                    console.log('Current Position:', { x: x, y: y });
                });

            }

            layerInstance.add(image);
            layerInstance.draw()
            resolve(image);
        };
        imageObj.onerror = (error) => {
            console.error("Image loading error:", error);
            reject(error);
        }
    });

    return image;
}

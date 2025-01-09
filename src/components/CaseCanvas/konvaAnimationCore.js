import Konva from "konva";
import {activeAnimations, developmentMode, layerInstance} from "@/components/CaseCanvas/konvaCore.js";

export function createLabel({
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
            draggable:developmentMode
        });

        const background = new Konva.Rect({
            x: x - padding / 2, // 为了让背景更好地包裹文字，背景的 x 坐标需要稍微偏移
            y: y - padding / 2,
            width: text.width() + padding,
            height: text.height() + padding,
            fill: backgroundColor,
            cornerRadius,
        });

        if (text){
            text.on('dragend', function () {
                // 获取当前的 x 和 y 坐标
                let x = text.x();
                let y = text.y();
                background.x(text.x()-padding/2)
                background.y(text.y()-padding/2)

                // 在控制台打印坐标
                console.log('Current Position:', { x: x, y: y });
            });
            text.on('mouseover', function () {
                document.body.style.cursor = 'pointer';
            });
            text.on('mouseout', function () {
                document.body.style.cursor = 'default';
            });

        }

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

        const changeText = (newText)=> {
            text.text(newText)
        }


        // 返回 label 对象
        return {
            background,
            text,
            changeBackgroundColor,
            changeText,
            activate,
            deactivate
        };
    } catch (error) {
        console.error('Failed to create label:', error);
        throw error;
    }
}

export function createCircle({x, y, radius = 9, fill = 'grey', stroke = 'black', strokeWidth = 1}) {

    try {
        // 创建文字
        const circle = new Konva.Circle({
            x,
            y,
            radius: radius,
            fill: 'grey',
            stroke: 'black',
            strokeWidth: 1,
            draggable:developmentMode
        });

        if (developmentMode){
            circle.on('dragend', function () {
                // 获取当前的 x 和 y 坐标
                let x = circle.x();
                let y = circle.y();
                // 在控制台打印坐标
                console.log('Current Position:', { x: x, y: y });
            });
            circle.on('mouseover', function () {
                document.body.style.cursor = 'pointer';
            });
            circle.on('mouseout', function () {
                document.body.style.cursor = 'default';
            });
        }

        // 将背景和文字添加到图层
        layerInstance.add(circle);

        // 方法：改变背景颜色
        const changeBackgroundColor = (newColor) => {
            circle.fill(newColor);
            layerInstance.draw(); // 重新绘制图层以更新更改
        };

        const activate = ()=> {
            circle.moveToTop()
            circle.fill('orange')
        }

        const deactivate= () => {
            circle.moveToTop()
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

export async function createImage({x = 0, y = 0, imageSrc, targetHeight, targetWidth, scaleFactor = 1}) {
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
                image.on('mouseover', function () {
                    document.body.style.cursor = 'pointer';
                });
                image.on('mouseout', function () {
                    document.body.style.cursor = 'default';
                });

            }

            layerInstance.add(image);
            layerInstance.draw()

            image.changeImage = async function (newImageSrc) {
                const newImageObj = new Image();
                newImageObj.src = newImageSrc;

                await new Promise((resolve, reject) => {
                    newImageObj.onload = () => {
                        // 更新 Konva.Image 的图像
                        this.image(newImageObj);

                        // 重新绘制所在图层
                        this.getLayer().draw();
                        resolve();
                    };

                    newImageObj.onerror = (error) => {
                        console.error('Failed to load new image:', error);
                        reject(error);
                    };
                });
            };

            resolve(image);
        };
        imageObj.onerror = (error) => {
            console.error("Image loading error:", error);
            reject(error);
        }
    });

    return image;
}

export function moveObject(animationObject, xMove, yMove, duration) {
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
                // console.log('progress',progress,'new X:',newX,'newY',newY)
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


export function scaleObject(animationObject,targetScaleX, targetScaleY, duration) {
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

export function ScaleObjectSingleDirection(animationObject, targetScaleX, targetScaleY, duration) {
    return new Promise((resolve, reject) => {
        try {
            const startScaleX = animationObject.scaleX(); // 初始 X 缩放值
            const startScaleY = animationObject.scaleY(); // 初始 Y 缩放值
            const startX = animationObject.x(); // 初始 X 位置
            const startY = animationObject.y(); // 初始 Y 位置
            const width = animationObject.width(); // 对象宽度
            const height = animationObject.height(); // 对象高度

            let startTime = null;

            let moveAnimation = new Konva.Animation((frame) => {
                if (!frame) return; // 防止帧为空
                if (!startTime) {
                    // 在第一帧设置 startTime
                    startTime = frame.time;
                }

                const elapsedTime = frame.time - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // 进度 (0 到 1)，确保不会超过 1

                let newScaleX = 0;
                if (targetScaleX >= 0) {
                    newScaleX = startScaleX + (targetScaleX - startScaleX) * progress;
                } else {
                    // 如果 targetScaleX 为负，先计算绝对值的相对缩放，再应用到 X 方向
                    const absTargetScaleX = Math.abs(targetScaleX); // 获取绝对值
                    newScaleX = startScaleX + (absTargetScaleX - Math.abs(startScaleX)) * progress;
                }

                // 对于 Y 方向，处理负值
                let newScaleY = 0;
                if (targetScaleY >= 0) {
                    newScaleY = startScaleY + (targetScaleY - startScaleY) * progress;
                } else {
                    // 如果 targetScaleY 为负，先计算绝对值的相对缩放，再应用到 Y 方向
                    const absTargetScaleY = Math.abs(targetScaleY); // 获取绝对值
                    newScaleY = startScaleY + (absTargetScaleY - Math.abs(startScaleY)) * progress;
                }

                // 根据目标方向调整位置
                let newX = startX;
                let newY = startY;

                // 处理 X 方向的扩展
                if (targetScaleX > 0) {
                    // 向 X 正方向扩展
                    newX = startX; // 保持起始 X 位置
                } else if (targetScaleX < 0) {
                    // 向 X 负方向扩展
                    newX = startX - width * (newScaleX - startScaleX); // 计算负方向扩展的偏移量
                }

                // 处理 Y 方向的扩展
                if (targetScaleY > 0) {
                    // 向 Y 正方向扩展（向下扩展）
                    newY = startY; // 保持起始 Y 位置
                } else if (targetScaleY < 0) {
                    // 向 Y 负方向扩展（向上扩展）
                    newY = startY - height * (newScaleY - startScaleY); // 计算负方向扩展的偏移量
                }

                // 设置新的缩放值和位置
                animationObject.position({ x: newX, y: newY });
                animationObject.scale({ x: newScaleX, y: newScaleY });
                // console.log('position',newX,newY)
                // console.log('scale',newScaleX,newScaleY)

                if (progress >= 1) {
                    moveAnimation.stop(); // 停止动画
                    resolve(); // 动画完成，触发 Promise
                }

                // 可选：如果不自动重绘，可以取消注释
                // animationObject.getLayer().draw();
            }, animationObject.getLayer());

            moveAnimation.start();
            activeAnimations.push(moveAnimation); // 将动画实例存储到数组中
        } catch (error) {
            console.error("error in creating animation", error);
            reject(error);
        }
    });
}

export function waitAnimation(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export function stopAllAnimations() {
    activeAnimations.forEach((animation) => {
        animation.stop(); // 停止动画
    });
    activeAnimations.length = 0; // 清空数组
}


export async function labelAnimation({label, duration, textContents, backgroundColors}) {
    return new Promise((resolve, reject) => {
        try {
            const totalFrames = textContents.length; // 文本内容的总数量
            let startTime = null;

            const labelAnimation = new Konva.Animation((frame) => {
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

                if (progress >= 1) {
                    labelAnimation.stop(); // 停止动画
                    label.text.text("DONE")
                    label.changeBackgroundColor("red")
                    resolve(); // 动画完成，触发 Promise
                }
            }, label.text.getLayer());
            activeAnimations.push(labelAnimation); // 将动画实例存储到数组中

            labelAnimation.start();
        } catch (error) {
            console.error("Error in labelAnimation:", error);
            reject(error);
        }
    });
}

export function createKeyFrameFunction(subtitleLabel) {
    return function newKeyFrame(subtitleText,frameGap=2000) {
        return new Promise(async (resolve) => {
            // 更新字幕内容
            // await waitAnimation(frameGap)
            subtitleLabel.changeText(subtitleText);
            subtitleLabel.text.getLayer().draw();

            // 等待 500ms
            setTimeout(() => {
                resolve(); // 完成后返回
            }, frameGap);
        });
    };
}

// 定义全局变量
var canvas = null;
var countdownInterval = null;

// 初始化 canvas 并显示倒计时
function initCanvasWithCountdown(canvasElement, studentStore) {
    console.log(canvasElement)
    console.log("init Canvas")
    canvas = canvasElement;
    var myCtx = canvas.getContext('2d');
    var countdown = 5;

    // 更新 canvas 的倒计时显示
    function updateCountdown() {
        console.log("update count down",countdown)
        myCtx.clearRect(0, 0, canvas.width, canvas.height); // 清空 canvas
        myCtx.font = '100px Arial';
        myCtx.fillStyle = 'black';
        myCtx.textAlign = 'center';
        myCtx.textBaseline = 'middle';
        myCtx.fillText(countdown, 500,500);

        // 减少倒计时
        countdown -= 1;

        // 停止倒计时并清空 canvas
        if (countdown < 0) {
            studentStore.finishCurrentStep()
            clearInterval(countdownInterval);
            // myCtx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    // 初始化显示
    updateCountdown();

    // 每秒更新一次倒计时
    countdownInterval = setInterval(updateCountdown, 1000);
}

// 清除倒计时，若需要清理时调用
function clearCanvasCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    if (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

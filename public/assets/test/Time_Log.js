// record time ticker for all operations
import { PageName } from "../canvas/Canvas_Page";
export { Add_Time_Ticker, Init_Timer, Reset_Time_Ticker }

var TimeStart;
var TimeNow;
var TimerTickers = [];

// main
function Add_Time_Ticker(Operation, Object = "N/A", Detail = ""){
    // get current formatted time 
    TimeNow = new Date();
    const TimeNowString = Format_Time(TimeNow);

    // integrate time ticker
    const TimerTicker = [TimeNowString, PageName, Operation, Object, Detail];

    // add time ticker
    TimerTickers.push(TimerTicker);
    
    console.log(TimerTickers);

}

// init timer
function Init_Timer(){
    TimerTickers = [];
    TimeStart = new Date();
}

// reset timer tickers
function Reset_Time_Ticker(){
    TimerTickers = [];
}

// format the time
function Format_Time(TimeIn){
    const Timeout = TimeIn.toLocaleString("en-US", {
                                                    year:   "numeric",
                                                    month:  "2-digit",
                                                    day:    "2-digit",
                                                    hour:   "2-digit",
                                                    minute: "2-digit",
                                                    second: "2-digit",                               
                                                    }
                                        );
    return Timeout;
}

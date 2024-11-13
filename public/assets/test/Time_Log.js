// record time ticker for all operations
import { PageName } from "../canvas/Canvas_Page";

export { TimerTickers, Add_Time_Ticker, Init_Timer,
         Reset_Time_Ticker, Get_Time_FileName }

let TimeStart;
let TimeNow;
let TimeNowFileName;
let TimerTickers = [];

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

// format the time as legal file name
function Get_Time_FileName(){
    const date = new Date();
    const months = String(date.getMonth() + 1).padStart(2, '0');
    const days = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight as 12
    hours = String(hours).padStart(2, '0');

    return `${months}_${days}_${year}--${hours}_${minutes}_${seconds}_${amPm}`;
}

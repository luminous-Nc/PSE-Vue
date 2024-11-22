// record time ticker for all operations
import { PageName } from "../canvas/Canvas_Page";

export { Log, Add_Log, Init_Log, Reset_Log }

let TimeStart;
let TimeNow;
let Log = [];

// main
function Add_Log(Operation, Object = "N/A", Detail = ""){
    // get current formatted time 
    TimeNow = new Date();
    const TimeNowString = Format_Time(TimeNow);

    // integrate time ticker
    const log = [TimeNowString, PageName, Operation, Object, Detail];

    // add time ticker
    Log.push(log);

    console.log(log);

}

// init timer
function Init_Log(){
    Log = [];
    TimeStart = new Date();
}

// reset timer tickers
function Reset_Log(){
    Log = [];
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


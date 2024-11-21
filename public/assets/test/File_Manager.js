// manage json file and save it
import { TimerTickers, Get_Time_FileName } from "./Time_Log.js"; 
import { AllAnalysis } from "./Analysis.js";
import {useStudentStore} from "@/stores/student.js";
export { Save_Data };

function Save_Data(){
    const studentStore = useStudentStore()
    const data = {
                    "LearningStyle": studentStore.learningStyle,
                    "Operation": TimerTickers,
                    "Analysis": AllAnalysis
    }

    const TimeFileName = Get_Time_FileName();

    Download_Json(data, TimeFileName + "--" + "ASI_Data");
}

function Download_Json(Data, FileName){

    // Convert it to a JSON string
    const jsonString = JSON.stringify(Data,null,2);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with the desired file name
    link.download =  FileName + ".json";

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
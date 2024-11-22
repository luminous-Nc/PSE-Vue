// manage json file and save it
import { Log } from "./Log.js"; 
import { AllAnalysis } from "../test/Analysis.js";
import { useStudentStore } from "@/stores/student.js";
export { Save_Data };

function Save_Data(){
    const studentStore = useStudentStore()
    const data = {
                    "LearningStyle": studentStore.learningStyle,
                    "Operation": Log,
                    "Analysis": AllAnalysis
    }

    const TimeFileName = Get_Time_String();

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

// format the time as legal file name
function Get_Time_String(){
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

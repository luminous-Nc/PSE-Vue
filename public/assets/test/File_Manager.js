// manage json file and save it
import { TimerTickers } from "./Time_Log"; 
import { AllAnalysis } from "./Analysis";
export { Download_Operation_Json, Download_Analysis_Json };

function Download_Operation_Json(){
    Download_Json({"data": TimerTickers}, "OperationData");
}

function Download_Analysis_Json(){
    Download_Json({"data": AllAnalysis}, "AnalysisData");
}

function Download_Json(Data, FileName){
    // Convert it to a JSON string
    const jsonString = JSON.stringify(Data);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with the desired file name
    link.download = FileName + ".json";

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
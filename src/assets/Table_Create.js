// generate table
function Init_Table(Table, Data){
  /*   Data: n by m data with header and body
        - Data.Header
        - Data.Body */
        
    // reset the current table
    Table.innerHTML = "";

    // generate header body
    var header = Init_Row(Data.Header, "th");
    Table.appendChild(header);

    // generate body
    for (var i = 0; i < Data.Body.length; i++){
        var row = Init_Row(Data.Body[i], "td");
        Table.appendChild(row);
    }

}

// add row
function Init_Row(Data, ElementType){
    // init row
    var row = document.createElement("tr");

    // init cell
    for (var j = 0; j < Data.length; j++) { 
        // confirm data type(to be revised)
        if (j == 2) {type = "link";}
        else{type = "text";}

        // init one cell   
        var cell = Init_Cell(Data, type);
        
        // add header to row
        row.appendChild(cell); 
    }

    return row;
}

// add cell
function Init_Cell(Data, ElementType = "text") {
        // init one cell   
        var cell = document.createElement(ElementType); 
        
        if (ElementType = "link") {
            // init one link
            var link = document.createElement("a");
            var linkText = document.createTextNode(Data);
            link.title = Data;
            link.href = Data.url;

            // add link to cell
            cell.appendChild(link);
        }else{
            // init cell text
            var celltxt = document.createTextNode(Data[i]);

            // add link to cell
            cell.appendChild(celltxt);
        }
 
        return cell;
}
(function () {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("body").appendChild(table);

    table.style = "border : 6px solid grey; background-color : beige; margin-left : auto;  margin-right : auto; padding : 8px; margin-top : 10vh; ";
    
    // creating  table header
    var row1 = document.createElement("tr");
    var head1 = document.createElement("th");
    var head2 = document.createElement("th");
    var head3 = document.createElement("th");
    var head4 = document.createElement("th");
    var head5 = document.createElement("th");

    var data1 = document.createTextNode("Name");
    var data2 = document.createTextNode("Age");
    var data3 = document.createTextNode("DOB");
    var data4 = document.createTextNode("Email");
    var data5 = document.createTextNode("Company");

    head1.appendChild(data1);
    head2.appendChild(data2);
    head3.appendChild(data3);
    head4.appendChild(data4);
    head5.appendChild(data5);

    head1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    head2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    head3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    head4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    head5.style = "border : 3px double black; padding : 10px; margin : 10px;";
    
    row1.appendChild(head1);
    row1.appendChild(head2);
    row1.appendChild(head3);
    row1.appendChild(head4);
    row1.appendChild(head5);
    thead.appendChild(row1); 


    // Creating First row of tbody
    var row2 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var data1 = document.createTextNode("Samyak Rastogi");
    var data2 = document.createTextNode("20");
    var data3 = document.createTextNode("11-10-2001");
    var data4 = document.createTextNode("samyak@gmail.com");
    var data5 = document.createTextNode("Gemini");
 
    cell1.appendChild(data1);
    cell2.appendChild(data2);
    cell3.appendChild(data3);
    cell4.appendChild(data4);
    cell5.appendChild(data5);
    
    cell1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell5.style = "border : 3px double black; padding : 10px; margin : 10px;";

    row2.appendChild(cell1);
    row2.appendChild(cell2);
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    row2.appendChild(cell5);
    thead.appendChild(row2); 

    // Creating Second row of tbody
    var row3 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var data1 = document.createTextNode("John Dae");
    var data2 = document.createTextNode("32");
    var data3 = document.createTextNode("23-09-1990");
    var data4 = document.createTextNode("john@yahoo.com");
    var data5 = document.createTextNode("Google");
 
    cell1.appendChild(data1);
    cell2.appendChild(data2);
    cell3.appendChild(data3);
    cell4.appendChild(data4);
    cell5.appendChild(data5);
    
    cell1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell5.style = "border : 3px double black; padding : 10px; margin : 10px;";

    row3.appendChild(cell1);
    row3.appendChild(cell2);
    row3.appendChild(cell3);
    row3.appendChild(cell4);
    row3.appendChild(cell5);
    thead.appendChild(row3);


    // Creating third row of tbody
    var row4 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var data1 = document.createTextNode("Andrew James");
    var data2 = document.createTextNode("40");
    var data3 = document.createTextNode("19-02-1980");
    var data4 = document.createTextNode("andrew@gmail.com");
    var data5 = document.createTextNode("Microsoft");
 
    cell1.appendChild(data1);
    cell2.appendChild(data2);
    cell3.appendChild(data3);
    cell4.appendChild(data4);
    cell5.appendChild(data5);
    
    cell1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell5.style = "border : 3px double black; padding : 10px; margin : 10px;";

    row4.appendChild(cell1);
    row4.appendChild(cell2);
    row4.appendChild(cell3);
    row4.appendChild(cell4);
    row4.appendChild(cell5);
    thead.appendChild(row4); 

    
    // Creating Fifth row of tbody
    var row5 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var data1 = document.createTextNode("Mitchell Siddle");
    var data2 = document.createTextNode("24");
    var data3 = document.createTextNode("21-01-1998");
    var data4 = document.createTextNode("michy@gmail.com");
    var data5 = document.createTextNode("Deloite");
 
    cell1.appendChild(data1);
    cell2.appendChild(data2);
    cell3.appendChild(data3);
    cell4.appendChild(data4);
    cell5.appendChild(data5);
    
    cell1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell5.style = "border : 3px double black; padding : 10px; margin : 10px;";

    row5.appendChild(cell1);
    row5.appendChild(cell2);
    row5.appendChild(cell3);
    row5.appendChild(cell4);
    row5.appendChild(cell5);
    thead.appendChild(row5); 


    // creating fifth row of tbody
    var row6 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    var data1 = document.createTextNode("Ian Jones");
    var data2 = document.createTextNode("31");
    var data3 = document.createTextNode("12-12-1991");
    var data4 = document.createTextNode("Jonesian@gmail.com");
    var data5 = document.createTextNode("IBM");
 
    cell1.appendChild(data1);
    cell2.appendChild(data2);
    cell3.appendChild(data3);
    cell4.appendChild(data4);
    cell5.appendChild(data5);
    
    cell1.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell2.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell3.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell4.style = "border : 3px double black; padding : 10px; margin : 10px;";
    cell5.style = "border : 3px double black; padding : 10px; margin : 10px;";

    row6.appendChild(cell1);
    row6.appendChild(cell2);
    row6.appendChild(cell3);
    row6.appendChild(cell4);
    row6.appendChild(cell5);
    thead.appendChild(row6); 

    
})();
// from data.js
var tableData = data;

//get reference to the table body
var tbody = d3.select("tbody");

// function to build table display
function displayData(ufoData) {
    tbody.html("");
    ufoData.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.values(ufoRecord).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);    
        });
    });
};

//initial table display
displayData(tableData);

// select filter button 
//var button = d3.select("#filter-btn");
//button click
//button.on("click", function() {
    //d3.event.preventDefault();
    //tbody.selectAll('*').remove();
    //var inputDate = d3.select("#datetime");
    //var inputValue = inputDate.property("value");
    //console.log(inputValue);
    //var filteredData = tableData.filter(x => x.datetime === inputValue);
    //console.log(filteredData);

//}
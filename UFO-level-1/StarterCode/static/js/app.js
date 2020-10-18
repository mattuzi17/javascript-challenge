// from data.js
var tableData = data;

//get reference to the table body
var tbody = d3.select("tbody");

// function to build table display
function displayData(ufoData) {
//reference to the table body
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

//select user input  
var inputDate = d3.select("#datetime")
var button = d3.select("#filter-btn")

// function to filter by date and time
function handleClick(){
//prevent refresh
    d3.event.preventDefault();

    console.log(inputDate.property("value"));
//build new table with filter
    var filteredData = tableData.filter(row => row.datetime === inputDate.property("value"))
    console.log(filteredData);   
    displayData(filteredData);
}
    
//button click
d3.selectAll("#filter-btn").on("click", handleClick);

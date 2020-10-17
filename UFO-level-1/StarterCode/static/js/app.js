// from data.js
var tableData = data;

// function to build table display
function buildTable(ufoData) {
    var tbody = d3.select("tbody");
    ufoData.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.entries(ufoRecord).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);    
        });
    });
};
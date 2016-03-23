/**
* scripts.js
*
* Part of Titanic: Story of the passengers.
*
* Returns the tables of pictograms in the infographic
*/

var passengers = 891;
var men = 577;
var women = 314;
var firstClass = 216;
var secondClass = 184;
var thirdClass = 491;

var tableColumns = 10;

var passengersIcon = 'fa-users fa-lg';
var menIcon = 'fa-male fa-lg';
var womenIcon = 'fa-female fa-lg';

// source of table function example: http://www.aspsnippets.com/Articles/Create-dynamic-Table-in-HTML-at-runtime-using-JavaScript.aspx
function plotPassengers(passengers, columns, faClass) {
  // Create a html table element.
  var table = document.createElement("TABLE");

  // calculate number of rows and number of passengers in last row.
  var numberOfRows = Math.ceil((passengers/10)/columns); // divide by 10 since 1 icon displays 10 passengers
  var numberInLastRow = Math.round((passengers/columns)%10)
  // add the data rows including cells
  for (var i = 0; i < numberOfRows; i++) {
    var row = table.insertRow(-1);
    // if not last row, plot full rows
    if (i < numberOfRows - 1) {
      for (var j = 0; j < columns; j++) {
        var cell = row.insertCell(-1);
        // give the cell the assigned fa icon
        cell.innerHTML = "<i class='fa " + faClass + "'></i>";
      }
    }
    // if last row, plot number in last row
    else {
      for (var j = 0; j < numberInLastRow; j++) {
        var cell = row.insertCell(-1);
        // give the cell the assigned fa icon
        cell.innerHTML = "<i class='fa " + faClass + "'></i>";
      }
    }
  }

  // put the table in the infographic-canvas div
  var targetDiv = document.getElementById("infographic-canvas");
  targetDiv.innerHTML = "";
  targetDiv.appendChild(table);

  // make the table look nice
  $("td").css("padding", "10px");
  // center the table in the div
  $("table").css("margin", "0px auto");
}

// add actions to total passengers button
var btnSurvTotal = document.getElementById("btn-surv-total");
btnSurvTotal.addEventListener("click", function() {$("#table-header").html("Total Passengers: 891")});
btnSurvTotal.addEventListener("click", function() {plotPassengers(passengers, tableColumns, passengersIcon)});

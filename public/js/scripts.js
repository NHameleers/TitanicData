/**
* scripts.js
*
* Part of Titanic: Story of the passengers.
*
* Returns the tables of pictograms in the infographic
*/

/* TODO:
1. % survived should only be visible after clicking survival button. Link it to that button.
2. The survival button should color the infographic icons.
3. Legend needs to be inputted, linked to the first 3 buttons.
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
function plotPassengers(passengers, columns, faClass, targetElement) {
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
  var targetDiv = document.getElementById(targetElement);
  targetDiv.innerHTML = "";
  targetDiv.appendChild(table);

  // make the table look nice
  $("td").css("padding", "10px");
  // center the table in the div
  $("table").css("margin", "0px auto");
}

// add actions to total passengers button
var btnSurvTotal = document.getElementById("btn-surv-total");
btnSurvTotal.addEventListener("click", function() {$("#infographic").html("<h1>Passengers</h1> \
      <div class='col-md-12'> \
        <div id='infographic-canvas'> \
        </div> \
      </div>")});
btnSurvTotal.addEventListener("click", function() {plotPassengers(passengers, tableColumns, passengersIcon, 'infographic-canvas')});

// add actions to men/women button
var btnSurvSex = document.getElementById("btn-surv-sex");
btnSurvSex.addEventListener("click", function() {$("#infographic").html("<div class='col-md-6'> \
        <h1>Men</h1> \
        <h2>19% survived: 109 out of 577</h2> \
        <div id='infographic-canvas-men'> \
          <!-- place to plot the table --> \
        </div> \
      </div> \
      <div class='col-md-6'> \
        <h1>Women</h1> \
        <h2>74% survived: 233 out of 314</h2> \
        <div id='infographic-canvas-women'> \
          <!-- place to plot the table --> \
        </div> \
      </div> <!-- /.col-md-6 -->")});
btnSurvSex.addEventListener("click", function() {plotPassengers(men, 10, menIcon, 'infographic-canvas-men')});
btnSurvSex.addEventListener("click", function() {plotPassengers(women, 10, womenIcon, 'infographic-canvas-women')});

// add actions to class button
var btnSurvClass = document.getElementById("btn-surv-class");
btnSurvClass.addEventListener("click", function() {$("#infographic").html(" \
      <div class='col-md-4'> \
        <h1>1st Class</h1> \
        <h2>63% survived: 136 out of 216</h2> \
        <div id='infographic-canvas-first'> \
          <!-- place to plot the table --> \
        </div> \
      </div> \
      <div class='col-md-4'> \
        <h1>2nd Class</h1> \
        <h2>47% survived: 87 out of 184</h2> \
        <div id='infographic-canvas-second'> \
          <!-- place to plot the table --> \
        </div> \
      </div> \
      <div class='col-md-4'> \
        <h1>3rd Class</h1> \
        <h2>24% survived: 119 out of 491</h2> \
        <div id='infographic-canvas-third'> \
          <!-- place to plot the table --> \
        </div> \
      </div> <!-- /.col-md-4 -->")});
btnSurvClass.addEventListener("click", function() {plotPassengers(firstClass, 10, passengersIcon, 'infographic-canvas-first')});
btnSurvClass.addEventListener("click", function() {plotPassengers(secondClass, 10, passengersIcon, 'infographic-canvas-second')});
btnSurvClass.addEventListener("click", function() {plotPassengers(thirdClass, 10, passengersIcon, 'infographic-canvas-third')});

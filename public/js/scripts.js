/**
* scripts.js
*
* Part of Titanic: Story of the passengers.
*
* Returns the tables of pictograms in the infographic
*/

/* TO DO:
1. % survived should only be visible after clicking survival button. Link it to that button.
2. The survival button should color the infographic icons.
3. Legend needs to be inputted, linked to the first 3 buttons.
*/

$(function(){ // run when document ready

  var passengers = 891;
  var survivorsPassengers = 342;
  var men = 577;
  var survivorsMen = 109;
  var women = 314;
  var survivorsWomen = 233;
  var firstClass = 216;
  var survivorsFirstClass = 136;
  var secondClass = 184;
  var survivorsSecondClass = 87;
  var thirdClass = 491;
  var survivorsThirdClass = 119;

  var tableColumns = 10;

  var passengersIcon = 'fa-user fa-lg';
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
    } // end of creation table

    // put the table in the targetElement div
    var targetDiv = $("#" + targetElement);
    targetDiv.html("");
    targetDiv.append(table).hide().fadeIn(2000);

    // make the table look nice
    $("td").css("padding", "10px");
    $("td").addClass("color-survived");
    // center the table in the div
    $("table").css("margin", "0px auto");
  } // end function plotPassengers

  // add actions to total passengers button
  var btnSurvTotal = $("#btn-surv-total");
  var survTotalContent = " \
        <div class='col-md-12 info-box'> \
          <div class='info-box-content'> \
            <h1>Passengers</h1> \
            <h2 id='stats-passengers'>Total: 891</h2> \
            <div id='infographic-canvas'> \
            </div> \
          </div> \
        </div>";
  btnSurvTotal.click(function() {$("#infographic").html(survTotalContent)});
  btnSurvTotal.click(function() {plotPassengers(passengers, tableColumns, passengersIcon, 'infographic-canvas')});

  // add actions to men/women button
  var btnSurvSex = $("#btn-surv-sex");
  var survSexContent = " \
        <div class='col-md-6 info-box'> \
          <div class='info-box-content'> \
            <h1>Men</h1> \
            <h2 id='stats-men'>Total: 577</h2> \
            <div id='infographic-canvas-men'> \
              <!-- place to plot the table --> \
            </div> \
          </div> \
        </div> \
        <div class='col-md-6 info-box'> \
          <div class='info-box-content'> \
            <h1>Women</h1> \
            <h2 id='stats-women'>Total: 314</h2> \
            <div id='infographic-canvas-women'> \
              <!-- place to plot the table --> \
            </div> \
          </div> \
        </div> <!-- /.col-md-6 -->";
  btnSurvSex.click(function() {$("#infographic").html(survSexContent)});
  btnSurvSex.click(function() {plotPassengers(men, 10, menIcon, 'infographic-canvas-men')});
  btnSurvSex.click(function() {plotPassengers(women, 10, womenIcon, 'infographic-canvas-women')});

  // add actions to class button
  var btnSurvClass = $("#btn-surv-class");
  var survClassContent = " \
        <div class='col-md-4 info-box'> \
          <div class='info-box-content'<> \
            <h1>1st Class</h1> \
            <h2 id='stats-first'>Total 216</h2> \
            <div id='infographic-canvas-first'> \
              <!-- place to plot the table --> \
            </div> \
          </div> \
        </div> \
        <div class='col-md-4 info-box'> \
          <div class='info-box-content'> \
            <h1>2nd Class</h1> \
            <h2 id='stats-second'>Total 184</h2> \
            <div id='infographic-canvas-second'> \
              <!-- place to plot the table --> \
            </div> \
          </div> \
        </div> \
        <div class='col-md-4 info-box'> \
          <div class='info-box-content'> \
            <h1>3rd Class</h1> \
            <h2 id='stats-third'>Total 491</h2> \
            <div id='infographic-canvas-third'> \
              <!-- place to plot the table --> \
            </div> \
          </div> \
        </div> <!-- /.col-md-4 -->";
  btnSurvClass.click(function() {$("#infographic").html(survClassContent)});
  btnSurvClass.click(function() {plotPassengers(firstClass, 10, passengersIcon, 'infographic-canvas-first')});
  btnSurvClass.click(function() {plotPassengers(secondClass, 10, passengersIcon, 'infographic-canvas-second')});
  btnSurvClass.click(function() {plotPassengers(thirdClass, 10, passengersIcon, 'infographic-canvas-third')});
  btnSurvClass.click(function() {$("#info-box-content").css("height", "400px")});

  // add actions to 'How many survived' button
  function survStats() {
    $("#stats-passengers").html("38% survived: 342 out of 891").hide().fadeIn(2000);
    $("#stats-men").html("19% survived: 109 out of 577").hide().fadeIn(2000);
    $("#stats-women").html("74% survived: 233 out of 314").hide().fadeIn(2000);
    $("#stats-first").html("63% survived: 136 out of 216").hide().fadeIn(2000);
    $("#stats-second").html("47% survived: 87 out of 184").hide().fadeIn(2000);
    $("#stats-third").html("24% survived: 119 out of 491").hide().fadeIn(2000);
  } // end function survStats

  var btnHowManySurv = $("#btn-how-many-surv");
  btnHowManySurv.click(function() {survStats()});

  // coloring the tables according to proportion that survived
  btnHowManySurv.click(function(){
    $("#infographic-canvas td").each(function(i){
      if (i > Math.round(survivorsPassengers/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
    $("#infographic-canvas-men td").each(function(i){
      if (i > Math.round(survivorsMen/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
    $("#infographic-canvas-women td").each(function(i){
      if (i > Math.round(survivorsWomen/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
    $("#infographic-canvas-first td").each(function(i){
      if (i > Math.round(survivorsFirstClass/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
    $("#infographic-canvas-second td").each(function(i){
      if (i > Math.round(survivorsSecondClass/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
    $("#infographic-canvas-third td").each(function(i){
      if (i > Math.round(survivorsThirdClass/10)) {
        this.style.transition = "color 2s ease";
        this.style.color = "black";
      }
    });
  }); // end of table coloring according to survivors
}); // end ready

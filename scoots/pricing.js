// script.js

// Function to load JSON data from a file
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == 200) {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

const pricingURL = "https://nameerfdt.github.io/mytesting/scoots/pricing.json";

async function getPricing() {
    const response = await fetch(pricingURL);
    const data = await response.json();
    // displayPricing(data.prices);
    console.log(data);

    data.prices.forEach(price => {
        getPricing(price);
    });
}
  
  // Function to populate the table with data
  function populateTable(data) {
    var tableBody = document.getElementById('rentalTable').getElementsByTagName('tbody')[0];
    data.RentalOptions.forEach(function(option) {
      var row = tableBody.insertRow();
      row.insertCell(0).textContent = option.Vehicle;
      row.insertCell(1).textContent = option.MaxPersons;
      row.insertCell(2).textContent = option.Reservation["HalfDay (3hrs)"];
      row.insertCell(3).textContent = option.Reservation["FullDay"];
      row.insertCell(4).textContent = option["Walk-In"]["HalfDay (3hrs)"];
      row.insertCell(5).textContent = option["Walk-In"]["FullDay"];
    });
  }
  
  // Load JSON data and populate the table
  loadJSON(function(response) {
    populateTable(response);
  });
  
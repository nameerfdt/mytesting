const pricingURL = "https://nameerfdt.github.io/mytesting/scoots/pricing.json";

async function getPricing() {
    try {
        const response = await fetch(pricingURL);
        const data = await response.json();
        populateTable(data.RentalOptions); // Pass RentalOptions array to populateTable
    } catch (error) {
        console.error('Error fetching pricing data:', error);
    }
}

// Function to populate the table with data
function populateTable(data) {
    var tableBody = document.getElementById('rentalTable').getElementsByTagName('tbody')[0];
    data.forEach(function(option) { // Loop through each option in data
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = option.Vehicle;
        row.insertCell(1).textContent = option.MaxPersons;
        row.insertCell(2).textContent = option.Reservation["HalfDay (3hrs)"];
        row.insertCell(3).textContent = option.Reservation["FullDay"];
        row.insertCell(4).textContent = option["Walk-In"]["HalfDay (3hrs)"];
        row.insertCell(5).textContent = option["Walk-In"]["FullDay"];
    });
}

// Call getPricing to fetch data and populate the table
getPricing();

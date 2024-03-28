function toggleOtherCruiseLine(select) {
    console.log("Function called!")
    let otherCruiseLineDiv = document.getElementById("otherCruiseLine");
    let otherCruiseLineInput = document.getElementById("otherCruiseLineInput");

    if (select.value === "other") {
        otherCruiseLineDiv.style.display = "block";
        otherCruiseLineInput.required = true; // Mark the input as required
    } else {
        otherCruiseLineDiv.style.display = "none";
        otherCruiseLineInput.required = false; // Remove the required attribute
    }
}
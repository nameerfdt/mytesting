// Construct the URL with the two locations
const location1 = "El Centro de Cozumel";
const location2 = "Terminal Puerta Maya";
const mapUrl = `https://www.google.com/maps/embed/v1/view?q=${encodeURIComponent(location1)}&q=${encodeURIComponent(location2)}&zoom=6&maptype=roadmap`;

// Set the URL as the src attribute of the iframe
document.getElementById("map").setAttribute("src", mapUrl);
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody")

// Step 1: Loop Through `data` and console.log each UFO sighting
data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
// Step 2: Use d3 to append one table row `tr` for each UFO sighting
    var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each UFO sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
 // Step 4: Use d3 to append 1 cell per UFO sighting
        var cell = row.append("td");
// Step 5: Use d3 to update each cell's text with UFO sightings
        cell.text(value);
   });
 });

 // Reference to Filter Table button
var button = d3.select("#filter-btn");
// Define the click handler inline
button.on("click", function() {
// Remove existing table
    d3.select("tbody").html("");
// Prevent the page from refreshing
    d3.event.preventDefault();
// Select the input date and get the raw HTML node
    var inputElement = d3.select("#datetime");
// Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
// Loop through 'data' for filtered UFO sighting and console.log each filtered UFO sighting
    filteredData.forEach(function(filteredSighting) {
        console.log(filteredSighting);
// Append one table row `tr` for each filtered UFO sighting
        var filteredRow = tbody.append("tr");
// Use `Object.entries` to console.log each filtered UFO sighting
        Object.entries(filteredSighting).forEach(function([key, value]) {
            console.log(key, value);
// Append 1 cell per filtered UFO sighting
        var filteredCell = filteredRow.append("td");
// Update each cell's text with filtered UFO sightings
        filteredCell.text(value);
    })
})
});



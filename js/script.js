
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.
	loadData();

});

function loadData() {

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
	$.getJSON("js/donations_over_5k.json", function(donationData) {

		writeTable(donationData);

	});
}


function writeTable(data) {

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount

	for (i = 0; i < data.length; i++) {
		var committee = data[i]["Committee"];
		var date = data[i]["Contribution Date"];
		var amount = data[i]["Amount"];
		var info = data[i]["Contribution Information"];

		if (committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
			$("tbody").append(
				"<tr>"+
					"<td>"+date+"</td>"+
					"<td>"+info+"</td>"+
					"<td class='moola'>"+amount+"</td>"+
				"</tr>"

				);
		}
	}
}


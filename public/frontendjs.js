// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

$(".submit").on("click", function (event) {
    event.preventDefault();

    var config = {
        ".chosen-select": {},
        ".chosen-select-deselect": {
            allow_single_deselect: true
        },
        ".chosen-select-no-single": {
            disable_search_threshold: 10
        },
        ".chosen-select-no-results": {
            no_results_text: "Oops, nothing found!"
        },
        ".chosen-select-width": {
            width: "95%"
        }
    };

    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                name: $("#name").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };

            // AJAX post the data to the friends API.
            $.post("/api/data/boat", userData, function (data) {

                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#match-name").text(data.name);
                

                // Show the modal with the best match
                $("#results-modal").modal("toggle");

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });



    //      Here we grab the form elements
    //     var newBoatSurvey = {
    //         name: $("#name").val().trim(),
    //         scores: [
    //             $("#q1").val(),
    //             $("#q2").val(),
    //             $("#q3").val(),
    //             $("#q4").val(),
    //             $("#q5").val(),
    //             $("#q6").val(),
    //             $("#q7").val(),
    //             $("#q8").val(),
    //             $("#q9").val(),
    //             $("#q10").val()
    //         ]
    //     };

    //     console.log(newBoatSurvey);

    //     // This line is the magic. It"s very similar to the standard ajax function we used.
    //     // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    //     // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    //     // depending on if a match is available or not.

    //     $.post("/api/data/boat", newBoatSurvey,
    //         function (data) {

    //             // If a match is available... tell user they are booked.
    //             if (data) {
    //                 alert("You have been matched with the perferct boat");
    //             }

    //             // If a match is available... alert something.
    //             else {
    //                 alert("PROBLEM");
    //             }

    //             // Clear the form when submitting
    //             $("#name").val("");
    //             $("#q1").val(""),
    //                 $("#q2").val(""),
    //                 $("#q3").val(""),
    //                 $("#q4").val(""),
    //                 $("#q5").val(""),
    //                 $("#q6").val(""),
    //                 $("#q7").val(""),
    //                 $("#q8").val(""),
    //                 $("#q9").val(""),
    //                 $("#q10").val("")

    //         });

});

// This code is how form data is loaded from the server
// In this code, jQuery is used to "download" the data from our server
// We then dynamically display this content in our table. This is very similar to the group projects you just completed.
// It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

function runTableQuery() {

    // Here we get the location of the root page.
    // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
    var currentURL = window.location.origin;

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({
            url: currentURL + "/api/data/boat",
            method: "GET"
        })
        .then(function (newBoatSurvey) {

            // Here we are logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------");
            console.log("URL: " + currentURL + "/api/data/boat");
            console.log("------------------------------------");

            // Here we then log the NYTData to console, where it will show up as an object.
            console.log(newBoatSurvey);
            console.log("------------------------------------");

        })
}


// Run Queries!
// ==========================================
runTableQuery();
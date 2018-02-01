// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
// Capture the form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("submit button clicked");

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
        $.post("/api/boat", userData, function (data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").img(data.photo);


            // Show the modal with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
});


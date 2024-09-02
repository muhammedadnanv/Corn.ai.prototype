document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailInput)) {
        // Show the modal if email is invalid
        var modal = document.getElementById("emailModal");
        modal.style.display = "block";

        // Close the modal when the user clicks the close button
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when the user clicks anywhere outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        // Proceed with form submission or further validation
        alert("Form submitted successfully!");
        // You can add code here to actually submit the form or further process the data
    }
});

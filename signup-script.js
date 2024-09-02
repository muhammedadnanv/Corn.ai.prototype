document.getElementById("signupForm").addEventListener("submit", function(event) {
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
        // Add additional checks if needed (e.g., password match)
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
        } else {
            alert("Signup successful!");
            // Here you can submit the form or further process the data
        }
    }
});

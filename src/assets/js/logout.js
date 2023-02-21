/* LOGOUT.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 18:35:45
 * Last edited:
 *   21 Feb 2023, 18:38:50
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Provides the logout page functionality.
**/


/***** HANDLERS *****/
// Logs the user out.
function handle_logout() {
    // Always hide the error from any previous runs// Show the error
    $("#error").css("display", "none");

    // Send the logout request
    $.post("/php/login.php", {
        action: "logout",
    })
        .done(function() {
            // User is now logged-in, so redirect back to the main address, if any
            window.location.href = "/";
        })
        .fail(function(xhr, _, msg) {
            // Log to the console
            console.error("Logout request failed with status " + xhr.status + ": " + msg);

            // Show that it failed to non-log users either
            $("#error-text").text("Logout failed");
            $("#error").css("display", "flex");
        });
}





/***** REGISTRATION *****/
// Call the logout function as soon as the page is loaded
$(handle_logout)

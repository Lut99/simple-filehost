/* LOGIN.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 11:57:00
 * Last edited:
 *   21 Feb 2023, 16:24:26
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Provides function(s) for the login page.
**/


/***** GLOBALS *****/
/// The previous 





/***** HANDLERS *****/
// Resets the given input to not be an error
function reset_input(base_id) {
    $(resolve_id(base_id)).css("border-width", "1px");
    $(resolve_id(base_id)).css("border-color", "#bbbbbb");
    $(resolve_id(base_id) + "-error").css("display", "none");
}



// Handles the login button itself.
function handle_login() {
    $("#login").prop("disabled", true);

    // Always hide the error from any previous runs// Show the error
    $("#button-error").css("display", "none");

    // Collect the information from the inputs
    let username = $("#username").val();
    let password = $("#password").val();

    // Assert they are something
    if (username == null || username == undefined || username.length == 0) {
        // Highlight it is missing
        $("#username").css("border-color", "#ff0000");
        $("#username").css("border-width", "2px");

        // Show the error
        $("#username-error-text").text("Specify a username");
        $("#username-error").css("display", "flex");

        // Re-enable the button and quit
        $("#login").prop("disabled", false);
        return;
    }
    if (password == null || password == undefined || password.length == 0) {
        // Highlight it is missing
        $("#password").css("border-color", "#ff0000");
        $("#password").css("border-width", "2px");

        // Show the error
        $("#password-error-text").text("Specify a password");
        $("#password-error").css("display", "flex");

        // Re-enable the button and quit
        $("#login").prop("disabled", false);
        return;
    }

    // Crash if not SSL
    // Note: not exactly millitary grade, but should at least assert that our transmission is encrypted.
    if (document.location.protocol !== "https:") {
        // Show the error
        $("#button-error-text").text("Not connected over SSL (will not send password)");
        $("#button-error").css("display", "flex");

        // Re-enable the button and quit
        $("#login").prop("disabled", false);
        return;
    }

    // Alright now send the password using a GET-request to the server
    $.post("/php/login.php", {
        action: "login",
        username: username,
        password: password,
    })
        .done(function() {
            // Login complete; re-enanled the button to show this
            $("#login").prop("disabled", false);

            // User is now logged-in, so redirect back to the address, if any
            const params_raw = window.location.search;
            const params = new URLSearchParams(params_raw);
            if (params.has("from")) { window.location.href = params.get("from"); }
            else { window.location.href = "/"; }
        })
        .fail(function(xhr, _, msg) {
            // Log to the console
            console.error("Login request failed with status " + xhr.status + ": " + msg);

            // Match on the status to show the error
            if (xhr.status === 401) {
                // Do a bit creative erroring
                $("#username").css("border-color", "#ff0000");
                $("#username").css("border-width", "2px");
                $("#password").css("border-color", "#ff0000");
                $("#password").css("border-width", "2px");
                $("#password-error-text").text("Username or password incorrect");
                $("#password-error").css("display", "flex");
            } else {
                // Show that it failed to non-log users either
                $("#button-error-text").text("Login failed");
                $("#button-error").css("display", "flex");
            }

            // Reset the button, though
            $("#login").prop("disabled", false);
        });
}





/***** REGISTRATORS *****/
// Registers the button callback
$(function() { 
    // The previous username text
    var prev_username = "";
    var prev_password = "";

    $("#login").click(handle_login);
    $("#username").keypress(function(e) {
        // Reset
        let this_username = $("#username").val();
        if (this_username != prev_username) {
            reset_input("#username");
            prev_username = this_username;
        }

        let this_password = $("#password").val();
        if (this_password != prev_password) {
            reset_input("#password");
            prev_password = this_password;
        }

        // If enter, then also process login
        if (e.which == 13) { handle_login(); }
    });
    $("#password").keypress(function(e) {
        // Reset
        let this_username = $("#username").val();
        if (this_username != prev_username) {
            reset_input("#username");
            prev_username = this_username;
        }

        let this_password = $("#password").val();
        if (this_password != prev_password) {
            reset_input("#password");
            prev_password = this_password;
        }

        // If enter, then also process login
        if (e.which == 13) { handle_login(); }
    });
})

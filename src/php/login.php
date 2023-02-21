<?php
/* LOGIN.php
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 16:06:13
 * Last edited:
 *   21 Feb 2023, 16:36:25
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Implements the server login logic.
**/


// Start the session and such
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}


// Read the action in the POST
if (!isset($_POST)) {
    http_response_code(405);
    die("not post");
}

if (!isset($_POST["action"])) {
    http_response_code(400);
    die("missing action");
}
$action = $_POST["action"];


// Switch what to do
if ("$action" === "login") {
    /* LOGGING IN */

    // Read the username
    if (!isset($_POST["username"])) {
        http_response_code(400);
        die("missing username");
    }
    $username = $_POST["username"];
    // ...and the password
    if (!isset($_POST["password"])) {
        http_response_code(400);
        die("missing password");
    }
    $password = $_POST["password"];

    // Assert the username is only valid characters
    if (!preg_match("/^[a-zA-Z_][a-zA-Z_0-9]*$/", $username)) {
        http_response_code(400);
        die("username invalid (`^[a-zA-Z_][a-zA-Z_0-9]*$`)");
    }

    // Attempt to find a file with that username
    $path = $_SERVER["DOCUMENT_ROOT"] . "/users/" . $username . ".pwd";
    if (!file_exists($path)) {
        http_response_code(401);
        exit();
    }

    // If we do, read it to find the hashed password
    $pwd = file_get_contents($path);
    if ($pwd === false) {
        http_response_code(500);
        die("fs error");
    }
    $pwd = trim($pwd);

    # Hash the given password, then compare
    if(!password_verify($password, $pwd)) {
        http_response_code(401);
        die($pwd);
    }

    # We can finally login!
    $_SESSION["user"] = $username;
    http_response_code(200);
    exit();

} else if ("$action" === "logout") {
    /* LOGGING OUT */

    // Simply unset the user thing
    unset($_SESSION["user"]);

    // OK!
    http_response_code(200);
    exit();

} else {
    // Unknown action
    http_response_code(400);
    die("unknown action");
}
?>

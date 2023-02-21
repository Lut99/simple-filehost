<?php
    // Start the session
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    // Check if the user isn't logged in
    if (isset($_SESSION["user"])) {
        // They are; redirect them either the from or the main page
        if (isset($_GET["from"])) {
            header("Location: https://" . $_SERVER['SERVER_NAME'] . $_GET["from"]);
        } else {
            header("Location: https://" . $_SERVER['SERVER_NAME']);
        }
        die();
    }
?>

<html>
    <head>
        <title>Simple Filehost - Login</title>

        <!-- Stylesheets -->
        <link rel="stylesheet" href="/assets/css/main.css">

        <!-- Scripts -->
        <script src="/assets/js/jquery-3.6.3.min.js"></script>
        <script src="/assets/js/tools.js"></script>
        <script src="/assets/js/login.js"></script>
    </head>
    <body>
        <div class="header">
            <div class="header-body">
                <span class="title">Simple Filehost</span>
            </div>
        </div>
        <div class="main">
            <div class="main-body">
                <div class="input-div">
                    <label>Username</label>
                    <input type="text" id="username" class="input" name="username">
                    <div id="username-error" class="error">
                        <span id="username-error-text" class="error-text"></span>
                    </div>
                </div>
                <div class="input-div">
                    <label>Password</label>
                    <input type="password" id="password" class="input" name="password">
                    <div id="password-error" class="error">
                        <span id="password-error-text" class="error-text"></span>
                    </div>
                </div>
                <div class="button-div">
                    <button class="button" id="login" type="button">Login</button>
                </div>
                <span id="button-error" class="error">
                    <span id="button-error-text" class="error-text"></span>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </body>
</html>

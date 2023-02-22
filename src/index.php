<?php
    // Redirect if not logged-in
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    // Check if the user isn't logged in
    if (!isset($_SESSION["user"])) {
        // They are; redirect them to the main page
        header("Location: https://" . $_SERVER['SERVER_NAME'] . "/login.php?from=" . $_SERVER['REQUEST_URI']);
        die();
    }
?>

<html>
    <head>
        <title>Simple Filehost</title>

        <!-- Stylesheets -->
        <link rel="stylesheet" href="/assets/css/main.css">

        <!-- Scripts -->
        <script src="https://kit.fontawesome.com/56b17fd047.js" crossorigin="anonymous"></script>
        <script src="/assets/js/jquery-3.6.3.min.js"></script>
        <script src="/assets/js/tools.js"></script>
        <script src="/assets/js/redirect.js"></script>
    </head>
    <body>
        <?php require $_SERVER["DOCUMENT_ROOT"] . "/php/internal/header.php"; ?>
        <div class="main">
            <div class="main-body">
                <div class="path">
                    <?php
                        // Get the path to show
                        $path = $_POST["path"];
                        if (substr($path, 0, 1) !== "/") { $path = "/" . $path; }

                        // Show the root always
                        // echo("<span class=\"path-elem\"><i class=\"fa-solid fa-hard-drive fa-xl\" style=\"color: #ffffff;\"></i></span>");
                        echo("<span class=\"path-elem\"><i class=\"fa-solid fa-hard-drive fa-xl\" style=\"margin-top: auto; margin-bottom: auto;\"></i></span>");
                    ?>
                </div>
                <div class="files">
                    
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </body>
</html>

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
        <script src="/assets/js/jquery-3.6.3.min.js"></script>
        <script src="/assets/js/tools.js"></script>
    </head>
    <body>
        <?php require $_SERVER["DOCUMENT_ROOT"] . "/php/internal/header.php"; ?>
        <div class="main">
            <div class="main-body">
                <div class="path">
                    
                </div>
                <div class="files">
                    <?php require $_SERVER["DOCUMENT_ROOT"] . "/php/internal/files.php"; ?>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </body>
</html>

<?php
/* FILES.php
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 18:41:29
 * Last edited:
 *   21 Feb 2023, 19:06:31
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Implements the logic for querying the files and building a neat table.
**/

// Note: the header asserts that the session is started and the user already logged-in


/***** CONSTANTS *****/
/// Defines mappings of extensions to icons






/***** FUNCTIONS *****/
// Function that recursively searches a directory to construct the table.
function construct_table_from_dir($path, $indent = 20) {
    // Scan the directory
    $entries = scandir($path);

    // Iterate over the entries
    $alt = false;
    foreach ($entries as $entry) {
        // Skip meta directories
        if ($entry === "." || $entry == "..") { continue; }

        // List it
        echo(str_repeat(" ", $indent) . "<div class=\"files-entry files-entry-" . ($alt ? "white" : "grey") . "\">" . $entry . "</div>");

        // Alternate the alt for the colours
        $alt = !$alt;
    }
}



// Show it
construct_table_from_dir($_SERVER["DOCUMENT_ROOT"] . "/");

?>

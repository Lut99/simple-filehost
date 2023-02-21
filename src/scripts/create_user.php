<?php
/* CREATE USER.php
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 16:25:29
 * Last edited:
 *   21 Feb 2023, 16:29:59
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Simple file for creating password files.
**/


// Read the password
`/bin/stty -echo`;
$password = readline("Password to hash: ");
`/bin/stty echo`;

// Hash it
$hash = password_hash($password, PASSWORD_DEFAULT);

// Write it to stdout
echo("\n\n" . $hash . "\n");

// Done!

?>

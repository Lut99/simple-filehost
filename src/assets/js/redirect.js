/* REDIRECT.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 19:20:11
 * Last edited:
 *   21 Feb 2023, 19:21:19
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Contains code for redirecting the main page to the same page, but with
 *   the path as POST.
**/

$(function() {
    // Check if the path is there
    const params_raw = window.location.search;
    const params = new URLSearchParams(params_raw);
    if (params.has("path")) {
        
    }
})

/* REDIRECT.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 19:20:11
 * Last edited:
 *   22 Feb 2023, 09:24:37
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
        // Alright redirect to the main one
        console.debug("Redirecting to same page with POST path (" + params.get("path") + ")");
        redirect_post("/", { path: params.get("path") })
    }
})

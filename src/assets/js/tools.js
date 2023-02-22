/* TOOLS.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 15:26:52
 * Last edited:
 *   22 Feb 2023, 09:26:46
 * Auto updated?
 *   Yes
 *
 * Description:
 *   Defines convenient functions used across javascript files.
**/


/***** TOOLS *****/
// Takes a string, and ensures it is a valid JQuery ID.
// 
// Essentially only prefixes '#' if the ID doesn't already start with it.
// 
// # Arguments
// - `id`: The identifier to resolve.
// 
// # Returns
// The same identifier, possibly prefixed with '#' if it did not already.
function resolve_id(id) {
    // Ensure it is a string
    if (typeof id !== 'string' && !(id instanceof String)) {
        id = String(id);
    }

    // Prefix it if necessary
    if (!id.startsWith("#")) {
        return "#" + id;
    } else {
        return id;
    }
}



// Redirect this page to another but with POST.
// 
// This function is a bit indirect in that this is done using a form. Inconvenient but it works.
// 
// # Arguments
// - `url`: The URL to redirect to.
// - `post`: Any post arguments to send with the request.
function redirect_post(url, params) {
    // Create a form that can send what we want
    var form = document.createElement("form"); 
    $(form).attr("action", url).attr("method", "post").attr("enctype", "multipart/form-data");

    // We add an input per parameter, to trick the browser into sending them
    Object.entries(params).forEach(entry => {
        const [key, value] = entry;

        // Create the input and add it to the form
        var input = document.createElement("input");
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

    // Now we run the thingamabob
    document.body.appendChild(form);
    form.submit();
    // document.body.removeChild(form);

    // I think this should not happen? Or maybe only if the form submission fails
    console.error("Failed to submit redirect form");
    return false;
}

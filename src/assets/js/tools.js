/* TOOLS.js
 *   by Lut99
 *
 * Created:
 *   21 Feb 2023, 15:26:52
 * Last edited:
 *   21 Feb 2023, 15:30:52
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

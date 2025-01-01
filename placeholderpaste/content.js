/*let old;
document.addEventListener("focusin", (event) => {

    // Check if the focused element is an input field
    if (target.tagName === "INPUT") {
        const target = event.target;
        if (old == target) {
            return;
        }
        const placeholder = target.getAttribute("placeholder");

        // If the input has a placeholder, alert it
        if (placeholder) {
            alert(`This input's placeholder is: "${placeholder}"`);
        }
    }
    old = target;
});*/

// Listen for keypress event to trigger alert with placeholder
document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.code === "Space") {
        const activeElement = document.activeElement;

        // Check if the active element is an input field
        if (activeElement && activeElement.tagName === "INPUT") {
            const placeholder = activeElement.getAttribute("placeholder");

            // Alert the placeholder if it exists
            if (placeholder) {
                activeElement.value = placeholder
                //alert(`Active input's placeholder is: "${placeholder}"`);
            } else {
                alert("Active input has no placeholder.");
            }
        } else {
            console.log("No input is currently focused.");
            //alert("No input is currently focused.");
        }
    }
});

// script.js
document.getElementById("show-more-button").addEventListener("click", function() {
    const hiddenContent = document.querySelector(".hidden-content");
    const buttonText = document.getElementById("show-more-button").textContent;

    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        document.getElementById("show-more-button").textContent = "Show Less";
    } else {
        hiddenContent.style.display = "none";
        document.getElementById("show-more-button").textContent = "Show More";
    }
});
// script.js
// Add this script at the end of the JavaScript file (script.js)

document.getElementById("back-button").addEventListener("click", function() {
    // Navigate back to the previous page
    window.history.back();
});

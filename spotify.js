const form = document.getElementById("nameform");
const nameInput = document.getElementById("name");
const submitButton = document.querySelector(".submit");
const radioButtons = document.querySelectorAll(".choices");

submitButton.addEventListener("click", () => {
    // Get the name input and ensure it contains only letters and spaces, then convert to uppercase
    const name = nameInput.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();

    // Check if name is entered
    if (!name) {
        alert("Please enter your name. Names must contain letters only");
        return;
    }
    
    // Get the selected radio button value
    const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);

    // Check if a radio button is selected
    if (!selectedRadio) {
        alert("Please select your Spotify Wrapped range.");
        return;
    }
    console.log("Selected Radio:", selectedRadio.value);

    // Save data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("selectedRadio", selectedRadio.value);
    // Redirect to result page
    window.location.href = "result.html";
});

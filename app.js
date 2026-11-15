/**
 * File Name: app.js
 * Name: Mapalo, Clark James A./Mapalo, Daniela Fritz A.
 * Section and Course: BSIT - 1M
 * PROGRAMMING 01 Week 10/Laboratory - 10
 * Purpose: Reads the name and age when the button is clicked, validates
 *          them, and writes a message into the page.
 */


const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

/**
 * Purpose:    Checks the name and age, then builds the message to show.
 * Parameters: name    {string} - text from the name box
 *             ageText {string} - text from the age box
 * Returns:    {object} { ok: boolean, message: string }
 */
function buildResult(name, ageText) {
    const cleanName = name.trim();

    
    if (cleanName === "") {
        return { ok: false, message: "Please enter your name." };
    }
     if (/\d/.test(cleanName)) {
        return { ok: false, message: "Error: please put a correct name." };
    }
    if (ageText === "") {
        return { ok: false, message: "Please enter your age." };
    }

    const age = Number(ageText);
    if (!Number.isInteger(age) || age < 0 || age > 120) {
        return { ok: false, message: "Age must be a whole number from 0 to 120." };
    }

    return { ok: true, message: `Hello, ${cleanName}! Next year you will be ${age + 1}.` };
}

/**
 * Purpose:    It will run once the button is clicked this reads both inputs and
 *             writes the result into the page.
 */
function showResult() {
    const outcome = buildResult(nameInput.value, ageInput.value);

    result.textContent = outcome.message;
    result.className = outcome.ok ? "success" : "error";
}

// Connect the button click to the function
submitBtn.addEventListener("click", showResult);

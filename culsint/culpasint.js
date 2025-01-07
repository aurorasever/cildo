function checkPasswordStatus(text) {
    if (!text.includes("invalid password")) {
        console.log("Password is valid.");
    } else {
        console.log("Invalid password.");
    }
}

// Test cases
checkPasswordStatus("Your login attempt was successful.");
checkPasswordStatus("Your login attempt failed: invalid password.");

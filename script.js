function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthMeter = document.getElementById("strengthMeter");
    const feedback = document.getElementById("feedback");
    const suggestionsList = document.getElementById("suggestionsList");
    const suggestions = suggestionsList.children;

    let strength = 0;

    // Password strength criteria
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const minLength = password.length >= 8;

    if (minLength) strength++;
    if (hasUppercase) strength++;
    if (hasLowercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    // Update strength meter and feedback based on strength
    switch (strength) {
        case 0:
        case 1:
            strengthMeter.style.backgroundColor = "#ff4d4d";
            feedback.textContent = "Very Weak";
            feedback.className = "feedback weak";
            break;
        case 2:
        case 3:
            strengthMeter.style.backgroundColor = "#ffcc00";
            feedback.textContent = "Medium";
            feedback.className = "feedback medium";
            break;
        case 4:
        case 5:
            strengthMeter.style.backgroundColor = "#4caf50";
            feedback.textContent = "Strong";
            feedback.className = "feedback strong";
            break;
    }

    strengthMeter.style.width = (strength / 5) * 100 + "%";

    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        switch (suggestion.textContent.trim()) {
            case "Minimum 8 characters":
                suggestion.classList.toggle("valid", minLength);
                suggestion.classList.toggle("invalid", !minLength);
                break;
            case "Include at least one uppercase letter":
                suggestion.classList.toggle("valid", hasUppercase);
                suggestion.classList.toggle("invalid", !hasUppercase);
                break;
            case "Include at least one lowercase letter":
                suggestion.classList.toggle("valid", hasLowercase);
                suggestion.classList.toggle("invalid", !hasLowercase);
                break;
            case "Include at least one number":
                suggestion.classList.toggle("valid", hasNumber);
                suggestion.classList.toggle("invalid", !hasNumber);
                break;
            case "Include at least one special character (e.g., @, #, $, etc.)":
                suggestion.classList.toggle("valid", hasSpecialChar);
                suggestion.classList.toggle("invalid", !hasSpecialChar);
                break;
        }
    }
}

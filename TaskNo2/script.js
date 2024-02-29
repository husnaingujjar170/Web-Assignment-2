
function validateSignInForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '') {
        alert('Please enter a username');
        return false;
    }

    if (password === '') {
        alert('Please enter a password');
        return false;
    }

    if (username.length < 4 || username.length > 20) {
        alert('Username must be between 4 and 20 characters');
        return false;
    }

    if (password.length < 6 || password.length > 20) {
        alert('Password must be between 6 and 20 characters');
        return false;
    }

    return true;
}
function validateSignUpForm() {
    var username = document.getElementById('signupUsername').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('signupPassword').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var zipCode = document.getElementById('zipCode').value.trim();
    var country = document.getElementById('country').value.trim();

    if (username === '') {
        alert('Please enter a username');
        return false;
    }

    if (email === '') {
        alert('Please enter an email');
        return false;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email');
        return false;
    }

    if (password === '') {
        alert('Please enter a password');
        return false;
    }

    if (password.length < 6 || password.length > 20) {
        alert('Password must be between 6 and 20 characters');
        return false;
    }

    if (confirmPassword === '') {
        alert('Please confirm your password');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    if (phoneNumber !== '' && !isValidPhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits)');
        return false;
    }

    if (zipCode !== '' && !isValidZipCode(zipCode)) {
        alert('Please enter a valid 5-digit zip code');
        return false;
    }

    if (country === '') { 
        alert('Please enter your country');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

function isValidZipCode(zipCode) {
    var zipRegex = /^\d{5}$/;
    return zipRegex.test(zipCode);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    if (!validateSignInForm()) {
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (!validateSignUpForm()) {
        event.preventDefault();
    }
});

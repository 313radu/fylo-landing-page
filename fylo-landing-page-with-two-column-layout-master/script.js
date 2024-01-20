
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content has been fully loaded.");
    // Add your other actions here
});

const submitBtns = document.querySelectorAll("input[type='submit']");
submitBtns.forEach(function (btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
    });
});

// Check the email
const inputEmail = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const emailInfo = document.getElementById("email-info");


submitBtn.addEventListener("click", function () {
    // Trim the input to remove leading and trailing spaces
    let inputValue = inputEmail.value.trim();

    if (inputValue.includes("@gmail.com") || inputValue.includes("@yahoo.com")) {
        // Clear the email-info content if the email is valid
        emailInfo.innerHTML = "";
    } else {
        // Provide user feedback if the email is not valid
        emailInfo.innerText = "Please enter a valid email address.";
        inputEmail.style.border = "2px solid hsl(339, 76%, 74%)";
    }
});

// Check Second email
const inputEmail2 = document.getElementById("email-2");
const submitBtn2 = document.getElementById("submitBtn-2");
const emailInfo2 = document.getElementById("email-info-2");

submitBtn2.addEventListener("click", function () {
    let inputValue2 = inputEmail2.value.trim();

    if (inputValue2.includes("@gmail.com") || inputValue2.includes("@yahoo.com")) {
        emailInfo2.innerHTML = "";
    } else {
        emailInfo2.innerHTML = "Please check your email";
        inputEmail2.style.border = "2px solid hsl(339, 76%, 74%)";
    }
});




  

const password_result = document.querySelector("#password"); //what the user input
const password_submit_button = document.querySelector("#password_submit"); //the submit button
const output_result = document.querySelector("#result"); //will appear when wrong password was input
const output_result_field = document.querySelector("#result_field"); //will appear when wrong password was input
const wrong_buzzer = new Audio("../sounds/incorrect_buzzer.mp3");
const right_buzzer = new Audio("../sounds/correct_buzzer.mp3");
password_submit_button.addEventListener("click", function() {
    if (password_result.value.toLowerCase() == "05sc")
    {
        right_buzzer.play();
        output_result_field.textContent = "CORRECT";
        output_result_field.style.color = "green";
        output_result.style.display = "block";
        setTimeout(function() {
            location.assign("../pages/documentation.html");
        }, 1500);
    }
    else
    {
        output_result_field.textContent = "INCORRECT";
        output_result_field.style.color = "red";
        output_result.style.display = "block";
        wrong_buzzer.play();
        setTimeout(function() {
            password_result.value = "";
            output_result.style.display = "none";
        }, 2000);
    }
});

document.querySelector("#result").innerHTML.style

const icon =  document.getElementById("icon");
const message = document.getElementById("message");
const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener('input', () => {

    if(password.value.length > 0){
        message.style.visibility = "visible";
    }else{
        message.style.visibility = "hidden";
        password.style.borderColor = "white";
    }

    if(password.value.length < 5){
        strength.innerHTML = "weak";
        password.style.borderColor = "orangered";
        message.style.color = "orangered";
    }
    else if(password.value.length > 4 && password.value.length < 9){
        strength.innerHTML = "medium";
        password.style.borderColor = "yellow";
        message.style.color = "yellow";
    }
    else if(password.value.length > 8){
        strength.innerHTML = "strong";
        password.style.borderColor = "#26d730";
        message.style.color = "#26d730";
    }
});

icon.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }else{
        password.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});

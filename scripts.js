email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    } else {
        
    }
}

email.addEventListener("change", isItMail)
email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    }
}

email.addEventListener("change", isItMail)
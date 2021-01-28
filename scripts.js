email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    } else {
        console.log("notmail")
    }
}

email.addEventListener("change", isItMail)
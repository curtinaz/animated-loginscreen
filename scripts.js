email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    } else {
        email.style="border: 0.5px #b9b9b9 solid;"
    }
}

email.addEventListener("change", isItMail)
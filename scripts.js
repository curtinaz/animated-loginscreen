email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    } else {
        email.style="border: 1px #ff0000 solid;"
    }
}

email.addEventListener("change", isItMail)
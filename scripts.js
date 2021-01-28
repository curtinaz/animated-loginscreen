email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        console.log("email")
    } else {
        email.style="border: 1px #c51212 solid;"
    }
}

email.addEventListener("change", isItMail)
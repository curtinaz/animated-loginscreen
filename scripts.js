email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        email.style=""
    } else {
        email.style="border: 2px #ff0000 solid;"
    }
}

email.addEventListener("change", isItMail)
var email = document.querySelector("#emailInput").value

email.addEventListener("change", isItMail)

function isItMail() {
    console.log("change")
}
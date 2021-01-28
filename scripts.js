var email = document.querySelector("#emailInput").value

email.value.addEventListener("change", isItMail)

const isItMail = () => {
    console.log("keydown")
}
email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        email.style="";
        email.placeholder="E-mail *";

        if(email.value.search(@))

    } else {
        email.style="border: 2px #ff0000 solid;"
        email.placeholder="O e-mail não pode ficar em branco!";
    }
}

email.addEventListener("change", isItMail)
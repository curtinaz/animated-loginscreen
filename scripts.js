email = document.querySelector("#emailInput");

const isItMail = () => {
    if (email.value!="") {
        email.style="";
        email.placeholder="E-mail *";

        var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
        var check=/@[w-]+./;
        var checkend=/.[a-zA-Z]{2,3}$/;
        if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
            console.log("false");
        }
        else {
            console.log("false");
        }

    } else {
        email.style="border: 2px #ff0000 solid;"
        email.placeholder="O e-mail não pode ficar em branco!";
    }
}

email.addEventListener("change", isItMail)
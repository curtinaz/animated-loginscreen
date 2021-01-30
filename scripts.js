email = document.querySelector("#emailInput");

const isItMail = (mail) => {
    if (email.value!="") {
        email.style="";
        email.placeholder="E-mail *";

        var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
        var check=/@[w-]+./;
        var checkend=/.[a-zA-Z]{2,3}$/;
        if(((mail.search(exclude) != -1)||(mail.search(check)) == -1)||(mail.search(checkend) == -1)){return false;}
        else {return true;}

    } else {
        email.style="border: 2px #ff0000 solid;"
        email.placeholder="O e-mail não pode ficar em branco!";
    }
}

email.addEventListener("change", isItMail)
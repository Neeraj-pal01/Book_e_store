function formValidate() {
    var name = document.myform.fullName.value;
    var email = document.myform.email.value;
    var Age = document.myform.age.value;
    var pass = document.myform.password.value;
    var gender= document.myform.gender.value;

    if (name == null || name == '') {
        document.getElementById('changeName').style.display = "block"
        document.getElementById("fullName").style.border = "2px solid red"
        return false;
    }
    else if (pass == null || pass == '' || pass.length <= 6) {
        document.getElementById('changePass').innerText = "Minimum 6 character required";
        document.getElementById('changePass').style.display = "block"
        document.getElementById("password").style.border = "2px solid red"
        return false;
    }
    else if (Age == null || Age == '') {
        document.getElementById('changeAge').style.display = "block"
        document.getElementById("age").style.border = "2px solid red"
        return false
    }
    else if (pass.indexOf('@')==0) {
        document.getElementById('changePass').innerText = "@ is Mandatory";
        document.getElementById('changePass').style.display = "block"

        return false      
    }
    else if (gender=='') {
        document.getElementById('changePass').innerText = "@ is Mandatory";
        return false      
    }
    else if (email.indexOf("@") == 0) {
        document.getElementById('changeMail').innerText = "Enter a valid Mail which includes @";
        document.getElementById("email").style.border = "2px solid red"
        return false;
    }
    else {
        alert("register succesfully");
             open("anime.html");

    }
}
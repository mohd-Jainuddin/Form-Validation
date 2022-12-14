let Submit = document.getElementById("submit");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errormsg = document.getElementsByClassName("error")
let failIcon = document.getElementsByClassName("fail-icon");
let successIcon = document.getElementsByClassName("success-icon");
let form = document.getElementById("form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    erorrHandling(userName,0,"UserName can not be blank!");
    erorrHandling(email,1,"Email can not be blank!");
    erorrHandling(password,2,"Password can not be blank!");
    if (email.value != "" && userName.value != "" && password.value != "") {
      document.getElementById("topMsg").innerHTML = "Thanks For Submiting Your Details!";
      setTimeout(() =>{
        document.getElementById("topMsg").innerHTML = "";
        userName.value = "";
        email.value = "";
        password.value = "";
        successIcon[0].style.opacity = "0";
        successIcon[1].style.opacity = "0";
        successIcon[2].style.opacity = "0";
      },3000);
    }
})

let erorrHandling = (id,index,msg) => {
    if (id.value.trim() == "" || id.value == " ") {
    errormsg[index].innerHTML = msg;
    failIcon[index].style.opacity = "1";
    successIcon[index].style.opacity = "0";
    } else {
    errormsg[index].innerHTML = "";
    failIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
    } 
}





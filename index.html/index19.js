function regi(){
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("passowrd").value;
    var names=document.getElementById("name").value;
       if(mail=="janardhankarampudi@gmail.com")
       {
        window.location.href="index1.html";
        confirm("Register succesfull");
       }
       else{
        window.confirm("not Register");
        return;
       }
     }
    
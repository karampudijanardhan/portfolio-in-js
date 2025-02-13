function sub(){
    var mail=document.getElementById("email").value;
    var nam=document.getElementById("name").value;
    var mess=document.getElementById("message").value;
       if(mail==="janardhankarampudi@gmail.com")
       {
        window.location.href="index10.html";
        confirm("sumbit succesfull");
       }
       else{
        window.confirm("not succesfully");
        return;
       }
     }
    
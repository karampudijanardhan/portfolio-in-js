function res(){
    var pass=document.getElementById("passowrd").value;
    var con=document.getElementById("confirm").value;
       if(pass==""&&con=="")
       {
        window.location.href="index1.html";
        confirm("Rest succesfully");
       }
       else{
        window.confirm("not succesfully");
        return;
       }
     }
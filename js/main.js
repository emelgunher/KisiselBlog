

function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="emelgunher" && password=="1234") { window.location="index.html"; done=1; }
if (username=="member2" && password=="password2") { window.location="page2.html"; done=1; }
if (username=="member3" && password=="password3") { window.location="page3.html"; done=1; }
if (done==0) { alert("yanlış şifre!"); }
    if(done==1){alert ("Başarılı!");}
}
// End -->
>
localStorage.setItem("username","rvce")
localStorage.setItem("password","rvce")

function verify(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var un =localStorage.getItem("username");
    var pas = localStorage.getItem("password");

    if(username==un && password==pas){
        alert("authentication done");
    }
    else{
        alert("authentication failed")
    }
}

//registering service worker
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js')
    .then((reg)=>console.log("service worker registered",reg))
    .catch((err)=> console.log("service worker not working",err))
}
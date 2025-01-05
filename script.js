function sendmail(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_g9v62hp", "template_kwmge4m",parms).then(alert("email verstuurd"));
}

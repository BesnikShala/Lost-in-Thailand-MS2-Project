(function () {
    emailjs.init("user_Zy0xBkr1AacpwhqOvR9li");
})();

function sendEmail(myform) {
    emailjs.send("service_xutkrvr", "template_lgrecy3", {
        "from_inputFname": myform.inputFname.value,
        "from_inputLname": myform.inputLname.value,
        "from_email": myform.email.value,
        "from_inputPhone": myform.inputPhone.value,
        "from_messageArea": myform.messageArea.value,
    })
    .then(
        function(response) {
            startModal();
            refresh();
            console.log("Email Successfully Sent", response);
        },
        function(error) {
            console.log("Error, Email Not Sent!", error);
        }
    );
    return false;
}
 // Reset form after submit
function refresh() {
    document.getElementById("myform").reset();
}
  // pop up modal on submit
function startModal() {
    const modal = document.getElementById("mymodal");

     modal.classList.add("show-modal");

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

   
}


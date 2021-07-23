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
            refresh();
            console.log("Email Successfully Sent", response);
        },
        function(error) {
            console.log("Error, Email Not Sent!", error);
        }
    );
    return false;
}

function refresh() {
    document.getElementById("myform").reset();
}
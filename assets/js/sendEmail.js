function sendEmail(contactForm) {
    emailjs.send("service_xutkrvr", "template_lgrecy3", {
        "from_inputFname": myform.inputFname.value,
        "from_inputLname": myform.inputLname.value,
        "from_email": myform.email.value,
        "from_inputPhone": myform.inputPhone.value,
        "from_messageArea": myform.messageArea.value,
    })
}
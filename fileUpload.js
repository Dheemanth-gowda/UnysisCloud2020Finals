function SignUp(form) {
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    // var fields = $(".ss-item-required")
    //     .find("select, textarea, input").serializeArray();
    // var isValidForm = true;
    // $(this.form).find(':input[required]:visible').each(function() {
    //     if (!this.value.trim()) {
    //         isValidForm = false;
    //     }
    // });

    if (password === repassword) {
        if (form.termsCheck.checked == true) {
            alert("Account created successfully"); // Anoop Pakki will have to add the redirecting page.
            return false;
        } else {
            alert("Please agree to the terms to continue")
            return false;
        }
    } else if (password != repassword) {
        alert("password dont match please input same password")
    }
}
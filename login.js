var attempt = 3;
//NOTE: PASSWORD: dhee123 USERNAME:dheemanth
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "dheemanth" && password == "dhee123") {
        alert("Login successfully");
        window.location = "success.html"; // Anoop Pakki will have to add the redirecting page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling has been kept if not required 
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}


//This functionality @anopp not sure will work untill it procceds.If it doesnt i will change it
$(function() {

    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#username').val(localStorage.usrname);
        $('#pass').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#username').val('');
        $('#pass').val('');
    }

    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // save username and password
            localStorage.usrname = $('#username').val();
            localStorage.pass = $('#pass').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});
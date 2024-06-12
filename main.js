function waitlist() {
    window.location = "waitlist.html";
}


window.onload=testFunction;
function testFunction(){
document.getElementById("submit").onclick = run;
}

function run(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const notifications = document.querySelector('input[name="notifications"]:checked').value;

    alert("You have submitted the following information:\nName: " + name + "\nEmail: " + email + "\nNotifications: " + notifications);
}
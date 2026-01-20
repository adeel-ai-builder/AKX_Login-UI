function login() {
    let u = document.getElementById("user").value.trim();
    let p = document.getElementById("pass").value.trim();
    let msg = document.getElementById("msg");

    if (u === "" || p === "") {
        msg.style.color = "#ff8080";
        msg.innerText = "❌ Fields cannot be empty";
    } 
    else if (p.length < 6) {
        msg.style.color = "#ffcc66";
        msg.innerText = "⚠ Password must be at least 6 characters";
    } 
    else {
        msg.style.color = "#66ffcc";
        msg.innerText = "✅ Login Successful";
    }
}

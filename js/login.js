document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault(); // it prevents the site from reloading after click(reloading is default behavior)

  const phoneNumber = document.getElementById("phone-number");
  const pin = document.getElementById("pin-code");

  if (phoneNumber.value === "01999999999" && pin.value === "1234") {
    window.location.href = "/home.html"
  } else {
    alert("Error! Invalid number or Password. Try again");
  }
phoneNumber.value = '';
pin.value = '';
});

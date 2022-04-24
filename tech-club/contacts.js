

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");


// Listen for a Submit
document.querySelector(".right").addEventListener("submit", submitForm);


function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, phone, message);

  saveContactInfo(name, email, phone, message);

  document.querySelector(".right").reset();
}

  // Save infos to Firebase
function saveContactInfo(name, email, phone,message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    phone:phone,
    message: message,
  });
}

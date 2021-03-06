
function raditParoli() {
  let x = document.getElementById("password"); //Paroles ievades lauks
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validationemail()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var email_error = document.getElementById("email_error");
    var text = document.getElementById("text");
    var checkBox = document.getElementById("myCheck");
    var valid_email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (checkBox.checked == false) {
        /* Checkbox is unchecked */
        text.innerHTML = "You must accept the terms and conditions";
        text.style.display = "unset";
        text.style.color = "#ff0000";

    } else {
        /* checkbox is checked */
        text.innerHTML = "";
        text.style.display = "unset";
        text.style.color = "#ff0000";
    }

    if (email.length === 0) {
        /* email is empty */
        email_error.innerHTML = "Email address is required";
    } else if (!email.match(valid_email)) {
        /* email is invalid */
        form.classList.remove("valid");
        form.classList.add("invalid");
        email_error.innerHTML = "Please provide a valid e-mail address";
        email_error.style.display = "unset";
        email_error.style.color = "#ff0000";

    } else if (email.endsWith('.co')) {
        /* email ends with .co */
        form.classList.remove("valid");
        form.classList.add("invalid");
        email_error.innerHTML = "We are not accepting subscriptions from Colombia";
        email_error.style.display = "unset";
        email_error.style.color = "#ff0000";

    } else {
        /* email is valid */
        form.classList.remove("valid");
        form.classList.add("invalid");
        email_error.innerHTML = "";
        email_error.style.display = "unset";
        email_error.style.color = "#ff0000";
    }

}

// Initialize and add the map
function initMap() {
  // Pils??tas atra??an??s vieta
  const Riga = { lat: 56.946285, lng: 24.105078};
  // Map?? centr??ta R??ga
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Riga,
  });
  // Poz??cija nor??d??ta uz R??gu
  const marker = new google.maps.Marker({
    position: Riga,
    map: map,
  });
}

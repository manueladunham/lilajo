function addressFunction() {
    if (document.getElementById("sameAddress").checked) {
        document.getElementById("billingAddress").value = document.getElementById("shipAddress").value;
        document.getElementById("billingAddress2").value = document.getElementById("shipAddress2").value;
        document.getElementById("billingState").value = document.getElementById("shipState").value;
        document.getElementById("billingZip").value = document.getElementById("shipZip").value;
    } else {
        document.getElementById("billingAddress").value = "";
        document.getElementById("billingAddress2").value = "";
        document.getElementById("billingState").value = "";
        document.getElementById("billingZip").value = "";
    }
}

(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())
window.onload = function() {
    var shipBillForm = document.getElementById('shipBillForm');

    var shipAddressInput = shipBillForm.shipAddress;
    var shipAddress2Input = shipBillForm.shipAddress2;
    var shipStateInput = shipBillForm.shipState;
    var shipZipInput = shipBillForm.shipZip;
    var shippingElements = [shipAddressInput, shipAddress2Input, shipStateInput, shipZipInput];

    var sameAddressCheckbox = shipBillForm.sameAddress;

    var billingAddressInput = shipBillForm.billingAddress;
    var billingAddress2Input = shipBillForm.billingAddress2;
    var billingStateInput = shipBillForm.billingZip;
    var billingZipInput = shipBillForm.billingstate;
    var billingElements = [billingAddressInput, billingAddress2Input, billingStateInput, billingZipInput];

    sameAddressCheckbox.addEventListener("change", function(event) {
        if (sameAddressCheckbox.checked) {
            billingAddressInput.value = shipAddressInput.value;
            billingAddress2Input.value = shipAddress2Input.value;
            billingStateInput.value = shipStateInput.value;
            billingZipInput = shipZipInput.value;
            for (var i=0; i < billingElements.length; i++) {
                billingElements[i].setAttribute("readonly","");
            }
        } else {
            for (var i = 0; i < billingElements.length; i++) {
                billingElements[i].value = "";
                billingElements[i].removeAttribute("readonly");
            } 
        }
    })
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
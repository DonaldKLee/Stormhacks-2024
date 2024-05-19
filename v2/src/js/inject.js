// alert("hello, world");

// Check boxes
function changeCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkboxes.checked) {
            // alert("eheheh");
        } else {
            // alert("aaaa");
        }
    });
}

changeCheckbox();


// alert("hello, world");


function changeTelephone() {
    const telInputs = document.querySelectorAll('input[type="tel"]');
    let telInputCounter = 0;

    telInputs.forEach(function (telInput) {
        // Change the input type to range and set min/max values
        telInput.type = "range";
        telInput.min = 1000000000;
        telInput.max = 9999999999;

        // Create a new span element to display the value
        const telValue = document.createElement("span");
        telValue.id = "telInput" + telInputCounter;
        telValue.innerHTML = telInput.value;

        // Insert the span element after the input element
        telInput.parentNode.insertBefore(telValue, telInput.nextSibling);

        // Add an event listener to update the span value when the range input changes
        telInput.addEventListener("input", function (event) {
            document.getElementById("telInput" + telInputCounter).innerHTML = event.target.value;
        });

        // telInputCounter++; // Increment the counter
    });
}

changeTelephone();
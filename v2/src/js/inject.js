// alert("hello, world");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function changeCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (checkbox.unchecked) {
                checkbox.style.opacity = 0;
            } else {
                checkbox.style.opacity = 1; // Reset opacity if unchecked
            }
        })
    });

}

const dates = document.querySelectorAll('input[type="date"]');

function selectDate() {
    dates.forEach(function (date) {
        var buttonDate = document.createElement('button');
        buttonDate.textContent = 'Generate Date';

        function changeDate() {
            alert("AHAHAH");
            var randomDateAsInt = getRandomNumber(0, 99999999999);

            function getRandomNumber(min, max) {
                return Math.random() * (max - min) + min;
            }

            date.value = new Date(randomDateAsInt * 1000).toISOString().split('T')[0];
        }

        buttonDate.addEventListener("click", changeDate);
        date.parentNode.insertBefore(buttonDate, date.nextSibling);
        date.setAttribute('readonly', 'readonly');
    });
}

changeCheckbox()
changeDate()

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
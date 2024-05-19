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


function locationMap() {
        var mapContainer = document.createElement('div');
        mapContainer.style.position = 'fixed';
        mapContainer.style.bottom = '0';
        mapContainer.style.right = '0';
        mapContainer.style.width = '300px';
        mapContainer.style.height = '200px';
        mapContainer.style.zIndex = '10000';
        mapContainer.style.border = '2px solid black';
    
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4057053968256!2d-74.04585178459958!3d40.68924934227715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18f34c7bbb%3A0x7c9b5df24ef28f3e!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1645262968844!5m2!1sen!2sus';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
    
        mapContainer.appendChild(iframe);
        document.body.appendChild(mapContainer);
}

// locationMap();
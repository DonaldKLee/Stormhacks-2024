// alert("hello, world");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function changeCheckbox() {
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
selectDate()

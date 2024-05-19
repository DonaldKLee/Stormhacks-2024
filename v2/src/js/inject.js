// alert("hello, world");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');


function changeCheckbox() {
    checkboxes.forEach(function (checkbox) {
        if (checkboxes.checked) {
            checkbox.style.opacity = '0';
        }
    });
}

changeCheckbox();

// alert("hello, world");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');


function changeCheckbox() {
    checkboxes.forEach(function (checkbox) {
        if (checkboxes.checked) {
            alert("checked");
        } else {
            alert("You didn't check it! Let me check it for you.");
        }
    });
}

changeCheckbox();
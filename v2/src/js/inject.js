console.log("testing server");
fetch("http://localhost:3000/")
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
    alert(data);
  });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received message:", request.data);
  // Process the received data here
});

(async () => {
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  // do something with response here, not outside the function
  console.log(response);
})();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function changeCheckbox() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (checkbox.unchecked) {
        checkbox.style.opacity = 0;
      } else {
        checkbox.style.opacity = 1; // Reset opacity if unchecked
      }
    });
  });
}

const dates = document.querySelectorAll('input[type="date"]');

//date selection --> button generative
function selectDate() {
  dates.forEach(function (date) {
    var buttonDate = document.createElement("button");
    buttonDate.textContent = "Generate Date";

    function changeDate() {
      var randomDateAsInt = getRandomNumber(0, 99999999999);

      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

      date.value = new Date(randomDateAsInt * 1000).toISOString().split("T")[0];
    }

    buttonDate.addEventListener("click", changeDate);
    date.parentNode.insertBefore(buttonDate, date.nextSibling);
    date.setAttribute("readonly", "readonly");
  });
}

//telephone type --> slider
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
      document.getElementById("telInput" + telInputCounter).innerHTML =
        event.target.value;
    });

    // telInputCounter++; // Increment the counter
  });
}

//unnecessary password requirements
function changePassword() {
  const passes = document.querySelectorAll('input[type="password"]');
  passes.forEach(function (pass) {
    var buttonPassCheck = document.createElement("button");
    buttonPassCheck.textContent = "Test Password";

    buttonPassCheck.addEventListener("click", checkPass);
    pass.parentNode.insertBefore(buttonPassCheck, pass.nextSibling);

    function checkPass() {
      const password = pass.value;
      var passNoSpace = password.replace(/\D/g, "");
      var sumOfDigits = 0;

      for (let i = 0; i < passNoSpace.length; i++) {
        if (!isNaN(passNoSpace[i])) {
          sumOfDigits += parseInt(passNoSpace[i], 10);
        }
      }

      if (!containsWS(password)) {
        alert("Need at least two instances of whitespace in succesion!");
        event.preventDefault();
      }

      if (!isPrimeRegExp(sumOfDigits)) {
        alert("Numbers in password must add up to a prime number!");
        event.preventDefault();
      }
      if (!containsEmoji(password)) {
        alert("You need at least one emoji!");
        event.preventDefault();
      }

      function containsWS(text) {
        const reWhiteSpace = /\s{2,}/;
        return reWhiteSpace.test(text);
      }

      function isPrimeRegExp(num) {
        return !/^1?$|^(11+?)\1+$/.test("1".repeat(num));
      }

      function containsEmoji(text) {
        const emojiPattern =
          /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
        return emojiPattern.test(text);
      }
    }
  });
}

function locationMap() {
  var mapContainer = document.createElement("div");
  mapContainer.style.position = "fixed";
  mapContainer.style.bottom = "0";
  mapContainer.style.right = "0";
  mapContainer.style.width = "300px";
  mapContainer.style.height = "200px";
  mapContainer.style.zIndex = "10000";
  mapContainer.style.border = "2px solid black";

  var iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4057053968256!2d-74.04585178459958!3d40.68924934227715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18f34c7bbb%3A0x7c9b5df24ef28f3e!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1645262968844!5m2!1sen!2sus";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  mapContainer.appendChild(iframe);
  document.body.appendChild(mapContainer);
}

function modifyTextInput() {
  const textInputs = document.querySelectorAll('input[type="text"]');

  textInputs.forEach(function (textInput) {
    // Change the input type to range and set min/max values
    textInput = document.getElementById("");
  });

  textInputs.forEach(function (textInput) {
    // Change the input type to range and set min/max values
    // textInput
    // // Create a new span element to display the value
    // const telValue = document.createElement("span");
    // telValue.id = "telInput" + telInputCounter;
    // telValue.innerHTML = telInput.value;
    // // Insert the span element after the input element
    // telInput.parentNode.insertBefore(telValue, telInput.nextSibling);
    // // Add an event listener to update the span value when the range input changes
    // telInput.addEventListener("input", function (event) {
    //     document.getElementById("telInput" + telInputCounter).innerHTML = event.target.value;
    // });
    // // telInputCounter++; // Increment the counter
  });
}

// idea, shrink text boxes and make it password so u cant see it
// passwords, make it not visible? or shrink it? or make it random characters to troll viewers
//  OR add mascot infront of it

//

changeCheckbox();
selectDate();
changeTelephone();
modifyTextInput();
changePassword();
// locationMap();

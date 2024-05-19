// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//       console.log('Received message:', request.data);
//       // Process the received data here
//     }
//   );

// (async () => {
//     const response = await chrome.runtime.sendMessage({greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log(response);
//   })();

function reverseLabels() {
    const labels = document.querySelectorAll('label');
    labels.forEach(function (label) {
      label.textContent = label.textContent.split('').reverse().join('');
    });
  }

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
    // Calculate the number of bunnies needed to cover the input form
    const inputWidth = pass.offsetWidth;
    const bunnyHeight = pass.offsetHeight;
    const bunnyWidth = bunnyHeight / 1.5;

    const numBunnies = Math.ceil(inputWidth / bunnyWidth / 2);

    const bunnyDiv = document.createElement("div");
    bunnyDiv.className = "bunnyPassBlocker";
    bunnyDiv.style.width = inputWidth + bunnyWidth;
    bunnyDiv.style.height = pass.offsetHeight;
    bunnyDiv.style.position = "absolute";

    // bunnyDiv.style.marginTop = -pass.offsetHeight + "px";

    // Create and attach bunny images
    for (let i = 1; i < numBunnies; i++) {
      const bunny = document.createElement("img");
      bunny.src =
        "https://raw.githubusercontent.com/DonaldKLee/Stormhacks-2024/main/v2/src/images/mascot.png";
      // bunny.style.position = "absolute";
      bunny.style.width = "50px";
      bunny.style.height = "auto";
      bunnyDiv.appendChild(bunny);
    }

    pass.parentNode.insertBefore(bunnyDiv, pass.nextSibling);

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
    // Create a div element for the map container
    var mapContainer = document.createElement("div");
    mapContainer.className = "mapContainer";
  
    // Set the styles for the map container
    mapContainer.style.position = "fixed";
    mapContainer.style.bottom = "0";
    mapContainer.style.right = "0";
    mapContainer.style.width = "300px";
    mapContainer.style.height = "200px";
    mapContainer.style.zIndex = "10000";
    mapContainer.style.border = "2px solid black";
  
    // Create an iframe element for the Google Maps embed
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4057053968256!2d-74.04585178459958!3d40.68924934227715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18f34c7bbb%3A0x7c9b5df24ef28f3e!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1645262968844!5m2!1sen!2sus";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
  
    // Append the iframe to the map container
    mapContainer.appendChild(iframe);
  
    // Append the map container to the document body
    document.body.appendChild(mapContainer);
  
    // Add a click event listener to the iframe to get the latitude and longitude
    iframe.addEventListener("load", function() {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      var mapElement = iframeDoc.querySelector("#map");
      
      mapElement.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the click event
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);
      });
    });
  }
  
  function dropdowns() {
    const dropdowns = document.querySelectorAll('select');
  
    dropdowns.forEach(function (dropdown) {
      // Create a placeholder option
      var placeholderOption = document.createElement("option");
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      placeholderOption.textContent = "Select an option";
  
      // Insert the placeholder option as the first child
      dropdown.insertBefore(placeholderOption, dropdown.firstChild);
  
      // Create a placeholder option between each existing option
      const options = dropdown.querySelectorAll('option');
      options.forEach(function (option, index) {
        if (index > 0) {
          var placeholderOption = document.createElement("option");
          placeholderOption.textContent = replaceRandomLetter(option.textContent);
          dropdown.insertBefore(placeholderOption, option);
        }
      });
    });
  }
  
  function replaceRandomLetter(text) {
    const randomIndex = Math.floor(Math.random() * text.length);
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
    return text.substring(0, randomIndex) + randomChar + text.substring(randomIndex + 1);
  }
  



function modifyTextInput() {
  const textInputs = document.querySelectorAll('input[type="text"]');

  textInputs.forEach(function (textInput) {
    // Change the input type to range and set min/max values
    textInput.type = "password";
  });
}
function buttonMovement() {
    const buttons = document.getElementsByTagName("button");
  
    for (let i = 0; i < buttons.length; i++) {
      let numClicks = 0;
  
      buttons[i].addEventListener("mouseover", function (event) {
        if (numClicks < 3) {
          let changeX = 40;
          let changeY = 80;
  
          // Button movement logic with transition
          buttons[i].style.transition = "0.3s";
          buttons[i].style.left = parseFloat(buttons[i].style.left || 0) + changeX + "px";
          buttons[i].style.top = parseFloat(buttons[i].style.top || 0) + changeY + "px";
          buttons[i].style.position = "relative";
  
          if (numClicks === 1) {
            buttons[i].style.transform = "scale(1.2)";
            buttons[i].style.opacity = "0.8";
          }
  
          numClicks++;
          event.preventDefault(); // Prevent button submission
        }
      });
    }
  }
  
// buttons.forEach(function (submitButton) {
// submitButton.disabled = true;

// let numClicks = 0;
// var changeX = 64;
// var changeY = 16;
// if (numClicks < 3) {
//     // event.preventDefault();
// } else {
//     changeX = getRandomNumber(changeX, submitButton.left);
//     changeY = getRandomNumber(changeY, submitButton.top);
//     left = "changeX px";
//     top = "changeY px";
//     submitButton.disabled = false;
// }

// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }
// });
// }

// Flag to ensure DOMContentLoaded only runs once
let isDOMContentLoadedHandled = false;

// Function to check if a URL is blacklisted
function isUrlBlacklisted(url, blacklistedSites) {
  return blacklistedSites.some((site) => url.includes(site));
}

// Retrieve blacklisted sites from Chrome storage
chrome.storage.sync.get("blacklistedSites", function (data) {
  const blacklistedSites = data["blacklistedSites"] || [];

  for (i = 0; i < blacklistedSites.length; i++) {
    if (window.location.href.includes(blacklistedSites[i])) {
      alert("This website is blacklisted");
      return;
    }
  }

//   locationMap();
  reverseLabels();
  dropdowns();
  buttonMovement(); // must be before changePassword so the button isn't modified
  changeCheckbox();
  selectDate();
  changeTelephone();
  changePassword();
  // must be after changePassword, or it will treat it like a password
  modifyTextInput();
});

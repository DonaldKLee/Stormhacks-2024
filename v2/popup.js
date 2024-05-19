let isDOMContentLoadedHandled = false; // Flag variable to track if DOMContentLoaded has been handled

document.addEventListener("DOMContentLoaded", function () {
  if (!isDOMContentLoadedHandled) {
    // Check if DOMContentLoaded has not been handled yet
    // Your code here
    // Select elements
    const blacklistForm = document.getElementById("blacklist-form");
    const blacklistInput = document.getElementById("blacklist-input");
    const blacklistedSitesList = document.getElementById("blacklisted-sites");

    // Check if the current URL matches any blacklisted sites
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      const isBlacklisted = isUrlBlacklisted(currentUrl);

      if (isBlacklisted) {
        // Disable the extension UI
        disableExtension();
      }
    });

    // Retrieve blacklisted sites from Chrome storage
    chrome.storage.sync.get("blacklistedSites", function (data) {
      const blacklistedSites = data.blacklistedSites || [];
      console.log(blacklistedSites);
      // Display the blacklisted sites in the UI
      blacklistedSites.forEach((site) => addBlacklistedSite(site));
    });

    // changes

    // Handle form submission
    blacklistForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      const siteName = blacklistInput.value.trim();
      if (siteName) {
        // Add the site to the blacklisted sites array
        chrome.storage.sync.get("blacklistedSites", function (data) {
          const blacklistedSites = data.blacklistedSites || [];
          blacklistedSites.push(siteName);
          chrome.storage.sync.set(
            { blacklistedSites: blacklistedSites },
            function () {
              // Update the UI
              addBlacklistedSite(siteName);
              // Clear the input field
              blacklistInput.value = "";
            }
          );
        });
      }
    });

    // Function to disable the extension UI
    function disableExtension() {
      blacklistForm.style.display = "none";
      blacklistedSitesList.innerHTML =
        "<p>Extension is disabled on this site.</p>";
    }

    // Function to add a blacklisted site to the UI
    function addBlacklistedSite(site) {
      const listItem = document.createElement("li");
      listItem.textContent = site;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function () {
        // Remove the site from the blacklisted sites array
        chrome.storage.sync.get("blacklistedSites", function (data) {
          const blacklistedSites = data.blacklistedSites || [];
          const index = blacklistedSites.indexOf(site);
          if (index !== -1) {
            blacklistedSites.splice(index, 1);
            chrome.storage.sync.set(
              { blacklistedSites: blacklistedSites },
              function () {
                // Update the UI
                blacklistedSitesList.innerHTML = ""; // Clear the existing list
                blacklistedSites.forEach((site) => addBlacklistedSite(site)); // Re-add the sites to the UI
              }
            );
          }
        });
      });
      listItem.appendChild(deleteButton);
      blacklistedSitesList.appendChild(listItem);
    }

    isDOMContentLoadedHandled = true;
  }
});

// document.getElementById("send").addEventListener("click", () => {
//   image = document.getElementById("file");
//   fetch("http://localhost:3000/getName")
//     .then((response) => response.text())
//     .then((data) => {
//       console.log(data);
//       const message = { data: data };
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, message);
//       });
//     });
//   // data sent to website
// });

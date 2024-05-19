document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const blacklistForm = document.getElementById("blacklist-form");
  const blacklistInput = document.getElementById("blacklist-input");
  const blacklistedSitesList = document.getElementById("blacklisted-sites");

  // Retrieve blacklisted sites from Chrome storage
  chrome.storage.sync.get("blacklistedSites", function (data) {
    const blacklistedSites = data.blacklistedSites || [];
    console.log(blacklistedSites);
    // Display the blacklisted sites in the UI
    blacklistedSites.forEach((site) => addBlacklistedSite(site));
  });

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

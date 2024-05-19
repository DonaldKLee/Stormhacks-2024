console.log("testing server");
fetch("http://localhost:3000/")
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });

document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const blacklistForm = document.getElementById("blacklist-form");
  const blacklistInput = document.getElementById("blacklist-input");
  const blacklistedSitesList = document.getElementById("blacklisted-sites");

  // Handle form submission
  blacklistForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value entered by the user
    const siteName = blacklistInput.value.trim();

    if (siteName) {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.textContent = siteName;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";

      // Handle click on delete button
      deleteButton.addEventListener("click", function () {
        listItem.remove(); // Remove the list item from the DOM
      });

      // Append delete button to the list item
      listItem.appendChild(deleteButton);

      // Append the list item to the list of blacklisted sites
      blacklistedSitesList.appendChild(listItem);

      // Clear the input field
      blacklistInput.value = "";
    }
  });
});

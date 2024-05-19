document.getElementById('send').addEventListener('click', () => {
    image = document.getElementById("file");
    fetch('http://localhost:3000/getName')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            const message = { data: data };
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, message);
            });
    });
    // data sent to website
});

console.log("testing server")
fetch('http://localhost:3000/')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });


// console.log("testing server")
// fetch('http://localhost:3000/getName')
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
// });

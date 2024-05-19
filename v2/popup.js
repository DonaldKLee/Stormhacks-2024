console.log("testing server")
fetch('http://localhost:3000/')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });

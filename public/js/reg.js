document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        // const username = document.querySelector('input[name="username"]').value;
        // const email = document.querySelector('input[name="email"]').value;
        // const password = document.querySelector('input[name="password"]').value;
        // const inner = document.querySelector('#inner');
        e.preventDefault();
        // let res = await fetch('/register', {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         email: email,
        //         password: password
        //     })
        // });

        // let response = await res.json();
        // if (response.error)
        //     inner.innerHTML = `<p style="color:white">${response.error}</p>`
        // else if (response.url)
        //     window.location = response.url
    })
});
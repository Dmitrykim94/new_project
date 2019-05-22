// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         let res = await fetch('/login', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         });

//         let response = await res.json();
//         if (response.msg)
//             inner.innerHTML = `<p style="color:white">${response.msg}</p>`
//         else if(response.url)
//             window.location = response.url
//         // console.log(response);

//     })
// });
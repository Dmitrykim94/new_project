document.addEventListener("DOMContentLoaded", function () {
    const likeIncrement = document.getElementById('likeIncrement');
    const form = document.querySelector('form[class="form-inline my-2 my-lg-0"]');
    const searchInput = document.querySelector('input[class="form-control mr-sm-2"]');
    likeIncrement.addEventListener('click', async (e) => {
        e.preventDefault();
        const likeForOnePost = document.getElementById('like').value;

        // continue here
    })
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // console.log(searchInput.value);
        // let res = await fetch('/filter', {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         tag: searchInput.value
        //     })
        // });
        // let response = await res.json();
        //main?tag=pups
        // console.log(response);
        // let x = 'tag';
        window.location = `/filter?tag=${searchInput.value}`
        // if (response.url)
        //     window.location = response.url// = /filter

    })

})
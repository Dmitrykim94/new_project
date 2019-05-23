document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[class="form-inline my-2 my-lg-0"]');
    const searchInput = document.querySelector('input[class="form-control mr-sm-2"]');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!searchInput.value)
            return;
        window.location = `/filter?tag=${searchInput.value}`
    })
})
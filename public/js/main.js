
document.addEventListener("DOMContentLoaded", function () {

    const PostCard = document.querySelectorAll('.card-body');

    PostCard.forEach(function (item) {
        item.addEventListener('click', async (e) => {
            e.preventDefault();

            const likeForOnePost = item.getElementsByClassName('like')[0];
            const valueOfLikes = item.children[3];
            const likeCorrect=valueOfLikes.getAttribute('value');
            const postName = item.children[0];
           const postNameCorrect = postName.getAttribute('value');
            console.log(postNameCorrect)

            let res = await fetch('/main', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    like: likeCorrect,
                    postName: postNameCorrect
                })
            });
            let updatedPost = await res.json()
            console.log(updatedPost.likeUpdated)
            likeForOnePost.innerText = `Likes: ${updatedPost.likeUpdated}`
            likeForOnePost.setAttribute('value',  updatedPost.likeUpdated)
        });
    });
    
    const form = document.querySelector('form[class="form-inline my-2 my-lg-0"]');
    const searchInput = document.querySelector('input[class="form-control mr-sm-2"]');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        window.location = `/filter?tag=${searchInput.value}`
    })
    const container = document.getElementById("dogContainer");
    const button = document.getElementById("fetchDog");

    button.addEventListener("click", async (e)=>{
        let resp = await fetch("https://dog.ceo/api/breeds/image/random");
        let json = await resp.json();
        console.log(json)
        container.innerHTML = `<img src="${json.message}" />`
  
});

});
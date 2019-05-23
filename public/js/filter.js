document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[class="form-inline my-2 my-lg-0"]');
    const searchInput = document.querySelector('input[class="form-control mr-sm-2"]');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // console.log('gjfjhkgfkhkfgkjfgj')
        if (!searchInput.value)
            return;
        window.location = `/filter?tag=${searchInput.value}`
    });

    
    const PostCard = document.querySelectorAll('div[class="col-auto mb-3"]');

    PostCard.forEach(function (item) {
        item.addEventListener('click', async (e) => {
            e.preventDefault();
          
            const valueOfLikes = item.querySelector("span[id='like']");
            const likeCorrect=valueOfLikes.getAttribute('value');
            const postName = item.querySelector("p[class='postName']");
            const postNameCorrect=postName.getAttribute('value');
            
            let res = await fetch(`/filter?tag=${searchInput.value}`, {
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
            console.log(valueOfLikes)
            valueOfLikes.innerText = `Likes: ${updatedPost.likeUpdated}`
            valueOfLikes.setAttribute('value',  updatedPost.likeUpdated)
          
        });
    });
    
})
document.addEventListener("DOMContentLoaded", function () {

    const PostCard = document.querySelectorAll('.card-body');
    // const PostCard = document.getElementsByClassName('container mt-4');

    // console.log(PostCard)
    PostCard.forEach(function (item) {
        item.addEventListener('click', async (e) => {
            e.preventDefault();

            const likeForOnePost = item.getElementsByClassName('like');
            const valueOfLikes = item.children[3];
            const likeCorrect=valueOfLikes.getAttribute('value');
            const postName = item.children[0];
           const postNameCorrect = postName.getAttribute('value');
            // console.log(postNameCorrect)
            let res = await fetch('/main', {
                method: 'PUT',
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
            likeForOnePost.innerText = `Likes: ${updatedPost.likeUpdated}`
        });
    });
  
  const likeIncrement = document.getElementById('likeIncrement');
    const form = document.querySelector('form[class="form-inline my-2 my-lg-0"]');
    const searchInput = document.querySelector('input[class="form-control mr-sm-2"]');
 
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        window.location = `/filter?tag=${searchInput.value}`
    })
  
  
});

})


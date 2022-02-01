const container = document.getElementById('container');
const loading = document.querySelector('.loading');

getPost();
getPost();
getPost();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight });

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        // show the loading animation
        showLoading();
    }
});

function showLoading() {
    loading.classList.add('show');

    // load more data
    setTimeout(getPost, 1000)
}

async function getPost() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
    const postData = await postResponse.json();

    // const userResponse = await fetch('https://randomuser.me/api');
    // <img src="${data.user.picture.large}" alt="pic"
    //                         style="width: calc(8.375rem + 8.5vw);" />
    const userResponse = await fetch('http://localhost:5000/blog');

    const userData = await userResponse.json();
    // console.log(userData[0]);
    const data = { post: postData, user: userData[0] };

    addDataToDOM(data);
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) + 1;
}

function addDataToDOM(data) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
    
    



    <div class="container" id="container">
        <div class="blog-post" style="background: url('images/background_white.jpg'); background-size: cover;">
            <div class="row">
            <div class="col-sm-6">
            <div class="card">
                <div class="card-body" style="text-align: center;">
                    <div class="post-image">
                        
                            <img src="${data.user.image_loc}" alt="pic"
                            style="width: calc(8.375rem + 8.5vw);" />
                    </div>
                    <div
                        style="border: 1px solid rgba(0,0,0,0.125); border-radius: 10%; margin-top: -30px; padding: 20px; padding-top: 40px;">
                        <h5 class="card-title">${data.post.title}</h5>
                        <p class="card-text">${data.post.body}
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
        <div class="card">
            <div class="card-body" style="text-align: center;">
                <div class="post-image">
                    <img src="${data.user.image_loc}" alt="pic"
                        style="width: calc(8.375rem + 8.5vw);" />
                </div>
                <div
                    style="border: 1px solid rgba(0,0,0,0.125); border-radius: 10%; margin-top: -30px; padding: 20px; padding-top: 40px;">
                    <h5 class="card-title">${data.post.title}</h5>
                    <p class="card-text">${data.post.body}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>

	`;
    container.appendChild(postElement);

    loading.classList.remove('show');
}
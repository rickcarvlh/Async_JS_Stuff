const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];


//  mimic server 
// hign order function - funçao dentro de uma funçao
//  * funçao que chama outra funçao
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();

// * chamada logo se seguida callback function
createPost({title: 'Post Three', body: 'This is post three' }, getPosts);

// console.log(posts);


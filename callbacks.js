const post = [
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
        post.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();
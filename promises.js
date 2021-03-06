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
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//  este tipo de funçoes tem sempre duas propriedades e é na mesma uma high order function
function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

//  se "resolve" vai buscar a function getPosts de cima
// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPosts)
    //  para o caso de um erro
    // .catch(err => console.log(err));

    // * Promise.all

    const promise1 = Promise.resolve('Hello World');
    const promise2 = 10;
    const promise3 = new Promise((resolve, rejectq) => 
        setTimeout(resolve, 2000, 'Goodbye'));

        const promise4 = fetch('')

    
    Promise.all([promise1, promise2, promise3]).then((
        (values) => console.log(values)));

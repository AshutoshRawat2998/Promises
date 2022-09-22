const post={
    title : "Post One", body : "This is a Post One",
    title : "Post Two", body : "This is a Post Two" 

};

function getPosts()
{
    setTimeout(() => {
        let output = '';
        post.forEach((post,_index) => {
            output += `<li>${post.title}</li>`;             
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback)
{
    setTimeout(() => {
        post.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({title : "Post Three", body : "This is a Post Three"});

function create4Post(post)
{
    return new Promise(() => {
        setTimeout(() => {
        
            post.push(post);
            const error = false;

            if(!errror)
            {
                reslove();
            }

            else{
                reject('Error : Something went wrong');
            }
        }, 2000);            
    });
    
}

createPost({title : "Post Four", body : "This is a Post Four"})
.then(getPosts)
.catch(err => console.log(err));

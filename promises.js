const post =[
    {title: 'post1', body:'This is post1'},
    {title: 'post2', body:'this is post2'}
]

let lastUserActivityTime =null;

function getPosts(){
    setTimeout(() =>{
        let output ='';
        posts.Message.foreach((post,index)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000)
}
function createPost(post){
   return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject("error");
        }
    },2000)
   })   
}

function updateLastUserActivity(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastUserActivityTime=new Date();
            resolve(lastUserActivityTime);
    }, 1000);
})
}

async function fetchUsers(){
    const data =await fetch('https://jsonplaceholder.typicode.com/users');
    const users =await data.json();
    console.log(users);
}
    async function main(){
        try{
            await Promise.all([createPost({title:'post3', body:'thid is post3'}),updateLastUserActivity()]);
            console.log('all posts')
            Posts.foreach((post)=>{
                console.log(post.title);

            });
            console.log("last user activity time:",lastUserActivityTime);

            await deletePost(); //Implement deletePost function

            console.log('New set of posts:');
            Posts.forEach((post)=>{
                    console.log(post.title);
            });

            // create a new promise called getColdDrinks
            const getColdDrinks =new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('get cold drinks');
                },1000);
            });
            //wait for getcolddrinks
        const result = await getColdDrinks;
        console.log(result)
        }catch(error){
            console.error('Error:',error)
        }
        
    }

    //call main function
    main();

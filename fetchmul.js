let btn = document.getElementById("btn").addEventListener("click", makerequest);




//show data in a browser
async function makerequest() {
    try{
    console.log("button clicked");
     const res =await fetch("https://jsonplaceholder.typicode.com/posts")
     if(!res.ok){
        throw Error(res.statusText);
    }
     console.log(res);
     const data=await res.json()
     console.log(data);
     let output=document.getElementById('output');
     data.forEach(element => {
         output.innerHTML+=`
         <div>ID: ${element.id}</div>
         <div>USERID: ${element.userId}</div>
         <div>TITLE: ${element.title}</div>
         <div>BODY: ${element.body}</div>
         <hr/>`;
     });

     }catch(error){
        console.log(error);
     }
    }

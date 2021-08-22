//using asyn & wait
let btn = document.getElementById("btn").addEventListener("click", makerequest);




//show data in a browser
async function makerequest() {
    try{
    console.log("button clicked");
     const res =await fetch("https://jsonplaceholder.typicode.com/posts/1")
     if(!res.ok){
        throw Error(res.statusText);
    }
     console.log(res);
     const data=await res.json()
     console.log(data);
     document.getElementById('data').innerText=data.title;
     document.getElementById('data2').innerText=data.body;


     }catch(error){
        console.log(error);
     }
    }

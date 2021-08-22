//usung promises fetch()

let btn = document.getElementById("btn").addEventListener("click", makerequest);



//show data in a browser
function makerequest() {
    
    console.log("button clicked");
     fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
         if(!res.ok){
             throw Error(res.statusText);
         }
        console.log("res",res);
         const dt=res.json()
         console.log("dt",dt);
         return dt
     }).then((data)=>{
         console.log(data)
         document.getElementById('data').innerText=data.userId
         document.getElementById('data2').innerText=data.title

        }).catch((error)=>{console.log(error);})
     }


function updateMap(){
 fetch("/data.json")
 .then (response=> response.json())
 .then (rsp=>{
     console.log(rsp)
 })
}

updateMap();

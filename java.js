
fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const list = document.getElementsByClassName('name');
    console.log(list);
    console.log(data);



    // Clear previous content in the data container
    list.innerHTML = '';


    async function fetchData(){
    try{
        const response3 = await(fetch("https://www.coursehubiitg.in/api/codingweek/contributions")   
.then(response4=> response4.json())
.then(json=> data = json.map(obj=>obj.name)))
var indices = Array.from(data.points.keys());

indices.sort(function(a,b){
  return data.points[b] - data.points[a];
});
    

data.points= indices.map(function(index){

  return data.points[index];
});


console.log(data.points);
    
}
catch(error){
  console.error(error);}
}
      

})
  

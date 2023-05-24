fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the fetched data
    console.log(data);
    const name=document.getElementById('name');
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });

  
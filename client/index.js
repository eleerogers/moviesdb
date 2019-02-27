document.addEventListener('DOMContentLoaded', () => {
  $("#movie-search").submit((e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title-input").value
    console.log(titleInput);
    const currUrl = '/' + titleInput;
    
    // $.get({
    //   url: currUrl,
    //   // data: data,
    //   // success: success,
    //   // dataType: dataType
    // });

    getTheMovie(titleInput);
  });

  
  function getTheMovie(title) {
    const currUrl = `http://localhost:8080/${title}`;
   console.log(currUrl);
    fetch(currUrl).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then((response => {
      console.log('succesful fetch request! ', response);
      printResults(response);
    }))
    .catch((error) => {
      console.log(error);
    });
  }

  function printResults(response) {
    let resultDiv = document.getElementById("result");
    if (response.length === 0) {
      resultDiv.innerHTML = '<p>Movie not found.</p>'
    }
    for (let el of response) {
      resultDiv.innerHTML = '<p>' + el.title + ' (' + el.year + ')<br>'
        + el.genre + ' - ' + el.subgenre + '<br>'
        + el.scoreplusgrades + '</p>';
    }
  }

  // function 

  // function getTheMovie(title) {
  //   const currUrl = `/' + ${title}`;
  //   fetch(currUrl, {
  //     method: 'POST',
  //     body: JSON.stringify( 
  //       { 
  //         title: title
  //       } 
  //     ),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }).then(response => { window.location.href = 'http://localhost:8080/' })
  //   .catch(err => console.log('error ', err));
  // }


});




// function GetText(){
//     fetch('message.text')
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

function GetText(){
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        var x = '';
        data.results.forEach(user =>{
           x+= `

           <div class="col-lg-3">
           <div class="card">
           <img class="card-img-top" src="${user.picture.large}" alt="Card image cap">
           <div class="card-body">
              <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go     somewhere</a>
           </div>
       </div>
           </div>
          
           `
        })

        document.getElementById('row').innerHTML = x;
    })
    .catch(error => console.log(error))
}


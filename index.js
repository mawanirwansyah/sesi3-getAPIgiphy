
let dataGiphy = [];

//  Asynchronous
const getGiphy = async() => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?q=cat&api_key=0aSZOlK5TFhZTdzy3nHEKzgWuOPBjhWy&limit=9')
  const data = await response.json();
  dataGiphy = data.data;
  await viewData();
  console.log(data)
}

const viewData = () => {
  let result = '';
  dataGiphy.map(element => {
    console.log(element.title);
    result += `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img src="${element.images.original.url}" a width="auto" height="300">
      <div class="card-body">
        <p class="card-text">${element.title}</p>
        <div class="d-flex justify-content-between align-items-center">  
        </div>
      </div>
    </div>
  </div>`
  })
  document.getElementById('dataGiphy').innerHTML = result;
}
getGiphy();
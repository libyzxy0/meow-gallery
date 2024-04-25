let startTheShow = document.getElementById('start-btn');
let gallerySection = document.getElementById('gallery');
let heroSection = document.getElementById('hero');


startTheShow.addEventListener('click', () => {
    gallerySection.style.display="block";
    window.location.href="#gallery";
    setTimeout(() => {
        heroSection.style.display="none";
    }, 1000);
    document.getElementById('music').play();
    document.getElementById('nav').style.justifyContent="center";
}) 


let images = document.getElementById('images');

function renderImage(url) {
    let li = document.createElement('li');
    let row = document.createElement('div');
    row.className="row";
    let image = document.createElement('img');
    image.setAttribute("src", url)
    images.appendChild(row);
    row.appendChild(li);
    li.appendChild(image);
}


for(let i = 0;i < 502;i++) {
    fetch('https://cataas.com/cat?json=true')
  .then(response => response.json())
  .then(data => {
  //console.log(`https://cataas.com${data.url}`)
    // Process the returned data
    renderImage(`https://cataas.com/cat/${data._id}`)
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
}

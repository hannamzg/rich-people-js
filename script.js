
let cards = document.getElementById('cards');
let json = [
  {
    name: 'Bill Gates',
    id: '1',
    worth: '$90B',
    birth_year: '1955',
    source: 'microsoft',
    country: 'USA',
    image:
      'https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813',
  },
  {
    name: 'Mark Zuckerberg',
    id: "3",
    worth: '$71B',
    birth_year: '1984',
    source: 'Facebook',
    country: 'USA',
    image:
      'https://cdn.britannica.com/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg',
  },
  {
    name: 'Larry Ellison',
    id: "4",
    worth: '$57B',
    birth_year: '1945',
    source: 'Sun, Oracle',
    country: 'USA',
    image:
      'https://cdn.britannica.com/43/199343-050-5A69C731/Larry-Ellison-2012.jpg',
  },
  {
    name: 'Michael Bloomberg',
    id: 'michael-bloomberg',
    worth: '$50B',
    birth_year: '1942',
    source: 'Bloomberg',
    country: 'USA',
    image:
      'https://cdn.britannica.com/22/182322-050-58616D38/Michael-Bloomberg.jpg',
  },
]


    json.map((element) => {
        cards.innerHTML += `<div class="card col" >
        <img  id="${element.id}" src="${element.image}" class="card-img-top img m-auto" alt="${element.name}' image" />
        <div class="card-body">
          <h5 class="card-title ">${element.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.worth}</li>
          <li class="list-group-item">A ${element.source}</li>
        </ul>
        </div>`
    })



function render(ev){
    json = json.filter((element) => element.id !== ev.target.id);
    refrechThePage(json)
}

function bulidNewArr(element){
    let theHTMLl  = `<div class="card col  " >
        <img  id="${element.id}" src="${element.image}" class="card-img-top img m-auto" alt="${element.name}'s image" />
        <div class="card-body">
          <h5 class="card-title ">${element.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.worth}</li>
          <li class="list-group-item">A ${element.source}</li>
        </ul>
        </div>`

        return theHTMLl;
}



function refrechThePage(theArr){
    let theHtml =  "";

    for(let elementt of theArr){
        let theString =  bulidNewArr(elementt);
        theHtml += theString
    }

    cards.innerHTML = theHtml
    finaly()
}

function finaly(){
    let TheImages = document.querySelectorAll('.img');
    TheImages.forEach((image) => image.addEventListener('click', render));
}
finaly()
//Classes
class Entrepreneur {
  constructor(id, name, birthDate, image, netWorth, source, country) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.image = image;
    this.netWorth = netWorth;
    this.source = source;
    this.country = country;
  }
}
//Main
let cards = document.getElementById("cards");
let json = [
  {
    name: "Bill Gates",
    worth: "$90B",
    birth_year: 1955,
    source: "microsoft",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813",
  },
  {
    name: "Mark Zuckerberg",
    worth: "$71B",
    birth_year: 1984,
    source: "Facebook",
    country: "USA",
    image:
      "https://cdn.britannica.com/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg",
  },
  {
    name: "Larry Ellison",
    worth: "$57B",
    birth_year: 1945,
    source: "Sun, Oracle",
    country: "USA",
    image:
      "https://cdn.britannica.com/43/199343-050-5A69C731/Larry-Ellison-2012.jpg",
  },
  {
    name: "Michael Bloomberg",
    worth: "$50B",
    birth_year: 1942,
    source: "Bloomberg",
    country: "USA",
    image:
      "https://cdn.britannica.com/22/182322-050-58616D38/Michael-Bloomberg.jpg",
  },
];

let count = 0;
let selectedEntrepreneurID = null;
let entrepreneurs = json.map((item) => {
  return new Entrepreneur(
    count++,
    item.name,
    item.birth_year,
    item.image,
    item.worth,
    item.source,
    item.country
  );
});
render();

//Functions
function render() {
  clear();
  for (let i = 0; i < entrepreneurs.length; i++) {
    addEntrepreneurToTheView(entrepreneurs[i]);
  }
}
function addEntrepreneurToTheView(entrepreneur) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("style", "width: 18rem;");
  let imageElement = document.createElement("img");
  imageElement.setAttribute("id", entrepreneur.id);
  imageElement.setAttribute("src", entrepreneur.image);
  imageElement.setAttribute("class", "card-img-top");
  imageElement.addEventListener("click", deleteEntrepreneur);
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  cardTitle.setAttribute("class", "card-title");
  cardText.setAttribute("class", "card-text");
  cardTitle.innerHTML = entrepreneur.name;
  cardText.innerHTML = entrepreneur.birthDate;
  let listGroup = document.createElement("ul");
  listGroup.setAttribute("class", "list-group list-group-flush");
  createListItem(listGroup, entrepreneur.netWorth);
  createListItem(listGroup, entrepreneur.source);
  createListItem(listGroup, entrepreneur.country);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(imageElement);
  card.appendChild(cardBody);
  card.appendChild(listGroup);
  cards.appendChild(card);
}
function createListItem(listGroup, value) {
  let listItem = document.createElement("li");
  listItem.setAttribute("class", "list-group-item");
  listItem.innerHTML = value;
  listGroup.appendChild(listItem);
}
function clear() {
  cards.innerHTML = "";
}
function deleteEntrepreneur(e) {
  selectedEntrepreneurID = Number(e.target.id);
  entrepreneurs = entrepreneurs.filter(skipSelectedEntrepreneur);
  render();
}
function skipSelectedEntrepreneur(entrepreneur) {
  return entrepreneur.id != selectedEntrepreneurID;
}
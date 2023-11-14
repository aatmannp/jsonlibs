let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');
let glideSlidesElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "Album Name",
  "cover" : "google.com",
  ///"favorite_color" : "#000", dont want on all
  "favorite_font" : "Didot",
  "info" : ["release", "streams", "singers"]
};

var randomIndex = Math.floor(Math.random() * myJSON["info"].length);




let jsonDatabase = [
  {
    "title" : "Up All Night",
    "cover" : "https://i.scdn.co/image/ab67616d0000b2734a5584795dc73860653a9a3e",
    "info" : ["Nov 18, 2011", "Stuio Album - 2.5 B", "Zayn Malik, Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  },
  {
    "title" : "Take Me Home",
    "cover" : "https://m.media-amazon.com/images/I/61vhVfkE0ZL._UF1000,1000_QL80_.jpg",
    "favorite_color" : "#405f7c",
    "info" : ["Nov 9, 2012", "Stuio Album - 3.2 B", "Zayn Malik, Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  },
  {
    "title" : "This Is Us",
    "cover" : "https://cdn.justjared.com/wp-content/uploads/headlines/2013/09/one-direction-this-is-us-tops-weekend-box-office.jpg",
    "info" : ["Aug 30, 2013", "Documentary", "Zayn Malik, Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  },
  {
    "title" : "Midnight Memories (Deluxe)",
    "cover" : "https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1",
    "favorite_color" : "#405f7c",
    "info" : ["Nov 25, 2013", " Stuio Album - 4.1 B", "Zayn Malik, Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  },
  {
    "title" : "Four (Deluxe)",
    "cover" : "https://m.media-amazon.com/images/I/81jKxoq-KcL._UF1000,1000_QL80_.jpg",
    "info" : ["Nov 17, 2014", "Stuio Album - 4.4 B", "Zayn Malik, Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  },
  {
    "title" : "Made In the AM",
    "cover" : "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
    "favorite_color" : "#405f7c",
    "info" : ["Nov 25, 2013", "Stuio Album - 4.5 B", "Niall Horan, Louis Tomlinson, Harry Styles, Liam Payne"]
  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');

function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>Info:</h4><ul class=\"infoList\">";


  for (var i = 0; i < incomingJSON['info'].length; i++) {
    var infoString = "<li>" + incomingJSON['info'][i] + "</li>";
    incompleteHTML += infoString;
  }

  /// Complete our HTML chunk
  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.style.fontFamily = incomingJSON['favorite_font'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Info:";
  newContentElement.appendChild(newContentSubhead);

  let newContentInfoList = document.createElement("UL");
  newContentElement.appendChild(newContentInfoList);

  for (var i = 0; i < incomingJSON['info'].length; i++) {
    var currentInfoString = incomingJSON['info'][i];
    var newInfoItem = document.createElement("LI");
    newInfoItem.innerText = currentInfoString;
    newContentInfoList.appendChild(newInfoItem);
  }

//fancybox
  let newImage = document.createElement("IMG");
  newImage.classList.add("cover");
  newImage.src = incomingJSON["cover"]

  let newImageFancy = document.createElement("A");
  newImageFancy.href = incomingJSON["cover"];
  newImageFancy.setAttribute("data-fancybox", "gallery");
  newImageFancy.appendChild(newImage);
  newContentElement.appendChild(newImage);

  let galleryInfo = document.createElement("DIV");
  galleryInfo.classList.add("galleryInfo");
  



  contentGridElement.appendChild(newContentElement);
}

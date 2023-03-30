const title = document.getElementById("title_input");
const author = document.getElementById("author_input");
const addButton = document.getElementById("add_button");

class BookLibrary {
  constructor() {
    this.arrays = JSON.parse(localStorage.getItem("bookDetails")) || [];
  }

  addBooks(title, author, id) {
    const addedNew = { id, title, author };
    this.arrays.push(addedNew);
    localStorage.setItem("bookDetails", JSON.stringify(this.arrays));
  }

  eraseBook(id) {
    const { arrays } = this;
    const erased = arrays.filter((array) => array.id !== id);
    localStorage.setItem("bookDetails", JSON.stringify(erased));
  }

  presentBooks() {
    return this.arrays;
  }
}

const collection = new BookLibrary();

addButton.addEventListener("click", () => {
  if (title.value && author.value) {
    const i = Date.now();
    collection.addBooks(title.value, author.value, i);
    window.location.reload();
  }
});

// eslint-disable-next-line no-unused-vars

function removeBook(id) {
  collection.eraseBook(id);
  window.location.reload();
}

function displayBooks() {
  const bookContent = document.getElementById("book_list");
  const allCollection = collection.presentBooks();
  for (let i = 0; i < allCollection.length; i += 1) {
    if (i % 2 === 0) {
      bookContent.innerHTML += `<div class="bookContainer" id="odd"><p class="bookInfo">
      <b>"${allCollection[i].title}" </b> by
      <b>${allCollection[i].author}</b> 
      </p>
      <button class="removeBtn" onclick="removeBook(${allCollection[i].id})">Remove</button>
      
    </div>`;
    } else {
      bookContent.innerHTML += `<div class="bookContainer" id="even"><p class="bookInfo">
        <b>"${allCollection[i].title}" </b> by
         <b>${allCollection[i].author}</b> 
      </p>
      <button class="removeBtn" onclick="removeBook(${allCollection[i].id})">Remove</button>
     
    </div>`;
    }
  }
}

const bookListSection = document.createElement("section");
bookListSection.id = "list";
bookListSection.innerHTML = "<h1>Awesome books</h1>";

window.addEventListener("load", () => {
  displayBooks();
});

function list() {
  document.getElementById("add-book").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("book-collection").style.display = "block";
  document.getElementById("link-list").style.color = "blue";
  document.getElementById("link-add").style.color = "black";
  document.getElementById("link-contact").style.color = "black";
  window.location.reload();
}

function add() {
  document.getElementById("book-collection").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("add-book").style.display = "block";
  document.getElementById("link-list").style.color = "black";
  document.getElementById("link-add").style.color = "blue";
  document.getElementById("link-contact").style.color = "black";
}

function contact() {
  document.getElementById("book-collection").style.display = "none";
  document.getElementById("add-book").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("link-list").style.color = "black";
  document.getElementById("link-add").style.color = "black";
  document.getElementById("link-contact").style.color = "blue";
}

function showTime() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date();
  let monthName = month[d.getMonth()];
  let monthDate = d.getDate();
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();

  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  let time =
    monthName +
    " " +
    monthDate +
    " " +
    year +
    ", " +
    hour +
    ":" +
    minute +
    ":" +
    second +
    " " +
    session;
  document.getElementById("clock").innerHTML = time;
  setTimeout(showTime, 1000);
}
showTime();

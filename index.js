
let array = [];

function addBook() {
  let title = document.getElementById("title_input");
  let author = document.getElementById("author_input");

  let book_list = document.getElementById("book_list");

  let book_content = document.createElement("section");
  book_content.style.border = "thin solid grey";
  book_content.style.margin = "30px";

  let book_title = document.createElement("h3");
  let book_author = document.createElement("h3");
  let remove_button = document.createElement("button");
  let hr = document.createElement("hr");

  book_list.appendChild(book_content);
  book_content.appendChild(book_title);
  book_content.appendChild(book_author);
  book_content.appendChild(remove_button);
  book_content.appendChild(hr);

  remove_button.innerText = "Remove";

  book_title.innerText = "Book title: " + title.value;
  book_author.innerText = "Book author: " + author.value;

  let i = array.length;
  book_content.id = array.length;

  let obj = { id: i, title: title.value, author: author.value };
  array.push(obj);
  console.log(array);
  console.log("array length: " + array.length);

  remove_button.onclick = function removeBook() {
    let id = book_content.id;

    const indexOfObject = array.findIndex((object) => {
      book_content.remove();
      return object.id === id;
    });

    console.log(indexOfObject);

    array.splice(indexOfObject, 1);

    console.log(array);
  };
}

const main = document.getElementById('main');
const bookListSection = document.createElement('section');
const booksList = document.createElement('div');
bookListSection.id = 'list';
bookListSection.innerHTML = '<h1>Awesome books</h1>';

let array = [];

function addBook() {
  let title = document.getElementById("title_input");
  let author = document.getElementById("author_input");
  if (title.value !== "" && author.value !== "") {
    let book_list = document.getElementById("book_list");

    let book_content = document.createElement("section");

    let book_title = document.createElement("h3");
    let book_author = document.createElement("h3");
    let remove_button = document.createElement("button");
    let hr = document.createElement("hr");
    book_content.style.width = "280px";

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

    remove_button.onclick = function removeBook() {
      let id = book_content.id;

      const indexOfObject = array.findIndex((object) => {
        book_content.remove();
        return object.id === id;
      });

      array.splice(indexOfObject, 1);
    };

    //   Preserve data in the browser

    localStorage.setItem("bookDetails", JSON.stringify(array));
  }
}

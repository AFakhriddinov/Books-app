class Book {
  Constructor(title, author){
    this.title = title
    this.author = author
  }
}

const array = [];

function addBook() {
  const title = document.getElementById('title_input');
  const author = document.getElementById('author_input');
  if (title.value !== '' && author.value !== '') {
    const bookList = document.getElementById('book_list');

    const bookContent = document.createElement('section');

    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h3');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');
    bookContent.style.width = '280px';
    removeButton.style.margin = '20px';

    bookList.appendChild(bookContent);
    bookContent.appendChild(bookTitle);
    bookContent.appendChild(bookAuthor);
    bookContent.appendChild(removeButton);
    bookContent.appendChild(hr);

    removeButton.innerText = 'Remove';

    bookTitle.innerText = `Book title: ${title.value}`;
    bookAuthor.innerText = `Book author: ${author.value}`;

    const i = array.length;
    bookContent.id = array.length;

    const obj = { id: i, title: title.value, author: author.value };
    array.push(obj);

    removeButton.onclick = function removeBook() {
      const { id } = bookContent;

      const indexOfObject = array.findIndex((object) => {
        bookContent.remove();
        return object.id === id;
      });

      array.splice(indexOfObject, 1);
    };

    //   Preserve data in the browser

    localStorage.setItem('bookDetails', JSON.stringify(array));
  }
}

const bookListSection = document.createElement('section');
bookListSection.id = 'list';
bookListSection.innerHTML = '<h1>Awesome books</h1>';

addBook();

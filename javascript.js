const arrays = JSON.parse(localStorage.getItem('bookDetails')) || [];

const title = document.getElementById('title_input');
const author = document.getElementById('author_input');
const addButton = document.getElementById('add_button');

addButton.addEventListener('click', () => {
  if (title.value && author.value) {
    let i;
    if (arrays.length === null) {
      i = 0;
    } else {
      i = arrays.length;
    }

    arrays.push({ id: i, title: title.value, author: author.value });
    localStorage.setItem('bookDetails', JSON.stringify(arrays));
    window.location.reload();
  }
});

// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  const remainedBooks = arrays.filter((array) => array.id !== id);
  localStorage.setItem('bookDetails', JSON.stringify(remainedBooks));
  window.location.reload();
}

function displayBooks() {
  const bookContent = document.getElementById('book_list');
  for (let i = 0; i < arrays.length; i += 1) {
    bookContent.innerHTML += `<div><p>
        Book title: ${arrays[i].title} <br />
         Book author: ${arrays[i].author} 
      </p>
      <br/>
      <button onclick="removeBook(${arrays[i].id})">Remove</button>
      <br/><br/>
      <hr />
      <br/>
    </div>`;
  }
}

const bookListSection = document.createElement('section');
bookListSection.id = 'list';
bookListSection.innerHTML = '<h1>Awesome books</h1>';

window.addEventListener('load', () => {
  displayBooks();
});

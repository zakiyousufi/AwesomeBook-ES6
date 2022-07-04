import bookAddView from './modules/view/bookAddView';
import bookView from './modules/view/bookView';
import navigationView from './modules/view/navigationView';
import { DateTime } from './modules/luxon.js';

const addBook = () => {
    const [title, author] = bookAddView.getFormValues();
    if (!title || !author) return;
    model.addBook(title, author);
    bookView.render(model.state.books);
  };

  const removeBook = (id) => {
    model.removeBook(id);
    bookView.render(model.state.books);
  };
  
import bookAddView from './modules/view/bookAddView';
import bookView from './modules/view/bookView';
import navigationView from './modules/view/navigationView';
import { DateTime } from './modules/luxon.js';
import * as model from './modules/model.js';

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
  
  const init = () => {
    model.loadBooks();
    bookView.render(model.state.books);
    navigationView.navigate();
  
    navigationView.setYear(DateTime.now());
  
    bookAddView.addHandlerAdder(addBook);
    bookView.addHandlerRemover(removeBook);
  };
  
  init();

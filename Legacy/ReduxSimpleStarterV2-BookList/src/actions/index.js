export function selectBook(book) {
  // SELECT BOOK IS AN ACTION CREATOR IT NEEDS TO RETURN AN ACTION, AN OBJECT WITH A TYPE PROPERTY
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
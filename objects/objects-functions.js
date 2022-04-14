
let book = {
    title: 'title books',
    author: 'heritier ',
    pageCount: 326
}

let otherBook = {
    title: 'other title books',
    author: 'ganza',
    pageCount: 848
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
let bookSummary = getSummary(book);
let otherBooksummary = getSummary(otherBook);
console.log(bookSummary, otherBooksummary);
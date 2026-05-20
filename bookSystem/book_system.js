let books =[];
function addBook(){
    const bookName = document.getElementById("bookName").value
    const authorName = document.getElementById("authorName").value
    const bookDescription = document.getElementById("bookDescription").value
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value)
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book= {
            name:bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
};
    books.push(book)
    showbooks()
    clearInputs()
    console.log(books)

    }else{
        alert("please fill in all filed correctly")
    }
}

function showbooks(){
    const booksDiv = books.map((book,index)=> `<h1>book Number:${index +1} </h1>
    <p><strong> Book Name : ${book.name}</strong></p>
    <p>Author Name<strong>  : ${book.authorName}</strong></p>
    <p>Book Description<strong>  : ${book.bookDescription}</strong></p>
    <p>No. of Pages :<strong>  ${book.pagesNumber}</strong></p>
    <button onClick="editBook(${index})">Edit</button>
    `);
    console.log(booksDiv)
    document.getElementById("books").innerHTML= booksDiv.join("")
}

function editBook(index){
    const book= books[index];
    document.getElementById("bookName").value=book.name
    document.getElementById("authorName").value=book.authorName
    document.getElementById("bookDescription").value=book.bookDescription
    document.getElementById("pagesNumber").value=book.pagesNumber
    books.splice(index,1);
    showbooks()
}

function clearInputs(){
    document.getElementById("bookName").value="";
    document.getElementById("authorName").value="";
    document.getElementById("bookDescription").value="";
    document.getElementById("pagesNumber").value="";
}
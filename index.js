var booksArray = []


showCount();

function getExistingBooks(){
    let localBooks = localStorage.getItem("myBooks");
    booksArray = JSON.parse(localBooks);
    showBooks();
}

function addBooks(){
    var books = document.getElementById("title").value;
    var writer = document.getElementById("author").value;
    var category = document.getElementById("type").value;
    let libraryItem = {name: books, author: writer, type: category, read: false};
    booksArray.push(libraryItem);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("title").focus();
    document.getElementById("author").focus();
    

    console.log(booksArray);
    showBooks();
    updateLocalStorage();
}

function showBooks(){
    let libraryContent = "";
    let i;
    for(i = 0; i < booksArray.length; i++){
        libraryContent += `<div class="p-3 row">
                                <div class="col-6"><p>${booksArray[i].name}</p></div>
                                <div class="col-3"><p>${booksArray[i].author}</p></div>
                                <div class="col-2"><p>${booksArray[i].type}</p></div>
                                <div class="col-1"><button class="btn-danger btn-sm float-right ml-3" onclick="deleteBook(${i})"><i class="fa-solid fa-trash-can"></i></button></div>
                            </div>` + `<hr>`;
    }
    document.getElementById('addedBooks').innerHTML = libraryContent;
    showCount();   
    
}

function updateLocalStorage(){
    localStorage.setItem("myBooks", JSON.stringify(booksArray));
}

function showCount(){
    document.getElementById('bookCount').innerHTML = booksArray.length
}

function deleteBook(booksIndex){
    // let i;
    // for(i = 0; i < booksArray.length; i++){
        booksArray = booksArray.filter((books, index)=>(index!=booksIndex));
    // }
    // booksArray[i].filter((books, index)=>(index=booksIndex))
    showBooks();
    updateLocalStorage();
}

function clearBooks(){
    booksArray.length = 0;
    updateLocalStorage();
    showBooks();
}


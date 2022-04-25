import axios from '../custom-axios/axios';

const LibraryService={
    fetchBooks:()=>{
        return axios.get("/books")
    },
    fetchAuthor:()=>{
        return axios.get("/authors")
    },
    fetchCategories:()=>{
        return axios.get("/categories")
    },
    addBook:(name, idAuthor, availableCopies, category)=>{
        return axios.post("/books/add",{
            "name":name,
            "idAuthor":idAuthor,

            "availableCopies":availableCopies,
            "category":category
        })
    },
    deleteBook:(id)=>{
        return axios.delete(`/books/delete/${id}`)
    },
    getBook:(id)=>{
        return axios.get(`/books/${id}`)
    },
    editBook:(id, name, idAuthor, availableCopies, category)=>{
        return axios.put(`/books/edit/${id}`,{
            "name":name,
            "idAuthor":idAuthor,

            "availableCopies":availableCopies,
            "category":category
        })
    },
    markAsTaken: (id) => {
        return axios.post(`/books/markAsTaken/${id}`);
    }
}

export default LibraryService;


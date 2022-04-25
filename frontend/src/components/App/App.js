import './App.css';
import React from "react";
import Header from '../Head/header';
import Books from "../Book/BookList/books"
import BookAdd from "../Book/BookAdd/bookAdd"
import LibraryService from "../../repository/LibraryRepository";
import {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import  BookEdit from "../Book/BookEdit/bookEdit";
import  Categories from "../Category/categories"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>

                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>

                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd authors={this.state.authors}
                                     categories={this.state.categories}
                                     onAddBook={this.addBook}/>}/>

                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                         authors={this.state.authors}
                                         onEditBook={this.editBook}
                                         book={this.state.selectedBook}/>}/>


                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onMarkAsTaken={this.onMarkAsTaken}
                                   book={this.state.selectedBook}
                            />}/>
                    {/*<Redirect to={"/books"}/>*/}
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    loadAuthors = () => {
        LibraryService.fetchAuthor().then(
            (data) => {
                this.setState({
                    authors: data.data
                })
            }
        );
    }
    loadCategories = () => {
        LibraryService.fetchCategories().then(
            (data) => {
                this.setState({
                    categories: data.data
                })
            }
        );
    }
    addBook = (name, idAuthor, availableCopies, category) => {
        LibraryService.addBook(name, idAuthor, availableCopies, category)
            .then(() => {
                this.loadBooks();
            })
    }
    deleteBook=(id)=>{
        LibraryService.deleteBook(id)
            .then(()=> {
                    this.loadBooks();//bidejkji e void f-ja pa na kraj samo sakame povtorno load na products
                }
            );
    }
    getBook=(id)=>{
        LibraryService.getBook(id)
            .then((data)=>{
            this.setState({
                selectedBook: data.data
            })
        })
    }
    editBook = (id, name, idAuthor, availableCopies, category) => {
      LibraryService.editBook(id, name, idAuthor, availableCopies, category)
            .then(() => {//otkako kje zavrshish so editiranje,treba pak load na product[] vo state
                this.loadBooks();
            });
    }
    onMarkAsTaken = (id) => {
        LibraryService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            })
    }


}

export default App;

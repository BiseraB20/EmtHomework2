import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactPaginate from "react-paginate";
import BookTerm from "../BookTerm/bookTerm";
class Books extends Component{
    constructor(props) {
        super(props);
        this.state={
            page:0,
            size:5
        }
    }

    render(){
        const offset = this.state.size * this.state.page;//golemian na stranata * koja str sme
        const nextPageOffset = offset + this.state.size;//slednata strana koja e

        const pageCount=Math.ceil(this.props.books.length/this.state.size)
        /**In this const variable books ist the tag BookTerm defined with this function**/
        const books = this.getBooksPage(offset, nextPageOffset);
        console.log(books, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author name</th>
                                <th scope={"col"}>Author surname</th>
                                <th scope={"col"}>AvailableCopies</th>
                            </tr>
                            </thead>
                            <tbody>
                                {books}
                            </tbody>
                        </table>
                    </div>

                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                              <a className={"btn btn-block btn-dark"} href={"/books/add"}>Add new book</a>
                            </div>
                        </div>
                    </div>


                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>

        );

    }
    /**For rendering the book list
     * term you can define it like singleBook
     * we pass it as props to BookTerm and we handle it there!**/
    getBooksPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.books.map((term) => {
            return (
                <BookTerm term={term} onDelete={this.props.onDelete}
                          onEdit={this.props.onEdit}
                          book={this.props.selectedBook}
                          onMarkAsTaken={this.props.onMarkAsTaken}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
    /**Koga e neshto kliknato na paginacijata,
     * se prima podatok koj shto se pradava na klik**/
    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }


}
export default Books;
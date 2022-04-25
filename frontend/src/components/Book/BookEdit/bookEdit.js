import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {
//pak kje chuvame state
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        idAuthor: 0,
        category: "DRAMA",
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        //bidejkji site ni se required, pa zatoa shto e edit, togash ako ne e popolneto toa od placeholder ot
        //treba da se zeme ->togash treba toa shto si e a ne novo neshto!
        const name = formData.name !== "" ? formData.name : props.book.name;
        const idAuthor = formData.idAuthor !== 0 ? formData.idAuthor : props.book.idAuthor;
        const category = formData.category !== 0 ? formData.category : props.book.category;
        const availableCopies =formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.product.id, name,idAuthor, availableCopies, category);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"

                               placeholder={props.book.name}
                               onChange={handleChange}
                               value={props.book.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">AvailableCopies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               value={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                    if(props.book.category !== undefined &&
                                        props.book.category === term)
                                        return <option selected={props.book.category} value={term}>{term}</option>
                                    else
                                        return <option value={term}>{term}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="idAuthor" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                    if(props.book.author !== undefined &&
                                        props.book.author.id === term.id)
                                        return <option selected={props.book.author.id} value={term.id}>{term.name}</option>
                                    else
                                        return <option value={term.id}>{term.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    <button id="submit" type={"submit"} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default BookEdit;

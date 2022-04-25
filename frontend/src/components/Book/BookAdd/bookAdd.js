import React from 'react';
import {useHistory} from "react-router-dom";

const BookAdd = (props) => {
    const history = useHistory();//chuva pr kaj sme bile prethnodno i da odime nanapred ili nanazad
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "DRAMA",
        idAuthor: 0,
        availableCopies: 1
    })
    const handleChange = (e) => {
        //pri bilo kakva promena se menuvaa i gore vrednosta
        //target zavisi od toa kako sme staile na input, t.e na nekoj nachin kako name vo input vo thymleaf
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()//pravenje na key value par kako gore
        })
    }
//hendla nekoj nastan
    const onFormSubmit = (e) => {
        e.preventDefault();//poprechi go default odnesuvanje ne gi prakjaj vednash
        //zastani ovde
        const name = formData.name;//gore so promenite se menjaat
        const category = formData.category;
        const idAuthor = formData.idAuthor;

        const availableCopies = formData.availableCopies;

        props.onAddBook(name, idAuthor, availableCopies, category);
        history.push("/books");//sega pravime nekoj redirect, vrati me na stranata so site products
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">AvailableCopies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="AvailableCopies"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term.id}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="idAuthor" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type={"submit"} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default BookAdd;
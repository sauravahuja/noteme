import { useNavigate } from "react-router-dom";

const CreateNewNote = () => {
    const navigate = useNavigate();
    const datastore = (event) => {
        let noteTitle = event.target.noteTitle.value;
        let noteSubTitle = event.target.noteSubTitle.value;
        let noteCategory = event.target.noteCategory.value;
        let noteCategoryColor = event.target.noteCategoryColor.value;
        let noteBody = event.target.noteBody.value;
        let month = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sept", 9: "Oct", 10: "Nov", 11: "Dec"
        }
        let date = new Date();
        let todayDate = date.getDate();
        let todayMonth = month[date.getUTCMonth()];
        let todayYear = date.getFullYear();

        let fullDate = todayDate + " " + todayMonth + " " + todayYear;

        if (noteBody && noteSubTitle && noteTitle && noteCategory) {
            let dataObj = {
                "noteTitle": noteTitle,
                "noteSubTitle": noteSubTitle,
                "noteCategory": noteCategory,
                "noteCategoryColor": noteCategoryColor,
                "noteBody": noteBody,
                "timeStamp": fullDate
            }
            let noteKey = noteTitle;
            noteKey = noteKey.replace(/ +/g, "").toLowerCase();
        
            localStorage.setItem(noteKey, JSON.stringify(dataObj));
            navigate("/");
        } else {
            alert("Fill all the details for the note!!")
        }
    }
    return (
        <>
            <div className="all-note-container">
                <form onSubmit={datastore} type="POST">
                    <label className="note-label" htmlFor="noteTitle">Note Title</label><br />
                    <input className="note-input" type="text" id="noteTitle" name="noteTitle" placeholder="Title goes here" /><br />
                    <label className="note-label" htmlFor="noteSubTitle">Note Sub Title </label><br />
                    <input className="note-input" type="text" id="noteSubTitle" name="noteSubTitle" placeholder="Sub Title goes here" /><br />
                    <div className="d-flex">
                        <div className="category-container">
                            <label className="note-label" htmlFor="noteCategory">Note Category</label><br />
                            <input className="note-input note-input-category" type="text" id="noteCategory" name="noteCategory" placeholder="Category goes here" /><br />
                        </div>
                        <div className="category-color-container">
                            <label className="note-label" htmlFor="noteCategoryColor">Color</label><br />
                            <input className="note-input  note-input-color" type="color" id="noteCategoryColor" name="noteCategoryColor" defaultValue="#FF26EE" /><br />
                        </div>
                    </div>
                    <label className="note-label" htmlFor="noteBody">Note Body </label><br />
                    <textarea className="note-input" id="noteBody" name="noteBody" rows="10" placeholder="Enter note here..."></textarea>
                    <input type="submit" value="Submit" className="btn btn-primary submit-btn" />
                </form>
            </div>
        </>
    )
}

export default CreateNewNote;
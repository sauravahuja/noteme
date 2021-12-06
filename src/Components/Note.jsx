import { NavLink } from 'react-router-dom';
import EditNote from './EditNote';
import './style.css';

const Note = (props) => {
    let categoryColor = props.categoryColor;
    let title;
    let noteDeleteName = props.title;
    title = noteDeleteName;
    noteDeleteName = noteDeleteName.replace(/ +/g, "").toLowerCase();

    const noteDelete = (e) => {
        console.log(e.target.id);
        let ansConfirm = window.confirm("Are you sure want to delete the note - '" + title + "'")
        if (ansConfirm) {
            localStorage.removeItem(noteDeleteName);
            alert("Note Deleted Successfully!")
            window.location.reload();
        }
    }

    return (
        <>
            <div className="note-container" id={props.linkToMore}>
                <div className="note-wrapper">
                    <div className="d-flex note-control">
                        <p className="note-category" style={{ color: categoryColor }}> <span className="note-highlight" style={{ background: categoryColor }}></span>{props.category}</p>
                        <div className="d-flex">
                            <NavLink to={`/edit/${noteDeleteName}`} id={`${noteDeleteName}`} className="px-5 link-edit" onClick={EditNote}>🖊️</NavLink>
                            <p id={`${noteDeleteName}`} className="px-5" onClick={noteDelete}>❌</p>
                        </div>
                    </div>
                    <p className="note-header">{props.title}</p>
                    <p className="note-sub-header">{props.subTitle}</p>
                    <pre className="note-body">
                        {props.body}
                    </pre>
                    <div className="btn-container">
                        <NavLink to={"./" + props.linkToMore} className="btn btn-primary">See More</NavLink>
                    </div>
                    <p className="note-timestamp">{props.timestamp}</p>
                </div>
            </div>
        </>
    );
};

export default Note;
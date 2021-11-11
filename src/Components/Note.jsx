import './style.css';

const Note = () => {
    let month = {
        0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sept", 9: "Oct", 10: "Nov", 11: "Dec"
    }
    let date = new Date();
    let todayDate = date.getDate();
    let todayMonth = month[date.getUTCMonth()];
    let todayYear = date.getFullYear();

    let fullDate = todayDate + " " + todayMonth + " " + todayYear;

    return (
        <>
            <div className="note-container">
                <div className="note-wrapper">
                    <p className="note-category"> <span className="note-highlight"></span> Todo</p>
                    <p className="note-header">Walmart List</p>
                    <p className="note-sub-header">Get things having fresh dates</p>
                    <pre className="note-body">
                        {`Things to Buy 
1) Buy Grocery
2) Buy Laptop Stand
3) Buy Carpet
                        `}
                    </pre>
                    <div className="btn-container">
                        <a href="./" className="btn btn-primary">See More</a>
                    </div>
                    <p className="note-timestamp">{fullDate}</p>
                </div>
            </div>
        </>
    );
};

export default Note;
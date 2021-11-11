import Note from './Note';

const Notes = () => {
    return (
        <>
            <div className="search-bar">
                <input type="text" className="search" placeholder="Search Notes"/>
            </div>
            <div className="all-note-container">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </>
    );
};

export default Notes;
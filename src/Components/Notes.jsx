import { NavLink } from 'react-router-dom';
import Note from './Note';

const Notes = () => {
    let obj;
    var items = Object.entries(localStorage);

    return (
        <>
            <div className="search-bar">
                <input type="text" className="search" placeholder="Search Notes" />
            </div>
            <div className="all-note-container">
                {
                    items.map((data, index) => {
                        obj = JSON.parse(data[1]);
                        {/* console.log(obj); */ }
                        let linkToMore = obj.noteTitle;
                        linkToMore = linkToMore.replace(/ +/g, "").toLowerCase();
                        return <Note title={obj.noteTitle} subTitle={obj.noteSubTitle} body={obj.noteBody} category={obj.noteCategory} timestamp={obj.timeStamp} categoryColor={obj.noteCategoryColor} linkToMore={linkToMore} />
                    })
                }
            </div>
            <div className="add-note-btn">
                <NavLink to="/create">+</NavLink>
            </div>
        </>
    );
};

export default Notes;
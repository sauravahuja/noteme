import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Note from './Note';

const Notes = () => {
    let obj;
    var items = Object.entries(localStorage);

    // let [search, setSearch] = useState("");
    // let updateSearch = (obj) => {
    //     setSearch(obj.target.value);
    // }

    // let searchItem = search;
    // searchItem = searchItem.replace(/ +/g, "").toLowerCase();

// const getSearch = () => {
//     ele.style.border = "1px transparent solid"
// }

    return (
        <>
            <div className="search-bar" id="search-bar">
                {/* <input type="text" id="search" className="search" placeholder="Search Notes" value={search} onChange={updateSearch} onFocus={getSearch} />
                <p>{search}</p> */}
            </div>
            <div className="all-note-container">
                {
                    items.map((data, index) => {
                        obj = JSON.parse(data[1]);
                        let linkToMore = obj.noteTitle;
                        linkToMore = linkToMore.replace(/ +/g, "").toLowerCase();

                        {/* let ele = document.getElementById(searchItem);
                        {/* console.log(ele); */ }

                        {/* if (ele) {
                            ele.style.border = "1px red solid"
                        } */}

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
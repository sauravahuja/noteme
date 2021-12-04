import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import './style.css'

const ViewMore = () => {
    const { viewMoreSlug } = useParams();
    let data = localStorage.getItem(viewMoreSlug);
    data = JSON.parse(data);
    console.log(data);
    return (
        <>
            <div className="all-note-container">
                <p className="text-center breadcrums"> <NavLink to="/">Home</NavLink> &gt; {data.noteTitle}</p>
                <p className="note-category" style={{ color: data.noteCategoryColor }}>
                    <span className="note-highlight" style={{ background: data.noteCategoryColor }}></span>
                    {data.noteCategory}
                </p>
                <h1 className="note-title pt-20">{data.noteTitle}</h1>
                <p className="note-sub-title">{data.noteSubTitle}</p>
                <pre className="note-main-body">
                    {data.noteBody}
                </pre>
                <hr className="o-5 mt-30" />
                <p className="note-timestamp pt-20">{data.timeStamp}</p>
            </div>
        </>
    )
}

export default ViewMore;
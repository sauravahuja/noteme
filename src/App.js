import { Route, Routes } from "react-router";
import "./app.css";
import CreateNewNote from "./Components/CreateNewNote";
import ViewMore from "./Components/ViewMore";

import Navbar from './Components/Navbar';
import Notes from "./Components/Notes";
import EditNote from "./Components/EditNote";
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/create" element={<CreateNewNote />} />
                <Route path="/view/:viewMoreSlug" element={<ViewMore />} />
                <Route path="/edit/:editNoteSlug" element={<EditNote />} />
                <Route path="/404" element={<Notes />} />
            </Routes>
        </>
    )

}
export default App;
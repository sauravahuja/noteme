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
                <Route path="/:viewMoreSlug" element={<ViewMore />} />
                <Route path="/edit/:editNoteSlug" element={<EditNote />} />
            </Routes>
        </>
    )

}
export default App;
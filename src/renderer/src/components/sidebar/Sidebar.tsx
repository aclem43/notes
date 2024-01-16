import "../../assets/sidebar.css";
import Folder from "./Folder";


export default function Sidebar(): JSX.Element {
    return (
        <div className="sidebar">
            <div className="search">
                <input placeholder="Search..."></input>
            </div>
            <div className="pinned-notes">
                <h3>Pinned</h3>
                <div className="note">Pin 1</div>
                <div className="note">Pin 2</div>
                <div className="note">Pin 3</div>
            </div>
            <div className="notes">
                <Folder />
            </div>
        </div>
    )
}
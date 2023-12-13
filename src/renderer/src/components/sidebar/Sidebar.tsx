import Folder from "./folder";


export default function Sidebar(): JSX.Element {
    return (
        <div className="sidebar">
            <div className="search">
                <input placeholder="Search..."></input>
            </div>
            <div className="pinned-notes">
                <h3>Pinned</h3>
                <ol>
                    <li>Pin 1</li>
                    <li>Pin 2</li>
                    <li>Pin 3</li>
                </ol>
            </div>
            <div className="notes">
                <Folder />
            </div>
        </div>
    )
}
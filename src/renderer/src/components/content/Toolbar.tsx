import { BiBold, BiHeading, BiItalic, BiPlus, BiSave, BiTrash } from "react-icons/bi";
import "../../assets/content/toolbar.css";


export default function Toolbar(): JSX.Element {

    return (
        <div className="toolbar">
            <div className="toolbar-group noselect">
                <button><BiHeading></BiHeading></button>
                <button><BiItalic></BiItalic></button>
                <button><BiBold></BiBold></button>
            </div>
            <div className="toolbar-group noselect">
                <button><BiPlus></BiPlus></button>
                <button><BiSave></BiSave></button>
                <button><BiTrash></BiTrash></button>
            </div>
        </div>
    )
}

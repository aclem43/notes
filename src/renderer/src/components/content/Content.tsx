import { BiBold, BiHeading, BiItalic, BiPlus, BiSave, BiTrash } from "react-icons/bi";
import "../../assets/content.css";
export default function Content(): JSX.Element {

    function onType(e: React.ChangeEvent<HTMLDivElement>) {
        console.log(e.target.innerHTML)
    }


    return (
        <div className="content">
            <div className="editor">
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
                <div className="text-editor" contentEditable="true" onInput={onType} >
                </div>
            </div>
        </div >
    )
}
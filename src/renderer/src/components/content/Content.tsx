import { BiSave } from "react-icons/bi";
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
                        <button>H</button>
                        <button style={{ fontStyle: 'italic' }}>I</button>
                        <button>B</button>
                    </div>
                    <div className="toolbar-group noselect">
                        <button>1</button>
                        <button>2</button>
                        <button><BiSave></BiSave></button>
                    </div>

                </div>
                <div className="text-editor" contentEditable="true" onInput={onType} >
                </div>
            </div>
        </div >
    )
}
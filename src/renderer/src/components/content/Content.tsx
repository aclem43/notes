import "../../assets/content/content.css";
import Toolbar from "./Toolbar";
export default function Content(): JSX.Element {

    function onType(e: React.ChangeEvent<HTMLDivElement>) {
        console.log(e.target.innerHTML)
    }


    return (
        <div className="content">
            <div className="editor">

                <Toolbar></Toolbar>
            </div>
            <div className="text-editor" contentEditable="true" onInput={onType} >
            </div>
        </div>
    )
}
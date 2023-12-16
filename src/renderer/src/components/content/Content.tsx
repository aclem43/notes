import "../../assets/content.css"

export default function Content(): JSX.Element {

    function onType(e: React.ChangeEvent<HTMLDivElement>) {
        console.log(e.target.innerHTML)
    }


    return (
        <div className="content">
            <div className="editor">
                <div className="toolbar"> </div>
                <div className="text-editor" contentEditable="true" onInput={onType} >
                </div>
            </div>
        </div>
    )
}
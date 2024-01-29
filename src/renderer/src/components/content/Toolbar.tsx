import { BiBold, BiHeading, BiItalic, BiPlus, BiSave, BiTrash } from "react-icons/bi";
import "../../assets/content/toolbar.css";


interface ContentProps {
    events: {
        onSave: () => void
    }
}


export default function Toolbar(props: ContentProps): JSX.Element {
    const { events } = props;
    return (
        <div className="toolbar">
            <div className="toolbar-group noselect">
                <button><BiHeading></BiHeading></button>
                <button><BiItalic></BiItalic></button>
                <button><BiBold></BiBold></button>
            </div>
            <div className="toolbar-group noselect">
                <button><BiPlus></BiPlus></button>
                <button onClick={events.onSave}><BiSave></BiSave></button>
                <button ><BiTrash></BiTrash></button>
            </div>
        </div>
    )
}

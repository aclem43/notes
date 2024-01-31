
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { NoteType } from '@renderer/data/notes';
const theme = {

}
function onError(error) {
    console.error(error);
}

interface TextEditorProps {
    note: {
        value: NoteType
        set: (note: NoteType) => void
    }
}

export default function TextEditor(props: TextEditorProps): JSX.Element {
    const { note } = props
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,

        nodes: [
            AutoLinkNode, LinkNode
        ]
    };

    return (
        <LexicalComposer initialConfig={initialConfig} >
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}

            />
            <HistoryPlugin />
        </LexicalComposer>
    );
}
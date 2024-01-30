
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
const theme = {

}
function onError(error) {
    console.error(error);
}
export default function TextEditor(): JSX.Element {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig} >
            <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}

            />
            <HistoryPlugin />
        </LexicalComposer>
    );
}
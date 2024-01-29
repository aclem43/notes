import { useState } from 'react'
import Content from './components/content/Content'
import Sidebar from './components/sidebar/Sidebar'
import { generateEmptyNote } from './data/notes'

function App(): JSX.Element {

  const [note, setNote] = useState(generateEmptyNote())

  return (
    <div className="root">
      <Sidebar note={{
        value: note,
        set: setNote
      }} />
      <Content note={{
        value: note,
        set: setNote
      }} />
    </div>
  )
}

export default App

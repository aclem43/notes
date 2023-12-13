import Content from './components/Content'
import Sidebar from './components/sidebar/Sidebar'

function App(): JSX.Element {
  return (
    <div className="root">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App

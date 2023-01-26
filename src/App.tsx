import Sidebar from './containers/Sidebar'
import './App.css'

const App = () => {
  const getBanner = () => {
    const message = "Hi, I'm Gaurav, Web Developer"

    const elements = message
      .split('')
      .map((elem) => <span className="banner-letter">{elem}</span>)

    return elements
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="page-container">
        <div>{getBanner()}</div>
      </div>
    </div>
  )
}

export default App

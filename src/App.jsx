import style from "./App.module.css"
import Home from './Pages/home'
import Layout from "./components/Layout"

function App() {
  return (
    <div className={style.app}>
      <Layout />
      <Home />
    </div>
  )
}

export default App
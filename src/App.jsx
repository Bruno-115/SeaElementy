import { useState } from 'react'
import './../css/style.css'
import Header from './Header'
import Info from './Info'
import About from './About'
function App() {
  const [amz,setAmz] = useState(false)
  const [sea,setSea] = useState(true)
  const [sno,setSno] = useState(false)

  return (
    <>
    <Header />
    <About />
    <Info setSno={setSno} setSea={setSea}  setAmz={setAmz} amz={amz} sea={sea} sno={sno} />
    </>
  )
}

export default App

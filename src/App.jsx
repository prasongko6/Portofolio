import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Sidenav />
    <Main />
    <Work />
    <Project />
    {/* <Contact /> */}
   </div>
  )
}

export default App

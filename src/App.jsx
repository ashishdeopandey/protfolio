import styles from './App.module.css'
import { About } from './components/About/About'
import { Head } from './components/Head/Head'
import { Navbar } from './components/Navbar/Navbar'
import {Experience} from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Head/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App

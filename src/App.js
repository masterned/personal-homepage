import React from 'react'
import './App.css'
import Resume from './Resume'
import AboutMe from './AboutMe'

const App = () => (
  <article>
    <header>
      <h1>Spencer's Personal Website</h1>
      <small>I still need to come up with a name</small>
      <menu>
        <li><button>AboutMe</button></li>
        <li><button>Resume</button></li>
      </menu>
    </header>
    <main>
      <AboutMe />
      <Resume />
    </main>
    <footer></footer>
  </article>
)

export default App

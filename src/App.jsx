import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Spells from "./pages/Spells"
import Characters from "./pages/Characters"
import CharactersDetail from "./pages/CharactersDetail"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import AudioPlayer from "./components/AudioPlayer"
import themeMusic from '../src/assets/mp3/soundtrack.mp3'

function App() {

  return (
    <>
      <Navbar />
      <AudioPlayer src={themeMusic} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharactersDetail />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App

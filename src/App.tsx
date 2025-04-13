import Certification from "./components/Certification"
import Introduction from "./components/Introduction"
import NavigationBar from "./components/NavigationBar"
import PreviousWork from "./components/PreviousWork"
import Project from "./components/Project"
import Publication from "./components/Publication"
import Skill from "./components/Skill"

function App() {

  return (
    <div id="appContainer" className="bg-zinc-900 text-white">
      <NavigationBar />
      <Introduction />
      <Skill />
      <PreviousWork />
      <Publication />
      <Project />
      <Certification />
    </div>
  )
}

export default App

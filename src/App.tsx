import Certification from "./components/Certification"
import Introduction from "./components/Introduction"
import NavigationBar from "./components/NavigationBar"
import PreviousWork from "./components/PreviousWork"
import Project from "./components/Project"
import Publication from "./components/Publication"
import Skill from "./components/Skill"

function App() {

  return (
    <>
      <NavigationBar />
      <Introduction />
      <Skill />
      <PreviousWork />
      <Publication />
      <Project />
      <Certification />
    </>
  )
}

export default App

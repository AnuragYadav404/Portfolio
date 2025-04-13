import Certification from "./components/Certification"
import Introduction from "./components/Introduction"
import NavigationBar from "./components/NavigationBar"
import PreviousWork from "./components/PreviousWork"
import Project from "./components/Project"
import Publication from "./components/Publication"


function App() {

  return (
    <div id="appContainer" className="bg-zinc-900 text-white">
      <div className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
          <NavigationBar />
        <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
          <Introduction />
          <PreviousWork />
          <Publication />
          <Project />
          <Certification />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

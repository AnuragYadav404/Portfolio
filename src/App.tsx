import Introduction from "./components/Introduction"
import NavigationBar from "./components/NavigationBar"
import PreviousWork from "./components/PreviousWork"
import Project from "./components/Project"
import Publication from "./components/Publication"
import CodeProject from "./components/CodeProjects"


function App() {

  return (
    <div id="appContainer">
      <div className="flex flex-col justify-center px-8 text-gray-900 antialiased">
          <NavigationBar />
        <main className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased">
          <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
          <Introduction />
          <PreviousWork />
          <Publication />
          <Project />
          <CodeProject />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

import { projects } from "../data/projects"


// export interface Project {
//     title: string,
//     description: string,
//     liveUrl: URL,
//     codeUrl: URL,
// }


export default function Project() {
    return (
        <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Projects:</h1>
            <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1 mt-0 mb-0 md:mt-2 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">
            
                {projects.map((project) => {
                    return (
                        <a href={project.liveUrl.toString()} target="_blank" className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 border-slate-700 w-full">
                            <div key={project.title} className="relative h-full">
                                <div ></div>
                                <div className="flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                                    <br />
                                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{project.title}</h4>
                                    {/* <a href={project.codeUrl.toString()} target="_blank">Github</a> */}
                                    <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                                    <div className="pt-4 flex md:flex-row flex-wrap">
                                        {project.skills.map((skill) => {
                                            return (
                                                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">{skill}</p>
                                            )
                                        })}
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
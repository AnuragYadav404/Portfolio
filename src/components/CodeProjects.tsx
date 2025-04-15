import { codeProjects } from "../data/codes"

export default function CodeProject () {
    return (
        <div id="code" className="scroll-mt-28">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">Code Projects:</h1>
            <div className="p-1 mt-0 mb-0 md:mt-2 md:mb-2 mx-auto bg-opacity-60">
                {codeProjects.map((code) => {
                    return (
                        <a href={code.codeUrl.toString()} target="_blank" className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-500 w-full h-full block">
                            <div key={code.codeUrl.toString()} className="flex flex-col items-start rounded p-4 relative h-full">
                                <h4 className="text-xl font-bold tracking-tight text-gray-900 ">{code.title}</h4>
                                        {/* <a href={project.codeUrl.toString()} target="_blank">Github</a> */}
                                        <p className="leading-6 pt-4 text-gray-700 ">{code.description}</p>
                                        <div className="pt-4 flex md:flex-row flex-wrap">
                                            {code.skills.map((skill) => {
                                                return (
                                                        <p className="leading-5 mb-2 text-gray-700  rounded-md text-xs italic bg-gray-50 mr-2 px-1">{skill}</p>
                                                )
                                            })}
                                        </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
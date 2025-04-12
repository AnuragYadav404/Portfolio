import { projects } from "../data/projects"


// export interface Project {
//     title: string,
//     description: string,
//     liveUrl: URL,
//     codeUrl: URL,
// }


export default function Project() {
    return (
        <div id="projects">
            <hr />
            {projects.map((project) => {
                return (
                    <div key={project.title}>
                        <br />
                        <p>{project.title}</p>
                        <a href={project.liveUrl.toString()} target="_blank">Live</a>
                        <a href={project.codeUrl.toString()} target="_blank">Github</a>
                        <p>{project.description}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
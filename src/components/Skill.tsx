import { skills } from "../data/skills"


// export interface Skill {
//     title: string,
//     iconUrl: string,
// }

export default  function Skill() {
    return (
        <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => {
                return (
                    <div key={skill.title}>
                        <p>{skill.title}</p>
                        <img src={skill.iconUrl} alt={skill.title} className="h-12 w-12 mx-auto mb-2"/>
                    </div>
                )
            })}
        </div>
    )
}
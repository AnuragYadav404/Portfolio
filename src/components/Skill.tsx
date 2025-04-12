import { skills } from "../data/skills"


// export interface Skill {
//     title: string,
//     iconUrl: string,
// }

export default  function Skill() {
    return (
        <div id="skills">
            {skills.map((skill) => {
                return (
                    <div key={skill.title}>
                        <p>{skill.title}</p>
                        <img src={skill.iconUrl} alt={skill.title} />
                    </div>
                )
            })}
        </div>
    )
}
import { introduction } from "../data/introduction"

// export interface Introduction {
//     name: string,
//     description: string,
//     github: URL,
//     linkedin: URL,
//     photo: string,
//     location: string,
// }

export default function Introduction() {
    return (
        <div id="introduction">
            <hr />
            <p>{introduction.name}</p>
            <p>{introduction.description}</p>
            <p>{introduction.location}</p>
            <img src={introduction.photo}/>
            <a href={introduction.github.toString()} target="_blank">Github</a>
            <a href={introduction.linkedin.toString()} target="_blank">Linkedin</a>
        </div>
    )
}
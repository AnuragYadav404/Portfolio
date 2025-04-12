import { previousWorks } from "../data/previousWork"

// export interface PreviousWork {
//     role: string;
//     company: string;
//     start: string;
//     end: string,
//     description: string,
//     location: string,
// }


export default function PreviousWork() {
    return (
        <div id="previousWork">
            <hr />
            {previousWorks.map((work) => {
                return (
                    <div key={work.role}>
                        <br />
                        <p>Role: {work.role}</p>
                        <p>Company: {work.company}</p>
                        <p>Start: {work.start}</p>
                        <p>End: {work.end}</p>
                        <p>Location: {work.location}</p>
                        <p>Description: {work.description}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
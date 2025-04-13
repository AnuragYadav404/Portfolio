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
        <div>
            <h1>Previous Works:</h1>
            <div id="previousWork" className="p-1 mt-0 mb-0 md:mt-2 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">
            
                {previousWorks.map((work) => {
                    return (
                        <div key={work.role} className="sm:block rounded-lg bg-white/90 px-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-zinc-900/90 text-zinc-200 ring-white/10 m-2">
                            <div className="flex justify-between w-full p-2 mt-0 mb-0 md:mt-2 md:mb-0 mx-auto bg-zinc-900 bg-opacity-60">
                                <div>
                                    <h3>{work.role}@ <b>{work.company}</b></h3>
                                </div>
                                <div>
                                    <h3>{work.start} - {work.end}</h3>
                                </div>
                            </div>
                            <p className="pl-2 pr-2 mt-0 mb-0 md:mt-0 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">Location: {work.location}</p>
                            <p className="pl-2 pr-2 pb-4 mt-0 mb-0 md:mt-0 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">Description: {work.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
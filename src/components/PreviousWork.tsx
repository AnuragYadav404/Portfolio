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
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Previous Works:</h1>
            <div id="previousWork" className="p-1 mt-0 mb-0 md:mt-2 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">
            
                {previousWorks.map((work) => {
                    return (
                        <div key={work.role} className="sm:block rounded-lg px-4 text-sm font-medium shadow-xl shadow-zinc-100/10 ring-1 mb-6">
                            <div className="flex justify-between w-full p-2 mt-0 mb-0 md:mt-2 md:mb-0 mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{work.role}@ <b>{work.company}</b></h3>
                                </div>
                                <div>
                                    <h3>{work.start} - {work.end}</h3>
                                </div>
                            </div>
                            <p className="pl-2 pr-2 mt-0 mb-0 md:mt-0 md:mb-2 mx-auto">Location: {work.location}</p>
                            <p className="pl-2 pr-2 pb-4 mt-0 mb-0 md:mt-0 md:mb-2 mx-auto">Description: {work.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
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
        <div id="introduction" className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
            <hr />
            <div id="description" className="flex md:w-3/4 flex-col mt-6">
                <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">{introduction.name}</h2>
                <p className="text-zinc-400">{introduction.description}</p>
                <div id="profile links" className="flex justify-left">
                    <a href={introduction.github.toString()} target="_blank" className="h-12 w-12 m-2">
                        <img src="/assets/github.svg" alt="github" title="view github" />
                    </a>
                    <a href={introduction.linkedin.toString()} target="_blank" className="h-12 w-12 m-2">
                        <img src="/assets/linkedin.svg" alt="linkedin" title="view linkedin" />
                    </a>
                </div>
            </div>
            <div id="profile photo" className=" relative flex-shrink-1 p-2 md:p-2 md:order-last order-first">
                <img src={introduction.photo} className="block z-[5] overflow-hidden rounded-full shadow-xl ring-1 ring-slate-900/5 relative bg-white w-48 h-40"/>
            </div>
            
        </div>
    )
}
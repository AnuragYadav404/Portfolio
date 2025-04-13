import { publications } from "../data/publications"


// export interface Publication {
//     title: string,
//     publicationBook: string,
//     issueYear: string,
//     url: URL,
//     description: string,
// }


export default function Publication() {
    return (
        <div>
            <h1>Publications:</h1>
            <div id="publications" className="p-1 mt-0 mb-0 md:mt-2 md:mb-2 mx-auto bg-zinc-900 bg-opacity-60">
                
                {publications.map((publication) => {
                    return ( 
                            <div key={publication.title} className="sm:block rounded-lg px-4 text-sm font-medium shadow-xl shadow-zinc-100/14 ring-1 mb-6">
                                <a href={publication.url.toString()} target="_blank">
                                        <b ><h1 className="w-full p-2 mt-0 mb-0 md:mt-2 md:mb-0 mx-auto">{publication.title}</h1></b>
                                        <p className="w-full p-2 mx-auto">Publication: {publication.publicationBook}</p>
                                        <p className="w-full p-2 mx-auto">Issue Year: {publication.issueYear}</p>
                                        <p className="w-full p-2 pb-4 mx-auto">Description: {publication.description}</p>
                                </a>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}
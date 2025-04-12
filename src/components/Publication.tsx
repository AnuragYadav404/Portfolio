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
        <div id="publications">
            <hr />
            {publications.map((publication) => {
                return (
                    <div key={publication.title}>
                        <p>{publication.title}</p>
                        <p>{publication.publicationBook}</p>
                        <p>Issue Year: {publication.issueYear}</p>
                        <a href={publication.url.toString()}>View Publiction</a>
                        <p>Description: {publication.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
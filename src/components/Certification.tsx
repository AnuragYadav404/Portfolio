import { certifications } from "../data/certifications"

// export interface Certification {
//     title: string;
//     provider: string;
//     issued: string;
//     url: URL;
// }

export default function Certification() {
    return (
        <div id="certification">
            <hr />
            {certifications.map((cert) => {
                return (
                    <div key={cert.title}>
                        <br />
                        <p>Title: {cert.title}</p>
                        <p>Provider: {cert.provider}</p>
                        <p>issue: {cert.issued}</p>
                        <a href={cert.url.toString()} target="_blank">View certificate</a>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}